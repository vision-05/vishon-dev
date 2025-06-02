(ns vishon-dev.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [vishon-dev.firebase :as fb]
   [vishon-dev.events :as events]
   [vishon-dev.views :as views]
   [vishon-dev.config :as config]
   [day8.re-frame.http-fx]))


(defn start-tick []
  (js/setInterval
    #(re-frame/dispatch [:vishon-dev.events/get-sensors])
    1000))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (start-tick)
  (dev-setup)
  (mount-root))
