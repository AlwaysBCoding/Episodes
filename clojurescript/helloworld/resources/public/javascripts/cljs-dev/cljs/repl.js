// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21578_21590 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21579_21591 = null;
var count__21580_21592 = (0);
var i__21581_21593 = (0);
while(true){
if((i__21581_21593 < count__21580_21592)){
var f_21594 = cljs.core._nth.call(null,chunk__21579_21591,i__21581_21593);
cljs.core.println.call(null,"  ",f_21594);

var G__21595 = seq__21578_21590;
var G__21596 = chunk__21579_21591;
var G__21597 = count__21580_21592;
var G__21598 = (i__21581_21593 + (1));
seq__21578_21590 = G__21595;
chunk__21579_21591 = G__21596;
count__21580_21592 = G__21597;
i__21581_21593 = G__21598;
continue;
} else {
var temp__4425__auto___21599 = cljs.core.seq.call(null,seq__21578_21590);
if(temp__4425__auto___21599){
var seq__21578_21600__$1 = temp__4425__auto___21599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21578_21600__$1)){
var c__16894__auto___21601 = cljs.core.chunk_first.call(null,seq__21578_21600__$1);
var G__21602 = cljs.core.chunk_rest.call(null,seq__21578_21600__$1);
var G__21603 = c__16894__auto___21601;
var G__21604 = cljs.core.count.call(null,c__16894__auto___21601);
var G__21605 = (0);
seq__21578_21590 = G__21602;
chunk__21579_21591 = G__21603;
count__21580_21592 = G__21604;
i__21581_21593 = G__21605;
continue;
} else {
var f_21606 = cljs.core.first.call(null,seq__21578_21600__$1);
cljs.core.println.call(null,"  ",f_21606);

var G__21607 = cljs.core.next.call(null,seq__21578_21600__$1);
var G__21608 = null;
var G__21609 = (0);
var G__21610 = (0);
seq__21578_21590 = G__21607;
chunk__21579_21591 = G__21608;
count__21580_21592 = G__21609;
i__21581_21593 = G__21610;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21611 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16109__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16109__auto__)){
return or__16109__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21611);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21611)))?cljs.core.second.call(null,arglists_21611):arglists_21611));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21582 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21583 = null;
var count__21584 = (0);
var i__21585 = (0);
while(true){
if((i__21585 < count__21584)){
var vec__21586 = cljs.core._nth.call(null,chunk__21583,i__21585);
var name = cljs.core.nth.call(null,vec__21586,(0),null);
var map__21587 = cljs.core.nth.call(null,vec__21586,(1),null);
var map__21587__$1 = ((cljs.core.seq_QMARK_.call(null,map__21587))?cljs.core.apply.call(null,cljs.core.hash_map,map__21587):map__21587);
var doc = cljs.core.get.call(null,map__21587__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21587__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21612 = seq__21582;
var G__21613 = chunk__21583;
var G__21614 = count__21584;
var G__21615 = (i__21585 + (1));
seq__21582 = G__21612;
chunk__21583 = G__21613;
count__21584 = G__21614;
i__21585 = G__21615;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21582);
if(temp__4425__auto__){
var seq__21582__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21582__$1)){
var c__16894__auto__ = cljs.core.chunk_first.call(null,seq__21582__$1);
var G__21616 = cljs.core.chunk_rest.call(null,seq__21582__$1);
var G__21617 = c__16894__auto__;
var G__21618 = cljs.core.count.call(null,c__16894__auto__);
var G__21619 = (0);
seq__21582 = G__21616;
chunk__21583 = G__21617;
count__21584 = G__21618;
i__21585 = G__21619;
continue;
} else {
var vec__21588 = cljs.core.first.call(null,seq__21582__$1);
var name = cljs.core.nth.call(null,vec__21588,(0),null);
var map__21589 = cljs.core.nth.call(null,vec__21588,(1),null);
var map__21589__$1 = ((cljs.core.seq_QMARK_.call(null,map__21589))?cljs.core.apply.call(null,cljs.core.hash_map,map__21589):map__21589);
var doc = cljs.core.get.call(null,map__21589__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21589__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21620 = cljs.core.next.call(null,seq__21582__$1);
var G__21621 = null;
var G__21622 = (0);
var G__21623 = (0);
seq__21582 = G__21620;
chunk__21583 = G__21621;
count__21584 = G__21622;
i__21585 = G__21623;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map