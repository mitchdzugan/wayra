(ns wayra.impl
  #?(:cljs (:require-macros
            [wayra.impl :refer [pure]])))

(def ^:dynamic *state* #?(:clj (atom {:s nil :r nil :e nil})
                          :cljs #js [nil nil nil]))

(defn unwrap-f [mf]
  (loop [m mf]
    (cond
      #?(:clj (:e @*state*)
         :cljs (aget *state* 2)) {:type :pure :val nil}
      (fn? m) (recur (m))
      :else m)))

(defn eval-m [mf]
  #?(:cljs
     (when (nil? (aget *state* 2))
       (let [{:keys [type val err]} (unwrap-f mf)]
         (when (nil? (aget *state* 2))
           (aset *state* 1
                 ((get {:get (fn [] (aget *state* 0))
                        :pure (fn [] val)
                        :set (fn []
                               (aset *state* 0 val)
                               nil)
                        :error (fn []
                                 (aset *state* 2 err)
                                 nil)}
                       type))))))
     :clj
     (when (nil? (:e @*state*))
       (let [{:keys [type val err]} (unwrap-f mf)]
         (when (nil? (:e @*state*))
           (let [r ((get {:get (fn [] (:s @*state*))
                          :pure (fn [] val)
                          :set (fn []
                                 (swap! *state*
                                        (fn [s]
                                          (assoc s :s val)))
                                 nil)
                          :error (fn []
                                   (swap! *state*
                                          (fn [s]
                                            (assoc s :e err)))
                                   nil)}
                         type))]
             (swap! *state* #(assoc %1 :r r))
             r
             ))))))

(defn raw-exec [mf s]
  (binding [*state* #?(:clj (atom {:s s :r nil :e nil})
                       :cljs #js [s nil nil])]
    (eval-m mf)
    (let #?(:cljs [state (aget *state* 0)
                   result (aget *state* 1)
                   error (aget *state* 2)]
            :clj [{state :s error :e result :r} @*state*])
      (merge
       (if (nil? error)
         {:result result}
         {:error error})
       {:writer (:writer state)
        :state (:state state)}))))

(def raw-get
  {:type :get})

(defn raw-set [s]
  {:type :set :val s})

#?(:clj
   (defmacro pure [x]
     `(fn []
        {:type :pure :val ~x})))

(defn fail [err]
  {:type :error :err err})

