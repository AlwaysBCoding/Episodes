// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t8906 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8906 = (function (fn_handler,f,meta8907){
this.fn_handler = fn_handler;
this.f = f;
this.meta8907 = meta8907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8908,meta8907__$1){
var self__ = this;
var _8908__$1 = this;
return (new cljs.core.async.t8906(self__.fn_handler,self__.f,meta8907__$1));
});

cljs.core.async.t8906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8908){
var self__ = this;
var _8908__$1 = this;
return self__.meta8907;
});

cljs.core.async.t8906.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t8906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t8906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t8906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta8907","meta8907",1931320064,null)], null);
});

cljs.core.async.t8906.cljs$lang$type = true;

cljs.core.async.t8906.cljs$lang$ctorStr = "cljs.core.async/t8906";

cljs.core.async.t8906.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t8906");
});

cljs.core.async.__GT_t8906 = (function cljs$core$async$fn_handler_$___GT_t8906(fn_handler__$1,f__$1,meta8907){
return (new cljs.core.async.t8906(fn_handler__$1,f__$1,meta8907));
});

}

return (new cljs.core.async.t8906(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__8910 = buff;
if(G__8910){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__8910.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__8910.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8910);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8910);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__8912 = arguments.length;
switch (G__8912) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__8915 = arguments.length;
switch (G__8915) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8917 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8917);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8917,ret){
return (function (){
return fn1.call(null,val_8917);
});})(val_8917,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__8919 = arguments.length;
switch (G__8919) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5194__auto___8921 = n;
var x_8922 = (0);
while(true){
if((x_8922 < n__5194__auto___8921)){
(a[x_8922] = (0));

var G__8923 = (x_8922 + (1));
x_8922 = G__8923;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__8924 = (i + (1));
i = G__8924;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t8928 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8928 = (function (alt_flag,flag,meta8929){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8929 = meta8929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8930,meta8929__$1){
var self__ = this;
var _8930__$1 = this;
return (new cljs.core.async.t8928(self__.alt_flag,self__.flag,meta8929__$1));
});})(flag))
;

cljs.core.async.t8928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8930){
var self__ = this;
var _8930__$1 = this;
return self__.meta8929;
});})(flag))
;

cljs.core.async.t8928.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t8928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t8928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t8928.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8929","meta8929",1095874716,null)], null);
});})(flag))
;

cljs.core.async.t8928.cljs$lang$type = true;

cljs.core.async.t8928.cljs$lang$ctorStr = "cljs.core.async/t8928";

cljs.core.async.t8928.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t8928");
});})(flag))
;

cljs.core.async.__GT_t8928 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t8928(alt_flag__$1,flag__$1,meta8929){
return (new cljs.core.async.t8928(alt_flag__$1,flag__$1,meta8929));
});})(flag))
;

}

return (new cljs.core.async.t8928(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t8934 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t8934 = (function (alt_handler,flag,cb,meta8935){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8935 = meta8935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t8934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8936,meta8935__$1){
var self__ = this;
var _8936__$1 = this;
return (new cljs.core.async.t8934(self__.alt_handler,self__.flag,self__.cb,meta8935__$1));
});

cljs.core.async.t8934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8936){
var self__ = this;
var _8936__$1 = this;
return self__.meta8935;
});

cljs.core.async.t8934.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t8934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t8934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t8934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8935","meta8935",56514966,null)], null);
});

cljs.core.async.t8934.cljs$lang$type = true;

cljs.core.async.t8934.cljs$lang$ctorStr = "cljs.core.async/t8934";

cljs.core.async.t8934.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t8934");
});

cljs.core.async.__GT_t8934 = (function cljs$core$async$alt_handler_$___GT_t8934(alt_handler__$1,flag__$1,cb__$1,meta8935){
return (new cljs.core.async.t8934(alt_handler__$1,flag__$1,cb__$1,meta8935));
});

}

