(ns wayra.preempt)

(defn fpreempt
  ([f] (fpreempt identity f))
  ([from-res f]
   (let [a-f (atom nil)
         res (f (fn [& args] (apply @a-f args)))]
     (reset! a-f (from-res res))
     res)))
