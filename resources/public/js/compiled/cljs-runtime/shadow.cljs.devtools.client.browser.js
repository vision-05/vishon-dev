goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37596 = arguments.length;
var i__4865__auto___37597 = (0);
while(true){
if((i__4865__auto___37597 < len__4864__auto___37596)){
args__4870__auto__.push((arguments[i__4865__auto___37597]));

var G__37598 = (i__4865__auto___37597 + (1));
i__4865__auto___37597 = G__37598;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37438){
var G__37439 = cljs.core.first(seq37438);
var seq37438__$1 = cljs.core.next(seq37438);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37439,seq37438__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37440 = cljs.core.seq(sources);
var chunk__37441 = null;
var count__37442 = (0);
var i__37443 = (0);
while(true){
if((i__37443 < count__37442)){
var map__37452 = chunk__37441.cljs$core$IIndexed$_nth$arity$2(null,i__37443);
var map__37452__$1 = cljs.core.__destructure_map(map__37452);
var src = map__37452__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37452__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37452__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37452__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37452__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37453){var e_37600 = e37453;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37600);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37600.message)].join('')));
}

var G__37601 = seq__37440;
var G__37602 = chunk__37441;
var G__37603 = count__37442;
var G__37604 = (i__37443 + (1));
seq__37440 = G__37601;
chunk__37441 = G__37602;
count__37442 = G__37603;
i__37443 = G__37604;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37440);
if(temp__5753__auto__){
var seq__37440__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37440__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37440__$1);
var G__37605 = cljs.core.chunk_rest(seq__37440__$1);
var G__37606 = c__4679__auto__;
var G__37607 = cljs.core.count(c__4679__auto__);
var G__37608 = (0);
seq__37440 = G__37605;
chunk__37441 = G__37606;
count__37442 = G__37607;
i__37443 = G__37608;
continue;
} else {
var map__37454 = cljs.core.first(seq__37440__$1);
var map__37454__$1 = cljs.core.__destructure_map(map__37454);
var src = map__37454__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37454__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37454__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37454__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37454__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37455){var e_37609 = e37455;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37609);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37609.message)].join('')));
}

var G__37610 = cljs.core.next(seq__37440__$1);
var G__37611 = null;
var G__37612 = (0);
var G__37613 = (0);
seq__37440 = G__37610;
chunk__37441 = G__37611;
count__37442 = G__37612;
i__37443 = G__37613;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37456 = cljs.core.seq(js_requires);
var chunk__37457 = null;
var count__37458 = (0);
var i__37459 = (0);
while(true){
if((i__37459 < count__37458)){
var js_ns = chunk__37457.cljs$core$IIndexed$_nth$arity$2(null,i__37459);
var require_str_37614 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37614);


var G__37615 = seq__37456;
var G__37616 = chunk__37457;
var G__37617 = count__37458;
var G__37618 = (i__37459 + (1));
seq__37456 = G__37615;
chunk__37457 = G__37616;
count__37458 = G__37617;
i__37459 = G__37618;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37456);
if(temp__5753__auto__){
var seq__37456__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37456__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37456__$1);
var G__37619 = cljs.core.chunk_rest(seq__37456__$1);
var G__37620 = c__4679__auto__;
var G__37621 = cljs.core.count(c__4679__auto__);
var G__37622 = (0);
seq__37456 = G__37619;
chunk__37457 = G__37620;
count__37458 = G__37621;
i__37459 = G__37622;
continue;
} else {
var js_ns = cljs.core.first(seq__37456__$1);
var require_str_37623 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37623);


