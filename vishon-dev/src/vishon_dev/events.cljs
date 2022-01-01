(ns vishon-dev.events
  (:require
   [re-frame.core :as re-frame]
   [vishon-dev.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
