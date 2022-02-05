goog.provide('reagent.impl.util');
goog.scope(function(){
  reagent.impl.util.goog$module$goog$object = goog.module.get('goog.object');
});
reagent.impl.util.is_client = (((typeof window !== 'undefined')) && ((!((window.document == null)))));
reagent.impl.util._STAR_non_reactive_STAR_ = false;
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mem),arg);
if((!((v == null)))){
return v;
} else {
var ret = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg) : f.call(null,arg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join('');
}
});
reagent.impl.util.dash_to_prop_name = (function reagent$impl$util$dash_to_prop_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__37070 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var seq__37071 = cljs.core.seq(vec__37070);
var first__37072 = cljs.core.first(seq__37071);
var seq__37071__$1 = cljs.core.next(seq__37071);
var start = first__37072;
var parts = seq__37071__$1;
if(cljs.core.truth_((reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(start) : reagent.impl.util.dont_camel_case.call(null,start)))){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});
reagent.impl.util.dash_to_method_name = (function reagent$impl$util$dash_to_method_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var name_str__$1 = clojure.string.replace(name_str,/(unsafe|UNSAFE)[-_]/,"UNSAFE_");
var vec__37077 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str__$1,/-/);
var seq__37078 = cljs.core.seq(vec__37077);
var first__37079 = cljs.core.first(seq__37078);
var seq__37078__$1 = cljs.core.next(seq__37078);
var start = first__37079;
var parts = seq__37078__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
});
reagent.impl.util.fun_name = (function reagent$impl$util$fun_name(f){
var n = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core.fn_QMARK_(f);
if(and__4251__auto__){
var or__4253__auto__ = f.displayName;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var n = f.name;
if(((typeof n === 'string') && (cljs.core.seq(n)))){
return n;
} else {
return null;
}
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var and__4251__auto__ = (((!((f == null))))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false);
if(and__4251__auto__){
return cljs.core.name(f);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(n)){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"$",".");
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.Fn}
*/
reagent.impl.util.PartialFn = (function (pfn,f,args){
this.pfn = pfn;
this.f = f;
this.args = args;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.impl.util.PartialFn.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.impl.util.PartialFn.prototype.call = (function() {
var G__37278 = null;
var G__37278__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$0 ? self__.pfn.cljs$core$IFn$_invoke$arity$0() : self__.pfn.call(null));
});
var G__37278__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$1 ? self__.pfn.cljs$core$IFn$_invoke$arity$1(a) : self__.pfn.call(null,a));
});
var G__37278__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$2 ? self__.pfn.cljs$core$IFn$_invoke$arity$2(a,b) : self__.pfn.call(null,a,b));
});
var G__37278__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$3 ? self__.pfn.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.pfn.call(null,a,b,c));
});
var G__37278__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$4 ? self__.pfn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.pfn.call(null,a,b,c,d));
});
var G__37278__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$5 ? self__.pfn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.pfn.call(null,a,b,c,d,e));
});
var G__37278__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$6 ? self__.pfn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : self__.pfn.call(null,a,b,c,d,e,f__$1));
});
var G__37278__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$7 ? self__.pfn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : self__.pfn.call(null,a,b,c,d,e,f__$1,g));
});
var G__37278__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$8 ? self__.pfn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h));
});
var G__37278__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$9 ? self__.pfn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i));
});
var G__37278__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$10 ? self__.pfn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j));
});
var G__37278__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$11 ? self__.pfn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
});
var G__37278__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$12 ? self__.pfn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
});
var G__37278__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$13 ? self__.pfn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
});
var G__37278__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$14 ? self__.pfn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
});
var G__37278__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$15 ? self__.pfn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
});
var G__37278__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$16 ? self__.pfn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
});
var G__37278__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$17 ? self__.pfn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
});
var G__37278__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$18 ? self__.pfn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__37278__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$19 ? self__.pfn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__37278__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$20 ? self__.pfn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__37278__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.pfn,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__37278 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__37278__1.call(this,self__);
case 2:
return G__37278__2.call(this,self__,a);
case 3:
return G__37278__3.call(this,self__,a,b);
case 4:
return G__37278__4.call(this,self__,a,b,c);
case 5:
return G__37278__5.call(this,self__,a,b,c,d);
case 6:
return G__37278__6.call(this,self__,a,b,c,d,e);
case 7:
return G__37278__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__37278__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__37278__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__37278__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__37278__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__37278__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__37278__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__37278__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__37278__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__37278__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__37278__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__37278__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__37278__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__37278__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__37278__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__37278__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37278.cljs$core$IFn$_invoke$arity$1 = G__37278__1;
G__37278.cljs$core$IFn$_invoke$arity$2 = G__37278__2;
G__37278.cljs$core$IFn$_invoke$arity$3 = G__37278__3;
G__37278.cljs$core$IFn$_invoke$arity$4 = G__37278__4;
G__37278.cljs$core$IFn$_invoke$arity$5 = G__37278__5;
G__37278.cljs$core$IFn$_invoke$arity$6 = G__37278__6;
G__37278.cljs$core$IFn$_invoke$arity$7 = G__37278__7;
G__37278.cljs$core$IFn$_invoke$arity$8 = G__37278__8;
G__37278.cljs$core$IFn$_invoke$arity$9 = G__37278__9;
G__37278.cljs$core$IFn$_invoke$arity$10 = G__37278__10;
G__37278.cljs$core$IFn$_invoke$arity$11 = G__37278__11;
G__37278.cljs$core$IFn$_invoke$arity$12 = G__37278__12;
G__37278.cljs$core$IFn$_invoke$arity$13 = G__37278__13;
G__37278.cljs$core$IFn$_invoke$arity$14 = G__37278__14;
G__37278.cljs$core$IFn$_invoke$arity$15 = G__37278__15;
G__37278.cljs$core$IFn$_invoke$arity$16 = G__37278__16;
G__37278.cljs$core$IFn$_invoke$arity$17 = G__37278__17;
G__37278.cljs$core$IFn$_invoke$arity$18 = G__37278__18;
G__37278.cljs$core$IFn$_invoke$arity$19 = G__37278__19;
G__37278.cljs$core$IFn$_invoke$arity$20 = G__37278__20;
G__37278.cljs$core$IFn$_invoke$arity$21 = G__37278__21;
G__37278.cljs$core$IFn$_invoke$arity$22 = G__37278__22;
return G__37278;
})()
);

