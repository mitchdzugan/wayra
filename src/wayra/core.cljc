(ns wayra.core
  (:require
   [wayra.impl :as impl :refer [state-e-monad >>= mdo-raw raw-get raw-set raw-exec]]
   [wayra.macros :as macros])
  #?(:cljs (:require-macros [wayra.core :refer [mdo]])))


#?(:clj (defmacro mdo [& args] `(macros/mdo ~@args)))
#?(:clj (defmacro defm [& args] `(macros/defm ~@args)))
#?(:clj (defmacro defnm [& args] `(macros/defnm ~@args)))
#?(:clj (defmacro fnm [& args] `(macros/fnm ~@args)))
#?(:clj (defmacro whenm [& args] `(macros/whenm ~@args)))
(def pure impl/pure)
(def fail impl/fail)
(def ask (mdo-raw state-e-monad (-> raw-get >>= :reader)))
(defn asks [f] (mdo-raw state-e-monad (-> ask >>= f)))
(defn tell [w]
  (mdo-raw state-e-monad
           (let [{:keys [writer] :as raw-state} (>>= raw-get)]
             (>>= (raw-set (assoc raw-state :writer (conj writer w)))))))
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
(defn exec [reader initial-state]
  (fn [m]
    (raw-exec m {:reader reader
                 :state initial-state
                 :writer nil})))
