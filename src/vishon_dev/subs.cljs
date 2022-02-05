(ns vishon-dev.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::items
 (fn [db]
   (:items db)))

(re-frame/reg-sub
 ::cur-page
 (fn [db]
   (:cur-page db)))

(re-frame/reg-sub
 ::pages
 (fn [db]
   (:pages db)))