goog.provide('vishon_dev.views');
vishon_dev.views.nav_bar = (function vishon_dev$views$nav_bar(){
var items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vishon-dev.subs","items","vishon-dev.subs/items",-2092712756)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39179_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vishon-dev.events","change-page","vishon-dev.events/change-page",-517117194),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__39179_SHARP_)], null));
})], null),p1__39179_SHARP_], null);
}),items)))], null);
});
vishon_dev.views.main_panel = (function vishon_dev$views$main_panel(){
var cur_page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vishon-dev.subs","cur-page","vishon-dev.subs/cur-page",1764259094)], null)));
var pages = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vishon-dev.subs","pages","vishon-dev.subs/pages",213550077)], null)));
return (cur_page.cljs$core$IFn$_invoke$arity$1 ? cur_page.cljs$core$IFn$_invoke$arity$1(pages) : cur_page.call(null,pages));
});

//# sourceMappingURL=vishon_dev.views.js.map
