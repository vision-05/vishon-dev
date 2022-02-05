goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38937 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38938 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38938);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39029 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39029)){
var new_db_39030 = temp__5753__auto___39029;
var fexpr__38941_39031 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38941_39031.cljs$core$IFn$_invoke$arity$1 ? fexpr__38941_39031.cljs$core$IFn$_invoke$arity$1(new_db_39030) : fexpr__38941_39031.call(null,new_db_39030));
} else {
}

var seq__38942 = cljs.core.seq(effects_without_db);
var chunk__38943 = null;
var count__38944 = (0);
var i__38945 = (0);
while(true){
if((i__38945 < count__38944)){
var vec__38954 = chunk__38943.cljs$core$IIndexed$_nth$arity$2(null,i__38945);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38954,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38954,(1),null);
var temp__5751__auto___39032 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39032)){
var effect_fn_39033 = temp__5751__auto___39032;
(effect_fn_39033.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39033.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39033.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39034 = seq__38942;
var G__39035 = chunk__38943;
var G__39036 = count__38944;
var G__39037 = (i__38945 + (1));
seq__38942 = G__39034;
chunk__38943 = G__39035;
count__38944 = G__39036;
i__38945 = G__39037;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38942);
if(temp__5753__auto__){
var seq__38942__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38942__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__38942__$1);
var G__39038 = cljs.core.chunk_rest(seq__38942__$1);
var G__39039 = c__4679__auto__;
var G__39040 = cljs.core.count(c__4679__auto__);
var G__39041 = (0);
seq__38942 = G__39038;
chunk__38943 = G__39039;
count__38944 = G__39040;
i__38945 = G__39041;
continue;
} else {
var vec__38959 = cljs.core.first(seq__38942__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38959,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38959,(1),null);
var temp__5751__auto___39042 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39042)){
var effect_fn_39043 = temp__5751__auto___39042;
(effect_fn_39043.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39043.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39043.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39044 = cljs.core.next(seq__38942__$1);
var G__39045 = null;
var G__39046 = (0);
var G__39047 = (0);
seq__38942 = G__39044;
chunk__38943 = G__39045;
count__38944 = G__39046;
i__38945 = G__39047;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38620__auto___39048 = re_frame.interop.now();
var duration__38621__auto___39049 = (end__38620__auto___39048 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38621__auto___39049,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38620__auto___39048);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38937);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39050 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39050)){
var new_db_39051 = temp__5753__auto___39050;
var fexpr__38963_39052 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38963_39052.cljs$core$IFn$_invoke$arity$1 ? fexpr__38963_39052.cljs$core$IFn$_invoke$arity$1(new_db_39051) : fexpr__38963_39052.call(null,new_db_39051));
} else {
}

