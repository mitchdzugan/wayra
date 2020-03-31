(ns wayra.monoid)

(defprotocol Monoid
  (mappend [a b] "join together"))

(extend-protocol Monoid
  nil
  (mappend [a b] (conj a b))

  #?(:clj clojure.lang.PersistentVector
     :cljs cljs.core.PersistentVector)
  (mappend [a b] (conj a b))

  #?(:clj clojure.lang.PersistentList
     :cljs cljs.core.List)
  (mappend [a b] (conj a b))

  #?(:clj clojure.lang.PersistentHashSet
     :cljs cljs.core.PersistentHashSet)
  (mappend [a b] (conj a b))

  #?(:clj clojure.lang.PersistentArrayMap
     :cljs cljs.core.PersistentArrayMap)
  (mappend [a b]
    (let [a- (merge a (reduce-kv (fn [m k _] (assoc m k (get a k))) {} b))]
      (merge-with mappend a- b))))
