goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38642){
var map__38643 = p__38642;
var map__38643__$1 = cljs.core.__destructure_map(map__38643);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38646_38675 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38647_38676 = null;
var count__38648_38677 = (0);
var i__38649_38678 = (0);
while(true){
if((i__38649_38678 < count__38648_38677)){
var vec__38661_38679 = chunk__38647_38676.cljs$core$IIndexed$_nth$arity$2(null,i__38649_38678);
var k_38680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38661_38679,(0),null);
var cb_38681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38661_38679,(1),null);
try{var G__38665_38682 = cljs.core.deref(re_frame.trace.traces);
(cb_38681.cljs$core$IFn$_invoke$arity$1 ? cb_38681.cljs$core$IFn$_invoke$arity$1(G__38665_38682) : cb_38681.call(null,G__38665_38682));
}catch (e38664){var e_38683 = e38664;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38680,"while storing",cljs.core.deref(re_frame.trace.traces),e_38683], 0));
}

var G__38684 = seq__38646_38675;
var G__38685 = chunk__38647_38676;
var G__38686 = count__38648_38677;
var G__38687 = (i__38649_38678 + (1));
seq__38646_38675 = G__38684;
chunk__38647_38676 = G__38685;
count__38648_38677 = G__38686;
i__38649_38678 = G__38687;
continue;
} else {
var temp__5753__auto___38688 = cljs.core.seq(seq__38646_38675);
if(temp__5753__auto___38688){
var seq__38646_38689__$1 = temp__5753__auto___38688;
if(cljs.core.chunked_seq_QMARK_(seq__38646_38689__$1)){
var c__4679__auto___38690 = cljs.core.chunk_first(seq__38646_38689__$1);
var G__38691 = cljs.core.chunk_rest(seq__38646_38689__$1);
var G__38692 = c__4679__auto___38690;
var G__38693 = cljs.core.count(c__4679__auto___38690);
var G__38694 = (0);
seq__38646_38675 = G__38691;
chunk__38647_38676 = G__38692;
count__38648_38677 = G__38693;
i__38649_38678 = G__38694;
continue;
} else {
var vec__38666_38695 = cljs.core.first(seq__38646_38689__$1);
var k_38696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666_38695,(0),null);
var cb_38697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666_38695,(1),null);
try{var G__38671_38698 = cljs.core.deref(re_frame.trace.traces);
(cb_38697.cljs$core$IFn$_invoke$arity$1 ? cb_38697.cljs$core$IFn$_invoke$arity$1(G__38671_38698) : cb_38697.call(null,G__38671_38698));
}catch (e38670){var e_38699 = e38670;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38696,"while storing",cljs.core.deref(re_frame.trace.traces),e_38699], 0));
}

var G__38700 = cljs.core.next(seq__38646_38689__$1);
var G__38701 = null;
var G__38702 = (0);
var G__38703 = (0);
seq__38646_38675 = G__38700;
chunk__38647_38676 = G__38701;
count__38648_38677 = G__38702;
i__38649_38678 = G__38703;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
