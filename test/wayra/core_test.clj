(ns wayra.core-test
  (:require [clojure.test :refer :all]
            [wayra.core :refer :all]))

(defnm ask-test [a]
  b <- ask
  [(+ a b)])
(def asks-test
  (fnm [a]
       b <- (asks inc)
       (pure (+ a b))))
(defnm get-test
  ([a]
   b <- get
   (pure (+ a b)))
  ([a c]
   b <- get
   (pure (+ a b c))))
(defnm gets-test
  "Test docstrings."
  [a]
  b <- (gets inc)
  [(+ a b)])
(defm put-test (put 9))

(defn do-exec
  ([m] (exec {} m))
  ([r m] (exec {:reader r} m))
  ([r s m] (exec {:reader r :init-state s} m)))

(defn get-result [& args] (:result (apply do-exec args)))
(defn get-error [& args] (:error (apply do-exec args)))
(defn get-state [& args] (:state (apply do-exec args)))
(defn get-writer [& args] (:writer (apply do-exec args)))

(defm exec-in-m
  r1 <- ask
  let [ri (get-result (inc r1) ask)]
  r2 <- ask
  [[r1 r2 ri]])

(defnm abuse-macro [n]
  (= 0 n) --> (pure 1)
  let [squared (* n n)]
  (whenm (<= n 0)
         (tell "was negative"))
  (pure squared))

(defm letrec-fact
  r <- ask
  let [fact (fn [n] (if (< n 2) 1 (* n (fact (dec n)))))]
  (pure (fact r)))

