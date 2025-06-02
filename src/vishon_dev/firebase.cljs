(ns vishon-dev.firebase
  (:require ["firebase/app" :as firebase]
            ["firebase/database" :as fbdb]
            ["firebase/auth" :as fbauth]
            [clojure.string :as str]
            [re-frame.core :as rf]
            [vishon-dev.subs :as subs]))

(defn init []
  (firebase/initializeApp
   #js {:apiKey "AIzaSyDDCJtpq9CjLLxgjydwowUpphmmEa5AVW8"
        :authDomain "vishon-portfolio.firebaseapp.com"
        :databaseURL "https://vishon-portfolio-default-rtdb.europe-west1.firebasedatabase.app" ;;use mockDB for dev
        :projectId "vishon-portfolio"
        :storageBucket "vishon-portfolio.appspot.com"
        :messagingSenderId "944467502028"
        :appId "1:944467502028:web:b1ed168be0691dbd19f369"}))

(defn auth [app]
    (fbauth/getAuth app))

(defn provider []
  (fbauth/GoogleAuthProvider.))

;;find out db data type

(defn db-reference [] ;;maybe store ref in global state
  (fbdb/ref (fbdb/getDatabase @(rf/subscribe [:vishon-dev.subs/app]))))

(defn set-db! [reference k v]
  (fbdb/set (fbdb/child reference k) v))

(defn get-db! [reference k]
  (fbdb/onValue (fbdb/child reference k) (fn [^fbdb/DataSnapshop snap] (.val snap))))

(defn get-db-content! [reference k] ;;use correct get stuff
  (js/console.log reference)
  (fbdb/onValue (fbdb/child reference k) (fn [^fbdb/DataSnapshot snap] (rf/dispatch [:vishon-dev.events/update-content
                                                                   (keyword key)
                                                                   (js->clj (.val snap))]))))
