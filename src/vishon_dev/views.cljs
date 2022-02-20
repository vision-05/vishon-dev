(ns vishon-dev.views
  (:require
   [re-frame.core :as re-frame]
   [vishon-dev.subs :as subs]
   [markdown-to-hiccup.core :as md]))

(defn get-hiccup-el [hic el]
  (md/hiccup-in hic :html :body el))

(defn content-to-component [content] ;;convert components to edn
  (vec (cons :ul.blogpost [(md/hiccup-in (md/md->hiccup content) :html :body)])))

(defn content-to-preview [content]
  (let [hic (md/md->hiccup content)]
    (vec (cons :ul.blogpost [(get-hiccup-el hic :h1) (get-hiccup-el hic :h2) [:button.link "read more..."]]))))

(defn content-list [type md->hic]
  (let [content @(re-frame/subscribe [type])]
    (vec (cons :ul [(map ({:preview content-to-preview :full content-to-component} md->hic) content)]))))

(defn content-preview [type] ;;merge with `content-list` function
  (let [content @(re-frame/subscribe [type])]
    (vec (cons :ul [(map content-to-preview content)]))))

(defn nav-bar []
  (let [items @(re-frame/subscribe [::subs/items])]
    [:nav
     (vec (cons :ul.navbar (map #(do [:button {:on-click (fn [] (re-frame/dispatch [:vishon-dev.events/change-page (keyword %)]))} %]) items)))]))

(defn main-panel []
  (let [cur-page @(re-frame/subscribe [::subs/cur-page])
        pages @(re-frame/subscribe [::subs/pages])]
    (cur-page pages)))
