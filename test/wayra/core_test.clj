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
(defnm put-test [v] (put v))

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
  (testing "put" (is (= (get-state 3 6 (put-test 9)) 9)))
  (testing "modify" (is (= (get-state 3 6 (modify inc)) 7)))
  (testing "tell" (is (= (get-writer 3 6 (tell 1)) '(1))))
  (testing "fail" (is (= (get-error 3 6 (fail "x_x")) "x_x"))))
