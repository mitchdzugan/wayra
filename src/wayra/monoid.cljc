(ns wayra.monoid (:require [clojure.set]))

(defprotocol Monoid
  (maplus [a b] "add single element")
  (mappend [a b] "combined two monoids")
  )

(extend-protocol Monoid
  nil
  (maplus [a b] (conj a b))
  (mappend [a b] b)

  #?(:clj clojure.lang.PersistentVector
     :cljs cljs.core.PersistentVector)
  (maplus [a b] (conj a b))
  (mappend [a b] (vec (concat a b)))

  #?(:clj clojure.lang.PersistentList
     :cljs cljs.core.List)
  (maplus [a b] (conj a b))
  (mappend [a b] (concat b a))

  #?(:clj clojure.lang.LazySeq
     :cljs cljs.core.LazySeq)
  (maplus [a b] (conj a b))
  (mappend [a b] (concat b a))

  #?(:clj clojure.lang.Cons
     :cljs cljs.core.Cons)
  (maplus [a b] (conj a b))
  (mappend [a b] (concat b a))

  #?(:clj clojure.lang.PersistentHashSet
     :cljs cljs.core.PersistentHashSet)
  (maplus [a b] (conj a b))
  (mappend [a b] (clojure.set/union a b))

  #?(:clj clojure.lang.PersistentArrayMap
     :cljs cljs.core.PersistentArrayMap)
  (maplus [a b]
    (let [a- (merge a (reduce-kv (fn [m k _] (assoc m k (get a k))) {} b))]
      (merge-with maplus a- b)))
  (mappend [a b]
    (let [a- (merge a (reduce-kv (fn [m k _] (assoc m k (get a k))) {} b))]
      (merge-with mappend a- b))))
