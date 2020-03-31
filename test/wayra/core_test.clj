(ns wayra.core-test
  (:require [clojure.test :refer :all]
            [wayra.core :refer :all]))


(defnm ask-test [a]
  b <- ask
  (pure (+ a b)))
(defnm asks-test [a]
  b <- (asks inc)
  (pure (+ a b)))
(defnm get-test [a]
  b <- get
  (pure (+ a b)))
(defnm gets-test [a]
  b <- (gets inc)
  (pure (+ a b)))

(defn get-result [r s m]
  (:result ((exec r s) m)))
(defn get-error [r s m]
  (:error ((exec r s) m)))
(defn get-state [r s m]
  (:state ((exec r s) m)))
(defn get-writer [r s m]
  (:writer ((exec r s) m)))

(deftest core-api
  (testing "ask" (is (= (get-result 3 6 (ask-test 9)) 12)))
  (testing "asks" (is (= (get-result 3 6 (asks-test 9)) 13)))
  (testing "get" (is (= (get-result 3 6 (get-test 9)) 15)))
  (testing "gets" (is (= (get-result 3 6 (gets-test 9)) 16)))
  (testing "put" (is (= (get-state 3 6 (put 9)) 9)))
  (testing "modify" (is (= (get-state 3 6 (modify inc)) 7)))
  (testing "tell" (is (= (get-writer 3 6 (mdo (tell 1) (tell 2))) '(2 1))))
  (testing "no tell" (is (= (get-writer 3 6 (put 1)) nil)))
  (testing "fail" (is (= (get-error 3 6 (fail "x_x")) "x_x")))
  (testing "no fail" (is (= (get-error 3 6 (put 1)) nil))))

(deftest mappend-types
  (testing "vector" (is (= (mappend [1 2] 3) [1 2 3])))
  (testing "list" (is (= (mappend '(2 1) 3)) '(3 2 1))))
  (testing "hashset" (is (= (mappend #{1 2} 3) #{1 2 3})))
  (testing "hashmap" (is (= (mappend {:v [1] :s #{1 2}}
                                     {:v 2 :l 1 :s 3})
                            {:v [1 2] :l '(1) :s #{1 2 3}})))
