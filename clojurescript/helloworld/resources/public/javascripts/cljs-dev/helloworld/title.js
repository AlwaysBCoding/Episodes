// Compiled by ClojureScript 0.0-3308 {}
goog.provide('helloworld.title');
goog.require('cljs.core');
goog.require('cljs.core.async');
helloworld.title.items_list = (function helloworld$title$items_list(EVENTCHANNEL,items,active_item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),(function (){var iter__16863__auto__ = (function helloworld$title$items_list_$_iter__24555(s__24556){
return (new cljs.core.LazySeq(null,(function (){
var s__24556__$1 = s__24556;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24556__$1);
if(temp__4425__auto__){
var s__24556__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24556__$2)){
var c__16861__auto__ = cljs.core.chunk_first.call(null,s__24556__$2);
var size__16862__auto__ = cljs.core.count.call(null,c__16861__auto__);
var b__24558 = cljs.core.chunk_buffer.call(null,size__16862__auto__);
if((function (){var i__24557 = (0);
while(true){
if((i__24557 < size__16862__auto__)){
var item = cljs.core._nth.call(null,c__16861__auto__,i__24557);
cljs.core.chunk_append.call(null,b__24558,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,item))?"item active":"item")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24557,item,c__16861__auto__,size__16862__auto__,b__24558,s__24556__$2,temp__4425__auto__){
return (function (event){
return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),item], null)], null));
});})(i__24557,item,c__16861__auto__,size__16862__auto__,b__24558,s__24556__$2,temp__4425__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__24559 = (i__24557 + (1));
i__24557 = G__24559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24558),helloworld$title$items_list_$_iter__24555.call(null,cljs.core.chunk_rest.call(null,s__24556__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24558),null);
}
} else {
var item = cljs.core.first.call(null,s__24556__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,item))?"item active":"item")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__24556__$2,temp__4425__auto__){
return (function (event){
return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),item], null)], null));
});})(item,s__24556__$2,temp__4425__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)),helloworld$title$items_list_$_iter__24555.call(null,cljs.core.rest.call(null,s__24556__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16863__auto__.call(null,items);
})()], null);
});

//# sourceMappingURL=title.js.map