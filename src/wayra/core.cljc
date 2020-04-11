(ns wayra.core
  (:require
   [wayra.impl :as impl :refer [raw-get raw-set raw-exec]]
   [wayra.macros :as macros]
   [wayra.monoid :as monoid])
  #?(:cljs (:require-macros [wayra.core :refer [mdo defm defnm fnm whenm]])))


#?(:clj (defmacro mdo [& args] `(macros/mdo ~@args)))
#?(:clj (defmacro defm [& args] `(macros/defm ~@args)))
#?(:clj (defmacro defnm [& args] `(macros/defnm ~@args)))
#?(:clj (defmacro fnm [& args] `(macros/fnm ~@args)))
#?(:clj (defmacro whenm [& args] `(macros/whenm ~@args)))
(def mempty monoid/mempty)
(def maplus monoid/maplus)
(def mappend monoid/mappend)
(def pure impl/pure)
(def fail impl/fail)

(defm ask
  raw-state <- raw-get
  [(:reader raw-state)])

(defnm asks [f]
  reader <- ask
  [(f reader)])

(defnm tell [w]
  {:keys [writer] :as raw-state} <- raw-get
  (raw-set (assoc raw-state :writer (monoid/maplus writer w))))

(defm get
  raw-state <- raw-get
  [(:state raw-state)])

(defnm gets [f]
  state <- get
  [(f state)])

(defnm put [s]
  raw-state <- raw-get
  (raw-set (assoc raw-state :state s)))

(defnm modify [f]
  {:keys [state] :as raw-state} <- raw-get
  (raw-set (assoc raw-state :state (f state))))

(defn exec [{:keys [reader init-state init-writer]} m]
  (raw-exec m {:init-writer init-writer
               :reader reader
               :state init-state
               :writer init-writer}))

(defn mapm [f s]
  (fn []
    (if (empty? s) (pure '())
        (pure (reverse
               (loop [[x & xs] s
                      acc nil]
                 (if (nil? xs)
                   (conj acc (impl/eval-m (f x)))
                   (recur xs (conj acc (impl/eval-m (f x)))))))))))

(defn eachm [s f]
  (fn []
    (doseq [v s]
      (impl/eval-m (f v)))
    (pure nil)))

(defn preemptm
  ([preempter f] (preemptm preempter identity f))
  ([preempter from-res f]
   (pure (preempter from-res #(impl/eval-m (f %1))))))

(defnm local [f m]
  {:keys [reader] :as raw-state} <- raw-get
  (raw-set (assoc raw-state :reader (f reader)))
  res <- m
  new-state <- raw-get
  (raw-set (assoc new-state :reader reader))
  [res])

(defnm listen
  ([m] (listen identity m))
  ([alter-init m]
   {:keys [init-writer writer] :as raw-state} <- raw-get
   (raw-set (assoc raw-state :writer (alter-init init-writer)))
   res <- m
   new-state <- raw-get
   let [listened (:writer new-state)]
   (raw-set (assoc new-state :writer (mappend writer listened)))
   [[res listened]]))

(defnm pass
  ([m] (pass identity m))
  ([alter-init m]
   {:keys [init-writer writer] :as raw-state} <- raw-get
   (raw-set (assoc raw-state :writer (alter-init init-writer)))
   [res f] <- m
   new-state <- raw-get
   let [listened (:writer new-state)]
   (raw-set (assoc new-state :writer (mappend writer (f listened))))
   [res]))