(deftest core-api
  (testing "ask" (is (= (get-result 3 (ask-test 9)) 12)))
  (testing "asks" (is (= (get-result 3 (asks-test 9)) 13)))
  (testing "get" (is (= (get-result 3 6 (get-test 9)) 15)))
  (testing "get" (is (= (get-result 3 6 (get-test 9 5)) 20)))
  (testing "gets" (is (= (get-result 3 6 (gets-test 9)) 16)))
  (testing "put" (is (= (get-state 3 6 put-test) 9)))
  (testing "modify" (is (= (get-state 3 6 (modify inc)) 7)))
  (testing "tell" (is (= (get-writer (mdo (tell 1) (tell 2))) '(2 1))))
  (testing "no tell" (is (= (get-writer (put 1)) nil)))
  (testing "fail" (is (= (get-error (mdo (fail "x_x") (put 9))) "x_x")))
  (testing "fails" (is (= (get-state (mdo (fail "x_x") (put 9))) nil)))
  (testing "no fail" (is (= (get-error (put 1)) nil)))
  (testing "exec-in-m" (is (= (get-result 0 exec-in-m)
                              [0 0 1])))
  (testing "eachm" (is (= (get-writer (eachm (range 400) tell))
                          (reverse (range 400)))))
  (testing "mapm" (is (= (get-result 1 1 (mapm (fnm [_]
                                                    (modify #(* 2 %1))
                                                    curr <- get
                                                    [curr])
                                               (range 5)))
                         '(2 4 8 16 32))))
  (testing "local"
    (is (= (get-writer 10 (mdo r1 <- ask
                               (tell r1)
                               ret <- (local inc (mdo r2 <- ask
                                                      (tell r2)
                                                      [0]))
                               (tell ret)
                               r3 <- ask
                               (tell r3)))
           '(10 0 11 10))))
  (testing "listen"
    (is (= (get-writer (mdo (tell "1")
                            [ret tells] <- (listen (mdo (tell "2")
                                                        ["3"]))
                            (tell ret)
                            (tell "4")
                            (tell tells)))
           '(("2") "4" "3" "2" "1")))
    (is (= (get-writer (mdo (tell "1")
                            (listen (mdo (tell "2")
                                         (listen (tell "3"))))))
           '("3" "2" "1")))
    (is (= (get-writer (mdo (listen (fn [_] {:to nil})
                                    (mdo (tell {:to 1})))))
           {:to '(1)}))
    (is (= (get-writer (mdo (listen (mdo (tell {:to 1})))))
           '({:to 1}))))
  (testing "pass"
    (is (= (get-writer (mdo ret <- (pass (mdo (tell "2")
                                              [["3" #(if (> (count %1) 1)
                                                       %1
                                                       nil)]]))
                            (tell ret)))
           '("3")))
    (is (= (get-writer (mdo ret <- (pass (mdo (tell "1")
                                              (tell "2")
                                              [["3" #(if (> (count %1) 1)
                                                       %1
                                                       nil)]]))
                            (tell ret)))
           '("3" "2" "1")))))

(deftest maplus-types
  (testing "vector" (is (= (maplus [1 2] 3) [1 2 3])))
  (testing "list" (is (= (maplus '(2 1) 3)) '(3 2 1)))
  (testing "hashset" (is (= (maplus #{1 2} 3) #{1 2 3})))
  (testing "hashmap" (is (= (maplus {:v [1] :s #{1 2}}
                                    {:v 2 :l 1 :s 3})
                            {:v [1 2] :l '(1) :s #{1 2 3}}))))

(deftest mappend-types
  (testing "vector" (is (= (mappend [1 2] [3]) [1 2 3])))
  (testing "list" (is (= (mappend '(2 1) '(3))) '(3 2 1)))
  (testing "hashset" (is (= (mappend #{1 2} #{3}) #{1 2 3})))
  (testing "hashmap" (is (= (mappend {:v [1] :s #{1 2}}
                                     {:v [2] :l '(1) :s #{3}})
                            {:v [1 2] :l '(1) :s #{1 2 3}}))))

(deftest mempty-types
  (testing "mempty"
    (is (= (mempty {:v [1 2] :s #{3} :l '(4 5) :n nil})
           {:v [] :s #{} :l nil :n nil}))))

(deftest other-macro-features
  (testing "letrec"
    (is (= (get-result 0 6 letrec-fact) 1))
    (is (= (get-result 1 6 letrec-fact) 1))
    (is (= (get-result 2 6 letrec-fact) 2))
    (is (= (get-result 3 6 letrec-fact) 6))
    (is (= (get-result 4 6 letrec-fact) 24)))
  (testing "guard"
    (is (= (get-result 3 6 (abuse-macro 0)) 1))
    (is (= (get-writer 3 6 (abuse-macro 0)) nil)))
  (testing "whenm"
    (is (= (get-writer 3 6 (abuse-macro 2)) nil))
    (is (= (get-result 3 6 (abuse-macro 2)) 4))
    (is (= (get-writer 3 6 (abuse-macro -2)) '("was negative")))
    (is (= (get-result 3 6 (abuse-macro -2)) 4))))

(defn pre-fact [fact]
  (fn [n]
    (cond
      (< n 2) 1
      :else (* n (fact (dec n))))))

(defnm mpre-fact [fact]
  default <- (asks :default)
  [(fn [n]
     (cond
       (< n 0) default
       (< n 2) 1
       :else (* n (fact (dec n)))))])

(defnm mpre-fact2 [fact]
  default <- (asks :default)
  [{:a :a
    :fact (fn [n]
            (cond
              (< n 0) default
              (< n 2) 1
              :else (* n (fact (dec n)))))}])

(defn fpreempt
  ([f] (fpreempt identity f))
  ([from-res f]
   (let [a-f (atom nil)
         res (f (fn [& args] (apply @a-f args)))]
     (reset! a-f (from-res res))
     res)))

(deftest preempting
  (testing "fpreempt"
    (let [fact (fpreempt pre-fact)]
      (is (= (fact -1) 1))
      (is (= (fact 0) 1))
      (is (= (fact 1) 1))
      (is (= (fact 2) 2))
      (is (= (fact 3) 6))
      (is (= (fact 4) 24))))
  (testing "preemptm"
    (let [m (mdo fact <- (preemptm fpreempt mpre-fact)
                 (tell (fact -1))
                 (tell (fact 0))
                 (tell (fact 1))
                 (tell (fact 2))
                 (tell (fact 3))
                 (tell (fact 4)))]
      (is (= (get-writer {:default :NaN} m)
             '(24 6 2 1 1 :NaN))))
    (let [m (mdo {:keys [fact a]} <- (preemptm fpreempt :fact mpre-fact2)
                 (tell a)
                 (tell (fact -1))
                 (tell (fact 0))
                 (tell (fact 1))
                 (tell (fact 2))
                 (tell (fact 3))
                 (tell (fact 4)))]
      (is (= (get-writer {:default :NaN} m)
             '(24 6 2 1 1 :NaN :a))))))
