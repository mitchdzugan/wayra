(ns wayra.impl
  (:require #?(:clj  [cloroutine.core :refer [cr]]
               :cljs [cloroutine.core :refer-macros [cr]]))
  #?(:cljs (:require-macros [wayra.impl :refer [mdo-raw]])))

(def ^:dynamic *coroutine*)
(def ^:dynamic *bind*)
(def ^:dynamic *result*)

(defn run [c b]
  (binding [*coroutine* c
            *bind* b] (c)))

(defn fork [c b r]
  (binding [*result* r]
    (c run b)))

(defn >>= [m]
  (*bind* (partial fork *coroutine* *bind*) m))

(defn =<< [] *result*)

#?(:clj
   (defmacro mdo-raw [monad & body]
     `(run (cr {>>= =<<} ((first ~monad) (do ~@body))) (second ~monad))))

(def state-e-monad
  [(fn [x] (fn [s] [x s]))
   (fn [f m] (fn [s] (let [[x s e] (m s)]
                       (if e [nil nil e]
                           ((f x) s)))))])

(defn raw-exec [m s]
  (let [[result raw-state raw-error] (m s)]
    (if raw-error
      {:error (:error raw-error)
       :writer (-> raw-error :raw-state :writer)
       :state (-> raw-error :raw-state :state)}
      {:result result :writer (:writer raw-state) :state (:state raw-state)})))

(defn raw-get [s]
  [s s])

(defn raw-set [s]
  (fn [_] [nil s]))

(defn fail [e] (fn [s] [nil nil {:error e :raw-state s}]))

(def pure (fn [x] (fn [s] [x s])))