var G__37624 = cljs.core.next(seq__37456__$1);
var G__37625 = null;
var G__37626 = (0);
var G__37627 = (0);
seq__37456 = G__37624;
chunk__37457 = G__37625;
count__37458 = G__37626;
i__37459 = G__37627;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37464){
var map__37466 = p__37464;
var map__37466__$1 = cljs.core.__destructure_map(map__37466);
var msg = map__37466__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37466__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37466__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37467(s__37468){
return (new cljs.core.LazySeq(null,(function (){
var s__37468__$1 = s__37468;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37468__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37473 = cljs.core.first(xs__6308__auto__);
var map__37473__$1 = cljs.core.__destructure_map(map__37473);
var src = map__37473__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37473__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37473__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37468__$1,map__37473,map__37473__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37466,map__37466__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37467_$_iter__37469(s__37470){
return (new cljs.core.LazySeq(null,((function (s__37468__$1,map__37473,map__37473__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37466,map__37466__$1,msg,info,reload_info){
return (function (){
var s__37470__$1 = s__37470;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37470__$1);
if(temp__5753__auto____$1){
var s__37470__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37470__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37470__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37472 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37471 = (0);
while(true){
if((i__37471 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37471);
cljs.core.chunk_append(b__37472,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37628 = (i__37471 + (1));
i__37471 = G__37628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37472),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37467_$_iter__37469(cljs.core.chunk_rest(s__37470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37472),null);
}
} else {
var warning = cljs.core.first(s__37470__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37467_$_iter__37469(cljs.core.rest(s__37470__$2)));
}
} else {
return null;
}
break;
}
});})(s__37468__$1,map__37473,map__37473__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37466,map__37466__$1,msg,info,reload_info))
,null,null));
});})(s__37468__$1,map__37473,map__37473__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37466,map__37466__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37467(cljs.core.rest(s__37468__$1)));
} else {
var G__37629 = cljs.core.rest(s__37468__$1);
s__37468__$1 = G__37629;
continue;
}
} else {
var G__37630 = cljs.core.rest(s__37468__$1);
s__37468__$1 = G__37630;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37476_37631 = cljs.core.seq(warnings);
var chunk__37477_37632 = null;
var count__37478_37633 = (0);
var i__37479_37634 = (0);
while(true){
if((i__37479_37634 < count__37478_37633)){
var map__37482_37635 = chunk__37477_37632.cljs$core$IIndexed$_nth$arity$2(null,i__37479_37634);
var map__37482_37636__$1 = cljs.core.__destructure_map(map__37482_37635);
var w_37637 = map__37482_37636__$1;
var msg_37638__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37482_37636__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37482_37636__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37482_37636__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37482_37636__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37641)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37639),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37640),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37638__$1)].join(''));


var G__37642 = seq__37476_37631;
var G__37643 = chunk__37477_37632;
var G__37644 = count__37478_37633;
var G__37645 = (i__37479_37634 + (1));
seq__37476_37631 = G__37642;
chunk__37477_37632 = G__37643;
count__37478_37633 = G__37644;
i__37479_37634 = G__37645;
continue;
} else {
var temp__5753__auto___37646 = cljs.core.seq(seq__37476_37631);
if(temp__5753__auto___37646){
var seq__37476_37647__$1 = temp__5753__auto___37646;
if(cljs.core.chunked_seq_QMARK_(seq__37476_37647__$1)){
var c__4679__auto___37648 = cljs.core.chunk_first(seq__37476_37647__$1);
var G__37649 = cljs.core.chunk_rest(seq__37476_37647__$1);
var G__37650 = c__4679__auto___37648;
var G__37651 = cljs.core.count(c__4679__auto___37648);
var G__37652 = (0);
seq__37476_37631 = G__37649;
chunk__37477_37632 = G__37650;
count__37478_37633 = G__37651;
i__37479_37634 = G__37652;
continue;
} else {
var map__37483_37653 = cljs.core.first(seq__37476_37647__$1);
var map__37483_37654__$1 = cljs.core.__destructure_map(map__37483_37653);
var w_37655 = map__37483_37654__$1;
var msg_37656__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483_37654__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483_37654__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483_37654__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483_37654__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37659)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37657),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37658),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37656__$1)].join(''));


