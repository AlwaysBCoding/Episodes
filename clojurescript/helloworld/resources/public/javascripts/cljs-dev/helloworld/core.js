// Compiled by ClojureScript 0.0-3308 {}
goog.provide('helloworld.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('helloworld.title');
goog.require('cljs.core.async');
helloworld.core.EVENTCHANNEL = cljs.core.async.chan.call(null);
if(typeof helloworld.core.app_state !== 'undefined'){
} else {
helloworld.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello from App State",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 3"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 4"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 5"], null)], null),new cljs.core.Keyword(null,"active-item","active-item",-1265645988),cljs.core.PersistentArrayMap.EMPTY], null));
}
helloworld.core.EVENTS = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),(function (p__19550){
var map__19551 = p__19550;
var map__19551__$1 = ((cljs.core.seq_QMARK_.call(null,map__19551))?cljs.core.apply.call(null,cljs.core.hash_map,map__19551):map__19551);
var active_item = cljs.core.get.call(null,map__19551__$1,new cljs.core.Keyword(null,"active-item","active-item",-1265645988));
return cljs.core.swap_BANG_.call(null,helloworld.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988)], null),active_item);
})], null);
var c__19053__auto___19584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19053__auto___19584){
return (function (){
var f__19054__auto__ = (function (){var switch__19032__auto__ = ((function (c__19053__auto___19584){
return (function (state_19568){
var state_val_19569 = (state_19568[(1)]);
if((state_val_19569 === (1))){
var state_19568__$1 = state_19568;
var statearr_19570_19585 = state_19568__$1;
(statearr_19570_19585[(2)] = null);

(statearr_19570_19585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (2))){
var state_19568__$1 = state_19568;
var statearr_19571_19586 = state_19568__$1;
(statearr_19571_19586[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (3))){
var inst_19566 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19568__$1,inst_19566);
} else {
if((state_val_19569 === (4))){
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19568__$1,(7),helloworld.core.EVENTCHANNEL);
} else {
if((state_val_19569 === (5))){
var state_19568__$1 = state_19568;
var statearr_19573_19587 = state_19568__$1;
(statearr_19573_19587[(2)] = null);

(statearr_19573_19587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (6))){
var inst_19564 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19574_19588 = state_19568__$1;
(statearr_19574_19588[(2)] = inst_19564);

(statearr_19574_19588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (7))){
var inst_19556 = (state_19568[(2)]);
var inst_19557 = cljs.core.nth.call(null,inst_19556,(0),null);
var inst_19558 = cljs.core.nth.call(null,inst_19556,(1),null);
var inst_19559 = inst_19557.call(null,helloworld.core.EVENTS);
var inst_19560 = inst_19559.call(null,inst_19558);
var state_19568__$1 = (function (){var statearr_19575 = state_19568;
(statearr_19575[(7)] = inst_19560);

return statearr_19575;
})();
var statearr_19576_19589 = state_19568__$1;
(statearr_19576_19589[(2)] = null);

(statearr_19576_19589[(1)] = (2));


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
});})(c__19053__auto___19584))
;
return ((function (switch__19032__auto__,c__19053__auto___19584){
return (function() {
var helloworld$core$state_machine__19033__auto__ = null;
var helloworld$core$state_machine__19033__auto____0 = (function (){
var statearr_19580 = [null,null,null,null,null,null,null,null];
(statearr_19580[(0)] = helloworld$core$state_machine__19033__auto__);

(statearr_19580[(1)] = (1));

return statearr_19580;
});
var helloworld$core$state_machine__19033__auto____1 = (function (state_19568){
while(true){
var ret_value__19034__auto__ = (function (){try{while(true){
var result__19035__auto__ = switch__19032__auto__.call(null,state_19568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19035__auto__;
}
break;
}
}catch (e19581){if((e19581 instanceof Object)){
var ex__19036__auto__ = e19581;
var statearr_19582_19590 = state_19568;
(statearr_19582_19590[(5)] = ex__19036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19591 = state_19568;
state_19568 = G__19591;
continue;
} else {
return ret_value__19034__auto__;
}
break;
}
});
helloworld$core$state_machine__19033__auto__ = function(state_19568){
switch(arguments.length){
case 0:
return helloworld$core$state_machine__19033__auto____0.call(this);
case 1:
return helloworld$core$state_machine__19033__auto____1.call(this,state_19568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
helloworld$core$state_machine__19033__auto__.cljs$core$IFn$_invoke$arity$0 = helloworld$core$state_machine__19033__auto____0;
helloworld$core$state_machine__19033__auto__.cljs$core$IFn$_invoke$arity$1 = helloworld$core$state_machine__19033__auto____1;
return helloworld$core$state_machine__19033__auto__;
})()
;})(switch__19032__auto__,c__19053__auto___19584))
})();
var state__19055__auto__ = (function (){var statearr_19583 = f__19054__auto__.call(null);
(statearr_19583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19053__auto___19584);

return statearr_19583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19055__auto__);
});})(c__19053__auto___19584))
);

helloworld.core.header = (function helloworld$core$header(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return cljs.core.swap_BANG_.call(null,helloworld.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),"Another New Message");
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),message], null)], null);
});
helloworld.core.app = (function helloworld$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.header,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.title.items_list,helloworld.core.EVENTCHANNEL,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state)),new cljs.core.Keyword(null,"active-item","active-item",-1265645988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state))], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.app], null),document.querySelector("#cljs-target"));

//# sourceMappingURL=core.js.map