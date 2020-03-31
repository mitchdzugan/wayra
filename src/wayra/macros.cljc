(ns wayra.macros
  (:require [wayra.impl :refer [mdo-raw >>= state-e-monad pure]])
  #?(:cljs (:require-macros [wayra.macros :refer [letrec mdo fnm defnm defm whenm]])))


#?(:clj
   (defmacro letrec [bindings & body]
     (let [bcnt (quot (count bindings) 2)
           arrs (gensym "bindings_array")
           arrv `(make-array Object ~bcnt)
           bprs (partition 2 bindings)
           bssl (map first bprs)
           bsss (set bssl)
           bexs (map second bprs)
           arrm (zipmap bssl (range bcnt))
           btes (map #(clojure.walk/prewalk (fn [f]
                                              (if (bsss f)
                                                `(aget ~arrs ~(arrm f))
                                                f))
                                            %)
                     bexs)]
       `(let [~arrs ~arrv]
          ~@(map (fn [s e]
                   `(aset ~arrs ~(arrm s) ~e))
                 bssl
                 btes)
          (let [~@(mapcat (fn [s]
                            [s `(aget ~arrs ~(arrm s))])
                          bssl)]
            ~@body)))))

#?(:clj
   (defmacro mdo [& statements]
     (let [statements (remove #(= 'let %) statements)
           [standard guarded] (split-with #(not (= % '-->)) statements)
           needs-guard? (> (count guarded) 1)
           guard-point (-> standard count dec)
           with-guard (reduce
                       (fn [statements curr]
                         (if (and (= (count statements) guard-point) needs-guard?)
                           (conj statements
                                 `(if ~curr
                                    ~(nth guarded 1)
                                    (mdo ~@(drop 2 guarded))))
                           (conj statements curr)))
                       []
                       standard)]
       (letfn [(make-fdo [statements]
                 (let [[curr & statements] statements
                       [arrow monad & other-statements] statements]
                   (cond
                     (nil? statements) `(>>= ~curr)
                     (vector? curr) `(letrec ~curr ~(make-fdo statements))
                     (= arrow (symbol '<-)) `(let [~curr (>>= ~monad)]
                                               ~(make-fdo other-statements))
                     :else `(do (>>= ~curr)
                                ~(make-fdo statements)))))]
         `(mdo-raw state-e-monad ~(make-fdo with-guard))))))

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
     `(if ~bool (fdo ~@statements) (pure nil))))
