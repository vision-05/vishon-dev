(ns vishon-dev.events
  (:require
   [re-frame.core :as re-frame]
   [vishon-dev.db :as db]
   [vishon-dev.firebase :as fb]))

(defn is-content-page? [p]
  (or (= p "projects") (= p "blog-posts")))

(defn change-page [ctx [_ page]]
  (let [nm (name page)
        new-ctx {:db (assoc (:db ctx) :cur-page page)}]
    (if (is-content-page? nm) (assoc new-ctx :firebase/get {:db-key nm})
        new-ctx)))

(defn update-content [db [_ k v]]
  (js/console.log v)
  (assoc db k v))

(re-frame/reg-event-fx ;;change to event fx that gets content from firebase
 ::initialize-db
 (fn [_ _]
   {:db db/default-db}))

(re-frame/reg-event-fx
 ::change-page
 change-page)

(re-frame/reg-event-db
 ::update-content
 update-content)

(re-frame/reg-fx
 :firebase/get
 (fn [{:keys [db-key]}]
   (fb/get-db! (fb/db-reference) db-key)))

(re-frame/reg-fx
 :firebase/set
 (fn [{:keys [db-key db-val]}]
   (fb/set-db! (fb/db-reference) db-val)))
