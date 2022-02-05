goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35589 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35589(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35591 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35591(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34754 = coll;
var G__34755 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34754,G__34755) : shadow.dom.lazy_native_coll_seq.call(null,G__34754,G__34755));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34769 = arguments.length;
switch (G__34769) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34780 = arguments.length;
switch (G__34780) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34786 = arguments.length;
switch (G__34786) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34797 = arguments.length;
switch (G__34797) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34820 = arguments.length;
switch (G__34820) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34831 = arguments.length;
switch (G__34831) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34841){if((e34841 instanceof Object)){
var e = e34841;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34841;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34847 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34848 = null;
var count__34849 = (0);
var i__34850 = (0);
while(true){
if((i__34850 < count__34849)){
var el = chunk__34848.cljs$core$IIndexed$_nth$arity$2(null,i__34850);
var handler_35658__$1 = ((function (seq__34847,chunk__34848,count__34849,i__34850,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34847,chunk__34848,count__34849,i__34850,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35658__$1);


var G__35659 = seq__34847;
var G__35660 = chunk__34848;
var G__35661 = count__34849;
var G__35662 = (i__34850 + (1));
seq__34847 = G__35659;
chunk__34848 = G__35660;
count__34849 = G__35661;
i__34850 = G__35662;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34847);
if(temp__5753__auto__){
var seq__34847__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34847__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34847__$1);
var G__35666 = cljs.core.chunk_rest(seq__34847__$1);
var G__35667 = c__4679__auto__;
var G__35668 = cljs.core.count(c__4679__auto__);
var G__35669 = (0);
seq__34847 = G__35666;
chunk__34848 = G__35667;
count__34849 = G__35668;
i__34850 = G__35669;
continue;
} else {
var el = cljs.core.first(seq__34847__$1);
var handler_35670__$1 = ((function (seq__34847,chunk__34848,count__34849,i__34850,el,seq__34847__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34847,chunk__34848,count__34849,i__34850,el,seq__34847__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35670__$1);


var G__35671 = cljs.core.next(seq__34847__$1);
var G__35672 = null;
var G__35673 = (0);
var G__35674 = (0);
seq__34847 = G__35671;
chunk__34848 = G__35672;
count__34849 = G__35673;
i__34850 = G__35674;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34873 = arguments.length;
switch (G__34873) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34879 = cljs.core.seq(events);
var chunk__34880 = null;
var count__34881 = (0);
var i__34882 = (0);
while(true){
if((i__34882 < count__34881)){
var vec__34896 = chunk__34880.cljs$core$IIndexed$_nth$arity$2(null,i__34882);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34896,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35683 = seq__34879;
var G__35684 = chunk__34880;
var G__35685 = count__34881;
var G__35686 = (i__34882 + (1));
seq__34879 = G__35683;
chunk__34880 = G__35684;
count__34881 = G__35685;
i__34882 = G__35686;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34879);
if(temp__5753__auto__){
var seq__34879__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34879__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34879__$1);
var G__35687 = cljs.core.chunk_rest(seq__34879__$1);
var G__35688 = c__4679__auto__;
var G__35689 = cljs.core.count(c__4679__auto__);
var G__35690 = (0);
seq__34879 = G__35687;
chunk__34880 = G__35688;
count__34881 = G__35689;
i__34882 = G__35690;
continue;
} else {
var vec__34902 = cljs.core.first(seq__34879__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34902,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35693 = cljs.core.next(seq__34879__$1);
var G__35694 = null;
var G__35695 = (0);
var G__35696 = (0);
seq__34879 = G__35693;
chunk__34880 = G__35694;
count__34881 = G__35695;
i__34882 = G__35696;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34909 = cljs.core.seq(styles);
var chunk__34910 = null;
var count__34911 = (0);
var i__34912 = (0);
while(true){
if((i__34912 < count__34911)){
var vec__34926 = chunk__34910.cljs$core$IIndexed$_nth$arity$2(null,i__34912);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34926,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35700 = seq__34909;
var G__35701 = chunk__34910;
var G__35702 = count__34911;
var G__35703 = (i__34912 + (1));
seq__34909 = G__35700;
chunk__34910 = G__35701;
count__34911 = G__35702;
i__34912 = G__35703;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34909);
if(temp__5753__auto__){
var seq__34909__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34909__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34909__$1);
var G__35704 = cljs.core.chunk_rest(seq__34909__$1);
var G__35705 = c__4679__auto__;
var G__35706 = cljs.core.count(c__4679__auto__);
var G__35707 = (0);
seq__34909 = G__35704;
chunk__34910 = G__35705;
count__34911 = G__35706;
i__34912 = G__35707;
continue;
} else {
var vec__34934 = cljs.core.first(seq__34909__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34934,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34934,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35713 = cljs.core.next(seq__34909__$1);
var G__35714 = null;
var G__35715 = (0);
var G__35716 = (0);
seq__34909 = G__35713;
chunk__34910 = G__35714;
count__34911 = G__35715;
i__34912 = G__35716;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34942_35717 = key;
var G__34942_35718__$1 = (((G__34942_35717 instanceof cljs.core.Keyword))?G__34942_35717.fqn:null);
switch (G__34942_35718__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35730 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_35730,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_35730,"aria-");
}
})())){
el.setAttribute(ks_35730,value);
} else {
(el[ks_35730] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34975){
var map__34976 = p__34975;
var map__34976__$1 = cljs.core.__destructure_map(map__34976);
var props = map__34976__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34976__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34980 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34983 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34983,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34983;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34987 = arguments.length;
switch (G__34987) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34991){
var vec__34992 = p__34991;
var seq__34993 = cljs.core.seq(vec__34992);
var first__34994 = cljs.core.first(seq__34993);
var seq__34993__$1 = cljs.core.next(seq__34993);
var nn = first__34994;
var first__34994__$1 = cljs.core.first(seq__34993__$1);
var seq__34993__$2 = cljs.core.next(seq__34993__$1);
var np = first__34994__$1;
var nc = seq__34993__$2;
var node = vec__34992;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34997 = nn;
var G__34998 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34997,G__34998) : create_fn.call(null,G__34997,G__34998));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34999 = nn;
var G__35000 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34999,G__35000) : create_fn.call(null,G__34999,G__35000));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35001 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001,(1),null);
var seq__35005_35785 = cljs.core.seq(node_children);
var chunk__35006_35786 = null;
var count__35007_35787 = (0);
var i__35008_35788 = (0);
while(true){
if((i__35008_35788 < count__35007_35787)){
var child_struct_35789 = chunk__35006_35786.cljs$core$IIndexed$_nth$arity$2(null,i__35008_35788);
var children_35790 = shadow.dom.dom_node(child_struct_35789);
if(cljs.core.seq_QMARK_(children_35790)){
var seq__35060_35795 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35790));
var chunk__35062_35796 = null;
var count__35063_35797 = (0);
var i__35064_35798 = (0);
while(true){
if((i__35064_35798 < count__35063_35797)){
var child_35803 = chunk__35062_35796.cljs$core$IIndexed$_nth$arity$2(null,i__35064_35798);
if(cljs.core.truth_(child_35803)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35803);


var G__35804 = seq__35060_35795;
var G__35805 = chunk__35062_35796;
var G__35806 = count__35063_35797;
var G__35807 = (i__35064_35798 + (1));
seq__35060_35795 = G__35804;
chunk__35062_35796 = G__35805;
count__35063_35797 = G__35806;
i__35064_35798 = G__35807;
continue;
} else {
var G__35808 = seq__35060_35795;
var G__35809 = chunk__35062_35796;
var G__35810 = count__35063_35797;
var G__35811 = (i__35064_35798 + (1));
seq__35060_35795 = G__35808;
chunk__35062_35796 = G__35809;
count__35063_35797 = G__35810;
i__35064_35798 = G__35811;
continue;
}
} else {
var temp__5753__auto___35813 = cljs.core.seq(seq__35060_35795);
if(temp__5753__auto___35813){
var seq__35060_35814__$1 = temp__5753__auto___35813;
if(cljs.core.chunked_seq_QMARK_(seq__35060_35814__$1)){
var c__4679__auto___35815 = cljs.core.chunk_first(seq__35060_35814__$1);
var G__35817 = cljs.core.chunk_rest(seq__35060_35814__$1);
var G__35818 = c__4679__auto___35815;
var G__35819 = cljs.core.count(c__4679__auto___35815);
var G__35820 = (0);
seq__35060_35795 = G__35817;
chunk__35062_35796 = G__35818;
count__35063_35797 = G__35819;
i__35064_35798 = G__35820;
continue;
} else {
var child_35821 = cljs.core.first(seq__35060_35814__$1);
if(cljs.core.truth_(child_35821)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35821);


var G__35822 = cljs.core.next(seq__35060_35814__$1);
var G__35823 = null;
var G__35824 = (0);
var G__35825 = (0);
seq__35060_35795 = G__35822;
chunk__35062_35796 = G__35823;
count__35063_35797 = G__35824;
i__35064_35798 = G__35825;
continue;
} else {
var G__35830 = cljs.core.next(seq__35060_35814__$1);
var G__35831 = null;
var G__35832 = (0);
var G__35833 = (0);
seq__35060_35795 = G__35830;
chunk__35062_35796 = G__35831;
count__35063_35797 = G__35832;
i__35064_35798 = G__35833;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35790);
}


var G__35837 = seq__35005_35785;
var G__35838 = chunk__35006_35786;
var G__35839 = count__35007_35787;
var G__35840 = (i__35008_35788 + (1));
seq__35005_35785 = G__35837;
chunk__35006_35786 = G__35838;
count__35007_35787 = G__35839;
i__35008_35788 = G__35840;
continue;
} else {
var temp__5753__auto___35843 = cljs.core.seq(seq__35005_35785);
if(temp__5753__auto___35843){
var seq__35005_35848__$1 = temp__5753__auto___35843;
if(cljs.core.chunked_seq_QMARK_(seq__35005_35848__$1)){
var c__4679__auto___35852 = cljs.core.chunk_first(seq__35005_35848__$1);
var G__35853 = cljs.core.chunk_rest(seq__35005_35848__$1);
var G__35854 = c__4679__auto___35852;
var G__35855 = cljs.core.count(c__4679__auto___35852);
var G__35856 = (0);
seq__35005_35785 = G__35853;
chunk__35006_35786 = G__35854;
count__35007_35787 = G__35855;
i__35008_35788 = G__35856;
continue;
} else {
var child_struct_35857 = cljs.core.first(seq__35005_35848__$1);
var children_35859 = shadow.dom.dom_node(child_struct_35857);
if(cljs.core.seq_QMARK_(children_35859)){
var seq__35092_35860 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35859));
var chunk__35094_35861 = null;
var count__35095_35862 = (0);
var i__35096_35863 = (0);
while(true){
if((i__35096_35863 < count__35095_35862)){
var child_35865 = chunk__35094_35861.cljs$core$IIndexed$_nth$arity$2(null,i__35096_35863);
if(cljs.core.truth_(child_35865)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35865);


var G__35870 = seq__35092_35860;
var G__35871 = chunk__35094_35861;
var G__35872 = count__35095_35862;
var G__35873 = (i__35096_35863 + (1));
seq__35092_35860 = G__35870;
chunk__35094_35861 = G__35871;
count__35095_35862 = G__35872;
i__35096_35863 = G__35873;
continue;
} else {
var G__35874 = seq__35092_35860;
var G__35875 = chunk__35094_35861;
var G__35876 = count__35095_35862;
var G__35877 = (i__35096_35863 + (1));
seq__35092_35860 = G__35874;
chunk__35094_35861 = G__35875;
count__35095_35862 = G__35876;
i__35096_35863 = G__35877;
continue;
}
} else {
var temp__5753__auto___35882__$1 = cljs.core.seq(seq__35092_35860);
if(temp__5753__auto___35882__$1){
var seq__35092_35884__$1 = temp__5753__auto___35882__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35092_35884__$1)){
var c__4679__auto___35887 = cljs.core.chunk_first(seq__35092_35884__$1);
var G__35889 = cljs.core.chunk_rest(seq__35092_35884__$1);
var G__35890 = c__4679__auto___35887;
var G__35891 = cljs.core.count(c__4679__auto___35887);
var G__35892 = (0);
seq__35092_35860 = G__35889;
chunk__35094_35861 = G__35890;
count__35095_35862 = G__35891;
i__35096_35863 = G__35892;
continue;
} else {
var child_35897 = cljs.core.first(seq__35092_35884__$1);
if(cljs.core.truth_(child_35897)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35897);


var G__35907 = cljs.core.next(seq__35092_35884__$1);
var G__35908 = null;
var G__35909 = (0);
var G__35910 = (0);
seq__35092_35860 = G__35907;
chunk__35094_35861 = G__35908;
count__35095_35862 = G__35909;
i__35096_35863 = G__35910;
continue;
} else {
var G__35912 = cljs.core.next(seq__35092_35884__$1);
var G__35913 = null;
var G__35914 = (0);
var G__35915 = (0);
seq__35092_35860 = G__35912;
chunk__35094_35861 = G__35913;
count__35095_35862 = G__35914;
i__35096_35863 = G__35915;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35859);
}


var G__35917 = cljs.core.next(seq__35005_35848__$1);
var G__35918 = null;
var G__35919 = (0);
var G__35920 = (0);
seq__35005_35785 = G__35917;
chunk__35006_35786 = G__35918;
count__35007_35787 = G__35919;
i__35008_35788 = G__35920;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35136 = cljs.core.seq(node);
var chunk__35137 = null;
var count__35138 = (0);
var i__35139 = (0);
while(true){
if((i__35139 < count__35138)){
var n = chunk__35137.cljs$core$IIndexed$_nth$arity$2(null,i__35139);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35946 = seq__35136;
var G__35947 = chunk__35137;
var G__35948 = count__35138;
var G__35949 = (i__35139 + (1));
seq__35136 = G__35946;
chunk__35137 = G__35947;
count__35138 = G__35948;
i__35139 = G__35949;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35136);
if(temp__5753__auto__){
var seq__35136__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35136__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35136__$1);
var G__35958 = cljs.core.chunk_rest(seq__35136__$1);
var G__35959 = c__4679__auto__;
var G__35960 = cljs.core.count(c__4679__auto__);
var G__35961 = (0);
seq__35136 = G__35958;
chunk__35137 = G__35959;
count__35138 = G__35960;
i__35139 = G__35961;
continue;
} else {
var n = cljs.core.first(seq__35136__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35974 = cljs.core.next(seq__35136__$1);
var G__35975 = null;
var G__35976 = (0);
var G__35977 = (0);
seq__35136 = G__35974;
chunk__35137 = G__35975;
count__35138 = G__35976;
i__35139 = G__35977;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35154 = arguments.length;
switch (G__35154) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35163 = arguments.length;
switch (G__35163) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35169 = arguments.length;
switch (G__35169) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36014 = arguments.length;
var i__4865__auto___36016 = (0);
while(true){
if((i__4865__auto___36016 < len__4864__auto___36014)){
args__4870__auto__.push((arguments[i__4865__auto___36016]));

var G__36017 = (i__4865__auto___36016 + (1));
i__4865__auto___36016 = G__36017;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35181_36021 = cljs.core.seq(nodes);
var chunk__35182_36023 = null;
var count__35183_36024 = (0);
var i__35184_36025 = (0);
while(true){
if((i__35184_36025 < count__35183_36024)){
var node_36027 = chunk__35182_36023.cljs$core$IIndexed$_nth$arity$2(null,i__35184_36025);
fragment.appendChild(shadow.dom._to_dom(node_36027));


var G__36032 = seq__35181_36021;
var G__36033 = chunk__35182_36023;
var G__36034 = count__35183_36024;
var G__36035 = (i__35184_36025 + (1));
seq__35181_36021 = G__36032;
chunk__35182_36023 = G__36033;
count__35183_36024 = G__36034;
i__35184_36025 = G__36035;
continue;
} else {
var temp__5753__auto___36038 = cljs.core.seq(seq__35181_36021);
if(temp__5753__auto___36038){
var seq__35181_36040__$1 = temp__5753__auto___36038;
if(cljs.core.chunked_seq_QMARK_(seq__35181_36040__$1)){
var c__4679__auto___36045 = cljs.core.chunk_first(seq__35181_36040__$1);
var G__36047 = cljs.core.chunk_rest(seq__35181_36040__$1);
var G__36048 = c__4679__auto___36045;
var G__36049 = cljs.core.count(c__4679__auto___36045);
var G__36050 = (0);
seq__35181_36021 = G__36047;
chunk__35182_36023 = G__36048;
count__35183_36024 = G__36049;
i__35184_36025 = G__36050;
continue;
} else {
var node_36055 = cljs.core.first(seq__35181_36040__$1);
fragment.appendChild(shadow.dom._to_dom(node_36055));


var G__36057 = cljs.core.next(seq__35181_36040__$1);
var G__36058 = null;
var G__36059 = (0);
var G__36060 = (0);
seq__35181_36021 = G__36057;
chunk__35182_36023 = G__36058;
count__35183_36024 = G__36059;
i__35184_36025 = G__36060;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35174){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35174));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35208_36061 = cljs.core.seq(scripts);
var chunk__35209_36062 = null;
var count__35210_36063 = (0);
var i__35211_36064 = (0);
while(true){
if((i__35211_36064 < count__35210_36063)){
var vec__35226_36065 = chunk__35209_36062.cljs$core$IIndexed$_nth$arity$2(null,i__35211_36064);
var script_tag_36066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226_36065,(0),null);
var script_body_36067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226_36065,(1),null);
eval(script_body_36067);


var G__36069 = seq__35208_36061;
var G__36070 = chunk__35209_36062;
var G__36071 = count__35210_36063;
var G__36072 = (i__35211_36064 + (1));
seq__35208_36061 = G__36069;
chunk__35209_36062 = G__36070;
count__35210_36063 = G__36071;
i__35211_36064 = G__36072;
continue;
} else {
var temp__5753__auto___36077 = cljs.core.seq(seq__35208_36061);
if(temp__5753__auto___36077){
var seq__35208_36078__$1 = temp__5753__auto___36077;
if(cljs.core.chunked_seq_QMARK_(seq__35208_36078__$1)){
var c__4679__auto___36085 = cljs.core.chunk_first(seq__35208_36078__$1);
var G__36086 = cljs.core.chunk_rest(seq__35208_36078__$1);
var G__36087 = c__4679__auto___36085;
var G__36088 = cljs.core.count(c__4679__auto___36085);
var G__36089 = (0);
seq__35208_36061 = G__36086;
chunk__35209_36062 = G__36087;
count__35210_36063 = G__36088;
i__35211_36064 = G__36089;
continue;
} else {
var vec__35238_36090 = cljs.core.first(seq__35208_36078__$1);
var script_tag_36091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35238_36090,(0),null);
var script_body_36092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35238_36090,(1),null);
eval(script_body_36092);


var G__36094 = cljs.core.next(seq__35208_36078__$1);
var G__36095 = null;
var G__36097 = (0);
var G__36099 = (0);
seq__35208_36061 = G__36094;
chunk__35209_36062 = G__36095;
count__35210_36063 = G__36097;
i__35211_36064 = G__36099;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35242){
var vec__35243 = p__35242;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35243,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35243,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35258 = arguments.length;
switch (G__35258) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35283 = cljs.core.seq(style_keys);
var chunk__35284 = null;
var count__35285 = (0);
var i__35286 = (0);
while(true){
if((i__35286 < count__35285)){
var it = chunk__35284.cljs$core$IIndexed$_nth$arity$2(null,i__35286);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36147 = seq__35283;
var G__36148 = chunk__35284;
var G__36149 = count__35285;
var G__36150 = (i__35286 + (1));
seq__35283 = G__36147;
chunk__35284 = G__36148;
count__35285 = G__36149;
i__35286 = G__36150;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35283);
if(temp__5753__auto__){
var seq__35283__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35283__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35283__$1);
var G__36154 = cljs.core.chunk_rest(seq__35283__$1);
var G__36155 = c__4679__auto__;
var G__36156 = cljs.core.count(c__4679__auto__);
var G__36157 = (0);
seq__35283 = G__36154;
chunk__35284 = G__36155;
count__35285 = G__36156;
i__35286 = G__36157;
continue;
} else {
var it = cljs.core.first(seq__35283__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36160 = cljs.core.next(seq__35283__$1);
var G__36161 = null;
var G__36162 = (0);
var G__36163 = (0);
seq__35283 = G__36160;
chunk__35284 = G__36161;
count__35285 = G__36162;
i__35286 = G__36163;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35294,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35306 = k35294;
var G__35306__$1 = (((G__35306 instanceof cljs.core.Keyword))?G__35306.fqn:null);
switch (G__35306__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35294,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35311){
var vec__35312 = p__35311;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35312,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35312,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35293){
var self__ = this;
var G__35293__$1 = this;
return (new cljs.core.RecordIter((0),G__35293__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35295,other35296){
var self__ = this;
var this35295__$1 = this;
return (((!((other35296 == null)))) && ((((this35295__$1.constructor === other35296.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35295__$1.x,other35296.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35295__$1.y,other35296.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35295__$1.__extmap,other35296.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35294){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35323 = k35294;
var G__35323__$1 = (((G__35323 instanceof cljs.core.Keyword))?G__35323.fqn:null);
switch (G__35323__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35294);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35293){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35326 = cljs.core.keyword_identical_QMARK_;
var expr__35327 = k__4511__auto__;
if(cljs.core.truth_((pred__35326.cljs$core$IFn$_invoke$arity$2 ? pred__35326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35327) : pred__35326.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35327)))){
return (new shadow.dom.Coordinate(G__35293,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35326.cljs$core$IFn$_invoke$arity$2 ? pred__35326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35327) : pred__35326.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35327)))){
return (new shadow.dom.Coordinate(self__.x,G__35293,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35293),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35293){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35293,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35297){
var extmap__4542__auto__ = (function (){var G__35338 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35297,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35297)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35338);
} else {
return G__35338;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35297),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35297),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35346,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35359 = k35346;
var G__35359__$1 = (((G__35359 instanceof cljs.core.Keyword))?G__35359.fqn:null);
switch (G__35359__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35346,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35361){
var vec__35362 = p__35361;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35345){
var self__ = this;
var G__35345__$1 = this;
return (new cljs.core.RecordIter((0),G__35345__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35350,other35351){
var self__ = this;
var this35350__$1 = this;
return (((!((other35351 == null)))) && ((((this35350__$1.constructor === other35351.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35350__$1.w,other35351.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35350__$1.h,other35351.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35350__$1.__extmap,other35351.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35346){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35380 = k35346;
var G__35380__$1 = (((G__35380 instanceof cljs.core.Keyword))?G__35380.fqn:null);
switch (G__35380__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35346);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35345){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35386 = cljs.core.keyword_identical_QMARK_;
var expr__35387 = k__4511__auto__;
if(cljs.core.truth_((pred__35386.cljs$core$IFn$_invoke$arity$2 ? pred__35386.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35387) : pred__35386.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35387)))){
return (new shadow.dom.Size(G__35345,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35386.cljs$core$IFn$_invoke$arity$2 ? pred__35386.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35387) : pred__35386.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35387)))){
return (new shadow.dom.Size(self__.w,G__35345,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35345),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35345){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35345,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35353){
var extmap__4542__auto__ = (function (){var G__35404 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35353,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35353)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35404);
} else {
return G__35404;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35353),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35353),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__36203 = (i + (1));
var G__36204 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36203;
ret = G__36204;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35425){
var vec__35426 = p__35425;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35426,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35426,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35432 = arguments.length;
switch (G__35432) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36213 = ps;
var G__36214 = (i + (1));
el__$1 = G__36213;
i = G__36214;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35456 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35456,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35456,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35456,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35459_36221 = cljs.core.seq(props);
var chunk__35460_36222 = null;
var count__35461_36223 = (0);
var i__35462_36224 = (0);
while(true){
if((i__35462_36224 < count__35461_36223)){
var vec__35473_36229 = chunk__35460_36222.cljs$core$IIndexed$_nth$arity$2(null,i__35462_36224);
var k_36230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35473_36229,(0),null);
var v_36231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35473_36229,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36230);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36230),v_36231);


var G__36234 = seq__35459_36221;
var G__36235 = chunk__35460_36222;
var G__36236 = count__35461_36223;
var G__36237 = (i__35462_36224 + (1));
seq__35459_36221 = G__36234;
chunk__35460_36222 = G__36235;
count__35461_36223 = G__36236;
i__35462_36224 = G__36237;
continue;
} else {
var temp__5753__auto___36238 = cljs.core.seq(seq__35459_36221);
if(temp__5753__auto___36238){
var seq__35459_36239__$1 = temp__5753__auto___36238;
if(cljs.core.chunked_seq_QMARK_(seq__35459_36239__$1)){
var c__4679__auto___36240 = cljs.core.chunk_first(seq__35459_36239__$1);
var G__36241 = cljs.core.chunk_rest(seq__35459_36239__$1);
var G__36242 = c__4679__auto___36240;
var G__36243 = cljs.core.count(c__4679__auto___36240);
var G__36244 = (0);
seq__35459_36221 = G__36241;
chunk__35460_36222 = G__36242;
count__35461_36223 = G__36243;
i__35462_36224 = G__36244;
continue;
} else {
var vec__35476_36245 = cljs.core.first(seq__35459_36239__$1);
var k_36246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476_36245,(0),null);
var v_36247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35476_36245,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36246);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36246),v_36247);


var G__36250 = cljs.core.next(seq__35459_36239__$1);
var G__36251 = null;
var G__36252 = (0);
var G__36253 = (0);
seq__35459_36221 = G__36250;
chunk__35460_36222 = G__36251;
count__35461_36223 = G__36252;
i__35462_36224 = G__36253;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35483 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35483,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35483,(1),null);
var seq__35486_36257 = cljs.core.seq(node_children);
var chunk__35488_36258 = null;
var count__35489_36259 = (0);
var i__35490_36260 = (0);
while(true){
if((i__35490_36260 < count__35489_36259)){
var child_struct_36261 = chunk__35488_36258.cljs$core$IIndexed$_nth$arity$2(null,i__35490_36260);
if((!((child_struct_36261 == null)))){
if(typeof child_struct_36261 === 'string'){
var text_36262 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36262),child_struct_36261].join(''));
} else {
var children_36263 = shadow.dom.svg_node(child_struct_36261);
if(cljs.core.seq_QMARK_(children_36263)){
var seq__35504_36264 = cljs.core.seq(children_36263);
var chunk__35506_36265 = null;
var count__35507_36266 = (0);
var i__35508_36267 = (0);
while(true){
if((i__35508_36267 < count__35507_36266)){
var child_36268 = chunk__35506_36265.cljs$core$IIndexed$_nth$arity$2(null,i__35508_36267);
if(cljs.core.truth_(child_36268)){
node.appendChild(child_36268);


var G__36269 = seq__35504_36264;
var G__36270 = chunk__35506_36265;
var G__36271 = count__35507_36266;
var G__36272 = (i__35508_36267 + (1));
seq__35504_36264 = G__36269;
chunk__35506_36265 = G__36270;
count__35507_36266 = G__36271;
i__35508_36267 = G__36272;
continue;
} else {
var G__36273 = seq__35504_36264;
var G__36274 = chunk__35506_36265;
var G__36275 = count__35507_36266;
var G__36276 = (i__35508_36267 + (1));
seq__35504_36264 = G__36273;
chunk__35506_36265 = G__36274;
count__35507_36266 = G__36275;
i__35508_36267 = G__36276;
continue;
}
} else {
var temp__5753__auto___36277 = cljs.core.seq(seq__35504_36264);
if(temp__5753__auto___36277){
var seq__35504_36278__$1 = temp__5753__auto___36277;
if(cljs.core.chunked_seq_QMARK_(seq__35504_36278__$1)){
var c__4679__auto___36279 = cljs.core.chunk_first(seq__35504_36278__$1);
var G__36280 = cljs.core.chunk_rest(seq__35504_36278__$1);
var G__36281 = c__4679__auto___36279;
var G__36282 = cljs.core.count(c__4679__auto___36279);
var G__36283 = (0);
seq__35504_36264 = G__36280;
chunk__35506_36265 = G__36281;
count__35507_36266 = G__36282;
i__35508_36267 = G__36283;
continue;
} else {
var child_36284 = cljs.core.first(seq__35504_36278__$1);
if(cljs.core.truth_(child_36284)){
node.appendChild(child_36284);


var G__36285 = cljs.core.next(seq__35504_36278__$1);
var G__36286 = null;
var G__36287 = (0);
var G__36288 = (0);
seq__35504_36264 = G__36285;
chunk__35506_36265 = G__36286;
count__35507_36266 = G__36287;
i__35508_36267 = G__36288;
continue;
} else {
var G__36289 = cljs.core.next(seq__35504_36278__$1);
var G__36290 = null;
var G__36291 = (0);
var G__36292 = (0);
seq__35504_36264 = G__36289;
chunk__35506_36265 = G__36290;
count__35507_36266 = G__36291;
i__35508_36267 = G__36292;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36263);
}
}


var G__36293 = seq__35486_36257;
var G__36294 = chunk__35488_36258;
var G__36295 = count__35489_36259;
var G__36296 = (i__35490_36260 + (1));
seq__35486_36257 = G__36293;
chunk__35488_36258 = G__36294;
count__35489_36259 = G__36295;
i__35490_36260 = G__36296;
continue;
} else {
var G__36297 = seq__35486_36257;
var G__36298 = chunk__35488_36258;
var G__36299 = count__35489_36259;
var G__36300 = (i__35490_36260 + (1));
seq__35486_36257 = G__36297;
chunk__35488_36258 = G__36298;
count__35489_36259 = G__36299;
i__35490_36260 = G__36300;
continue;
}
} else {
var temp__5753__auto___36301 = cljs.core.seq(seq__35486_36257);
if(temp__5753__auto___36301){
var seq__35486_36305__$1 = temp__5753__auto___36301;
if(cljs.core.chunked_seq_QMARK_(seq__35486_36305__$1)){
var c__4679__auto___36306 = cljs.core.chunk_first(seq__35486_36305__$1);
var G__36307 = cljs.core.chunk_rest(seq__35486_36305__$1);
var G__36308 = c__4679__auto___36306;
var G__36309 = cljs.core.count(c__4679__auto___36306);
var G__36310 = (0);
seq__35486_36257 = G__36307;
chunk__35488_36258 = G__36308;
count__35489_36259 = G__36309;
i__35490_36260 = G__36310;
continue;
} else {
var child_struct_36311 = cljs.core.first(seq__35486_36305__$1);
if((!((child_struct_36311 == null)))){
if(typeof child_struct_36311 === 'string'){
var text_36312 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36312),child_struct_36311].join(''));
} else {
var children_36313 = shadow.dom.svg_node(child_struct_36311);
if(cljs.core.seq_QMARK_(children_36313)){
var seq__35520_36314 = cljs.core.seq(children_36313);
var chunk__35522_36315 = null;
var count__35523_36316 = (0);
var i__35524_36317 = (0);
while(true){
if((i__35524_36317 < count__35523_36316)){
var child_36318 = chunk__35522_36315.cljs$core$IIndexed$_nth$arity$2(null,i__35524_36317);
if(cljs.core.truth_(child_36318)){
node.appendChild(child_36318);


var G__36320 = seq__35520_36314;
var G__36321 = chunk__35522_36315;
var G__36322 = count__35523_36316;
var G__36323 = (i__35524_36317 + (1));
seq__35520_36314 = G__36320;
chunk__35522_36315 = G__36321;
count__35523_36316 = G__36322;
i__35524_36317 = G__36323;
continue;
} else {
var G__36324 = seq__35520_36314;
var G__36325 = chunk__35522_36315;
var G__36326 = count__35523_36316;
var G__36327 = (i__35524_36317 + (1));
seq__35520_36314 = G__36324;
chunk__35522_36315 = G__36325;
count__35523_36316 = G__36326;
i__35524_36317 = G__36327;
continue;
}
} else {
var temp__5753__auto___36328__$1 = cljs.core.seq(seq__35520_36314);
if(temp__5753__auto___36328__$1){
var seq__35520_36329__$1 = temp__5753__auto___36328__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35520_36329__$1)){
var c__4679__auto___36330 = cljs.core.chunk_first(seq__35520_36329__$1);
var G__36331 = cljs.core.chunk_rest(seq__35520_36329__$1);
var G__36332 = c__4679__auto___36330;
var G__36333 = cljs.core.count(c__4679__auto___36330);
var G__36334 = (0);
seq__35520_36314 = G__36331;
chunk__35522_36315 = G__36332;
count__35523_36316 = G__36333;
i__35524_36317 = G__36334;
continue;
} else {
var child_36335 = cljs.core.first(seq__35520_36329__$1);
if(cljs.core.truth_(child_36335)){
node.appendChild(child_36335);


var G__36336 = cljs.core.next(seq__35520_36329__$1);
var G__36337 = null;
var G__36338 = (0);
var G__36339 = (0);
seq__35520_36314 = G__36336;
chunk__35522_36315 = G__36337;
count__35523_36316 = G__36338;
i__35524_36317 = G__36339;
continue;
} else {
var G__36340 = cljs.core.next(seq__35520_36329__$1);
var G__36341 = null;
var G__36342 = (0);
var G__36343 = (0);
seq__35520_36314 = G__36340;
chunk__35522_36315 = G__36341;
count__35523_36316 = G__36342;
i__35524_36317 = G__36343;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36313);
}
}


var G__36344 = cljs.core.next(seq__35486_36305__$1);
var G__36345 = null;
var G__36346 = (0);
var G__36347 = (0);
seq__35486_36257 = G__36344;
chunk__35488_36258 = G__36345;
count__35489_36259 = G__36346;
i__35490_36260 = G__36347;
continue;
} else {
var G__36348 = cljs.core.next(seq__35486_36305__$1);
var G__36349 = null;
var G__36350 = (0);
var G__36351 = (0);
seq__35486_36257 = G__36348;
chunk__35488_36258 = G__36349;
count__35489_36259 = G__36350;
i__35490_36260 = G__36351;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36356 = arguments.length;
var i__4865__auto___36357 = (0);
while(true){
if((i__4865__auto___36357 < len__4864__auto___36356)){
args__4870__auto__.push((arguments[i__4865__auto___36357]));

var G__36358 = (i__4865__auto___36357 + (1));
i__4865__auto___36357 = G__36358;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35535){
var G__35536 = cljs.core.first(seq35535);
var seq35535__$1 = cljs.core.next(seq35535);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35536,seq35535__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35544 = arguments.length;
switch (G__35544) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32407__auto___36371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_35556){
var state_val_35557 = (state_35556[(1)]);
if((state_val_35557 === (1))){
var state_35556__$1 = state_35556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35556__$1,(2),once_or_cleanup);
} else {
if((state_val_35557 === (2))){
var inst_35553 = (state_35556[(2)]);
var inst_35554 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35556__$1 = (function (){var statearr_35563 = state_35556;
(statearr_35563[(7)] = inst_35553);

return statearr_35563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35556__$1,inst_35554);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32210__auto__ = null;
var shadow$dom$state_machine__32210__auto____0 = (function (){
var statearr_35565 = [null,null,null,null,null,null,null,null];
(statearr_35565[(0)] = shadow$dom$state_machine__32210__auto__);

(statearr_35565[(1)] = (1));

return statearr_35565;
});
var shadow$dom$state_machine__32210__auto____1 = (function (state_35556){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_35556);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e35567){var ex__32213__auto__ = e35567;
var statearr_35568_36372 = state_35556;
(statearr_35568_36372[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_35556[(4)]))){
var statearr_35569_36373 = state_35556;
(statearr_35569_36373[(1)] = cljs.core.first((state_35556[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36374 = state_35556;
state_35556 = G__36374;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
shadow$dom$state_machine__32210__auto__ = function(state_35556){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32210__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32210__auto____1.call(this,state_35556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32210__auto____0;
shadow$dom$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32210__auto____1;
return shadow$dom$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_35572 = f__32408__auto__();
(statearr_35572[(6)] = c__32407__auto___36371);

return statearr_35572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