var seq__38964 = cljs.core.seq(effects_without_db);
var chunk__38965 = null;
var count__38966 = (0);
var i__38967 = (0);
while(true){
if((i__38967 < count__38966)){
var vec__38977 = chunk__38965.cljs$core$IIndexed$_nth$arity$2(null,i__38967);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38977,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38977,(1),null);
var temp__5751__auto___39053 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39053)){
var effect_fn_39054 = temp__5751__auto___39053;
(effect_fn_39054.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39054.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39054.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39055 = seq__38964;
var G__39056 = chunk__38965;
var G__39057 = count__38966;
var G__39058 = (i__38967 + (1));
seq__38964 = G__39055;
chunk__38965 = G__39056;
count__38966 = G__39057;
i__38967 = G__39058;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38964);
if(temp__5753__auto__){
var seq__38964__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38964__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__38964__$1);
var G__39059 = cljs.core.chunk_rest(seq__38964__$1);
var G__39060 = c__4679__auto__;
var G__39061 = cljs.core.count(c__4679__auto__);
var G__39062 = (0);
seq__38964 = G__39059;
chunk__38965 = G__39060;
count__38966 = G__39061;
i__38967 = G__39062;
continue;
} else {
var vec__38980 = cljs.core.first(seq__38964__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38980,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38980,(1),null);
var temp__5751__auto___39063 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39063)){
var effect_fn_39064 = temp__5751__auto___39063;
(effect_fn_39064.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39064.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39064.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39065 = cljs.core.next(seq__38964__$1);
var G__39066 = null;
var G__39067 = (0);
var G__39068 = (0);
seq__38964 = G__39065;
chunk__38965 = G__39066;
count__38966 = G__39067;
i__38967 = G__39068;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__38983){
var map__38984 = p__38983;
var map__38984__$1 = cljs.core.__destructure_map(map__38984);
var effect = map__38984__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38984__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38984__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__38986 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38987 = null;
var count__38988 = (0);
var i__38989 = (0);
while(true){
if((i__38989 < count__38988)){
var effect = chunk__38987.cljs$core$IIndexed$_nth$arity$2(null,i__38989);
re_frame.fx.dispatch_later(effect);


var G__39069 = seq__38986;
var G__39070 = chunk__38987;
var G__39071 = count__38988;
var G__39072 = (i__38989 + (1));
seq__38986 = G__39069;
chunk__38987 = G__39070;
count__38988 = G__39071;
i__38989 = G__39072;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38986);
if(temp__5753__auto__){
var seq__38986__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38986__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__38986__$1);
var G__39073 = cljs.core.chunk_rest(seq__38986__$1);
var G__39074 = c__4679__auto__;
var G__39075 = cljs.core.count(c__4679__auto__);
var G__39076 = (0);
seq__38986 = G__39073;
chunk__38987 = G__39074;
count__38988 = G__39075;
i__38989 = G__39076;
continue;
} else {
var effect = cljs.core.first(seq__38986__$1);
re_frame.fx.dispatch_later(effect);


var G__39077 = cljs.core.next(seq__38986__$1);
var G__39078 = null;
var G__39079 = (0);
var G__39080 = (0);
seq__38986 = G__39077;
chunk__38987 = G__39078;
count__38988 = G__39079;
i__38989 = G__39080;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__38992 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38993 = null;
var count__38994 = (0);
var i__38995 = (0);
while(true){
if((i__38995 < count__38994)){
var vec__39003 = chunk__38993.cljs$core$IIndexed$_nth$arity$2(null,i__38995);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39003,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39003,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39081 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39081)){
var effect_fn_39082 = temp__5751__auto___39081;
(effect_fn_39082.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39082.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39082.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39083 = seq__38992;
var G__39084 = chunk__38993;
var G__39085 = count__38994;
var G__39086 = (i__38995 + (1));
seq__38992 = G__39083;
chunk__38993 = G__39084;
count__38994 = G__39085;
i__38995 = G__39086;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38992);
if(temp__5753__auto__){
var seq__38992__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38992__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__38992__$1);
var G__39087 = cljs.core.chunk_rest(seq__38992__$1);
var G__39088 = c__4679__auto__;
var G__39089 = cljs.core.count(c__4679__auto__);
var G__39090 = (0);
seq__38992 = G__39087;
chunk__38993 = G__39088;
count__38994 = G__39089;
i__38995 = G__39090;
continue;
} else {
var vec__39006 = cljs.core.first(seq__38992__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39006,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39006,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39091 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39091)){
var effect_fn_39092 = temp__5751__auto___39091;
(effect_fn_39092.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39092.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39092.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39093 = cljs.core.next(seq__38992__$1);
var G__39094 = null;
var G__39095 = (0);
var G__39096 = (0);
seq__38992 = G__39093;
chunk__38993 = G__39094;
count__38994 = G__39095;
i__38995 = G__39096;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__39017 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39018 = null;
var count__39019 = (0);
var i__39020 = (0);
while(true){
if((i__39020 < count__39019)){
var event = chunk__39018.cljs$core$IIndexed$_nth$arity$2(null,i__39020);
re_frame.router.dispatch(event);


var G__39098 = seq__39017;
var G__39099 = chunk__39018;
var G__39100 = count__39019;
var G__39101 = (i__39020 + (1));
seq__39017 = G__39098;
chunk__39018 = G__39099;
count__39019 = G__39100;
i__39020 = G__39101;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39017);
if(temp__5753__auto__){
var seq__39017__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39017__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39017__$1);
var G__39103 = cljs.core.chunk_rest(seq__39017__$1);
var G__39104 = c__4679__auto__;
var G__39105 = cljs.core.count(c__4679__auto__);
var G__39106 = (0);
seq__39017 = G__39103;
chunk__39018 = G__39104;
count__39019 = G__39105;
i__39020 = G__39106;
continue;
} else {
var event = cljs.core.first(seq__39017__$1);
re_frame.router.dispatch(event);


var G__39107 = cljs.core.next(seq__39017__$1);
var G__39108 = null;
var G__39109 = (0);
var G__39110 = (0);
seq__39017 = G__39107;
chunk__39018 = G__39108;
count__39019 = G__39109;
i__39020 = G__39110;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__39025 = cljs.core.seq(value);
var chunk__39026 = null;
var count__39027 = (0);
var i__39028 = (0);
while(true){
if((i__39028 < count__39027)){
var event = chunk__39026.cljs$core$IIndexed$_nth$arity$2(null,i__39028);
clear_event(event);


var G__39111 = seq__39025;
var G__39112 = chunk__39026;
var G__39113 = count__39027;
var G__39114 = (i__39028 + (1));
seq__39025 = G__39111;
chunk__39026 = G__39112;
count__39027 = G__39113;
i__39028 = G__39114;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39025);
if(temp__5753__auto__){
var seq__39025__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39025__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__39025__$1);
var G__39115 = cljs.core.chunk_rest(seq__39025__$1);
var G__39116 = c__4679__auto__;
var G__39117 = cljs.core.count(c__4679__auto__);
var G__39118 = (0);
seq__39025 = G__39115;
chunk__39026 = G__39116;
count__39027 = G__39117;
i__39028 = G__39118;
continue;
} else {
var event = cljs.core.first(seq__39025__$1);
clear_event(event);


var G__39119 = cljs.core.next(seq__39025__$1);
var G__39120 = null;
var G__39121 = (0);
var G__39122 = (0);
seq__39025 = G__39119;
chunk__39026 = G__39120;
count__39027 = G__39121;
i__39028 = G__39122;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
