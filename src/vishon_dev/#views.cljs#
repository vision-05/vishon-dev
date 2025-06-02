(ns vishon-dev.views
  (:require
   [re-frame.core :as re-frame]
   [vishon-dev.subs :as subs]
   [markdown-to-hiccup.core :as md]))

(defn get-hiccup-el [hic el]
  (md/hiccup-in hic :html :body el))

(defn content-to-component [content] ;;convert components to edn
  (let [ctn @(re-frame/subscribe [content])]
    (md/hiccup-in (md/component (md/md->hiccup ctn)))))

(defn content-to-preview [content]
  (let [hic (md/md->hiccup content)
        title (get-hiccup-el hic :h1)]
    (vec (cons :ul.blogpost [title (get-hiccup-el hic :h2) [:button.link
                                                            {:on-click (fn [] (re-frame/dispatch [:vishon-dev.events/open-post content]))}
                                                            "read more..."]]))))

(defn content-preview-list [type]
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
