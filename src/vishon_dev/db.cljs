(ns vishon-dev.db
  (:require [vishon-dev.views :as views]
            [vishon-dev.subs :as subs]
            [vishon-dev.firebase :as fb]))

(def default-db
  {:name "re-frame"
   :app (fb/init)
   :items ["home" "projects" "blog-posts" "contact"]
   :cur-page :home
   :pages {:home [:div [views/nav-bar] [:h1.page "Hi, I'm vishon"] [:p "Sponsored by" [:a {:href "https://nick-e.com"} "nick-e.com"]]]
           :projects [:div [views/nav-bar] [:h1.page "My projects"] [views/content-list ::subs/project-posts :preview]]
           :blog-posts [:div [views/nav-bar] [:h1.page "My Blog"] [views/content-list ::subs/blog-posts :preview]]
           :contact [:div [views/nav-bar] [:h1.page "Contact me"]]}
   :blog-posts []
   :projects []})
