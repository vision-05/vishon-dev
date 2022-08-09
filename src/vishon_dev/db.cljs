(ns vishon-dev.db
  (:require [vishon-dev.views :as views]
            [vishon-dev.subs :as subs]
            [vishon-dev.firebase :as fb]))

(def default-db
  {:name "re-frame"
   :app (fb/init)
   :items ["home" "project-posts" "blog-posts" "contact"]
   :cur-page :home
   :pages {:home [:div [views/nav-bar] [:h1.page "Hi, I'm vishon"] [:p "Sponsored by " [:a {:href "https://nick-e.com"} "https://nick-e.com"]]]
           :project-posts [:div [views/nav-bar] [:h1.page "My projects"] [views/content-preview-list ::subs/project-posts]]
           :blog-posts [:div [views/nav-bar] [:h1.page "My Blog"] [views/content-preview-list ::subs/blog-posts]]
           :open-post [:div [views/nav-bar] [views/content-to-component ::subs/open-post]]
           :contact [:div [views/nav-bar] [:h1.page "Contact me"]]}
   :blog-posts []
   :project-posts []
   :open-post []})