return (new cljs.core.async.t8934(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8937_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8937_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8938_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8938_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4309__auto__ = wport;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8939 = (i + (1));
i = G__8939;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4309__auto__ = ret;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4297__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4297__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8942){
var map__8943 = p__8942;
var map__8943__$1 = ((cljs.core.seq_QMARK_.call(null,map__8943))?cljs.core.apply.call(null,cljs.core.hash_map,map__8943):map__8943);
var opts = map__8943__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8940){
var G__8941 = cljs.core.first.call(null,seq8940);
var seq8940__$1 = cljs.core.next.call(null,seq8940);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8941,seq8940__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__8945 = arguments.length;
switch (G__8945) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6742__auto___8994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___8994){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___8994){
return (function (state_8969){
var state_val_8970 = (state_8969[(1)]);
if((state_val_8970 === (7))){
var inst_8965 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_8971_8995 = state_8969__$1;
(statearr_8971_8995[(2)] = inst_8965);

(statearr_8971_8995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (1))){
var state_8969__$1 = state_8969;
var statearr_8972_8996 = state_8969__$1;
(statearr_8972_8996[(2)] = null);

(statearr_8972_8996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (4))){
var inst_8948 = (state_8969[(7)]);
var inst_8948__$1 = (state_8969[(2)]);
var inst_8949 = (inst_8948__$1 == null);
var state_8969__$1 = (function (){var statearr_8973 = state_8969;
(statearr_8973[(7)] = inst_8948__$1);

return statearr_8973;
})();
if(cljs.core.truth_(inst_8949)){
var statearr_8974_8997 = state_8969__$1;
(statearr_8974_8997[(1)] = (5));

} else {
var statearr_8975_8998 = state_8969__$1;
(statearr_8975_8998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (13))){
var state_8969__$1 = state_8969;
var statearr_8976_8999 = state_8969__$1;
(statearr_8976_8999[(2)] = null);

(statearr_8976_8999[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (6))){
var inst_8948 = (state_8969[(7)]);
var state_8969__$1 = state_8969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8969__$1,(11),to,inst_8948);
} else {
if((state_val_8970 === (3))){
var inst_8967 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8969__$1,inst_8967);
} else {
if((state_val_8970 === (12))){
var state_8969__$1 = state_8969;
var statearr_8977_9000 = state_8969__$1;
(statearr_8977_9000[(2)] = null);

(statearr_8977_9000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (2))){
var state_8969__$1 = state_8969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8969__$1,(4),from);
} else {
if((state_val_8970 === (11))){
var inst_8958 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
if(cljs.core.truth_(inst_8958)){
var statearr_8978_9001 = state_8969__$1;
(statearr_8978_9001[(1)] = (12));

} else {
var statearr_8979_9002 = state_8969__$1;
(statearr_8979_9002[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (9))){
var state_8969__$1 = state_8969;
var statearr_8980_9003 = state_8969__$1;
(statearr_8980_9003[(2)] = null);

(statearr_8980_9003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (5))){
var state_8969__$1 = state_8969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8981_9004 = state_8969__$1;
(statearr_8981_9004[(1)] = (8));

} else {
var statearr_8982_9005 = state_8969__$1;
(statearr_8982_9005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (14))){
var inst_8963 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_8983_9006 = state_8969__$1;
(statearr_8983_9006[(2)] = inst_8963);

(statearr_8983_9006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (10))){
var inst_8955 = (state_8969[(2)]);
var state_8969__$1 = state_8969;
var statearr_8984_9007 = state_8969__$1;
(statearr_8984_9007[(2)] = inst_8955);

(statearr_8984_9007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8970 === (8))){
var inst_8952 = cljs.core.async.close_BANG_.call(null,to);
var state_8969__$1 = state_8969;
var statearr_8985_9008 = state_8969__$1;
(statearr_8985_9008[(2)] = inst_8952);

(statearr_8985_9008[(1)] = (10));


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
});})(c__6742__auto___8994))
;
return ((function (switch__6680__auto__,c__6742__auto___8994){
return (function() {
var cljs$core$async$state_machine__6681__auto__ = null;
var cljs$core$async$state_machine__6681__auto____0 = (function (){
var statearr_8989 = [null,null,null,null,null,null,null,null];
(statearr_8989[(0)] = cljs$core$async$state_machine__6681__auto__);

(statearr_8989[(1)] = (1));

return statearr_8989;
});
var cljs$core$async$state_machine__6681__auto____1 = (function (state_8969){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_8969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e8990){if((e8990 instanceof Object)){
var ex__6684__auto__ = e8990;
var statearr_8991_9009 = state_8969;
(statearr_8991_9009[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9010 = state_8969;
state_8969 = G__9010;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$state_machine__6681__auto__ = function(state_8969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6681__auto____1.call(this,state_8969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6681__auto____0;
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6681__auto____1;
return cljs$core$async$state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___8994))
})();
var state__6744__auto__ = (function (){var statearr_8992 = f__6743__auto__.call(null);
(statearr_8992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___8994);

return statearr_8992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___8994))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9194){
var vec__9195 = p__9194;
var v = cljs.core.nth.call(null,vec__9195,(0),null);
var p = cljs.core.nth.call(null,vec__9195,(1),null);
var job = vec__9195;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6742__auto___9377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___9377,res,vec__9195,v,p,job,jobs,results){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___9377,res,vec__9195,v,p,job,jobs,results){
return (function (state_9200){
var state_val_9201 = (state_9200[(1)]);
if((state_val_9201 === (1))){
var state_9200__$1 = state_9200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9200__$1,(2),res,v);
} else {
if((state_val_9201 === (2))){
var inst_9197 = (state_9200[(2)]);
var inst_9198 = cljs.core.async.close_BANG_.call(null,res);
var state_9200__$1 = (function (){var statearr_9202 = state_9200;
(statearr_9202[(7)] = inst_9197);

return statearr_9202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9200__$1,inst_9198);
} else {
return null;
}
}
});})(c__6742__auto___9377,res,vec__9195,v,p,job,jobs,results))
;
return ((function (switch__6680__auto__,c__6742__auto___9377,res,vec__9195,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0 = (function (){
var statearr_9206 = [null,null,null,null,null,null,null,null];
(statearr_9206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__);

(statearr_9206[(1)] = (1));

return statearr_9206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1 = (function (state_9200){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_9200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e9207){if((e9207 instanceof Object)){
var ex__6684__auto__ = e9207;
var statearr_9208_9378 = state_9200;
(statearr_9208_9378[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9379 = state_9200;
state_9200 = G__9379;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__ = function(state_9200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1.call(this,state_9200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___9377,res,vec__9195,v,p,job,jobs,results))
})();
var state__6744__auto__ = (function (){var statearr_9209 = f__6743__auto__.call(null);
(statearr_9209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___9377);

return statearr_9209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___9377,res,vec__9195,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9210){
var vec__9211 = p__9210;
var v = cljs.core.nth.call(null,vec__9211,(0),null);
var p = cljs.core.nth.call(null,vec__9211,(1),null);
var job = vec__9211;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5194__auto___9380 = n;
var __9381 = (0);
while(true){
if((__9381 < n__5194__auto___9380)){
var G__9212_9382 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9212_9382) {
case "compute":
var c__6742__auto___9384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9381,c__6742__auto___9384,G__9212_9382,n__5194__auto___9380,jobs,results,process,async){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (__9381,c__6742__auto___9384,G__9212_9382,n__5194__auto___9380,jobs,results,process,async){
return (function (state_9225){
var state_val_9226 = (state_9225[(1)]);
if((state_val_9226 === (1))){
var state_9225__$1 = state_9225;
var statearr_9227_9385 = state_9225__$1;
(statearr_9227_9385[(2)] = null);

(statearr_9227_9385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9226 === (2))){
var state_9225__$1 = state_9225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9225__$1,(4),jobs);
} else {
if((state_val_9226 === (3))){
var inst_9223 = (state_9225[(2)]);
var state_9225__$1 = state_9225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9225__$1,inst_9223);
} else {
if((state_val_9226 === (4))){
var inst_9215 = (state_9225[(2)]);
var inst_9216 = process.call(null,inst_9215);
var state_9225__$1 = state_9225;
if(cljs.core.truth_(inst_9216)){
var statearr_9228_9386 = state_9225__$1;
(statearr_9228_9386[(1)] = (5));

} else {
var statearr_9229_9387 = state_9225__$1;
(statearr_9229_9387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9226 === (5))){
var state_9225__$1 = state_9225;
var statearr_9230_9388 = state_9225__$1;
(statearr_9230_9388[(2)] = null);

(statearr_9230_9388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9226 === (6))){
var state_9225__$1 = state_9225;
var statearr_9231_9389 = state_9225__$1;
(statearr_9231_9389[(2)] = null);

(statearr_9231_9389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9226 === (7))){
var inst_9221 = (state_9225[(2)]);
var state_9225__$1 = state_9225;
var statearr_9232_9390 = state_9225__$1;
(statearr_9232_9390[(2)] = inst_9221);

(statearr_9232_9390[(1)] = (3));


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
});})(__9381,c__6742__auto___9384,G__9212_9382,n__5194__auto___9380,jobs,results,process,async))
;
return ((function (__9381,switch__6680__auto__,c__6742__auto___9384,G__9212_9382,n__5194__auto___9380,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0 = (function (){
var statearr_9236 = [null,null,null,null,null,null,null];
(statearr_9236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__);

(statearr_9236[(1)] = (1));

return statearr_9236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1 = (function (state_9225){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_9225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e9237){if((e9237 instanceof Object)){
var ex__6684__auto__ = e9237;
var statearr_9238_9391 = state_9225;
(statearr_9238_9391[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9392 = state_9225;
state_9225 = G__9392;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__ = function(state_9225){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1.call(this,state_9225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__;
})()
;})(__9381,switch__6680__auto__,c__6742__auto___9384,G__9212_9382,n__5194__auto___9380,jobs,results,process,async))
})();
var state__6744__auto__ = (function (){var statearr_9239 = f__6743__auto__.call(null);
(statearr_9239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___9384);

return statearr_9239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(__9381,c__6742__auto___9384,G__9212_9382,n__5194__auto___9380,jobs,results,process,async))
);


break;
case "async":
var c__6742__auto___9393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9381,c__6742__auto___9393,G__9212_9382,n__5194__auto___9380,jobs,results,process,async){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (__9381,c__6742__auto___9393,G__9212_9382,n__5194__auto___9380,jobs,results,process,async){
return (function (state_9252){
var state_val_9253 = (state_9252[(1)]);
if((state_val_9253 === (1))){
var state_9252__$1 = state_9252;
var statearr_9254_9394 = state_9252__$1;
(statearr_9254_9394[(2)] = null);

(statearr_9254_9394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9253 === (2))){
var state_9252__$1 = state_9252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9252__$1,(4),jobs);
} else {
if((state_val_9253 === (3))){
var inst_9250 = (state_9252[(2)]);
var state_9252__$1 = state_9252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9252__$1,inst_9250);
} else {
if((state_val_9253 === (4))){
var inst_9242 = (state_9252[(2)]);
var inst_9243 = async.call(null,inst_9242);
var state_9252__$1 = state_9252;
if(cljs.core.truth_(inst_9243)){
var statearr_9255_9395 = state_9252__$1;
(statearr_9255_9395[(1)] = (5));

} else {
var statearr_9256_9396 = state_9252__$1;
(statearr_9256_9396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9253 === (5))){
var state_9252__$1 = state_9252;
var statearr_9257_9397 = state_9252__$1;
(statearr_9257_9397[(2)] = null);

(statearr_9257_9397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9253 === (6))){
var state_9252__$1 = state_9252;
var statearr_9258_9398 = state_9252__$1;
(statearr_9258_9398[(2)] = null);

(statearr_9258_9398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9253 === (7))){
var inst_9248 = (state_9252[(2)]);
var state_9252__$1 = state_9252;
var statearr_9259_9399 = state_9252__$1;
(statearr_9259_9399[(2)] = inst_9248);

(statearr_9259_9399[(1)] = (3));


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
});})(__9381,c__6742__auto___9393,G__9212_9382,n__5194__auto___9380,jobs,results,process,async))
;
return ((function (__9381,switch__6680__auto__,c__6742__auto___9393,G__9212_9382,n__5194__auto___9380,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0 = (function (){
var statearr_9263 = [null,null,null,null,null,null,null];
(statearr_9263[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__);

(statearr_9263[(1)] = (1));

return statearr_9263;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1 = (function (state_9252){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_9252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e9264){if((e9264 instanceof Object)){
var ex__6684__auto__ = e9264;
var statearr_9265_9400 = state_9252;
(statearr_9265_9400[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9401 = state_9252;
state_9252 = G__9401;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__ = function(state_9252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1.call(this,state_9252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__;
})()
;})(__9381,switch__6680__auto__,c__6742__auto___9393,G__9212_9382,n__5194__auto___9380,jobs,results,process,async))
})();
var state__6744__auto__ = (function (){var statearr_9266 = f__6743__auto__.call(null);
(statearr_9266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___9393);

return statearr_9266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(__9381,c__6742__auto___9393,G__9212_9382,n__5194__auto___9380,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9402 = (__9381 + (1));
__9381 = G__9402;
continue;
} else {
}
break;
}

var c__6742__auto___9403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___9403,jobs,results,process,async){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___9403,jobs,results,process,async){
return (function (state_9288){
var state_val_9289 = (state_9288[(1)]);
if((state_val_9289 === (1))){
var state_9288__$1 = state_9288;
var statearr_9290_9404 = state_9288__$1;
(statearr_9290_9404[(2)] = null);

(statearr_9290_9404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9289 === (2))){
var state_9288__$1 = state_9288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9288__$1,(4),from);
} else {
if((state_val_9289 === (3))){
var inst_9286 = (state_9288[(2)]);
var state_9288__$1 = state_9288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9288__$1,inst_9286);
} else {
if((state_val_9289 === (4))){
var inst_9269 = (state_9288[(7)]);
var inst_9269__$1 = (state_9288[(2)]);
var inst_9270 = (inst_9269__$1 == null);
var state_9288__$1 = (function (){var statearr_9291 = state_9288;
(statearr_9291[(7)] = inst_9269__$1);

return statearr_9291;
})();
if(cljs.core.truth_(inst_9270)){
var statearr_9292_9405 = state_9288__$1;
(statearr_9292_9405[(1)] = (5));

} else {
var statearr_9293_9406 = state_9288__$1;
(statearr_9293_9406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9289 === (5))){
var inst_9272 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9288__$1 = state_9288;
var statearr_9294_9407 = state_9288__$1;
(statearr_9294_9407[(2)] = inst_9272);

(statearr_9294_9407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9289 === (6))){
var inst_9269 = (state_9288[(7)]);
var inst_9274 = (state_9288[(8)]);
var inst_9274__$1 = cljs.core.async.chan.call(null,(1));
var inst_9275 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9276 = [inst_9269,inst_9274__$1];
var inst_9277 = (new cljs.core.PersistentVector(null,2,(5),inst_9275,inst_9276,null));
var state_9288__$1 = (function (){var statearr_9295 = state_9288;
(statearr_9295[(8)] = inst_9274__$1);

return statearr_9295;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9288__$1,(8),jobs,inst_9277);
} else {
if((state_val_9289 === (7))){
var inst_9284 = (state_9288[(2)]);
var state_9288__$1 = state_9288;
var statearr_9296_9408 = state_9288__$1;
(statearr_9296_9408[(2)] = inst_9284);

(statearr_9296_9408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9289 === (8))){
var inst_9274 = (state_9288[(8)]);
var inst_9279 = (state_9288[(2)]);
var state_9288__$1 = (function (){var statearr_9297 = state_9288;
(statearr_9297[(9)] = inst_9279);

return statearr_9297;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9288__$1,(9),results,inst_9274);
} else {
if((state_val_9289 === (9))){
var inst_9281 = (state_9288[(2)]);
var state_9288__$1 = (function (){var statearr_9298 = state_9288;
(statearr_9298[(10)] = inst_9281);

return statearr_9298;
})();
var statearr_9299_9409 = state_9288__$1;
(statearr_9299_9409[(2)] = null);

(statearr_9299_9409[(1)] = (2));


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
});})(c__6742__auto___9403,jobs,results,process,async))
;
return ((function (switch__6680__auto__,c__6742__auto___9403,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0 = (function (){
var statearr_9303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__);

(statearr_9303[(1)] = (1));

return statearr_9303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1 = (function (state_9288){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_9288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e9304){if((e9304 instanceof Object)){
var ex__6684__auto__ = e9304;
var statearr_9305_9410 = state_9288;
(statearr_9305_9410[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9411 = state_9288;
state_9288 = G__9411;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__ = function(state_9288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1.call(this,state_9288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___9403,jobs,results,process,async))
})();
var state__6744__auto__ = (function (){var statearr_9306 = f__6743__auto__.call(null);
(statearr_9306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___9403);

return statearr_9306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___9403,jobs,results,process,async))
);


var c__6742__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto__,jobs,results,process,async){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto__,jobs,results,process,async){
return (function (state_9344){
var state_val_9345 = (state_9344[(1)]);
if((state_val_9345 === (7))){
var inst_9340 = (state_9344[(2)]);
var state_9344__$1 = state_9344;
var statearr_9346_9412 = state_9344__$1;
(statearr_9346_9412[(2)] = inst_9340);

(statearr_9346_9412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (20))){
var state_9344__$1 = state_9344;
var statearr_9347_9413 = state_9344__$1;
(statearr_9347_9413[(2)] = null);

(statearr_9347_9413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (1))){
var state_9344__$1 = state_9344;
var statearr_9348_9414 = state_9344__$1;
(statearr_9348_9414[(2)] = null);

(statearr_9348_9414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (4))){
var inst_9309 = (state_9344[(7)]);
var inst_9309__$1 = (state_9344[(2)]);
var inst_9310 = (inst_9309__$1 == null);
var state_9344__$1 = (function (){var statearr_9349 = state_9344;
(statearr_9349[(7)] = inst_9309__$1);

return statearr_9349;
})();
if(cljs.core.truth_(inst_9310)){
var statearr_9350_9415 = state_9344__$1;
(statearr_9350_9415[(1)] = (5));

} else {
var statearr_9351_9416 = state_9344__$1;
(statearr_9351_9416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (15))){
var inst_9322 = (state_9344[(8)]);
var state_9344__$1 = state_9344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9344__$1,(18),to,inst_9322);
} else {
if((state_val_9345 === (21))){
var inst_9335 = (state_9344[(2)]);
var state_9344__$1 = state_9344;
var statearr_9352_9417 = state_9344__$1;
(statearr_9352_9417[(2)] = inst_9335);

(statearr_9352_9417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (13))){
var inst_9337 = (state_9344[(2)]);
var state_9344__$1 = (function (){var statearr_9353 = state_9344;
(statearr_9353[(9)] = inst_9337);

return statearr_9353;
})();
var statearr_9354_9418 = state_9344__$1;
(statearr_9354_9418[(2)] = null);

(statearr_9354_9418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (6))){
var inst_9309 = (state_9344[(7)]);
var state_9344__$1 = state_9344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9344__$1,(11),inst_9309);
} else {
if((state_val_9345 === (17))){
var inst_9330 = (state_9344[(2)]);
var state_9344__$1 = state_9344;
if(cljs.core.truth_(inst_9330)){
var statearr_9355_9419 = state_9344__$1;
(statearr_9355_9419[(1)] = (19));

} else {
var statearr_9356_9420 = state_9344__$1;
(statearr_9356_9420[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (3))){
var inst_9342 = (state_9344[(2)]);
var state_9344__$1 = state_9344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9344__$1,inst_9342);
} else {
if((state_val_9345 === (12))){
var inst_9319 = (state_9344[(10)]);
var state_9344__$1 = state_9344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9344__$1,(14),inst_9319);
} else {
if((state_val_9345 === (2))){
var state_9344__$1 = state_9344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9344__$1,(4),results);
} else {
if((state_val_9345 === (19))){
var state_9344__$1 = state_9344;
var statearr_9357_9421 = state_9344__$1;
(statearr_9357_9421[(2)] = null);

(statearr_9357_9421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (11))){
var inst_9319 = (state_9344[(2)]);
var state_9344__$1 = (function (){var statearr_9358 = state_9344;
(statearr_9358[(10)] = inst_9319);

return statearr_9358;
})();
var statearr_9359_9422 = state_9344__$1;
(statearr_9359_9422[(2)] = null);

(statearr_9359_9422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (9))){
var state_9344__$1 = state_9344;
var statearr_9360_9423 = state_9344__$1;
(statearr_9360_9423[(2)] = null);

(statearr_9360_9423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (5))){
var state_9344__$1 = state_9344;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9361_9424 = state_9344__$1;
(statearr_9361_9424[(1)] = (8));

} else {
var statearr_9362_9425 = state_9344__$1;
(statearr_9362_9425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (14))){
var inst_9322 = (state_9344[(8)]);
var inst_9324 = (state_9344[(11)]);
var inst_9322__$1 = (state_9344[(2)]);
var inst_9323 = (inst_9322__$1 == null);
var inst_9324__$1 = cljs.core.not.call(null,inst_9323);
var state_9344__$1 = (function (){var statearr_9363 = state_9344;
(statearr_9363[(8)] = inst_9322__$1);

(statearr_9363[(11)] = inst_9324__$1);

return statearr_9363;
})();
if(inst_9324__$1){
var statearr_9364_9426 = state_9344__$1;
(statearr_9364_9426[(1)] = (15));

} else {
var statearr_9365_9427 = state_9344__$1;
(statearr_9365_9427[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (16))){
var inst_9324 = (state_9344[(11)]);
var state_9344__$1 = state_9344;
var statearr_9366_9428 = state_9344__$1;
(statearr_9366_9428[(2)] = inst_9324);

(statearr_9366_9428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (10))){
var inst_9316 = (state_9344[(2)]);
var state_9344__$1 = state_9344;
var statearr_9367_9429 = state_9344__$1;
(statearr_9367_9429[(2)] = inst_9316);

(statearr_9367_9429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (18))){
var inst_9327 = (state_9344[(2)]);
var state_9344__$1 = state_9344;
var statearr_9368_9430 = state_9344__$1;
(statearr_9368_9430[(2)] = inst_9327);

(statearr_9368_9430[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9345 === (8))){
var inst_9313 = cljs.core.async.close_BANG_.call(null,to);
var state_9344__$1 = state_9344;
var statearr_9369_9431 = state_9344__$1;
(statearr_9369_9431[(2)] = inst_9313);

(statearr_9369_9431[(1)] = (10));


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
});})(c__6742__auto__,jobs,results,process,async))
;
return ((function (switch__6680__auto__,c__6742__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0 = (function (){
var statearr_9373 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__);

(statearr_9373[(1)] = (1));

return statearr_9373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1 = (function (state_9344){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_9344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e9374){if((e9374 instanceof Object)){
var ex__6684__auto__ = e9374;
var statearr_9375_9432 = state_9344;
(statearr_9375_9432[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9433 = state_9344;
state_9344 = G__9433;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__ = function(state_9344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1.call(this,state_9344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6681__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto__,jobs,results,process,async))
})();
var state__6744__auto__ = (function (){var statearr_9376 = f__6743__auto__.call(null);
(statearr_9376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto__);

return statearr_9376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto__,jobs,results,process,async))
);

return c__6742__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__9435 = arguments.length;
switch (G__9435) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__9438 = arguments.length;
switch (G__9438) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__9441 = arguments.length;
switch (G__9441) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6742__auto___9493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___9493,tc,fc){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___9493,tc,fc){
return (function (state_9467){
var state_val_9468 = (state_9467[(1)]);
if((state_val_9468 === (7))){
var inst_9463 = (state_9467[(2)]);
var state_9467__$1 = state_9467;
var statearr_9469_9494 = state_9467__$1;
(statearr_9469_9494[(2)] = inst_9463);

(statearr_9469_9494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9468 === (1))){
var state_9467__$1 = state_9467;
var statearr_9470_9495 = state_9467__$1;
(statearr_9470_9495[(2)] = null);

(statearr_9470_9495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9468 === (4))){
var inst_9444 = (state_9467[(7)]);
var inst_9444__$1 = (state_9467[(2)]);
var inst_9445 = (inst_9444__$1 == null);
var state_9467__$1 = (function (){var statearr_9471 = state_9467;
(statearr_9471[(7)] = inst_9444__$1);

return statearr_9471;
})();
if(cljs.core.truth_(inst_9445)){
var statearr_9472_9496 = state_9467__$1;
(statearr_9472_9496[(1)] = (5));

} else {
var statearr_9473_9497 = state_9467__$1;
(statearr_9473_9497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9468 === (13))){
var state_9467__$1 = state_9467;
var statearr_9474_9498 = state_9467__$1;
(statearr_9474_9498[(2)] = null);

(statearr_9474_9498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9468 === (6))){
var inst_9444 = (state_9467[(7)]);
var inst_9450 = p.call(null,inst_9444);
var state_9467__$1 = state_9467;
if(cljs.core.truth_(inst_9450)){
var statearr_9475_9499 = state_9467__$1;
(statearr_9475_9499[(1)] = (9));

} else {
var statearr_9476_9500 = state_9467__$1;
(statearr_9476_9500[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9468 === (3))){
var inst_9465 = (state_9467[(2)]);
var state_9467__$1 = state_9467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9467__$1,inst_9465);
} else {
if((state_val_9468 === (12))){
var state_9467__$1 = state_9467;
var statearr_9477_9501 = state_9467__$1;
(statearr_9477_9501[(2)] = null);

(statearr_9477_9501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9468 === (2))){
var state_9467__$1 = state_9467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9467__$1,(4),ch);
} else {
if((state_val_9468 === (11))){
var inst_9444 = (state_9467[(7)]);
var inst_9454 = (state_9467[(2)]);
var state_9467__$1 = state_9467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9467__$1,(8),inst_9454,inst_9444);
} else {
if((state_val_9468 === (9))){
var state_9467__$1 = state_9467;
var statearr_9478_9502 = state_9467__$1;
(statearr_9478_9502[(2)] = tc);

(statearr_9478_9502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9468 === (5))){
var inst_9447 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9448 = cljs.core.async.close_BANG_.call(null,fc);
var state_9467__$1 = (function (){var statearr_9479 = state_9467;
(statearr_9479[(8)] = inst_9447);

return statearr_9479;
})();
var statearr_9480_9503 = state_9467__$1;
(statearr_9480_9503[(2)] = inst_9448);

(statearr_9480_9503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9468 === (14))){
var inst_9461 = (state_9467[(2)]);
var state_9467__$1 = state_9467;
var statearr_9481_9504 = state_9467__$1;
(statearr_9481_9504[(2)] = inst_9461);

(statearr_9481_9504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9468 === (10))){
var state_9467__$1 = state_9467;
var statearr_9482_9505 = state_9467__$1;
(statearr_9482_9505[(2)] = fc);

(statearr_9482_9505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9468 === (8))){
var inst_9456 = (state_9467[(2)]);
var state_9467__$1 = state_9467;
if(cljs.core.truth_(inst_9456)){
var statearr_9483_9506 = state_9467__$1;
(statearr_9483_9506[(1)] = (12));

} else {
var statearr_9484_9507 = state_9467__$1;
(statearr_9484_9507[(1)] = (13));

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
});})(c__6742__auto___9493,tc,fc))
;
return ((function (switch__6680__auto__,c__6742__auto___9493,tc,fc){
return (function() {
var cljs$core$async$state_machine__6681__auto__ = null;
var cljs$core$async$state_machine__6681__auto____0 = (function (){
var statearr_9488 = [null,null,null,null,null,null,null,null,null];
(statearr_9488[(0)] = cljs$core$async$state_machine__6681__auto__);

(statearr_9488[(1)] = (1));

return statearr_9488;
});
var cljs$core$async$state_machine__6681__auto____1 = (function (state_9467){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_9467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e9489){if((e9489 instanceof Object)){
var ex__6684__auto__ = e9489;
var statearr_9490_9508 = state_9467;
(statearr_9490_9508[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9509 = state_9467;
state_9467 = G__9509;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$state_machine__6681__auto__ = function(state_9467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6681__auto____1.call(this,state_9467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6681__auto____0;
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6681__auto____1;
return cljs$core$async$state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___9493,tc,fc))
})();
var state__6744__auto__ = (function (){var statearr_9491 = f__6743__auto__.call(null);
(statearr_9491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___9493);

return statearr_9491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___9493,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6742__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto__){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto__){
return (function (state_9556){
var state_val_9557 = (state_9556[(1)]);
if((state_val_9557 === (1))){
var inst_9542 = init;
var state_9556__$1 = (function (){var statearr_9558 = state_9556;
(statearr_9558[(7)] = inst_9542);

return statearr_9558;
})();
var statearr_9559_9574 = state_9556__$1;
(statearr_9559_9574[(2)] = null);

(statearr_9559_9574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9557 === (2))){
var state_9556__$1 = state_9556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9556__$1,(4),ch);
} else {
if((state_val_9557 === (3))){
var inst_9554 = (state_9556[(2)]);
var state_9556__$1 = state_9556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9556__$1,inst_9554);
} else {
if((state_val_9557 === (4))){
var inst_9545 = (state_9556[(8)]);
var inst_9545__$1 = (state_9556[(2)]);
var inst_9546 = (inst_9545__$1 == null);
var state_9556__$1 = (function (){var statearr_9560 = state_9556;
(statearr_9560[(8)] = inst_9545__$1);

return statearr_9560;
})();
if(cljs.core.truth_(inst_9546)){
var statearr_9561_9575 = state_9556__$1;
(statearr_9561_9575[(1)] = (5));

} else {
var statearr_9562_9576 = state_9556__$1;
(statearr_9562_9576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9557 === (5))){
var inst_9542 = (state_9556[(7)]);
var state_9556__$1 = state_9556;
var statearr_9563_9577 = state_9556__$1;
(statearr_9563_9577[(2)] = inst_9542);

(statearr_9563_9577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9557 === (6))){
var inst_9542 = (state_9556[(7)]);
var inst_9545 = (state_9556[(8)]);
var inst_9549 = f.call(null,inst_9542,inst_9545);
var inst_9542__$1 = inst_9549;
var state_9556__$1 = (function (){var statearr_9564 = state_9556;
(statearr_9564[(7)] = inst_9542__$1);

return statearr_9564;
})();
var statearr_9565_9578 = state_9556__$1;
(statearr_9565_9578[(2)] = null);

(statearr_9565_9578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9557 === (7))){
var inst_9552 = (state_9556[(2)]);
var state_9556__$1 = state_9556;
var statearr_9566_9579 = state_9556__$1;
(statearr_9566_9579[(2)] = inst_9552);

(statearr_9566_9579[(1)] = (3));


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
});})(c__6742__auto__))
;
return ((function (switch__6680__auto__,c__6742__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6681__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6681__auto____0 = (function (){
var statearr_9570 = [null,null,null,null,null,null,null,null,null];
(statearr_9570[(0)] = cljs$core$async$reduce_$_state_machine__6681__auto__);

(statearr_9570[(1)] = (1));

return statearr_9570;
});
var cljs$core$async$reduce_$_state_machine__6681__auto____1 = (function (state_9556){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_9556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e9571){if((e9571 instanceof Object)){
var ex__6684__auto__ = e9571;
var statearr_9572_9580 = state_9556;
(statearr_9572_9580[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9581 = state_9556;
state_9556 = G__9581;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6681__auto__ = function(state_9556){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6681__auto____1.call(this,state_9556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6681__auto____0;
cljs$core$async$reduce_$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6681__auto____1;
return cljs$core$async$reduce_$_state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto__))
})();
var state__6744__auto__ = (function (){var statearr_9573 = f__6743__auto__.call(null);
(statearr_9573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto__);

return statearr_9573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto__))
);

return c__6742__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__9583 = arguments.length;
switch (G__9583) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6742__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto__){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto__){
return (function (state_9608){
var state_val_9609 = (state_9608[(1)]);
if((state_val_9609 === (7))){
var inst_9590 = (state_9608[(2)]);
var state_9608__$1 = state_9608;
var statearr_9610_9634 = state_9608__$1;
(statearr_9610_9634[(2)] = inst_9590);

(statearr_9610_9634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9609 === (1))){
var inst_9584 = cljs.core.seq.call(null,coll);
var inst_9585 = inst_9584;
var state_9608__$1 = (function (){var statearr_9611 = state_9608;
(statearr_9611[(7)] = inst_9585);

return statearr_9611;
})();
var statearr_9612_9635 = state_9608__$1;
(statearr_9612_9635[(2)] = null);

(statearr_9612_9635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9609 === (4))){
var inst_9585 = (state_9608[(7)]);
var inst_9588 = cljs.core.first.call(null,inst_9585);
var state_9608__$1 = state_9608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9608__$1,(7),ch,inst_9588);
} else {
if((state_val_9609 === (13))){
var inst_9602 = (state_9608[(2)]);
var state_9608__$1 = state_9608;
var statearr_9613_9636 = state_9608__$1;
(statearr_9613_9636[(2)] = inst_9602);

(statearr_9613_9636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9609 === (6))){
var inst_9593 = (state_9608[(2)]);
var state_9608__$1 = state_9608;
if(cljs.core.truth_(inst_9593)){
var statearr_9614_9637 = state_9608__$1;
(statearr_9614_9637[(1)] = (8));

} else {
var statearr_9615_9638 = state_9608__$1;
(statearr_9615_9638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9609 === (3))){
var inst_9606 = (state_9608[(2)]);
var state_9608__$1 = state_9608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9608__$1,inst_9606);
} else {
if((state_val_9609 === (12))){
var state_9608__$1 = state_9608;
var statearr_9616_9639 = state_9608__$1;
(statearr_9616_9639[(2)] = null);

(statearr_9616_9639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9609 === (2))){
var inst_9585 = (state_9608[(7)]);
var state_9608__$1 = state_9608;
if(cljs.core.truth_(inst_9585)){
var statearr_9617_9640 = state_9608__$1;
(statearr_9617_9640[(1)] = (4));

} else {
var statearr_9618_9641 = state_9608__$1;
(statearr_9618_9641[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9609 === (11))){
var inst_9599 = cljs.core.async.close_BANG_.call(null,ch);
var state_9608__$1 = state_9608;
var statearr_9619_9642 = state_9608__$1;
(statearr_9619_9642[(2)] = inst_9599);

(statearr_9619_9642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9609 === (9))){
var state_9608__$1 = state_9608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9620_9643 = state_9608__$1;
(statearr_9620_9643[(1)] = (11));

} else {
var statearr_9621_9644 = state_9608__$1;
(statearr_9621_9644[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9609 === (5))){
var inst_9585 = (state_9608[(7)]);
var state_9608__$1 = state_9608;
var statearr_9622_9645 = state_9608__$1;
(statearr_9622_9645[(2)] = inst_9585);

(statearr_9622_9645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9609 === (10))){
var inst_9604 = (state_9608[(2)]);
var state_9608__$1 = state_9608;
var statearr_9623_9646 = state_9608__$1;
(statearr_9623_9646[(2)] = inst_9604);

(statearr_9623_9646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9609 === (8))){
var inst_9585 = (state_9608[(7)]);
var inst_9595 = cljs.core.next.call(null,inst_9585);
var inst_9585__$1 = inst_9595;
var state_9608__$1 = (function (){var statearr_9624 = state_9608;
(statearr_9624[(7)] = inst_9585__$1);

return statearr_9624;
})();
var statearr_9625_9647 = state_9608__$1;
(statearr_9625_9647[(2)] = null);

(statearr_9625_9647[(1)] = (2));


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
});})(c__6742__auto__))
;
return ((function (switch__6680__auto__,c__6742__auto__){
return (function() {
var cljs$core$async$state_machine__6681__auto__ = null;
var cljs$core$async$state_machine__6681__auto____0 = (function (){
var statearr_9629 = [null,null,null,null,null,null,null,null];
(statearr_9629[(0)] = cljs$core$async$state_machine__6681__auto__);

(statearr_9629[(1)] = (1));

return statearr_9629;
});
var cljs$core$async$state_machine__6681__auto____1 = (function (state_9608){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_9608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e9630){if((e9630 instanceof Object)){
var ex__6684__auto__ = e9630;
var statearr_9631_9648 = state_9608;
(statearr_9631_9648[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9649 = state_9608;
state_9608 = G__9649;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$state_machine__6681__auto__ = function(state_9608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6681__auto____1.call(this,state_9608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6681__auto____0;
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6681__auto____1;
return cljs$core$async$state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto__))
})();
var state__6744__auto__ = (function (){var statearr_9632 = f__6743__auto__.call(null);
(statearr_9632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto__);

return statearr_9632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto__))
);

return c__6742__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj9651 = {};
return obj9651;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4297__auto__ = _;
if(and__4297__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4945__auto__ = (((_ == null))?null:_);
return (function (){var or__4309__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj9653 = {};
return obj9653;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t9875 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9875 = (function (mult,ch,cs,meta9876){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9876 = meta9876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t9875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9877,meta9876__$1){
var self__ = this;
var _9877__$1 = this;
return (new cljs.core.async.t9875(self__.mult,self__.ch,self__.cs,meta9876__$1));
});})(cs))
;

cljs.core.async.t9875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9877){
var self__ = this;
var _9877__$1 = this;
return self__.meta9876;
});})(cs))
;

cljs.core.async.t9875.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t9875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t9875.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t9875.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t9875.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t9875.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t9875.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9876","meta9876",-1749539744,null)], null);
});})(cs))
;

cljs.core.async.t9875.cljs$lang$type = true;

cljs.core.async.t9875.cljs$lang$ctorStr = "cljs.core.async/t9875";

cljs.core.async.t9875.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t9875");
});})(cs))
;

cljs.core.async.__GT_t9875 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t9875(mult__$1,ch__$1,cs__$1,meta9876){
return (new cljs.core.async.t9875(mult__$1,ch__$1,cs__$1,meta9876));
});})(cs))
;

}

return (new cljs.core.async.t9875(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6742__auto___10096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___10096,cs,m,dchan,dctr,done){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___10096,cs,m,dchan,dctr,done){
return (function (state_10008){
var state_val_10009 = (state_10008[(1)]);
if((state_val_10009 === (7))){
var inst_10004 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10010_10097 = state_10008__$1;
(statearr_10010_10097[(2)] = inst_10004);

(statearr_10010_10097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (20))){
var inst_9909 = (state_10008[(7)]);
var inst_9919 = cljs.core.first.call(null,inst_9909);
var inst_9920 = cljs.core.nth.call(null,inst_9919,(0),null);
var inst_9921 = cljs.core.nth.call(null,inst_9919,(1),null);
var state_10008__$1 = (function (){var statearr_10011 = state_10008;
(statearr_10011[(8)] = inst_9920);

return statearr_10011;
})();
if(cljs.core.truth_(inst_9921)){
var statearr_10012_10098 = state_10008__$1;
(statearr_10012_10098[(1)] = (22));

} else {
var statearr_10013_10099 = state_10008__$1;
(statearr_10013_10099[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (27))){
var inst_9956 = (state_10008[(9)]);
var inst_9951 = (state_10008[(10)]);
var inst_9949 = (state_10008[(11)]);
var inst_9880 = (state_10008[(12)]);
var inst_9956__$1 = cljs.core._nth.call(null,inst_9949,inst_9951);
var inst_9957 = cljs.core.async.put_BANG_.call(null,inst_9956__$1,inst_9880,done);
var state_10008__$1 = (function (){var statearr_10014 = state_10008;
(statearr_10014[(9)] = inst_9956__$1);

return statearr_10014;
})();
if(cljs.core.truth_(inst_9957)){
var statearr_10015_10100 = state_10008__$1;
(statearr_10015_10100[(1)] = (30));

} else {
var statearr_10016_10101 = state_10008__$1;
(statearr_10016_10101[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (1))){
var state_10008__$1 = state_10008;
var statearr_10017_10102 = state_10008__$1;
(statearr_10017_10102[(2)] = null);

(statearr_10017_10102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (24))){
var inst_9909 = (state_10008[(7)]);
var inst_9926 = (state_10008[(2)]);
var inst_9927 = cljs.core.next.call(null,inst_9909);
var inst_9889 = inst_9927;
var inst_9890 = null;
var inst_9891 = (0);
var inst_9892 = (0);
var state_10008__$1 = (function (){var statearr_10018 = state_10008;
(statearr_10018[(13)] = inst_9926);

(statearr_10018[(14)] = inst_9889);

(statearr_10018[(15)] = inst_9890);

(statearr_10018[(16)] = inst_9892);

(statearr_10018[(17)] = inst_9891);

return statearr_10018;
})();
var statearr_10019_10103 = state_10008__$1;
(statearr_10019_10103[(2)] = null);

(statearr_10019_10103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (39))){
var state_10008__$1 = state_10008;
var statearr_10023_10104 = state_10008__$1;
(statearr_10023_10104[(2)] = null);

(statearr_10023_10104[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (4))){
var inst_9880 = (state_10008[(12)]);
var inst_9880__$1 = (state_10008[(2)]);
var inst_9881 = (inst_9880__$1 == null);
var state_10008__$1 = (function (){var statearr_10024 = state_10008;
(statearr_10024[(12)] = inst_9880__$1);

return statearr_10024;
})();
if(cljs.core.truth_(inst_9881)){
var statearr_10025_10105 = state_10008__$1;
(statearr_10025_10105[(1)] = (5));

} else {
var statearr_10026_10106 = state_10008__$1;
(statearr_10026_10106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (15))){
var inst_9889 = (state_10008[(14)]);
var inst_9890 = (state_10008[(15)]);
var inst_9892 = (state_10008[(16)]);
var inst_9891 = (state_10008[(17)]);
var inst_9905 = (state_10008[(2)]);
var inst_9906 = (inst_9892 + (1));
var tmp10020 = inst_9889;
var tmp10021 = inst_9890;
var tmp10022 = inst_9891;
var inst_9889__$1 = tmp10020;
var inst_9890__$1 = tmp10021;
var inst_9891__$1 = tmp10022;
var inst_9892__$1 = inst_9906;
var state_10008__$1 = (function (){var statearr_10027 = state_10008;
(statearr_10027[(14)] = inst_9889__$1);

(statearr_10027[(15)] = inst_9890__$1);

(statearr_10027[(16)] = inst_9892__$1);

(statearr_10027[(17)] = inst_9891__$1);

(statearr_10027[(18)] = inst_9905);

return statearr_10027;
})();
var statearr_10028_10107 = state_10008__$1;
(statearr_10028_10107[(2)] = null);

(statearr_10028_10107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (21))){
var inst_9930 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10032_10108 = state_10008__$1;
(statearr_10032_10108[(2)] = inst_9930);

(statearr_10032_10108[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (31))){
var inst_9956 = (state_10008[(9)]);
var inst_9960 = done.call(null,null);
var inst_9961 = cljs.core.async.untap_STAR_.call(null,m,inst_9956);
var state_10008__$1 = (function (){var statearr_10033 = state_10008;
(statearr_10033[(19)] = inst_9960);

return statearr_10033;
})();
var statearr_10034_10109 = state_10008__$1;
(statearr_10034_10109[(2)] = inst_9961);

(statearr_10034_10109[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (32))){
var inst_9950 = (state_10008[(20)]);
var inst_9951 = (state_10008[(10)]);
var inst_9949 = (state_10008[(11)]);
var inst_9948 = (state_10008[(21)]);
var inst_9963 = (state_10008[(2)]);
var inst_9964 = (inst_9951 + (1));
var tmp10029 = inst_9950;
var tmp10030 = inst_9949;
var tmp10031 = inst_9948;
var inst_9948__$1 = tmp10031;
var inst_9949__$1 = tmp10030;
var inst_9950__$1 = tmp10029;
var inst_9951__$1 = inst_9964;
var state_10008__$1 = (function (){var statearr_10035 = state_10008;
(statearr_10035[(20)] = inst_9950__$1);

(statearr_10035[(22)] = inst_9963);

(statearr_10035[(10)] = inst_9951__$1);

(statearr_10035[(11)] = inst_9949__$1);

(statearr_10035[(21)] = inst_9948__$1);

return statearr_10035;
})();
var statearr_10036_10110 = state_10008__$1;
(statearr_10036_10110[(2)] = null);

(statearr_10036_10110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (40))){
var inst_9976 = (state_10008[(23)]);
var inst_9980 = done.call(null,null);
var inst_9981 = cljs.core.async.untap_STAR_.call(null,m,inst_9976);
var state_10008__$1 = (function (){var statearr_10037 = state_10008;
(statearr_10037[(24)] = inst_9980);

return statearr_10037;
})();
var statearr_10038_10111 = state_10008__$1;
(statearr_10038_10111[(2)] = inst_9981);

(statearr_10038_10111[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (33))){
var inst_9967 = (state_10008[(25)]);
var inst_9969 = cljs.core.chunked_seq_QMARK_.call(null,inst_9967);
var state_10008__$1 = state_10008;
if(inst_9969){
var statearr_10039_10112 = state_10008__$1;
(statearr_10039_10112[(1)] = (36));

} else {
var statearr_10040_10113 = state_10008__$1;
(statearr_10040_10113[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (13))){
var inst_9899 = (state_10008[(26)]);
var inst_9902 = cljs.core.async.close_BANG_.call(null,inst_9899);
var state_10008__$1 = state_10008;
var statearr_10041_10114 = state_10008__$1;
(statearr_10041_10114[(2)] = inst_9902);

(statearr_10041_10114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (22))){
var inst_9920 = (state_10008[(8)]);
var inst_9923 = cljs.core.async.close_BANG_.call(null,inst_9920);
var state_10008__$1 = state_10008;
var statearr_10042_10115 = state_10008__$1;
(statearr_10042_10115[(2)] = inst_9923);

(statearr_10042_10115[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (36))){
var inst_9967 = (state_10008[(25)]);
var inst_9971 = cljs.core.chunk_first.call(null,inst_9967);
var inst_9972 = cljs.core.chunk_rest.call(null,inst_9967);
var inst_9973 = cljs.core.count.call(null,inst_9971);
var inst_9948 = inst_9972;
var inst_9949 = inst_9971;
var inst_9950 = inst_9973;
var inst_9951 = (0);
var state_10008__$1 = (function (){var statearr_10043 = state_10008;
(statearr_10043[(20)] = inst_9950);

(statearr_10043[(10)] = inst_9951);

(statearr_10043[(11)] = inst_9949);

(statearr_10043[(21)] = inst_9948);

return statearr_10043;
})();
var statearr_10044_10116 = state_10008__$1;
(statearr_10044_10116[(2)] = null);

(statearr_10044_10116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (41))){
var inst_9967 = (state_10008[(25)]);
var inst_9983 = (state_10008[(2)]);
var inst_9984 = cljs.core.next.call(null,inst_9967);
var inst_9948 = inst_9984;
var inst_9949 = null;
var inst_9950 = (0);
var inst_9951 = (0);
var state_10008__$1 = (function (){var statearr_10045 = state_10008;
(statearr_10045[(27)] = inst_9983);

(statearr_10045[(20)] = inst_9950);

(statearr_10045[(10)] = inst_9951);

(statearr_10045[(11)] = inst_9949);

(statearr_10045[(21)] = inst_9948);

return statearr_10045;
})();
var statearr_10046_10117 = state_10008__$1;
(statearr_10046_10117[(2)] = null);

(statearr_10046_10117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (43))){
var state_10008__$1 = state_10008;
var statearr_10047_10118 = state_10008__$1;
(statearr_10047_10118[(2)] = null);

(statearr_10047_10118[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (29))){
var inst_9992 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10048_10119 = state_10008__$1;
(statearr_10048_10119[(2)] = inst_9992);

(statearr_10048_10119[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (44))){
var inst_10001 = (state_10008[(2)]);
var state_10008__$1 = (function (){var statearr_10049 = state_10008;
(statearr_10049[(28)] = inst_10001);

return statearr_10049;
})();
var statearr_10050_10120 = state_10008__$1;
(statearr_10050_10120[(2)] = null);

(statearr_10050_10120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (6))){
var inst_9940 = (state_10008[(29)]);
var inst_9939 = cljs.core.deref.call(null,cs);
var inst_9940__$1 = cljs.core.keys.call(null,inst_9939);
var inst_9941 = cljs.core.count.call(null,inst_9940__$1);
var inst_9942 = cljs.core.reset_BANG_.call(null,dctr,inst_9941);
var inst_9947 = cljs.core.seq.call(null,inst_9940__$1);
var inst_9948 = inst_9947;
var inst_9949 = null;
var inst_9950 = (0);
var inst_9951 = (0);
var state_10008__$1 = (function (){var statearr_10051 = state_10008;
(statearr_10051[(30)] = inst_9942);

(statearr_10051[(20)] = inst_9950);

(statearr_10051[(10)] = inst_9951);

(statearr_10051[(11)] = inst_9949);

(statearr_10051[(21)] = inst_9948);

(statearr_10051[(29)] = inst_9940__$1);

return statearr_10051;
})();
var statearr_10052_10121 = state_10008__$1;
(statearr_10052_10121[(2)] = null);

(statearr_10052_10121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (28))){
var inst_9948 = (state_10008[(21)]);
var inst_9967 = (state_10008[(25)]);
var inst_9967__$1 = cljs.core.seq.call(null,inst_9948);
var state_10008__$1 = (function (){var statearr_10053 = state_10008;
(statearr_10053[(25)] = inst_9967__$1);

return statearr_10053;
})();
if(inst_9967__$1){
var statearr_10054_10122 = state_10008__$1;
(statearr_10054_10122[(1)] = (33));

} else {
var statearr_10055_10123 = state_10008__$1;
(statearr_10055_10123[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (25))){
var inst_9950 = (state_10008[(20)]);
var inst_9951 = (state_10008[(10)]);
var inst_9953 = (inst_9951 < inst_9950);
var inst_9954 = inst_9953;
var state_10008__$1 = state_10008;
if(cljs.core.truth_(inst_9954)){
var statearr_10056_10124 = state_10008__$1;
(statearr_10056_10124[(1)] = (27));

} else {
var statearr_10057_10125 = state_10008__$1;
(statearr_10057_10125[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (34))){
var state_10008__$1 = state_10008;
var statearr_10058_10126 = state_10008__$1;
(statearr_10058_10126[(2)] = null);

(statearr_10058_10126[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (17))){
var state_10008__$1 = state_10008;
var statearr_10059_10127 = state_10008__$1;
(statearr_10059_10127[(2)] = null);

(statearr_10059_10127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (3))){
var inst_10006 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10008__$1,inst_10006);
} else {
if((state_val_10009 === (12))){
var inst_9935 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10060_10128 = state_10008__$1;
(statearr_10060_10128[(2)] = inst_9935);

(statearr_10060_10128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (2))){
var state_10008__$1 = state_10008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10008__$1,(4),ch);
} else {
if((state_val_10009 === (23))){
var state_10008__$1 = state_10008;
var statearr_10061_10129 = state_10008__$1;
(statearr_10061_10129[(2)] = null);

(statearr_10061_10129[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (35))){
var inst_9990 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10062_10130 = state_10008__$1;
(statearr_10062_10130[(2)] = inst_9990);

(statearr_10062_10130[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (19))){
var inst_9909 = (state_10008[(7)]);
var inst_9913 = cljs.core.chunk_first.call(null,inst_9909);
var inst_9914 = cljs.core.chunk_rest.call(null,inst_9909);
var inst_9915 = cljs.core.count.call(null,inst_9913);
var inst_9889 = inst_9914;
var inst_9890 = inst_9913;
var inst_9891 = inst_9915;
var inst_9892 = (0);
var state_10008__$1 = (function (){var statearr_10063 = state_10008;
(statearr_10063[(14)] = inst_9889);

(statearr_10063[(15)] = inst_9890);

(statearr_10063[(16)] = inst_9892);

(statearr_10063[(17)] = inst_9891);

return statearr_10063;
})();
var statearr_10064_10131 = state_10008__$1;
(statearr_10064_10131[(2)] = null);

(statearr_10064_10131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (11))){
var inst_9909 = (state_10008[(7)]);
var inst_9889 = (state_10008[(14)]);
var inst_9909__$1 = cljs.core.seq.call(null,inst_9889);
var state_10008__$1 = (function (){var statearr_10065 = state_10008;
(statearr_10065[(7)] = inst_9909__$1);

return statearr_10065;
})();
if(inst_9909__$1){
var statearr_10066_10132 = state_10008__$1;
(statearr_10066_10132[(1)] = (16));

} else {
var statearr_10067_10133 = state_10008__$1;
(statearr_10067_10133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (9))){
var inst_9937 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10068_10134 = state_10008__$1;
(statearr_10068_10134[(2)] = inst_9937);

(statearr_10068_10134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (5))){
var inst_9887 = cljs.core.deref.call(null,cs);
var inst_9888 = cljs.core.seq.call(null,inst_9887);
var inst_9889 = inst_9888;
var inst_9890 = null;
var inst_9891 = (0);
var inst_9892 = (0);
var state_10008__$1 = (function (){var statearr_10069 = state_10008;
(statearr_10069[(14)] = inst_9889);

(statearr_10069[(15)] = inst_9890);

(statearr_10069[(16)] = inst_9892);

(statearr_10069[(17)] = inst_9891);

return statearr_10069;
})();
var statearr_10070_10135 = state_10008__$1;
(statearr_10070_10135[(2)] = null);

(statearr_10070_10135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (14))){
var state_10008__$1 = state_10008;
var statearr_10071_10136 = state_10008__$1;
(statearr_10071_10136[(2)] = null);

(statearr_10071_10136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (45))){
var inst_9998 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10072_10137 = state_10008__$1;
(statearr_10072_10137[(2)] = inst_9998);

(statearr_10072_10137[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (26))){
var inst_9940 = (state_10008[(29)]);
var inst_9994 = (state_10008[(2)]);
var inst_9995 = cljs.core.seq.call(null,inst_9940);
var state_10008__$1 = (function (){var statearr_10073 = state_10008;
(statearr_10073[(31)] = inst_9994);

return statearr_10073;
})();
if(inst_9995){
var statearr_10074_10138 = state_10008__$1;
(statearr_10074_10138[(1)] = (42));

} else {
var statearr_10075_10139 = state_10008__$1;
(statearr_10075_10139[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (16))){
var inst_9909 = (state_10008[(7)]);
var inst_9911 = cljs.core.chunked_seq_QMARK_.call(null,inst_9909);
var state_10008__$1 = state_10008;
if(inst_9911){
var statearr_10076_10140 = state_10008__$1;
(statearr_10076_10140[(1)] = (19));

} else {
var statearr_10077_10141 = state_10008__$1;
(statearr_10077_10141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (38))){
var inst_9987 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10078_10142 = state_10008__$1;
(statearr_10078_10142[(2)] = inst_9987);

(statearr_10078_10142[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (30))){
var state_10008__$1 = state_10008;
var statearr_10079_10143 = state_10008__$1;
(statearr_10079_10143[(2)] = null);

(statearr_10079_10143[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (10))){
var inst_9890 = (state_10008[(15)]);
var inst_9892 = (state_10008[(16)]);
var inst_9898 = cljs.core._nth.call(null,inst_9890,inst_9892);
var inst_9899 = cljs.core.nth.call(null,inst_9898,(0),null);
var inst_9900 = cljs.core.nth.call(null,inst_9898,(1),null);
var state_10008__$1 = (function (){var statearr_10080 = state_10008;
(statearr_10080[(26)] = inst_9899);

return statearr_10080;
})();
if(cljs.core.truth_(inst_9900)){
var statearr_10081_10144 = state_10008__$1;
(statearr_10081_10144[(1)] = (13));

} else {
var statearr_10082_10145 = state_10008__$1;
(statearr_10082_10145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (18))){
var inst_9933 = (state_10008[(2)]);
var state_10008__$1 = state_10008;
var statearr_10083_10146 = state_10008__$1;
(statearr_10083_10146[(2)] = inst_9933);

(statearr_10083_10146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (42))){
var state_10008__$1 = state_10008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10008__$1,(45),dchan);
} else {
if((state_val_10009 === (37))){
var inst_9880 = (state_10008[(12)]);
var inst_9967 = (state_10008[(25)]);
var inst_9976 = (state_10008[(23)]);
var inst_9976__$1 = cljs.core.first.call(null,inst_9967);
var inst_9977 = cljs.core.async.put_BANG_.call(null,inst_9976__$1,inst_9880,done);
var state_10008__$1 = (function (){var statearr_10084 = state_10008;
(statearr_10084[(23)] = inst_9976__$1);

return statearr_10084;
})();
if(cljs.core.truth_(inst_9977)){
var statearr_10085_10147 = state_10008__$1;
(statearr_10085_10147[(1)] = (39));

} else {
var statearr_10086_10148 = state_10008__$1;
(statearr_10086_10148[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10009 === (8))){
var inst_9892 = (state_10008[(16)]);
var inst_9891 = (state_10008[(17)]);
var inst_9894 = (inst_9892 < inst_9891);
var inst_9895 = inst_9894;
var state_10008__$1 = state_10008;
if(cljs.core.truth_(inst_9895)){
var statearr_10087_10149 = state_10008__$1;
(statearr_10087_10149[(1)] = (10));

} else {
var statearr_10088_10150 = state_10008__$1;
(statearr_10088_10150[(1)] = (11));

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
});})(c__6742__auto___10096,cs,m,dchan,dctr,done))
;
return ((function (switch__6680__auto__,c__6742__auto___10096,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6681__auto__ = null;
var cljs$core$async$mult_$_state_machine__6681__auto____0 = (function (){
var statearr_10092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10092[(0)] = cljs$core$async$mult_$_state_machine__6681__auto__);

(statearr_10092[(1)] = (1));

return statearr_10092;
});
var cljs$core$async$mult_$_state_machine__6681__auto____1 = (function (state_10008){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_10008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e10093){if((e10093 instanceof Object)){
var ex__6684__auto__ = e10093;
var statearr_10094_10151 = state_10008;
(statearr_10094_10151[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10152 = state_10008;
state_10008 = G__10152;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6681__auto__ = function(state_10008){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6681__auto____1.call(this,state_10008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6681__auto____0;
cljs$core$async$mult_$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6681__auto____1;
return cljs$core$async$mult_$_state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___10096,cs,m,dchan,dctr,done))
})();
var state__6744__auto__ = (function (){var statearr_10095 = f__6743__auto__.call(null);
(statearr_10095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___10096);

return statearr_10095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___10096,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__10154 = arguments.length;
switch (G__10154) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj10157 = {};
return obj10157;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5349__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5349__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10162){
var map__10163 = p__10162;
var map__10163__$1 = ((cljs.core.seq_QMARK_.call(null,map__10163))?cljs.core.apply.call(null,cljs.core.hash_map,map__10163):map__10163);
var opts = map__10163__$1;
var statearr_10164_10167 = state;
(statearr_10164_10167[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__10163,map__10163__$1,opts){
return (function (val){
var statearr_10165_10168 = state;
(statearr_10165_10168[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10163,map__10163__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_10166_10169 = state;
(statearr_10166_10169[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10158){
var G__10159 = cljs.core.first.call(null,seq10158);
var seq10158__$1 = cljs.core.next.call(null,seq10158);
var G__10160 = cljs.core.first.call(null,seq10158__$1);
var seq10158__$2 = cljs.core.next.call(null,seq10158__$1);
var G__10161 = cljs.core.first.call(null,seq10158__$2);
var seq10158__$3 = cljs.core.next.call(null,seq10158__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10159,G__10160,G__10161,seq10158__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t10289 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10289 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10290){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10290 = meta10290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10291,meta10290__$1){
var self__ = this;
var _10291__$1 = this;
return (new cljs.core.async.t10289(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10290__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10291){
var self__ = this;
var _10291__$1 = this;
return self__.meta10290;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10289.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10289.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t10289.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10289.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10289.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10289.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10289.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10289.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10290","meta10290",-65292769,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t10289.cljs$lang$type = true;

cljs.core.async.t10289.cljs$lang$ctorStr = "cljs.core.async/t10289";

cljs.core.async.t10289.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10289");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t10289 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t10289(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10290){
return (new cljs.core.async.t10289(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10290));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t10289(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6742__auto___10408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10361){
var state_val_10362 = (state_10361[(1)]);
if((state_val_10362 === (7))){
var inst_10305 = (state_10361[(7)]);
var inst_10310 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10305);
var state_10361__$1 = state_10361;
var statearr_10363_10409 = state_10361__$1;
(statearr_10363_10409[(2)] = inst_10310);

(statearr_10363_10409[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (20))){
var inst_10320 = (state_10361[(8)]);
var state_10361__$1 = state_10361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10361__$1,(23),out,inst_10320);
} else {
if((state_val_10362 === (1))){
var inst_10295 = (state_10361[(9)]);
var inst_10295__$1 = calc_state.call(null);
var inst_10296 = cljs.core.seq_QMARK_.call(null,inst_10295__$1);
var state_10361__$1 = (function (){var statearr_10364 = state_10361;
(statearr_10364[(9)] = inst_10295__$1);

return statearr_10364;
})();
if(inst_10296){
var statearr_10365_10410 = state_10361__$1;
(statearr_10365_10410[(1)] = (2));

} else {
var statearr_10366_10411 = state_10361__$1;
(statearr_10366_10411[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (24))){
var inst_10313 = (state_10361[(10)]);
var inst_10305 = inst_10313;
var state_10361__$1 = (function (){var statearr_10367 = state_10361;
(statearr_10367[(7)] = inst_10305);

return statearr_10367;
})();
var statearr_10368_10412 = state_10361__$1;
(statearr_10368_10412[(2)] = null);

(statearr_10368_10412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (4))){
var inst_10295 = (state_10361[(9)]);
var inst_10301 = (state_10361[(2)]);
var inst_10302 = cljs.core.get.call(null,inst_10301,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10303 = cljs.core.get.call(null,inst_10301,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10304 = cljs.core.get.call(null,inst_10301,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10305 = inst_10295;
var state_10361__$1 = (function (){var statearr_10369 = state_10361;
(statearr_10369[(7)] = inst_10305);

(statearr_10369[(11)] = inst_10303);

(statearr_10369[(12)] = inst_10302);

(statearr_10369[(13)] = inst_10304);

return statearr_10369;
})();
var statearr_10370_10413 = state_10361__$1;
(statearr_10370_10413[(2)] = null);

(statearr_10370_10413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (15))){
var state_10361__$1 = state_10361;
var statearr_10371_10414 = state_10361__$1;
(statearr_10371_10414[(2)] = null);

(statearr_10371_10414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (21))){
var inst_10313 = (state_10361[(10)]);
var inst_10305 = inst_10313;
var state_10361__$1 = (function (){var statearr_10372 = state_10361;
(statearr_10372[(7)] = inst_10305);

return statearr_10372;
})();
var statearr_10373_10415 = state_10361__$1;
(statearr_10373_10415[(2)] = null);

(statearr_10373_10415[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (13))){
var inst_10357 = (state_10361[(2)]);
var state_10361__$1 = state_10361;
var statearr_10374_10416 = state_10361__$1;
(statearr_10374_10416[(2)] = inst_10357);

(statearr_10374_10416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (22))){
var inst_10355 = (state_10361[(2)]);
var state_10361__$1 = state_10361;
var statearr_10375_10417 = state_10361__$1;
(statearr_10375_10417[(2)] = inst_10355);

(statearr_10375_10417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (6))){
var inst_10359 = (state_10361[(2)]);
var state_10361__$1 = state_10361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10361__$1,inst_10359);
} else {
if((state_val_10362 === (25))){
var state_10361__$1 = state_10361;
var statearr_10376_10418 = state_10361__$1;
(statearr_10376_10418[(2)] = null);

(statearr_10376_10418[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (17))){
var inst_10335 = (state_10361[(14)]);
var state_10361__$1 = state_10361;
var statearr_10377_10419 = state_10361__$1;
(statearr_10377_10419[(2)] = inst_10335);

(statearr_10377_10419[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (3))){
var inst_10295 = (state_10361[(9)]);
var state_10361__$1 = state_10361;
var statearr_10378_10420 = state_10361__$1;
(statearr_10378_10420[(2)] = inst_10295);

(statearr_10378_10420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (12))){
var inst_10321 = (state_10361[(15)]);
var inst_10335 = (state_10361[(14)]);
var inst_10314 = (state_10361[(16)]);
var inst_10335__$1 = inst_10314.call(null,inst_10321);
var state_10361__$1 = (function (){var statearr_10379 = state_10361;
(statearr_10379[(14)] = inst_10335__$1);

return statearr_10379;
})();
if(cljs.core.truth_(inst_10335__$1)){
var statearr_10380_10421 = state_10361__$1;
(statearr_10380_10421[(1)] = (17));

} else {
var statearr_10381_10422 = state_10361__$1;
(statearr_10381_10422[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (2))){
var inst_10295 = (state_10361[(9)]);
var inst_10298 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10295);
var state_10361__$1 = state_10361;
var statearr_10382_10423 = state_10361__$1;
(statearr_10382_10423[(2)] = inst_10298);

(statearr_10382_10423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (23))){
var inst_10346 = (state_10361[(2)]);
var state_10361__$1 = state_10361;
if(cljs.core.truth_(inst_10346)){
var statearr_10383_10424 = state_10361__$1;
(statearr_10383_10424[(1)] = (24));

} else {
var statearr_10384_10425 = state_10361__$1;
(statearr_10384_10425[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (19))){
var inst_10343 = (state_10361[(2)]);
var state_10361__$1 = state_10361;
if(cljs.core.truth_(inst_10343)){
var statearr_10385_10426 = state_10361__$1;
(statearr_10385_10426[(1)] = (20));

} else {
var statearr_10386_10427 = state_10361__$1;
(statearr_10386_10427[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (11))){
var inst_10320 = (state_10361[(8)]);
var inst_10326 = (inst_10320 == null);
var state_10361__$1 = state_10361;
if(cljs.core.truth_(inst_10326)){
var statearr_10387_10428 = state_10361__$1;
(statearr_10387_10428[(1)] = (14));

} else {
var statearr_10388_10429 = state_10361__$1;
(statearr_10388_10429[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (9))){
var inst_10313 = (state_10361[(10)]);
var inst_10313__$1 = (state_10361[(2)]);
var inst_10314 = cljs.core.get.call(null,inst_10313__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10315 = cljs.core.get.call(null,inst_10313__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10316 = cljs.core.get.call(null,inst_10313__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10361__$1 = (function (){var statearr_10389 = state_10361;
(statearr_10389[(10)] = inst_10313__$1);

(statearr_10389[(16)] = inst_10314);

(statearr_10389[(17)] = inst_10315);

return statearr_10389;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10361__$1,(10),inst_10316);
} else {
if((state_val_10362 === (5))){
var inst_10305 = (state_10361[(7)]);
var inst_10308 = cljs.core.seq_QMARK_.call(null,inst_10305);
var state_10361__$1 = state_10361;
if(inst_10308){
var statearr_10390_10430 = state_10361__$1;
(statearr_10390_10430[(1)] = (7));

} else {
var statearr_10391_10431 = state_10361__$1;
(statearr_10391_10431[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (14))){
var inst_10321 = (state_10361[(15)]);
var inst_10328 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10321);
var state_10361__$1 = state_10361;
var statearr_10392_10432 = state_10361__$1;
(statearr_10392_10432[(2)] = inst_10328);

(statearr_10392_10432[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (26))){
var inst_10351 = (state_10361[(2)]);
var state_10361__$1 = state_10361;
var statearr_10393_10433 = state_10361__$1;
(statearr_10393_10433[(2)] = inst_10351);

(statearr_10393_10433[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (16))){
var inst_10331 = (state_10361[(2)]);
var inst_10332 = calc_state.call(null);
var inst_10305 = inst_10332;
var state_10361__$1 = (function (){var statearr_10394 = state_10361;
(statearr_10394[(18)] = inst_10331);

(statearr_10394[(7)] = inst_10305);

return statearr_10394;
})();
var statearr_10395_10434 = state_10361__$1;
(statearr_10395_10434[(2)] = null);

(statearr_10395_10434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (10))){
var inst_10321 = (state_10361[(15)]);
var inst_10320 = (state_10361[(8)]);
var inst_10319 = (state_10361[(2)]);
var inst_10320__$1 = cljs.core.nth.call(null,inst_10319,(0),null);
var inst_10321__$1 = cljs.core.nth.call(null,inst_10319,(1),null);
var inst_10322 = (inst_10320__$1 == null);
var inst_10323 = cljs.core._EQ_.call(null,inst_10321__$1,change);
var inst_10324 = (inst_10322) || (inst_10323);
var state_10361__$1 = (function (){var statearr_10396 = state_10361;
(statearr_10396[(15)] = inst_10321__$1);

(statearr_10396[(8)] = inst_10320__$1);

return statearr_10396;
})();
if(cljs.core.truth_(inst_10324)){
var statearr_10397_10435 = state_10361__$1;
(statearr_10397_10435[(1)] = (11));

} else {
var statearr_10398_10436 = state_10361__$1;
(statearr_10398_10436[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (18))){
var inst_10321 = (state_10361[(15)]);
var inst_10314 = (state_10361[(16)]);
var inst_10315 = (state_10361[(17)]);
var inst_10338 = cljs.core.empty_QMARK_.call(null,inst_10314);
var inst_10339 = inst_10315.call(null,inst_10321);
var inst_10340 = cljs.core.not.call(null,inst_10339);
var inst_10341 = (inst_10338) && (inst_10340);
var state_10361__$1 = state_10361;
var statearr_10399_10437 = state_10361__$1;
(statearr_10399_10437[(2)] = inst_10341);

(statearr_10399_10437[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10362 === (8))){
var inst_10305 = (state_10361[(7)]);
var state_10361__$1 = state_10361;
var statearr_10400_10438 = state_10361__$1;
(statearr_10400_10438[(2)] = inst_10305);

(statearr_10400_10438[(1)] = (9));


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
});})(c__6742__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6680__auto__,c__6742__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6681__auto__ = null;
var cljs$core$async$mix_$_state_machine__6681__auto____0 = (function (){
var statearr_10404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10404[(0)] = cljs$core$async$mix_$_state_machine__6681__auto__);

(statearr_10404[(1)] = (1));

return statearr_10404;
});
var cljs$core$async$mix_$_state_machine__6681__auto____1 = (function (state_10361){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_10361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e10405){if((e10405 instanceof Object)){
var ex__6684__auto__ = e10405;
var statearr_10406_10439 = state_10361;
(statearr_10406_10439[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10440 = state_10361;
state_10361 = G__10440;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6681__auto__ = function(state_10361){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6681__auto____1.call(this,state_10361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6681__auto____0;
cljs$core$async$mix_$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6681__auto____1;
return cljs$core$async$mix_$_state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6744__auto__ = (function (){var statearr_10407 = f__6743__auto__.call(null);
(statearr_10407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___10408);

return statearr_10407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj10442 = {};
return obj10442;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__10444 = arguments.length;
switch (G__10444) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__10448 = arguments.length;
switch (G__10448) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4309__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4309__auto__,mults){
return (function (p1__10446_SHARP_){
if(cljs.core.truth_(p1__10446_SHARP_.call(null,topic))){
return p1__10446_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10446_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4309__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t10449 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10449 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10450){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10450 = meta10450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10451,meta10450__$1){
var self__ = this;
var _10451__$1 = this;
return (new cljs.core.async.t10449(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10450__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t10449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10451){
var self__ = this;
var _10451__$1 = this;
return self__.meta10450;
});})(mults,ensure_mult))
;

cljs.core.async.t10449.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t10449.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t10449.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t10449.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t10449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t10449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t10449.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10450","meta10450",563145613,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t10449.cljs$lang$type = true;

cljs.core.async.t10449.cljs$lang$ctorStr = "cljs.core.async/t10449";

cljs.core.async.t10449.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10449");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t10449 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t10449(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10450){
return (new cljs.core.async.t10449(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10450));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t10449(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6742__auto___10572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___10572,mults,ensure_mult,p){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___10572,mults,ensure_mult,p){
return (function (state_10523){
var state_val_10524 = (state_10523[(1)]);
if((state_val_10524 === (7))){
var inst_10519 = (state_10523[(2)]);
var state_10523__$1 = state_10523;
var statearr_10525_10573 = state_10523__$1;
(statearr_10525_10573[(2)] = inst_10519);

(statearr_10525_10573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (20))){
var state_10523__$1 = state_10523;
var statearr_10526_10574 = state_10523__$1;
(statearr_10526_10574[(2)] = null);

(statearr_10526_10574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (1))){
var state_10523__$1 = state_10523;
var statearr_10527_10575 = state_10523__$1;
(statearr_10527_10575[(2)] = null);

(statearr_10527_10575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (24))){
var inst_10502 = (state_10523[(7)]);
var inst_10511 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10502);
var state_10523__$1 = state_10523;
var statearr_10528_10576 = state_10523__$1;
(statearr_10528_10576[(2)] = inst_10511);

(statearr_10528_10576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (4))){
var inst_10454 = (state_10523[(8)]);
var inst_10454__$1 = (state_10523[(2)]);
var inst_10455 = (inst_10454__$1 == null);
var state_10523__$1 = (function (){var statearr_10529 = state_10523;
(statearr_10529[(8)] = inst_10454__$1);

return statearr_10529;
})();
if(cljs.core.truth_(inst_10455)){
var statearr_10530_10577 = state_10523__$1;
(statearr_10530_10577[(1)] = (5));

} else {
var statearr_10531_10578 = state_10523__$1;
(statearr_10531_10578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (15))){
var inst_10496 = (state_10523[(2)]);
var state_10523__$1 = state_10523;
var statearr_10532_10579 = state_10523__$1;
(statearr_10532_10579[(2)] = inst_10496);

(statearr_10532_10579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (21))){
var inst_10516 = (state_10523[(2)]);
var state_10523__$1 = (function (){var statearr_10533 = state_10523;
(statearr_10533[(9)] = inst_10516);

return statearr_10533;
})();
var statearr_10534_10580 = state_10523__$1;
(statearr_10534_10580[(2)] = null);

(statearr_10534_10580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (13))){
var inst_10478 = (state_10523[(10)]);
var inst_10480 = cljs.core.chunked_seq_QMARK_.call(null,inst_10478);
var state_10523__$1 = state_10523;
if(inst_10480){
var statearr_10535_10581 = state_10523__$1;
(statearr_10535_10581[(1)] = (16));

} else {
var statearr_10536_10582 = state_10523__$1;
(statearr_10536_10582[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (22))){
var inst_10508 = (state_10523[(2)]);
var state_10523__$1 = state_10523;
if(cljs.core.truth_(inst_10508)){
var statearr_10537_10583 = state_10523__$1;
(statearr_10537_10583[(1)] = (23));

} else {
var statearr_10538_10584 = state_10523__$1;
(statearr_10538_10584[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (6))){
var inst_10454 = (state_10523[(8)]);
var inst_10504 = (state_10523[(11)]);
var inst_10502 = (state_10523[(7)]);
var inst_10502__$1 = topic_fn.call(null,inst_10454);
var inst_10503 = cljs.core.deref.call(null,mults);
var inst_10504__$1 = cljs.core.get.call(null,inst_10503,inst_10502__$1);
var state_10523__$1 = (function (){var statearr_10539 = state_10523;
(statearr_10539[(11)] = inst_10504__$1);

(statearr_10539[(7)] = inst_10502__$1);

return statearr_10539;
})();
if(cljs.core.truth_(inst_10504__$1)){
var statearr_10540_10585 = state_10523__$1;
(statearr_10540_10585[(1)] = (19));

} else {
var statearr_10541_10586 = state_10523__$1;
(statearr_10541_10586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (25))){
var inst_10513 = (state_10523[(2)]);
var state_10523__$1 = state_10523;
var statearr_10542_10587 = state_10523__$1;
(statearr_10542_10587[(2)] = inst_10513);

(statearr_10542_10587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (17))){
var inst_10478 = (state_10523[(10)]);
var inst_10487 = cljs.core.first.call(null,inst_10478);
var inst_10488 = cljs.core.async.muxch_STAR_.call(null,inst_10487);
var inst_10489 = cljs.core.async.close_BANG_.call(null,inst_10488);
var inst_10490 = cljs.core.next.call(null,inst_10478);
var inst_10464 = inst_10490;
var inst_10465 = null;
var inst_10466 = (0);
var inst_10467 = (0);
var state_10523__$1 = (function (){var statearr_10543 = state_10523;
(statearr_10543[(12)] = inst_10464);

(statearr_10543[(13)] = inst_10466);

(statearr_10543[(14)] = inst_10489);

(statearr_10543[(15)] = inst_10465);

(statearr_10543[(16)] = inst_10467);

return statearr_10543;
})();
var statearr_10544_10588 = state_10523__$1;
(statearr_10544_10588[(2)] = null);

(statearr_10544_10588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (3))){
var inst_10521 = (state_10523[(2)]);
var state_10523__$1 = state_10523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10523__$1,inst_10521);
} else {
if((state_val_10524 === (12))){
var inst_10498 = (state_10523[(2)]);
var state_10523__$1 = state_10523;
var statearr_10545_10589 = state_10523__$1;
(statearr_10545_10589[(2)] = inst_10498);

(statearr_10545_10589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (2))){
var state_10523__$1 = state_10523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10523__$1,(4),ch);
} else {
if((state_val_10524 === (23))){
var state_10523__$1 = state_10523;
var statearr_10546_10590 = state_10523__$1;
(statearr_10546_10590[(2)] = null);

(statearr_10546_10590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (19))){
var inst_10454 = (state_10523[(8)]);
var inst_10504 = (state_10523[(11)]);
var inst_10506 = cljs.core.async.muxch_STAR_.call(null,inst_10504);
var state_10523__$1 = state_10523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10523__$1,(22),inst_10506,inst_10454);
} else {
if((state_val_10524 === (11))){
var inst_10464 = (state_10523[(12)]);
var inst_10478 = (state_10523[(10)]);
var inst_10478__$1 = cljs.core.seq.call(null,inst_10464);
var state_10523__$1 = (function (){var statearr_10547 = state_10523;
(statearr_10547[(10)] = inst_10478__$1);

return statearr_10547;
})();
if(inst_10478__$1){
var statearr_10548_10591 = state_10523__$1;
(statearr_10548_10591[(1)] = (13));

} else {
var statearr_10549_10592 = state_10523__$1;
(statearr_10549_10592[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (9))){
var inst_10500 = (state_10523[(2)]);
var state_10523__$1 = state_10523;
var statearr_10550_10593 = state_10523__$1;
(statearr_10550_10593[(2)] = inst_10500);

(statearr_10550_10593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (5))){
var inst_10461 = cljs.core.deref.call(null,mults);
var inst_10462 = cljs.core.vals.call(null,inst_10461);
var inst_10463 = cljs.core.seq.call(null,inst_10462);
var inst_10464 = inst_10463;
var inst_10465 = null;
var inst_10466 = (0);
var inst_10467 = (0);
var state_10523__$1 = (function (){var statearr_10551 = state_10523;
(statearr_10551[(12)] = inst_10464);

(statearr_10551[(13)] = inst_10466);

(statearr_10551[(15)] = inst_10465);

(statearr_10551[(16)] = inst_10467);

return statearr_10551;
})();
var statearr_10552_10594 = state_10523__$1;
(statearr_10552_10594[(2)] = null);

(statearr_10552_10594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (14))){
var state_10523__$1 = state_10523;
var statearr_10556_10595 = state_10523__$1;
(statearr_10556_10595[(2)] = null);

(statearr_10556_10595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (16))){
var inst_10478 = (state_10523[(10)]);
var inst_10482 = cljs.core.chunk_first.call(null,inst_10478);
var inst_10483 = cljs.core.chunk_rest.call(null,inst_10478);
var inst_10484 = cljs.core.count.call(null,inst_10482);
var inst_10464 = inst_10483;
var inst_10465 = inst_10482;
var inst_10466 = inst_10484;
var inst_10467 = (0);
var state_10523__$1 = (function (){var statearr_10557 = state_10523;
(statearr_10557[(12)] = inst_10464);

(statearr_10557[(13)] = inst_10466);

(statearr_10557[(15)] = inst_10465);

(statearr_10557[(16)] = inst_10467);

return statearr_10557;
})();
var statearr_10558_10596 = state_10523__$1;
(statearr_10558_10596[(2)] = null);

(statearr_10558_10596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (10))){
var inst_10464 = (state_10523[(12)]);
var inst_10466 = (state_10523[(13)]);
var inst_10465 = (state_10523[(15)]);
var inst_10467 = (state_10523[(16)]);
var inst_10472 = cljs.core._nth.call(null,inst_10465,inst_10467);
var inst_10473 = cljs.core.async.muxch_STAR_.call(null,inst_10472);
var inst_10474 = cljs.core.async.close_BANG_.call(null,inst_10473);
var inst_10475 = (inst_10467 + (1));
var tmp10553 = inst_10464;
var tmp10554 = inst_10466;
var tmp10555 = inst_10465;
var inst_10464__$1 = tmp10553;
var inst_10465__$1 = tmp10555;
var inst_10466__$1 = tmp10554;
var inst_10467__$1 = inst_10475;
var state_10523__$1 = (function (){var statearr_10559 = state_10523;
(statearr_10559[(12)] = inst_10464__$1);

(statearr_10559[(13)] = inst_10466__$1);

(statearr_10559[(17)] = inst_10474);

(statearr_10559[(15)] = inst_10465__$1);

(statearr_10559[(16)] = inst_10467__$1);

return statearr_10559;
})();
var statearr_10560_10597 = state_10523__$1;
(statearr_10560_10597[(2)] = null);

(statearr_10560_10597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (18))){
var inst_10493 = (state_10523[(2)]);
var state_10523__$1 = state_10523;
var statearr_10561_10598 = state_10523__$1;
(statearr_10561_10598[(2)] = inst_10493);

(statearr_10561_10598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (8))){
var inst_10466 = (state_10523[(13)]);
var inst_10467 = (state_10523[(16)]);
var inst_10469 = (inst_10467 < inst_10466);
var inst_10470 = inst_10469;
var state_10523__$1 = state_10523;
if(cljs.core.truth_(inst_10470)){
var statearr_10562_10599 = state_10523__$1;
(statearr_10562_10599[(1)] = (10));

} else {
var statearr_10563_10600 = state_10523__$1;
(statearr_10563_10600[(1)] = (11));

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
});})(c__6742__auto___10572,mults,ensure_mult,p))
;
return ((function (switch__6680__auto__,c__6742__auto___10572,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6681__auto__ = null;
var cljs$core$async$state_machine__6681__auto____0 = (function (){
var statearr_10567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10567[(0)] = cljs$core$async$state_machine__6681__auto__);

(statearr_10567[(1)] = (1));

return statearr_10567;
});
var cljs$core$async$state_machine__6681__auto____1 = (function (state_10523){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_10523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e10568){if((e10568 instanceof Object)){
var ex__6684__auto__ = e10568;
var statearr_10569_10601 = state_10523;
(statearr_10569_10601[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10602 = state_10523;
state_10523 = G__10602;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$state_machine__6681__auto__ = function(state_10523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6681__auto____1.call(this,state_10523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6681__auto____0;
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6681__auto____1;
return cljs$core$async$state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___10572,mults,ensure_mult,p))
})();
var state__6744__auto__ = (function (){var statearr_10570 = f__6743__auto__.call(null);
(statearr_10570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___10572);

return statearr_10570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___10572,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__10604 = arguments.length;
switch (G__10604) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__10607 = arguments.length;
switch (G__10607) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__10610 = arguments.length;
switch (G__10610) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6742__auto___10680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___10680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___10680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10649){
var state_val_10650 = (state_10649[(1)]);
if((state_val_10650 === (7))){
var state_10649__$1 = state_10649;
var statearr_10651_10681 = state_10649__$1;
(statearr_10651_10681[(2)] = null);

(statearr_10651_10681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (1))){
var state_10649__$1 = state_10649;
var statearr_10652_10682 = state_10649__$1;
(statearr_10652_10682[(2)] = null);

(statearr_10652_10682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (4))){
var inst_10613 = (state_10649[(7)]);
var inst_10615 = (inst_10613 < cnt);
var state_10649__$1 = state_10649;
if(cljs.core.truth_(inst_10615)){
var statearr_10653_10683 = state_10649__$1;
(statearr_10653_10683[(1)] = (6));

} else {
var statearr_10654_10684 = state_10649__$1;
(statearr_10654_10684[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (15))){
var inst_10645 = (state_10649[(2)]);
var state_10649__$1 = state_10649;
var statearr_10655_10685 = state_10649__$1;
(statearr_10655_10685[(2)] = inst_10645);

(statearr_10655_10685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (13))){
var inst_10638 = cljs.core.async.close_BANG_.call(null,out);
var state_10649__$1 = state_10649;
var statearr_10656_10686 = state_10649__$1;
(statearr_10656_10686[(2)] = inst_10638);

(statearr_10656_10686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (6))){
var state_10649__$1 = state_10649;
var statearr_10657_10687 = state_10649__$1;
(statearr_10657_10687[(2)] = null);

(statearr_10657_10687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (3))){
var inst_10647 = (state_10649[(2)]);
var state_10649__$1 = state_10649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10649__$1,inst_10647);
} else {
if((state_val_10650 === (12))){
var inst_10635 = (state_10649[(8)]);
var inst_10635__$1 = (state_10649[(2)]);
var inst_10636 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10635__$1);
var state_10649__$1 = (function (){var statearr_10658 = state_10649;
(statearr_10658[(8)] = inst_10635__$1);

return statearr_10658;
})();
if(cljs.core.truth_(inst_10636)){
var statearr_10659_10688 = state_10649__$1;
(statearr_10659_10688[(1)] = (13));

} else {
var statearr_10660_10689 = state_10649__$1;
(statearr_10660_10689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (2))){
var inst_10612 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10613 = (0);
var state_10649__$1 = (function (){var statearr_10661 = state_10649;
(statearr_10661[(9)] = inst_10612);

(statearr_10661[(7)] = inst_10613);

return statearr_10661;
})();
var statearr_10662_10690 = state_10649__$1;
(statearr_10662_10690[(2)] = null);

(statearr_10662_10690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (11))){
var inst_10613 = (state_10649[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10649,(10),Object,null,(9));
var inst_10622 = chs__$1.call(null,inst_10613);
var inst_10623 = done.call(null,inst_10613);
var inst_10624 = cljs.core.async.take_BANG_.call(null,inst_10622,inst_10623);
var state_10649__$1 = state_10649;
var statearr_10663_10691 = state_10649__$1;
(statearr_10663_10691[(2)] = inst_10624);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10649__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (9))){
var inst_10613 = (state_10649[(7)]);
var inst_10626 = (state_10649[(2)]);
var inst_10627 = (inst_10613 + (1));
var inst_10613__$1 = inst_10627;
var state_10649__$1 = (function (){var statearr_10664 = state_10649;
(statearr_10664[(7)] = inst_10613__$1);

(statearr_10664[(10)] = inst_10626);

return statearr_10664;
})();
var statearr_10665_10692 = state_10649__$1;
(statearr_10665_10692[(2)] = null);

(statearr_10665_10692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (5))){
var inst_10633 = (state_10649[(2)]);
var state_10649__$1 = (function (){var statearr_10666 = state_10649;
(statearr_10666[(11)] = inst_10633);

return statearr_10666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10649__$1,(12),dchan);
} else {
if((state_val_10650 === (14))){
var inst_10635 = (state_10649[(8)]);
var inst_10640 = cljs.core.apply.call(null,f,inst_10635);
var state_10649__$1 = state_10649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10649__$1,(16),out,inst_10640);
} else {
if((state_val_10650 === (16))){
var inst_10642 = (state_10649[(2)]);
var state_10649__$1 = (function (){var statearr_10667 = state_10649;
(statearr_10667[(12)] = inst_10642);

return statearr_10667;
})();
var statearr_10668_10693 = state_10649__$1;
(statearr_10668_10693[(2)] = null);

(statearr_10668_10693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (10))){
var inst_10617 = (state_10649[(2)]);
var inst_10618 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10649__$1 = (function (){var statearr_10669 = state_10649;
(statearr_10669[(13)] = inst_10617);

return statearr_10669;
})();
var statearr_10670_10694 = state_10649__$1;
(statearr_10670_10694[(2)] = inst_10618);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10649__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10650 === (8))){
var inst_10631 = (state_10649[(2)]);
var state_10649__$1 = state_10649;
var statearr_10671_10695 = state_10649__$1;
(statearr_10671_10695[(2)] = inst_10631);

(statearr_10671_10695[(1)] = (5));


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
});})(c__6742__auto___10680,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6680__auto__,c__6742__auto___10680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6681__auto__ = null;
var cljs$core$async$state_machine__6681__auto____0 = (function (){
var statearr_10675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10675[(0)] = cljs$core$async$state_machine__6681__auto__);

(statearr_10675[(1)] = (1));

return statearr_10675;
});
var cljs$core$async$state_machine__6681__auto____1 = (function (state_10649){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_10649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e10676){if((e10676 instanceof Object)){
var ex__6684__auto__ = e10676;
var statearr_10677_10696 = state_10649;
(statearr_10677_10696[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10697 = state_10649;
state_10649 = G__10697;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$state_machine__6681__auto__ = function(state_10649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6681__auto____1.call(this,state_10649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6681__auto____0;
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6681__auto____1;
return cljs$core$async$state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___10680,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6744__auto__ = (function (){var statearr_10678 = f__6743__auto__.call(null);
(statearr_10678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___10680);

return statearr_10678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___10680,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__10700 = arguments.length;
switch (G__10700) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6742__auto___10755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___10755,out){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___10755,out){
return (function (state_10730){
var state_val_10731 = (state_10730[(1)]);
if((state_val_10731 === (7))){
var inst_10710 = (state_10730[(7)]);
var inst_10709 = (state_10730[(8)]);
var inst_10709__$1 = (state_10730[(2)]);
var inst_10710__$1 = cljs.core.nth.call(null,inst_10709__$1,(0),null);
var inst_10711 = cljs.core.nth.call(null,inst_10709__$1,(1),null);
var inst_10712 = (inst_10710__$1 == null);
var state_10730__$1 = (function (){var statearr_10732 = state_10730;
(statearr_10732[(7)] = inst_10710__$1);

(statearr_10732[(9)] = inst_10711);

(statearr_10732[(8)] = inst_10709__$1);

return statearr_10732;
})();
if(cljs.core.truth_(inst_10712)){
var statearr_10733_10756 = state_10730__$1;
(statearr_10733_10756[(1)] = (8));

} else {
var statearr_10734_10757 = state_10730__$1;
(statearr_10734_10757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (1))){
var inst_10701 = cljs.core.vec.call(null,chs);
var inst_10702 = inst_10701;
var state_10730__$1 = (function (){var statearr_10735 = state_10730;
(statearr_10735[(10)] = inst_10702);

return statearr_10735;
})();
var statearr_10736_10758 = state_10730__$1;
(statearr_10736_10758[(2)] = null);

(statearr_10736_10758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (4))){
var inst_10702 = (state_10730[(10)]);
var state_10730__$1 = state_10730;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10730__$1,(7),inst_10702);
} else {
if((state_val_10731 === (6))){
var inst_10726 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
var statearr_10737_10759 = state_10730__$1;
(statearr_10737_10759[(2)] = inst_10726);

(statearr_10737_10759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (3))){
var inst_10728 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10730__$1,inst_10728);
} else {
if((state_val_10731 === (2))){
var inst_10702 = (state_10730[(10)]);
var inst_10704 = cljs.core.count.call(null,inst_10702);
var inst_10705 = (inst_10704 > (0));
var state_10730__$1 = state_10730;
if(cljs.core.truth_(inst_10705)){
var statearr_10739_10760 = state_10730__$1;
(statearr_10739_10760[(1)] = (4));

} else {
var statearr_10740_10761 = state_10730__$1;
(statearr_10740_10761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (11))){
var inst_10702 = (state_10730[(10)]);
var inst_10719 = (state_10730[(2)]);
var tmp10738 = inst_10702;
var inst_10702__$1 = tmp10738;
var state_10730__$1 = (function (){var statearr_10741 = state_10730;
(statearr_10741[(11)] = inst_10719);

(statearr_10741[(10)] = inst_10702__$1);

return statearr_10741;
})();
var statearr_10742_10762 = state_10730__$1;
(statearr_10742_10762[(2)] = null);

(statearr_10742_10762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (9))){
var inst_10710 = (state_10730[(7)]);
var state_10730__$1 = state_10730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10730__$1,(11),out,inst_10710);
} else {
if((state_val_10731 === (5))){
var inst_10724 = cljs.core.async.close_BANG_.call(null,out);
var state_10730__$1 = state_10730;
var statearr_10743_10763 = state_10730__$1;
(statearr_10743_10763[(2)] = inst_10724);

(statearr_10743_10763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (10))){
var inst_10722 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
var statearr_10744_10764 = state_10730__$1;
(statearr_10744_10764[(2)] = inst_10722);

(statearr_10744_10764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (8))){
var inst_10710 = (state_10730[(7)]);
var inst_10711 = (state_10730[(9)]);
var inst_10709 = (state_10730[(8)]);
var inst_10702 = (state_10730[(10)]);
var inst_10714 = (function (){var cs = inst_10702;
var vec__10707 = inst_10709;
var v = inst_10710;
var c = inst_10711;
return ((function (cs,vec__10707,v,c,inst_10710,inst_10711,inst_10709,inst_10702,state_val_10731,c__6742__auto___10755,out){
return (function (p1__10698_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10698_SHARP_);
});
;})(cs,vec__10707,v,c,inst_10710,inst_10711,inst_10709,inst_10702,state_val_10731,c__6742__auto___10755,out))
})();
var inst_10715 = cljs.core.filterv.call(null,inst_10714,inst_10702);
var inst_10702__$1 = inst_10715;
var state_10730__$1 = (function (){var statearr_10745 = state_10730;
(statearr_10745[(10)] = inst_10702__$1);

return statearr_10745;
})();
var statearr_10746_10765 = state_10730__$1;
(statearr_10746_10765[(2)] = null);

(statearr_10746_10765[(1)] = (2));


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
});})(c__6742__auto___10755,out))
;
return ((function (switch__6680__auto__,c__6742__auto___10755,out){
return (function() {
var cljs$core$async$state_machine__6681__auto__ = null;
var cljs$core$async$state_machine__6681__auto____0 = (function (){
var statearr_10750 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10750[(0)] = cljs$core$async$state_machine__6681__auto__);

(statearr_10750[(1)] = (1));

return statearr_10750;
});
var cljs$core$async$state_machine__6681__auto____1 = (function (state_10730){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_10730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e10751){if((e10751 instanceof Object)){
var ex__6684__auto__ = e10751;
var statearr_10752_10766 = state_10730;
(statearr_10752_10766[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10767 = state_10730;
state_10730 = G__10767;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$state_machine__6681__auto__ = function(state_10730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6681__auto____1.call(this,state_10730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6681__auto____0;
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6681__auto____1;
return cljs$core$async$state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___10755,out))
})();
var state__6744__auto__ = (function (){var statearr_10753 = f__6743__auto__.call(null);
(statearr_10753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___10755);

return statearr_10753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___10755,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__10769 = arguments.length;
switch (G__10769) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6742__auto___10817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___10817,out){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___10817,out){
return (function (state_10793){
var state_val_10794 = (state_10793[(1)]);
if((state_val_10794 === (7))){
var inst_10775 = (state_10793[(7)]);
var inst_10775__$1 = (state_10793[(2)]);
var inst_10776 = (inst_10775__$1 == null);
var inst_10777 = cljs.core.not.call(null,inst_10776);
var state_10793__$1 = (function (){var statearr_10795 = state_10793;
(statearr_10795[(7)] = inst_10775__$1);

return statearr_10795;
})();
if(inst_10777){
var statearr_10796_10818 = state_10793__$1;
(statearr_10796_10818[(1)] = (8));

} else {
var statearr_10797_10819 = state_10793__$1;
(statearr_10797_10819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (1))){
var inst_10770 = (0);
var state_10793__$1 = (function (){var statearr_10798 = state_10793;
(statearr_10798[(8)] = inst_10770);

return statearr_10798;
})();
var statearr_10799_10820 = state_10793__$1;
(statearr_10799_10820[(2)] = null);

(statearr_10799_10820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (4))){
var state_10793__$1 = state_10793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10793__$1,(7),ch);
} else {
if((state_val_10794 === (6))){
var inst_10788 = (state_10793[(2)]);
var state_10793__$1 = state_10793;
var statearr_10800_10821 = state_10793__$1;
(statearr_10800_10821[(2)] = inst_10788);

(statearr_10800_10821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (3))){
var inst_10790 = (state_10793[(2)]);
var inst_10791 = cljs.core.async.close_BANG_.call(null,out);
var state_10793__$1 = (function (){var statearr_10801 = state_10793;
(statearr_10801[(9)] = inst_10790);

return statearr_10801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10793__$1,inst_10791);
} else {
if((state_val_10794 === (2))){
var inst_10770 = (state_10793[(8)]);
var inst_10772 = (inst_10770 < n);
var state_10793__$1 = state_10793;
if(cljs.core.truth_(inst_10772)){
var statearr_10802_10822 = state_10793__$1;
(statearr_10802_10822[(1)] = (4));

} else {
var statearr_10803_10823 = state_10793__$1;
(statearr_10803_10823[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (11))){
var inst_10770 = (state_10793[(8)]);
var inst_10780 = (state_10793[(2)]);
var inst_10781 = (inst_10770 + (1));
var inst_10770__$1 = inst_10781;
var state_10793__$1 = (function (){var statearr_10804 = state_10793;
(statearr_10804[(10)] = inst_10780);

(statearr_10804[(8)] = inst_10770__$1);

return statearr_10804;
})();
var statearr_10805_10824 = state_10793__$1;
(statearr_10805_10824[(2)] = null);

(statearr_10805_10824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (9))){
var state_10793__$1 = state_10793;
var statearr_10806_10825 = state_10793__$1;
(statearr_10806_10825[(2)] = null);

(statearr_10806_10825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (5))){
var state_10793__$1 = state_10793;
var statearr_10807_10826 = state_10793__$1;
(statearr_10807_10826[(2)] = null);

(statearr_10807_10826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (10))){
var inst_10785 = (state_10793[(2)]);
var state_10793__$1 = state_10793;
var statearr_10808_10827 = state_10793__$1;
(statearr_10808_10827[(2)] = inst_10785);

(statearr_10808_10827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10794 === (8))){
var inst_10775 = (state_10793[(7)]);
var state_10793__$1 = state_10793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10793__$1,(11),out,inst_10775);
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
});})(c__6742__auto___10817,out))
;
return ((function (switch__6680__auto__,c__6742__auto___10817,out){
return (function() {
var cljs$core$async$state_machine__6681__auto__ = null;
var cljs$core$async$state_machine__6681__auto____0 = (function (){
var statearr_10812 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10812[(0)] = cljs$core$async$state_machine__6681__auto__);

(statearr_10812[(1)] = (1));

return statearr_10812;
});
var cljs$core$async$state_machine__6681__auto____1 = (function (state_10793){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_10793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e10813){if((e10813 instanceof Object)){
var ex__6684__auto__ = e10813;
var statearr_10814_10828 = state_10793;
(statearr_10814_10828[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10829 = state_10793;
state_10793 = G__10829;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$state_machine__6681__auto__ = function(state_10793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6681__auto____1.call(this,state_10793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6681__auto____0;
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6681__auto____1;
return cljs$core$async$state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___10817,out))
})();
var state__6744__auto__ = (function (){var statearr_10815 = f__6743__auto__.call(null);
(statearr_10815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___10817);

return statearr_10815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___10817,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t10837 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10837 = (function (map_LT_,f,ch,meta10838){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10838 = meta10838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10839,meta10838__$1){
var self__ = this;
var _10839__$1 = this;
return (new cljs.core.async.t10837(self__.map_LT_,self__.f,self__.ch,meta10838__$1));
});

cljs.core.async.t10837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10839){
var self__ = this;
var _10839__$1 = this;
return self__.meta10838;
});

cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t10840 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10840 = (function (map_LT_,f,ch,meta10838,_,fn1,meta10841){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10838 = meta10838;
this._ = _;
this.fn1 = fn1;
this.meta10841 = meta10841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10842,meta10841__$1){
var self__ = this;
var _10842__$1 = this;
return (new cljs.core.async.t10840(self__.map_LT_,self__.f,self__.ch,self__.meta10838,self__._,self__.fn1,meta10841__$1));
});})(___$1))
;

cljs.core.async.t10840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10842){
var self__ = this;
var _10842__$1 = this;
return self__.meta10841;
});})(___$1))
;

cljs.core.async.t10840.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10840.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t10840.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10830_SHARP_){
return f1.call(null,(((p1__10830_SHARP_ == null))?null:self__.f.call(null,p1__10830_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t10840.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10838","meta10838",-2101810903,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10841","meta10841",2087027736,null)], null);
});})(___$1))
;

cljs.core.async.t10840.cljs$lang$type = true;

cljs.core.async.t10840.cljs$lang$ctorStr = "cljs.core.async/t10840";

cljs.core.async.t10840.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10840");
});})(___$1))
;

cljs.core.async.__GT_t10840 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t10840(map_LT___$1,f__$1,ch__$1,meta10838__$1,___$2,fn1__$1,meta10841){
return (new cljs.core.async.t10840(map_LT___$1,f__$1,ch__$1,meta10838__$1,___$2,fn1__$1,meta10841));
});})(___$1))
;

}

return (new cljs.core.async.t10840(self__.map_LT_,self__.f,self__.ch,self__.meta10838,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4297__auto__ = ret;
if(cljs.core.truth_(and__4297__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4297__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10837.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t10837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10838","meta10838",-2101810903,null)], null);
});

cljs.core.async.t10837.cljs$lang$type = true;

cljs.core.async.t10837.cljs$lang$ctorStr = "cljs.core.async/t10837";

cljs.core.async.t10837.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10837");
});

cljs.core.async.__GT_t10837 = (function cljs$core$async$map_LT__$___GT_t10837(map_LT___$1,f__$1,ch__$1,meta10838){
return (new cljs.core.async.t10837(map_LT___$1,f__$1,ch__$1,meta10838));
});

}

return (new cljs.core.async.t10837(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t10846 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10846 = (function (map_GT_,f,ch,meta10847){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10847 = meta10847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10848,meta10847__$1){
var self__ = this;
var _10848__$1 = this;
return (new cljs.core.async.t10846(self__.map_GT_,self__.f,self__.ch,meta10847__$1));
});

cljs.core.async.t10846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10848){
var self__ = this;
var _10848__$1 = this;
return self__.meta10847;
});

cljs.core.async.t10846.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10846.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t10846.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t10846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10847","meta10847",1543735963,null)], null);
});

cljs.core.async.t10846.cljs$lang$type = true;

cljs.core.async.t10846.cljs$lang$ctorStr = "cljs.core.async/t10846";

cljs.core.async.t10846.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10846");
});

cljs.core.async.__GT_t10846 = (function cljs$core$async$map_GT__$___GT_t10846(map_GT___$1,f__$1,ch__$1,meta10847){
return (new cljs.core.async.t10846(map_GT___$1,f__$1,ch__$1,meta10847));
});

}

return (new cljs.core.async.t10846(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t10852 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10852 = (function (filter_GT_,p,ch,meta10853){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10853 = meta10853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10854,meta10853__$1){
var self__ = this;
var _10854__$1 = this;
return (new cljs.core.async.t10852(self__.filter_GT_,self__.p,self__.ch,meta10853__$1));
});

cljs.core.async.t10852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10854){
var self__ = this;
var _10854__$1 = this;
return self__.meta10853;
});

cljs.core.async.t10852.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10852.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t10852.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t10852.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t10852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10853","meta10853",2071847202,null)], null);
});

cljs.core.async.t10852.cljs$lang$type = true;

cljs.core.async.t10852.cljs$lang$ctorStr = "cljs.core.async/t10852";

cljs.core.async.t10852.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t10852");
});

cljs.core.async.__GT_t10852 = (function cljs$core$async$filter_GT__$___GT_t10852(filter_GT___$1,p__$1,ch__$1,meta10853){
return (new cljs.core.async.t10852(filter_GT___$1,p__$1,ch__$1,meta10853));
});

}

return (new cljs.core.async.t10852(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__10856 = arguments.length;
switch (G__10856) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6742__auto___10899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___10899,out){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___10899,out){
return (function (state_10877){
var state_val_10878 = (state_10877[(1)]);
if((state_val_10878 === (7))){
var inst_10873 = (state_10877[(2)]);
var state_10877__$1 = state_10877;
var statearr_10879_10900 = state_10877__$1;
(statearr_10879_10900[(2)] = inst_10873);

(statearr_10879_10900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (1))){
var state_10877__$1 = state_10877;
var statearr_10880_10901 = state_10877__$1;
(statearr_10880_10901[(2)] = null);

(statearr_10880_10901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (4))){
var inst_10859 = (state_10877[(7)]);
var inst_10859__$1 = (state_10877[(2)]);
var inst_10860 = (inst_10859__$1 == null);
var state_10877__$1 = (function (){var statearr_10881 = state_10877;
(statearr_10881[(7)] = inst_10859__$1);

return statearr_10881;
})();
if(cljs.core.truth_(inst_10860)){
var statearr_10882_10902 = state_10877__$1;
(statearr_10882_10902[(1)] = (5));

} else {
var statearr_10883_10903 = state_10877__$1;
(statearr_10883_10903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (6))){
var inst_10859 = (state_10877[(7)]);
var inst_10864 = p.call(null,inst_10859);
var state_10877__$1 = state_10877;
if(cljs.core.truth_(inst_10864)){
var statearr_10884_10904 = state_10877__$1;
(statearr_10884_10904[(1)] = (8));

} else {
var statearr_10885_10905 = state_10877__$1;
(statearr_10885_10905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (3))){
var inst_10875 = (state_10877[(2)]);
var state_10877__$1 = state_10877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10877__$1,inst_10875);
} else {
if((state_val_10878 === (2))){
var state_10877__$1 = state_10877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10877__$1,(4),ch);
} else {
if((state_val_10878 === (11))){
var inst_10867 = (state_10877[(2)]);
var state_10877__$1 = state_10877;
var statearr_10886_10906 = state_10877__$1;
(statearr_10886_10906[(2)] = inst_10867);

(statearr_10886_10906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (9))){
var state_10877__$1 = state_10877;
var statearr_10887_10907 = state_10877__$1;
(statearr_10887_10907[(2)] = null);

(statearr_10887_10907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (5))){
var inst_10862 = cljs.core.async.close_BANG_.call(null,out);
var state_10877__$1 = state_10877;
var statearr_10888_10908 = state_10877__$1;
(statearr_10888_10908[(2)] = inst_10862);

(statearr_10888_10908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (10))){
var inst_10870 = (state_10877[(2)]);
var state_10877__$1 = (function (){var statearr_10889 = state_10877;
(statearr_10889[(8)] = inst_10870);

return statearr_10889;
})();
var statearr_10890_10909 = state_10877__$1;
(statearr_10890_10909[(2)] = null);

(statearr_10890_10909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10878 === (8))){
var inst_10859 = (state_10877[(7)]);
var state_10877__$1 = state_10877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10877__$1,(11),out,inst_10859);
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
});})(c__6742__auto___10899,out))
;
return ((function (switch__6680__auto__,c__6742__auto___10899,out){
return (function() {
var cljs$core$async$state_machine__6681__auto__ = null;
var cljs$core$async$state_machine__6681__auto____0 = (function (){
var statearr_10894 = [null,null,null,null,null,null,null,null,null];
(statearr_10894[(0)] = cljs$core$async$state_machine__6681__auto__);

(statearr_10894[(1)] = (1));

return statearr_10894;
});
var cljs$core$async$state_machine__6681__auto____1 = (function (state_10877){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_10877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e10895){if((e10895 instanceof Object)){
var ex__6684__auto__ = e10895;
var statearr_10896_10910 = state_10877;
(statearr_10896_10910[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10911 = state_10877;
state_10877 = G__10911;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$state_machine__6681__auto__ = function(state_10877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6681__auto____1.call(this,state_10877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6681__auto____0;
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6681__auto____1;
return cljs$core$async$state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___10899,out))
})();
var state__6744__auto__ = (function (){var statearr_10897 = f__6743__auto__.call(null);
(statearr_10897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___10899);

return statearr_10897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___10899,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__10913 = arguments.length;
switch (G__10913) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6742__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto__){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto__){
return (function (state_11080){
var state_val_11081 = (state_11080[(1)]);
if((state_val_11081 === (7))){
var inst_11076 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
var statearr_11082_11123 = state_11080__$1;
(statearr_11082_11123[(2)] = inst_11076);

(statearr_11082_11123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (20))){
var inst_11046 = (state_11080[(7)]);
var inst_11057 = (state_11080[(2)]);
var inst_11058 = cljs.core.next.call(null,inst_11046);
var inst_11032 = inst_11058;
var inst_11033 = null;
var inst_11034 = (0);
var inst_11035 = (0);
var state_11080__$1 = (function (){var statearr_11083 = state_11080;
(statearr_11083[(8)] = inst_11032);

(statearr_11083[(9)] = inst_11057);

(statearr_11083[(10)] = inst_11034);

(statearr_11083[(11)] = inst_11033);

(statearr_11083[(12)] = inst_11035);

return statearr_11083;
})();
var statearr_11084_11124 = state_11080__$1;
(statearr_11084_11124[(2)] = null);

(statearr_11084_11124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (1))){
var state_11080__$1 = state_11080;
var statearr_11085_11125 = state_11080__$1;
(statearr_11085_11125[(2)] = null);

(statearr_11085_11125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (4))){
var inst_11021 = (state_11080[(13)]);
var inst_11021__$1 = (state_11080[(2)]);
var inst_11022 = (inst_11021__$1 == null);
var state_11080__$1 = (function (){var statearr_11086 = state_11080;
(statearr_11086[(13)] = inst_11021__$1);

return statearr_11086;
})();
if(cljs.core.truth_(inst_11022)){
var statearr_11087_11126 = state_11080__$1;
(statearr_11087_11126[(1)] = (5));

} else {
var statearr_11088_11127 = state_11080__$1;
(statearr_11088_11127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (15))){
var state_11080__$1 = state_11080;
var statearr_11092_11128 = state_11080__$1;
(statearr_11092_11128[(2)] = null);

(statearr_11092_11128[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (21))){
var state_11080__$1 = state_11080;
var statearr_11093_11129 = state_11080__$1;
(statearr_11093_11129[(2)] = null);

(statearr_11093_11129[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (13))){
var inst_11032 = (state_11080[(8)]);
var inst_11034 = (state_11080[(10)]);
var inst_11033 = (state_11080[(11)]);
var inst_11035 = (state_11080[(12)]);
var inst_11042 = (state_11080[(2)]);
var inst_11043 = (inst_11035 + (1));
var tmp11089 = inst_11032;
var tmp11090 = inst_11034;
var tmp11091 = inst_11033;
var inst_11032__$1 = tmp11089;
var inst_11033__$1 = tmp11091;
var inst_11034__$1 = tmp11090;
var inst_11035__$1 = inst_11043;
var state_11080__$1 = (function (){var statearr_11094 = state_11080;
(statearr_11094[(8)] = inst_11032__$1);

(statearr_11094[(10)] = inst_11034__$1);

(statearr_11094[(11)] = inst_11033__$1);

(statearr_11094[(12)] = inst_11035__$1);

(statearr_11094[(14)] = inst_11042);

return statearr_11094;
})();
var statearr_11095_11130 = state_11080__$1;
(statearr_11095_11130[(2)] = null);

(statearr_11095_11130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (22))){
var state_11080__$1 = state_11080;
var statearr_11096_11131 = state_11080__$1;
(statearr_11096_11131[(2)] = null);

(statearr_11096_11131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (6))){
var inst_11021 = (state_11080[(13)]);
var inst_11030 = f.call(null,inst_11021);
var inst_11031 = cljs.core.seq.call(null,inst_11030);
var inst_11032 = inst_11031;
var inst_11033 = null;
var inst_11034 = (0);
var inst_11035 = (0);
var state_11080__$1 = (function (){var statearr_11097 = state_11080;
(statearr_11097[(8)] = inst_11032);

(statearr_11097[(10)] = inst_11034);

(statearr_11097[(11)] = inst_11033);

(statearr_11097[(12)] = inst_11035);

return statearr_11097;
})();
var statearr_11098_11132 = state_11080__$1;
(statearr_11098_11132[(2)] = null);

(statearr_11098_11132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (17))){
var inst_11046 = (state_11080[(7)]);
var inst_11050 = cljs.core.chunk_first.call(null,inst_11046);
var inst_11051 = cljs.core.chunk_rest.call(null,inst_11046);
var inst_11052 = cljs.core.count.call(null,inst_11050);
var inst_11032 = inst_11051;
var inst_11033 = inst_11050;
var inst_11034 = inst_11052;
var inst_11035 = (0);
var state_11080__$1 = (function (){var statearr_11099 = state_11080;
(statearr_11099[(8)] = inst_11032);

(statearr_11099[(10)] = inst_11034);

(statearr_11099[(11)] = inst_11033);

(statearr_11099[(12)] = inst_11035);

return statearr_11099;
})();
var statearr_11100_11133 = state_11080__$1;
(statearr_11100_11133[(2)] = null);

(statearr_11100_11133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (3))){
var inst_11078 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11080__$1,inst_11078);
} else {
if((state_val_11081 === (12))){
var inst_11066 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
var statearr_11101_11134 = state_11080__$1;
(statearr_11101_11134[(2)] = inst_11066);

(statearr_11101_11134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (2))){
var state_11080__$1 = state_11080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11080__$1,(4),in$);
} else {
if((state_val_11081 === (23))){
var inst_11074 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
var statearr_11102_11135 = state_11080__$1;
(statearr_11102_11135[(2)] = inst_11074);

(statearr_11102_11135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (19))){
var inst_11061 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
var statearr_11103_11136 = state_11080__$1;
(statearr_11103_11136[(2)] = inst_11061);

(statearr_11103_11136[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (11))){
var inst_11032 = (state_11080[(8)]);
var inst_11046 = (state_11080[(7)]);
var inst_11046__$1 = cljs.core.seq.call(null,inst_11032);
var state_11080__$1 = (function (){var statearr_11104 = state_11080;
(statearr_11104[(7)] = inst_11046__$1);

return statearr_11104;
})();
if(inst_11046__$1){
var statearr_11105_11137 = state_11080__$1;
(statearr_11105_11137[(1)] = (14));

} else {
var statearr_11106_11138 = state_11080__$1;
(statearr_11106_11138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (9))){
var inst_11068 = (state_11080[(2)]);
var inst_11069 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11080__$1 = (function (){var statearr_11107 = state_11080;
(statearr_11107[(15)] = inst_11068);

return statearr_11107;
})();
if(cljs.core.truth_(inst_11069)){
var statearr_11108_11139 = state_11080__$1;
(statearr_11108_11139[(1)] = (21));

} else {
var statearr_11109_11140 = state_11080__$1;
(statearr_11109_11140[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (5))){
var inst_11024 = cljs.core.async.close_BANG_.call(null,out);
var state_11080__$1 = state_11080;
var statearr_11110_11141 = state_11080__$1;
(statearr_11110_11141[(2)] = inst_11024);

(statearr_11110_11141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (14))){
var inst_11046 = (state_11080[(7)]);
var inst_11048 = cljs.core.chunked_seq_QMARK_.call(null,inst_11046);
var state_11080__$1 = state_11080;
if(inst_11048){
var statearr_11111_11142 = state_11080__$1;
(statearr_11111_11142[(1)] = (17));

} else {
var statearr_11112_11143 = state_11080__$1;
(statearr_11112_11143[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (16))){
var inst_11064 = (state_11080[(2)]);
var state_11080__$1 = state_11080;
var statearr_11113_11144 = state_11080__$1;
(statearr_11113_11144[(2)] = inst_11064);

(statearr_11113_11144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11081 === (10))){
var inst_11033 = (state_11080[(11)]);
var inst_11035 = (state_11080[(12)]);
var inst_11040 = cljs.core._nth.call(null,inst_11033,inst_11035);
var state_11080__$1 = state_11080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11080__$1,(13),out,inst_11040);
} else {
if((state_val_11081 === (18))){
var inst_11046 = (state_11080[(7)]);
var inst_11055 = cljs.core.first.call(null,inst_11046);
var state_11080__$1 = state_11080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11080__$1,(20),out,inst_11055);
} else {
if((state_val_11081 === (8))){
var inst_11034 = (state_11080[(10)]);
var inst_11035 = (state_11080[(12)]);
var inst_11037 = (inst_11035 < inst_11034);
var inst_11038 = inst_11037;
var state_11080__$1 = state_11080;
if(cljs.core.truth_(inst_11038)){
var statearr_11114_11145 = state_11080__$1;
(statearr_11114_11145[(1)] = (10));

} else {
var statearr_11115_11146 = state_11080__$1;
(statearr_11115_11146[(1)] = (11));

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
});})(c__6742__auto__))
;
return ((function (switch__6680__auto__,c__6742__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6681__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6681__auto____0 = (function (){
var statearr_11119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11119[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6681__auto__);

(statearr_11119[(1)] = (1));

return statearr_11119;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6681__auto____1 = (function (state_11080){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_11080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e11120){if((e11120 instanceof Object)){
var ex__6684__auto__ = e11120;
var statearr_11121_11147 = state_11080;
(statearr_11121_11147[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11148 = state_11080;
state_11080 = G__11148;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6681__auto__ = function(state_11080){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6681__auto____1.call(this,state_11080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6681__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6681__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto__))
})();
var state__6744__auto__ = (function (){var statearr_11122 = f__6743__auto__.call(null);
(statearr_11122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto__);

return statearr_11122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto__))
);

return c__6742__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__11150 = arguments.length;
switch (G__11150) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__11153 = arguments.length;
switch (G__11153) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__11156 = arguments.length;
switch (G__11156) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6742__auto___11206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___11206,out){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___11206,out){
return (function (state_11180){
var state_val_11181 = (state_11180[(1)]);
if((state_val_11181 === (7))){
var inst_11175 = (state_11180[(2)]);
var state_11180__$1 = state_11180;
var statearr_11182_11207 = state_11180__$1;
(statearr_11182_11207[(2)] = inst_11175);

(statearr_11182_11207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11181 === (1))){
var inst_11157 = null;
var state_11180__$1 = (function (){var statearr_11183 = state_11180;
(statearr_11183[(7)] = inst_11157);

return statearr_11183;
})();
var statearr_11184_11208 = state_11180__$1;
(statearr_11184_11208[(2)] = null);

(statearr_11184_11208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11181 === (4))){
var inst_11160 = (state_11180[(8)]);
var inst_11160__$1 = (state_11180[(2)]);
var inst_11161 = (inst_11160__$1 == null);
var inst_11162 = cljs.core.not.call(null,inst_11161);
var state_11180__$1 = (function (){var statearr_11185 = state_11180;
(statearr_11185[(8)] = inst_11160__$1);

return statearr_11185;
})();
if(inst_11162){
var statearr_11186_11209 = state_11180__$1;
(statearr_11186_11209[(1)] = (5));

} else {
var statearr_11187_11210 = state_11180__$1;
(statearr_11187_11210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11181 === (6))){
var state_11180__$1 = state_11180;
var statearr_11188_11211 = state_11180__$1;
(statearr_11188_11211[(2)] = null);

(statearr_11188_11211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11181 === (3))){
var inst_11177 = (state_11180[(2)]);
var inst_11178 = cljs.core.async.close_BANG_.call(null,out);
var state_11180__$1 = (function (){var statearr_11189 = state_11180;
(statearr_11189[(9)] = inst_11177);

return statearr_11189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11180__$1,inst_11178);
} else {
if((state_val_11181 === (2))){
var state_11180__$1 = state_11180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11180__$1,(4),ch);
} else {
if((state_val_11181 === (11))){
var inst_11160 = (state_11180[(8)]);
var inst_11169 = (state_11180[(2)]);
var inst_11157 = inst_11160;
var state_11180__$1 = (function (){var statearr_11190 = state_11180;
(statearr_11190[(7)] = inst_11157);

(statearr_11190[(10)] = inst_11169);

return statearr_11190;
})();
var statearr_11191_11212 = state_11180__$1;
(statearr_11191_11212[(2)] = null);

(statearr_11191_11212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11181 === (9))){
var inst_11160 = (state_11180[(8)]);
var state_11180__$1 = state_11180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11180__$1,(11),out,inst_11160);
} else {
if((state_val_11181 === (5))){
var inst_11157 = (state_11180[(7)]);
var inst_11160 = (state_11180[(8)]);
var inst_11164 = cljs.core._EQ_.call(null,inst_11160,inst_11157);
var state_11180__$1 = state_11180;
if(inst_11164){
var statearr_11193_11213 = state_11180__$1;
(statearr_11193_11213[(1)] = (8));

} else {
var statearr_11194_11214 = state_11180__$1;
(statearr_11194_11214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11181 === (10))){
var inst_11172 = (state_11180[(2)]);
var state_11180__$1 = state_11180;
var statearr_11195_11215 = state_11180__$1;
(statearr_11195_11215[(2)] = inst_11172);

(statearr_11195_11215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11181 === (8))){
var inst_11157 = (state_11180[(7)]);
var tmp11192 = inst_11157;
var inst_11157__$1 = tmp11192;
var state_11180__$1 = (function (){var statearr_11196 = state_11180;
(statearr_11196[(7)] = inst_11157__$1);

return statearr_11196;
})();
var statearr_11197_11216 = state_11180__$1;
(statearr_11197_11216[(2)] = null);

(statearr_11197_11216[(1)] = (2));


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
});})(c__6742__auto___11206,out))
;
return ((function (switch__6680__auto__,c__6742__auto___11206,out){
return (function() {
var cljs$core$async$state_machine__6681__auto__ = null;
var cljs$core$async$state_machine__6681__auto____0 = (function (){
var statearr_11201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11201[(0)] = cljs$core$async$state_machine__6681__auto__);

(statearr_11201[(1)] = (1));

return statearr_11201;
});
var cljs$core$async$state_machine__6681__auto____1 = (function (state_11180){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_11180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e11202){if((e11202 instanceof Object)){
var ex__6684__auto__ = e11202;
var statearr_11203_11217 = state_11180;
(statearr_11203_11217[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11218 = state_11180;
state_11180 = G__11218;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$state_machine__6681__auto__ = function(state_11180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6681__auto____1.call(this,state_11180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6681__auto____0;
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6681__auto____1;
return cljs$core$async$state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___11206,out))
})();
var state__6744__auto__ = (function (){var statearr_11204 = f__6743__auto__.call(null);
(statearr_11204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___11206);

return statearr_11204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___11206,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__11220 = arguments.length;
switch (G__11220) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6742__auto___11289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___11289,out){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___11289,out){
return (function (state_11258){
var state_val_11259 = (state_11258[(1)]);
if((state_val_11259 === (7))){
var inst_11254 = (state_11258[(2)]);
var state_11258__$1 = state_11258;
var statearr_11260_11290 = state_11258__$1;
(statearr_11260_11290[(2)] = inst_11254);

(statearr_11260_11290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (1))){
var inst_11221 = (new Array(n));
var inst_11222 = inst_11221;
var inst_11223 = (0);
var state_11258__$1 = (function (){var statearr_11261 = state_11258;
(statearr_11261[(7)] = inst_11223);

(statearr_11261[(8)] = inst_11222);

return statearr_11261;
})();
var statearr_11262_11291 = state_11258__$1;
(statearr_11262_11291[(2)] = null);

(statearr_11262_11291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (4))){
var inst_11226 = (state_11258[(9)]);
var inst_11226__$1 = (state_11258[(2)]);
var inst_11227 = (inst_11226__$1 == null);
var inst_11228 = cljs.core.not.call(null,inst_11227);
var state_11258__$1 = (function (){var statearr_11263 = state_11258;
(statearr_11263[(9)] = inst_11226__$1);

return statearr_11263;
})();
if(inst_11228){
var statearr_11264_11292 = state_11258__$1;
(statearr_11264_11292[(1)] = (5));

} else {
var statearr_11265_11293 = state_11258__$1;
(statearr_11265_11293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (15))){
var inst_11248 = (state_11258[(2)]);
var state_11258__$1 = state_11258;
var statearr_11266_11294 = state_11258__$1;
(statearr_11266_11294[(2)] = inst_11248);

(statearr_11266_11294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (13))){
var state_11258__$1 = state_11258;
var statearr_11267_11295 = state_11258__$1;
(statearr_11267_11295[(2)] = null);

(statearr_11267_11295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (6))){
var inst_11223 = (state_11258[(7)]);
var inst_11244 = (inst_11223 > (0));
var state_11258__$1 = state_11258;
if(cljs.core.truth_(inst_11244)){
var statearr_11268_11296 = state_11258__$1;
(statearr_11268_11296[(1)] = (12));

} else {
var statearr_11269_11297 = state_11258__$1;
(statearr_11269_11297[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (3))){
var inst_11256 = (state_11258[(2)]);
var state_11258__$1 = state_11258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11258__$1,inst_11256);
} else {
if((state_val_11259 === (12))){
var inst_11222 = (state_11258[(8)]);
var inst_11246 = cljs.core.vec.call(null,inst_11222);
var state_11258__$1 = state_11258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11258__$1,(15),out,inst_11246);
} else {
if((state_val_11259 === (2))){
var state_11258__$1 = state_11258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11258__$1,(4),ch);
} else {
if((state_val_11259 === (11))){
var inst_11238 = (state_11258[(2)]);
var inst_11239 = (new Array(n));
var inst_11222 = inst_11239;
var inst_11223 = (0);
var state_11258__$1 = (function (){var statearr_11270 = state_11258;
(statearr_11270[(7)] = inst_11223);

(statearr_11270[(8)] = inst_11222);

(statearr_11270[(10)] = inst_11238);

return statearr_11270;
})();
var statearr_11271_11298 = state_11258__$1;
(statearr_11271_11298[(2)] = null);

(statearr_11271_11298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (9))){
var inst_11222 = (state_11258[(8)]);
var inst_11236 = cljs.core.vec.call(null,inst_11222);
var state_11258__$1 = state_11258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11258__$1,(11),out,inst_11236);
} else {
if((state_val_11259 === (5))){
var inst_11226 = (state_11258[(9)]);
var inst_11223 = (state_11258[(7)]);
var inst_11231 = (state_11258[(11)]);
var inst_11222 = (state_11258[(8)]);
var inst_11230 = (inst_11222[inst_11223] = inst_11226);
var inst_11231__$1 = (inst_11223 + (1));
var inst_11232 = (inst_11231__$1 < n);
var state_11258__$1 = (function (){var statearr_11272 = state_11258;
(statearr_11272[(12)] = inst_11230);

(statearr_11272[(11)] = inst_11231__$1);

return statearr_11272;
})();
if(cljs.core.truth_(inst_11232)){
var statearr_11273_11299 = state_11258__$1;
(statearr_11273_11299[(1)] = (8));

} else {
var statearr_11274_11300 = state_11258__$1;
(statearr_11274_11300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (14))){
var inst_11251 = (state_11258[(2)]);
var inst_11252 = cljs.core.async.close_BANG_.call(null,out);
var state_11258__$1 = (function (){var statearr_11276 = state_11258;
(statearr_11276[(13)] = inst_11251);

return statearr_11276;
})();
var statearr_11277_11301 = state_11258__$1;
(statearr_11277_11301[(2)] = inst_11252);

(statearr_11277_11301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (10))){
var inst_11242 = (state_11258[(2)]);
var state_11258__$1 = state_11258;
var statearr_11278_11302 = state_11258__$1;
(statearr_11278_11302[(2)] = inst_11242);

(statearr_11278_11302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (8))){
var inst_11231 = (state_11258[(11)]);
var inst_11222 = (state_11258[(8)]);
var tmp11275 = inst_11222;
var inst_11222__$1 = tmp11275;
var inst_11223 = inst_11231;
var state_11258__$1 = (function (){var statearr_11279 = state_11258;
(statearr_11279[(7)] = inst_11223);

(statearr_11279[(8)] = inst_11222__$1);

return statearr_11279;
})();
var statearr_11280_11303 = state_11258__$1;
(statearr_11280_11303[(2)] = null);

(statearr_11280_11303[(1)] = (2));


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
});})(c__6742__auto___11289,out))
;
return ((function (switch__6680__auto__,c__6742__auto___11289,out){
return (function() {
var cljs$core$async$state_machine__6681__auto__ = null;
var cljs$core$async$state_machine__6681__auto____0 = (function (){
var statearr_11284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11284[(0)] = cljs$core$async$state_machine__6681__auto__);

(statearr_11284[(1)] = (1));

return statearr_11284;
});
var cljs$core$async$state_machine__6681__auto____1 = (function (state_11258){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_11258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e11285){if((e11285 instanceof Object)){
var ex__6684__auto__ = e11285;
var statearr_11286_11304 = state_11258;
(statearr_11286_11304[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11305 = state_11258;
state_11258 = G__11305;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$state_machine__6681__auto__ = function(state_11258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6681__auto____1.call(this,state_11258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6681__auto____0;
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6681__auto____1;
return cljs$core$async$state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___11289,out))
})();
var state__6744__auto__ = (function (){var statearr_11287 = f__6743__auto__.call(null);
(statearr_11287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___11289);

return statearr_11287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___11289,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__11307 = arguments.length;
switch (G__11307) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6742__auto___11380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6742__auto___11380,out){
return (function (){
var f__6743__auto__ = (function (){var switch__6680__auto__ = ((function (c__6742__auto___11380,out){
return (function (state_11349){
var state_val_11350 = (state_11349[(1)]);
if((state_val_11350 === (7))){
var inst_11345 = (state_11349[(2)]);
var state_11349__$1 = state_11349;
var statearr_11351_11381 = state_11349__$1;
(statearr_11351_11381[(2)] = inst_11345);

(statearr_11351_11381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (1))){
var inst_11308 = [];
var inst_11309 = inst_11308;
var inst_11310 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11349__$1 = (function (){var statearr_11352 = state_11349;
(statearr_11352[(7)] = inst_11309);

(statearr_11352[(8)] = inst_11310);

return statearr_11352;
})();
var statearr_11353_11382 = state_11349__$1;
(statearr_11353_11382[(2)] = null);

(statearr_11353_11382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (4))){
var inst_11313 = (state_11349[(9)]);
var inst_11313__$1 = (state_11349[(2)]);
var inst_11314 = (inst_11313__$1 == null);
var inst_11315 = cljs.core.not.call(null,inst_11314);
var state_11349__$1 = (function (){var statearr_11354 = state_11349;
(statearr_11354[(9)] = inst_11313__$1);

return statearr_11354;
})();
if(inst_11315){
var statearr_11355_11383 = state_11349__$1;
(statearr_11355_11383[(1)] = (5));

} else {
var statearr_11356_11384 = state_11349__$1;
(statearr_11356_11384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (15))){
var inst_11339 = (state_11349[(2)]);
var state_11349__$1 = state_11349;
var statearr_11357_11385 = state_11349__$1;
(statearr_11357_11385[(2)] = inst_11339);

(statearr_11357_11385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (13))){
var state_11349__$1 = state_11349;
var statearr_11358_11386 = state_11349__$1;
(statearr_11358_11386[(2)] = null);

(statearr_11358_11386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (6))){
var inst_11309 = (state_11349[(7)]);
var inst_11334 = inst_11309.length;
var inst_11335 = (inst_11334 > (0));
var state_11349__$1 = state_11349;
if(cljs.core.truth_(inst_11335)){
var statearr_11359_11387 = state_11349__$1;
(statearr_11359_11387[(1)] = (12));

} else {
var statearr_11360_11388 = state_11349__$1;
(statearr_11360_11388[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (3))){
var inst_11347 = (state_11349[(2)]);
var state_11349__$1 = state_11349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11349__$1,inst_11347);
} else {
if((state_val_11350 === (12))){
var inst_11309 = (state_11349[(7)]);
var inst_11337 = cljs.core.vec.call(null,inst_11309);
var state_11349__$1 = state_11349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11349__$1,(15),out,inst_11337);
} else {
if((state_val_11350 === (2))){
var state_11349__$1 = state_11349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11349__$1,(4),ch);
} else {
if((state_val_11350 === (11))){
var inst_11317 = (state_11349[(10)]);
var inst_11313 = (state_11349[(9)]);
var inst_11327 = (state_11349[(2)]);
var inst_11328 = [];
var inst_11329 = inst_11328.push(inst_11313);
var inst_11309 = inst_11328;
var inst_11310 = inst_11317;
var state_11349__$1 = (function (){var statearr_11361 = state_11349;
(statearr_11361[(7)] = inst_11309);

(statearr_11361[(11)] = inst_11327);

(statearr_11361[(8)] = inst_11310);

(statearr_11361[(12)] = inst_11329);

return statearr_11361;
})();
var statearr_11362_11389 = state_11349__$1;
(statearr_11362_11389[(2)] = null);

(statearr_11362_11389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (9))){
var inst_11309 = (state_11349[(7)]);
var inst_11325 = cljs.core.vec.call(null,inst_11309);
var state_11349__$1 = state_11349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11349__$1,(11),out,inst_11325);
} else {
if((state_val_11350 === (5))){
var inst_11317 = (state_11349[(10)]);
var inst_11310 = (state_11349[(8)]);
var inst_11313 = (state_11349[(9)]);
var inst_11317__$1 = f.call(null,inst_11313);
var inst_11318 = cljs.core._EQ_.call(null,inst_11317__$1,inst_11310);
var inst_11319 = cljs.core.keyword_identical_QMARK_.call(null,inst_11310,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11320 = (inst_11318) || (inst_11319);
var state_11349__$1 = (function (){var statearr_11363 = state_11349;
(statearr_11363[(10)] = inst_11317__$1);

return statearr_11363;
})();
if(cljs.core.truth_(inst_11320)){
var statearr_11364_11390 = state_11349__$1;
(statearr_11364_11390[(1)] = (8));

} else {
var statearr_11365_11391 = state_11349__$1;
(statearr_11365_11391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (14))){
var inst_11342 = (state_11349[(2)]);
var inst_11343 = cljs.core.async.close_BANG_.call(null,out);
var state_11349__$1 = (function (){var statearr_11367 = state_11349;
(statearr_11367[(13)] = inst_11342);

return statearr_11367;
})();
var statearr_11368_11392 = state_11349__$1;
(statearr_11368_11392[(2)] = inst_11343);

(statearr_11368_11392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (10))){
var inst_11332 = (state_11349[(2)]);
var state_11349__$1 = state_11349;
var statearr_11369_11393 = state_11349__$1;
(statearr_11369_11393[(2)] = inst_11332);

(statearr_11369_11393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11350 === (8))){
var inst_11309 = (state_11349[(7)]);
var inst_11317 = (state_11349[(10)]);
var inst_11313 = (state_11349[(9)]);
var inst_11322 = inst_11309.push(inst_11313);
var tmp11366 = inst_11309;
var inst_11309__$1 = tmp11366;
var inst_11310 = inst_11317;
var state_11349__$1 = (function (){var statearr_11370 = state_11349;
(statearr_11370[(7)] = inst_11309__$1);

(statearr_11370[(14)] = inst_11322);

(statearr_11370[(8)] = inst_11310);

return statearr_11370;
})();
var statearr_11371_11394 = state_11349__$1;
(statearr_11371_11394[(2)] = null);

(statearr_11371_11394[(1)] = (2));


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
});})(c__6742__auto___11380,out))
;
return ((function (switch__6680__auto__,c__6742__auto___11380,out){
return (function() {
var cljs$core$async$state_machine__6681__auto__ = null;
var cljs$core$async$state_machine__6681__auto____0 = (function (){
var statearr_11375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11375[(0)] = cljs$core$async$state_machine__6681__auto__);

(statearr_11375[(1)] = (1));

return statearr_11375;
});
var cljs$core$async$state_machine__6681__auto____1 = (function (state_11349){
while(true){
var ret_value__6682__auto__ = (function (){try{while(true){
var result__6683__auto__ = switch__6680__auto__.call(null,state_11349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6683__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6683__auto__;
}
break;
}
}catch (e11376){if((e11376 instanceof Object)){
var ex__6684__auto__ = e11376;
var statearr_11377_11395 = state_11349;
(statearr_11377_11395[(5)] = ex__6684__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11396 = state_11349;
state_11349 = G__11396;
continue;
} else {
return ret_value__6682__auto__;
}
break;
}
});
cljs$core$async$state_machine__6681__auto__ = function(state_11349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6681__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6681__auto____1.call(this,state_11349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6681__auto____0;
cljs$core$async$state_machine__6681__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6681__auto____1;
return cljs$core$async$state_machine__6681__auto__;
})()
;})(switch__6680__auto__,c__6742__auto___11380,out))
})();
var state__6744__auto__ = (function (){var statearr_11378 = f__6743__auto__.call(null);
(statearr_11378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6742__auto___11380);

return statearr_11378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6744__auto__);
});})(c__6742__auto___11380,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map