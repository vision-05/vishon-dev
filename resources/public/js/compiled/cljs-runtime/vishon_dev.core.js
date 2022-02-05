goog.provide('vishon_dev.core');
vishon_dev.core.dev_setup = (function vishon_dev$core$dev_setup(){
if(vishon_dev.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
vishon_dev.core.mount_root = (function vishon_dev$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vishon_dev.views.main_panel], null),root_el);
});
vishon_dev.core.init = (function vishon_dev$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vishon-dev.events","initialize-db","vishon-dev.events/initialize-db",1203653080)], null));

vishon_dev.core.dev_setup();

return vishon_dev.core.mount_root();
});

//# sourceMappingURL=vishon_dev.core.js.map
