(ns vishon-dev.events
  (:require
   [re-frame.core :as re-frame]
   [vishon-dev.db :as db]
   ))

(defn change-page [db [_ page]]
  (assoc db :cur-page page))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::change-page
 change-page)
