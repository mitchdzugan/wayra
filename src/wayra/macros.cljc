(ns wayra.macros
  (:require [wayra.preempt :refer [fpreempt]]
            [wayra.impl :refer [pure unwrap-f eval-m raw-get raw-exec]]
            [promesa.core :as p])
  #?(:cljs (:require-macros
            [wayra.macros :refer [letrec mdo fnm defnm defm whenm]])))


#?(:clj
   (defmacro letrec [raw-bindings & body]
     (let [bindings
           (->> raw-bindings
                (reduce (fn [{:keys [forms rec? rec-sym]} form]
                          (cond
                            (= '!rec form)
                            {:forms forms :rec? true}

                            rec?
                            {:forms (conj forms form)
                             :rec-sym form}

                            rec-sym
                            {:forms (conj forms `(fpreempt (fn [~rec-sym]
                                                             ~form)))}

                            :else
                            {:forms (conj forms form)}))
                        {:forms []})
                :forms)]
       `(let ~bindings ~@body))))

#?(:clj
   (defmacro mdo [& statements]
     (let [statements (map (fn [curr prev next]
                             (if (and (vector? curr)
                                      (not= 'let prev)
                                      (not= '<- next))
                               `(pure (do ~@curr))
                               curr))
                           statements
                           (concat [nil] statements)
                           (concat (drop 1 statements) [nil]))
           [standard recd] (split-with #(not (or (= %1 '-->)
                                                 (= %1 '<-await-)))
                                       statements)
           standard (remove #(= 'let %) standard)
           needs-rec? (> (count recd) 1)
           rec-point (-> standard count dec)
           rec-type (if (= '--> (first recd))
                      :guard
                      :await)
           with-rec (reduce
                     (fn [statements curr]
                       (if (and (= (count statements) rec-point)
                                needs-rec?)
                         (conj statements
                               (case rec-type
                                 :guard
                                 `(if ~curr
                                    ~(nth recd 1)
                                    (mdo ~@(drop 2 recd)))
                                 :await
                                 `(pure
                                   (do (p/let [monad# (eval-m raw-get)
                                               ~curr ~(nth recd 1)]
                                         (raw-exec (mdo ~@(drop 2 recd))
                                                   {:writer (:writer monad#)
                                                    :reader (:reader monad#)
                                                    :init-state (:state monad#)}))
                                       nil))))
                         (conj statements curr)))
                     []
                     standard)]
       (letfn [(make-fdo [statements]
                 (let [[curr & statements] statements
                       [arrow monad & other-statements] statements]
                   (cond
                     (nil? statements) curr
                     (= arrow (symbol '<-)) `(let [~curr (eval-m ~monad)]
                                               ~(make-fdo other-statements))
                     (vector? curr) `(letrec ~curr ~(make-fdo statements))
                     :else `(do (eval-m ~curr)
                                ~(make-fdo statements)))))]
         `(fn [] ~(make-fdo with-rec))))))

(defn add-fdo [sym]
  (fn [& statements]
    (let [fn? (= sym 'fn)
          defn? (= sym 'defn)
          n? (or defn? fn?)
          docstring? (and (not fn?) (string? (nth statements 1)))
          take-n (+ 1 (if docstring? 1 0) (if fn? -1 0))
          untouched (take take-n statements)
          add-to-fn (fn [[args & statements]]
                      `(~args (mdo ~@statements)))
          rest (drop take-n statements)
          updated (cond
                    (and n? (vector? (first rest))) (add-to-fn rest)
                    n? (map add-to-fn rest)
                    :else `((mdo ~@rest)))]
      `(~sym ~@untouched ~@updated))))

#?(:clj
   (defmacro fnm [& statements]
     (apply (add-fdo 'fn) statements)))

#?(:clj
   (defmacro defm [& statements]
     (apply (add-fdo 'def) statements)))

#?(:clj
   (defmacro defnm [& statements]
     (apply (add-fdo 'defn) statements)))

#?(:clj
   (defmacro whenm [bool & statements]
     `(if ~bool (mdo ~@statements) (pure nil))))
