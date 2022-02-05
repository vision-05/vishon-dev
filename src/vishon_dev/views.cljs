(ns vishon-dev.views
  (:require
   [re-frame.core :as re-frame]
   [vishon-dev.subs :as subs]
   ))

(defn nav-bar []
  (let [items @(re-frame/subscribe [::subs/items])]
    [:div
     (vec (cons :ul (map #(do [:button {:on-click (fn [] (re-frame/dispatch [:vishon-dev.events/change-page (keyword %)]))} %]) items)))]))

(defn main-panel []
  (let [cur-page @(re-frame/subscribe [::subs/cur-page])
        pages @(re-frame/subscribe [::subs/pages])]
    (cur-page pages)))
