(ns wayra.runner
  (:require
    [doo.runner :refer-macros [doo-tests]]
    [wayra.core-test]))

(doo-tests 'wayra.core-test)
