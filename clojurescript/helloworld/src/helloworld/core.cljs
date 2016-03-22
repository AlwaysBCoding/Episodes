(ns helloworld.core
  (:require-macros [cljs.core.async.macros :refer (go)])
  (:require [reagent.core :as reagent]
            [helloworld.title :refer (items-list)]
            [cljs.core.async :refer (chan put! <!)]))

(def EVENTCHANNEL (chan))

(defonce app-state
  (reagent/atom
   {:message "Hello from App State"
    :items [{:display "Item 1"}
            {:display "Item 2"}
            {:display "Item 3"}
            {:display "Item 4"}
            {:display "Item 5"}]
    :active-item {}}))

(def EVENTS
  {:update-active-item (fn [{:keys [active-item]}]
                         (swap! app-state assoc-in [:active-item] active-item))})

(go
  (while true
    (let [[event-name event-data] (<! EVENTCHANNEL)]
      ((event-name EVENTS) event-data))))

(defn header [message]
  [:div {:on-click (fn [event] (swap! app-state assoc-in [:message] "Another New Message"))}
   [:h2 {:class "title"} message]])

(defn app []
  [:div {:class "container"}
   [header (:message @app-state)]
   [items-list EVENTCHANNEL (:items @app-state) (:active-item @app-state)]])

(reagent/render [app] (js/document.querySelector "#cljs-target"))
