goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__37992 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37993 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37993);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__37994 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37995 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37995);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37994);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37992);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__38001 = arguments.length;
switch (G__38001) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__38002 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38002,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38002,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__38009_38030 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__38010_38031 = null;
var count__38011_38032 = (0);
var i__38012_38033 = (0);
while(true){
if((i__38012_38033 < count__38011_38032)){
var vec__38021_38034 = chunk__38010_38031.cljs$core$IIndexed$_nth$arity$2(null,i__38012_38033);
var container_38035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38021_38034,(0),null);
var comp_38036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38021_38034,(1),null);
reagent.dom.re_render_component(comp_38036,container_38035);


var G__38037 = seq__38009_38030;
var G__38038 = chunk__38010_38031;
var G__38039 = count__38011_38032;
var G__38040 = (i__38012_38033 + (1));
seq__38009_38030 = G__38037;
chunk__38010_38031 = G__38038;
count__38011_38032 = G__38039;
i__38012_38033 = G__38040;
continue;
} else {
var temp__5753__auto___38041 = cljs.core.seq(seq__38009_38030);
if(temp__5753__auto___38041){
var seq__38009_38042__$1 = temp__5753__auto___38041;
if(cljs.core.chunked_seq_QMARK_(seq__38009_38042__$1)){
var c__4679__auto___38043 = cljs.core.chunk_first(seq__38009_38042__$1);
var G__38044 = cljs.core.chunk_rest(seq__38009_38042__$1);
var G__38045 = c__4679__auto___38043;
var G__38046 = cljs.core.count(c__4679__auto___38043);
var G__38047 = (0);
seq__38009_38030 = G__38044;
chunk__38010_38031 = G__38045;
count__38011_38032 = G__38046;
i__38012_38033 = G__38047;
continue;
} else {
var vec__38024_38048 = cljs.core.first(seq__38009_38042__$1);
var container_38049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38024_38048,(0),null);
var comp_38050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38024_38048,(1),null);
reagent.dom.re_render_component(comp_38050,container_38049);


var G__38051 = cljs.core.next(seq__38009_38042__$1);
var G__38052 = null;
var G__38053 = (0);
var G__38054 = (0);
seq__38009_38030 = G__38051;
chunk__38010_38031 = G__38052;
count__38011_38032 = G__38053;
i__38012_38033 = G__38054;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
