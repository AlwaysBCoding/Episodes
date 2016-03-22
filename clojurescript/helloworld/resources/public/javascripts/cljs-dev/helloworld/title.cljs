(ns helloworld.title
  (:require [cljs.core.async :refer (put!)]))

(defn items-list [EVENTCHANNEL items active-item]
  [:div {:class "items-list"}
   (for [item items]
     ^{:key (:display item)}
     [:div {:class (if (= active-item item) "item active" "item")}
      [:p
       {:on-click (fn [event] (put! EVENTCHANNEL [:update-active-item {:active-item item}]))}
       (:display item)]])])

