(ns wayra.core
  (:require
   [wayra.impl :as impl :refer [raw-get raw-set raw-exec]]
   [wayra.macros :as macros]
   [wayra.functor :as functor]
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
(defn <#> [root & fns] (reduce #(functor/fmap %1 %2) root fns))
(defn >>= [root & fns] (reduce #(fn [] (%2 (impl/eval-m %1))) root fns))

(def pure impl/pure)
(def fail impl/fail)

(def ask (<#> raw-get :reader))

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

(defn put [s]
  (>>= raw-get
       #(raw-set (assoc %1 :state s))))

(defn modify [f]
  (>>= raw-get
       #(raw-set (assoc %1 :state (f (:state %1))))))

(defn exec [{:keys [reader init-state init-writer]} m]
  (raw-exec m {:reader reader
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

(defm erased
  {:keys [writer]} <- raw-get
  [(mempty writer)])

(defnm listen
  ([m] (listen identity m))
  ([alter-init m]
   init-writer <- erased
   {:keys [writer] :as raw-state} <- raw-get
   (raw-set (-> raw-state
                (assoc :writer (alter-init init-writer))))
   res <- m
   new-state <- raw-get
   let [listened (:writer new-state)]
   (raw-set (-> new-state
                (assoc :writer (mappend writer listened))))
   [[res listened]]))

(defnm pass
  ([m] (pass identity m))
  ([alter-init m]
   init-writer <- erased
   {:keys [writer] :as raw-state} <- raw-get
   (raw-set (-> raw-state
                (assoc :writer (alter-init init-writer))))
   [res f] <- m
   new-state <- raw-get
   let [listened (:writer new-state)]
   (raw-set (-> new-state
                (assoc :writer (mappend writer (f listened)))))
   [res]))

