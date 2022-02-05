goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32484 = arguments.length;
switch (G__32484) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32489 = (function (f,blockable,meta32490){
this.f = f;
this.blockable = blockable;
this.meta32490 = meta32490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32491,meta32490__$1){
var self__ = this;
var _32491__$1 = this;
return (new cljs.core.async.t_cljs$core$async32489(self__.f,self__.blockable,meta32490__$1));
}));

(cljs.core.async.t_cljs$core$async32489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32491){
var self__ = this;
var _32491__$1 = this;
return self__.meta32490;
}));

(cljs.core.async.t_cljs$core$async32489.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32489.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32490","meta32490",-321199630,null)], null);
}));

(cljs.core.async.t_cljs$core$async32489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32489");

(cljs.core.async.t_cljs$core$async32489.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32489.
 */
cljs.core.async.__GT_t_cljs$core$async32489 = (function cljs$core$async$__GT_t_cljs$core$async32489(f__$1,blockable__$1,meta32490){
return (new cljs.core.async.t_cljs$core$async32489(f__$1,blockable__$1,meta32490));
});

}

return (new cljs.core.async.t_cljs$core$async32489(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32504 = arguments.length;
switch (G__32504) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32509 = arguments.length;
switch (G__32509) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32516 = arguments.length;
switch (G__32516) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34747 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34747) : fn1.call(null,val_34747));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34747) : fn1.call(null,val_34747));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32524 = arguments.length;
switch (G__32524) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___34751 = n;
var x_34752 = (0);
while(true){
if((x_34752 < n__4741__auto___34751)){
(a[x_34752] = x_34752);

var G__34753 = (x_34752 + (1));
x_34752 = G__34753;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32530 = (function (flag,meta32531){
this.flag = flag;
this.meta32531 = meta32531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32532,meta32531__$1){
var self__ = this;
var _32532__$1 = this;
return (new cljs.core.async.t_cljs$core$async32530(self__.flag,meta32531__$1));
}));

(cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32532){
var self__ = this;
var _32532__$1 = this;
return self__.meta32531;
}));

(cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32531","meta32531",1797787147,null)], null);
}));

(cljs.core.async.t_cljs$core$async32530.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32530");

(cljs.core.async.t_cljs$core$async32530.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32530");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32530.
 */
cljs.core.async.__GT_t_cljs$core$async32530 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32530(flag__$1,meta32531){
return (new cljs.core.async.t_cljs$core$async32530(flag__$1,meta32531));
});

}

return (new cljs.core.async.t_cljs$core$async32530(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32534 = (function (flag,cb,meta32535){
this.flag = flag;
this.cb = cb;
this.meta32535 = meta32535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32536,meta32535__$1){
var self__ = this;
var _32536__$1 = this;
return (new cljs.core.async.t_cljs$core$async32534(self__.flag,self__.cb,meta32535__$1));
}));

(cljs.core.async.t_cljs$core$async32534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32536){
var self__ = this;
var _32536__$1 = this;
return self__.meta32535;
}));

(cljs.core.async.t_cljs$core$async32534.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32535","meta32535",1172264719,null)], null);
}));

(cljs.core.async.t_cljs$core$async32534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32534");

(cljs.core.async.t_cljs$core$async32534.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32534.
 */
cljs.core.async.__GT_t_cljs$core$async32534 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32534(flag__$1,cb__$1,meta32535){
return (new cljs.core.async.t_cljs$core$async32534(flag__$1,cb__$1,meta32535));
});

}

