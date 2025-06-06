(ns vishon-dev.db
  (:require [vishon-dev.views :as views]
            [vishon-dev.subs :as subs]
            [vishon-dev.firebase :as fb]))

(def default-db
  {:name "re-frame"
   :app (fb/init)
   :auth nil
   :provider (fb/provider)
   :user nil
   :items ["home" "robot" "project-posts" "blog-posts" "open-post" "contact" "write"]
   :cur-page :home
   :pages {:home [:div [views/nav-bar] [:h1.page "Hi, press me to stop or start the robot"] [views/sign-in-button] [views/auth-status]]
           :robot [:div [views/nav-bar] [:h1.page "Real-time robot sensor data"] [views/robot-controls] [views/robot-sim]]
           :project-posts [:div [views/nav-bar] [:h1.page "My projects"] [views/content-preview-list ::subs/project-posts]]
           :blog-posts [:div [views/nav-bar] [:h1.page "My Blog"] [views/content-preview-list ::subs/blog-posts]]
           :open-post [:div [views/nav-bar] [views/content-to-component ::subs/open-post]]
           :contact [:div [views/nav-bar] [:h1.page "Contact me"] [views/writebutton]]
           :write [:div [views/nav-bar] [:h1.page "Write or upload post here"] [views/write-post]]}
   :blog-posts []
   :project-posts []
   :open-post []
   :sensors {:ref1 0 :ref2 0 :ref3 0 :ref4 0 :distf 0 :distl 0 :distr 0 :distb 0}})
