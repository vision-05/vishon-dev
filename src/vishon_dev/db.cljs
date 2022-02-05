(ns vishon-dev.db
  (:require [vishon-dev.views :as views]))

(def default-db
  {:name "re-frame"
   :items ["home" "betterCode" "blog" "contact"]
   :cur-page :home
   :pages {:home [:div [views/nav-bar] [:h1 "Hi, I'm vishon"]]
           :betterCode [:div [views/nav-bar] [:h1 "An editor made in Clojure"]]
           :blog [:div [views/nav-bar] [:h1 "My Blog"]]
           :contact [:div [views/nav-bar] [:h1 "Contact me"]]}})