var G__37660 = cljs.core.next(seq__37476_37647__$1);
var G__37661 = null;
var G__37662 = (0);
var G__37663 = (0);
seq__37476_37631 = G__37660;
chunk__37477_37632 = G__37661;
count__37478_37633 = G__37662;
i__37479_37634 = G__37663;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37463_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37463_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37484){
var map__37485 = p__37484;
var map__37485__$1 = cljs.core.__destructure_map(map__37485);
var msg = map__37485__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37486 = cljs.core.seq(updates);
var chunk__37488 = null;
var count__37489 = (0);
var i__37490 = (0);
while(true){
if((i__37490 < count__37489)){
var path = chunk__37488.cljs$core$IIndexed$_nth$arity$2(null,i__37490);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37529_37664 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37533_37665 = null;
var count__37534_37666 = (0);
var i__37535_37667 = (0);
while(true){
if((i__37535_37667 < count__37534_37666)){
var node_37668 = chunk__37533_37665.cljs$core$IIndexed$_nth$arity$2(null,i__37535_37667);
if(cljs.core.not(node_37668.shadow$old)){
var path_match_37669 = shadow.cljs.devtools.client.browser.match_paths(node_37668.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37669)){
var new_link_37670 = (function (){var G__37541 = node_37668.cloneNode(true);
G__37541.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37669),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37541;
})();
(node_37668.shadow$old = true);

(new_link_37670.onload = ((function (seq__37529_37664,chunk__37533_37665,count__37534_37666,i__37535_37667,seq__37486,chunk__37488,count__37489,i__37490,new_link_37670,path_match_37669,node_37668,path,map__37485,map__37485__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37668);
});})(seq__37529_37664,chunk__37533_37665,count__37534_37666,i__37535_37667,seq__37486,chunk__37488,count__37489,i__37490,new_link_37670,path_match_37669,node_37668,path,map__37485,map__37485__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37669], 0));

goog.dom.insertSiblingAfter(new_link_37670,node_37668);


var G__37671 = seq__37529_37664;
var G__37672 = chunk__37533_37665;
var G__37673 = count__37534_37666;
var G__37674 = (i__37535_37667 + (1));
seq__37529_37664 = G__37671;
chunk__37533_37665 = G__37672;
count__37534_37666 = G__37673;
i__37535_37667 = G__37674;
continue;
} else {
var G__37675 = seq__37529_37664;
var G__37676 = chunk__37533_37665;
var G__37677 = count__37534_37666;
var G__37678 = (i__37535_37667 + (1));
seq__37529_37664 = G__37675;
chunk__37533_37665 = G__37676;
count__37534_37666 = G__37677;
i__37535_37667 = G__37678;
continue;
}
} else {
var G__37679 = seq__37529_37664;
var G__37680 = chunk__37533_37665;
var G__37681 = count__37534_37666;
var G__37682 = (i__37535_37667 + (1));
seq__37529_37664 = G__37679;
chunk__37533_37665 = G__37680;
count__37534_37666 = G__37681;
i__37535_37667 = G__37682;
continue;
}
} else {
var temp__5753__auto___37683 = cljs.core.seq(seq__37529_37664);
if(temp__5753__auto___37683){
var seq__37529_37684__$1 = temp__5753__auto___37683;
if(cljs.core.chunked_seq_QMARK_(seq__37529_37684__$1)){
var c__4679__auto___37685 = cljs.core.chunk_first(seq__37529_37684__$1);
var G__37686 = cljs.core.chunk_rest(seq__37529_37684__$1);
var G__37687 = c__4679__auto___37685;
var G__37688 = cljs.core.count(c__4679__auto___37685);
var G__37689 = (0);
seq__37529_37664 = G__37686;
chunk__37533_37665 = G__37687;
count__37534_37666 = G__37688;
i__37535_37667 = G__37689;
continue;
} else {
var node_37690 = cljs.core.first(seq__37529_37684__$1);
if(cljs.core.not(node_37690.shadow$old)){
var path_match_37691 = shadow.cljs.devtools.client.browser.match_paths(node_37690.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37691)){
var new_link_37692 = (function (){var G__37542 = node_37690.cloneNode(true);
G__37542.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37691),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37542;
})();
(node_37690.shadow$old = true);

(new_link_37692.onload = ((function (seq__37529_37664,chunk__37533_37665,count__37534_37666,i__37535_37667,seq__37486,chunk__37488,count__37489,i__37490,new_link_37692,path_match_37691,node_37690,seq__37529_37684__$1,temp__5753__auto___37683,path,map__37485,map__37485__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37690);
});})(seq__37529_37664,chunk__37533_37665,count__37534_37666,i__37535_37667,seq__37486,chunk__37488,count__37489,i__37490,new_link_37692,path_match_37691,node_37690,seq__37529_37684__$1,temp__5753__auto___37683,path,map__37485,map__37485__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37691], 0));

goog.dom.insertSiblingAfter(new_link_37692,node_37690);


var G__37693 = cljs.core.next(seq__37529_37684__$1);
var G__37694 = null;
var G__37695 = (0);
var G__37696 = (0);
seq__37529_37664 = G__37693;
chunk__37533_37665 = G__37694;
count__37534_37666 = G__37695;
i__37535_37667 = G__37696;
continue;
} else {
var G__37697 = cljs.core.next(seq__37529_37684__$1);
var G__37698 = null;
var G__37699 = (0);
var G__37700 = (0);
seq__37529_37664 = G__37697;
chunk__37533_37665 = G__37698;
count__37534_37666 = G__37699;
i__37535_37667 = G__37700;
continue;
}
} else {
var G__37701 = cljs.core.next(seq__37529_37684__$1);
var G__37702 = null;
var G__37703 = (0);
var G__37704 = (0);
seq__37529_37664 = G__37701;
chunk__37533_37665 = G__37702;
count__37534_37666 = G__37703;
i__37535_37667 = G__37704;
continue;
}
}
} else {
}
}
break;
}


