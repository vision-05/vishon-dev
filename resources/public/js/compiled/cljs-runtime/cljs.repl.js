goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35587){
var map__35588 = p__35587;
var map__35588__$1 = cljs.core.__destructure_map(map__35588);
var m = map__35588__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35588__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35588__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35593_36018 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35594_36019 = null;
var count__35595_36020 = (0);
var i__35596_36022 = (0);
while(true){
if((i__35596_36022 < count__35595_36020)){
var f_36026 = chunk__35594_36019.cljs$core$IIndexed$_nth$arity$2(null,i__35596_36022);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36026], 0));


var G__36028 = seq__35593_36018;
var G__36029 = chunk__35594_36019;
var G__36030 = count__35595_36020;
var G__36031 = (i__35596_36022 + (1));
seq__35593_36018 = G__36028;
chunk__35594_36019 = G__36029;
count__35595_36020 = G__36030;
i__35596_36022 = G__36031;
continue;
} else {
var temp__5753__auto___36036 = cljs.core.seq(seq__35593_36018);
if(temp__5753__auto___36036){
var seq__35593_36037__$1 = temp__5753__auto___36036;
if(cljs.core.chunked_seq_QMARK_(seq__35593_36037__$1)){
var c__4679__auto___36039 = cljs.core.chunk_first(seq__35593_36037__$1);
var G__36041 = cljs.core.chunk_rest(seq__35593_36037__$1);
var G__36042 = c__4679__auto___36039;
var G__36043 = cljs.core.count(c__4679__auto___36039);
var G__36044 = (0);
seq__35593_36018 = G__36041;
chunk__35594_36019 = G__36042;
count__35595_36020 = G__36043;
i__35596_36022 = G__36044;
continue;
} else {
var f_36046 = cljs.core.first(seq__35593_36037__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36046], 0));


var G__36051 = cljs.core.next(seq__35593_36037__$1);
var G__36052 = null;
var G__36053 = (0);
var G__36054 = (0);
seq__35593_36018 = G__36051;
chunk__35594_36019 = G__36052;
count__35595_36020 = G__36053;
i__35596_36022 = G__36054;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36056 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36056], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36056)))?cljs.core.second(arglists_36056):arglists_36056)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35613_36073 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35614_36074 = null;
var count__35615_36075 = (0);
var i__35616_36076 = (0);
while(true){
if((i__35616_36076 < count__35615_36075)){
var vec__35634_36079 = chunk__35614_36074.cljs$core$IIndexed$_nth$arity$2(null,i__35616_36076);
var name_36080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35634_36079,(0),null);
var map__35637_36081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35634_36079,(1),null);
var map__35637_36082__$1 = cljs.core.__destructure_map(map__35637_36081);
var doc_36083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35637_36082__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35637_36082__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36080], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36084], 0));

if(cljs.core.truth_(doc_36083)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36083], 0));
} else {
}


var G__36093 = seq__35613_36073;
var G__36096 = chunk__35614_36074;
var G__36098 = count__35615_36075;
var G__36100 = (i__35616_36076 + (1));
seq__35613_36073 = G__36093;
chunk__35614_36074 = G__36096;
count__35615_36075 = G__36098;
i__35616_36076 = G__36100;
continue;
} else {
var temp__5753__auto___36101 = cljs.core.seq(seq__35613_36073);
if(temp__5753__auto___36101){
var seq__35613_36102__$1 = temp__5753__auto___36101;
if(cljs.core.chunked_seq_QMARK_(seq__35613_36102__$1)){
var c__4679__auto___36103 = cljs.core.chunk_first(seq__35613_36102__$1);
var G__36104 = cljs.core.chunk_rest(seq__35613_36102__$1);
var G__36105 = c__4679__auto___36103;
var G__36106 = cljs.core.count(c__4679__auto___36103);
var G__36107 = (0);
seq__35613_36073 = G__36104;
chunk__35614_36074 = G__36105;
count__35615_36075 = G__36106;
i__35616_36076 = G__36107;
continue;
} else {
var vec__35643_36112 = cljs.core.first(seq__35613_36102__$1);
var name_36113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35643_36112,(0),null);
var map__35646_36114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35643_36112,(1),null);
var map__35646_36115__$1 = cljs.core.__destructure_map(map__35646_36114);
var doc_36116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35646_36115__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35646_36115__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36113], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36117], 0));

if(cljs.core.truth_(doc_36116)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36116], 0));
} else {
}


var G__36120 = cljs.core.next(seq__35613_36102__$1);
var G__36122 = null;
var G__36123 = (0);
var G__36124 = (0);
seq__35613_36073 = G__36120;
chunk__35614_36074 = G__36122;
count__35615_36075 = G__36123;
i__35616_36076 = G__36124;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35651 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35652 = null;
var count__35653 = (0);
var i__35654 = (0);
while(true){
if((i__35654 < count__35653)){
var role = chunk__35652.cljs$core$IIndexed$_nth$arity$2(null,i__35654);
var temp__5753__auto___36130__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36130__$1)){
var spec_36131 = temp__5753__auto___36130__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36131)], 0));
} else {
}


