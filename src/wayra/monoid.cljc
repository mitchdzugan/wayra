(ns wayra.monoid (:require [clojure.set]))

(defprotocol Monoid
  (maplus [a b] "add single element")
  (mappend [a b] "combined two monoids")
  (mempty [a] "get empty version of collection"))

(extend-protocol Monoid
  nil
  (maplus [a b] (conj a b))
  (mappend [a b] b)
  (mempty [_] nil)

  #?(:clj clojure.lang.PersistentVector
     :cljs cljs.core.PersistentVector)
  (maplus [a b] (conj a b))
  (mappend [a b] (vec (concat a b)))
  (mempty [_] [])

  #?(:clj clojure.lang.PersistentList
     :cljs cljs.core.List)
  (maplus [a b] (conj a b))
  (mappend [a b] (concat b a))
  (mempty [_] nil)

  #?(:clj clojure.lang.LazySeq
     :cljs cljs.core.LazySeq)
  (maplus [a b] (conj a b))
  (mappend [a b] (concat b a))
  (mempty [_] nil)

  #?(:clj clojure.lang.Cons
     :cljs cljs.core.Cons)
  (maplus [a b] (conj a b))
  (mappend [a b] (concat b a))
  (mempty [_] nil)

  #?(:clj clojure.lang.PersistentHashSet
     :cljs cljs.core.PersistentHashSet)
  (maplus [a b] (conj a b))
  (mappend [a b] (clojure.set/union a b))
  (mempty [_] #{})

  #?(:clj clojure.lang.PersistentArrayMap
     :cljs cljs.core.PersistentArrayMap)
  (maplus [a b]
    (let [a- (merge a (reduce-kv (fn [m k _] (assoc m k (get a k))) {} b))]
      (merge-with maplus a- b)))
  (mappend [a b]
    (let [a- (merge a (reduce-kv (fn [m k _] (assoc m k (get a k))) {} b))]
      (merge-with mappend a- b)))
  (mempty [m] (reduce-kv #(assoc %1 %2 (mempty %3)) {} m)))