var G__37705 = seq__37486;
var G__37706 = chunk__37488;
var G__37707 = count__37489;
var G__37708 = (i__37490 + (1));
seq__37486 = G__37705;
chunk__37488 = G__37706;
count__37489 = G__37707;
i__37490 = G__37708;
continue;
} else {
var G__37709 = seq__37486;
var G__37710 = chunk__37488;
var G__37711 = count__37489;
var G__37712 = (i__37490 + (1));
seq__37486 = G__37709;
chunk__37488 = G__37710;
count__37489 = G__37711;
i__37490 = G__37712;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37486);
if(temp__5753__auto__){
var seq__37486__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37486__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37486__$1);
var G__37713 = cljs.core.chunk_rest(seq__37486__$1);
var G__37714 = c__4679__auto__;
var G__37715 = cljs.core.count(c__4679__auto__);
var G__37716 = (0);
seq__37486 = G__37713;
chunk__37488 = G__37714;
count__37489 = G__37715;
i__37490 = G__37716;
continue;
} else {
var path = cljs.core.first(seq__37486__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37546_37717 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37550_37718 = null;
var count__37551_37719 = (0);
var i__37552_37720 = (0);
while(true){
if((i__37552_37720 < count__37551_37719)){
var node_37721 = chunk__37550_37718.cljs$core$IIndexed$_nth$arity$2(null,i__37552_37720);
if(cljs.core.not(node_37721.shadow$old)){
var path_match_37722 = shadow.cljs.devtools.client.browser.match_paths(node_37721.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37722)){
var new_link_37723 = (function (){var G__37562 = node_37721.cloneNode(true);
G__37562.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37722),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37562;
})();
(node_37721.shadow$old = true);

(new_link_37723.onload = ((function (seq__37546_37717,chunk__37550_37718,count__37551_37719,i__37552_37720,seq__37486,chunk__37488,count__37489,i__37490,new_link_37723,path_match_37722,node_37721,path,seq__37486__$1,temp__5753__auto__,map__37485,map__37485__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37721);
});})(seq__37546_37717,chunk__37550_37718,count__37551_37719,i__37552_37720,seq__37486,chunk__37488,count__37489,i__37490,new_link_37723,path_match_37722,node_37721,path,seq__37486__$1,temp__5753__auto__,map__37485,map__37485__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37722], 0));

goog.dom.insertSiblingAfter(new_link_37723,node_37721);


var G__37724 = seq__37546_37717;
var G__37725 = chunk__37550_37718;
var G__37726 = count__37551_37719;
var G__37727 = (i__37552_37720 + (1));
seq__37546_37717 = G__37724;
chunk__37550_37718 = G__37725;
count__37551_37719 = G__37726;
i__37552_37720 = G__37727;
continue;
} else {
var G__37728 = seq__37546_37717;
var G__37729 = chunk__37550_37718;
var G__37730 = count__37551_37719;
var G__37731 = (i__37552_37720 + (1));
seq__37546_37717 = G__37728;
chunk__37550_37718 = G__37729;
count__37551_37719 = G__37730;
i__37552_37720 = G__37731;
continue;
}
} else {
var G__37732 = seq__37546_37717;
var G__37733 = chunk__37550_37718;
var G__37734 = count__37551_37719;
var G__37735 = (i__37552_37720 + (1));
seq__37546_37717 = G__37732;
chunk__37550_37718 = G__37733;
count__37551_37719 = G__37734;
i__37552_37720 = G__37735;
continue;
}
} else {
var temp__5753__auto___37736__$1 = cljs.core.seq(seq__37546_37717);
if(temp__5753__auto___37736__$1){
var seq__37546_37737__$1 = temp__5753__auto___37736__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37546_37737__$1)){
var c__4679__auto___37738 = cljs.core.chunk_first(seq__37546_37737__$1);
var G__37739 = cljs.core.chunk_rest(seq__37546_37737__$1);
var G__37740 = c__4679__auto___37738;
var G__37741 = cljs.core.count(c__4679__auto___37738);
var G__37742 = (0);
seq__37546_37717 = G__37739;
chunk__37550_37718 = G__37740;
count__37551_37719 = G__37741;
i__37552_37720 = G__37742;
continue;
} else {
var node_37743 = cljs.core.first(seq__37546_37737__$1);
if(cljs.core.not(node_37743.shadow$old)){
var path_match_37744 = shadow.cljs.devtools.client.browser.match_paths(node_37743.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37744)){
var new_link_37745 = (function (){var G__37563 = node_37743.cloneNode(true);
G__37563.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37744),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37563;
})();
(node_37743.shadow$old = true);

(new_link_37745.onload = ((function (seq__37546_37717,chunk__37550_37718,count__37551_37719,i__37552_37720,seq__37486,chunk__37488,count__37489,i__37490,new_link_37745,path_match_37744,node_37743,seq__37546_37737__$1,temp__5753__auto___37736__$1,path,seq__37486__$1,temp__5753__auto__,map__37485,map__37485__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37743);
});})(seq__37546_37717,chunk__37550_37718,count__37551_37719,i__37552_37720,seq__37486,chunk__37488,count__37489,i__37490,new_link_37745,path_match_37744,node_37743,seq__37546_37737__$1,temp__5753__auto___37736__$1,path,seq__37486__$1,temp__5753__auto__,map__37485,map__37485__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37744], 0));