(reagent.impl.util.PartialFn.prototype.apply = (function (self__,args37141){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37141)));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$0 ? self__.pfn.cljs$core$IFn$_invoke$arity$0() : self__.pfn.call(null));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$1 ? self__.pfn.cljs$core$IFn$_invoke$arity$1(a) : self__.pfn.call(null,a));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$2 ? self__.pfn.cljs$core$IFn$_invoke$arity$2(a,b) : self__.pfn.call(null,a,b));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$3 ? self__.pfn.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.pfn.call(null,a,b,c));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$4 ? self__.pfn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.pfn.call(null,a,b,c,d));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$5 ? self__.pfn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.pfn.call(null,a,b,c,d,e));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$6 ? self__.pfn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : self__.pfn.call(null,a,b,c,d,e,f__$1));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$7 ? self__.pfn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : self__.pfn.call(null,a,b,c,d,e,f__$1,g));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$8 ? self__.pfn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$9 ? self__.pfn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$10 ? self__.pfn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$11 ? self__.pfn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$12 ? self__.pfn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$13 ? self__.pfn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$14 ? self__.pfn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$15 ? self__.pfn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$16 ? self__.pfn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$17 ? self__.pfn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$18 ? self__.pfn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$19 ? self__.pfn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$20 ? self__.pfn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.pfn,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.impl.util.PartialFn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)))));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(reagent.impl.util.PartialFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pfn","pfn",-513383568,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(reagent.impl.util.PartialFn.cljs$lang$type = true);

(reagent.impl.util.PartialFn.cljs$lang$ctorStr = "reagent.impl.util/PartialFn");

(reagent.impl.util.PartialFn.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"reagent.impl.util/PartialFn");
}));

/**
 * Positional factory function for reagent.impl.util/PartialFn.
 */
reagent.impl.util.__GT_PartialFn = (function reagent$impl$util$__GT_PartialFn(pfn,f,args){
return (new reagent.impl.util.PartialFn(pfn,f,args));
});

reagent.impl.util.make_partial_fn = (function reagent$impl$util$make_partial_fn(f,args){
return reagent.impl.util.__GT_PartialFn(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,f,args),f,args);
});
reagent.impl.util.named_QMARK_ = (function reagent$impl$util$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
reagent.impl.util.class_names = (function reagent$impl$util$class_names(var_args){
var G__37226 = arguments.length;
switch (G__37226) {
case 0:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___37358 = arguments.length;
var i__4865__auto___37359 = (0);
while(true){
if((i__4865__auto___37359 < len__4864__auto___37358)){
args_arr__4885__auto__.push((arguments[i__4865__auto___37359]));

var G__37361 = (i__4865__auto___37359 + (1));
i__4865__auto___37359 = G__37361;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
if(cljs.core.coll_QMARK_(class$)){
var classes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (c){
if(cljs.core.truth_(c)){
if(reagent.impl.util.named_QMARK_(c)){
return cljs.core.name(c);
} else {
return c;
}
} else {
return null;
}
}),class$);
if(cljs.core.seq(classes)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes);
} else {
return null;
}
} else {
if(reagent.impl.util.named_QMARK_(class$)){
return cljs.core.name(class$);
} else {
return class$;
}
}
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_(a)){
if(cljs.core.truth_(b)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(b))].join('');
} else {
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(a);
}
} else {
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(b);
}
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rst){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.class_names,reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(a,b),rst);
}));

