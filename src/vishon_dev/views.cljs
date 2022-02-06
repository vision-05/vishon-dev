(ns vishon-dev.views
  (:require
   [re-frame.core :as re-frame]
   [vishon-dev.subs :as subs]
   [markdown-to-hiccup.core :as md]))

(defn content-to-component [content] ;;convert components to edn
  (vec (cons :ul.blogpost [(md/hiccup-in (md/md->hiccup content) :html :body)])))

(defn content-list [type]
  (let [content @(re-frame/subscribe [type])]
    (vec (cons :ul [(map content-to-component content)]))))

(defn nav-bar []
  (let [items @(re-frame/subscribe [::subs/items])]
    [:nav
     (vec (cons :ul.navbar (map #(do [:button {:on-click (fn [] (re-frame/dispatch [:vishon-dev.events/change-page (keyword %)]))} %]) items)))]))

(defn main-panel []
  (let [cur-page @(re-frame/subscribe [::subs/cur-page])
        pages @(re-frame/subscribe [::subs/pages])]
    (cur-page pages)))