goog.dom.insertSiblingAfter(new_link_37745,node_37743);


var G__37746 = cljs.core.next(seq__37546_37737__$1);
var G__37747 = null;
var G__37748 = (0);
var G__37749 = (0);
seq__37546_37717 = G__37746;
chunk__37550_37718 = G__37747;
count__37551_37719 = G__37748;
i__37552_37720 = G__37749;
continue;
} else {
var G__37750 = cljs.core.next(seq__37546_37737__$1);
var G__37751 = null;
var G__37752 = (0);
var G__37753 = (0);
seq__37546_37717 = G__37750;
chunk__37550_37718 = G__37751;
count__37551_37719 = G__37752;
i__37552_37720 = G__37753;
continue;
}
} else {
var G__37754 = cljs.core.next(seq__37546_37737__$1);
var G__37755 = null;
var G__37756 = (0);
var G__37757 = (0);
seq__37546_37717 = G__37754;
chunk__37550_37718 = G__37755;
count__37551_37719 = G__37756;
i__37552_37720 = G__37757;
continue;
}
}
} else {
}
}
break;
}


var G__37758 = cljs.core.next(seq__37486__$1);
var G__37759 = null;
var G__37760 = (0);
var G__37761 = (0);
seq__37486 = G__37758;
chunk__37488 = G__37759;
count__37489 = G__37760;
i__37490 = G__37761;
continue;
} else {
var G__37762 = cljs.core.next(seq__37486__$1);
var G__37763 = null;
var G__37764 = (0);
var G__37765 = (0);
seq__37486 = G__37762;
chunk__37488 = G__37763;
count__37489 = G__37764;
i__37490 = G__37765;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37564){
var map__37565 = p__37564;
var map__37565__$1 = cljs.core.__destructure_map(map__37565);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37568){
var map__37569 = p__37568;
var map__37569__$1 = cljs.core.__destructure_map(map__37569);
var _ = map__37569__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37569__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37570,done,error){
var map__37571 = p__37570;
var map__37571__$1 = cljs.core.__destructure_map(map__37571);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37571__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37573,done,error){
var map__37574 = p__37573;
var map__37574__$1 = cljs.core.__destructure_map(map__37574);
var msg = map__37574__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37575){
var map__37576 = p__37575;
var map__37576__$1 = cljs.core.__destructure_map(map__37576);
var src = map__37576__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37576__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37578 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37578) : done.call(null,G__37578));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37579){
var map__37582 = p__37579;
var map__37582__$1 = cljs.core.__destructure_map(map__37582);
var msg__$1 = map__37582__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37582__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37583){var ex = e37583;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37584){
var map__37588 = p__37584;
var map__37588__$1 = cljs.core.__destructure_map(map__37588);
var env = map__37588__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37588__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37589){
var map__37590 = p__37589;
var map__37590__$1 = cljs.core.__destructure_map(map__37590);
var msg = map__37590__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37590__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37592){
var map__37593 = p__37592;
var map__37593__$1 = cljs.core.__destructure_map(map__37593);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37593__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37593__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37594){
var map__37595 = p__37594;
var map__37595__$1 = cljs.core.__destructure_map(map__37595);
var svc = map__37595__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37595__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