/** @this {Function} */
(reagent.impl.util.class_names.cljs$lang$applyTo = (function (seq37223){
var G__37224 = cljs.core.first(seq37223);
var seq37223__$1 = cljs.core.next(seq37223);
var G__37225 = cljs.core.first(seq37223__$1);
var seq37223__$2 = cljs.core.next(seq37223__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37224,G__37225,seq37223__$2);
}));

(reagent.impl.util.class_names.cljs$lang$maxFixedArity = (2));

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
if(((cljs.core.contains_QMARK_(p1,new cljs.core.Keyword(null,"class","class",-2030961996))) || (cljs.core.contains_QMARK_(p2,new cljs.core.Keyword(null,"class","class",-2030961996))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2)));
} else {
return p2;
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5753__auto__)){
var s1 = temp__5753__auto__;
var temp__5753__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5753__auto____$1)){
var s2 = temp__5753__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(var_args){
var G__37235 = arguments.length;
switch (G__37235) {
case 0:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___37378 = arguments.length;
var i__4865__auto___37379 = (0);
while(true){
if((i__4865__auto___37379 < len__4864__auto___37378)){
args_arr__4885__auto__.push((arguments[i__4865__auto___37379]));

var G__37381 = (i__4865__auto___37379 + (1));
i__4865__auto___37379 = G__37381;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (p){
var temp__5751__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(c));
} else {
return p;
}
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
if((p1 == null)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(c));
} else {
return p2;
}
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error(["Assert failed: ",["Property must be a map, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1], 0))].join(''),"\n","(map? p1)"].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,p2))], 0));
}
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (p1,p2,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.merge_props,reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2(p1,p2),ps);
}));

/** @this {Function} */
(reagent.impl.util.merge_props.cljs$lang$applyTo = (function (seq37232){
var G__37233 = cljs.core.first(seq37232);
var seq37232__$1 = cljs.core.next(seq37232);
var G__37234 = cljs.core.first(seq37232__$1);
var seq37232__$2 = cljs.core.next(seq37232__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37233,G__37234,seq37232__$2);
}));

(reagent.impl.util.merge_props.cljs$lang$maxFixedArity = (2));

reagent.impl.util._STAR_always_update_STAR_ = false;
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR__orig_val__37242 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37243 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37243);

try{return comp.forceUpdate();
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37242);
}} else {
return comp.forceUpdate();
}
});
reagent.impl.util.shallow_obj_to_map = (function reagent$impl$util$shallow_obj_to_map(o){
var ks = cljs.core.js_keys(o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__37390 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),reagent.impl.util.goog$module$goog$object.get(o,k));
var G__37391 = (i + (1));
m = G__37390;
i = G__37391;
continue;
} else {
return m;
}
break;
}
});
reagent.impl.util.js_val_QMARK_ = (function reagent$impl$util$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
reagent.impl.util.try_get_react_key = (function reagent$impl$util$try_get_react_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e37244){var e = e37244;
return null;
}});
reagent.impl.util.get_react_key = (function reagent$impl$util$get_react_key(x){
if(cljs.core.map_QMARK_(x)){
return reagent.impl.util.try_get_react_key(x);
} else {
return null;
}
});
reagent.impl.util.react_key_from_vec = (function reagent$impl$util$react_key_from_vec(v){
var or__4253__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = reagent.impl.util.get_react_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var G__37245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
var G__37245__$1 = (((G__37245 instanceof cljs.core.Keyword))?G__37245.fqn:null);
switch (G__37245__$1) {
case ">":
case "f>":
return reagent.impl.util.get_react_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),null));

break;
case "r>":
var G__37247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),null);
if((G__37247 == null)){
return null;
} else {
return G__37247.key;
}

break;
default:
return null;

}
}
}
});
reagent.impl.util.str_coll = (function reagent$impl$util$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = reagent.impl.util.fun_name(x);
var G__37251 = n;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",G__37251)){
return x;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__37251)){
return x;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
}
} else {
return x;
}
}),coll));

});
reagent.impl.util.hiccup_err = (function reagent$impl$util$hiccup_err(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37395 = arguments.length;
var i__4865__auto___37397 = (0);
while(true){
if((i__4865__auto___37397 < len__4864__auto___37395)){
args__4870__auto__.push((arguments[i__4865__auto___37397]));

var G__37399 = (i__4865__auto___37397 + (1));
i__4865__auto___37397 = G__37399;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,comp_name,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",reagent.impl.util.str_coll(v),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comp_name)].join('');
}));

(reagent.impl.util.hiccup_err.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.impl.util.hiccup_err.cljs$lang$applyTo = (function (seq37254){
var G__37255 = cljs.core.first(seq37254);
var seq37254__$1 = cljs.core.next(seq37254);
var G__37256 = cljs.core.first(seq37254__$1);
var seq37254__$2 = cljs.core.next(seq37254__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37255,G__37256,seq37254__$2);
}));


//# sourceMappingURL=reagent.impl.util.js.map
