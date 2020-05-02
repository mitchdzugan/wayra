(ns wayra.functor
  (:require [wayra.impl :as impl]))

(defprotocol Functor
  (fmap [this f] "map f over container"))

(extend-protocol Functor
  nil
  (fmap [_ _] nil)

  #?(:clj clojure.lang.PersistentVector :cljs cljs.core.PersistentVector)
  (fmap [v f] (vec (map f v)))

  #?(:clj clojure.lang.PersistentList :cljs cljs.core.List)
  (fmap [l f] (map l f))

  #?(:clj clojure.lang.LazySeq :cljs cljs.core.LazySeq)
  (fmap [l f] (map l f))

  #?(:clj clojure.lang.Cons :cljs cljs.core.Cons)
  (fmap [l f] (map l f))

  ;; TODO this is a hack because monad representation in wayra currently
  ;; TODO a function of no arguments for performance reasons. This might
  ;; TODO be the thing that causes me to change that
  #?(:clj clojure.lang.IFn :cljs function)
  (fmap [m f] (fn [] (impl/pure (f (impl/eval-m m)))))

  ;; TODO this is a hack because monad representation in wayra currently
  ;; TODO a function of no arguments for performance reasons. This might
  ;; TODO be the thing that causes me to change that
  #?(:clj clojure.lang.PersistentArrayMap :cljs cljs.core.PersistentArrayMap)
  (fmap [m f] (fn [] (impl/pure (f (impl/eval-m m))))))
