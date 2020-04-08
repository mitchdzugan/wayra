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

(defnm abuse-macro [n]
  (= 0 n) --> (pure 1)
  (whenm (<= n 0)
         (tell "was negative"))
  (pure (* n n)))

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
  (testing "eachm" (is (= (get-writer (eachm (range 400) tell))
                          (reverse (range 400)))))
  (testing "mapm" (is (= (get-result 1 1 (mapm (fnm [_]
                                                    (modify #(* 2 %1))
                                                    curr <- get
                                                    [curr])
                                               (range 5)))
                         '(2 4 8 16 32))))
  (testing "rlocal"
    (is (= (get-writer 10 (mdo r1 <- ask
                               (tell r1)
                               ret <- (rlocal inc (mdo r2 <- ask
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
