goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36954__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36957__i = 0, G__36957__a = new Array(arguments.length -  0);
while (G__36957__i < G__36957__a.length) {G__36957__a[G__36957__i] = arguments[G__36957__i + 0]; ++G__36957__i;}
  args = new cljs.core.IndexedSeq(G__36957__a,0,null);
} 
return G__36954__delegate.call(this,args);};
G__36954.cljs$lang$maxFixedArity = 0;
G__36954.cljs$lang$applyTo = (function (arglist__36959){
var args = cljs.core.seq(arglist__36959);
return G__36954__delegate(args);
});
G__36954.cljs$core$IFn$_invoke$arity$variadic = G__36954__delegate;
return G__36954;
})()
);

(o.error = (function() { 
var G__36964__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36966__i = 0, G__36966__a = new Array(arguments.length -  0);
while (G__36966__i < G__36966__a.length) {G__36966__a[G__36966__i] = arguments[G__36966__i + 0]; ++G__36966__i;}
  args = new cljs.core.IndexedSeq(G__36966__a,0,null);
} 
return G__36964__delegate.call(this,args);};
G__36964.cljs$lang$maxFixedArity = 0;
G__36964.cljs$lang$applyTo = (function (arglist__36971){
var args = cljs.core.seq(arglist__36971);
return G__36964__delegate(args);
});
G__36964.cljs$core$IFn$_invoke$arity$variadic = G__36964__delegate;
return G__36964;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
