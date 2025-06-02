(ns vishon-dev.views
  (:require
   [re-frame.core :as re-frame]
   [vishon-dev.subs :as subs]
   [markdown-to-hiccup.core :as md]))

;;TODO: upload post from file (file upload page), to destination

(defn get-hiccup-el [hic el]
  (md/hiccup-in hic :html :body el))

(defn content-to-component [content] ;;convert components to edn
  (let [ctn @(re-frame/subscribe [content])]
    (md/hiccup-in (md/component (md/md->hiccup ctn)))))

(defn content-to-preview [content]
  (let [hic (md/md->hiccup content)
        p (println content)
        title (get-hiccup-el hic :h1)
        v (println title)]
    (vec (cons :ul.blogpost [title (get-hiccup-el hic :h2) [:button.link
                                                            {:on-click (fn [] (re-frame/dispatch [:vishon-dev.events/open-post content]))}
                                                            "read more..."]]))))
(defn sign-in-button []
  (let [auth @(re-frame/subscribe [:vishon-dev.subs/auth])
        provider @(re-frame/subscribe [:vishon-dev.subs/provider])]
    (println "EEE" auth provider)
    [:button {:on-click (fn [] (re-frame/dispatch-sync [:auth/sign-in auth provider]))} "Sign In"]))

(defn auth-status []
  (let [auth @(re-frame/subscribe [:vishon-dev.subs/auth])]
    [:label (if (nil? auth) "Nil" "Logged in")]))

(defn sensor-button []
  [:button.robotcontrol {:on-click (fn [] (re-frame/dispatch [:vishon-dev.events/get-sensors]))} "Update"])

(defn dist-sensor [id]
  (let [s @(re-frame/subscribe [:vishon-dev.subs/sensors])]
    [:div.sensor.dist
     [:label.sdata (id s)]
     [:br]
     [:label.sname "hi"]]))

(defn ref-sensor [id]
  (let [s @(re-frame/subscribe [:vishon-dev.subs/sensors])
        idc (keyword (str (name id) "c"))
        idb (keyword (str (name id) "b"))]
    [:div.sensor.ref
     [:label.sdata (idc s)]
     [:br]
     [:label.sdata (idb s)]
     [:label.sname "hi"]]))

(defn robot-sim []
  [:div.robot
   [:label ""]
   (dist-sensor :distf)
   [:label ""]
   [:label ""]
   (ref-sensor :ref1)
   [:label ""]
   [:label ""]
   (ref-sensor :ref2)
   [:label ""]
   (dist-sensor :distl)
   (ref-sensor :ref3)
   (dist-sensor :distr)
   [:label ""]
   (dist-sensor :distb)
   [:label ""]])

(defn kill-switch []
  (let [ip @(re-frame/subscribe [::subs/ipaddr])
        port @(re-frame/subscribe [::subs/port])]
    [:button.robotcontrol {:on-click (fn [] (re-frame/dispatch [:vishon-dev.events/kill ip port]))} "Kill"]))

(defn unkill-switch []
  (let [ip @(re-frame/subscribe [::subs/ipaddr])
        port @(re-frame/subscribe [::subs/port])]
    [:button.robotcontrol {:on-click (fn [] (re-frame/dispatch [:vishon-dev.events/unkill ip port]))} "Restart"]))

(defn content-preview-list [type]
  (let [content @(re-frame/subscribe [type])]
    (vec (cons :ul [(map content-to-preview content)]))))

(defn nav-bar []
  (let [items @(re-frame/subscribe [::subs/items])]
    [:nav
     (vec (cons :ul.navbar (map #(do [:button {:on-click (fn [] (re-frame/dispatch [:vishon-dev.events/change-page (keyword %)]))} %]) items)))]))

(defn main-panel []
  (let [cur-page @(re-frame/subscribe [::subs/cur-page])
        pages @(re-frame/subscribe [::subs/pages])]
    (println "P " cur-page)
    (cur-page pages)))

(defn writebutton []
  [:button {:on-click (fn [] (re-frame/dispatch [:vishon-dev.events/write-post ["Post" "# Stuff\n ## More Stuff\n Greater amounts of stuff"] "blog-posts"]))} "Press to set"])

(defn write-post []
  [:div
   (writebutton)])

(defn ip-port-fields []
  (let [ip @(re-frame/subscribe [::subs/ipaddr])
        port @(re-frame/subscribe [::subs/port])]
  [:ul [:label "IP Address: "] [:input.robotcontrol
                            {:type "text"
                             :on-change #(re-frame/dispatch [:vishon-dev.events/set-ip (-> % .-target .-value)])}]
   [:label "Port: "] [:input.robotcontrol
                      {:type "text"
                       :on-change #(re-frame/dispatch [:vishon-dev.events/set-port (-> % .-target .-value)])}]]))

(defn const-confirm-button [t]
  (let [ip @(re-frame/subscribe [::subs/ipaddr])
        port @(re-frame/subscribe [::subs/port])
        v @(re-frame/subscribe [(keyword (str "vishon-dev.subs/" t))])]
    (println v)
    [:button.field {:on-click (fn [] (re-frame/dispatch [:vishon-dev.events/send-const ip port t v]))} t]))

(defn const-field [t]
    [:ul
     [const-confirm-button t]
     [:input.robotcontrol
      {:type "text"
       :on-change #(re-frame/dispatch [:vishon-dev.events/set-const (-> % .-target .-value) t])}]])

(defn robot-controls []
  [:div.robotcontrols
   [ip-port-fields]
   [sensor-button]
   [kill-switch]
   [unkill-switch]
   [:ul
    [const-field "p"]
    [const-field "i"]
    [const-field "d"]]])