var G__36132 = seq__35651;
var G__36133 = chunk__35652;
var G__36134 = count__35653;
var G__36135 = (i__35654 + (1));
seq__35651 = G__36132;
chunk__35652 = G__36133;
count__35653 = G__36134;
i__35654 = G__36135;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35651);
if(temp__5753__auto____$1){
var seq__35651__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35651__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35651__$1);
var G__36136 = cljs.core.chunk_rest(seq__35651__$1);
var G__36137 = c__4679__auto__;
var G__36138 = cljs.core.count(c__4679__auto__);
var G__36139 = (0);
seq__35651 = G__36136;
chunk__35652 = G__36137;
count__35653 = G__36138;
i__35654 = G__36139;
continue;
} else {
var role = cljs.core.first(seq__35651__$1);
var temp__5753__auto___36140__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36140__$2)){
var spec_36141 = temp__5753__auto___36140__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36141)], 0));
} else {
}


var G__36142 = cljs.core.next(seq__35651__$1);
var G__36143 = null;
var G__36144 = (0);
var G__36145 = (0);
seq__35651 = G__36142;
chunk__35652 = G__36143;
count__35653 = G__36144;
i__35654 = G__36145;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36158 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36159 = cljs.core.ex_cause(t);
via = G__36158;
t = G__36159;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35721 = datafied_throwable;
var map__35721__$1 = cljs.core.__destructure_map(map__35721);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35721__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35721__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35721__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35722 = cljs.core.last(via);
var map__35722__$1 = cljs.core.__destructure_map(map__35722);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35722__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35722__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35722__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35723 = data;
var map__35723__$1 = cljs.core.__destructure_map(map__35723);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35723__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35723__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35723__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35724 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35724__$1 = cljs.core.__destructure_map(map__35724);
var top_data = map__35724__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35731 = phase;
var G__35731__$1 = (((G__35731 instanceof cljs.core.Keyword))?G__35731.fqn:null);
switch (G__35731__$1) {
case "read-source":
var map__35734 = data;
var map__35734__$1 = cljs.core.__destructure_map(map__35734);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35734__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35734__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35738 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35738__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35738,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35738);
var G__35738__$2 = (cljs.core.truth_((function (){var fexpr__35739 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35739.cljs$core$IFn$_invoke$arity$1 ? fexpr__35739.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35739.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35738__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35738__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35738__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35738__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35740 = top_data;
var G__35740__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35740,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35740);
var G__35740__$2 = (cljs.core.truth_((function (){var fexpr__35741 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35741.cljs$core$IFn$_invoke$arity$1 ? fexpr__35741.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35741.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35740__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35740__$1);
var G__35740__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35740__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35740__$2);
var G__35740__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35740__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35740__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35740__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35740__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35744 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35744,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35744,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35744,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35744,(3),null);
var G__35748 = top_data;
var G__35748__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35748,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35748);
var G__35748__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35748__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35748__$1);
var G__35748__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35748__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35748__$2);
var G__35748__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35748__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35748__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35748__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35748__$4;
}

break;
case "execution":
var vec__35754 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35754,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35754,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35754,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35754,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35710_SHARP_){
var or__4253__auto__ = (p1__35710_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35760 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35760.cljs$core$IFn$_invoke$arity$1 ? fexpr__35760.cljs$core$IFn$_invoke$arity$1(p1__35710_SHARP_) : fexpr__35760.call(null,p1__35710_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35767 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35767__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35767,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35767);
var G__35767__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35767__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35767__$1);
var G__35767__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35767__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35767__$2);
var G__35767__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35767__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35767__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35767__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35767__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35731__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35835){
var map__35841 = p__35835;
var map__35841__$1 = cljs.core.__destructure_map(map__35841);
var triage_data = map__35841__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35841__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35841__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35841__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35841__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35841__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35841__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35841__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35841__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35916 = phase;
var G__35916__$1 = (((G__35916 instanceof cljs.core.Keyword))?G__35916.fqn:null);
switch (G__35916__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35922 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35923 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35924 = loc;
var G__35925 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35926_36192 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35927_36193 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35928_36194 = true;
var _STAR_print_fn_STAR__temp_val__35929_36195 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35928_36194);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35929_36195);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35812_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35812_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35927_36193);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35926_36192);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35922,G__35923,G__35924,G__35925) : format.call(null,G__35922,G__35923,G__35924,G__35925));

break;
case "macroexpansion":
var G__35937 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35938 = cause_type;
var G__35939 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35940 = loc;
var G__35941 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35937,G__35938,G__35939,G__35940,G__35941) : format.call(null,G__35937,G__35938,G__35939,G__35940,G__35941));

break;
case "compile-syntax-check":
var G__35951 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35952 = cause_type;
var G__35953 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35954 = loc;
var G__35955 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35951,G__35952,G__35953,G__35954,G__35955) : format.call(null,G__35951,G__35952,G__35953,G__35954,G__35955));

break;
case "compilation":
var G__35966 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35967 = cause_type;
var G__35968 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35969 = loc;
var G__35970 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35966,G__35967,G__35968,G__35969,G__35970) : format.call(null,G__35966,G__35967,G__35968,G__35969,G__35970));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35978 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35979 = symbol;
var G__35980 = loc;
var G__35981 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35982_36197 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35983_36198 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35984_36199 = true;
var _STAR_print_fn_STAR__temp_val__35985_36200 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35984_36199);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35985_36200);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35816_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35816_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35983_36198);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35982_36197);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35978,G__35979,G__35980,G__35981) : format.call(null,G__35978,G__35979,G__35980,G__35981));
} else {
var G__36000 = "Execution error%s at %s(%s).\n%s\n";
var G__36001 = cause_type;
var G__36002 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36003 = loc;
var G__36004 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36000,G__36001,G__36002,G__36003,G__36004) : format.call(null,G__36000,G__36001,G__36002,G__36003,G__36004));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35916__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
