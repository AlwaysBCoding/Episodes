// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__17149__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17149__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__21335_21343 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__21336_21344 = null;
var count__21337_21345 = (0);
var i__21338_21346 = (0);
while(true){
if((i__21338_21346 < count__21337_21345)){
var k_21347 = cljs.core._nth.call(null,chunk__21336_21344,i__21338_21346);
e.setAttribute(cljs.core.name.call(null,k_21347),cljs.core.get.call(null,attrs,k_21347));

var G__21348 = seq__21335_21343;
var G__21349 = chunk__21336_21344;
var G__21350 = count__21337_21345;
var G__21351 = (i__21338_21346 + (1));
seq__21335_21343 = G__21348;
chunk__21336_21344 = G__21349;
count__21337_21345 = G__21350;
i__21338_21346 = G__21351;
continue;
} else {
var temp__4425__auto___21352 = cljs.core.seq.call(null,seq__21335_21343);
if(temp__4425__auto___21352){
var seq__21335_21353__$1 = temp__4425__auto___21352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21335_21353__$1)){
var c__16894__auto___21354 = cljs.core.chunk_first.call(null,seq__21335_21353__$1);
var G__21355 = cljs.core.chunk_rest.call(null,seq__21335_21353__$1);
var G__21356 = c__16894__auto___21354;
var G__21357 = cljs.core.count.call(null,c__16894__auto___21354);
var G__21358 = (0);
seq__21335_21343 = G__21355;
chunk__21336_21344 = G__21356;
count__21337_21345 = G__21357;
i__21338_21346 = G__21358;
continue;
} else {
var k_21359 = cljs.core.first.call(null,seq__21335_21353__$1);
e.setAttribute(cljs.core.name.call(null,k_21359),cljs.core.get.call(null,attrs,k_21359));

var G__21360 = cljs.core.next.call(null,seq__21335_21353__$1);
var G__21361 = null;
var G__21362 = (0);
var G__21363 = (0);
seq__21335_21343 = G__21360;
chunk__21336_21344 = G__21361;
count__21337_21345 = G__21362;
i__21338_21346 = G__21363;
continue;
}
} else {
}
}
break;
}

