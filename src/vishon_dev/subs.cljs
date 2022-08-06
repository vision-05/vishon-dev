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

(re-frame/reg-sub
 ::blog-posts
 (fn [db]
   (:blog-posts db)))

(re-frame/reg-sub
 ::project-posts
 (fn [db]
   (:project-posts db)))

(re-frame/reg-sub
 ::open-post
 (fn [db]
   (:open-post db)))

(re-frame/reg-sub
 ::app
 (fn [db]
   (:app db)))
