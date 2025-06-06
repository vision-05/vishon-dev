(ns vishon-dev.events
  (:require
   [cljs.core.async :as a :refer [<! >! go]]
   ["firebase/database" :as fbdb]
   ["firebase/auth" :as fbauth]
   [re-frame.core :as re-frame]
   [vishon-dev.db :as db]
   [vishon-dev.firebase :as fb]
   [vishon-dev.views :as v]
   [vishon-dev.subs :as s]
   [clojure.string :as str]
   [ajax.core :as ajax]))

;;change all handlers to assocs

(defn set-ip [db [_ addr]]
  (assoc db :ipaddr addr))

(defn set-port [db [_ port]]
  (assoc db :port port))

(defn is-content-page? [p]
  (or (= p "project-posts") (= p "blog-posts")))

(defn change-page [ctx [_ page]]
  (println ctx)
  (let [nm (name page)
        new-ctx {:db (assoc (:db ctx) :cur-page page)}]
    (if (is-content-page? nm) (assoc new-ctx :firebase/get {:db-key nm})
        new-ctx)))

(defn open-post [db [_ content]]
  (assoc db :open-post content :cur-page :open-post))

(defn update-content [db [_ k v]]
  (js/console.log v)
  (assoc db k v))

(defn write-post [cofx [_ content t]]
  (println "STR " (str t "/" (first content)))
  (println "CO" cofx)
  {:db (:db cofx)
   :firebase/set {:db-key (str t "/" (first content)) :db-val (last content)}})

(re-frame/reg-event-fx ;;change to event fx that gets content from firebase
 ::initialize-db
 (fn [_ _]
   {:db db/default-db
    :fx [[:dispatch [::get-auth (:app db/default-db)]]]}))

(re-frame/reg-event-fx
  ::start-button
  (fn [cofx [_ ip port]]
    {:fx [[:http-xhrio {:method :PUT
                      :uri "https://localhost:8080"
                      :format (ajax/json-request-format)
                      :response-format (ajax/json-response-format {:keywords? true})}]]
     :db (:db cofx)}))

(re-frame/reg-event-fx
  ::get-sensors
  (fn [{:keys [db]}]
    (println "F")
    {:http-xhrio {:method :get
                  :uri "http://localhost:3000/sensors"
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::update-sensors]
                  :on-failure [::fail-sensors]}
     :db db}))

(re-frame/reg-event-fx
  ::kill
  (fn [cofx [_ ip port]]
    {:db (:db cofx)
     :http-xhrio {:method :post
                  :uri (str "http://localhost:3000/kill/" ip "/" port)
                  :format (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::kill-success]}}))

(re-frame/reg-event-db
  ::kill-success
  (fn [db [_ resp]]
    (println resp)
    db))

(re-frame/reg-event-fx
  ::unkill
  (fn [cofx [_ ip port]]
    {:db (:db cofx)
     :http-xhrio {:method :post
                  :uri (str "http://localhost:3000/unkill/" ip "/" port)
                  :format (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::unkill-success]}}))

(re-frame/reg-event-db
  ::unkill-success
  (fn [db [_ resp]]
    (println resp)
    db))

(re-frame/reg-event-fx
  ::send-const
  (fn [cofx [_ ip port t v]]
    {:db (:db cofx)
     :http-xhrio {:method :post
                  :uri (str "http://localhost:3000/" t "/" ip "/" port "/" v)
                  :format (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::const-success]}}))

(re-frame/reg-event-db
  ::const-success
  (fn [db [_ resp]]
    (println resp)
    db))

(re-frame/reg-event-db
  ::set-const
  (fn [db [_ v k]]
    (assoc db (keyword k) v)))

;;event for getting log

(re-frame/reg-event-fx
  ::stop-button
  (fn [db [_ ip port]]
    (assoc db :server/send {:msg "change" :ip ip :port port})))

(re-frame/reg-event-fx
 ::change-page
 change-page)

(re-frame/reg-event-db
  ::update-sensors
  (fn [db [_ result]]
    (let [old-log (:log db)
          ctx (assoc db :sensors result)
          new-ctx (assoc ctx :log (:log (:sensors ctx)))]
      (println new-ctx)
      new-ctx)))

(re-frame/reg-event-db
  ::fail-sensors
  (fn [db [_ result]]
    (println result)
    db))

(re-frame/reg-event-db
 ::open-post
 open-post)

(re-frame/reg-event-db
 ::update-content
 update-content)

(re-frame/reg-event-db
  ::set-ip
  set-ip)

(re-frame/reg-event-db
  ::set-port
  set-port)

(re-frame/reg-event-fx
  ::sign-in-success
  (fn [cofx [_ user-cred]] ;;check if user exists first to eliminate recreation on signin
    {:db (assoc (:db cofx) :user user-cred)
     :firebase/set {:db-key (str "users/" (.-uid (.-user user-cred)))
                    :db-val "hey"}}))

(re-frame/reg-event-db
  ::auth-success
  (fn [db [_ au]]
    (assoc db :auth au)))

(re-frame/reg-event-db
  ::sign-in-failure
  (fn [db [_ error]]
    (println "FAILURE" error)))

(re-frame/reg-event-fx
  ::write-post
  write-post)

(re-frame/reg-event-fx
  ::get-auth
  (fn [cofx [_ app]]
    {:db (:db cofx)
     :firebase/get-auth {:on-success [::auth-success]
                         :app app}}))

(re-frame/reg-event-fx
  :auth/sign-in
  (fn [cofx [_ auth prov]]
    {:db (:db cofx)
     :firebase/google-sign-in
      {:on-success [::sign-in-success]
       :on-failure [::sign-in-failure]
       :auth auth
       :prov prov}}))

(re-frame/reg-fx
  :firebase/google-sign-in
  (fn [{:keys [on-success on-failure auth prov]}]
    (-> (fbauth/signInWithPopup auth prov)
        (.then (fn [res]
                 (re-frame/dispatch (conj on-success res))))
        (.catch (fn [error]
                  (re-frame/dispatch (conj on-failure error)))))))

(re-frame/reg-fx
 :firebase/get
 (fn [{:keys [db-key]}]
   (fb/get-db! (fb/db-reference) db-key)))

(re-frame/reg-fx
 :firebase/set
 (fn [{:keys [db-key db-val]}]
   (fb/set-db! (fb/db-reference) db-key db-val)))

(re-frame/reg-fx
  :firebase/get-auth
  (fn [{:keys [app on-success]}]
    (re-frame/dispatch (conj on-success (fb/auth app)))))