var seq__21339_21364 = cljs.core.seq.call(null,children);
var chunk__21340_21365 = null;
var count__21341_21366 = (0);
var i__21342_21367 = (0);
while(true){
if((i__21342_21367 < count__21341_21366)){
var ch_21368 = cljs.core._nth.call(null,chunk__21340_21365,i__21342_21367);
e.appendChild(ch_21368);

var G__21369 = seq__21339_21364;
var G__21370 = chunk__21340_21365;
var G__21371 = count__21341_21366;
var G__21372 = (i__21342_21367 + (1));
seq__21339_21364 = G__21369;
chunk__21340_21365 = G__21370;
count__21341_21366 = G__21371;
i__21342_21367 = G__21372;
continue;
} else {
var temp__4425__auto___21373 = cljs.core.seq.call(null,seq__21339_21364);
if(temp__4425__auto___21373){
var seq__21339_21374__$1 = temp__4425__auto___21373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21339_21374__$1)){
var c__16894__auto___21375 = cljs.core.chunk_first.call(null,seq__21339_21374__$1);
var G__21376 = cljs.core.chunk_rest.call(null,seq__21339_21374__$1);
var G__21377 = c__16894__auto___21375;
var G__21378 = cljs.core.count.call(null,c__16894__auto___21375);
var G__21379 = (0);
seq__21339_21364 = G__21376;
chunk__21340_21365 = G__21377;
count__21341_21366 = G__21378;
i__21342_21367 = G__21379;
continue;
} else {
var ch_21380 = cljs.core.first.call(null,seq__21339_21374__$1);
e.appendChild(ch_21380);

var G__21381 = cljs.core.next.call(null,seq__21339_21374__$1);
var G__21382 = null;
var G__21383 = (0);
var G__21384 = (0);
seq__21339_21364 = G__21381;
chunk__21340_21365 = G__21382;
count__21341_21366 = G__21383;
i__21342_21367 = G__21384;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq21332){
var G__21333 = cljs.core.first.call(null,seq21332);
var seq21332__$1 = cljs.core.next.call(null,seq21332);
var G__21334 = cljs.core.first.call(null,seq21332__$1);
var seq21332__$2 = cljs.core.next.call(null,seq21332__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__21333,G__21334,seq21332__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17008__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__,hierarchy__17008__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17008__auto__,method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_21385 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_21385.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_21385.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_21385.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_21385);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__21386,st_map){
var map__21390 = p__21386;
var map__21390__$1 = ((cljs.core.seq_QMARK_.call(null,map__21390))?cljs.core.apply.call(null,cljs.core.hash_map,map__21390):map__21390);
var container_el = cljs.core.get.call(null,map__21390__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__21390,map__21390__$1,container_el){
return (function (p__21391){
var vec__21392 = p__21391;
var k = cljs.core.nth.call(null,vec__21392,(0),null);
var v = cljs.core.nth.call(null,vec__21392,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__21390,map__21390__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__21393,dom_str){
var map__21395 = p__21393;
var map__21395__$1 = ((cljs.core.seq_QMARK_.call(null,map__21395))?cljs.core.apply.call(null,cljs.core.hash_map,map__21395):map__21395);
var c = map__21395__$1;
var content_area_el = cljs.core.get.call(null,map__21395__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__21396){
var map__21398 = p__21396;
var map__21398__$1 = ((cljs.core.seq_QMARK_.call(null,map__21398))?cljs.core.apply.call(null,cljs.core.hash_map,map__21398):map__21398);
var content_area_el = cljs.core.get.call(null,map__21398__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19052__auto__){
return (function (){
var f__19053__auto__ = (function (){var switch__19031__auto__ = ((function (c__19052__auto__){
return (function (state_21440){
var state_val_21441 = (state_21440[(1)]);
if((state_val_21441 === (1))){
var inst_21425 = (state_21440[(7)]);
var inst_21425__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21426 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21427 = ["10px","10px","100%","68px","1.0"];
var inst_21428 = cljs.core.PersistentHashMap.fromArrays(inst_21426,inst_21427);
var inst_21429 = cljs.core.merge.call(null,inst_21428,style);
var inst_21430 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21425__$1,inst_21429);
var inst_21431 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21425__$1,msg);
var inst_21432 = cljs.core.async.timeout.call(null,(300));
var state_21440__$1 = (function (){var statearr_21442 = state_21440;
(statearr_21442[(8)] = inst_21431);

(statearr_21442[(7)] = inst_21425__$1);

(statearr_21442[(9)] = inst_21430);

return statearr_21442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21440__$1,(2),inst_21432);
} else {
if((state_val_21441 === (2))){
var inst_21425 = (state_21440[(7)]);
var inst_21434 = (state_21440[(2)]);
var inst_21435 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_21436 = ["auto"];
var inst_21437 = cljs.core.PersistentHashMap.fromArrays(inst_21435,inst_21436);
var inst_21438 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21425,inst_21437);
var state_21440__$1 = (function (){var statearr_21443 = state_21440;
(statearr_21443[(10)] = inst_21434);

return statearr_21443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21440__$1,inst_21438);
} else {
return null;
}
}
});})(c__19052__auto__))
;
return ((function (switch__19031__auto__,c__19052__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto____0 = (function (){
var statearr_21447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21447[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto__);

(statearr_21447[(1)] = (1));

return statearr_21447;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto____1 = (function (state_21440){
while(true){
var ret_value__19033__auto__ = (function (){try{while(true){
var result__19034__auto__ = switch__19031__auto__.call(null,state_21440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19034__auto__;
}
break;
}
}catch (e21448){if((e21448 instanceof Object)){
var ex__19035__auto__ = e21448;
var statearr_21449_21451 = state_21440;
(statearr_21449_21451[(5)] = ex__19035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21452 = state_21440;
state_21440 = G__21452;
continue;
} else {
return ret_value__19033__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto__ = function(state_21440){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto____1.call(this,state_21440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19032__auto__;
})()
;})(switch__19031__auto__,c__19052__auto__))
})();
var state__19054__auto__ = (function (){var statearr_21450 = f__19053__auto__.call(null);
(statearr_21450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19052__auto__);

return statearr_21450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19054__auto__);
});})(c__19052__auto__))
);

return c__19052__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__21454 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__21454,(0),null);
var ln = cljs.core.nth.call(null,vec__21454,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__21457 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__21457,(0),null);
var file_line = cljs.core.nth.call(null,vec__21457,(1),null);
var file_column = cljs.core.nth.call(null,vec__21457,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__21457,file_name,file_line,file_column){
return (function (p1__21455_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__21455_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__21457,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16109__auto__ = file_line;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
var and__16097__auto__ = cause;
if(cljs.core.truth_(and__16097__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16097__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__21459 = figwheel.client.heads_up.ensure_container.call(null);
var map__21459__$1 = ((cljs.core.seq_QMARK_.call(null,map__21459))?cljs.core.apply.call(null,cljs.core.hash_map,map__21459):map__21459);
var content_area_el = cljs.core.get.call(null,map__21459__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19052__auto__){
return (function (){
var f__19053__auto__ = (function (){var switch__19031__auto__ = ((function (c__19052__auto__){
return (function (state_21506){
var state_val_21507 = (state_21506[(1)]);
if((state_val_21507 === (1))){
var inst_21489 = (state_21506[(7)]);
var inst_21489__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21490 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21491 = ["0.0"];
var inst_21492 = cljs.core.PersistentHashMap.fromArrays(inst_21490,inst_21491);
var inst_21493 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21489__$1,inst_21492);
var inst_21494 = cljs.core.async.timeout.call(null,(300));
var state_21506__$1 = (function (){var statearr_21508 = state_21506;
(statearr_21508[(8)] = inst_21493);

(statearr_21508[(7)] = inst_21489__$1);

return statearr_21508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21506__$1,(2),inst_21494);
} else {
if((state_val_21507 === (2))){
var inst_21489 = (state_21506[(7)]);
var inst_21496 = (state_21506[(2)]);
var inst_21497 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_21498 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_21499 = cljs.core.PersistentHashMap.fromArrays(inst_21497,inst_21498);
var inst_21500 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21489,inst_21499);
var inst_21501 = cljs.core.async.timeout.call(null,(200));
var state_21506__$1 = (function (){var statearr_21509 = state_21506;
(statearr_21509[(9)] = inst_21496);

(statearr_21509[(10)] = inst_21500);

return statearr_21509;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21506__$1,(3),inst_21501);
} else {
if((state_val_21507 === (3))){
var inst_21489 = (state_21506[(7)]);
var inst_21503 = (state_21506[(2)]);
var inst_21504 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21489,"");
var state_21506__$1 = (function (){var statearr_21510 = state_21506;
(statearr_21510[(11)] = inst_21503);

return statearr_21510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21506__$1,inst_21504);
} else {
return null;
}
}
}
});})(c__19052__auto__))
;
return ((function (switch__19031__auto__,c__19052__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19032__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19032__auto____0 = (function (){
var statearr_21514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21514[(0)] = figwheel$client$heads_up$clear_$_state_machine__19032__auto__);

(statearr_21514[(1)] = (1));

return statearr_21514;
});
var figwheel$client$heads_up$clear_$_state_machine__19032__auto____1 = (function (state_21506){
while(true){
var ret_value__19033__auto__ = (function (){try{while(true){
var result__19034__auto__ = switch__19031__auto__.call(null,state_21506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19034__auto__;
}
break;
}
}catch (e21515){if((e21515 instanceof Object)){
var ex__19035__auto__ = e21515;
var statearr_21516_21518 = state_21506;
(statearr_21516_21518[(5)] = ex__19035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21519 = state_21506;
state_21506 = G__21519;
continue;
} else {
return ret_value__19033__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19032__auto__ = function(state_21506){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19032__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19032__auto____1.call(this,state_21506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19032__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19032__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19032__auto__;
})()
;})(switch__19031__auto__,c__19052__auto__))
})();
var state__19054__auto__ = (function (){var statearr_21517 = f__19053__auto__.call(null);
(statearr_21517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19052__auto__);

return statearr_21517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19054__auto__);
});})(c__19052__auto__))
);

return c__19052__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19052__auto__){
return (function (){
var f__19053__auto__ = (function (){var switch__19031__auto__ = ((function (c__19052__auto__){
return (function (state_21551){
var state_val_21552 = (state_21551[(1)]);
if((state_val_21552 === (1))){
var inst_21541 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_21551__$1 = state_21551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21551__$1,(2),inst_21541);
} else {
if((state_val_21552 === (2))){
var inst_21543 = (state_21551[(2)]);
var inst_21544 = cljs.core.async.timeout.call(null,(400));
var state_21551__$1 = (function (){var statearr_21553 = state_21551;
(statearr_21553[(7)] = inst_21543);

return statearr_21553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21551__$1,(3),inst_21544);
} else {
if((state_val_21552 === (3))){
var inst_21546 = (state_21551[(2)]);
var inst_21547 = figwheel.client.heads_up.clear.call(null);
var state_21551__$1 = (function (){var statearr_21554 = state_21551;
(statearr_21554[(8)] = inst_21546);

return statearr_21554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21551__$1,(4),inst_21547);
} else {
if((state_val_21552 === (4))){
var inst_21549 = (state_21551[(2)]);
var state_21551__$1 = state_21551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21551__$1,inst_21549);
} else {
return null;
}
}
}
}
});})(c__19052__auto__))
;
return ((function (switch__19031__auto__,c__19052__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto____0 = (function (){
var statearr_21558 = [null,null,null,null,null,null,null,null,null];
(statearr_21558[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto__);

(statearr_21558[(1)] = (1));

return statearr_21558;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto____1 = (function (state_21551){
while(true){
var ret_value__19033__auto__ = (function (){try{while(true){
var result__19034__auto__ = switch__19031__auto__.call(null,state_21551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19034__auto__;
}
break;
}
}catch (e21559){if((e21559 instanceof Object)){
var ex__19035__auto__ = e21559;
var statearr_21560_21562 = state_21551;
(statearr_21560_21562[(5)] = ex__19035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21563 = state_21551;
state_21551 = G__21563;
continue;
} else {
return ret_value__19033__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto__ = function(state_21551){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto____1.call(this,state_21551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19032__auto__;
})()
;})(switch__19031__auto__,c__19052__auto__))
})();
var state__19054__auto__ = (function (){var statearr_21561 = f__19053__auto__.call(null);
(statearr_21561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19052__auto__);

return statearr_21561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19054__auto__);
});})(c__19052__auto__))
);

return c__19052__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map