return (new cljs.core.async.t_cljs$core$async32534(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32539_SHARP_){
var G__32541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32539_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32541) : fret.call(null,G__32541));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32540_SHARP_){
var G__32545 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32540_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32545) : fret.call(null,G__32545));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34756 = (i + (1));
i = G__34756;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34757 = arguments.length;
var i__4865__auto___34758 = (0);
while(true){
if((i__4865__auto___34758 < len__4864__auto___34757)){
args__4870__auto__.push((arguments[i__4865__auto___34758]));

var G__34759 = (i__4865__auto___34758 + (1));
i__4865__auto___34758 = G__34759;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32567){
var map__32568 = p__32567;
var map__32568__$1 = cljs.core.__destructure_map(map__32568);
var opts = map__32568__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32556){
var G__32557 = cljs.core.first(seq32556);
var seq32556__$1 = cljs.core.next(seq32556);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32557,seq32556__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32577 = arguments.length;
switch (G__32577) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32407__auto___34762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_32622){
var state_val_32623 = (state_32622[(1)]);
if((state_val_32623 === (7))){
var inst_32615 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32627_34763 = state_32622__$1;
(statearr_32627_34763[(2)] = inst_32615);

(statearr_32627_34763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (1))){
var state_32622__$1 = state_32622;
var statearr_32628_34764 = state_32622__$1;
(statearr_32628_34764[(2)] = null);

(statearr_32628_34764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (4))){
var inst_32596 = (state_32622[(7)]);
var inst_32596__$1 = (state_32622[(2)]);
var inst_32597 = (inst_32596__$1 == null);
var state_32622__$1 = (function (){var statearr_32631 = state_32622;
(statearr_32631[(7)] = inst_32596__$1);

return statearr_32631;
})();
if(cljs.core.truth_(inst_32597)){
var statearr_32632_34765 = state_32622__$1;
(statearr_32632_34765[(1)] = (5));

} else {
var statearr_32633_34766 = state_32622__$1;
(statearr_32633_34766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (13))){
var state_32622__$1 = state_32622;
var statearr_32634_34767 = state_32622__$1;
(statearr_32634_34767[(2)] = null);

(statearr_32634_34767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (6))){
var inst_32596 = (state_32622[(7)]);
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32622__$1,(11),to,inst_32596);
} else {
if((state_val_32623 === (3))){
var inst_32619 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32622__$1,inst_32619);
} else {
if((state_val_32623 === (12))){
var state_32622__$1 = state_32622;
var statearr_32635_34770 = state_32622__$1;
(statearr_32635_34770[(2)] = null);

(statearr_32635_34770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (2))){
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32622__$1,(4),from);
} else {
if((state_val_32623 === (11))){
var inst_32606 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
if(cljs.core.truth_(inst_32606)){
var statearr_32640_34771 = state_32622__$1;
(statearr_32640_34771[(1)] = (12));

} else {
var statearr_32641_34772 = state_32622__$1;
(statearr_32641_34772[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (9))){
var state_32622__$1 = state_32622;
var statearr_32642_34773 = state_32622__$1;
(statearr_32642_34773[(2)] = null);

(statearr_32642_34773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (5))){
var state_32622__$1 = state_32622;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32643_34774 = state_32622__$1;
(statearr_32643_34774[(1)] = (8));

} else {
var statearr_32644_34775 = state_32622__$1;
(statearr_32644_34775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (14))){
var inst_32613 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32647_34776 = state_32622__$1;
(statearr_32647_34776[(2)] = inst_32613);

(statearr_32647_34776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (10))){
var inst_32603 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32649_34777 = state_32622__$1;
(statearr_32649_34777[(2)] = inst_32603);

(statearr_32649_34777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (8))){
var inst_32600 = cljs.core.async.close_BANG_(to);
var state_32622__$1 = state_32622;
var statearr_32654_34779 = state_32622__$1;
(statearr_32654_34779[(2)] = inst_32600);

(statearr_32654_34779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_32655 = [null,null,null,null,null,null,null,null];
(statearr_32655[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_32655[(1)] = (1));

return statearr_32655;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_32622){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32622);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32656){var ex__32213__auto__ = e32656;
var statearr_32657_34781 = state_32622;
(statearr_32657_34781[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32622[(4)]))){
var statearr_32658_34782 = state_32622;
(statearr_32658_34782[(1)] = cljs.core.first((state_32622[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34783 = state_32622;
state_32622 = G__34783;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_32622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_32622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_32660 = f__32408__auto__();
(statearr_32660[(6)] = c__32407__auto___34762);

return statearr_32660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32666){
var vec__32668 = p__32666;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32668,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32668,(1),null);
var job = vec__32668;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32407__auto___34785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_32676){
var state_val_32677 = (state_32676[(1)]);
if((state_val_32677 === (1))){
var state_32676__$1 = state_32676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32676__$1,(2),res,v);
} else {
if((state_val_32677 === (2))){
var inst_32673 = (state_32676[(2)]);
var inst_32674 = cljs.core.async.close_BANG_(res);
var state_32676__$1 = (function (){var statearr_32679 = state_32676;
(statearr_32679[(7)] = inst_32673);

return statearr_32679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32676__$1,inst_32674);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_32683 = [null,null,null,null,null,null,null,null];
(statearr_32683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__);

(statearr_32683[(1)] = (1));

return statearr_32683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1 = (function (state_32676){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32676);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32690){var ex__32213__auto__ = e32690;
var statearr_32692_34789 = state_32676;
(statearr_32692_34789[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32676[(4)]))){
var statearr_32698_34790 = state_32676;
(statearr_32698_34790[(1)] = cljs.core.first((state_32676[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34791 = state_32676;
state_32676 = G__34791;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = function(state_32676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1.call(this,state_32676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_32712 = f__32408__auto__();
(statearr_32712[(6)] = c__32407__auto___34785);

return statearr_32712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32713){
var vec__32714 = p__32713;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32714,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32714,(1),null);
var job = vec__32714;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___34793 = n;
var __34794 = (0);
while(true){
if((__34794 < n__4741__auto___34793)){
var G__32723_34795 = type;
var G__32723_34796__$1 = (((G__32723_34795 instanceof cljs.core.Keyword))?G__32723_34795.fqn:null);
switch (G__32723_34796__$1) {
case "compute":
var c__32407__auto___34799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34794,c__32407__auto___34799,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async){
return (function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = ((function (__34794,c__32407__auto___34799,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async){
return (function (state_32737){
var state_val_32738 = (state_32737[(1)]);
if((state_val_32738 === (1))){
var state_32737__$1 = state_32737;
var statearr_32740_34800 = state_32737__$1;
(statearr_32740_34800[(2)] = null);

(statearr_32740_34800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (2))){
var state_32737__$1 = state_32737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32737__$1,(4),jobs);
} else {
if((state_val_32738 === (3))){
var inst_32735 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32737__$1,inst_32735);
} else {
if((state_val_32738 === (4))){
var inst_32727 = (state_32737[(2)]);
var inst_32728 = process(inst_32727);
var state_32737__$1 = state_32737;
if(cljs.core.truth_(inst_32728)){
var statearr_32745_34802 = state_32737__$1;
(statearr_32745_34802[(1)] = (5));

} else {
var statearr_32746_34803 = state_32737__$1;
(statearr_32746_34803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (5))){
var state_32737__$1 = state_32737;
var statearr_32748_34804 = state_32737__$1;
(statearr_32748_34804[(2)] = null);

(statearr_32748_34804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (6))){
var state_32737__$1 = state_32737;
var statearr_32749_34815 = state_32737__$1;
(statearr_32749_34815[(2)] = null);

(statearr_32749_34815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (7))){
var inst_32733 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32750_34816 = state_32737__$1;
(statearr_32750_34816[(2)] = inst_32733);

(statearr_32750_34816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34794,c__32407__auto___34799,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async))
;
return ((function (__34794,switch__32209__auto__,c__32407__auto___34799,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_32751 = [null,null,null,null,null,null,null];
(statearr_32751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__);

(statearr_32751[(1)] = (1));

return statearr_32751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1 = (function (state_32737){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32737);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32753){var ex__32213__auto__ = e32753;
var statearr_32754_34817 = state_32737;
(statearr_32754_34817[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32737[(4)]))){
var statearr_32755_34819 = state_32737;
(statearr_32755_34819[(1)] = cljs.core.first((state_32737[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34821 = state_32737;
state_32737 = G__34821;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = function(state_32737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1.call(this,state_32737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__;
})()
;})(__34794,switch__32209__auto__,c__32407__auto___34799,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async))
})();
var state__32409__auto__ = (function (){var statearr_32756 = f__32408__auto__();
(statearr_32756[(6)] = c__32407__auto___34799);

return statearr_32756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
});})(__34794,c__32407__auto___34799,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async))
);


break;
case "async":
var c__32407__auto___34822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34794,c__32407__auto___34822,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async){
return (function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = ((function (__34794,c__32407__auto___34822,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async){
return (function (state_32778){
var state_val_32780 = (state_32778[(1)]);
if((state_val_32780 === (1))){
var state_32778__$1 = state_32778;
var statearr_32793_34823 = state_32778__$1;
(statearr_32793_34823[(2)] = null);

(statearr_32793_34823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (2))){
var state_32778__$1 = state_32778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32778__$1,(4),jobs);
} else {
if((state_val_32780 === (3))){
var inst_32776 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32778__$1,inst_32776);
} else {
if((state_val_32780 === (4))){
var inst_32763 = (state_32778[(2)]);
var inst_32765 = async(inst_32763);
var state_32778__$1 = state_32778;
if(cljs.core.truth_(inst_32765)){
var statearr_32795_34825 = state_32778__$1;
(statearr_32795_34825[(1)] = (5));

} else {
var statearr_32796_34826 = state_32778__$1;
(statearr_32796_34826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (5))){
var state_32778__$1 = state_32778;
var statearr_32797_34827 = state_32778__$1;
(statearr_32797_34827[(2)] = null);

(statearr_32797_34827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (6))){
var state_32778__$1 = state_32778;
var statearr_32807_34828 = state_32778__$1;
(statearr_32807_34828[(2)] = null);

(statearr_32807_34828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (7))){
var inst_32770 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
var statearr_32817_34829 = state_32778__$1;
(statearr_32817_34829[(2)] = inst_32770);

(statearr_32817_34829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34794,c__32407__auto___34822,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async))
;
return ((function (__34794,switch__32209__auto__,c__32407__auto___34822,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_32825 = [null,null,null,null,null,null,null];
(statearr_32825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__);

(statearr_32825[(1)] = (1));

return statearr_32825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1 = (function (state_32778){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32778);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32826){var ex__32213__auto__ = e32826;
var statearr_32827_34832 = state_32778;
(statearr_32827_34832[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32778[(4)]))){
var statearr_32840_34833 = state_32778;
(statearr_32840_34833[(1)] = cljs.core.first((state_32778[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34834 = state_32778;
state_32778 = G__34834;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = function(state_32778){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1.call(this,state_32778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__;
})()
;})(__34794,switch__32209__auto__,c__32407__auto___34822,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async))
})();
var state__32409__auto__ = (function (){var statearr_32852 = f__32408__auto__();
(statearr_32852[(6)] = c__32407__auto___34822);

return statearr_32852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
});})(__34794,c__32407__auto___34822,G__32723_34795,G__32723_34796__$1,n__4741__auto___34793,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32723_34796__$1)].join('')));

}

var G__34835 = (__34794 + (1));
__34794 = G__34835;
continue;
} else {
}
break;
}

var c__32407__auto___34836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_32892){
var state_val_32893 = (state_32892[(1)]);
if((state_val_32893 === (7))){
var inst_32888 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
var statearr_32895_34837 = state_32892__$1;
(statearr_32895_34837[(2)] = inst_32888);

(statearr_32895_34837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (1))){
var state_32892__$1 = state_32892;
var statearr_32896_34838 = state_32892__$1;
(statearr_32896_34838[(2)] = null);

(statearr_32896_34838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (4))){
var inst_32873 = (state_32892[(7)]);
var inst_32873__$1 = (state_32892[(2)]);
var inst_32874 = (inst_32873__$1 == null);
var state_32892__$1 = (function (){var statearr_32898 = state_32892;
(statearr_32898[(7)] = inst_32873__$1);

return statearr_32898;
})();
if(cljs.core.truth_(inst_32874)){
var statearr_32899_34839 = state_32892__$1;
(statearr_32899_34839[(1)] = (5));

} else {
var statearr_32900_34840 = state_32892__$1;
(statearr_32900_34840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (6))){
var inst_32878 = (state_32892[(8)]);
var inst_32873 = (state_32892[(7)]);
var inst_32878__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32879 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32880 = [inst_32873,inst_32878__$1];
var inst_32881 = (new cljs.core.PersistentVector(null,2,(5),inst_32879,inst_32880,null));
var state_32892__$1 = (function (){var statearr_32901 = state_32892;
(statearr_32901[(8)] = inst_32878__$1);

return statearr_32901;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32892__$1,(8),jobs,inst_32881);
} else {
if((state_val_32893 === (3))){
var inst_32890 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32892__$1,inst_32890);
} else {
if((state_val_32893 === (2))){
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32892__$1,(4),from);
} else {
if((state_val_32893 === (9))){
var inst_32885 = (state_32892[(2)]);
var state_32892__$1 = (function (){var statearr_32902 = state_32892;
(statearr_32902[(9)] = inst_32885);

return statearr_32902;
})();
var statearr_32903_34842 = state_32892__$1;
(statearr_32903_34842[(2)] = null);

(statearr_32903_34842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (5))){
var inst_32876 = cljs.core.async.close_BANG_(jobs);
var state_32892__$1 = state_32892;
var statearr_32904_34843 = state_32892__$1;
(statearr_32904_34843[(2)] = inst_32876);

(statearr_32904_34843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32893 === (8))){
var inst_32878 = (state_32892[(8)]);
var inst_32883 = (state_32892[(2)]);
var state_32892__$1 = (function (){var statearr_32906 = state_32892;
(statearr_32906[(10)] = inst_32883);

return statearr_32906;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32892__$1,(9),results,inst_32878);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_32907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32907[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__);

(statearr_32907[(1)] = (1));

return statearr_32907;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1 = (function (state_32892){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32892);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e32912){var ex__32213__auto__ = e32912;
var statearr_32913_34844 = state_32892;
(statearr_32913_34844[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32892[(4)]))){
var statearr_32918_34845 = state_32892;
(statearr_32918_34845[(1)] = cljs.core.first((state_32892[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34846 = state_32892;
state_32892 = G__34846;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = function(state_32892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1.call(this,state_32892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_32919 = f__32408__auto__();
(statearr_32919[(6)] = c__32407__auto___34836);

return statearr_32919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


var c__32407__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_32962){
var state_val_32963 = (state_32962[(1)]);
if((state_val_32963 === (7))){
var inst_32958 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32977_34851 = state_32962__$1;
(statearr_32977_34851[(2)] = inst_32958);

(statearr_32977_34851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (20))){
var state_32962__$1 = state_32962;
var statearr_32986_34852 = state_32962__$1;
(statearr_32986_34852[(2)] = null);

(statearr_32986_34852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (1))){
var state_32962__$1 = state_32962;
var statearr_32987_34853 = state_32962__$1;
(statearr_32987_34853[(2)] = null);

(statearr_32987_34853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (4))){
var inst_32926 = (state_32962[(7)]);
var inst_32926__$1 = (state_32962[(2)]);
var inst_32927 = (inst_32926__$1 == null);
var state_32962__$1 = (function (){var statearr_32988 = state_32962;
(statearr_32988[(7)] = inst_32926__$1);

return statearr_32988;
})();
if(cljs.core.truth_(inst_32927)){
var statearr_32989_34854 = state_32962__$1;
(statearr_32989_34854[(1)] = (5));

} else {
var statearr_32990_34855 = state_32962__$1;
(statearr_32990_34855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (15))){
var inst_32940 = (state_32962[(8)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32962__$1,(18),to,inst_32940);
} else {
if((state_val_32963 === (21))){
var inst_32953 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32992_34856 = state_32962__$1;
(statearr_32992_34856[(2)] = inst_32953);

(statearr_32992_34856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (13))){
var inst_32955 = (state_32962[(2)]);
var state_32962__$1 = (function (){var statearr_32993 = state_32962;
(statearr_32993[(9)] = inst_32955);

return statearr_32993;
})();
var statearr_32994_34857 = state_32962__$1;
(statearr_32994_34857[(2)] = null);

(statearr_32994_34857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (6))){
var inst_32926 = (state_32962[(7)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32962__$1,(11),inst_32926);
} else {
if((state_val_32963 === (17))){
var inst_32948 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
if(cljs.core.truth_(inst_32948)){
var statearr_32995_34858 = state_32962__$1;
(statearr_32995_34858[(1)] = (19));

} else {
var statearr_32996_34859 = state_32962__$1;
(statearr_32996_34859[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (3))){
var inst_32960 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32962__$1,inst_32960);
} else {
if((state_val_32963 === (12))){
var inst_32937 = (state_32962[(10)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32962__$1,(14),inst_32937);
} else {
if((state_val_32963 === (2))){
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32962__$1,(4),results);
} else {
if((state_val_32963 === (19))){
var state_32962__$1 = state_32962;
var statearr_32997_34861 = state_32962__$1;
(statearr_32997_34861[(2)] = null);

(statearr_32997_34861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (11))){
var inst_32937 = (state_32962[(2)]);
var state_32962__$1 = (function (){var statearr_32998 = state_32962;
(statearr_32998[(10)] = inst_32937);

return statearr_32998;
})();
var statearr_32999_34862 = state_32962__$1;
(statearr_32999_34862[(2)] = null);

(statearr_32999_34862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (9))){
var state_32962__$1 = state_32962;
var statearr_33001_34863 = state_32962__$1;
(statearr_33001_34863[(2)] = null);

(statearr_33001_34863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (5))){
var state_32962__$1 = state_32962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33002_34864 = state_32962__$1;
(statearr_33002_34864[(1)] = (8));

} else {
var statearr_33003_34865 = state_32962__$1;
(statearr_33003_34865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (14))){
var inst_32942 = (state_32962[(11)]);
var inst_32940 = (state_32962[(8)]);
var inst_32940__$1 = (state_32962[(2)]);
var inst_32941 = (inst_32940__$1 == null);
var inst_32942__$1 = cljs.core.not(inst_32941);
var state_32962__$1 = (function (){var statearr_33004 = state_32962;
(statearr_33004[(11)] = inst_32942__$1);

(statearr_33004[(8)] = inst_32940__$1);

return statearr_33004;
})();
if(inst_32942__$1){
var statearr_33005_34866 = state_32962__$1;
(statearr_33005_34866[(1)] = (15));

} else {
var statearr_33006_34867 = state_32962__$1;
(statearr_33006_34867[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (16))){
var inst_32942 = (state_32962[(11)]);
var state_32962__$1 = state_32962;
var statearr_33007_34868 = state_32962__$1;
(statearr_33007_34868[(2)] = inst_32942);

(statearr_33007_34868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (10))){
var inst_32933 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_33008_34869 = state_32962__$1;
(statearr_33008_34869[(2)] = inst_32933);

(statearr_33008_34869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (18))){
var inst_32945 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_33009_34870 = state_32962__$1;
(statearr_33009_34870[(2)] = inst_32945);

(statearr_33009_34870[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (8))){
var inst_32930 = cljs.core.async.close_BANG_(to);
var state_32962__$1 = state_32962;
var statearr_33011_34872 = state_32962__$1;
(statearr_33011_34872[(2)] = inst_32930);

(statearr_33011_34872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_33012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__);

(statearr_33012[(1)] = (1));

return statearr_33012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1 = (function (state_32962){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_32962);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33013){var ex__32213__auto__ = e33013;
var statearr_33014_34874 = state_32962;
(statearr_33014_34874[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_32962[(4)]))){
var statearr_33015_34875 = state_32962;
(statearr_33015_34875[(1)] = cljs.core.first((state_32962[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34876 = state_32962;
state_32962 = G__34876;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__ = function(state_32962){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1.call(this,state_32962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_33016 = f__32408__auto__();
(statearr_33016[(6)] = c__32407__auto__);

return statearr_33016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));

return c__32407__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33019 = arguments.length;
switch (G__33019) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33022 = arguments.length;
switch (G__33022) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33025 = arguments.length;
switch (G__33025) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32407__auto___34887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_33051){
var state_val_33052 = (state_33051[(1)]);
if((state_val_33052 === (7))){
var inst_33047 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
var statearr_33054_34888 = state_33051__$1;
(statearr_33054_34888[(2)] = inst_33047);

(statearr_33054_34888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (1))){
var state_33051__$1 = state_33051;
var statearr_33055_34889 = state_33051__$1;
(statearr_33055_34889[(2)] = null);

(statearr_33055_34889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (4))){
var inst_33028 = (state_33051[(7)]);
var inst_33028__$1 = (state_33051[(2)]);
var inst_33029 = (inst_33028__$1 == null);
var state_33051__$1 = (function (){var statearr_33056 = state_33051;
(statearr_33056[(7)] = inst_33028__$1);

return statearr_33056;
})();
if(cljs.core.truth_(inst_33029)){
var statearr_33057_34893 = state_33051__$1;
(statearr_33057_34893[(1)] = (5));

} else {
var statearr_33058_34894 = state_33051__$1;
(statearr_33058_34894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (13))){
var state_33051__$1 = state_33051;
var statearr_33059_34895 = state_33051__$1;
(statearr_33059_34895[(2)] = null);

(statearr_33059_34895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (6))){
var inst_33028 = (state_33051[(7)]);
var inst_33034 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33028) : p.call(null,inst_33028));
var state_33051__$1 = state_33051;
if(cljs.core.truth_(inst_33034)){
var statearr_33060_34899 = state_33051__$1;
(statearr_33060_34899[(1)] = (9));

} else {
var statearr_33061_34900 = state_33051__$1;
(statearr_33061_34900[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (3))){
var inst_33049 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33051__$1,inst_33049);
} else {
if((state_val_33052 === (12))){
var state_33051__$1 = state_33051;
var statearr_33062_34901 = state_33051__$1;
(statearr_33062_34901[(2)] = null);

(statearr_33062_34901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (2))){
var state_33051__$1 = state_33051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33051__$1,(4),ch);
} else {
if((state_val_33052 === (11))){
var inst_33028 = (state_33051[(7)]);
var inst_33038 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33051__$1,(8),inst_33038,inst_33028);
} else {
if((state_val_33052 === (9))){
var state_33051__$1 = state_33051;
var statearr_33063_34905 = state_33051__$1;
(statearr_33063_34905[(2)] = tc);

(statearr_33063_34905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (5))){
var inst_33031 = cljs.core.async.close_BANG_(tc);
var inst_33032 = cljs.core.async.close_BANG_(fc);
var state_33051__$1 = (function (){var statearr_33065 = state_33051;
(statearr_33065[(8)] = inst_33031);

return statearr_33065;
})();
var statearr_33066_34906 = state_33051__$1;
(statearr_33066_34906[(2)] = inst_33032);

(statearr_33066_34906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (14))){
var inst_33045 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
var statearr_33067_34907 = state_33051__$1;
(statearr_33067_34907[(2)] = inst_33045);

(statearr_33067_34907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (10))){
var state_33051__$1 = state_33051;
var statearr_33068_34908 = state_33051__$1;
(statearr_33068_34908[(2)] = fc);

(statearr_33068_34908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33052 === (8))){
var inst_33040 = (state_33051[(2)]);
var state_33051__$1 = state_33051;
if(cljs.core.truth_(inst_33040)){
var statearr_33069_34913 = state_33051__$1;
(statearr_33069_34913[(1)] = (12));

} else {
var statearr_33070_34914 = state_33051__$1;
(statearr_33070_34914[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_33071 = [null,null,null,null,null,null,null,null,null];
(statearr_33071[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_33071[(1)] = (1));

return statearr_33071;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_33051){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33051);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33072){var ex__32213__auto__ = e33072;
var statearr_33073_34918 = state_33051;
(statearr_33073_34918[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33051[(4)]))){
var statearr_33074_34919 = state_33051;
(statearr_33074_34919[(1)] = cljs.core.first((state_33051[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34920 = state_33051;
state_33051 = G__34920;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_33051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_33051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_33075 = f__32408__auto__();
(statearr_33075[(6)] = c__32407__auto___34887);

return statearr_33075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32407__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_33098){
var state_val_33099 = (state_33098[(1)]);
if((state_val_33099 === (7))){
var inst_33094 = (state_33098[(2)]);
var state_33098__$1 = state_33098;
var statearr_33100_34924 = state_33098__$1;
(statearr_33100_34924[(2)] = inst_33094);

(statearr_33100_34924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (1))){
var inst_33077 = init;
var inst_33078 = inst_33077;
var state_33098__$1 = (function (){var statearr_33101 = state_33098;
(statearr_33101[(7)] = inst_33078);

return statearr_33101;
})();
var statearr_33102_34925 = state_33098__$1;
(statearr_33102_34925[(2)] = null);

(statearr_33102_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (4))){
var inst_33081 = (state_33098[(8)]);
var inst_33081__$1 = (state_33098[(2)]);
var inst_33082 = (inst_33081__$1 == null);
var state_33098__$1 = (function (){var statearr_33103 = state_33098;
(statearr_33103[(8)] = inst_33081__$1);

return statearr_33103;
})();
if(cljs.core.truth_(inst_33082)){
var statearr_33104_34929 = state_33098__$1;
(statearr_33104_34929[(1)] = (5));

} else {
var statearr_33105_34930 = state_33098__$1;
(statearr_33105_34930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (6))){
var inst_33081 = (state_33098[(8)]);
var inst_33078 = (state_33098[(7)]);
var inst_33085 = (state_33098[(9)]);
var inst_33085__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33078,inst_33081) : f.call(null,inst_33078,inst_33081));
var inst_33086 = cljs.core.reduced_QMARK_(inst_33085__$1);
var state_33098__$1 = (function (){var statearr_33106 = state_33098;
(statearr_33106[(9)] = inst_33085__$1);

return statearr_33106;
})();
if(inst_33086){
var statearr_33108_34933 = state_33098__$1;
(statearr_33108_34933[(1)] = (8));

} else {
var statearr_33109_34937 = state_33098__$1;
(statearr_33109_34937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (3))){
var inst_33096 = (state_33098[(2)]);
var state_33098__$1 = state_33098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33098__$1,inst_33096);
} else {
if((state_val_33099 === (2))){
var state_33098__$1 = state_33098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33098__$1,(4),ch);
} else {
if((state_val_33099 === (9))){
var inst_33085 = (state_33098[(9)]);
var inst_33078 = inst_33085;
var state_33098__$1 = (function (){var statearr_33110 = state_33098;
(statearr_33110[(7)] = inst_33078);

return statearr_33110;
})();
var statearr_33111_34938 = state_33098__$1;
(statearr_33111_34938[(2)] = null);

(statearr_33111_34938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (5))){
var inst_33078 = (state_33098[(7)]);
var state_33098__$1 = state_33098;
var statearr_33112_34940 = state_33098__$1;
(statearr_33112_34940[(2)] = inst_33078);

(statearr_33112_34940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (10))){
var inst_33092 = (state_33098[(2)]);
var state_33098__$1 = state_33098;
var statearr_33113_34941 = state_33098__$1;
(statearr_33113_34941[(2)] = inst_33092);

(statearr_33113_34941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33099 === (8))){
var inst_33085 = (state_33098[(9)]);
var inst_33088 = cljs.core.deref(inst_33085);
var state_33098__$1 = state_33098;
var statearr_33114_34943 = state_33098__$1;
(statearr_33114_34943[(2)] = inst_33088);

(statearr_33114_34943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32210__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32210__auto____0 = (function (){
var statearr_33115 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33115[(0)] = cljs$core$async$reduce_$_state_machine__32210__auto__);

(statearr_33115[(1)] = (1));

return statearr_33115;
});
var cljs$core$async$reduce_$_state_machine__32210__auto____1 = (function (state_33098){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33098);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33116){var ex__32213__auto__ = e33116;
var statearr_33117_34944 = state_33098;
(statearr_33117_34944[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33098[(4)]))){
var statearr_33118_34945 = state_33098;
(statearr_33118_34945[(1)] = cljs.core.first((state_33098[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34946 = state_33098;
state_33098 = G__34946;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32210__auto__ = function(state_33098){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32210__auto____1.call(this,state_33098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32210__auto____0;
cljs$core$async$reduce_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32210__auto____1;
return cljs$core$async$reduce_$_state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_33120 = f__32408__auto__();
(statearr_33120[(6)] = c__32407__auto__);

return statearr_33120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));

return c__32407__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32407__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_33126){
var state_val_33127 = (state_33126[(1)]);
if((state_val_33127 === (1))){
var inst_33121 = cljs.core.async.reduce(f__$1,init,ch);
var state_33126__$1 = state_33126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33126__$1,(2),inst_33121);
} else {
if((state_val_33127 === (2))){
var inst_33123 = (state_33126[(2)]);
var inst_33124 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33123) : f__$1.call(null,inst_33123));
var state_33126__$1 = state_33126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33126__$1,inst_33124);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32210__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32210__auto____0 = (function (){
var statearr_33129 = [null,null,null,null,null,null,null];
(statearr_33129[(0)] = cljs$core$async$transduce_$_state_machine__32210__auto__);

(statearr_33129[(1)] = (1));

return statearr_33129;
});
var cljs$core$async$transduce_$_state_machine__32210__auto____1 = (function (state_33126){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33126);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33130){var ex__32213__auto__ = e33130;
var statearr_33131_34947 = state_33126;
(statearr_33131_34947[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33126[(4)]))){
var statearr_33132_34948 = state_33126;
(statearr_33132_34948[(1)] = cljs.core.first((state_33126[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34949 = state_33126;
state_33126 = G__34949;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32210__auto__ = function(state_33126){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32210__auto____1.call(this,state_33126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32210__auto____0;
cljs$core$async$transduce_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32210__auto____1;
return cljs$core$async$transduce_$_state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_33133 = f__32408__auto__();
(statearr_33133[(6)] = c__32407__auto__);

return statearr_33133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));

return c__32407__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33135 = arguments.length;
switch (G__33135) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32407__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_33161){
var state_val_33162 = (state_33161[(1)]);
if((state_val_33162 === (7))){
var inst_33143 = (state_33161[(2)]);
var state_33161__$1 = state_33161;
var statearr_33163_34960 = state_33161__$1;
(statearr_33163_34960[(2)] = inst_33143);

(statearr_33163_34960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (1))){
var inst_33137 = cljs.core.seq(coll);
var inst_33138 = inst_33137;
var state_33161__$1 = (function (){var statearr_33165 = state_33161;
(statearr_33165[(7)] = inst_33138);

return statearr_33165;
})();
var statearr_33166_34961 = state_33161__$1;
(statearr_33166_34961[(2)] = null);

(statearr_33166_34961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (4))){
var inst_33138 = (state_33161[(7)]);
var inst_33141 = cljs.core.first(inst_33138);
var state_33161__$1 = state_33161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33161__$1,(7),ch,inst_33141);
} else {
if((state_val_33162 === (13))){
var inst_33155 = (state_33161[(2)]);
var state_33161__$1 = state_33161;
var statearr_33167_34962 = state_33161__$1;
(statearr_33167_34962[(2)] = inst_33155);

(statearr_33167_34962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (6))){
var inst_33146 = (state_33161[(2)]);
var state_33161__$1 = state_33161;
if(cljs.core.truth_(inst_33146)){
var statearr_33168_34963 = state_33161__$1;
(statearr_33168_34963[(1)] = (8));

} else {
var statearr_33169_34964 = state_33161__$1;
(statearr_33169_34964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (3))){
var inst_33159 = (state_33161[(2)]);
var state_33161__$1 = state_33161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33161__$1,inst_33159);
} else {
if((state_val_33162 === (12))){
var state_33161__$1 = state_33161;
var statearr_33170_34966 = state_33161__$1;
(statearr_33170_34966[(2)] = null);

(statearr_33170_34966[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (2))){
var inst_33138 = (state_33161[(7)]);
var state_33161__$1 = state_33161;
if(cljs.core.truth_(inst_33138)){
var statearr_33171_34967 = state_33161__$1;
(statearr_33171_34967[(1)] = (4));

} else {
var statearr_33172_34968 = state_33161__$1;
(statearr_33172_34968[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (11))){
var inst_33152 = cljs.core.async.close_BANG_(ch);
var state_33161__$1 = state_33161;
var statearr_33174_34969 = state_33161__$1;
(statearr_33174_34969[(2)] = inst_33152);

(statearr_33174_34969[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (9))){
var state_33161__$1 = state_33161;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33175_34970 = state_33161__$1;
(statearr_33175_34970[(1)] = (11));

} else {
var statearr_33176_34971 = state_33161__$1;
(statearr_33176_34971[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (5))){
var inst_33138 = (state_33161[(7)]);
var state_33161__$1 = state_33161;
var statearr_33177_34972 = state_33161__$1;
(statearr_33177_34972[(2)] = inst_33138);

(statearr_33177_34972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (10))){
var inst_33157 = (state_33161[(2)]);
var state_33161__$1 = state_33161;
var statearr_33178_34973 = state_33161__$1;
(statearr_33178_34973[(2)] = inst_33157);

(statearr_33178_34973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (8))){
var inst_33138 = (state_33161[(7)]);
var inst_33148 = cljs.core.next(inst_33138);
var inst_33138__$1 = inst_33148;
var state_33161__$1 = (function (){var statearr_33179 = state_33161;
(statearr_33179[(7)] = inst_33138__$1);

return statearr_33179;
})();
var statearr_33180_34974 = state_33161__$1;
(statearr_33180_34974[(2)] = null);

(statearr_33180_34974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_33181 = [null,null,null,null,null,null,null,null];
(statearr_33181[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_33181[(1)] = (1));

return statearr_33181;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_33161){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33161);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33182){var ex__32213__auto__ = e33182;
var statearr_33184_34977 = state_33161;
(statearr_33184_34977[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33161[(4)]))){
var statearr_33185_34978 = state_33161;
(statearr_33185_34978[(1)] = cljs.core.first((state_33161[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34979 = state_33161;
state_33161 = G__34979;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_33161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_33161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_33186 = f__32408__auto__();
(statearr_33186[(6)] = c__32407__auto__);

return statearr_33186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));

return c__32407__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33188 = arguments.length;
switch (G__33188) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34986 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34986(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34988 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34988(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34989 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34989(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34990 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34990(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33191 = (function (ch,cs,meta33192){
this.ch = ch;
this.cs = cs;
this.meta33192 = meta33192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33193,meta33192__$1){
var self__ = this;
var _33193__$1 = this;
return (new cljs.core.async.t_cljs$core$async33191(self__.ch,self__.cs,meta33192__$1));
}));

(cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33193){
var self__ = this;
var _33193__$1 = this;
return self__.meta33192;
}));

(cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33191.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33192","meta33192",1025412495,null)], null);
}));

(cljs.core.async.t_cljs$core$async33191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33191");

(cljs.core.async.t_cljs$core$async33191.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33191.
 */
cljs.core.async.__GT_t_cljs$core$async33191 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33191(ch__$1,cs__$1,meta33192){
return (new cljs.core.async.t_cljs$core$async33191(ch__$1,cs__$1,meta33192));
});

}

return (new cljs.core.async.t_cljs$core$async33191(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32407__auto___35004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_33329){
var state_val_33330 = (state_33329[(1)]);
if((state_val_33330 === (7))){
var inst_33325 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33331_35010 = state_33329__$1;
(statearr_33331_35010[(2)] = inst_33325);

(statearr_33331_35010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (20))){
var inst_33229 = (state_33329[(7)]);
var inst_33241 = cljs.core.first(inst_33229);
var inst_33242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33241,(0),null);
var inst_33243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33241,(1),null);
var state_33329__$1 = (function (){var statearr_33332 = state_33329;
(statearr_33332[(8)] = inst_33242);

return statearr_33332;
})();
if(cljs.core.truth_(inst_33243)){
var statearr_33333_35018 = state_33329__$1;
(statearr_33333_35018[(1)] = (22));

} else {
var statearr_33334_35019 = state_33329__$1;
(statearr_33334_35019[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (27))){
var inst_33273 = (state_33329[(9)]);
var inst_33271 = (state_33329[(10)]);
var inst_33197 = (state_33329[(11)]);
var inst_33278 = (state_33329[(12)]);
var inst_33278__$1 = cljs.core._nth(inst_33271,inst_33273);
var inst_33279 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33278__$1,inst_33197,done);
var state_33329__$1 = (function (){var statearr_33335 = state_33329;
(statearr_33335[(12)] = inst_33278__$1);

return statearr_33335;
})();
if(cljs.core.truth_(inst_33279)){
var statearr_33336_35020 = state_33329__$1;
(statearr_33336_35020[(1)] = (30));

} else {
var statearr_33337_35021 = state_33329__$1;
(statearr_33337_35021[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (1))){
var state_33329__$1 = state_33329;
var statearr_33339_35022 = state_33329__$1;
(statearr_33339_35022[(2)] = null);

(statearr_33339_35022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (24))){
var inst_33229 = (state_33329[(7)]);
var inst_33248 = (state_33329[(2)]);
var inst_33249 = cljs.core.next(inst_33229);
var inst_33207 = inst_33249;
var inst_33208 = null;
var inst_33209 = (0);
var inst_33210 = (0);
var state_33329__$1 = (function (){var statearr_33340 = state_33329;
(statearr_33340[(13)] = inst_33248);

(statearr_33340[(14)] = inst_33208);

(statearr_33340[(15)] = inst_33210);

(statearr_33340[(16)] = inst_33207);

(statearr_33340[(17)] = inst_33209);

return statearr_33340;
})();
var statearr_33341_35023 = state_33329__$1;
(statearr_33341_35023[(2)] = null);

(statearr_33341_35023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (39))){
var state_33329__$1 = state_33329;
var statearr_33345_35024 = state_33329__$1;
(statearr_33345_35024[(2)] = null);

(statearr_33345_35024[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (4))){
var inst_33197 = (state_33329[(11)]);
var inst_33197__$1 = (state_33329[(2)]);
var inst_33198 = (inst_33197__$1 == null);
var state_33329__$1 = (function (){var statearr_33346 = state_33329;
(statearr_33346[(11)] = inst_33197__$1);

return statearr_33346;
})();
if(cljs.core.truth_(inst_33198)){
var statearr_33347_35025 = state_33329__$1;
(statearr_33347_35025[(1)] = (5));

} else {
var statearr_33348_35026 = state_33329__$1;
(statearr_33348_35026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (15))){
var inst_33208 = (state_33329[(14)]);
var inst_33210 = (state_33329[(15)]);
var inst_33207 = (state_33329[(16)]);
var inst_33209 = (state_33329[(17)]);
var inst_33225 = (state_33329[(2)]);
var inst_33226 = (inst_33210 + (1));
var tmp33342 = inst_33208;
var tmp33343 = inst_33207;
var tmp33344 = inst_33209;
var inst_33207__$1 = tmp33343;
var inst_33208__$1 = tmp33342;
var inst_33209__$1 = tmp33344;
var inst_33210__$1 = inst_33226;
var state_33329__$1 = (function (){var statearr_33349 = state_33329;
(statearr_33349[(18)] = inst_33225);

(statearr_33349[(14)] = inst_33208__$1);

(statearr_33349[(15)] = inst_33210__$1);

(statearr_33349[(16)] = inst_33207__$1);

(statearr_33349[(17)] = inst_33209__$1);

return statearr_33349;
})();
var statearr_33350_35027 = state_33329__$1;
(statearr_33350_35027[(2)] = null);

(statearr_33350_35027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (21))){
var inst_33252 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33354_35041 = state_33329__$1;
(statearr_33354_35041[(2)] = inst_33252);

(statearr_33354_35041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (31))){
var inst_33278 = (state_33329[(12)]);
var inst_33282 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33278);
var state_33329__$1 = state_33329;
var statearr_33356_35042 = state_33329__$1;
(statearr_33356_35042[(2)] = inst_33282);

(statearr_33356_35042[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (32))){
var inst_33273 = (state_33329[(9)]);
var inst_33270 = (state_33329[(19)]);
var inst_33271 = (state_33329[(10)]);
var inst_33272 = (state_33329[(20)]);
var inst_33284 = (state_33329[(2)]);
var inst_33285 = (inst_33273 + (1));
var tmp33351 = inst_33270;
var tmp33352 = inst_33271;
var tmp33353 = inst_33272;
var inst_33270__$1 = tmp33351;
var inst_33271__$1 = tmp33352;
var inst_33272__$1 = tmp33353;
var inst_33273__$1 = inst_33285;
var state_33329__$1 = (function (){var statearr_33357 = state_33329;
(statearr_33357[(9)] = inst_33273__$1);

(statearr_33357[(19)] = inst_33270__$1);

(statearr_33357[(10)] = inst_33271__$1);

(statearr_33357[(20)] = inst_33272__$1);

(statearr_33357[(21)] = inst_33284);

return statearr_33357;
})();
var statearr_33358_35044 = state_33329__$1;
(statearr_33358_35044[(2)] = null);

(statearr_33358_35044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (40))){
var inst_33297 = (state_33329[(22)]);
var inst_33301 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33297);
var state_33329__$1 = state_33329;
var statearr_33359_35045 = state_33329__$1;
(statearr_33359_35045[(2)] = inst_33301);

(statearr_33359_35045[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (33))){
var inst_33288 = (state_33329[(23)]);
var inst_33290 = cljs.core.chunked_seq_QMARK_(inst_33288);
var state_33329__$1 = state_33329;
if(inst_33290){
var statearr_33360_35046 = state_33329__$1;
(statearr_33360_35046[(1)] = (36));

} else {
var statearr_33361_35047 = state_33329__$1;
(statearr_33361_35047[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (13))){
var inst_33219 = (state_33329[(24)]);
var inst_33222 = cljs.core.async.close_BANG_(inst_33219);
var state_33329__$1 = state_33329;
var statearr_33362_35048 = state_33329__$1;
(statearr_33362_35048[(2)] = inst_33222);

(statearr_33362_35048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (22))){
var inst_33242 = (state_33329[(8)]);
var inst_33245 = cljs.core.async.close_BANG_(inst_33242);
var state_33329__$1 = state_33329;
var statearr_33363_35049 = state_33329__$1;
(statearr_33363_35049[(2)] = inst_33245);

(statearr_33363_35049[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (36))){
var inst_33288 = (state_33329[(23)]);
var inst_33292 = cljs.core.chunk_first(inst_33288);
var inst_33293 = cljs.core.chunk_rest(inst_33288);
var inst_33294 = cljs.core.count(inst_33292);
var inst_33270 = inst_33293;
var inst_33271 = inst_33292;
var inst_33272 = inst_33294;
var inst_33273 = (0);
var state_33329__$1 = (function (){var statearr_33364 = state_33329;
(statearr_33364[(9)] = inst_33273);

(statearr_33364[(19)] = inst_33270);

(statearr_33364[(10)] = inst_33271);

(statearr_33364[(20)] = inst_33272);

return statearr_33364;
})();
var statearr_33365_35059 = state_33329__$1;
(statearr_33365_35059[(2)] = null);

(statearr_33365_35059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (41))){
var inst_33288 = (state_33329[(23)]);
var inst_33304 = (state_33329[(2)]);
var inst_33305 = cljs.core.next(inst_33288);
var inst_33270 = inst_33305;
var inst_33271 = null;
var inst_33272 = (0);
var inst_33273 = (0);
var state_33329__$1 = (function (){var statearr_33367 = state_33329;
(statearr_33367[(9)] = inst_33273);

(statearr_33367[(19)] = inst_33270);

(statearr_33367[(10)] = inst_33271);

(statearr_33367[(20)] = inst_33272);

(statearr_33367[(25)] = inst_33304);

return statearr_33367;
})();
var statearr_33368_35066 = state_33329__$1;
(statearr_33368_35066[(2)] = null);

(statearr_33368_35066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (43))){
var state_33329__$1 = state_33329;
var statearr_33369_35067 = state_33329__$1;
(statearr_33369_35067[(2)] = null);

(statearr_33369_35067[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (29))){
var inst_33313 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33370_35068 = state_33329__$1;
(statearr_33370_35068[(2)] = inst_33313);

(statearr_33370_35068[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (44))){
var inst_33322 = (state_33329[(2)]);
var state_33329__$1 = (function (){var statearr_33371 = state_33329;
(statearr_33371[(26)] = inst_33322);

return statearr_33371;
})();
var statearr_33372_35073 = state_33329__$1;
(statearr_33372_35073[(2)] = null);

(statearr_33372_35073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (6))){
var inst_33262 = (state_33329[(27)]);
var inst_33261 = cljs.core.deref(cs);
var inst_33262__$1 = cljs.core.keys(inst_33261);
var inst_33263 = cljs.core.count(inst_33262__$1);
var inst_33264 = cljs.core.reset_BANG_(dctr,inst_33263);
var inst_33269 = cljs.core.seq(inst_33262__$1);
var inst_33270 = inst_33269;
var inst_33271 = null;
var inst_33272 = (0);
var inst_33273 = (0);
var state_33329__$1 = (function (){var statearr_33373 = state_33329;
(statearr_33373[(9)] = inst_33273);

(statearr_33373[(19)] = inst_33270);

(statearr_33373[(10)] = inst_33271);

(statearr_33373[(20)] = inst_33272);

(statearr_33373[(28)] = inst_33264);

(statearr_33373[(27)] = inst_33262__$1);

return statearr_33373;
})();
var statearr_33374_35074 = state_33329__$1;
(statearr_33374_35074[(2)] = null);

(statearr_33374_35074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (28))){
var inst_33288 = (state_33329[(23)]);
var inst_33270 = (state_33329[(19)]);
var inst_33288__$1 = cljs.core.seq(inst_33270);
var state_33329__$1 = (function (){var statearr_33375 = state_33329;
(statearr_33375[(23)] = inst_33288__$1);

return statearr_33375;
})();
if(inst_33288__$1){
var statearr_33376_35075 = state_33329__$1;
(statearr_33376_35075[(1)] = (33));

} else {
var statearr_33377_35080 = state_33329__$1;
(statearr_33377_35080[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (25))){
var inst_33273 = (state_33329[(9)]);
var inst_33272 = (state_33329[(20)]);
var inst_33275 = (inst_33273 < inst_33272);
var inst_33276 = inst_33275;
var state_33329__$1 = state_33329;
if(cljs.core.truth_(inst_33276)){
var statearr_33378_35084 = state_33329__$1;
(statearr_33378_35084[(1)] = (27));

} else {
var statearr_33380_35085 = state_33329__$1;
(statearr_33380_35085[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (34))){
var state_33329__$1 = state_33329;
var statearr_33381_35086 = state_33329__$1;
(statearr_33381_35086[(2)] = null);

(statearr_33381_35086[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (17))){
var state_33329__$1 = state_33329;
var statearr_33382_35087 = state_33329__$1;
(statearr_33382_35087[(2)] = null);

(statearr_33382_35087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (3))){
var inst_33327 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33329__$1,inst_33327);
} else {
if((state_val_33330 === (12))){
var inst_33257 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33383_35088 = state_33329__$1;
(statearr_33383_35088[(2)] = inst_33257);

(statearr_33383_35088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (2))){
var state_33329__$1 = state_33329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33329__$1,(4),ch);
} else {
if((state_val_33330 === (23))){
var state_33329__$1 = state_33329;
var statearr_33384_35090 = state_33329__$1;
(statearr_33384_35090[(2)] = null);

(statearr_33384_35090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (35))){
var inst_33311 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33385_35091 = state_33329__$1;
(statearr_33385_35091[(2)] = inst_33311);

(statearr_33385_35091[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (19))){
var inst_33229 = (state_33329[(7)]);
var inst_33233 = cljs.core.chunk_first(inst_33229);
var inst_33234 = cljs.core.chunk_rest(inst_33229);
var inst_33235 = cljs.core.count(inst_33233);
var inst_33207 = inst_33234;
var inst_33208 = inst_33233;
var inst_33209 = inst_33235;
var inst_33210 = (0);
var state_33329__$1 = (function (){var statearr_33386 = state_33329;
(statearr_33386[(14)] = inst_33208);

(statearr_33386[(15)] = inst_33210);

(statearr_33386[(16)] = inst_33207);

(statearr_33386[(17)] = inst_33209);

return statearr_33386;
})();
var statearr_33387_35098 = state_33329__$1;
(statearr_33387_35098[(2)] = null);

(statearr_33387_35098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (11))){
var inst_33229 = (state_33329[(7)]);
var inst_33207 = (state_33329[(16)]);
var inst_33229__$1 = cljs.core.seq(inst_33207);
var state_33329__$1 = (function (){var statearr_33388 = state_33329;
(statearr_33388[(7)] = inst_33229__$1);

return statearr_33388;
})();
if(inst_33229__$1){
var statearr_33389_35099 = state_33329__$1;
(statearr_33389_35099[(1)] = (16));

} else {
var statearr_33390_35100 = state_33329__$1;
(statearr_33390_35100[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (9))){
var inst_33259 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33392_35101 = state_33329__$1;
(statearr_33392_35101[(2)] = inst_33259);

(statearr_33392_35101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (5))){
var inst_33205 = cljs.core.deref(cs);
var inst_33206 = cljs.core.seq(inst_33205);
var inst_33207 = inst_33206;
var inst_33208 = null;
var inst_33209 = (0);
var inst_33210 = (0);
var state_33329__$1 = (function (){var statearr_33393 = state_33329;
(statearr_33393[(14)] = inst_33208);

(statearr_33393[(15)] = inst_33210);

(statearr_33393[(16)] = inst_33207);

(statearr_33393[(17)] = inst_33209);

return statearr_33393;
})();
var statearr_33394_35104 = state_33329__$1;
(statearr_33394_35104[(2)] = null);

(statearr_33394_35104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (14))){
var state_33329__$1 = state_33329;
var statearr_33395_35105 = state_33329__$1;
(statearr_33395_35105[(2)] = null);

(statearr_33395_35105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (45))){
var inst_33319 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33396_35106 = state_33329__$1;
(statearr_33396_35106[(2)] = inst_33319);

(statearr_33396_35106[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (26))){
var inst_33262 = (state_33329[(27)]);
var inst_33315 = (state_33329[(2)]);
var inst_33316 = cljs.core.seq(inst_33262);
var state_33329__$1 = (function (){var statearr_33397 = state_33329;
(statearr_33397[(29)] = inst_33315);

return statearr_33397;
})();
if(inst_33316){
var statearr_33398_35112 = state_33329__$1;
(statearr_33398_35112[(1)] = (42));

} else {
var statearr_33399_35113 = state_33329__$1;
(statearr_33399_35113[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (16))){
var inst_33229 = (state_33329[(7)]);
var inst_33231 = cljs.core.chunked_seq_QMARK_(inst_33229);
var state_33329__$1 = state_33329;
if(inst_33231){
var statearr_33400_35114 = state_33329__$1;
(statearr_33400_35114[(1)] = (19));

} else {
var statearr_33401_35115 = state_33329__$1;
(statearr_33401_35115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (38))){
var inst_33308 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33402_35116 = state_33329__$1;
(statearr_33402_35116[(2)] = inst_33308);

(statearr_33402_35116[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (30))){
var state_33329__$1 = state_33329;
var statearr_33403_35117 = state_33329__$1;
(statearr_33403_35117[(2)] = null);

(statearr_33403_35117[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (10))){
var inst_33208 = (state_33329[(14)]);
var inst_33210 = (state_33329[(15)]);
var inst_33218 = cljs.core._nth(inst_33208,inst_33210);
var inst_33219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33218,(0),null);
var inst_33220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33218,(1),null);
var state_33329__$1 = (function (){var statearr_33404 = state_33329;
(statearr_33404[(24)] = inst_33219);

return statearr_33404;
})();
if(cljs.core.truth_(inst_33220)){
var statearr_33406_35118 = state_33329__$1;
(statearr_33406_35118[(1)] = (13));

} else {
var statearr_33407_35119 = state_33329__$1;
(statearr_33407_35119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (18))){
var inst_33255 = (state_33329[(2)]);
var state_33329__$1 = state_33329;
var statearr_33408_35120 = state_33329__$1;
(statearr_33408_35120[(2)] = inst_33255);

(statearr_33408_35120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (42))){
var state_33329__$1 = state_33329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33329__$1,(45),dchan);
} else {
if((state_val_33330 === (37))){
var inst_33288 = (state_33329[(23)]);
var inst_33197 = (state_33329[(11)]);
var inst_33297 = (state_33329[(22)]);
var inst_33297__$1 = cljs.core.first(inst_33288);
var inst_33298 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33297__$1,inst_33197,done);
var state_33329__$1 = (function (){var statearr_33409 = state_33329;
(statearr_33409[(22)] = inst_33297__$1);

return statearr_33409;
})();
if(cljs.core.truth_(inst_33298)){
var statearr_33410_35122 = state_33329__$1;
(statearr_33410_35122[(1)] = (39));

} else {
var statearr_33411_35123 = state_33329__$1;
(statearr_33411_35123[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33330 === (8))){
var inst_33210 = (state_33329[(15)]);
var inst_33209 = (state_33329[(17)]);
var inst_33212 = (inst_33210 < inst_33209);
var inst_33213 = inst_33212;
var state_33329__$1 = state_33329;
if(cljs.core.truth_(inst_33213)){
var statearr_33412_35124 = state_33329__$1;
(statearr_33412_35124[(1)] = (10));

} else {
var statearr_33413_35125 = state_33329__$1;
(statearr_33413_35125[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32210__auto__ = null;
var cljs$core$async$mult_$_state_machine__32210__auto____0 = (function (){
var statearr_33414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33414[(0)] = cljs$core$async$mult_$_state_machine__32210__auto__);

(statearr_33414[(1)] = (1));

return statearr_33414;
});
var cljs$core$async$mult_$_state_machine__32210__auto____1 = (function (state_33329){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33329);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33415){var ex__32213__auto__ = e33415;
var statearr_33416_35130 = state_33329;
(statearr_33416_35130[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33329[(4)]))){
var statearr_33417_35131 = state_33329;
(statearr_33417_35131[(1)] = cljs.core.first((state_33329[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35132 = state_33329;
state_33329 = G__35132;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32210__auto__ = function(state_33329){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32210__auto____1.call(this,state_33329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32210__auto____0;
cljs$core$async$mult_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32210__auto____1;
return cljs$core$async$mult_$_state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_33419 = f__32408__auto__();
(statearr_33419[(6)] = c__32407__auto___35004);

return statearr_33419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33421 = arguments.length;
switch (G__33421) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35135 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35135(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35140 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35140(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35142 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35142(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35143 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35143(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35151 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35151(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35155 = arguments.length;
var i__4865__auto___35156 = (0);
while(true){
if((i__4865__auto___35156 < len__4864__auto___35155)){
args__4870__auto__.push((arguments[i__4865__auto___35156]));

var G__35157 = (i__4865__auto___35156 + (1));
i__4865__auto___35156 = G__35157;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33428){
var map__33430 = p__33428;
var map__33430__$1 = cljs.core.__destructure_map(map__33430);
var opts = map__33430__$1;
var statearr_33431_35158 = state;
(statearr_33431_35158[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33432_35160 = state;
(statearr_33432_35160[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33433_35164 = state;
(statearr_33433_35164[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33424){
var G__33425 = cljs.core.first(seq33424);
var seq33424__$1 = cljs.core.next(seq33424);
var G__33426 = cljs.core.first(seq33424__$1);
var seq33424__$2 = cljs.core.next(seq33424__$1);
var G__33427 = cljs.core.first(seq33424__$2);
var seq33424__$3 = cljs.core.next(seq33424__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33425,G__33426,G__33427,seq33424__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33435 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33436){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33436 = meta33436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33437,meta33436__$1){
var self__ = this;
var _33437__$1 = this;
return (new cljs.core.async.t_cljs$core$async33435(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33436__$1));
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33437){
var self__ = this;
var _33437__$1 = this;
return self__.meta33436;
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33435.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33436","meta33436",-853821444,null)], null);
}));

(cljs.core.async.t_cljs$core$async33435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33435");

(cljs.core.async.t_cljs$core$async33435.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33435.
 */
cljs.core.async.__GT_t_cljs$core$async33435 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33435(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33436){
return (new cljs.core.async.t_cljs$core$async33435(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33436));
});

}

return (new cljs.core.async.t_cljs$core$async33435(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32407__auto___35171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_33511){
var state_val_33512 = (state_33511[(1)]);
if((state_val_33512 === (7))){
var inst_33471 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
if(cljs.core.truth_(inst_33471)){
var statearr_33513_35172 = state_33511__$1;
(statearr_33513_35172[(1)] = (8));

} else {
var statearr_33514_35173 = state_33511__$1;
(statearr_33514_35173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (20))){
var inst_33464 = (state_33511[(7)]);
var state_33511__$1 = state_33511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33511__$1,(23),out,inst_33464);
} else {
if((state_val_33512 === (1))){
var inst_33445 = calc_state();
var inst_33446 = cljs.core.__destructure_map(inst_33445);
var inst_33447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33446,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33446,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33446,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33452 = inst_33445;
var state_33511__$1 = (function (){var statearr_33517 = state_33511;
(statearr_33517[(8)] = inst_33448);

(statearr_33517[(9)] = inst_33447);

(statearr_33517[(10)] = inst_33450);

(statearr_33517[(11)] = inst_33452);

return statearr_33517;
})();
var statearr_33518_35175 = state_33511__$1;
(statearr_33518_35175[(2)] = null);

(statearr_33518_35175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (24))){
var inst_33455 = (state_33511[(12)]);
var inst_33452 = inst_33455;
var state_33511__$1 = (function (){var statearr_33519 = state_33511;
(statearr_33519[(11)] = inst_33452);

return statearr_33519;
})();
var statearr_33520_35176 = state_33511__$1;
(statearr_33520_35176[(2)] = null);

(statearr_33520_35176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (4))){
var inst_33466 = (state_33511[(13)]);
var inst_33464 = (state_33511[(7)]);
var inst_33463 = (state_33511[(2)]);
var inst_33464__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33463,(0),null);
var inst_33465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33463,(1),null);
var inst_33466__$1 = (inst_33464__$1 == null);
var state_33511__$1 = (function (){var statearr_33521 = state_33511;
(statearr_33521[(13)] = inst_33466__$1);

(statearr_33521[(14)] = inst_33465);

(statearr_33521[(7)] = inst_33464__$1);

return statearr_33521;
})();
if(cljs.core.truth_(inst_33466__$1)){
var statearr_33522_35185 = state_33511__$1;
(statearr_33522_35185[(1)] = (5));

} else {
var statearr_33523_35186 = state_33511__$1;
(statearr_33523_35186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (15))){
var inst_33456 = (state_33511[(15)]);
var inst_33485 = (state_33511[(16)]);
var inst_33485__$1 = cljs.core.empty_QMARK_(inst_33456);
var state_33511__$1 = (function (){var statearr_33524 = state_33511;
(statearr_33524[(16)] = inst_33485__$1);

return statearr_33524;
})();
if(inst_33485__$1){
var statearr_33525_35188 = state_33511__$1;
(statearr_33525_35188[(1)] = (17));

} else {
var statearr_33526_35189 = state_33511__$1;
(statearr_33526_35189[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (21))){
var inst_33455 = (state_33511[(12)]);
var inst_33452 = inst_33455;
var state_33511__$1 = (function (){var statearr_33527 = state_33511;
(statearr_33527[(11)] = inst_33452);

return statearr_33527;
})();
var statearr_33528_35190 = state_33511__$1;
(statearr_33528_35190[(2)] = null);

(statearr_33528_35190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (13))){
var inst_33478 = (state_33511[(2)]);
var inst_33479 = calc_state();
var inst_33452 = inst_33479;
var state_33511__$1 = (function (){var statearr_33532 = state_33511;
(statearr_33532[(17)] = inst_33478);

(statearr_33532[(11)] = inst_33452);

return statearr_33532;
})();
var statearr_33533_35197 = state_33511__$1;
(statearr_33533_35197[(2)] = null);

(statearr_33533_35197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (22))){
var inst_33505 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
var statearr_33536_35201 = state_33511__$1;
(statearr_33536_35201[(2)] = inst_33505);

(statearr_33536_35201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (6))){
var inst_33465 = (state_33511[(14)]);
var inst_33469 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33465,change);
var state_33511__$1 = state_33511;
var statearr_33541_35202 = state_33511__$1;
(statearr_33541_35202[(2)] = inst_33469);

(statearr_33541_35202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (25))){
var state_33511__$1 = state_33511;
var statearr_33542_35207 = state_33511__$1;
(statearr_33542_35207[(2)] = null);

(statearr_33542_35207[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (17))){
var inst_33465 = (state_33511[(14)]);
var inst_33457 = (state_33511[(18)]);
var inst_33487 = (inst_33457.cljs$core$IFn$_invoke$arity$1 ? inst_33457.cljs$core$IFn$_invoke$arity$1(inst_33465) : inst_33457.call(null,inst_33465));
var inst_33488 = cljs.core.not(inst_33487);
var state_33511__$1 = state_33511;
var statearr_33543_35215 = state_33511__$1;
(statearr_33543_35215[(2)] = inst_33488);

(statearr_33543_35215[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (3))){
var inst_33509 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33511__$1,inst_33509);
} else {
if((state_val_33512 === (12))){
var state_33511__$1 = state_33511;
var statearr_33548_35216 = state_33511__$1;
(statearr_33548_35216[(2)] = null);

(statearr_33548_35216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (2))){
var inst_33455 = (state_33511[(12)]);
var inst_33452 = (state_33511[(11)]);
var inst_33455__$1 = cljs.core.__destructure_map(inst_33452);
var inst_33456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33455__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33455__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33455__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33511__$1 = (function (){var statearr_33553 = state_33511;
(statearr_33553[(12)] = inst_33455__$1);

(statearr_33553[(15)] = inst_33456);

(statearr_33553[(18)] = inst_33457);

return statearr_33553;
})();
return cljs.core.async.ioc_alts_BANG_(state_33511__$1,(4),inst_33458);
} else {
if((state_val_33512 === (23))){
var inst_33496 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
if(cljs.core.truth_(inst_33496)){
var statearr_33555_35229 = state_33511__$1;
(statearr_33555_35229[(1)] = (24));

} else {
var statearr_33558_35230 = state_33511__$1;
(statearr_33558_35230[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (19))){
var inst_33491 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
var statearr_33561_35237 = state_33511__$1;
(statearr_33561_35237[(2)] = inst_33491);

(statearr_33561_35237[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (11))){
var inst_33465 = (state_33511[(14)]);
var inst_33475 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33465);
var state_33511__$1 = state_33511;
var statearr_33565_35241 = state_33511__$1;
(statearr_33565_35241[(2)] = inst_33475);

(statearr_33565_35241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (9))){
var inst_33456 = (state_33511[(15)]);
var inst_33465 = (state_33511[(14)]);
var inst_33482 = (state_33511[(19)]);
var inst_33482__$1 = (inst_33456.cljs$core$IFn$_invoke$arity$1 ? inst_33456.cljs$core$IFn$_invoke$arity$1(inst_33465) : inst_33456.call(null,inst_33465));
var state_33511__$1 = (function (){var statearr_33568 = state_33511;
(statearr_33568[(19)] = inst_33482__$1);

return statearr_33568;
})();
if(cljs.core.truth_(inst_33482__$1)){
var statearr_33571_35247 = state_33511__$1;
(statearr_33571_35247[(1)] = (14));

} else {
var statearr_33572_35248 = state_33511__$1;
(statearr_33572_35248[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (5))){
var inst_33466 = (state_33511[(13)]);
var state_33511__$1 = state_33511;
var statearr_33574_35249 = state_33511__$1;
(statearr_33574_35249[(2)] = inst_33466);

(statearr_33574_35249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (14))){
var inst_33482 = (state_33511[(19)]);
var state_33511__$1 = state_33511;
var statearr_33578_35251 = state_33511__$1;
(statearr_33578_35251[(2)] = inst_33482);

(statearr_33578_35251[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (26))){
var inst_33501 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
var statearr_33581_35252 = state_33511__$1;
(statearr_33581_35252[(2)] = inst_33501);

(statearr_33581_35252[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (16))){
var inst_33493 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
if(cljs.core.truth_(inst_33493)){
var statearr_33584_35253 = state_33511__$1;
(statearr_33584_35253[(1)] = (20));

} else {
var statearr_33586_35254 = state_33511__$1;
(statearr_33586_35254[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (10))){
var inst_33507 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
var statearr_33590_35255 = state_33511__$1;
(statearr_33590_35255[(2)] = inst_33507);

(statearr_33590_35255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (18))){
var inst_33485 = (state_33511[(16)]);
var state_33511__$1 = state_33511;
var statearr_33592_35257 = state_33511__$1;
(statearr_33592_35257[(2)] = inst_33485);

(statearr_33592_35257[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (8))){
var inst_33464 = (state_33511[(7)]);
var inst_33473 = (inst_33464 == null);
var state_33511__$1 = state_33511;
if(cljs.core.truth_(inst_33473)){
var statearr_33596_35264 = state_33511__$1;
(statearr_33596_35264[(1)] = (11));

} else {
var statearr_33597_35265 = state_33511__$1;
(statearr_33597_35265[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32210__auto__ = null;
var cljs$core$async$mix_$_state_machine__32210__auto____0 = (function (){
var statearr_33602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33602[(0)] = cljs$core$async$mix_$_state_machine__32210__auto__);

(statearr_33602[(1)] = (1));

return statearr_33602;
});
var cljs$core$async$mix_$_state_machine__32210__auto____1 = (function (state_33511){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33511);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33604){var ex__32213__auto__ = e33604;
var statearr_33605_35271 = state_33511;
(statearr_33605_35271[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33511[(4)]))){
var statearr_33608_35272 = state_33511;
(statearr_33608_35272[(1)] = cljs.core.first((state_33511[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35273 = state_33511;
state_33511 = G__35273;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32210__auto__ = function(state_33511){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32210__auto____1.call(this,state_33511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32210__auto____0;
cljs$core$async$mix_$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32210__auto____1;
return cljs$core$async$mix_$_state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_33611 = f__32408__auto__();
(statearr_33611[(6)] = c__32407__auto___35171);

return statearr_33611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35276 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35276(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35282 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35282(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35287 = (function() {
var G__35288 = null;
var G__35288__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35288__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35288 = function(p,v){
switch(arguments.length){
case 1:
return G__35288__1.call(this,p);
case 2:
return G__35288__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35288.cljs$core$IFn$_invoke$arity$1 = G__35288__1;
G__35288.cljs$core$IFn$_invoke$arity$2 = G__35288__2;
return G__35288;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33671 = arguments.length;
switch (G__33671) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35287(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35287(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33694 = arguments.length;
switch (G__33694) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33687_SHARP_){
if(cljs.core.truth_((p1__33687_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33687_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33687_SHARP_.call(null,topic)))){
return p1__33687_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33687_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33708 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33709){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33709 = meta33709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33710,meta33709__$1){
var self__ = this;
var _33710__$1 = this;
return (new cljs.core.async.t_cljs$core$async33708(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33709__$1));
}));

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33710){
var self__ = this;
var _33710__$1 = this;
return self__.meta33709;
}));

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33709","meta33709",-1887881681,null)], null);
}));

(cljs.core.async.t_cljs$core$async33708.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33708");

(cljs.core.async.t_cljs$core$async33708.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33708");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33708.
 */
cljs.core.async.__GT_t_cljs$core$async33708 = (function cljs$core$async$__GT_t_cljs$core$async33708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33709){
return (new cljs.core.async.t_cljs$core$async33708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33709));
});

}

return (new cljs.core.async.t_cljs$core$async33708(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32407__auto___35318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_33825){
var state_val_33827 = (state_33825[(1)]);
if((state_val_33827 === (7))){
var inst_33820 = (state_33825[(2)]);
var state_33825__$1 = state_33825;
var statearr_33828_35319 = state_33825__$1;
(statearr_33828_35319[(2)] = inst_33820);

(statearr_33828_35319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (20))){
var state_33825__$1 = state_33825;
var statearr_33833_35320 = state_33825__$1;
(statearr_33833_35320[(2)] = null);

(statearr_33833_35320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (1))){
var state_33825__$1 = state_33825;
var statearr_33834_35321 = state_33825__$1;
(statearr_33834_35321[(2)] = null);

(statearr_33834_35321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (24))){
var inst_33803 = (state_33825[(7)]);
var inst_33812 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33803);
var state_33825__$1 = state_33825;
var statearr_33840_35322 = state_33825__$1;
(statearr_33840_35322[(2)] = inst_33812);

(statearr_33840_35322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (4))){
var inst_33752 = (state_33825[(8)]);
var inst_33752__$1 = (state_33825[(2)]);
var inst_33753 = (inst_33752__$1 == null);
var state_33825__$1 = (function (){var statearr_33841 = state_33825;
(statearr_33841[(8)] = inst_33752__$1);

return statearr_33841;
})();
if(cljs.core.truth_(inst_33753)){
var statearr_33842_35324 = state_33825__$1;
(statearr_33842_35324[(1)] = (5));

} else {
var statearr_33843_35325 = state_33825__$1;
(statearr_33843_35325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (15))){
var inst_33797 = (state_33825[(2)]);
var state_33825__$1 = state_33825;
var statearr_33844_35329 = state_33825__$1;
(statearr_33844_35329[(2)] = inst_33797);

(statearr_33844_35329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (21))){
var inst_33817 = (state_33825[(2)]);
var state_33825__$1 = (function (){var statearr_33845 = state_33825;
(statearr_33845[(9)] = inst_33817);

return statearr_33845;
})();
var statearr_33846_35330 = state_33825__$1;
(statearr_33846_35330[(2)] = null);

(statearr_33846_35330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (13))){
var inst_33779 = (state_33825[(10)]);
var inst_33781 = cljs.core.chunked_seq_QMARK_(inst_33779);
var state_33825__$1 = state_33825;
if(inst_33781){
var statearr_33854_35331 = state_33825__$1;
(statearr_33854_35331[(1)] = (16));

} else {
var statearr_33856_35332 = state_33825__$1;
(statearr_33856_35332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (22))){
var inst_33809 = (state_33825[(2)]);
var state_33825__$1 = state_33825;
if(cljs.core.truth_(inst_33809)){
var statearr_33857_35333 = state_33825__$1;
(statearr_33857_35333[(1)] = (23));

} else {
var statearr_33858_35334 = state_33825__$1;
(statearr_33858_35334[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (6))){
var inst_33805 = (state_33825[(11)]);
var inst_33803 = (state_33825[(7)]);
var inst_33752 = (state_33825[(8)]);
var inst_33803__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33752) : topic_fn.call(null,inst_33752));
var inst_33804 = cljs.core.deref(mults);
var inst_33805__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33804,inst_33803__$1);
var state_33825__$1 = (function (){var statearr_33862 = state_33825;
(statearr_33862[(11)] = inst_33805__$1);

(statearr_33862[(7)] = inst_33803__$1);

return statearr_33862;
})();
if(cljs.core.truth_(inst_33805__$1)){
var statearr_33864_35335 = state_33825__$1;
(statearr_33864_35335[(1)] = (19));

} else {
var statearr_33865_35336 = state_33825__$1;
(statearr_33865_35336[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (25))){
var inst_33814 = (state_33825[(2)]);
var state_33825__$1 = state_33825;
var statearr_33866_35337 = state_33825__$1;
(statearr_33866_35337[(2)] = inst_33814);

(statearr_33866_35337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (17))){
var inst_33779 = (state_33825[(10)]);
var inst_33788 = cljs.core.first(inst_33779);
var inst_33789 = cljs.core.async.muxch_STAR_(inst_33788);
var inst_33790 = cljs.core.async.close_BANG_(inst_33789);
var inst_33791 = cljs.core.next(inst_33779);
var inst_33763 = inst_33791;
var inst_33764 = null;
var inst_33765 = (0);
var inst_33766 = (0);
var state_33825__$1 = (function (){var statearr_33871 = state_33825;
(statearr_33871[(12)] = inst_33763);

(statearr_33871[(13)] = inst_33790);

(statearr_33871[(14)] = inst_33765);

(statearr_33871[(15)] = inst_33764);

(statearr_33871[(16)] = inst_33766);

return statearr_33871;
})();
var statearr_33872_35339 = state_33825__$1;
(statearr_33872_35339[(2)] = null);

(statearr_33872_35339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (3))){
var inst_33822 = (state_33825[(2)]);
var state_33825__$1 = state_33825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33825__$1,inst_33822);
} else {
if((state_val_33827 === (12))){
var inst_33799 = (state_33825[(2)]);
var state_33825__$1 = state_33825;
var statearr_33876_35340 = state_33825__$1;
(statearr_33876_35340[(2)] = inst_33799);

(statearr_33876_35340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (2))){
var state_33825__$1 = state_33825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33825__$1,(4),ch);
} else {
if((state_val_33827 === (23))){
var state_33825__$1 = state_33825;
var statearr_33878_35342 = state_33825__$1;
(statearr_33878_35342[(2)] = null);

(statearr_33878_35342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (19))){
var inst_33805 = (state_33825[(11)]);
var inst_33752 = (state_33825[(8)]);
var inst_33807 = cljs.core.async.muxch_STAR_(inst_33805);
var state_33825__$1 = state_33825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33825__$1,(22),inst_33807,inst_33752);
} else {
if((state_val_33827 === (11))){
var inst_33779 = (state_33825[(10)]);
var inst_33763 = (state_33825[(12)]);
var inst_33779__$1 = cljs.core.seq(inst_33763);
var state_33825__$1 = (function (){var statearr_33880 = state_33825;
(statearr_33880[(10)] = inst_33779__$1);

return statearr_33880;
})();
if(inst_33779__$1){
var statearr_33881_35343 = state_33825__$1;
(statearr_33881_35343[(1)] = (13));

} else {
var statearr_33882_35344 = state_33825__$1;
(statearr_33882_35344[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (9))){
var inst_33801 = (state_33825[(2)]);
var state_33825__$1 = state_33825;
var statearr_33883_35352 = state_33825__$1;
(statearr_33883_35352[(2)] = inst_33801);

(statearr_33883_35352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (5))){
var inst_33759 = cljs.core.deref(mults);
var inst_33760 = cljs.core.vals(inst_33759);
var inst_33761 = cljs.core.seq(inst_33760);
var inst_33763 = inst_33761;
var inst_33764 = null;
var inst_33765 = (0);
var inst_33766 = (0);
var state_33825__$1 = (function (){var statearr_33888 = state_33825;
(statearr_33888[(12)] = inst_33763);

(statearr_33888[(14)] = inst_33765);

(statearr_33888[(15)] = inst_33764);

(statearr_33888[(16)] = inst_33766);

return statearr_33888;
})();
var statearr_33889_35354 = state_33825__$1;
(statearr_33889_35354[(2)] = null);

(statearr_33889_35354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (14))){
var state_33825__$1 = state_33825;
var statearr_33897_35355 = state_33825__$1;
(statearr_33897_35355[(2)] = null);

(statearr_33897_35355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (16))){
var inst_33779 = (state_33825[(10)]);
var inst_33783 = cljs.core.chunk_first(inst_33779);
var inst_33784 = cljs.core.chunk_rest(inst_33779);
var inst_33785 = cljs.core.count(inst_33783);
var inst_33763 = inst_33784;
var inst_33764 = inst_33783;
var inst_33765 = inst_33785;
var inst_33766 = (0);
var state_33825__$1 = (function (){var statearr_33898 = state_33825;
(statearr_33898[(12)] = inst_33763);

(statearr_33898[(14)] = inst_33765);

(statearr_33898[(15)] = inst_33764);

(statearr_33898[(16)] = inst_33766);

return statearr_33898;
})();
var statearr_33899_35360 = state_33825__$1;
(statearr_33899_35360[(2)] = null);

(statearr_33899_35360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (10))){
var inst_33763 = (state_33825[(12)]);
var inst_33765 = (state_33825[(14)]);
var inst_33764 = (state_33825[(15)]);
var inst_33766 = (state_33825[(16)]);
var inst_33773 = cljs.core._nth(inst_33764,inst_33766);
var inst_33774 = cljs.core.async.muxch_STAR_(inst_33773);
var inst_33775 = cljs.core.async.close_BANG_(inst_33774);
var inst_33776 = (inst_33766 + (1));
var tmp33893 = inst_33763;
var tmp33894 = inst_33765;
var tmp33895 = inst_33764;
var inst_33763__$1 = tmp33893;
var inst_33764__$1 = tmp33895;
var inst_33765__$1 = tmp33894;
var inst_33766__$1 = inst_33776;
var state_33825__$1 = (function (){var statearr_33904 = state_33825;
(statearr_33904[(17)] = inst_33775);

(statearr_33904[(12)] = inst_33763__$1);

(statearr_33904[(14)] = inst_33765__$1);

(statearr_33904[(15)] = inst_33764__$1);

(statearr_33904[(16)] = inst_33766__$1);

return statearr_33904;
})();
var statearr_33908_35365 = state_33825__$1;
(statearr_33908_35365[(2)] = null);

(statearr_33908_35365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (18))){
var inst_33794 = (state_33825[(2)]);
var state_33825__$1 = state_33825;
var statearr_33910_35366 = state_33825__$1;
(statearr_33910_35366[(2)] = inst_33794);

(statearr_33910_35366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (8))){
var inst_33765 = (state_33825[(14)]);
var inst_33766 = (state_33825[(16)]);
var inst_33770 = (inst_33766 < inst_33765);
var inst_33771 = inst_33770;
var state_33825__$1 = state_33825;
if(cljs.core.truth_(inst_33771)){
var statearr_33911_35367 = state_33825__$1;
(statearr_33911_35367[(1)] = (10));

} else {
var statearr_33912_35368 = state_33825__$1;
(statearr_33912_35368[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_33917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33917[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_33917[(1)] = (1));

return statearr_33917;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_33825){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_33825);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e33918){var ex__32213__auto__ = e33918;
var statearr_33919_35369 = state_33825;
(statearr_33919_35369[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_33825[(4)]))){
var statearr_33921_35370 = state_33825;
(statearr_33921_35370[(1)] = cljs.core.first((state_33825[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35371 = state_33825;
state_33825 = G__35371;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_33825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_33825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_33922 = f__32408__auto__();
(statearr_33922[(6)] = c__32407__auto___35318);

return statearr_33922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33932 = arguments.length;
switch (G__33932) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33942 = arguments.length;
switch (G__33942) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33949 = arguments.length;
switch (G__33949) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32407__auto___35385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_34012){
var state_val_34013 = (state_34012[(1)]);
if((state_val_34013 === (7))){
var state_34012__$1 = state_34012;
var statearr_34014_35389 = state_34012__$1;
(statearr_34014_35389[(2)] = null);

(statearr_34014_35389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (1))){
var state_34012__$1 = state_34012;
var statearr_34015_35390 = state_34012__$1;
(statearr_34015_35390[(2)] = null);

(statearr_34015_35390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (4))){
var inst_33965 = (state_34012[(7)]);
var inst_33964 = (state_34012[(8)]);
var inst_33967 = (inst_33965 < inst_33964);
var state_34012__$1 = state_34012;
if(cljs.core.truth_(inst_33967)){
var statearr_34016_35391 = state_34012__$1;
(statearr_34016_35391[(1)] = (6));

} else {
var statearr_34017_35392 = state_34012__$1;
(statearr_34017_35392[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (15))){
var inst_33994 = (state_34012[(9)]);
var inst_34002 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33994);
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34012__$1,(17),out,inst_34002);
} else {
if((state_val_34013 === (13))){
var inst_33994 = (state_34012[(9)]);
var inst_33994__$1 = (state_34012[(2)]);
var inst_33998 = cljs.core.some(cljs.core.nil_QMARK_,inst_33994__$1);
var state_34012__$1 = (function (){var statearr_34022 = state_34012;
(statearr_34022[(9)] = inst_33994__$1);

return statearr_34022;
})();
if(cljs.core.truth_(inst_33998)){
var statearr_34023_35393 = state_34012__$1;
(statearr_34023_35393[(1)] = (14));

} else {
var statearr_34024_35394 = state_34012__$1;
(statearr_34024_35394[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (6))){
var state_34012__$1 = state_34012;
var statearr_34025_35395 = state_34012__$1;
(statearr_34025_35395[(2)] = null);

(statearr_34025_35395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (17))){
var inst_34004 = (state_34012[(2)]);
var state_34012__$1 = (function (){var statearr_34028 = state_34012;
(statearr_34028[(10)] = inst_34004);

return statearr_34028;
})();
var statearr_34029_35396 = state_34012__$1;
(statearr_34029_35396[(2)] = null);

(statearr_34029_35396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (3))){
var inst_34009 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34012__$1,inst_34009);
} else {
if((state_val_34013 === (12))){
var _ = (function (){var statearr_34030 = state_34012;
(statearr_34030[(4)] = cljs.core.rest((state_34012[(4)])));

return statearr_34030;
})();
var state_34012__$1 = state_34012;
var ex34027 = (state_34012__$1[(2)]);
var statearr_34031_35397 = state_34012__$1;
(statearr_34031_35397[(5)] = ex34027);


if((ex34027 instanceof Object)){
var statearr_34033_35398 = state_34012__$1;
(statearr_34033_35398[(1)] = (11));

(statearr_34033_35398[(5)] = null);

} else {
throw ex34027;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (2))){
var inst_33962 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33964 = cnt;
var inst_33965 = (0);
var state_34012__$1 = (function (){var statearr_34035 = state_34012;
(statearr_34035[(7)] = inst_33965);

(statearr_34035[(11)] = inst_33962);

(statearr_34035[(8)] = inst_33964);

return statearr_34035;
})();
var statearr_34036_35399 = state_34012__$1;
(statearr_34036_35399[(2)] = null);

(statearr_34036_35399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (11))){
var inst_33973 = (state_34012[(2)]);
var inst_33974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34012__$1 = (function (){var statearr_34037 = state_34012;
(statearr_34037[(12)] = inst_33973);

return statearr_34037;
})();
var statearr_34038_35400 = state_34012__$1;
(statearr_34038_35400[(2)] = inst_33974);

(statearr_34038_35400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (9))){
var inst_33965 = (state_34012[(7)]);
var _ = (function (){var statearr_34039 = state_34012;
(statearr_34039[(4)] = cljs.core.cons((12),(state_34012[(4)])));

return statearr_34039;
})();
var inst_33980 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33965) : chs__$1.call(null,inst_33965));
var inst_33981 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33965) : done.call(null,inst_33965));
var inst_33982 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33980,inst_33981);
var ___$1 = (function (){var statearr_34040 = state_34012;
(statearr_34040[(4)] = cljs.core.rest((state_34012[(4)])));

return statearr_34040;
})();
var state_34012__$1 = state_34012;
var statearr_34041_35403 = state_34012__$1;
(statearr_34041_35403[(2)] = inst_33982);

(statearr_34041_35403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (5))){
var inst_33992 = (state_34012[(2)]);
var state_34012__$1 = (function (){var statearr_34042 = state_34012;
(statearr_34042[(13)] = inst_33992);

return statearr_34042;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34012__$1,(13),dchan);
} else {
if((state_val_34013 === (14))){
var inst_34000 = cljs.core.async.close_BANG_(out);
var state_34012__$1 = state_34012;
var statearr_34043_35405 = state_34012__$1;
(statearr_34043_35405[(2)] = inst_34000);

(statearr_34043_35405[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (16))){
var inst_34007 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34044_35406 = state_34012__$1;
(statearr_34044_35406[(2)] = inst_34007);

(statearr_34044_35406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (10))){
var inst_33965 = (state_34012[(7)]);
var inst_33985 = (state_34012[(2)]);
var inst_33986 = (inst_33965 + (1));
var inst_33965__$1 = inst_33986;
var state_34012__$1 = (function (){var statearr_34045 = state_34012;
(statearr_34045[(14)] = inst_33985);

(statearr_34045[(7)] = inst_33965__$1);

return statearr_34045;
})();
var statearr_34046_35407 = state_34012__$1;
(statearr_34046_35407[(2)] = null);

(statearr_34046_35407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (8))){
var inst_33990 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34047_35408 = state_34012__$1;
(statearr_34047_35408[(2)] = inst_33990);

(statearr_34047_35408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_34048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34048[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_34048[(1)] = (1));

return statearr_34048;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_34012){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34012);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34049){var ex__32213__auto__ = e34049;
var statearr_34050_35409 = state_34012;
(statearr_34050_35409[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34012[(4)]))){
var statearr_34051_35410 = state_34012;
(statearr_34051_35410[(1)] = cljs.core.first((state_34012[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35411 = state_34012;
state_34012 = G__35411;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_34012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_34012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_34052 = f__32408__auto__();
(statearr_34052[(6)] = c__32407__auto___35385);

return statearr_34052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34055 = arguments.length;
switch (G__34055) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32407__auto___35413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_34089){
var state_val_34090 = (state_34089[(1)]);
if((state_val_34090 === (7))){
var inst_34066 = (state_34089[(7)]);
var inst_34067 = (state_34089[(8)]);
var inst_34066__$1 = (state_34089[(2)]);
var inst_34067__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34066__$1,(0),null);
var inst_34068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34066__$1,(1),null);
var inst_34069 = (inst_34067__$1 == null);
var state_34089__$1 = (function (){var statearr_34091 = state_34089;
(statearr_34091[(9)] = inst_34068);

(statearr_34091[(7)] = inst_34066__$1);

(statearr_34091[(8)] = inst_34067__$1);

return statearr_34091;
})();
if(cljs.core.truth_(inst_34069)){
var statearr_34092_35414 = state_34089__$1;
(statearr_34092_35414[(1)] = (8));

} else {
var statearr_34093_35415 = state_34089__$1;
(statearr_34093_35415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (1))){
var inst_34056 = cljs.core.vec(chs);
var inst_34057 = inst_34056;
var state_34089__$1 = (function (){var statearr_34094 = state_34089;
(statearr_34094[(10)] = inst_34057);

return statearr_34094;
})();
var statearr_34095_35416 = state_34089__$1;
(statearr_34095_35416[(2)] = null);

(statearr_34095_35416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (4))){
var inst_34057 = (state_34089[(10)]);
var state_34089__$1 = state_34089;
return cljs.core.async.ioc_alts_BANG_(state_34089__$1,(7),inst_34057);
} else {
if((state_val_34090 === (6))){
var inst_34084 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34096_35417 = state_34089__$1;
(statearr_34096_35417[(2)] = inst_34084);

(statearr_34096_35417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (3))){
var inst_34086 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34089__$1,inst_34086);
} else {
if((state_val_34090 === (2))){
var inst_34057 = (state_34089[(10)]);
var inst_34059 = cljs.core.count(inst_34057);
var inst_34060 = (inst_34059 > (0));
var state_34089__$1 = state_34089;
if(cljs.core.truth_(inst_34060)){
var statearr_34100_35418 = state_34089__$1;
(statearr_34100_35418[(1)] = (4));

} else {
var statearr_34101_35420 = state_34089__$1;
(statearr_34101_35420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (11))){
var inst_34057 = (state_34089[(10)]);
var inst_34077 = (state_34089[(2)]);
var tmp34098 = inst_34057;
var inst_34057__$1 = tmp34098;
var state_34089__$1 = (function (){var statearr_34102 = state_34089;
(statearr_34102[(11)] = inst_34077);

(statearr_34102[(10)] = inst_34057__$1);

return statearr_34102;
})();
var statearr_34103_35424 = state_34089__$1;
(statearr_34103_35424[(2)] = null);

(statearr_34103_35424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (9))){
var inst_34067 = (state_34089[(8)]);
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34089__$1,(11),out,inst_34067);
} else {
if((state_val_34090 === (5))){
var inst_34082 = cljs.core.async.close_BANG_(out);
var state_34089__$1 = state_34089;
var statearr_34104_35429 = state_34089__$1;
(statearr_34104_35429[(2)] = inst_34082);

(statearr_34104_35429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (10))){
var inst_34080 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34105_35430 = state_34089__$1;
(statearr_34105_35430[(2)] = inst_34080);

(statearr_34105_35430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (8))){
var inst_34068 = (state_34089[(9)]);
var inst_34066 = (state_34089[(7)]);
var inst_34057 = (state_34089[(10)]);
var inst_34067 = (state_34089[(8)]);
var inst_34072 = (function (){var cs = inst_34057;
var vec__34062 = inst_34066;
var v = inst_34067;
var c = inst_34068;
return (function (p1__34053_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34053_SHARP_);
});
})();
var inst_34073 = cljs.core.filterv(inst_34072,inst_34057);
var inst_34057__$1 = inst_34073;
var state_34089__$1 = (function (){var statearr_34106 = state_34089;
(statearr_34106[(10)] = inst_34057__$1);

return statearr_34106;
})();
var statearr_34108_35433 = state_34089__$1;
(statearr_34108_35433[(2)] = null);

(statearr_34108_35433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_34110 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34110[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_34110[(1)] = (1));

return statearr_34110;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_34089){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34089);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34111){var ex__32213__auto__ = e34111;
var statearr_34112_35434 = state_34089;
(statearr_34112_35434[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34089[(4)]))){
var statearr_34113_35435 = state_34089;
(statearr_34113_35435[(1)] = cljs.core.first((state_34089[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35437 = state_34089;
state_34089 = G__35437;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_34089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_34089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_34114 = f__32408__auto__();
(statearr_34114[(6)] = c__32407__auto___35413);

return statearr_34114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34116 = arguments.length;
switch (G__34116) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32407__auto___35445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_34140){
var state_val_34141 = (state_34140[(1)]);
if((state_val_34141 === (7))){
var inst_34122 = (state_34140[(7)]);
var inst_34122__$1 = (state_34140[(2)]);
var inst_34123 = (inst_34122__$1 == null);
var inst_34124 = cljs.core.not(inst_34123);
var state_34140__$1 = (function (){var statearr_34142 = state_34140;
(statearr_34142[(7)] = inst_34122__$1);

return statearr_34142;
})();
if(inst_34124){
var statearr_34143_35446 = state_34140__$1;
(statearr_34143_35446[(1)] = (8));

} else {
var statearr_34144_35447 = state_34140__$1;
(statearr_34144_35447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (1))){
var inst_34117 = (0);
var state_34140__$1 = (function (){var statearr_34145 = state_34140;
(statearr_34145[(8)] = inst_34117);

return statearr_34145;
})();
var statearr_34146_35448 = state_34140__$1;
(statearr_34146_35448[(2)] = null);

(statearr_34146_35448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (4))){
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34140__$1,(7),ch);
} else {
if((state_val_34141 === (6))){
var inst_34135 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
var statearr_34148_35449 = state_34140__$1;
(statearr_34148_35449[(2)] = inst_34135);

(statearr_34148_35449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (3))){
var inst_34137 = (state_34140[(2)]);
var inst_34138 = cljs.core.async.close_BANG_(out);
var state_34140__$1 = (function (){var statearr_34150 = state_34140;
(statearr_34150[(9)] = inst_34137);

return statearr_34150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34140__$1,inst_34138);
} else {
if((state_val_34141 === (2))){
var inst_34117 = (state_34140[(8)]);
var inst_34119 = (inst_34117 < n);
var state_34140__$1 = state_34140;
if(cljs.core.truth_(inst_34119)){
var statearr_34151_35450 = state_34140__$1;
(statearr_34151_35450[(1)] = (4));

} else {
var statearr_34152_35451 = state_34140__$1;
(statearr_34152_35451[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (11))){
var inst_34117 = (state_34140[(8)]);
var inst_34127 = (state_34140[(2)]);
var inst_34128 = (inst_34117 + (1));
var inst_34117__$1 = inst_34128;
var state_34140__$1 = (function (){var statearr_34153 = state_34140;
(statearr_34153[(10)] = inst_34127);

(statearr_34153[(8)] = inst_34117__$1);

return statearr_34153;
})();
var statearr_34154_35452 = state_34140__$1;
(statearr_34154_35452[(2)] = null);

(statearr_34154_35452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (9))){
var state_34140__$1 = state_34140;
var statearr_34155_35453 = state_34140__$1;
(statearr_34155_35453[(2)] = null);

(statearr_34155_35453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (5))){
var state_34140__$1 = state_34140;
var statearr_34156_35454 = state_34140__$1;
(statearr_34156_35454[(2)] = null);

(statearr_34156_35454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (10))){
var inst_34132 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
var statearr_34157_35455 = state_34140__$1;
(statearr_34157_35455[(2)] = inst_34132);

(statearr_34157_35455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (8))){
var inst_34122 = (state_34140[(7)]);
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34140__$1,(11),out,inst_34122);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_34162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34162[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_34162[(1)] = (1));

return statearr_34162;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_34140){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34140);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34163){var ex__32213__auto__ = e34163;
var statearr_34164_35463 = state_34140;
(statearr_34164_35463[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34140[(4)]))){
var statearr_34165_35468 = state_34140;
(statearr_34165_35468[(1)] = cljs.core.first((state_34140[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35469 = state_34140;
state_34140 = G__35469;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_34140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_34140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_34167 = f__32408__auto__();
(statearr_34167[(6)] = c__32407__auto___35445);

return statearr_34167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34171 = (function (f,ch,meta34172){
this.f = f;
this.ch = ch;
this.meta34172 = meta34172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34173,meta34172__$1){
var self__ = this;
var _34173__$1 = this;
return (new cljs.core.async.t_cljs$core$async34171(self__.f,self__.ch,meta34172__$1));
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34173){
var self__ = this;
var _34173__$1 = this;
return self__.meta34172;
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34176 = (function (f,ch,meta34172,_,fn1,meta34177){
this.f = f;
this.ch = ch;
this.meta34172 = meta34172;
this._ = _;
this.fn1 = fn1;
this.meta34177 = meta34177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34178,meta34177__$1){
var self__ = this;
var _34178__$1 = this;
return (new cljs.core.async.t_cljs$core$async34176(self__.f,self__.ch,self__.meta34172,self__._,self__.fn1,meta34177__$1));
}));

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34178){
var self__ = this;
var _34178__$1 = this;
return self__.meta34177;
}));

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34169_SHARP_){
var G__34182 = (((p1__34169_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34169_SHARP_) : self__.f.call(null,p1__34169_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34182) : f1.call(null,G__34182));
});
}));

(cljs.core.async.t_cljs$core$async34176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34172","meta34172",135807637,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34171","cljs.core.async/t_cljs$core$async34171",172204933,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34177","meta34177",74067911,null)], null);
}));

(cljs.core.async.t_cljs$core$async34176.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34176");

(cljs.core.async.t_cljs$core$async34176.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34176");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34176.
 */
cljs.core.async.__GT_t_cljs$core$async34176 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34176(f__$1,ch__$1,meta34172__$1,___$2,fn1__$1,meta34177){
return (new cljs.core.async.t_cljs$core$async34176(f__$1,ch__$1,meta34172__$1,___$2,fn1__$1,meta34177));
});

}

return (new cljs.core.async.t_cljs$core$async34176(self__.f,self__.ch,self__.meta34172,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34205 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34205) : self__.f.call(null,G__34205));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34172","meta34172",135807637,null)], null);
}));

(cljs.core.async.t_cljs$core$async34171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34171");

(cljs.core.async.t_cljs$core$async34171.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34171.
 */
cljs.core.async.__GT_t_cljs$core$async34171 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34171(f__$1,ch__$1,meta34172){
return (new cljs.core.async.t_cljs$core$async34171(f__$1,ch__$1,meta34172));
});

}

return (new cljs.core.async.t_cljs$core$async34171(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34216 = (function (f,ch,meta34217){
this.f = f;
this.ch = ch;
this.meta34217 = meta34217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34218,meta34217__$1){
var self__ = this;
var _34218__$1 = this;
return (new cljs.core.async.t_cljs$core$async34216(self__.f,self__.ch,meta34217__$1));
}));

(cljs.core.async.t_cljs$core$async34216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34218){
var self__ = this;
var _34218__$1 = this;
return self__.meta34217;
}));

(cljs.core.async.t_cljs$core$async34216.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34216.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34216.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34216.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34216.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34216.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34217","meta34217",1011460665,null)], null);
}));

(cljs.core.async.t_cljs$core$async34216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34216");

(cljs.core.async.t_cljs$core$async34216.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34216.
 */
cljs.core.async.__GT_t_cljs$core$async34216 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34216(f__$1,ch__$1,meta34217){
return (new cljs.core.async.t_cljs$core$async34216(f__$1,ch__$1,meta34217));
});

}

return (new cljs.core.async.t_cljs$core$async34216(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34223 = (function (p,ch,meta34224){
this.p = p;
this.ch = ch;
this.meta34224 = meta34224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34225,meta34224__$1){
var self__ = this;
var _34225__$1 = this;
return (new cljs.core.async.t_cljs$core$async34223(self__.p,self__.ch,meta34224__$1));
}));

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34225){
var self__ = this;
var _34225__$1 = this;
return self__.meta34224;
}));

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34224","meta34224",-1889121205,null)], null);
}));

(cljs.core.async.t_cljs$core$async34223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34223");

(cljs.core.async.t_cljs$core$async34223.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34223.
 */
cljs.core.async.__GT_t_cljs$core$async34223 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34223(p__$1,ch__$1,meta34224){
return (new cljs.core.async.t_cljs$core$async34223(p__$1,ch__$1,meta34224));
});

}

return (new cljs.core.async.t_cljs$core$async34223(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34235 = arguments.length;
switch (G__34235) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32407__auto___35511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_34258){
var state_val_34259 = (state_34258[(1)]);
if((state_val_34259 === (7))){
var inst_34253 = (state_34258[(2)]);
var state_34258__$1 = state_34258;
var statearr_34261_35512 = state_34258__$1;
(statearr_34261_35512[(2)] = inst_34253);

(statearr_34261_35512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (1))){
var state_34258__$1 = state_34258;
var statearr_34263_35513 = state_34258__$1;
(statearr_34263_35513[(2)] = null);

(statearr_34263_35513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (4))){
var inst_34238 = (state_34258[(7)]);
var inst_34238__$1 = (state_34258[(2)]);
var inst_34239 = (inst_34238__$1 == null);
var state_34258__$1 = (function (){var statearr_34267 = state_34258;
(statearr_34267[(7)] = inst_34238__$1);

return statearr_34267;
})();
if(cljs.core.truth_(inst_34239)){
var statearr_34268_35514 = state_34258__$1;
(statearr_34268_35514[(1)] = (5));

} else {
var statearr_34269_35515 = state_34258__$1;
(statearr_34269_35515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (6))){
var inst_34238 = (state_34258[(7)]);
var inst_34243 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34238) : p.call(null,inst_34238));
var state_34258__$1 = state_34258;
if(cljs.core.truth_(inst_34243)){
var statearr_34270_35517 = state_34258__$1;
(statearr_34270_35517[(1)] = (8));

} else {
var statearr_34271_35518 = state_34258__$1;
(statearr_34271_35518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (3))){
var inst_34255 = (state_34258[(2)]);
var state_34258__$1 = state_34258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34258__$1,inst_34255);
} else {
if((state_val_34259 === (2))){
var state_34258__$1 = state_34258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34258__$1,(4),ch);
} else {
if((state_val_34259 === (11))){
var inst_34247 = (state_34258[(2)]);
var state_34258__$1 = state_34258;
var statearr_34272_35527 = state_34258__$1;
(statearr_34272_35527[(2)] = inst_34247);

(statearr_34272_35527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (9))){
var state_34258__$1 = state_34258;
var statearr_34273_35528 = state_34258__$1;
(statearr_34273_35528[(2)] = null);

(statearr_34273_35528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (5))){
var inst_34241 = cljs.core.async.close_BANG_(out);
var state_34258__$1 = state_34258;
var statearr_34274_35529 = state_34258__$1;
(statearr_34274_35529[(2)] = inst_34241);

(statearr_34274_35529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (10))){
var inst_34250 = (state_34258[(2)]);
var state_34258__$1 = (function (){var statearr_34275 = state_34258;
(statearr_34275[(8)] = inst_34250);

return statearr_34275;
})();
var statearr_34276_35530 = state_34258__$1;
(statearr_34276_35530[(2)] = null);

(statearr_34276_35530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (8))){
var inst_34238 = (state_34258[(7)]);
var state_34258__$1 = state_34258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34258__$1,(11),out,inst_34238);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_34277 = [null,null,null,null,null,null,null,null,null];
(statearr_34277[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_34277[(1)] = (1));

return statearr_34277;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_34258){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34258);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34278){var ex__32213__auto__ = e34278;
var statearr_34283_35531 = state_34258;
(statearr_34283_35531[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34258[(4)]))){
var statearr_34284_35532 = state_34258;
(statearr_34284_35532[(1)] = cljs.core.first((state_34258[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35533 = state_34258;
state_34258 = G__35533;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_34258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_34258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_34287 = f__32408__auto__();
(statearr_34287[(6)] = c__32407__auto___35511);

return statearr_34287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34290 = arguments.length;
switch (G__34290) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32407__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_34361){
var state_val_34362 = (state_34361[(1)]);
if((state_val_34362 === (7))){
var inst_34357 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34367_35537 = state_34361__$1;
(statearr_34367_35537[(2)] = inst_34357);

(statearr_34367_35537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (20))){
var inst_34323 = (state_34361[(7)]);
var inst_34334 = (state_34361[(2)]);
var inst_34335 = cljs.core.next(inst_34323);
var inst_34309 = inst_34335;
var inst_34310 = null;
var inst_34311 = (0);
var inst_34312 = (0);
var state_34361__$1 = (function (){var statearr_34368 = state_34361;
(statearr_34368[(8)] = inst_34310);

(statearr_34368[(9)] = inst_34334);

(statearr_34368[(10)] = inst_34311);

(statearr_34368[(11)] = inst_34312);

(statearr_34368[(12)] = inst_34309);

return statearr_34368;
})();
var statearr_34369_35538 = state_34361__$1;
(statearr_34369_35538[(2)] = null);

(statearr_34369_35538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (1))){
var state_34361__$1 = state_34361;
var statearr_34370_35539 = state_34361__$1;
(statearr_34370_35539[(2)] = null);

(statearr_34370_35539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (4))){
var inst_34298 = (state_34361[(13)]);
var inst_34298__$1 = (state_34361[(2)]);
var inst_34299 = (inst_34298__$1 == null);
var state_34361__$1 = (function (){var statearr_34371 = state_34361;
(statearr_34371[(13)] = inst_34298__$1);

return statearr_34371;
})();
if(cljs.core.truth_(inst_34299)){
var statearr_34372_35540 = state_34361__$1;
(statearr_34372_35540[(1)] = (5));

} else {
var statearr_34373_35541 = state_34361__$1;
(statearr_34373_35541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (15))){
var state_34361__$1 = state_34361;
var statearr_34377_35543 = state_34361__$1;
(statearr_34377_35543[(2)] = null);

(statearr_34377_35543[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (21))){
var state_34361__$1 = state_34361;
var statearr_34378_35545 = state_34361__$1;
(statearr_34378_35545[(2)] = null);

(statearr_34378_35545[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (13))){
var inst_34310 = (state_34361[(8)]);
var inst_34311 = (state_34361[(10)]);
var inst_34312 = (state_34361[(11)]);
var inst_34309 = (state_34361[(12)]);
var inst_34319 = (state_34361[(2)]);
var inst_34320 = (inst_34312 + (1));
var tmp34374 = inst_34310;
var tmp34375 = inst_34311;
var tmp34376 = inst_34309;
var inst_34309__$1 = tmp34376;
var inst_34310__$1 = tmp34374;
var inst_34311__$1 = tmp34375;
var inst_34312__$1 = inst_34320;
var state_34361__$1 = (function (){var statearr_34381 = state_34361;
(statearr_34381[(8)] = inst_34310__$1);

(statearr_34381[(14)] = inst_34319);

(statearr_34381[(10)] = inst_34311__$1);

(statearr_34381[(11)] = inst_34312__$1);

(statearr_34381[(12)] = inst_34309__$1);

return statearr_34381;
})();
var statearr_34382_35546 = state_34361__$1;
(statearr_34382_35546[(2)] = null);

(statearr_34382_35546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (22))){
var state_34361__$1 = state_34361;
var statearr_34383_35547 = state_34361__$1;
(statearr_34383_35547[(2)] = null);

(statearr_34383_35547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (6))){
var inst_34298 = (state_34361[(13)]);
var inst_34307 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34298) : f.call(null,inst_34298));
var inst_34308 = cljs.core.seq(inst_34307);
var inst_34309 = inst_34308;
var inst_34310 = null;
var inst_34311 = (0);
var inst_34312 = (0);
var state_34361__$1 = (function (){var statearr_34387 = state_34361;
(statearr_34387[(8)] = inst_34310);

(statearr_34387[(10)] = inst_34311);

(statearr_34387[(11)] = inst_34312);

(statearr_34387[(12)] = inst_34309);

return statearr_34387;
})();
var statearr_34388_35558 = state_34361__$1;
(statearr_34388_35558[(2)] = null);

(statearr_34388_35558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (17))){
var inst_34323 = (state_34361[(7)]);
var inst_34327 = cljs.core.chunk_first(inst_34323);
var inst_34328 = cljs.core.chunk_rest(inst_34323);
var inst_34329 = cljs.core.count(inst_34327);
var inst_34309 = inst_34328;
var inst_34310 = inst_34327;
var inst_34311 = inst_34329;
var inst_34312 = (0);
var state_34361__$1 = (function (){var statearr_34389 = state_34361;
(statearr_34389[(8)] = inst_34310);

(statearr_34389[(10)] = inst_34311);

(statearr_34389[(11)] = inst_34312);

(statearr_34389[(12)] = inst_34309);

return statearr_34389;
})();
var statearr_34390_35564 = state_34361__$1;
(statearr_34390_35564[(2)] = null);

(statearr_34390_35564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (3))){
var inst_34359 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34361__$1,inst_34359);
} else {
if((state_val_34362 === (12))){
var inst_34344 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34391_35566 = state_34361__$1;
(statearr_34391_35566[(2)] = inst_34344);

(statearr_34391_35566[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (2))){
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34361__$1,(4),in$);
} else {
if((state_val_34362 === (23))){
var inst_34355 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34392_35570 = state_34361__$1;
(statearr_34392_35570[(2)] = inst_34355);

(statearr_34392_35570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (19))){
var inst_34338 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34393_35571 = state_34361__$1;
(statearr_34393_35571[(2)] = inst_34338);

(statearr_34393_35571[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (11))){
var inst_34323 = (state_34361[(7)]);
var inst_34309 = (state_34361[(12)]);
var inst_34323__$1 = cljs.core.seq(inst_34309);
var state_34361__$1 = (function (){var statearr_34394 = state_34361;
(statearr_34394[(7)] = inst_34323__$1);

return statearr_34394;
})();
if(inst_34323__$1){
var statearr_34395_35573 = state_34361__$1;
(statearr_34395_35573[(1)] = (14));

} else {
var statearr_34396_35574 = state_34361__$1;
(statearr_34396_35574[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (9))){
var inst_34346 = (state_34361[(2)]);
var inst_34350 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34361__$1 = (function (){var statearr_34397 = state_34361;
(statearr_34397[(15)] = inst_34346);

return statearr_34397;
})();
if(cljs.core.truth_(inst_34350)){
var statearr_34398_35575 = state_34361__$1;
(statearr_34398_35575[(1)] = (21));

} else {
var statearr_34399_35576 = state_34361__$1;
(statearr_34399_35576[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (5))){
var inst_34301 = cljs.core.async.close_BANG_(out);
var state_34361__$1 = state_34361;
var statearr_34400_35577 = state_34361__$1;
(statearr_34400_35577[(2)] = inst_34301);

(statearr_34400_35577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (14))){
var inst_34323 = (state_34361[(7)]);
var inst_34325 = cljs.core.chunked_seq_QMARK_(inst_34323);
var state_34361__$1 = state_34361;
if(inst_34325){
var statearr_34401_35578 = state_34361__$1;
(statearr_34401_35578[(1)] = (17));

} else {
var statearr_34402_35579 = state_34361__$1;
(statearr_34402_35579[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (16))){
var inst_34342 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34403_35580 = state_34361__$1;
(statearr_34403_35580[(2)] = inst_34342);

(statearr_34403_35580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (10))){
var inst_34310 = (state_34361[(8)]);
var inst_34312 = (state_34361[(11)]);
var inst_34317 = cljs.core._nth(inst_34310,inst_34312);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34361__$1,(13),out,inst_34317);
} else {
if((state_val_34362 === (18))){
var inst_34323 = (state_34361[(7)]);
var inst_34332 = cljs.core.first(inst_34323);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34361__$1,(20),out,inst_34332);
} else {
if((state_val_34362 === (8))){
var inst_34311 = (state_34361[(10)]);
var inst_34312 = (state_34361[(11)]);
var inst_34314 = (inst_34312 < inst_34311);
var inst_34315 = inst_34314;
var state_34361__$1 = state_34361;
if(cljs.core.truth_(inst_34315)){
var statearr_34404_35581 = state_34361__$1;
(statearr_34404_35581[(1)] = (10));

} else {
var statearr_34405_35582 = state_34361__$1;
(statearr_34405_35582[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____0 = (function (){
var statearr_34406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34406[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__);

(statearr_34406[(1)] = (1));

return statearr_34406;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____1 = (function (state_34361){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34361);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34407){var ex__32213__auto__ = e34407;
var statearr_34408_35583 = state_34361;
(statearr_34408_35583[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34361[(4)]))){
var statearr_34409_35584 = state_34361;
(statearr_34409_35584[(1)] = cljs.core.first((state_34361[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35585 = state_34361;
state_34361 = G__35585;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__ = function(state_34361){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____1.call(this,state_34361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32210__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_34410 = f__32408__auto__();
(statearr_34410[(6)] = c__32407__auto__);

return statearr_34410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));

return c__32407__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34413 = arguments.length;
switch (G__34413) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34418 = arguments.length;
switch (G__34418) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34424 = arguments.length;
switch (G__34424) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32407__auto___35597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_34448){
var state_val_34449 = (state_34448[(1)]);
if((state_val_34449 === (7))){
var inst_34443 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34450_35598 = state_34448__$1;
(statearr_34450_35598[(2)] = inst_34443);

(statearr_34450_35598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (1))){
var inst_34425 = null;
var state_34448__$1 = (function (){var statearr_34451 = state_34448;
(statearr_34451[(7)] = inst_34425);

return statearr_34451;
})();
var statearr_34452_35599 = state_34448__$1;
(statearr_34452_35599[(2)] = null);

(statearr_34452_35599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (4))){
var inst_34428 = (state_34448[(8)]);
var inst_34428__$1 = (state_34448[(2)]);
var inst_34429 = (inst_34428__$1 == null);
var inst_34430 = cljs.core.not(inst_34429);
var state_34448__$1 = (function (){var statearr_34461 = state_34448;
(statearr_34461[(8)] = inst_34428__$1);

return statearr_34461;
})();
if(inst_34430){
var statearr_34462_35600 = state_34448__$1;
(statearr_34462_35600[(1)] = (5));

} else {
var statearr_34469_35601 = state_34448__$1;
(statearr_34469_35601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (6))){
var state_34448__$1 = state_34448;
var statearr_34470_35602 = state_34448__$1;
(statearr_34470_35602[(2)] = null);

(statearr_34470_35602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (3))){
var inst_34445 = (state_34448[(2)]);
var inst_34446 = cljs.core.async.close_BANG_(out);
var state_34448__$1 = (function (){var statearr_34477 = state_34448;
(statearr_34477[(9)] = inst_34445);

return statearr_34477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34448__$1,inst_34446);
} else {
if((state_val_34449 === (2))){
var state_34448__$1 = state_34448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34448__$1,(4),ch);
} else {
if((state_val_34449 === (11))){
var inst_34428 = (state_34448[(8)]);
var inst_34437 = (state_34448[(2)]);
var inst_34425 = inst_34428;
var state_34448__$1 = (function (){var statearr_34478 = state_34448;
(statearr_34478[(10)] = inst_34437);

(statearr_34478[(7)] = inst_34425);

return statearr_34478;
})();
var statearr_34479_35604 = state_34448__$1;
(statearr_34479_35604[(2)] = null);

(statearr_34479_35604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (9))){
var inst_34428 = (state_34448[(8)]);
var state_34448__$1 = state_34448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34448__$1,(11),out,inst_34428);
} else {
if((state_val_34449 === (5))){
var inst_34428 = (state_34448[(8)]);
var inst_34425 = (state_34448[(7)]);
var inst_34432 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34428,inst_34425);
var state_34448__$1 = state_34448;
if(inst_34432){
var statearr_34489_35607 = state_34448__$1;
(statearr_34489_35607[(1)] = (8));

} else {
var statearr_34496_35608 = state_34448__$1;
(statearr_34496_35608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (10))){
var inst_34440 = (state_34448[(2)]);
var state_34448__$1 = state_34448;
var statearr_34497_35609 = state_34448__$1;
(statearr_34497_35609[(2)] = inst_34440);

(statearr_34497_35609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34449 === (8))){
var inst_34425 = (state_34448[(7)]);
var tmp34480 = inst_34425;
var inst_34425__$1 = tmp34480;
var state_34448__$1 = (function (){var statearr_34504 = state_34448;
(statearr_34504[(7)] = inst_34425__$1);

return statearr_34504;
})();
var statearr_34505_35612 = state_34448__$1;
(statearr_34505_35612[(2)] = null);

(statearr_34505_35612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_34506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34506[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_34506[(1)] = (1));

return statearr_34506;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_34448){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34448);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34507){var ex__32213__auto__ = e34507;
var statearr_34510_35622 = state_34448;
(statearr_34510_35622[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34448[(4)]))){
var statearr_34511_35624 = state_34448;
(statearr_34511_35624[(1)] = cljs.core.first((state_34448[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35626 = state_34448;
state_34448 = G__35626;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_34448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_34448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_34512 = f__32408__auto__();
(statearr_34512[(6)] = c__32407__auto___35597);

return statearr_34512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34515 = arguments.length;
switch (G__34515) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32407__auto___35638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_35639 = state_34556__$1;
(statearr_34558_35639[(2)] = inst_34552);

(statearr_34558_35639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var inst_34519 = (new Array(n));
var inst_34520 = inst_34519;
var inst_34521 = (0);
var state_34556__$1 = (function (){var statearr_34559 = state_34556;
(statearr_34559[(7)] = inst_34521);

(statearr_34559[(8)] = inst_34520);

return statearr_34559;
})();
var statearr_34560_35642 = state_34556__$1;
(statearr_34560_35642[(2)] = null);

(statearr_34560_35642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34524 = (state_34556[(9)]);
var inst_34524__$1 = (state_34556[(2)]);
var inst_34525 = (inst_34524__$1 == null);
var inst_34526 = cljs.core.not(inst_34525);
var state_34556__$1 = (function (){var statearr_34561 = state_34556;
(statearr_34561[(9)] = inst_34524__$1);

return statearr_34561;
})();
if(inst_34526){
var statearr_34562_35647 = state_34556__$1;
(statearr_34562_35647[(1)] = (5));

} else {
var statearr_34563_35648 = state_34556__$1;
(statearr_34563_35648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (15))){
var inst_34546 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34564_35650 = state_34556__$1;
(statearr_34564_35650[(2)] = inst_34546);

(statearr_34564_35650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (13))){
var state_34556__$1 = state_34556;
var statearr_34565_35655 = state_34556__$1;
(statearr_34565_35655[(2)] = null);

(statearr_34565_35655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34521 = (state_34556[(7)]);
var inst_34542 = (inst_34521 > (0));
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34542)){
var statearr_34566_35656 = state_34556__$1;
(statearr_34566_35656[(1)] = (12));

} else {
var statearr_34567_35657 = state_34556__$1;
(statearr_34567_35657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (3))){
var inst_34554 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34556__$1,inst_34554);
} else {
if((state_val_34557 === (12))){
var inst_34520 = (state_34556[(8)]);
var inst_34544 = cljs.core.vec(inst_34520);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(15),out,inst_34544);
} else {
if((state_val_34557 === (2))){
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34556__$1,(4),ch);
} else {
if((state_val_34557 === (11))){
var inst_34536 = (state_34556[(2)]);
var inst_34537 = (new Array(n));
var inst_34520 = inst_34537;
var inst_34521 = (0);
var state_34556__$1 = (function (){var statearr_34568 = state_34556;
(statearr_34568[(10)] = inst_34536);

(statearr_34568[(7)] = inst_34521);

(statearr_34568[(8)] = inst_34520);

return statearr_34568;
})();
var statearr_34569_35664 = state_34556__$1;
(statearr_34569_35664[(2)] = null);

(statearr_34569_35664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (9))){
var inst_34520 = (state_34556[(8)]);
var inst_34534 = cljs.core.vec(inst_34520);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(11),out,inst_34534);
} else {
if((state_val_34557 === (5))){
var inst_34529 = (state_34556[(11)]);
var inst_34524 = (state_34556[(9)]);
var inst_34521 = (state_34556[(7)]);
var inst_34520 = (state_34556[(8)]);
var inst_34528 = (inst_34520[inst_34521] = inst_34524);
var inst_34529__$1 = (inst_34521 + (1));
var inst_34530 = (inst_34529__$1 < n);
var state_34556__$1 = (function (){var statearr_34570 = state_34556;
(statearr_34570[(11)] = inst_34529__$1);

(statearr_34570[(12)] = inst_34528);

return statearr_34570;
})();
if(cljs.core.truth_(inst_34530)){
var statearr_34571_35676 = state_34556__$1;
(statearr_34571_35676[(1)] = (8));

} else {
var statearr_34572_35677 = state_34556__$1;
(statearr_34572_35677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (14))){
var inst_34549 = (state_34556[(2)]);
var inst_34550 = cljs.core.async.close_BANG_(out);
var state_34556__$1 = (function (){var statearr_34574 = state_34556;
(statearr_34574[(13)] = inst_34549);

return statearr_34574;
})();
var statearr_34575_35678 = state_34556__$1;
(statearr_34575_35678[(2)] = inst_34550);

(statearr_34575_35678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (10))){
var inst_34540 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34576_35679 = state_34556__$1;
(statearr_34576_35679[(2)] = inst_34540);

(statearr_34576_35679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34529 = (state_34556[(11)]);
var inst_34520 = (state_34556[(8)]);
var tmp34573 = inst_34520;
var inst_34520__$1 = tmp34573;
var inst_34521 = inst_34529;
var state_34556__$1 = (function (){var statearr_34577 = state_34556;
(statearr_34577[(7)] = inst_34521);

(statearr_34577[(8)] = inst_34520__$1);

return statearr_34577;
})();
var statearr_34578_35680 = state_34556__$1;
(statearr_34578_35680[(2)] = null);

(statearr_34578_35680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_34579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34579[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_34579[(1)] = (1));

return statearr_34579;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_34556){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34556);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34580){var ex__32213__auto__ = e34580;
var statearr_34581_35691 = state_34556;
(statearr_34581_35691[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34556[(4)]))){
var statearr_34582_35692 = state_34556;
(statearr_34582_35692[(1)] = cljs.core.first((state_34556[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35697 = state_34556;
state_34556 = G__35697;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_34556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_34556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_34583 = f__32408__auto__();
(statearr_34583[(6)] = c__32407__auto___35638);

return statearr_34583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34585 = arguments.length;
switch (G__34585) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32407__auto___35708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32408__auto__ = (function (){var switch__32209__auto__ = (function (state_34641){
var state_val_34642 = (state_34641[(1)]);
if((state_val_34642 === (7))){
var inst_34637 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
var statearr_34643_35712 = state_34641__$1;
(statearr_34643_35712[(2)] = inst_34637);

(statearr_34643_35712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (1))){
var inst_34597 = [];
var inst_34598 = inst_34597;
var inst_34599 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34641__$1 = (function (){var statearr_34644 = state_34641;
(statearr_34644[(7)] = inst_34599);

(statearr_34644[(8)] = inst_34598);

return statearr_34644;
})();
var statearr_34645_35720 = state_34641__$1;
(statearr_34645_35720[(2)] = null);

(statearr_34645_35720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (4))){
var inst_34602 = (state_34641[(9)]);
var inst_34602__$1 = (state_34641[(2)]);
var inst_34603 = (inst_34602__$1 == null);
var inst_34604 = cljs.core.not(inst_34603);
var state_34641__$1 = (function (){var statearr_34646 = state_34641;
(statearr_34646[(9)] = inst_34602__$1);

return statearr_34646;
})();
if(inst_34604){
var statearr_34647_35725 = state_34641__$1;
(statearr_34647_35725[(1)] = (5));

} else {
var statearr_34648_35726 = state_34641__$1;
(statearr_34648_35726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (15))){
var inst_34598 = (state_34641[(8)]);
var inst_34629 = cljs.core.vec(inst_34598);
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34641__$1,(18),out,inst_34629);
} else {
if((state_val_34642 === (13))){
var inst_34624 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
var statearr_34649_35729 = state_34641__$1;
(statearr_34649_35729[(2)] = inst_34624);

(statearr_34649_35729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (6))){
var inst_34598 = (state_34641[(8)]);
var inst_34626 = inst_34598.length;
var inst_34627 = (inst_34626 > (0));
var state_34641__$1 = state_34641;
if(cljs.core.truth_(inst_34627)){
var statearr_34650_35732 = state_34641__$1;
(statearr_34650_35732[(1)] = (15));

} else {
var statearr_34651_35733 = state_34641__$1;
(statearr_34651_35733[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (17))){
var inst_34634 = (state_34641[(2)]);
var inst_34635 = cljs.core.async.close_BANG_(out);
var state_34641__$1 = (function (){var statearr_34652 = state_34641;
(statearr_34652[(10)] = inst_34634);

return statearr_34652;
})();
var statearr_34653_35737 = state_34641__$1;
(statearr_34653_35737[(2)] = inst_34635);

(statearr_34653_35737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (3))){
var inst_34639 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34641__$1,inst_34639);
} else {
if((state_val_34642 === (12))){
var inst_34598 = (state_34641[(8)]);
var inst_34617 = cljs.core.vec(inst_34598);
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34641__$1,(14),out,inst_34617);
} else {
if((state_val_34642 === (2))){
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34641__$1,(4),ch);
} else {
if((state_val_34642 === (11))){
var inst_34598 = (state_34641[(8)]);
var inst_34602 = (state_34641[(9)]);
var inst_34606 = (state_34641[(11)]);
var inst_34614 = inst_34598.push(inst_34602);
var tmp34654 = inst_34598;
var inst_34598__$1 = tmp34654;
var inst_34599 = inst_34606;
var state_34641__$1 = (function (){var statearr_34655 = state_34641;
(statearr_34655[(7)] = inst_34599);

(statearr_34655[(12)] = inst_34614);

(statearr_34655[(8)] = inst_34598__$1);

return statearr_34655;
})();
var statearr_34656_35742 = state_34641__$1;
(statearr_34656_35742[(2)] = null);

(statearr_34656_35742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (9))){
var inst_34599 = (state_34641[(7)]);
var inst_34610 = cljs.core.keyword_identical_QMARK_(inst_34599,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34641__$1 = state_34641;
var statearr_34658_35743 = state_34641__$1;
(statearr_34658_35743[(2)] = inst_34610);

(statearr_34658_35743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (5))){
var inst_34599 = (state_34641[(7)]);
var inst_34607 = (state_34641[(13)]);
var inst_34602 = (state_34641[(9)]);
var inst_34606 = (state_34641[(11)]);
var inst_34606__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34602) : f.call(null,inst_34602));
var inst_34607__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34606__$1,inst_34599);
var state_34641__$1 = (function (){var statearr_34660 = state_34641;
(statearr_34660[(13)] = inst_34607__$1);

(statearr_34660[(11)] = inst_34606__$1);

return statearr_34660;
})();
if(inst_34607__$1){
var statearr_34661_35747 = state_34641__$1;
(statearr_34661_35747[(1)] = (8));

} else {
var statearr_34662_35749 = state_34641__$1;
(statearr_34662_35749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (14))){
var inst_34602 = (state_34641[(9)]);
var inst_34606 = (state_34641[(11)]);
var inst_34619 = (state_34641[(2)]);
var inst_34620 = [];
var inst_34621 = inst_34620.push(inst_34602);
var inst_34598 = inst_34620;
var inst_34599 = inst_34606;
var state_34641__$1 = (function (){var statearr_34665 = state_34641;
(statearr_34665[(14)] = inst_34621);

(statearr_34665[(7)] = inst_34599);

(statearr_34665[(15)] = inst_34619);

(statearr_34665[(8)] = inst_34598);

return statearr_34665;
})();
var statearr_34666_35752 = state_34641__$1;
(statearr_34666_35752[(2)] = null);

(statearr_34666_35752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (16))){
var state_34641__$1 = state_34641;
var statearr_34668_35753 = state_34641__$1;
(statearr_34668_35753[(2)] = null);

(statearr_34668_35753[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (10))){
var inst_34612 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
if(cljs.core.truth_(inst_34612)){
var statearr_34670_35757 = state_34641__$1;
(statearr_34670_35757[(1)] = (11));

} else {
var statearr_34671_35758 = state_34641__$1;
(statearr_34671_35758[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (18))){
var inst_34631 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
var statearr_34672_35759 = state_34641__$1;
(statearr_34672_35759[(2)] = inst_34631);

(statearr_34672_35759[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (8))){
var inst_34607 = (state_34641[(13)]);
var state_34641__$1 = state_34641;
var statearr_34673_35761 = state_34641__$1;
(statearr_34673_35761[(2)] = inst_34607);

(statearr_34673_35761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32210__auto__ = null;
var cljs$core$async$state_machine__32210__auto____0 = (function (){
var statearr_34675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34675[(0)] = cljs$core$async$state_machine__32210__auto__);

(statearr_34675[(1)] = (1));

return statearr_34675;
});
var cljs$core$async$state_machine__32210__auto____1 = (function (state_34641){
while(true){
var ret_value__32211__auto__ = (function (){try{while(true){
var result__32212__auto__ = switch__32209__auto__(state_34641);
if(cljs.core.keyword_identical_QMARK_(result__32212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32212__auto__;
}
break;
}
}catch (e34677){var ex__32213__auto__ = e34677;
var statearr_34678_35782 = state_34641;
(statearr_34678_35782[(2)] = ex__32213__auto__);


if(cljs.core.seq((state_34641[(4)]))){
var statearr_34679_35783 = state_34641;
(statearr_34679_35783[(1)] = cljs.core.first((state_34641[(4)])));

} else {
throw ex__32213__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35784 = state_34641;
state_34641 = G__35784;
continue;
} else {
return ret_value__32211__auto__;
}
break;
}
});
cljs$core$async$state_machine__32210__auto__ = function(state_34641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32210__auto____1.call(this,state_34641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32210__auto____0;
cljs$core$async$state_machine__32210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32210__auto____1;
return cljs$core$async$state_machine__32210__auto__;
})()
})();
var state__32409__auto__ = (function (){var statearr_34680 = f__32408__auto__();
(statearr_34680[(6)] = c__32407__auto___35708);

return statearr_34680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32409__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
