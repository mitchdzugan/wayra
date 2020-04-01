(ns wayra.core-test
  (:require [clojure.test :refer :all]
            [wayra.core :refer :all]))


(defnm ask-test [a]
  b <- ask
  (pure (+ a b)))
(def asks-test
  (fnm [a]
       b <- (asks inc)
       (pure (+ a b))))
(defnm get-test [a]
  b <- get
  (pure (+ a b)))
(defnm gets-test [a]
  b <- (gets inc)
  (pure (+ a b)))
(defm put-test (put 9))

(defn get-result [r s m]
  (:result (exec {:reader r :init-state s} m)))
(defn get-error [r s m]
  (:error (exec {:reader r :init-state s} m)))
(defn get-state [r s m]
  (:state (exec {:reader r :init-state s} m)))
(defn get-writer [r s m]
  (:writer (exec {:reader r :init-state s} m)))

(defnm abuse-macro [n]
  (= 0 n) --> (pure 1)
  (whenm (< n 0)
         (tell "was negative"))
  (pure (* n n)))

(defm letrec-fact
  r <- ask
  let [fact (fn [n] (if (< n 2) 1 (* n (fact (dec n)))))]
  (pure (fact r)))

(deftest core-api
  (testing "ask" (is (= (get-result 3 6 (ask-test 9)) 12)))
  (testing "asks" (is (= (get-result 3 6 (asks-test 9)) 13)))
  (testing "get" (is (= (get-result 3 6 (get-test 9)) 15)))
  (testing "gets" (is (= (get-result 3 6 (gets-test 9)) 16)))
  (testing "put" (is (= (get-state 3 6 put-test) 9)))
  (testing "modify" (is (= (get-state 3 6 (modify inc)) 7)))
  (testing "tell" (is (= (get-writer 3 6 (mdo (tell 1) (tell 2))) '(2 1))))
  (testing "no tell" (is (= (get-writer 3 6 (put 1)) nil)))
  (testing "fail" (is (= (get-error 3 6 (fail "x_x")) "x_x")))
  (testing "no fail" (is (= (get-error 3 6 (put 1)) nil))))

(deftest mappend-types
  (testing "vector" (is (= (mappend [1 2] 3) [1 2 3])))
  (testing "list" (is (= (mappend '(2 1) 3)) '(3 2 1)))
  (testing "hashset" (is (= (mappend #{1 2} 3) #{1 2 3})))
  (testing "hashmap" (is (= (mappend {:v [1] :s #{1 2}}
                                     {:v 2 :l 1 :s 3})
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
