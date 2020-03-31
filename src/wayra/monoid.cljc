(ns wayra.monoid)

(defprotocol Monoid
  (mappend [a b] "join together"))

(extend-protocol Monoid
  #?(:clj clojure.lang.PersistentVector
     :cljs cljs.core.PersistentVector)
  (mappend [a b] (concat a b))

  #?(:clj clojure.lang.PersistentList
     :cljs cljs.core.List)
  (mappend [a b] (concat a b))

  #?(:clj clojure.lang.PersistentHashSet
     :cljs cljs.core.PersistentHashSet)
  (mappend [a b] (clojure.set/union a b))

  #?(:clj clojure.lang.PersistentArrayMap
     :cljs cljs.core.PersistentArrayMap)
  (mappend [a b] (merge-with mappend a b)))
