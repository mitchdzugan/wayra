(ns wayra.impl
  (:require #?(:clj  [cloroutine.core :refer [cr]]
               :cljs [cloroutine.core :refer-macros [cr]]))
  #?(:cljs (:require-macros [wayra.impl :refer [generator]])))

(def ^:dynamic *tail*)
(def ^:dynamic *atoms* {})

(defn gen-seq [gen]
  (binding [*tail* (lazy-seq (gen-seq gen))] (gen)))

(defn yield [x]
  (cons x *tail*))

(defn resume [] @(:a-result *atoms*))

(defn unwrap-f [mf]
  (loop [m mf]
    (if (fn? m)
      (recur (m))
      m)))

(defn eval-m [mf]
  (let [{:keys [type val err]} (unwrap-f mf)
        {:keys [a-state a-result a-error]} *atoms*]
    (reset! a-result
            ((get {:get (fn [] @a-state)
                   :pure (fn [] val)
                   :set (fn []
                          (reset! a-state val)
                          nil)
                   :error (fn []
                            (reset! a-error err)
                            nil)}
                  type)))))

#?(:clj
   (defmacro generator [& body]
     `(gen-seq (cr {yield resume} ~@body nil))))

(defn raw-exec [mf s]
  (binding [*atoms* {:a-state (atom s)
                     :a-error (atom nil)
                     :a-result (atom nil)}]
    (let [{:keys [a-state a-result a-error]} *atoms*]
      (doseq [m (unwrap-f mf)]
        (when (nil? @a-error)
          (eval-m m)))
      (merge
       (if (nil? @a-error)
         {:result @a-result}
         {:error @a-error})
       {:writer (:writer @a-state)
        :state (:state @a-state)}))))

(def raw-get
  (fn []
    (generator (yield {:type :get}))))

(defn raw-set [s]
  (fn []
    (generator (yield {:type :set :val s}))))

(defn pure [x]
  (fn []
    (generator (yield {:type :pure :val x}))))

(defn fail [err]
  (fn []
    (generator (yield {:type :error :err err}))))

