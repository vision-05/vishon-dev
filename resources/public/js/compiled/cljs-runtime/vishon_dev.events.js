goog.provide('vishon_dev.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("vishon-dev.events","initialize-db","vishon-dev.events/initialize-db",1203653080),(function (_,___$1){
return vishon_dev.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("vishon-dev.events","change-page","vishon-dev.events/change-page",-517117194),(function (db,p__39216){
var vec__39217 = p__39216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39217,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39217,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"cur-page","cur-page",-1358763608),page);
}));

//# sourceMappingURL=vishon_dev.events.js.map
