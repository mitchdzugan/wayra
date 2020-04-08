(ns wayra.core
  (:require
   [wayra.impl :as impl :refer [state-e-monad >>= mdo-raw raw-get raw-set raw-exec]]
   [wayra.macros :as macros]
   [wayra.monoid :as monoid])
  #?(:cljs (:require-macros [wayra.core :refer [mdo]])))


#?(:clj (defmacro mdo [& args] `(macros/mdo ~@args)))
#?(:clj (defmacro defm [& args] `(macros/defm ~@args)))
#?(:clj (defmacro defnm [& args] `(macros/defnm ~@args)))
#?(:clj (defmacro fnm [& args] `(macros/fnm ~@args)))
#?(:clj (defmacro whenm [& args] `(macros/whenm ~@args)))
(def maplus monoid/maplus)
(def mappend monoid/mappend)
(def pure impl/pure)
(def fail impl/fail)
(def ask (mdo-raw state-e-monad (-> raw-get >>= :reader)))
(defn asks [f] (mdo-raw state-e-monad (-> ask >>= f)))
(defn tell [w]
  (mdo-raw state-e-monad
           (let [{:keys [writer] :as raw-state} (>>= raw-get)]
             (>>= (raw-set (assoc raw-state :writer
                                  (monoid/maplus writer w)))))))
(def get (mdo-raw state-e-monad (-> raw-get >>= :state)))
(defn gets [f] (mdo-raw state-e-monad (-> get >>= f)))
(defn put [s]
  (mdo-raw state-e-monad
           (let [raw-state (>>= raw-get)]
             (>>= (raw-set (assoc raw-state :state s))))))
(defn modify [f]
  (mdo-raw state-e-monad
           (let [{:keys [state] :as raw-state} (>>= raw-get)]
             (>>= (raw-set (assoc raw-state :state (f state)))))))
(defn exec [{:keys [reader init-state init-writer]} m]
  (raw-exec m {:init-writer init-writer
               :reader reader
               :state init-state
               :writer init-writer}))

(defnm local [f m]
  {:keys [reader] :as raw-state} <- raw-get
  (raw-set (assoc raw-state :reader (f reader)))
  res <- m
  new-state <- raw-get
  (raw-set (assoc new-state :reader reader))
  [res])

(defnm listen [m]
  {:keys [init-writer writer] :as raw-state} <- raw-get
  (raw-set (assoc raw-state :writer init-writer))
  res <- m
  new-state <- raw-get
  let [listened (:writer new-state)]
  (raw-set (assoc new-state :writer (mappend writer listened)))
  [[res listened]])

(defnm pass [m]
  {:keys [init-writer writer] :as raw-state} <- raw-get
  (raw-set (assoc raw-state :writer init-writer))
  [res f] <- m
  new-state <- raw-get
  let [listened (:writer new-state)]
  (raw-set (assoc new-state :writer (mappend writer (f listened))))
  [res])

