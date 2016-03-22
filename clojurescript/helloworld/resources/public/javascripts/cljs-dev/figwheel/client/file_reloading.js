// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__21626_SHARP_,p2__21627_SHARP_){
var and__16097__auto__ = p1__21626_SHARP_;
if(cljs.core.truth_(and__16097__auto__)){
return p2__21627_SHARP_;
} else {
return and__16097__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16109__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16109__auto__){
return or__16109__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16109__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16109__auto__){
return or__16109__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16109__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17008__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17008__auto__,method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__21628){
var map__21629 = p__21628;
var map__21629__$1 = ((cljs.core.seq_QMARK_.call(null,map__21629))?cljs.core.apply.call(null,cljs.core.hash_map,map__21629):map__21629);
var file = cljs.core.get.call(null,map__21629__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__21630){
var map__21631 = p__21630;
var map__21631__$1 = ((cljs.core.seq_QMARK_.call(null,map__21631))?cljs.core.apply.call(null,cljs.core.hash_map,map__21631):map__21631);
var namespace = cljs.core.get.call(null,map__21631__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17008__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17008__auto__,method_table__17004__auto__,prefer_table__17005__auto__,method_cache__17006__auto__,cached_hierarchy__17007__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e21632){if((e21632 instanceof Error)){
var e = e21632;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21632;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__21634 = arguments.length;
switch (G__21634) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21636,callback){
var map__21638 = p__21636;
var map__21638__$1 = ((cljs.core.seq_QMARK_.call(null,map__21638))?cljs.core.apply.call(null,cljs.core.hash_map,map__21638):map__21638);
var file_msg = map__21638__$1;
var request_url = cljs.core.get.call(null,map__21638__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21638,map__21638__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21638,map__21638__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21639){
var map__21641 = p__21639;
var map__21641__$1 = ((cljs.core.seq_QMARK_.call(null,map__21641))?cljs.core.apply.call(null,cljs.core.hash_map,map__21641):map__21641);
var file_msg = map__21641__$1;
var namespace = cljs.core.get.call(null,map__21641__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__21641__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16109__auto__ = meta_data;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16097__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16097__auto__){
var or__16109__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
var or__16109__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16109__auto____$1)){
return or__16109__auto____$1;
} else {
var and__16097__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16097__auto____$1){
var or__16109__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16109__auto____$2){
return or__16109__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16097__auto____$1;
}
}
}
} else {
return and__16097__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21642,callback){
var map__21644 = p__21642;
var map__21644__$1 = ((cljs.core.seq_QMARK_.call(null,map__21644))?cljs.core.apply.call(null,cljs.core.hash_map,map__21644):map__21644);
var file_msg = map__21644__$1;
var request_url = cljs.core.get.call(null,map__21644__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19052__auto___21731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19052__auto___21731,out){
return (function (){
var f__19053__auto__ = (function (){var switch__19031__auto__ = ((function (c__19052__auto___21731,out){
return (function (state_21713){
var state_val_21714 = (state_21713[(1)]);
if((state_val_21714 === (1))){
var inst_21691 = cljs.core.nth.call(null,files,(0),null);
var inst_21692 = cljs.core.nthnext.call(null,files,(1));
var inst_21693 = files;
var state_21713__$1 = (function (){var statearr_21715 = state_21713;
(statearr_21715[(7)] = inst_21693);

(statearr_21715[(8)] = inst_21691);

(statearr_21715[(9)] = inst_21692);

return statearr_21715;
})();
var statearr_21716_21732 = state_21713__$1;
(statearr_21716_21732[(2)] = null);

(statearr_21716_21732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21714 === (2))){
var inst_21693 = (state_21713[(7)]);
var inst_21696 = (state_21713[(10)]);
var inst_21696__$1 = cljs.core.nth.call(null,inst_21693,(0),null);
var inst_21697 = cljs.core.nthnext.call(null,inst_21693,(1));
var inst_21698 = (inst_21696__$1 == null);
var inst_21699 = cljs.core.not.call(null,inst_21698);
var state_21713__$1 = (function (){var statearr_21717 = state_21713;
(statearr_21717[(11)] = inst_21697);

(statearr_21717[(10)] = inst_21696__$1);

return statearr_21717;
})();
if(inst_21699){
var statearr_21718_21733 = state_21713__$1;
(statearr_21718_21733[(1)] = (4));

} else {
var statearr_21719_21734 = state_21713__$1;
(statearr_21719_21734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21714 === (3))){
var inst_21711 = (state_21713[(2)]);
var state_21713__$1 = state_21713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21713__$1,inst_21711);
} else {
if((state_val_21714 === (4))){
var inst_21696 = (state_21713[(10)]);
var inst_21701 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21696);
var state_21713__$1 = state_21713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21713__$1,(7),inst_21701);
} else {
if((state_val_21714 === (5))){
var inst_21707 = cljs.core.async.close_BANG_.call(null,out);
var state_21713__$1 = state_21713;
var statearr_21720_21735 = state_21713__$1;
(statearr_21720_21735[(2)] = inst_21707);

(statearr_21720_21735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21714 === (6))){
var inst_21709 = (state_21713[(2)]);
var state_21713__$1 = state_21713;
var statearr_21721_21736 = state_21713__$1;
(statearr_21721_21736[(2)] = inst_21709);

(statearr_21721_21736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21714 === (7))){
var inst_21697 = (state_21713[(11)]);
var inst_21703 = (state_21713[(2)]);
var inst_21704 = cljs.core.async.put_BANG_.call(null,out,inst_21703);
var inst_21693 = inst_21697;
var state_21713__$1 = (function (){var statearr_21722 = state_21713;
(statearr_21722[(7)] = inst_21693);

(statearr_21722[(12)] = inst_21704);

return statearr_21722;
})();
var statearr_21723_21737 = state_21713__$1;
(statearr_21723_21737[(2)] = null);

(statearr_21723_21737[(1)] = (2));


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
});})(c__19052__auto___21731,out))
;
return ((function (switch__19031__auto__,c__19052__auto___21731,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto____0 = (function (){
var statearr_21727 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21727[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto__);

(statearr_21727[(1)] = (1));

return statearr_21727;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto____1 = (function (state_21713){
while(true){
var ret_value__19033__auto__ = (function (){try{while(true){
var result__19034__auto__ = switch__19031__auto__.call(null,state_21713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19034__auto__;
}
break;
}
}catch (e21728){if((e21728 instanceof Object)){
var ex__19035__auto__ = e21728;
var statearr_21729_21738 = state_21713;
(statearr_21729_21738[(5)] = ex__19035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21739 = state_21713;
state_21713 = G__21739;
continue;
} else {
return ret_value__19033__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto__ = function(state_21713){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto____1.call(this,state_21713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19032__auto__;
})()
;})(switch__19031__auto__,c__19052__auto___21731,out))
})();
var state__19054__auto__ = (function (){var statearr_21730 = f__19053__auto__.call(null);
(statearr_21730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19052__auto___21731);

return statearr_21730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19054__auto__);
});})(c__19052__auto___21731,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__21740,p__21741){
var map__21744 = p__21740;
var map__21744__$1 = ((cljs.core.seq_QMARK_.call(null,map__21744))?cljs.core.apply.call(null,cljs.core.hash_map,map__21744):map__21744);
var opts = map__21744__$1;
var url_rewriter = cljs.core.get.call(null,map__21744__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__21745 = p__21741;
var map__21745__$1 = ((cljs.core.seq_QMARK_.call(null,map__21745))?cljs.core.apply.call(null,cljs.core.hash_map,map__21745):map__21745);
var file_msg = map__21745__$1;
var file = cljs.core.get.call(null,map__21745__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21746,opts){
var map__21749 = p__21746;
var map__21749__$1 = ((cljs.core.seq_QMARK_.call(null,map__21749))?cljs.core.apply.call(null,cljs.core.hash_map,map__21749):map__21749);
var eval_body__$1 = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21749__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16097__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16097__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16097__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e21750){var e = e21750;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21755,p__21756){
var map__21958 = p__21755;
var map__21958__$1 = ((cljs.core.seq_QMARK_.call(null,map__21958))?cljs.core.apply.call(null,cljs.core.hash_map,map__21958):map__21958);
var opts = map__21958__$1;
var before_jsload = cljs.core.get.call(null,map__21958__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21958__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__21958__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__21959 = p__21756;
var map__21959__$1 = ((cljs.core.seq_QMARK_.call(null,map__21959))?cljs.core.apply.call(null,cljs.core.hash_map,map__21959):map__21959);
var msg = map__21959__$1;
var files = cljs.core.get.call(null,map__21959__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files){
return (function (){
var f__19053__auto__ = (function (){var switch__19031__auto__ = ((function (c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files){
return (function (state_22084){
var state_val_22085 = (state_22084[(1)]);
if((state_val_22085 === (7))){
var inst_21973 = (state_22084[(7)]);
var inst_21971 = (state_22084[(8)]);
var inst_21974 = (state_22084[(9)]);
var inst_21972 = (state_22084[(10)]);
var inst_21979 = cljs.core._nth.call(null,inst_21972,inst_21974);
var inst_21980 = figwheel.client.file_reloading.eval_body.call(null,inst_21979,opts);
var inst_21981 = (inst_21974 + (1));
var tmp22086 = inst_21973;
var tmp22087 = inst_21971;
var tmp22088 = inst_21972;
var inst_21971__$1 = tmp22087;
var inst_21972__$1 = tmp22088;
var inst_21973__$1 = tmp22086;
var inst_21974__$1 = inst_21981;
var state_22084__$1 = (function (){var statearr_22089 = state_22084;
(statearr_22089[(7)] = inst_21973__$1);

(statearr_22089[(8)] = inst_21971__$1);

(statearr_22089[(11)] = inst_21980);

(statearr_22089[(9)] = inst_21974__$1);

(statearr_22089[(10)] = inst_21972__$1);

return statearr_22089;
})();
var statearr_22090_22159 = state_22084__$1;
(statearr_22090_22159[(2)] = null);

(statearr_22090_22159[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (20))){
var inst_22017 = (state_22084[(12)]);
var inst_22023 = (state_22084[(13)]);
var inst_22016 = (state_22084[(14)]);
var inst_22020 = (state_22084[(15)]);
var inst_22021 = (state_22084[(16)]);
var inst_22026 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22028 = (function (){var all_files = inst_22016;
var files_SINGLEQUOTE_ = inst_22017;
var res_SINGLEQUOTE_ = inst_22020;
var res = inst_22021;
var files_not_loaded = inst_22023;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22017,inst_22023,inst_22016,inst_22020,inst_22021,inst_22026,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files){
return (function (p__22027){
var map__22091 = p__22027;
var map__22091__$1 = ((cljs.core.seq_QMARK_.call(null,map__22091))?cljs.core.apply.call(null,cljs.core.hash_map,map__22091):map__22091);
var namespace = cljs.core.get.call(null,map__22091__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22091__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22017,inst_22023,inst_22016,inst_22020,inst_22021,inst_22026,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files))
})();
var inst_22029 = cljs.core.map.call(null,inst_22028,inst_22021);
var inst_22030 = cljs.core.pr_str.call(null,inst_22029);
var inst_22031 = figwheel.client.utils.log.call(null,inst_22030);
var inst_22032 = (function (){var all_files = inst_22016;
var files_SINGLEQUOTE_ = inst_22017;
var res_SINGLEQUOTE_ = inst_22020;
var res = inst_22021;
var files_not_loaded = inst_22023;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22017,inst_22023,inst_22016,inst_22020,inst_22021,inst_22026,inst_22028,inst_22029,inst_22030,inst_22031,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22017,inst_22023,inst_22016,inst_22020,inst_22021,inst_22026,inst_22028,inst_22029,inst_22030,inst_22031,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files))
})();
var inst_22033 = setTimeout(inst_22032,(10));
var state_22084__$1 = (function (){var statearr_22092 = state_22084;
(statearr_22092[(17)] = inst_22026);

(statearr_22092[(18)] = inst_22031);

return statearr_22092;
})();
var statearr_22093_22160 = state_22084__$1;
(statearr_22093_22160[(2)] = inst_22033);

(statearr_22093_22160[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (27))){
var inst_22043 = (state_22084[(19)]);
var state_22084__$1 = state_22084;
var statearr_22094_22161 = state_22084__$1;
(statearr_22094_22161[(2)] = inst_22043);

(statearr_22094_22161[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (1))){
var inst_21963 = (state_22084[(20)]);
var inst_21960 = before_jsload.call(null,files);
var inst_21961 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21962 = (function (){return ((function (inst_21963,inst_21960,inst_21961,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files){
return (function (p1__21751_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21751_SHARP_);
});
;})(inst_21963,inst_21960,inst_21961,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files))
})();
var inst_21963__$1 = cljs.core.filter.call(null,inst_21962,files);
var inst_21964 = cljs.core.not_empty.call(null,inst_21963__$1);
var state_22084__$1 = (function (){var statearr_22095 = state_22084;
(statearr_22095[(21)] = inst_21961);

(statearr_22095[(20)] = inst_21963__$1);

(statearr_22095[(22)] = inst_21960);

return statearr_22095;
})();
if(cljs.core.truth_(inst_21964)){
var statearr_22096_22162 = state_22084__$1;
(statearr_22096_22162[(1)] = (2));

} else {
var statearr_22097_22163 = state_22084__$1;
(statearr_22097_22163[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (24))){
var state_22084__$1 = state_22084;
var statearr_22098_22164 = state_22084__$1;
(statearr_22098_22164[(2)] = null);

(statearr_22098_22164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (4))){
var inst_22008 = (state_22084[(2)]);
var inst_22009 = (function (){return ((function (inst_22008,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files){
return (function (p1__21752_SHARP_){
var and__16097__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21752_SHARP_);
if(cljs.core.truth_(and__16097__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21752_SHARP_));
} else {
return and__16097__auto__;
}
});
;})(inst_22008,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files))
})();
var inst_22010 = cljs.core.filter.call(null,inst_22009,files);
var state_22084__$1 = (function (){var statearr_22099 = state_22084;
(statearr_22099[(23)] = inst_22010);

(statearr_22099[(24)] = inst_22008);

return statearr_22099;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_22100_22165 = state_22084__$1;
(statearr_22100_22165[(1)] = (16));

} else {
var statearr_22101_22166 = state_22084__$1;
(statearr_22101_22166[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (15))){
var inst_21998 = (state_22084[(2)]);
var state_22084__$1 = state_22084;
var statearr_22102_22167 = state_22084__$1;
(statearr_22102_22167[(2)] = inst_21998);

(statearr_22102_22167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (21))){
var state_22084__$1 = state_22084;
var statearr_22103_22168 = state_22084__$1;
(statearr_22103_22168[(2)] = null);

(statearr_22103_22168[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (31))){
var inst_22051 = (state_22084[(25)]);
var inst_22061 = (state_22084[(2)]);
var inst_22062 = cljs.core.not_empty.call(null,inst_22051);
var state_22084__$1 = (function (){var statearr_22104 = state_22084;
(statearr_22104[(26)] = inst_22061);

return statearr_22104;
})();
if(cljs.core.truth_(inst_22062)){
var statearr_22105_22169 = state_22084__$1;
(statearr_22105_22169[(1)] = (32));

} else {
var statearr_22106_22170 = state_22084__$1;
(statearr_22106_22170[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (32))){
var inst_22051 = (state_22084[(25)]);
var inst_22064 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22051);
var inst_22065 = cljs.core.pr_str.call(null,inst_22064);
var inst_22066 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_22065)].join('');
var inst_22067 = figwheel.client.utils.log.call(null,inst_22066);
var state_22084__$1 = state_22084;
var statearr_22107_22171 = state_22084__$1;
(statearr_22107_22171[(2)] = inst_22067);

(statearr_22107_22171[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (33))){
var state_22084__$1 = state_22084;
var statearr_22108_22172 = state_22084__$1;
(statearr_22108_22172[(2)] = null);

(statearr_22108_22172[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (13))){
var inst_21984 = (state_22084[(27)]);
var inst_21988 = cljs.core.chunk_first.call(null,inst_21984);
var inst_21989 = cljs.core.chunk_rest.call(null,inst_21984);
var inst_21990 = cljs.core.count.call(null,inst_21988);
var inst_21971 = inst_21989;
var inst_21972 = inst_21988;
var inst_21973 = inst_21990;
var inst_21974 = (0);
var state_22084__$1 = (function (){var statearr_22109 = state_22084;
(statearr_22109[(7)] = inst_21973);

(statearr_22109[(8)] = inst_21971);

(statearr_22109[(9)] = inst_21974);

(statearr_22109[(10)] = inst_21972);

return statearr_22109;
})();
var statearr_22110_22173 = state_22084__$1;
(statearr_22110_22173[(2)] = null);

(statearr_22110_22173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (22))){
var inst_22023 = (state_22084[(13)]);
var inst_22036 = (state_22084[(2)]);
var inst_22037 = cljs.core.not_empty.call(null,inst_22023);
var state_22084__$1 = (function (){var statearr_22111 = state_22084;
(statearr_22111[(28)] = inst_22036);

return statearr_22111;
})();
if(cljs.core.truth_(inst_22037)){
var statearr_22112_22174 = state_22084__$1;
(statearr_22112_22174[(1)] = (23));

} else {
var statearr_22113_22175 = state_22084__$1;
(statearr_22113_22175[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (36))){
var state_22084__$1 = state_22084;
var statearr_22114_22176 = state_22084__$1;
(statearr_22114_22176[(2)] = null);

(statearr_22114_22176[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (29))){
var inst_22050 = (state_22084[(29)]);
var inst_22055 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22050);
var inst_22056 = cljs.core.pr_str.call(null,inst_22055);
var inst_22057 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22056)].join('');
var inst_22058 = figwheel.client.utils.log.call(null,inst_22057);
var state_22084__$1 = state_22084;
var statearr_22115_22177 = state_22084__$1;
(statearr_22115_22177[(2)] = inst_22058);

(statearr_22115_22177[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (6))){
var inst_22005 = (state_22084[(2)]);
var state_22084__$1 = state_22084;
var statearr_22116_22178 = state_22084__$1;
(statearr_22116_22178[(2)] = inst_22005);

(statearr_22116_22178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (28))){
var inst_22050 = (state_22084[(29)]);
var inst_22049 = (state_22084[(2)]);
var inst_22050__$1 = cljs.core.get.call(null,inst_22049,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22051 = cljs.core.get.call(null,inst_22049,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_22052 = cljs.core.get.call(null,inst_22049,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22053 = cljs.core.not_empty.call(null,inst_22050__$1);
var state_22084__$1 = (function (){var statearr_22117 = state_22084;
(statearr_22117[(30)] = inst_22052);

(statearr_22117[(29)] = inst_22050__$1);

(statearr_22117[(25)] = inst_22051);

return statearr_22117;
})();
if(cljs.core.truth_(inst_22053)){
var statearr_22118_22179 = state_22084__$1;
(statearr_22118_22179[(1)] = (29));

} else {
var statearr_22119_22180 = state_22084__$1;
(statearr_22119_22180[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (25))){
var inst_22082 = (state_22084[(2)]);
var state_22084__$1 = state_22084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22084__$1,inst_22082);
} else {
if((state_val_22085 === (34))){
var inst_22052 = (state_22084[(30)]);
var inst_22070 = (state_22084[(2)]);
var inst_22071 = cljs.core.not_empty.call(null,inst_22052);
var state_22084__$1 = (function (){var statearr_22120 = state_22084;
(statearr_22120[(31)] = inst_22070);

return statearr_22120;
})();
if(cljs.core.truth_(inst_22071)){
var statearr_22121_22181 = state_22084__$1;
(statearr_22121_22181[(1)] = (35));

} else {
var statearr_22122_22182 = state_22084__$1;
(statearr_22122_22182[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (17))){
var inst_22010 = (state_22084[(23)]);
var state_22084__$1 = state_22084;
var statearr_22123_22183 = state_22084__$1;
(statearr_22123_22183[(2)] = inst_22010);

(statearr_22123_22183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (3))){
var state_22084__$1 = state_22084;
var statearr_22124_22184 = state_22084__$1;
(statearr_22124_22184[(2)] = null);

(statearr_22124_22184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (12))){
var inst_22001 = (state_22084[(2)]);
var state_22084__$1 = state_22084;
var statearr_22125_22185 = state_22084__$1;
(statearr_22125_22185[(2)] = inst_22001);

(statearr_22125_22185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (2))){
var inst_21963 = (state_22084[(20)]);
var inst_21970 = cljs.core.seq.call(null,inst_21963);
var inst_21971 = inst_21970;
var inst_21972 = null;
var inst_21973 = (0);
var inst_21974 = (0);
var state_22084__$1 = (function (){var statearr_22126 = state_22084;
(statearr_22126[(7)] = inst_21973);

(statearr_22126[(8)] = inst_21971);

(statearr_22126[(9)] = inst_21974);

(statearr_22126[(10)] = inst_21972);

return statearr_22126;
})();
var statearr_22127_22186 = state_22084__$1;
(statearr_22127_22186[(2)] = null);

(statearr_22127_22186[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (23))){
var inst_22017 = (state_22084[(12)]);
var inst_22023 = (state_22084[(13)]);
var inst_22016 = (state_22084[(14)]);
var inst_22043 = (state_22084[(19)]);
var inst_22020 = (state_22084[(15)]);
var inst_22021 = (state_22084[(16)]);
var inst_22039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22042 = (function (){var all_files = inst_22016;
var files_SINGLEQUOTE_ = inst_22017;
var res_SINGLEQUOTE_ = inst_22020;
var res = inst_22021;
var files_not_loaded = inst_22023;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22017,inst_22023,inst_22016,inst_22043,inst_22020,inst_22021,inst_22039,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files){
return (function (p__22041){
var map__22128 = p__22041;
var map__22128__$1 = ((cljs.core.seq_QMARK_.call(null,map__22128))?cljs.core.apply.call(null,cljs.core.hash_map,map__22128):map__22128);
var meta_data = cljs.core.get.call(null,map__22128__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22017,inst_22023,inst_22016,inst_22043,inst_22020,inst_22021,inst_22039,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files))
})();
var inst_22043__$1 = cljs.core.group_by.call(null,inst_22042,inst_22023);
var inst_22044 = cljs.core.seq_QMARK_.call(null,inst_22043__$1);
var state_22084__$1 = (function (){var statearr_22129 = state_22084;
(statearr_22129[(19)] = inst_22043__$1);

(statearr_22129[(32)] = inst_22039);

return statearr_22129;
})();
if(inst_22044){
var statearr_22130_22187 = state_22084__$1;
(statearr_22130_22187[(1)] = (26));

} else {
var statearr_22131_22188 = state_22084__$1;
(statearr_22131_22188[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (35))){
var inst_22052 = (state_22084[(30)]);
var inst_22073 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22052);
var inst_22074 = cljs.core.pr_str.call(null,inst_22073);
var inst_22075 = [cljs.core.str("not required: "),cljs.core.str(inst_22074)].join('');
var inst_22076 = figwheel.client.utils.log.call(null,inst_22075);
var state_22084__$1 = state_22084;
var statearr_22132_22189 = state_22084__$1;
(statearr_22132_22189[(2)] = inst_22076);

(statearr_22132_22189[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (19))){
var inst_22017 = (state_22084[(12)]);
var inst_22016 = (state_22084[(14)]);
var inst_22020 = (state_22084[(15)]);
var inst_22021 = (state_22084[(16)]);
var inst_22020__$1 = (state_22084[(2)]);
var inst_22021__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22020__$1);
var inst_22022 = (function (){var all_files = inst_22016;
var files_SINGLEQUOTE_ = inst_22017;
var res_SINGLEQUOTE_ = inst_22020__$1;
var res = inst_22021__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_22017,inst_22016,inst_22020,inst_22021,inst_22020__$1,inst_22021__$1,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files){
return (function (p1__21754_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21754_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_22017,inst_22016,inst_22020,inst_22021,inst_22020__$1,inst_22021__$1,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files))
})();
var inst_22023 = cljs.core.filter.call(null,inst_22022,inst_22020__$1);
var inst_22024 = cljs.core.not_empty.call(null,inst_22021__$1);
var state_22084__$1 = (function (){var statearr_22133 = state_22084;
(statearr_22133[(13)] = inst_22023);

(statearr_22133[(15)] = inst_22020__$1);

(statearr_22133[(16)] = inst_22021__$1);

return statearr_22133;
})();
if(cljs.core.truth_(inst_22024)){
var statearr_22134_22190 = state_22084__$1;
(statearr_22134_22190[(1)] = (20));

} else {
var statearr_22135_22191 = state_22084__$1;
(statearr_22135_22191[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (11))){
var state_22084__$1 = state_22084;
var statearr_22136_22192 = state_22084__$1;
(statearr_22136_22192[(2)] = null);

(statearr_22136_22192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (9))){
var inst_22003 = (state_22084[(2)]);
var state_22084__$1 = state_22084;
var statearr_22137_22193 = state_22084__$1;
(statearr_22137_22193[(2)] = inst_22003);

(statearr_22137_22193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (5))){
var inst_21973 = (state_22084[(7)]);
var inst_21974 = (state_22084[(9)]);
var inst_21976 = (inst_21974 < inst_21973);
var inst_21977 = inst_21976;
var state_22084__$1 = state_22084;
if(cljs.core.truth_(inst_21977)){
var statearr_22138_22194 = state_22084__$1;
(statearr_22138_22194[(1)] = (7));

} else {
var statearr_22139_22195 = state_22084__$1;
(statearr_22139_22195[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (14))){
var inst_21984 = (state_22084[(27)]);
var inst_21993 = cljs.core.first.call(null,inst_21984);
var inst_21994 = figwheel.client.file_reloading.eval_body.call(null,inst_21993,opts);
var inst_21995 = cljs.core.next.call(null,inst_21984);
var inst_21971 = inst_21995;
var inst_21972 = null;
var inst_21973 = (0);
var inst_21974 = (0);
var state_22084__$1 = (function (){var statearr_22140 = state_22084;
(statearr_22140[(7)] = inst_21973);

(statearr_22140[(8)] = inst_21971);

(statearr_22140[(9)] = inst_21974);

(statearr_22140[(33)] = inst_21994);

(statearr_22140[(10)] = inst_21972);

return statearr_22140;
})();
var statearr_22141_22196 = state_22084__$1;
(statearr_22141_22196[(2)] = null);

(statearr_22141_22196[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (26))){
var inst_22043 = (state_22084[(19)]);
var inst_22046 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22043);
var state_22084__$1 = state_22084;
var statearr_22142_22197 = state_22084__$1;
(statearr_22142_22197[(2)] = inst_22046);

(statearr_22142_22197[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (16))){
var inst_22010 = (state_22084[(23)]);
var inst_22012 = (function (){var all_files = inst_22010;
return ((function (all_files,inst_22010,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files){
return (function (p1__21753_SHARP_){
return cljs.core.update_in.call(null,p1__21753_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_22010,state_val_22085,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files))
})();
var inst_22013 = cljs.core.map.call(null,inst_22012,inst_22010);
var state_22084__$1 = state_22084;
var statearr_22143_22198 = state_22084__$1;
(statearr_22143_22198[(2)] = inst_22013);

(statearr_22143_22198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (30))){
var state_22084__$1 = state_22084;
var statearr_22144_22199 = state_22084__$1;
(statearr_22144_22199[(2)] = null);

(statearr_22144_22199[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (10))){
var inst_21984 = (state_22084[(27)]);
var inst_21986 = cljs.core.chunked_seq_QMARK_.call(null,inst_21984);
var state_22084__$1 = state_22084;
if(inst_21986){
var statearr_22145_22200 = state_22084__$1;
(statearr_22145_22200[(1)] = (13));

} else {
var statearr_22146_22201 = state_22084__$1;
(statearr_22146_22201[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (18))){
var inst_22017 = (state_22084[(12)]);
var inst_22016 = (state_22084[(14)]);
var inst_22016__$1 = (state_22084[(2)]);
var inst_22017__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_22016__$1);
var inst_22018 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22017__$1);
var state_22084__$1 = (function (){var statearr_22147 = state_22084;
(statearr_22147[(12)] = inst_22017__$1);

(statearr_22147[(14)] = inst_22016__$1);

return statearr_22147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22084__$1,(19),inst_22018);
} else {
if((state_val_22085 === (37))){
var inst_22079 = (state_22084[(2)]);
var state_22084__$1 = state_22084;
var statearr_22148_22202 = state_22084__$1;
(statearr_22148_22202[(2)] = inst_22079);

(statearr_22148_22202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22085 === (8))){
var inst_21984 = (state_22084[(27)]);
var inst_21971 = (state_22084[(8)]);
var inst_21984__$1 = cljs.core.seq.call(null,inst_21971);
var state_22084__$1 = (function (){var statearr_22149 = state_22084;
(statearr_22149[(27)] = inst_21984__$1);

return statearr_22149;
})();
if(inst_21984__$1){
var statearr_22150_22203 = state_22084__$1;
(statearr_22150_22203[(1)] = (10));

} else {
var statearr_22151_22204 = state_22084__$1;
(statearr_22151_22204[(1)] = (11));

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
});})(c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files))
;
return ((function (switch__19031__auto__,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto____0 = (function (){
var statearr_22155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22155[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto__);

(statearr_22155[(1)] = (1));

return statearr_22155;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto____1 = (function (state_22084){
while(true){
var ret_value__19033__auto__ = (function (){try{while(true){
var result__19034__auto__ = switch__19031__auto__.call(null,state_22084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19034__auto__;
}
break;
}
}catch (e22156){if((e22156 instanceof Object)){
var ex__19035__auto__ = e22156;
var statearr_22157_22205 = state_22084;
(statearr_22157_22205[(5)] = ex__19035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22206 = state_22084;
state_22084 = G__22206;
continue;
} else {
return ret_value__19033__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto__ = function(state_22084){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto____1.call(this,state_22084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19032__auto__;
})()
;})(switch__19031__auto__,c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files))
})();
var state__19054__auto__ = (function (){var statearr_22158 = f__19053__auto__.call(null);
(statearr_22158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19052__auto__);

return statearr_22158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19054__auto__);
});})(c__19052__auto__,map__21958,map__21958__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__21959,map__21959__$1,msg,files))
);

return c__19052__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22209,link){
var map__22211 = p__22209;
var map__22211__$1 = ((cljs.core.seq_QMARK_.call(null,map__22211))?cljs.core.apply.call(null,cljs.core.hash_map,map__22211):map__22211);
var file = cljs.core.get.call(null,map__22211__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__22211,map__22211__$1,file){
return (function (p1__22207_SHARP_,p2__22208_SHARP_){
if(cljs.core._EQ_.call(null,p1__22207_SHARP_,p2__22208_SHARP_)){
return p1__22207_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__22211,map__22211__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22215){
var map__22216 = p__22215;
var map__22216__$1 = ((cljs.core.seq_QMARK_.call(null,map__22216))?cljs.core.apply.call(null,cljs.core.hash_map,map__22216):map__22216);
var match_length = cljs.core.get.call(null,map__22216__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22216__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22212_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22212_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__22218 = arguments.length;
switch (G__22218) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22220){
var map__22222 = p__22220;
var map__22222__$1 = ((cljs.core.seq_QMARK_.call(null,map__22222))?cljs.core.apply.call(null,cljs.core.hash_map,map__22222):map__22222);
var f_data = map__22222__$1;
var file = cljs.core.get.call(null,map__22222__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__22222__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16109__auto__ = request_url;
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22223,files_msg){
var map__22245 = p__22223;
var map__22245__$1 = ((cljs.core.seq_QMARK_.call(null,map__22245))?cljs.core.apply.call(null,cljs.core.hash_map,map__22245):map__22245);
var opts = map__22245__$1;
var on_cssload = cljs.core.get.call(null,map__22245__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22246_22266 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22247_22267 = null;
var count__22248_22268 = (0);
var i__22249_22269 = (0);
while(true){
if((i__22249_22269 < count__22248_22268)){
var f_22270 = cljs.core._nth.call(null,chunk__22247_22267,i__22249_22269);
figwheel.client.file_reloading.reload_css_file.call(null,f_22270);

var G__22271 = seq__22246_22266;
var G__22272 = chunk__22247_22267;
var G__22273 = count__22248_22268;
var G__22274 = (i__22249_22269 + (1));
seq__22246_22266 = G__22271;
chunk__22247_22267 = G__22272;
count__22248_22268 = G__22273;
i__22249_22269 = G__22274;
continue;
} else {
var temp__4425__auto___22275 = cljs.core.seq.call(null,seq__22246_22266);
if(temp__4425__auto___22275){
var seq__22246_22276__$1 = temp__4425__auto___22275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22246_22276__$1)){
var c__16894__auto___22277 = cljs.core.chunk_first.call(null,seq__22246_22276__$1);
var G__22278 = cljs.core.chunk_rest.call(null,seq__22246_22276__$1);
var G__22279 = c__16894__auto___22277;
var G__22280 = cljs.core.count.call(null,c__16894__auto___22277);
var G__22281 = (0);
seq__22246_22266 = G__22278;
chunk__22247_22267 = G__22279;
count__22248_22268 = G__22280;
i__22249_22269 = G__22281;
continue;
} else {
var f_22282 = cljs.core.first.call(null,seq__22246_22276__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22282);

var G__22283 = cljs.core.next.call(null,seq__22246_22276__$1);
var G__22284 = null;
var G__22285 = (0);
var G__22286 = (0);
seq__22246_22266 = G__22283;
chunk__22247_22267 = G__22284;
count__22248_22268 = G__22285;
i__22249_22269 = G__22286;
continue;
}
} else {
}
}
break;
}

var c__19052__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19052__auto__,map__22245,map__22245__$1,opts,on_cssload){
return (function (){
var f__19053__auto__ = (function (){var switch__19031__auto__ = ((function (c__19052__auto__,map__22245,map__22245__$1,opts,on_cssload){
return (function (state_22256){
var state_val_22257 = (state_22256[(1)]);
if((state_val_22257 === (1))){
var inst_22250 = cljs.core.async.timeout.call(null,(100));
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22256__$1,(2),inst_22250);
} else {
if((state_val_22257 === (2))){
var inst_22252 = (state_22256[(2)]);
var inst_22253 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_22254 = on_cssload.call(null,inst_22253);
var state_22256__$1 = (function (){var statearr_22258 = state_22256;
(statearr_22258[(7)] = inst_22252);

return statearr_22258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22256__$1,inst_22254);
} else {
return null;
}
}
});})(c__19052__auto__,map__22245,map__22245__$1,opts,on_cssload))
;
return ((function (switch__19031__auto__,c__19052__auto__,map__22245,map__22245__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto____0 = (function (){
var statearr_22262 = [null,null,null,null,null,null,null,null];
(statearr_22262[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto__);

(statearr_22262[(1)] = (1));

return statearr_22262;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto____1 = (function (state_22256){
while(true){
var ret_value__19033__auto__ = (function (){try{while(true){
var result__19034__auto__ = switch__19031__auto__.call(null,state_22256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19034__auto__;
}
break;
}
}catch (e22263){if((e22263 instanceof Object)){
var ex__19035__auto__ = e22263;
var statearr_22264_22287 = state_22256;
(statearr_22264_22287[(5)] = ex__19035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22288 = state_22256;
state_22256 = G__22288;
continue;
} else {
return ret_value__19033__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto__ = function(state_22256){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto____1.call(this,state_22256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19032__auto__;
})()
;})(switch__19031__auto__,c__19052__auto__,map__22245,map__22245__$1,opts,on_cssload))
})();
var state__19054__auto__ = (function (){var statearr_22265 = f__19053__auto__.call(null);
(statearr_22265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19052__auto__);

return statearr_22265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19054__auto__);
});})(c__19052__auto__,map__22245,map__22245__$1,opts,on_cssload))
);

return c__19052__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map