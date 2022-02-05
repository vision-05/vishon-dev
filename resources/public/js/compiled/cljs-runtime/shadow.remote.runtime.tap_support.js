goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36520,p__36521){
var map__36522 = p__36520;
var map__36522__$1 = cljs.core.__destructure_map(map__36522);
var svc = map__36522__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36522__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36522__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36522__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36523 = p__36521;
var map__36523__$1 = cljs.core.__destructure_map(map__36523);
var msg = map__36523__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36523__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36523__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36523__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36523__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36528,p__36529){
var map__36530 = p__36528;
var map__36530__$1 = cljs.core.__destructure_map(map__36530);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36530__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36531 = p__36529;
var map__36531__$1 = cljs.core.__destructure_map(map__36531);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36531__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36532,p__36533){
var map__36534 = p__36532;
var map__36534__$1 = cljs.core.__destructure_map(map__36534);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36534__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36535 = p__36533;
var map__36535__$1 = cljs.core.__destructure_map(map__36535);
var msg = map__36535__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36535__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36536,tid){
var map__36537 = p__36536;
var map__36537__$1 = cljs.core.__destructure_map(map__36537);
var svc = map__36537__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36537__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36546 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36547 = null;
var count__36548 = (0);
var i__36549 = (0);
while(true){
if((i__36549 < count__36548)){
var vec__36560 = chunk__36547.cljs$core$IIndexed$_nth$arity$2(null,i__36549);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36560,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36560,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36606 = seq__36546;
var G__36607 = chunk__36547;
var G__36608 = count__36548;
var G__36609 = (i__36549 + (1));
seq__36546 = G__36606;
chunk__36547 = G__36607;
count__36548 = G__36608;
i__36549 = G__36609;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36546);
if(temp__5753__auto__){
var seq__36546__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36546__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36546__$1);
var G__36610 = cljs.core.chunk_rest(seq__36546__$1);
var G__36611 = c__4679__auto__;
var G__36612 = cljs.core.count(c__4679__auto__);
var G__36613 = (0);
seq__36546 = G__36610;
chunk__36547 = G__36611;
count__36548 = G__36612;
i__36549 = G__36613;
continue;
} else {
var vec__36565 = cljs.core.first(seq__36546__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36565,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36565,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36614 = cljs.core.next(seq__36546__$1);
var G__36615 = null;
var G__36616 = (0);
var G__36617 = (0);
seq__36546 = G__36614;
chunk__36547 = G__36615;
count__36548 = G__36616;
i__36549 = G__36617;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36538_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36538_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36539_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36539_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36540_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36540_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36541_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36541_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36586){
var map__36587 = p__36586;
var map__36587__$1 = cljs.core.__destructure_map(map__36587);
var svc = map__36587__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36587__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36587__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
