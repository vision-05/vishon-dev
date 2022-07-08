(ns vishon-dev.db
  (:require [vishon-dev.views :as views]
            [vishon-dev.subs :as subs]
            [vishon-dev.firebase :as fb]))

(def default-db
  {:name "re-frame"
   :app (fb/init)
   :items ["home" "projects" "blog-posts" "contact"]
   :cur-page :home
   :pages {:home [:div [views/nav-bar] [:h1.page "Hi, I'm vishon"]]
           :projects [:div [views/nav-bar] [:h1.page "My projects"] [views/content-list ::subs/project-posts :preview]]
           :blog-posts [:div [views/nav-bar] [:h1.page "My Blog"] [views/content-list ::subs/blog-posts :preview]]
           :contact [:div [views/nav-bar] [:h1.page "Contact me"]]}
   :blog-posts ["#Sports\n##The definition of sports is divisive and vague. Can we change that?\nComing soon\n\nvishon"
                "#Website\n##My journey making a website\nComing soon\n\nvishon"]
   :projects ["#bettercode\n##A code editor built in clojure\nHas a protocol for remote editing or smthn idk"
                   "#vishon.dev\n##My website (this one)\nStill completely static for the time being"
                   "#More stuff\n##More stuff coming soon\nI will be making more stuff in the future"]})
