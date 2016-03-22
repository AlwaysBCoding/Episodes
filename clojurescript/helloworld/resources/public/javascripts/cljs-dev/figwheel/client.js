// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20571__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__20571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20572__i = 0, G__20572__a = new Array(arguments.length -  0);
while (G__20572__i < G__20572__a.length) {G__20572__a[G__20572__i] = arguments[G__20572__i + 0]; ++G__20572__i;}
  args = new cljs.core.IndexedSeq(G__20572__a,0);
} 
return G__20571__delegate.call(this,args);};
G__20571.cljs$lang$maxFixedArity = 0;
G__20571.cljs$lang$applyTo = (function (arglist__20573){
var args = cljs.core.seq(arglist__20573);
return G__20571__delegate(args);
});
G__20571.cljs$core$IFn$_invoke$arity$variadic = G__20571__delegate;
return G__20571;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__20574){
var map__20576 = p__20574;
var map__20576__$1 = ((cljs.core.seq_QMARK_.call(null,map__20576))?cljs.core.apply.call(null,cljs.core.hash_map,map__20576):map__20576);
var message = cljs.core.get.call(null,map__20576__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__20576__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16109__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16097__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16097__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16097__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19052__auto___20705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19052__auto___20705,ch){
return (function (){
var f__19053__auto__ = (function (){var switch__19031__auto__ = ((function (c__19052__auto___20705,ch){
return (function (state_20679){
var state_val_20680 = (state_20679[(1)]);
if((state_val_20680 === (7))){
var inst_20675 = (state_20679[(2)]);
var state_20679__$1 = state_20679;
var statearr_20681_20706 = state_20679__$1;
(statearr_20681_20706[(2)] = inst_20675);

(statearr_20681_20706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (1))){
var state_20679__$1 = state_20679;
var statearr_20682_20707 = state_20679__$1;
(statearr_20682_20707[(2)] = null);

(statearr_20682_20707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (4))){
var inst_20643 = (state_20679[(7)]);
var inst_20643__$1 = (state_20679[(2)]);
var state_20679__$1 = (function (){var statearr_20683 = state_20679;
(statearr_20683[(7)] = inst_20643__$1);

return statearr_20683;
})();
if(cljs.core.truth_(inst_20643__$1)){
var statearr_20684_20708 = state_20679__$1;
(statearr_20684_20708[(1)] = (5));

} else {
var statearr_20685_20709 = state_20679__$1;
(statearr_20685_20709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (13))){
var state_20679__$1 = state_20679;
var statearr_20686_20710 = state_20679__$1;
(statearr_20686_20710[(2)] = null);

(statearr_20686_20710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (6))){
var state_20679__$1 = state_20679;
var statearr_20687_20711 = state_20679__$1;
(statearr_20687_20711[(2)] = null);

(statearr_20687_20711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (3))){
var inst_20677 = (state_20679[(2)]);
var state_20679__$1 = state_20679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20679__$1,inst_20677);
} else {
if((state_val_20680 === (12))){
var inst_20650 = (state_20679[(8)]);
var inst_20663 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_20650);
var inst_20664 = cljs.core.first.call(null,inst_20663);
var inst_20665 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_20664);
var inst_20666 = console.warn("Figwheel: Not loading code with warnings - ",inst_20665);
var state_20679__$1 = state_20679;
var statearr_20688_20712 = state_20679__$1;
(statearr_20688_20712[(2)] = inst_20666);

(statearr_20688_20712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (2))){
var state_20679__$1 = state_20679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20679__$1,(4),ch);
} else {
if((state_val_20680 === (11))){
var inst_20659 = (state_20679[(2)]);
var state_20679__$1 = state_20679;
var statearr_20689_20713 = state_20679__$1;
(statearr_20689_20713[(2)] = inst_20659);

(statearr_20689_20713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (9))){
var inst_20649 = (state_20679[(9)]);
var inst_20661 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_20649,opts);
var state_20679__$1 = state_20679;
if(cljs.core.truth_(inst_20661)){
var statearr_20690_20714 = state_20679__$1;
(statearr_20690_20714[(1)] = (12));

} else {
var statearr_20691_20715 = state_20679__$1;
(statearr_20691_20715[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (5))){
var inst_20643 = (state_20679[(7)]);
var inst_20649 = (state_20679[(9)]);
var inst_20645 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_20646 = (new cljs.core.PersistentArrayMap(null,2,inst_20645,null));
var inst_20647 = (new cljs.core.PersistentHashSet(null,inst_20646,null));
var inst_20648 = figwheel.client.focus_msgs.call(null,inst_20647,inst_20643);
var inst_20649__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_20648);
var inst_20650 = cljs.core.first.call(null,inst_20648);
var inst_20651 = figwheel.client.reload_file_state_QMARK_.call(null,inst_20649__$1,opts);
var state_20679__$1 = (function (){var statearr_20692 = state_20679;
(statearr_20692[(8)] = inst_20650);

(statearr_20692[(9)] = inst_20649__$1);

return statearr_20692;
})();
if(cljs.core.truth_(inst_20651)){
var statearr_20693_20716 = state_20679__$1;
(statearr_20693_20716[(1)] = (8));

} else {
var statearr_20694_20717 = state_20679__$1;
(statearr_20694_20717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (14))){
var inst_20669 = (state_20679[(2)]);
var state_20679__$1 = state_20679;
var statearr_20695_20718 = state_20679__$1;
(statearr_20695_20718[(2)] = inst_20669);

(statearr_20695_20718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (10))){
var inst_20671 = (state_20679[(2)]);
var state_20679__$1 = (function (){var statearr_20696 = state_20679;
(statearr_20696[(10)] = inst_20671);

return statearr_20696;
})();
var statearr_20697_20719 = state_20679__$1;
(statearr_20697_20719[(2)] = null);

(statearr_20697_20719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (8))){
var inst_20650 = (state_20679[(8)]);
var inst_20653 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20654 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_20650);
var inst_20655 = cljs.core.async.timeout.call(null,(1000));
var inst_20656 = [inst_20654,inst_20655];
var inst_20657 = (new cljs.core.PersistentVector(null,2,(5),inst_20653,inst_20656,null));
var state_20679__$1 = state_20679;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20679__$1,(11),inst_20657);
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
});})(c__19052__auto___20705,ch))
;
return ((function (switch__19031__auto__,c__19052__auto___20705,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19032__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19032__auto____0 = (function (){
var statearr_20701 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20701[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19032__auto__);

(statearr_20701[(1)] = (1));

return statearr_20701;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19032__auto____1 = (function (state_20679){
while(true){
var ret_value__19033__auto__ = (function (){try{while(true){
var result__19034__auto__ = switch__19031__auto__.call(null,state_20679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19034__auto__;
}
break;
}
}catch (e20702){if((e20702 instanceof Object)){
var ex__19035__auto__ = e20702;
var statearr_20703_20720 = state_20679;
(statearr_20703_20720[(5)] = ex__19035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20721 = state_20679;
state_20679 = G__20721;
continue;
} else {
return ret_value__19033__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19032__auto__ = function(state_20679){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19032__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19032__auto____1.call(this,state_20679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19032__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19032__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19032__auto__;
})()
;})(switch__19031__auto__,c__19052__auto___20705,ch))
})();
var state__19054__auto__ = (function (){var statearr_20704 = f__19053__auto__.call(null);
(statearr_20704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19052__auto___20705);

return statearr_20704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19054__auto__);
});})(c__19052__auto___20705,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__20722_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__20722_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_20729 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_20729){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_20727 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_20728 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_20727,_STAR_print_newline_STAR_20728,base_path_20729){
return (function() { 
var G__20730__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__20730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20731__i = 0, G__20731__a = new Array(arguments.length -  0);
while (G__20731__i < G__20731__a.length) {G__20731__a[G__20731__i] = arguments[G__20731__i + 0]; ++G__20731__i;}
  args = new cljs.core.IndexedSeq(G__20731__a,0);
} 
return G__20730__delegate.call(this,args);};
G__20730.cljs$lang$maxFixedArity = 0;
G__20730.cljs$lang$applyTo = (function (arglist__20732){
var args = cljs.core.seq(arglist__20732);
return G__20730__delegate(args);
});
G__20730.cljs$core$IFn$_invoke$arity$variadic = G__20730__delegate;
return G__20730;
})()
;})(_STAR_print_fn_STAR_20727,_STAR_print_newline_STAR_20728,base_path_20729))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20728;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20727;
}}catch (e20726){if((e20726 instanceof Error)){
var e = e20726;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_20729], null));
} else {
var e = e20726;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_20729))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__20733){
var map__20738 = p__20733;
var map__20738__$1 = ((cljs.core.seq_QMARK_.call(null,map__20738))?cljs.core.apply.call(null,cljs.core.hash_map,map__20738):map__20738);
var opts = map__20738__$1;
var build_id = cljs.core.get.call(null,map__20738__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__20738,map__20738__$1,opts,build_id){
return (function (p__20739){
var vec__20740 = p__20739;
var map__20741 = cljs.core.nth.call(null,vec__20740,(0),null);
var map__20741__$1 = ((cljs.core.seq_QMARK_.call(null,map__20741))?cljs.core.apply.call(null,cljs.core.hash_map,map__20741):map__20741);
var msg = map__20741__$1;
var msg_name = cljs.core.get.call(null,map__20741__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20740,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__20740,map__20741,map__20741__$1,msg,msg_name,_,map__20738,map__20738__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__20740,map__20741,map__20741__$1,msg,msg_name,_,map__20738,map__20738__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__20738,map__20738__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__20745){
var vec__20746 = p__20745;
var map__20747 = cljs.core.nth.call(null,vec__20746,(0),null);
var map__20747__$1 = ((cljs.core.seq_QMARK_.call(null,map__20747))?cljs.core.apply.call(null,cljs.core.hash_map,map__20747):map__20747);
var msg = map__20747__$1;
var msg_name = cljs.core.get.call(null,map__20747__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20746,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__20748){
var map__20756 = p__20748;
var map__20756__$1 = ((cljs.core.seq_QMARK_.call(null,map__20756))?cljs.core.apply.call(null,cljs.core.hash_map,map__20756):map__20756);
var on_compile_warning = cljs.core.get.call(null,map__20756__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__20756__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__20756,map__20756__$1,on_compile_warning,on_compile_fail){
return (function (p__20757){
var vec__20758 = p__20757;
var map__20759 = cljs.core.nth.call(null,vec__20758,(0),null);
var map__20759__$1 = ((cljs.core.seq_QMARK_.call(null,map__20759))?cljs.core.apply.call(null,cljs.core.hash_map,map__20759):map__20759);
var msg = map__20759__$1;
var msg_name = cljs.core.get.call(null,map__20759__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20758,(1));
var pred__20760 = cljs.core._EQ_;
var expr__20761 = msg_name;
if(cljs.core.truth_(pred__20760.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__20761))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__20760.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__20761))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__20756,map__20756__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19052__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19053__auto__ = (function (){var switch__19031__auto__ = ((function (c__19052__auto__,msg_hist,msg_names,msg){
return (function (state_20962){
var state_val_20963 = (state_20962[(1)]);
if((state_val_20963 === (7))){
var inst_20896 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20964_21005 = state_20962__$1;
(statearr_20964_21005[(2)] = inst_20896);

(statearr_20964_21005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (20))){
var inst_20924 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_20962__$1 = state_20962;
if(cljs.core.truth_(inst_20924)){
var statearr_20965_21006 = state_20962__$1;
(statearr_20965_21006[(1)] = (22));

} else {
var statearr_20966_21007 = state_20962__$1;
(statearr_20966_21007[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (27))){
var inst_20936 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20937 = figwheel.client.heads_up.display_warning.call(null,inst_20936);
var state_20962__$1 = state_20962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20962__$1,(30),inst_20937);
} else {
if((state_val_20963 === (1))){
var inst_20884 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_20962__$1 = state_20962;
if(cljs.core.truth_(inst_20884)){
var statearr_20967_21008 = state_20962__$1;
(statearr_20967_21008[(1)] = (2));

} else {
var statearr_20968_21009 = state_20962__$1;
(statearr_20968_21009[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (24))){
var inst_20952 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20969_21010 = state_20962__$1;
(statearr_20969_21010[(2)] = inst_20952);

(statearr_20969_21010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (4))){
var inst_20960 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20962__$1,inst_20960);
} else {
if((state_val_20963 === (15))){
var inst_20912 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20913 = figwheel.client.format_messages.call(null,inst_20912);
var inst_20914 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20915 = figwheel.client.heads_up.display_error.call(null,inst_20913,inst_20914);
var state_20962__$1 = state_20962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20962__$1,(18),inst_20915);
} else {
if((state_val_20963 === (21))){
var inst_20954 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20970_21011 = state_20962__$1;
(statearr_20970_21011[(2)] = inst_20954);

(statearr_20970_21011[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (31))){
var inst_20943 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20962__$1 = state_20962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20962__$1,(34),inst_20943);
} else {
if((state_val_20963 === (32))){
var state_20962__$1 = state_20962;
var statearr_20971_21012 = state_20962__$1;
(statearr_20971_21012[(2)] = null);

(statearr_20971_21012[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (33))){
var inst_20948 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20972_21013 = state_20962__$1;
(statearr_20972_21013[(2)] = inst_20948);

(statearr_20972_21013[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (13))){
var inst_20902 = (state_20962[(2)]);
var inst_20903 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20904 = figwheel.client.format_messages.call(null,inst_20903);
var inst_20905 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20906 = figwheel.client.heads_up.display_error.call(null,inst_20904,inst_20905);
var state_20962__$1 = (function (){var statearr_20973 = state_20962;
(statearr_20973[(7)] = inst_20902);

return statearr_20973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20962__$1,(14),inst_20906);
} else {
if((state_val_20963 === (22))){
var inst_20926 = figwheel.client.heads_up.clear.call(null);
var state_20962__$1 = state_20962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20962__$1,(25),inst_20926);
} else {
if((state_val_20963 === (29))){
var inst_20950 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20974_21014 = state_20962__$1;
(statearr_20974_21014[(2)] = inst_20950);

(statearr_20974_21014[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (6))){
var inst_20892 = figwheel.client.heads_up.clear.call(null);
var state_20962__$1 = state_20962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20962__$1,(9),inst_20892);
} else {
if((state_val_20963 === (28))){
var inst_20941 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_20962__$1 = state_20962;
if(cljs.core.truth_(inst_20941)){
var statearr_20975_21015 = state_20962__$1;
(statearr_20975_21015[(1)] = (31));

} else {
var statearr_20976_21016 = state_20962__$1;
(statearr_20976_21016[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (25))){
var inst_20928 = (state_20962[(2)]);
var inst_20929 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20930 = figwheel.client.heads_up.display_warning.call(null,inst_20929);
var state_20962__$1 = (function (){var statearr_20977 = state_20962;
(statearr_20977[(8)] = inst_20928);

return statearr_20977;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20962__$1,(26),inst_20930);
} else {
if((state_val_20963 === (34))){
var inst_20945 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20978_21017 = state_20962__$1;
(statearr_20978_21017[(2)] = inst_20945);

(statearr_20978_21017[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (17))){
var inst_20956 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20979_21018 = state_20962__$1;
(statearr_20979_21018[(2)] = inst_20956);

(statearr_20979_21018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (3))){
var inst_20898 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_20962__$1 = state_20962;
if(cljs.core.truth_(inst_20898)){
var statearr_20980_21019 = state_20962__$1;
(statearr_20980_21019[(1)] = (10));

} else {
var statearr_20981_21020 = state_20962__$1;
(statearr_20981_21020[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (12))){
var inst_20958 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20982_21021 = state_20962__$1;
(statearr_20982_21021[(2)] = inst_20958);

(statearr_20982_21021[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (2))){
var inst_20886 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_20962__$1 = state_20962;
if(cljs.core.truth_(inst_20886)){
var statearr_20983_21022 = state_20962__$1;
(statearr_20983_21022[(1)] = (5));

} else {
var statearr_20984_21023 = state_20962__$1;
(statearr_20984_21023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (23))){
var inst_20934 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_20962__$1 = state_20962;
if(cljs.core.truth_(inst_20934)){
var statearr_20985_21024 = state_20962__$1;
(statearr_20985_21024[(1)] = (27));

} else {
var statearr_20986_21025 = state_20962__$1;
(statearr_20986_21025[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (19))){
var inst_20921 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20922 = figwheel.client.heads_up.append_message.call(null,inst_20921);
var state_20962__$1 = state_20962;
var statearr_20987_21026 = state_20962__$1;
(statearr_20987_21026[(2)] = inst_20922);

(statearr_20987_21026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (11))){
var inst_20910 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_20962__$1 = state_20962;
if(cljs.core.truth_(inst_20910)){
var statearr_20988_21027 = state_20962__$1;
(statearr_20988_21027[(1)] = (15));

} else {
var statearr_20989_21028 = state_20962__$1;
(statearr_20989_21028[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (9))){
var inst_20894 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20990_21029 = state_20962__$1;
(statearr_20990_21029[(2)] = inst_20894);

(statearr_20990_21029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (5))){
var inst_20888 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20962__$1 = state_20962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20962__$1,(8),inst_20888);
} else {
if((state_val_20963 === (14))){
var inst_20908 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20991_21030 = state_20962__$1;
(statearr_20991_21030[(2)] = inst_20908);

(statearr_20991_21030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (26))){
var inst_20932 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20992_21031 = state_20962__$1;
(statearr_20992_21031[(2)] = inst_20932);

(statearr_20992_21031[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (16))){
var inst_20919 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_20962__$1 = state_20962;
if(cljs.core.truth_(inst_20919)){
var statearr_20993_21032 = state_20962__$1;
(statearr_20993_21032[(1)] = (19));

} else {
var statearr_20994_21033 = state_20962__$1;
(statearr_20994_21033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (30))){
var inst_20939 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20995_21034 = state_20962__$1;
(statearr_20995_21034[(2)] = inst_20939);

(statearr_20995_21034[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (10))){
var inst_20900 = figwheel.client.heads_up.clear.call(null);
var state_20962__$1 = state_20962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20962__$1,(13),inst_20900);
} else {
if((state_val_20963 === (18))){
var inst_20917 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20996_21035 = state_20962__$1;
(statearr_20996_21035[(2)] = inst_20917);

(statearr_20996_21035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20963 === (8))){
var inst_20890 = (state_20962[(2)]);
var state_20962__$1 = state_20962;
var statearr_20997_21036 = state_20962__$1;
(statearr_20997_21036[(2)] = inst_20890);

(statearr_20997_21036[(1)] = (7));


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
});})(c__19052__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19031__auto__,c__19052__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto____0 = (function (){
var statearr_21001 = [null,null,null,null,null,null,null,null,null];
(statearr_21001[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto__);

(statearr_21001[(1)] = (1));

return statearr_21001;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto____1 = (function (state_20962){
while(true){
var ret_value__19033__auto__ = (function (){try{while(true){
var result__19034__auto__ = switch__19031__auto__.call(null,state_20962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19034__auto__;
}
break;
}
}catch (e21002){if((e21002 instanceof Object)){
var ex__19035__auto__ = e21002;
var statearr_21003_21037 = state_20962;
(statearr_21003_21037[(5)] = ex__19035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21038 = state_20962;
state_20962 = G__21038;
continue;
} else {
return ret_value__19033__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto__ = function(state_20962){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto____1.call(this,state_20962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19032__auto__;
})()
;})(switch__19031__auto__,c__19052__auto__,msg_hist,msg_names,msg))
})();
var state__19054__auto__ = (function (){var statearr_21004 = f__19053__auto__.call(null);
(statearr_21004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19052__auto__);

return statearr_21004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19054__auto__);
});})(c__19052__auto__,msg_hist,msg_names,msg))
);

return c__19052__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19052__auto___21101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19052__auto___21101,ch){
return (function (){
var f__19053__auto__ = (function (){var switch__19031__auto__ = ((function (c__19052__auto___21101,ch){
return (function (state_21084){
var state_val_21085 = (state_21084[(1)]);
if((state_val_21085 === (1))){
var state_21084__$1 = state_21084;
var statearr_21086_21102 = state_21084__$1;
(statearr_21086_21102[(2)] = null);

(statearr_21086_21102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21085 === (2))){
var state_21084__$1 = state_21084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21084__$1,(4),ch);
} else {
if((state_val_21085 === (3))){
var inst_21082 = (state_21084[(2)]);
var state_21084__$1 = state_21084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21084__$1,inst_21082);
} else {
if((state_val_21085 === (4))){
var inst_21072 = (state_21084[(7)]);
var inst_21072__$1 = (state_21084[(2)]);
var state_21084__$1 = (function (){var statearr_21087 = state_21084;
(statearr_21087[(7)] = inst_21072__$1);

return statearr_21087;
})();
if(cljs.core.truth_(inst_21072__$1)){
var statearr_21088_21103 = state_21084__$1;
(statearr_21088_21103[(1)] = (5));

} else {
var statearr_21089_21104 = state_21084__$1;
(statearr_21089_21104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21085 === (5))){
var inst_21072 = (state_21084[(7)]);
var inst_21074 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_21072);
var state_21084__$1 = state_21084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21084__$1,(8),inst_21074);
} else {
if((state_val_21085 === (6))){
var state_21084__$1 = state_21084;
var statearr_21090_21105 = state_21084__$1;
(statearr_21090_21105[(2)] = null);

(statearr_21090_21105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21085 === (7))){
var inst_21080 = (state_21084[(2)]);
var state_21084__$1 = state_21084;
var statearr_21091_21106 = state_21084__$1;
(statearr_21091_21106[(2)] = inst_21080);

(statearr_21091_21106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21085 === (8))){
var inst_21076 = (state_21084[(2)]);
var state_21084__$1 = (function (){var statearr_21092 = state_21084;
(statearr_21092[(8)] = inst_21076);

return statearr_21092;
})();
var statearr_21093_21107 = state_21084__$1;
(statearr_21093_21107[(2)] = null);

(statearr_21093_21107[(1)] = (2));


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
});})(c__19052__auto___21101,ch))
;
return ((function (switch__19031__auto__,c__19052__auto___21101,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19032__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19032__auto____0 = (function (){
var statearr_21097 = [null,null,null,null,null,null,null,null,null];
(statearr_21097[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19032__auto__);

(statearr_21097[(1)] = (1));

return statearr_21097;
});
var figwheel$client$heads_up_plugin_$_state_machine__19032__auto____1 = (function (state_21084){
while(true){
var ret_value__19033__auto__ = (function (){try{while(true){
var result__19034__auto__ = switch__19031__auto__.call(null,state_21084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19034__auto__;
}
break;
}
}catch (e21098){if((e21098 instanceof Object)){
var ex__19035__auto__ = e21098;
var statearr_21099_21108 = state_21084;
(statearr_21099_21108[(5)] = ex__19035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21109 = state_21084;
state_21084 = G__21109;
continue;
} else {
return ret_value__19033__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19032__auto__ = function(state_21084){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19032__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19032__auto____1.call(this,state_21084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19032__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19032__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19032__auto__;
})()
;})(switch__19031__auto__,c__19052__auto___21101,ch))
})();
var state__19054__auto__ = (function (){var statearr_21100 = f__19053__auto__.call(null);
(statearr_21100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19052__auto___21101);

return statearr_21100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19054__auto__);
});})(c__19052__auto___21101,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19052__auto__){
return (function (){
var f__19053__auto__ = (function (){var switch__19031__auto__ = ((function (c__19052__auto__){
return (function (state_21130){
var state_val_21131 = (state_21130[(1)]);
if((state_val_21131 === (1))){
var inst_21125 = cljs.core.async.timeout.call(null,(3000));
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21130__$1,(2),inst_21125);
} else {
if((state_val_21131 === (2))){
var inst_21127 = (state_21130[(2)]);
var inst_21128 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_21130__$1 = (function (){var statearr_21132 = state_21130;
(statearr_21132[(7)] = inst_21127);

return statearr_21132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21130__$1,inst_21128);
} else {
return null;
}
}
});})(c__19052__auto__))
;
return ((function (switch__19031__auto__,c__19052__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19032__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19032__auto____0 = (function (){
var statearr_21136 = [null,null,null,null,null,null,null,null];
(statearr_21136[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19032__auto__);

(statearr_21136[(1)] = (1));

return statearr_21136;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19032__auto____1 = (function (state_21130){
while(true){
var ret_value__19033__auto__ = (function (){try{while(true){
var result__19034__auto__ = switch__19031__auto__.call(null,state_21130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19034__auto__;
}
break;
}
}catch (e21137){if((e21137 instanceof Object)){
var ex__19035__auto__ = e21137;
var statearr_21138_21140 = state_21130;
(statearr_21138_21140[(5)] = ex__19035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21141 = state_21130;
state_21130 = G__21141;
continue;
} else {
return ret_value__19033__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19032__auto__ = function(state_21130){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19032__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19032__auto____1.call(this,state_21130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19032__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19032__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19032__auto__;
})()
;})(switch__19031__auto__,c__19052__auto__))
})();
var state__19054__auto__ = (function (){var statearr_21139 = f__19053__auto__.call(null);
(statearr_21139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19052__auto__);

return statearr_21139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19054__auto__);
});})(c__19052__auto__))
);

return c__19052__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__21142){
var map__21148 = p__21142;
var map__21148__$1 = ((cljs.core.seq_QMARK_.call(null,map__21148))?cljs.core.apply.call(null,cljs.core.hash_map,map__21148):map__21148);
var ed = map__21148__$1;
var formatted_exception = cljs.core.get.call(null,map__21148__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__21148__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__21148__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__21149_21153 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21150_21154 = null;
var count__21151_21155 = (0);
var i__21152_21156 = (0);
while(true){
if((i__21152_21156 < count__21151_21155)){
var msg_21157 = cljs.core._nth.call(null,chunk__21150_21154,i__21152_21156);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21157);

var G__21158 = seq__21149_21153;
var G__21159 = chunk__21150_21154;
var G__21160 = count__21151_21155;
var G__21161 = (i__21152_21156 + (1));
seq__21149_21153 = G__21158;
chunk__21150_21154 = G__21159;
count__21151_21155 = G__21160;
i__21152_21156 = G__21161;
continue;
} else {
var temp__4425__auto___21162 = cljs.core.seq.call(null,seq__21149_21153);
if(temp__4425__auto___21162){
var seq__21149_21163__$1 = temp__4425__auto___21162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21149_21163__$1)){
var c__16894__auto___21164 = cljs.core.chunk_first.call(null,seq__21149_21163__$1);
var G__21165 = cljs.core.chunk_rest.call(null,seq__21149_21163__$1);
var G__21166 = c__16894__auto___21164;
var G__21167 = cljs.core.count.call(null,c__16894__auto___21164);
var G__21168 = (0);
seq__21149_21153 = G__21165;
chunk__21150_21154 = G__21166;
count__21151_21155 = G__21167;
i__21152_21156 = G__21168;
continue;
} else {
var msg_21169 = cljs.core.first.call(null,seq__21149_21163__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21169);

var G__21170 = cljs.core.next.call(null,seq__21149_21163__$1);
var G__21171 = null;
var G__21172 = (0);
var G__21173 = (0);
seq__21149_21153 = G__21170;
chunk__21150_21154 = G__21171;
count__21151_21155 = G__21172;
i__21152_21156 = G__21173;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__21174){
var map__21176 = p__21174;
var map__21176__$1 = ((cljs.core.seq_QMARK_.call(null,map__21176))?cljs.core.apply.call(null,cljs.core.hash_map,map__21176):map__21176);
var w = map__21176__$1;
var message = cljs.core.get.call(null,map__21176__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16097__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16097__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16097__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__21183 = cljs.core.seq.call(null,plugins);
var chunk__21184 = null;
var count__21185 = (0);
var i__21186 = (0);
while(true){
if((i__21186 < count__21185)){
var vec__21187 = cljs.core._nth.call(null,chunk__21184,i__21186);
var k = cljs.core.nth.call(null,vec__21187,(0),null);
var plugin = cljs.core.nth.call(null,vec__21187,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21189 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21183,chunk__21184,count__21185,i__21186,pl_21189,vec__21187,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_21189.call(null,msg_hist);
});})(seq__21183,chunk__21184,count__21185,i__21186,pl_21189,vec__21187,k,plugin))
);
} else {
}

var G__21190 = seq__21183;
var G__21191 = chunk__21184;
var G__21192 = count__21185;
var G__21193 = (i__21186 + (1));
seq__21183 = G__21190;
chunk__21184 = G__21191;
count__21185 = G__21192;
i__21186 = G__21193;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21183);
if(temp__4425__auto__){
var seq__21183__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21183__$1)){
var c__16894__auto__ = cljs.core.chunk_first.call(null,seq__21183__$1);
var G__21194 = cljs.core.chunk_rest.call(null,seq__21183__$1);
var G__21195 = c__16894__auto__;
var G__21196 = cljs.core.count.call(null,c__16894__auto__);
var G__21197 = (0);
seq__21183 = G__21194;
chunk__21184 = G__21195;
count__21185 = G__21196;
i__21186 = G__21197;
continue;
} else {
var vec__21188 = cljs.core.first.call(null,seq__21183__$1);
var k = cljs.core.nth.call(null,vec__21188,(0),null);
var plugin = cljs.core.nth.call(null,vec__21188,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21198 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21183,chunk__21184,count__21185,i__21186,pl_21198,vec__21188,k,plugin,seq__21183__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_21198.call(null,msg_hist);
});})(seq__21183,chunk__21184,count__21185,i__21186,pl_21198,vec__21188,k,plugin,seq__21183__$1,temp__4425__auto__))
);
} else {
}

var G__21199 = cljs.core.next.call(null,seq__21183__$1);
var G__21200 = null;
var G__21201 = (0);
var G__21202 = (0);
seq__21183 = G__21199;
chunk__21184 = G__21200;
count__21185 = G__21201;
i__21186 = G__21202;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__21204 = arguments.length;
switch (G__21204) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17149__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17149__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__21207){
var map__21208 = p__21207;
var map__21208__$1 = ((cljs.core.seq_QMARK_.call(null,map__21208))?cljs.core.apply.call(null,cljs.core.hash_map,map__21208):map__21208);
var opts = map__21208__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq21206){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21206));
});

//# sourceMappingURL=client.js.map