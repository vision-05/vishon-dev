(ns vishon-dev.db
  (:require [vishon-dev.views :as views]
            [vishon-dev.subs :as subs]))

(def default-db
  {:name "re-frame"
   :items ["home" "projects" "blog" "contact"]
   :cur-page :home
   :pages {:home [:div [views/nav-bar] [:h1.page "Hi, I'm vishon"]]
           :projects [:div [views/nav-bar] [:h1.page "An editor made in Clojure"] [views/content-list ::subs/project-posts]]
           :blog [:div [views/nav-bar] [:h1.page "My Blog"] [views/content-list ::subs/blog-posts]]
           :contact [:div [views/nav-bar] [:h1.page "Contact me"]]}
   :blog-posts ["#Sports\n##The definition of sports is divisive and vague. Can we change that?\nComing soon\n\nvishon"
                "#Website\n##My journey making a website\nComing soon\n\nvishon"
                "#Shone is cool\n##Very cool dude\ncool guy innit\n\nvishon"]
   :project-posts ["#bettercode\n##A code editor built in clojure\nHas a protocol for remote editing or smthn idk"
                   "#vishon.dev\n##My website (this one)\nStill completely static for the time being"
                   "#More stuff\n##More stuff coming soon\nI will be making more stuff in the future"]})
