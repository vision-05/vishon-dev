(ns vishon-dev.views
  (:require
   [re-frame.core :as re-frame]
   [vishon-dev.subs :as subs]
   ))

(defn nav-bar []
  (let [items @(re-frame/subscribe [::subs/items])]
    [:div
     (vec (cons :ul (map #(do [:button %]) items)))]))

(defn main-panel []
  (let [name @(re-frame/subscribe [::subs/name])]
    [:div
     [nav-bar]
     [:h1 "Hi, I'm vishon"]]))
