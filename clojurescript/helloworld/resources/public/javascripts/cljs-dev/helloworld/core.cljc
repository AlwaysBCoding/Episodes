(ns helloworld.core
  #?(:cljs (:require [reagent.core :as reagent])))

(defn multiply-numbers [x y]
  (* x x))

(defn say-hello []
  #?(:cljs (js/console.log js/React)))
