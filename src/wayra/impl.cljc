(ns wayra.impl)

(def ^:dynamic *atoms* {})

(defn unwrap-f [mf]
  (loop [m mf]
    (if (fn? m)
      (recur (m))
      m)))

(defn eval-m [mf]
  (let [{:keys [a-state a-result a-error]} *atoms*]
    (when (nil? @a-error)
      (let [{:keys [type val err]} (unwrap-f mf)]
        (when (nil? @a-error)
          (reset! a-result
                  ((get {:get (fn [] @a-state)
                         :pure (fn [] val)
                         :set (fn []
                                (reset! a-state val)
                                nil)
                         :error (fn []
                                  (reset! a-error err)
                                  nil)}
                        type))))))))

(defn raw-exec [mf s]
  (binding [*atoms* {:a-state (atom s)
                     :a-error (atom nil)
                     :a-result (atom nil)}]
    (let [{:keys [a-state a-result a-error]} *atoms*]
      (eval-m mf)
      (merge
       (if (nil? @a-error)
         {:result @a-result}
         {:error @a-error})
       {:writer (:writer @a-state)
        :state (:state @a-state)}))))

(def raw-get
  {:type :get})

(defn raw-set [s]
  {:type :set :val s})

(defn pure [x]
  {:type :pure :val x})

(defn fail [err]
  {:type :error :err err})

