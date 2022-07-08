(ns vishon-dev.firebase
  (:require ["firebase/app" :as firebase]
            ["firebase/database" :as fbdb]
            [clojure.string :as str]
            [re-frame.core :as rf]))

(defn init []
  (firebase/initializeApp
   #js {:apiKey "AIzaSyDDCJtpq9CjLLxgjydwowUpphmmEa5AVW8"
        :authDomain "vishon-portfolio.firebaseapp.com"
        :databaseURL "http://localhost:9000?ns=vishon-portfolio" ;;use mockDB for dev
        :projectId "vishon-portfolio"
        :storageBucket "vishon-portfolio.appspot.com"
        :messagingSenderId "944467502028"
        :appId "1:944467502028:web:b1ed168be0691dbd19f369"}))

;;find out db data type

(defn db-reference [] ;;maybe store ref in global state
  (fbdb/ref (fbdb/getDatabase @(rf/subscribe [:vishon-dev.subs/app]))))

(defn set-db! [reference val]
  (fbdb/set reference val))

(defn get-db! [reference key] ;;use correct get stuff
  (js/console.log reference key (keyword key))
  (fbdb/onValue (fbdb/child reference key) (fn [^fbdb/DataSnapshot snap] (rf/dispatch [:vishon-dev.events/update-content
                                                                   (keyword key)
                                                                   (js->clj (.val snap))]))))

