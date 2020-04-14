(ns wayra.impl)

(def ^:dynamic *state* #?(:clj (to-array [nil nil nil])
                          :cljs #js [nil nil nil]))

(defn unwrap-f [mf]
  (loop [m mf]
    (if (fn? m)
      (recur (m))
      m)))

(defn eval-m [mf]
  (let [state (aget *state* 0)
        result (aget *state* 1)
        error (aget *state* 2)]
    (when (nil? error)
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
                        type))))))))

(defn raw-exec [mf s]
  (binding [*state* #?(:clj (to-array [s nil nil])
                       :cljs #js [s nil nil])]
    (eval-m mf)
    (let [state (aget *state* 0)
          result (aget *state* 1)
          error (aget *state* 2)]
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

(defn pure [x]
  {:type :pure :val x})

(defn fail [err]
  {:type :error :err err})

