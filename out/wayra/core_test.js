// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('wayra.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('wayra.core');
wayra.core_test.ask_test = (function wayra$core_test$ask_test(a){
return (function (){
var b = wayra.impl.eval_m.call(null,wayra.core.ask);
return wayra.impl.pure.call(null,(a + b));
});
});
wayra.core_test.asks_test = (function wayra$core_test$asks_test(a){
return (function (){
var b = wayra.impl.eval_m.call(null,wayra.core.asks.call(null,cljs.core.inc));
return wayra.core.pure.call(null,(a + b));
});
});
wayra.core_test.get_test = (function wayra$core_test$get_test(var_args){
var G__1531 = arguments.length;
switch (G__1531) {
case 1:
return wayra.core_test.get_test.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wayra.core_test.get_test.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(wayra.core_test.get_test.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (function (){
var b = wayra.impl.eval_m.call(null,wayra.core.get);
return wayra.core.pure.call(null,(a + b));
});
}));

(wayra.core_test.get_test.cljs$core$IFn$_invoke$arity$2 = (function (a,c){
return (function (){
var b = wayra.impl.eval_m.call(null,wayra.core.get);
return wayra.core.pure.call(null,((a + b) + c));
});
}));

(wayra.core_test.get_test.cljs$lang$maxFixedArity = 2);

/**
 * Test docstrings.
 */
wayra.core_test.gets_test = (function wayra$core_test$gets_test(a){
return (function (){
var b = wayra.impl.eval_m.call(null,wayra.core.gets.call(null,cljs.core.inc));
return wayra.impl.pure.call(null,(a + b));
});
});
wayra.core_test.put_test = wayra.core.put.call(null,(9));
wayra.core_test.mod_test = wayra.core.modify.call(null,cljs.core.inc);
wayra.core_test.do_exec = (function wayra$core_test$do_exec(var_args){
var G__1534 = arguments.length;
switch (G__1534) {
case 1:
return wayra.core_test.do_exec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wayra.core_test.do_exec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wayra.core_test.do_exec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(wayra.core_test.do_exec.cljs$core$IFn$_invoke$arity$1 = (function (m){
return wayra.core.exec.call(null,cljs.core.PersistentArrayMap.EMPTY,m);
}));

(wayra.core_test.do_exec.cljs$core$IFn$_invoke$arity$2 = (function (r,m){
return wayra.core.exec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader","reader",169660853),r], null),m);
}));

(wayra.core_test.do_exec.cljs$core$IFn$_invoke$arity$3 = (function (r,s,m){
return wayra.core.exec.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reader","reader",169660853),r,new cljs.core.Keyword(null,"init-state","init-state",1450863212),s], null),m);
}));

(wayra.core_test.do_exec.cljs$lang$maxFixedArity = 3);

wayra.core_test.get_result = (function wayra$core_test$get_result(var_args){
var args__4795__auto__ = [];
var len__4789__auto___1537 = arguments.length;
var i__4790__auto___1538 = (0);
while(true){
if((i__4790__auto___1538 < len__4789__auto___1537)){
args__4795__auto__.push((arguments[i__4790__auto___1538]));

var G__1539 = (i__4790__auto___1538 + (1));
i__4790__auto___1538 = G__1539;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return wayra.core_test.get_result.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(wayra.core_test.get_result.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,wayra.core_test.do_exec,args));
}));

(wayra.core_test.get_result.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(wayra.core_test.get_result.cljs$lang$applyTo = (function (seq1536){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1536));
}));

wayra.core_test.get_error = (function wayra$core_test$get_error(var_args){
var args__4795__auto__ = [];
var len__4789__auto___1541 = arguments.length;
var i__4790__auto___1542 = (0);
while(true){
if((i__4790__auto___1542 < len__4789__auto___1541)){
args__4795__auto__.push((arguments[i__4790__auto___1542]));

var G__1543 = (i__4790__auto___1542 + (1));
i__4790__auto___1542 = G__1543;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return wayra.core_test.get_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(wayra.core_test.get_error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,wayra.core_test.do_exec,args));
}));

(wayra.core_test.get_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(wayra.core_test.get_error.cljs$lang$applyTo = (function (seq1540){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1540));
}));

wayra.core_test.get_state = (function wayra$core_test$get_state(var_args){
var args__4795__auto__ = [];
var len__4789__auto___1545 = arguments.length;
var i__4790__auto___1546 = (0);
while(true){
if((i__4790__auto___1546 < len__4789__auto___1545)){
args__4795__auto__.push((arguments[i__4790__auto___1546]));

var G__1547 = (i__4790__auto___1546 + (1));
i__4790__auto___1546 = G__1547;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return wayra.core_test.get_state.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(wayra.core_test.get_state.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,wayra.core_test.do_exec,args));
}));

(wayra.core_test.get_state.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(wayra.core_test.get_state.cljs$lang$applyTo = (function (seq1544){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1544));
}));

wayra.core_test.get_writer = (function wayra$core_test$get_writer(var_args){
var args__4795__auto__ = [];
var len__4789__auto___1549 = arguments.length;
var i__4790__auto___1550 = (0);
while(true){
if((i__4790__auto___1550 < len__4789__auto___1549)){
args__4795__auto__.push((arguments[i__4790__auto___1550]));

var G__1551 = (i__4790__auto___1550 + (1));
i__4790__auto___1550 = G__1551;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return wayra.core_test.get_writer.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(wayra.core_test.get_writer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,wayra.core_test.do_exec,args));
}));

(wayra.core_test.get_writer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(wayra.core_test.get_writer.cljs$lang$applyTo = (function (seq1548){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1548));
}));

wayra.core_test.exec_in_m = (function wayra$core_test$exec_in_m(){
var r1 = wayra.impl.eval_m.call(null,wayra.core.ask);
var bindings_array1552 = [null];
(bindings_array1552[(0)] = wayra.core_test.get_result.call(null,(r1 + (1)),wayra.core.ask));

var ri = (bindings_array1552[(0)]);
var r2 = wayra.impl.eval_m.call(null,wayra.core.ask);
return wayra.impl.pure.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,r2,ri], null));
});
wayra.core_test.abuse_macro = (function wayra$core_test$abuse_macro(n){
return (function (){
if(cljs.core._EQ_.call(null,(0),n)){
return wayra.core.pure.call(null,(1));
} else {
return (function (){
var bindings_array1553 = [null];
(bindings_array1553[(0)] = (n * n));

var squared = (bindings_array1553[(0)]);
wayra.impl.eval_m.call(null,(((n <= (0)))?(function (){
return wayra.core.tell.call(null,"was negative");
}):wayra.impl.pure.call(null,null)));

return wayra.core.pure.call(null,squared);
});
}
});
});
wayra.core_test.letrec_fact = (function wayra$core_test$letrec_fact(){
var r = wayra.impl.eval_m.call(null,wayra.core.ask);
var bindings_array1554 = [null];
(bindings_array1554[(0)] = (function (n){
if((n < (2))){
return (1);
} else {
return (n * (bindings_array1554[(0)]).call(null,(n - (1))));
}
}));

var fact = (bindings_array1554[(0)]);
return wayra.core.pure.call(null,fact.call(null,r));
});
wayra.core_test.core_api = (function wayra$core_test$core_api(){
return cljs.test.test_var.call(null,wayra.core_test.core_api.cljs$lang$var);
});
wayra.core_test.core_api.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"ask");

try{try{var values__1351__auto___1583 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(3),wayra.core_test.ask_test.call(null,(9))),(new cljs.core.List(null,(12),null,(1),null)),(2),null));
var result__1352__auto___1584 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1583);
if(cljs.core.truth_(result__1352__auto___1584)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),cljs.core.list(new cljs.core.Symbol(null,"ask-test","ask-test",380241161,null),(9))),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1583),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),cljs.core.list(new cljs.core.Symbol(null,"ask-test","ask-test",380241161,null),(9))),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1583),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1558){var t__1396__auto___1585 = e1558;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),cljs.core.list(new cljs.core.Symbol(null,"ask-test","ask-test",380241161,null),(9))),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1585,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"asks");

try{try{var values__1351__auto___1586 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(3),wayra.core_test.asks_test.call(null,(9))),(new cljs.core.List(null,(13),null,(1),null)),(2),null));
var result__1352__auto___1587 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1586);
if(cljs.core.truth_(result__1352__auto___1587)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),cljs.core.list(new cljs.core.Symbol(null,"asks-test","asks-test",-1770864441,null),(9))),(13)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1586),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),cljs.core.list(new cljs.core.Symbol(null,"asks-test","asks-test",-1770864441,null),(9))),(13)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1586),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1559){var t__1396__auto___1588 = e1559;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),cljs.core.list(new cljs.core.Symbol(null,"asks-test","asks-test",-1770864441,null),(9))),(13)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1588,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"get");

try{try{var values__1351__auto___1589 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(3),(6),wayra.core_test.get_test.call(null,(9))),(new cljs.core.List(null,(15),null,(1),null)),(2),null));
var result__1352__auto___1590 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1589);
if(cljs.core.truth_(result__1352__auto___1590)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"get-test","get-test",1479176785,null),(9))),(15)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1589),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"get-test","get-test",1479176785,null),(9))),(15)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1589),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1560){var t__1396__auto___1591 = e1560;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"get-test","get-test",1479176785,null),(9))),(15)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1591,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"get");

try{try{var values__1351__auto___1592 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(3),(6),wayra.core_test.get_test.call(null,(9),(5))),(new cljs.core.List(null,(20),null,(1),null)),(2),null));
var result__1352__auto___1593 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1592);
if(cljs.core.truth_(result__1352__auto___1593)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"get-test","get-test",1479176785,null),(9),(5))),(20)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1592),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"get-test","get-test",1479176785,null),(9),(5))),(20)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1592),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1561){var t__1396__auto___1594 = e1561;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"get-test","get-test",1479176785,null),(9),(5))),(20)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1594,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"gets");

try{try{var values__1351__auto___1595 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(3),(6),wayra.core_test.gets_test.call(null,(9))),(new cljs.core.List(null,(16),null,(1),null)),(2),null));
var result__1352__auto___1596 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1595);
if(cljs.core.truth_(result__1352__auto___1596)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"gets-test","gets-test",-1660220945,null),(9))),(16)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1595),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"gets-test","gets-test",-1660220945,null),(9))),(16)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1595),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1562){var t__1396__auto___1597 = e1562;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"gets-test","gets-test",-1660220945,null),(9))),(16)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1597,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"put");

try{try{var values__1351__auto___1598 = (new cljs.core.List(null,wayra.core_test.get_state.call(null,(3),(6),wayra.core_test.put_test),(new cljs.core.List(null,(9),null,(1),null)),(2),null));
var result__1352__auto___1599 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1598);
if(cljs.core.truth_(result__1352__auto___1599)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),(3),(6),new cljs.core.Symbol(null,"put-test","put-test",-855307327,null)),(9)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1598),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),(3),(6),new cljs.core.Symbol(null,"put-test","put-test",-855307327,null)),(9)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1598),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1563){var t__1396__auto___1600 = e1563;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),(3),(6),new cljs.core.Symbol(null,"put-test","put-test",-855307327,null)),(9)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1600,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"modify");

try{try{var values__1351__auto___1601 = (new cljs.core.List(null,wayra.core_test.get_state.call(null,(3),(10),wayra.core_test.mod_test),(new cljs.core.List(null,(11),null,(1),null)),(2),null));
var result__1352__auto___1602 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1601);
if(cljs.core.truth_(result__1352__auto___1602)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),(3),(10),new cljs.core.Symbol(null,"mod-test","mod-test",-1054818876,null)),(11)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1601),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),(3),(10),new cljs.core.Symbol(null,"mod-test","mod-test",-1054818876,null)),(11)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1601),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1564){var t__1396__auto___1603 = e1564;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),(3),(10),new cljs.core.Symbol(null,"mod-test","mod-test",-1054818876,null)),(11)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1603,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"tell");

try{try{var values__1351__auto___1604 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,(function (){
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,(1)));

return wayra.core.tell.call(null,(2));
})),(new cljs.core.List(null,cljs.core.list((2),(1)),null,(1),null)),(2),null));
var result__1352__auto___1605 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1604);
if(cljs.core.truth_(result__1352__auto___1605)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),(2)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(1)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1604),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),(2)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(1)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1604),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1565){var t__1396__auto___1606 = e1565;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),(2)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(1)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1606,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"no tell");

try{try{var values__1351__auto___1607 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,wayra.core.put.call(null,(1))),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__1352__auto___1608 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1607);
if(cljs.core.truth_(result__1352__auto___1608)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(1))),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1607),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(1))),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1607),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1566){var t__1396__auto___1609 = e1566;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(1))),null),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1609,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"fail");

try{try{var values__1351__auto___1610 = (new cljs.core.List(null,wayra.core_test.get_error.call(null,(function (){
wayra.impl.eval_m.call(null,wayra.core.fail.call(null,"x_x"));

return wayra.core.put.call(null,(9));
})),(new cljs.core.List(null,"x_x",null,(1),null)),(2),null));
var result__1352__auto___1611 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1610);
if(cljs.core.truth_(result__1352__auto___1611)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-error","get-error",-98556278,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"fail","fail",-948220839,null),"x_x"),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(9)))),"x_x"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1610),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-error","get-error",-98556278,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"fail","fail",-948220839,null),"x_x"),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(9)))),"x_x"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1610),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1567){var t__1396__auto___1612 = e1567;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-error","get-error",-98556278,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"fail","fail",-948220839,null),"x_x"),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(9)))),"x_x"),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1612,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"fails");

try{try{var values__1351__auto___1613 = (new cljs.core.List(null,wayra.core_test.get_state.call(null,(function (){
wayra.impl.eval_m.call(null,wayra.core.fail.call(null,"x_x"));

return wayra.core.put.call(null,(9));
})),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__1352__auto___1614 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1613);
if(cljs.core.truth_(result__1352__auto___1614)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"fail","fail",-948220839,null),"x_x"),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(9)))),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1613),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"fail","fail",-948220839,null),"x_x"),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(9)))),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1613),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1568){var t__1396__auto___1615 = e1568;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-state","get-state",-1081972112,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"fail","fail",-948220839,null),"x_x"),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(9)))),null),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1615,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"no fail");

try{try{var values__1351__auto___1616 = (new cljs.core.List(null,wayra.core_test.get_error.call(null,wayra.core.put.call(null,(1))),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__1352__auto___1617 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1616);
if(cljs.core.truth_(result__1352__auto___1617)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-error","get-error",-98556278,null),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(1))),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1616),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-error","get-error",-98556278,null),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(1))),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1616),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1569){var t__1396__auto___1618 = e1569;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-error","get-error",-98556278,null),cljs.core.list(new cljs.core.Symbol(null,"put","put",-1354663199,null),(1))),null),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1618,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"exec-in-m");

try{try{var values__1351__auto___1619 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(0),wayra.core_test.exec_in_m),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),null,(1),null)),(2),null));
var result__1352__auto___1620 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1619);
if(cljs.core.truth_(result__1352__auto___1620)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(0),new cljs.core.Symbol(null,"exec-in-m","exec-in-m",1487477835,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1619),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(0),new cljs.core.Symbol(null,"exec-in-m","exec-in-m",1487477835,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1619),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1570){var t__1396__auto___1621 = e1570;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(0),new cljs.core.Symbol(null,"exec-in-m","exec-in-m",1487477835,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1621,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"eachm");

try{try{var values__1351__auto___1622 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,wayra.core.eachm.call(null,cljs.core.range.call(null,(400)),wayra.core.tell)),(new cljs.core.List(null,cljs.core.reverse.call(null,cljs.core.range.call(null,(400))),null,(1),null)),(2),null));
var result__1352__auto___1623 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1622);
if(cljs.core.truth_(result__1352__auto___1623)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"eachm","eachm",-634490888,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(400)),new cljs.core.Symbol(null,"tell","tell",-2010407218,null))),cljs.core.list(new cljs.core.Symbol(null,"reverse","reverse",752076261,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(400)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1622),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"eachm","eachm",-634490888,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(400)),new cljs.core.Symbol(null,"tell","tell",-2010407218,null))),cljs.core.list(new cljs.core.Symbol(null,"reverse","reverse",752076261,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(400)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1622),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1571){var t__1396__auto___1624 = e1571;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"eachm","eachm",-634490888,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(400)),new cljs.core.Symbol(null,"tell","tell",-2010407218,null))),cljs.core.list(new cljs.core.Symbol(null,"reverse","reverse",752076261,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(400)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1624,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"mapm");

try{try{var values__1351__auto___1625 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(1),(1),wayra.core.mapm.call(null,(function (_){
return (function (){
wayra.impl.eval_m.call(null,wayra.core.modify.call(null,(function (p1__1555_SHARP_){
return ((2) * p1__1555_SHARP_);
})));

var curr = wayra.impl.eval_m.call(null,wayra.core.get);
return wayra.impl.pure.call(null,curr);
});
}),cljs.core.range.call(null,(5)))),(new cljs.core.List(null,cljs.core.list((2),(4),(8),(16),(32)),null,(1),null)),(2),null));
var result__1352__auto___1626 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1625);
if(cljs.core.truth_(result__1352__auto___1626)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(1),(1),cljs.core.list(new cljs.core.Symbol(null,"mapm","mapm",1546894524,null),cljs.core.list(new cljs.core.Symbol(null,"fnm","fnm",2106641292,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"modify","modify",379490658,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1555#","p1__1555#",-771796658,null)], null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"p1__1555#","p1__1555#",-771796658,null)))),new cljs.core.Symbol(null,"curr","curr",548158719,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curr","curr",548158719,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(5)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(4),(8),(16),(32)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1625),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(1),(1),cljs.core.list(new cljs.core.Symbol(null,"mapm","mapm",1546894524,null),cljs.core.list(new cljs.core.Symbol(null,"fnm","fnm",2106641292,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"modify","modify",379490658,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1555#","p1__1555#",-771796658,null)], null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"p1__1555#","p1__1555#",-771796658,null)))),new cljs.core.Symbol(null,"curr","curr",548158719,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curr","curr",548158719,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(5)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(4),(8),(16),(32)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1625),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1572){var t__1396__auto___1627 = e1572;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(1),(1),cljs.core.list(new cljs.core.Symbol(null,"mapm","mapm",1546894524,null),cljs.core.list(new cljs.core.Symbol(null,"fnm","fnm",2106641292,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"modify","modify",379490658,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1555#","p1__1555#",-771796658,null)], null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"p1__1555#","p1__1555#",-771796658,null)))),new cljs.core.Symbol(null,"curr","curr",548158719,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curr","curr",548158719,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(5)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(4),(8),(16),(32)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1627,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"local");

try{try{var values__1351__auto___1628 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,(10),(function (){
var r1 = wayra.impl.eval_m.call(null,wayra.core.ask);
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,r1));

var ret = wayra.impl.eval_m.call(null,wayra.core.local.call(null,cljs.core.inc,(function (){
var r2 = wayra.impl.eval_m.call(null,wayra.core.ask);
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,r2));

return wayra.impl.pure.call(null,(0));
})));
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,ret));

var r3 = wayra.impl.eval_m.call(null,wayra.core.ask);
return wayra.core.tell.call(null,r3);
})),(new cljs.core.List(null,cljs.core.list((10),(0),(11),(10)),null,(1),null)),(2),null));
var result__1352__auto___1629 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1628);
if(cljs.core.truth_(result__1352__auto___1629)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(10),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"ask","ask",-1946723355,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null)),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"local","local",142764803,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"r2","r2",1893375701,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"ask","ask",-1946723355,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"r2","r2",1893375701,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)),new cljs.core.Symbol(null,"r3","r3",-386616647,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"ask","ask",-1946723355,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"r3","r3",-386616647,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0),(11),(10)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1628),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(10),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"ask","ask",-1946723355,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null)),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"local","local",142764803,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"r2","r2",1893375701,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"ask","ask",-1946723355,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"r2","r2",1893375701,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)),new cljs.core.Symbol(null,"r3","r3",-386616647,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"ask","ask",-1946723355,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"r3","r3",-386616647,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0),(11),(10)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1628),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1573){var t__1396__auto___1630 = e1573;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(10),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"ask","ask",-1946723355,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"r1","r1",-1963460869,null)),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"local","local",142764803,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"r2","r2",1893375701,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"ask","ask",-1946723355,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"r2","r2",1893375701,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)),new cljs.core.Symbol(null,"r3","r3",-386616647,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),new cljs.core.Symbol(null,"ask","ask",-1946723355,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"r3","r3",-386616647,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(0),(11),(10)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1630,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"listen");

try{try{var values__1351__auto___1631 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,(function (){
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,"1"));

var vec__1575 = wayra.impl.eval_m.call(null,wayra.core.listen.call(null,(function (){
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,"2"));

return wayra.impl.pure.call(null,"3");
})));
var ret = cljs.core.nth.call(null,vec__1575,(0),null);
var tells = cljs.core.nth.call(null,vec__1575,(1),null);
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,ret));

wayra.impl.eval_m.call(null,wayra.core.tell.call(null,"4"));

return wayra.core.tell.call(null,tells);
})),(new cljs.core.List(null,cljs.core.list(cljs.core.list("2"),"4","3","2","1"),null,(1),null)),(2),null));
var result__1352__auto___1632 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1631);
if(cljs.core.truth_(result__1352__auto___1632)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"1"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"tells","tells",1199718651,null)], null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3"], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"4"),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"tells","tells",1199718651,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list("2"),"4","3","2","1"))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1631),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"1"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"tells","tells",1199718651,null)], null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3"], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"4"),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"tells","tells",1199718651,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list("2"),"4","3","2","1"))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1631),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1574){var t__1396__auto___1633 = e1574;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"1"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"tells","tells",1199718651,null)], null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3"], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"4"),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"tells","tells",1199718651,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list("2"),"4","3","2","1"))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1633,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1634 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,(function (){
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,"1"));

return wayra.core.listen.call(null,(function (){
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,"2"));

return wayra.core.listen.call(null,wayra.core.tell.call(null,"3"));
}));
})),(new cljs.core.List(null,cljs.core.list("3","2","1"),null,(1),null)),(2),null));
var result__1352__auto___1635 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1634);
if(cljs.core.truth_(result__1352__auto___1635)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"1"),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"3")))))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("3","2","1"))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1634),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"1"),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"3")))))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("3","2","1"))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1634),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1578){var t__1396__auto___1636 = e1578;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"1"),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"3")))))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("3","2","1"))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1636,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1637 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,(function (){
return wayra.core.listen.call(null,(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),null], null);
}),(function (){
return wayra.core.tell.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null));
}));
})),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),cljs.core.list((1))], null),null,(1),null)),(2),null));
var result__1352__auto___1638 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1637);
if(cljs.core.truth_(result__1352__auto___1638)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),null], null)),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1637),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),null], null)),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1637),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1579){var t__1396__auto___1639 = e1579;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),null], null)),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1639,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1640 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,(function (){
return wayra.core.listen.call(null,(function (){
return wayra.core.tell.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null));
}));
})),(new cljs.core.List(null,cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null)),null,(1),null)),(2),null));
var result__1352__auto___1641 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1640);
if(cljs.core.truth_(result__1352__auto___1641)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null)))))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1640),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null)))))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1640),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1580){var t__1396__auto___1642 = e1580;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"listen","listen",-1004931046,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null)))))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),(1)], null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1642,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"pass");

try{try{var values__1351__auto___1643 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,(function (){
var ret = wayra.impl.eval_m.call(null,wayra.core.pass.call(null,(function (){
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,"2"));

return wayra.impl.pure.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3",(function (p1__1556_SHARP_){
if((cljs.core.count.call(null,p1__1556_SHARP_) > (1))){
return p1__1556_SHARP_;
} else {
return null;
}
})], null));
})));
return wayra.core.tell.call(null,ret);
})),(new cljs.core.List(null,cljs.core.list("3"),null,(1),null)),(2),null));
var result__1352__auto___1644 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1643);
if(cljs.core.truth_(result__1352__auto___1644)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"pass","pass",-1080275776,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1556#","p1__1556#",-147290895,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__1556#","p1__1556#",-147290895,null)),(1)),new cljs.core.Symbol(null,"p1__1556#","p1__1556#",-147290895,null),null))], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("3"))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1643),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"pass","pass",-1080275776,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1556#","p1__1556#",-147290895,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__1556#","p1__1556#",-147290895,null)),(1)),new cljs.core.Symbol(null,"p1__1556#","p1__1556#",-147290895,null),null))], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("3"))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1643),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1581){var t__1396__auto___1645 = e1581;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"pass","pass",-1080275776,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1556#","p1__1556#",-147290895,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__1556#","p1__1556#",-147290895,null)),(1)),new cljs.core.Symbol(null,"p1__1556#","p1__1556#",-147290895,null),null))], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("3"))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1645,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto__ = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,(function (){
var ret = wayra.impl.eval_m.call(null,wayra.core.pass.call(null,(function (){
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,"1"));

wayra.impl.eval_m.call(null,wayra.core.tell.call(null,"2"));

return wayra.impl.pure.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3",(function (p1__1557_SHARP_){
if((cljs.core.count.call(null,p1__1557_SHARP_) > (1))){
return p1__1557_SHARP_;
} else {
return null;
}
})], null));
})));
return wayra.core.tell.call(null,ret);
})),(new cljs.core.List(null,cljs.core.list("3","2","1"),null,(1),null)),(2),null));
var result__1352__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto__);
if(cljs.core.truth_(result__1352__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"pass","pass",-1080275776,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"1"),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1557#","p1__1557#",1680484772,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__1557#","p1__1557#",1680484772,null)),(1)),new cljs.core.Symbol(null,"p1__1557#","p1__1557#",1680484772,null),null))], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("3","2","1"))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"pass","pass",-1080275776,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"1"),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1557#","p1__1557#",1680484772,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__1557#","p1__1557#",1680484772,null)),(1)),new cljs.core.Symbol(null,"p1__1557#","p1__1557#",1680484772,null),null))], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("3","2","1"))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__1352__auto__;
}catch (e1582){var t__1396__auto__ = e1582;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Symbol(null,"<-","<-",-1894022771,null),cljs.core.list(new cljs.core.Symbol(null,"pass","pass",-1080275776,null),cljs.core.list(new cljs.core.Symbol(null,"mdo","mdo",392277392,null),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"1"),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),"2"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1557#","p1__1557#",1680484772,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__1557#","p1__1557#",1680484772,null)),(1)),new cljs.core.Symbol(null,"p1__1557#","p1__1557#",1680484772,null),null))], null)], null))),cljs.core.list(new cljs.core.Symbol(null,"tell","tell",-2010407218,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("3","2","1"))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(wayra.core_test.core_api.cljs$lang$var = new cljs.core.Var(function(){return wayra.core_test.core_api;},new cljs.core.Symbol("wayra.core-test","core-api","wayra.core-test/core-api",-1356354470,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wayra.core-test","wayra.core-test",1224582005,null),new cljs.core.Symbol(null,"core-api","core-api",1590453034,null),"test/wayra/core_test.cljc",18,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(wayra.core_test.core_api)?wayra.core_test.core_api.cljs$lang$test:null)])));
wayra.core_test.maplus_types = (function wayra$core_test$maplus_types(){
return cljs.test.test_var.call(null,wayra.core_test.maplus_types.cljs$lang$var);
});
wayra.core_test.maplus_types.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"vector");

try{try{var values__1351__auto___1650 = (new cljs.core.List(null,wayra.core.maplus.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),(3)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),null,(1),null)),(2),null));
var result__1352__auto___1651 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1650);
if(cljs.core.truth_(result__1352__auto___1651)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),(3)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1650),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),(3)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1650),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1646){var t__1396__auto___1652 = e1646;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),(3)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1652,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"list");

try{try{var values__1351__auto___1653 = (new cljs.core.List(null,wayra.core.maplus.call(null,cljs.core.list((2),(1)),(3)),null,(1),null));
var result__1352__auto___1654 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1653);
if(cljs.core.truth_(result__1352__auto___1654)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(1))),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1653),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list((3),(2),(1))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(1))),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1653),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list((3),(2),(1))], null));
}

}catch (e1647){var t__1396__auto___1655 = e1647;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(1))),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1655,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list((3),(2),(1))], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"hashset");

try{try{var values__1351__auto___1656 = (new cljs.core.List(null,wayra.core.maplus.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),(3)),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),null,(1),null)),(2),null));
var result__1352__auto___1657 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1656);
if(cljs.core.truth_(result__1352__auto___1657)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),(3)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1656),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),(3)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1656),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1648){var t__1396__auto___1658 = e1648;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),(3)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1658,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"hashmap");

try{try{var values__1351__auto__ = (new cljs.core.List(null,wayra.core.maplus.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),(2),new cljs.core.Keyword(null,"l","l",1395893423),(1),new cljs.core.Keyword(null,"s","s",1705939918),(3)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list((1)),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null)], null),null,(1),null)),(2),null));
var result__1352__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto__);
if(cljs.core.truth_(result__1352__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),(2),new cljs.core.Keyword(null,"l","l",1395893423),(1),new cljs.core.Keyword(null,"s","s",1705939918),(3)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1))),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),(2),new cljs.core.Keyword(null,"l","l",1395893423),(1),new cljs.core.Keyword(null,"s","s",1705939918),(3)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1))),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__1352__auto__;
}catch (e1649){var t__1396__auto__ = e1649;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"maplus","maplus",-817438997,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),(2),new cljs.core.Keyword(null,"l","l",1395893423),(1),new cljs.core.Keyword(null,"s","s",1705939918),(3)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1))),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(wayra.core_test.maplus_types.cljs$lang$var = new cljs.core.Var(function(){return wayra.core_test.maplus_types;},new cljs.core.Symbol("wayra.core-test","maplus-types","wayra.core-test/maplus-types",-2065271460,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wayra.core-test","wayra.core-test",1224582005,null),new cljs.core.Symbol(null,"maplus-types","maplus-types",311633644,null),"test/wayra/core_test.cljc",22,1,124,124,cljs.core.List.EMPTY,null,(cljs.core.truth_(wayra.core_test.maplus_types)?wayra.core_test.maplus_types.cljs$lang$test:null)])));
wayra.core_test.mappend_types = (function wayra$core_test$mappend_types(){
return cljs.test.test_var.call(null,wayra.core_test.mappend_types.cljs$lang$var);
});
wayra.core_test.mappend_types.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"vector");

try{try{var values__1351__auto___1663 = (new cljs.core.List(null,wayra.core.mappend.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),null,(1),null)),(2),null));
var result__1352__auto___1664 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1663);
if(cljs.core.truth_(result__1352__auto___1664)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1663),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1663),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1659){var t__1396__auto___1665 = e1659;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1665,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"list");

try{try{var values__1351__auto___1666 = (new cljs.core.List(null,wayra.core.mappend.call(null,cljs.core.list((2),(1)),cljs.core.list((3))),null,(1),null));
var result__1352__auto___1667 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1666);
if(cljs.core.truth_(result__1352__auto___1667)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((3))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1666),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list((3),(2),(1))], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((3))))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1666),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list((3),(2),(1))], null));
}

}catch (e1660){var t__1396__auto___1668 = e1660;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(1))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((3))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1668,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.list((3),(2),(1))], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"hashset");

try{try{var values__1351__auto___1669 = (new cljs.core.List(null,wayra.core.mappend.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null)),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),null,(1),null)),(2),null));
var result__1352__auto___1670 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1669);
if(cljs.core.truth_(result__1352__auto___1670)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),"null"], null), null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1669),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),"null"], null), null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1669),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1661){var t__1396__auto___1671 = e1661;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),"null"], null), null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1671,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"hashmap");

try{try{var values__1351__auto__ = (new cljs.core.List(null,wayra.core.mappend.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list((1)),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list((1)),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null)], null),null,(1),null)),(2),null));
var result__1352__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto__);
if(cljs.core.truth_(result__1352__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1))),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),"null"], null), null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1))),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1))),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),"null"], null), null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1))),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__1352__auto__;
}catch (e1662){var t__1396__auto__ = e1662;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mappend","mappend",-1263981778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),"null",(2),"null"], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1))),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),"null"], null), null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1))),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),"null",(3),"null",(2),"null"], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(wayra.core_test.mappend_types.cljs$lang$var = new cljs.core.Var(function(){return wayra.core_test.mappend_types;},new cljs.core.Symbol("wayra.core-test","mappend-types","wayra.core-test/mappend-types",304899605,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wayra.core-test","wayra.core-test",1224582005,null),new cljs.core.Symbol(null,"mappend-types","mappend-types",-1671776379,null),"test/wayra/core_test.cljc",23,1,132,132,cljs.core.List.EMPTY,null,(cljs.core.truth_(wayra.core_test.mappend_types)?wayra.core_test.mappend_types.cljs$lang$test:null)])));
wayra.core_test.mempty_types = (function wayra$core_test$mempty_types(){
return cljs.test.test_var.call(null,wayra.core_test.mempty_types.cljs$lang$var);
});
wayra.core_test.mempty_types.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"mempty");

try{try{var values__1351__auto__ = (new cljs.core.List(null,wayra.core.mempty.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list((4),(5)),new cljs.core.Keyword(null,"n","n",562130025),null], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"l","l",1395893423),null,new cljs.core.Keyword(null,"n","n",562130025),null], null),null,(1),null)),(2),null));
var result__1352__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto__);
if(cljs.core.truth_(result__1352__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mempty","mempty",2003480125,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),"null"], null), null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((4),(5))),new cljs.core.Keyword(null,"n","n",562130025),null], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"l","l",1395893423),null,new cljs.core.Keyword(null,"n","n",562130025),null], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mempty","mempty",2003480125,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),"null"], null), null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((4),(5))),new cljs.core.Keyword(null,"n","n",562130025),null], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"l","l",1395893423),null,new cljs.core.Keyword(null,"n","n",562130025),null], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__1352__auto__;
}catch (e1672){var t__1396__auto__ = e1672;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"mempty","mempty",2003480125,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),"null"], null), null),new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((4),(5))),new cljs.core.Keyword(null,"n","n",562130025),null], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"l","l",1395893423),null,new cljs.core.Keyword(null,"n","n",562130025),null], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(wayra.core_test.mempty_types.cljs$lang$var = new cljs.core.Var(function(){return wayra.core_test.mempty_types;},new cljs.core.Symbol("wayra.core-test","mempty-types","wayra.core-test/mempty-types",1297616646,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wayra.core-test","wayra.core-test",1224582005,null),new cljs.core.Symbol(null,"mempty-types","mempty-types",-1010483722,null),"test/wayra/core_test.cljc",22,1,140,140,cljs.core.List.EMPTY,null,(cljs.core.truth_(wayra.core_test.mempty_types)?wayra.core_test.mempty_types.cljs$lang$test:null)])));
wayra.core_test.other_macro_features = (function wayra$core_test$other_macro_features(){
return cljs.test.test_var.call(null,wayra.core_test.other_macro_features.cljs$lang$var);
});
wayra.core_test.other_macro_features.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"letrec");

try{try{var values__1351__auto___1684 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(0),(6),wayra.core_test.letrec_fact),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__1352__auto___1685 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1684);
if(cljs.core.truth_(result__1352__auto___1685)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(0),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1684),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(0),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1684),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1673){var t__1396__auto___1686 = e1673;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(0),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1686,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1687 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(1),(6),wayra.core_test.letrec_fact),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__1352__auto___1688 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1687);
if(cljs.core.truth_(result__1352__auto___1688)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(1),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1687),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(1),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1687),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1674){var t__1396__auto___1689 = e1674;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(1),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1689,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1690 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(2),(6),wayra.core_test.letrec_fact),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__1352__auto___1691 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1690);
if(cljs.core.truth_(result__1352__auto___1691)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(2),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1690),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(2),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1690),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1675){var t__1396__auto___1692 = e1675;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(2),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1692,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1693 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(3),(6),wayra.core_test.letrec_fact),(new cljs.core.List(null,(6),null,(1),null)),(2),null));
var result__1352__auto___1694 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1693);
if(cljs.core.truth_(result__1352__auto___1694)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(6)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1693),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(6)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1693),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1676){var t__1396__auto___1695 = e1676;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(6)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1695,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1696 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(4),(6),wayra.core_test.letrec_fact),(new cljs.core.List(null,(24),null,(1),null)),(2),null));
var result__1352__auto___1697 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1696);
if(cljs.core.truth_(result__1352__auto___1697)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(4),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(24)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1696),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(4),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(24)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1696),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1677){var t__1396__auto___1698 = e1677;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(4),(6),new cljs.core.Symbol(null,"letrec-fact","letrec-fact",216161393,null)),(24)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1698,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"guard");

try{try{var values__1351__auto___1699 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(3),(6),wayra.core_test.abuse_macro.call(null,(0))),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__1352__auto___1700 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1699);
if(cljs.core.truth_(result__1352__auto___1700)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(0))),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1699),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(0))),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1699),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1678){var t__1396__auto___1701 = e1678;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(0))),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1701,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1702 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,(3),(6),wayra.core_test.abuse_macro.call(null,(0))),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__1352__auto___1703 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1702);
if(cljs.core.truth_(result__1352__auto___1703)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(0))),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1702),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(0))),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1702),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1679){var t__1396__auto___1704 = e1679;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(0))),null),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1704,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"whenm");

try{try{var values__1351__auto___1705 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,(3),(6),wayra.core_test.abuse_macro.call(null,(2))),(new cljs.core.List(null,null,null,(1),null)),(2),null));
var result__1352__auto___1706 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1705);
if(cljs.core.truth_(result__1352__auto___1706)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(2))),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1705),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(2))),null),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1705),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1680){var t__1396__auto___1707 = e1680;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(2))),null),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1707,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1708 = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(3),(6),wayra.core_test.abuse_macro.call(null,(2))),(new cljs.core.List(null,(4),null,(1),null)),(2),null));
var result__1352__auto___1709 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1708);
if(cljs.core.truth_(result__1352__auto___1709)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(2))),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1708),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(2))),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1708),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1681){var t__1396__auto___1710 = e1681;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(2))),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1710,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1711 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,(3),(6),wayra.core_test.abuse_macro.call(null,(-2))),(new cljs.core.List(null,cljs.core.list("was negative"),null,(1),null)),(2),null));
var result__1352__auto___1712 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1711);
if(cljs.core.truth_(result__1352__auto___1712)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(-2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("was negative"))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1711),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(-2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("was negative"))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1711),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1682){var t__1396__auto___1713 = e1682;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(-2))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list("was negative"))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1713,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto__ = (new cljs.core.List(null,wayra.core_test.get_result.call(null,(3),(6),wayra.core_test.abuse_macro.call(null,(-2))),(new cljs.core.List(null,(4),null,(1),null)),(2),null));
var result__1352__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto__);
if(cljs.core.truth_(result__1352__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(-2))),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(-2))),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__1352__auto__;
}catch (e1683){var t__1396__auto__ = e1683;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-result","get-result",186699603,null),(3),(6),cljs.core.list(new cljs.core.Symbol(null,"abuse-macro","abuse-macro",1030619652,null),(-2))),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(wayra.core_test.other_macro_features.cljs$lang$var = new cljs.core.Var(function(){return wayra.core_test.other_macro_features;},new cljs.core.Symbol("wayra.core-test","other-macro-features","wayra.core-test/other-macro-features",-1782214255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wayra.core-test","wayra.core-test",1224582005,null),new cljs.core.Symbol(null,"other-macro-features","other-macro-features",610837281,null),"test/wayra/core_test.cljc",30,1,145,145,cljs.core.List.EMPTY,null,(cljs.core.truth_(wayra.core_test.other_macro_features)?wayra.core_test.other_macro_features.cljs$lang$test:null)])));
wayra.core_test.pre_fact = (function wayra$core_test$pre_fact(fact){
return (function (n){
if((n < (2))){
return (1);
} else {
return (n * fact.call(null,(n - (1))));

}
});
});
wayra.core_test.mpre_fact = (function wayra$core_test$mpre_fact(fact){
return (function (){
var default$ = wayra.impl.eval_m.call(null,wayra.core.asks.call(null,new cljs.core.Keyword(null,"default","default",-1987822328)));
return wayra.impl.pure.call(null,(function (n){
if((n < (0))){
return default$;
} else {
if((n < (2))){
return (1);
} else {
return (n * fact.call(null,(n - (1))));

}
}
}));
});
});
wayra.core_test.mpre_fact2 = (function wayra$core_test$mpre_fact2(fact){
return (function (){
var default$ = wayra.impl.eval_m.call(null,wayra.core.asks.call(null,new cljs.core.Keyword(null,"default","default",-1987822328)));
return wayra.impl.pure.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"fact","fact",-799816531),(function (n){
if((n < (0))){
return default$;
} else {
if((n < (2))){
return (1);
} else {
return (n * fact.call(null,(n - (1))));

}
}
})], null));
});
});
wayra.core_test.fpreempt = (function wayra$core_test$fpreempt(var_args){
var G__1715 = arguments.length;
switch (G__1715) {
case 1:
return wayra.core_test.fpreempt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wayra.core_test.fpreempt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(wayra.core_test.fpreempt.cljs$core$IFn$_invoke$arity$1 = (function (f){
return wayra.core_test.fpreempt.call(null,cljs.core.identity,f);
}));

(wayra.core_test.fpreempt.cljs$core$IFn$_invoke$arity$2 = (function (from_res,f){
var a_f = cljs.core.atom.call(null,null);
var res = f.call(null,(function() { 
var G__1717__delegate = function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,a_f),args);
};
var G__1717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1718__i = 0, G__1718__a = new Array(arguments.length -  0);
while (G__1718__i < G__1718__a.length) {G__1718__a[G__1718__i] = arguments[G__1718__i + 0]; ++G__1718__i;}
  args = new cljs.core.IndexedSeq(G__1718__a,0,null);
} 
return G__1717__delegate.call(this,args);};
G__1717.cljs$lang$maxFixedArity = 0;
G__1717.cljs$lang$applyTo = (function (arglist__1719){
var args = cljs.core.seq(arglist__1719);
return G__1717__delegate(args);
});
G__1717.cljs$core$IFn$_invoke$arity$variadic = G__1717__delegate;
return G__1717;
})()
);
cljs.core.reset_BANG_.call(null,a_f,from_res.call(null,res));

return res;
}));

(wayra.core_test.fpreempt.cljs$lang$maxFixedArity = 2);

wayra.core_test.preempting = (function wayra$core_test$preempting(){
return cljs.test.test_var.call(null,wayra.core_test.preempting.cljs$lang$var);
});
wayra.core_test.preempting.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"fpreempt");

try{var fact_1730 = wayra.core_test.fpreempt.call(null,wayra.core_test.pre_fact);
try{var values__1351__auto___1731 = (new cljs.core.List(null,fact_1730.call(null,(-1)),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__1352__auto___1732 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1731);
if(cljs.core.truth_(result__1352__auto___1732)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(-1)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1731),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(-1)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1731),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1720){var t__1396__auto___1733 = e1720;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(-1)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1733,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1734 = (new cljs.core.List(null,fact_1730.call(null,(0)),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__1352__auto___1735 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1734);
if(cljs.core.truth_(result__1352__auto___1735)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1734),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1734),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1721){var t__1396__auto___1736 = e1721;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1736,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1737 = (new cljs.core.List(null,fact_1730.call(null,(1)),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__1352__auto___1738 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1737);
if(cljs.core.truth_(result__1352__auto___1738)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(1)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1737),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(1)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1737),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1722){var t__1396__auto___1739 = e1722;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(1)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1739,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1740 = (new cljs.core.List(null,fact_1730.call(null,(2)),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__1352__auto___1741 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1740);
if(cljs.core.truth_(result__1352__auto___1741)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(2)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1740),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(2)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1740),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1723){var t__1396__auto___1742 = e1723;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(2)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1742,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1743 = (new cljs.core.List(null,fact_1730.call(null,(3)),(new cljs.core.List(null,(6),null,(1),null)),(2),null));
var result__1352__auto___1744 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1743);
if(cljs.core.truth_(result__1352__auto___1744)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(3)),(6)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1743),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(3)),(6)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1743),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1724){var t__1396__auto___1745 = e1724;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(3)),(6)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1745,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__1351__auto___1746 = (new cljs.core.List(null,fact_1730.call(null,(4)),(new cljs.core.List(null,(24),null,(1),null)),(2),null));
var result__1352__auto___1747 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1746);
if(cljs.core.truth_(result__1352__auto___1747)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(4)),(24)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1746),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(4)),(24)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1746),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1725){var t__1396__auto___1748 = e1725;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"fact","fact",840714996,null),(4)),(24)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1748,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"preemptm");

try{var m_1749 = (function (){
var fact = wayra.impl.eval_m.call(null,wayra.core.preemptm.call(null,wayra.core_test.fpreempt,wayra.core_test.mpre_fact));
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,fact.call(null,(-1))));

wayra.impl.eval_m.call(null,wayra.core.tell.call(null,fact.call(null,(0))));

wayra.impl.eval_m.call(null,wayra.core.tell.call(null,fact.call(null,(1))));

wayra.impl.eval_m.call(null,wayra.core.tell.call(null,fact.call(null,(2))));

wayra.impl.eval_m.call(null,wayra.core.tell.call(null,fact.call(null,(3))));

return wayra.core.tell.call(null,fact.call(null,(4)));
});
try{var values__1351__auto___1750 = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"NaN","NaN",-973613374)], null),m_1749),(new cljs.core.List(null,cljs.core.list((24),(6),(2),(1),(1),new cljs.core.Keyword(null,"NaN","NaN",-973613374)),null,(1),null)),(2),null));
var result__1352__auto___1751 = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto___1750);
if(cljs.core.truth_(result__1352__auto___1751)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"NaN","NaN",-973613374)], null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((24),(6),(2),(1),(1),new cljs.core.Keyword(null,"NaN","NaN",-973613374)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto___1750),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"NaN","NaN",-973613374)], null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((24),(6),(2),(1),(1),new cljs.core.Keyword(null,"NaN","NaN",-973613374)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto___1750),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e1726){var t__1396__auto___1752 = e1726;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"NaN","NaN",-973613374)], null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((24),(6),(2),(1),(1),new cljs.core.Keyword(null,"NaN","NaN",-973613374)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto___1752,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var m = (function (){
var map__1727 = wayra.impl.eval_m.call(null,wayra.core.preemptm.call(null,wayra.core_test.fpreempt,new cljs.core.Keyword(null,"fact","fact",-799816531),wayra.core_test.mpre_fact2));
var map__1727__$1 = (((((!((map__1727 == null))))?(((((map__1727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1727):map__1727);
var fact = cljs.core.get.call(null,map__1727__$1,new cljs.core.Keyword(null,"fact","fact",-799816531));
var a = cljs.core.get.call(null,map__1727__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
wayra.impl.eval_m.call(null,wayra.core.tell.call(null,a));

wayra.impl.eval_m.call(null,wayra.core.tell.call(null,fact.call(null,(-1))));

wayra.impl.eval_m.call(null,wayra.core.tell.call(null,fact.call(null,(0))));

wayra.impl.eval_m.call(null,wayra.core.tell.call(null,fact.call(null,(1))));

wayra.impl.eval_m.call(null,wayra.core.tell.call(null,fact.call(null,(2))));

wayra.impl.eval_m.call(null,wayra.core.tell.call(null,fact.call(null,(3))));

return wayra.core.tell.call(null,fact.call(null,(4)));
});
try{var values__1351__auto__ = (new cljs.core.List(null,wayra.core_test.get_writer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"NaN","NaN",-973613374)], null),m),(new cljs.core.List(null,cljs.core.list((24),(6),(2),(1),(1),new cljs.core.Keyword(null,"NaN","NaN",-973613374),new cljs.core.Keyword(null,"a","a",-2123407586)),null,(1),null)),(2),null));
var result__1352__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto__);
if(cljs.core.truth_(result__1352__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"NaN","NaN",-973613374)], null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((24),(6),(2),(1),(1),new cljs.core.Keyword(null,"NaN","NaN",-973613374),new cljs.core.Keyword(null,"a","a",-2123407586)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"NaN","NaN",-973613374)], null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((24),(6),(2),(1),(1),new cljs.core.Keyword(null,"NaN","NaN",-973613374),new cljs.core.Keyword(null,"a","a",-2123407586)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__1352__auto__;
}catch (e1729){var t__1396__auto__ = e1729;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get-writer","get-writer",-1930573065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"NaN","NaN",-973613374)], null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((24),(6),(2),(1),(1),new cljs.core.Keyword(null,"NaN","NaN",-973613374),new cljs.core.Keyword(null,"a","a",-2123407586)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(wayra.core_test.preempting.cljs$lang$var = new cljs.core.Var(function(){return wayra.core_test.preempting;},new cljs.core.Symbol("wayra.core-test","preempting","wayra.core-test/preempting",-33248548,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wayra.core-test","wayra.core-test",1224582005,null),new cljs.core.Symbol(null,"preempting","preempting",227645548,null),"test/wayra/core_test.cljc",20,1,192,192,cljs.core.List.EMPTY,null,(cljs.core.truth_(wayra.core_test.preempting)?wayra.core_test.preempting.cljs$lang$test:null)])));
wayra.core_test.functor = (function wayra$core_test$functor(){
return cljs.test.test_var.call(null,wayra.core_test.functor.cljs$lang$var);
});
wayra.core_test.functor.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"vector");

try{try{var values__1351__auto__ = (new cljs.core.List(null,wayra.core._LT__SHARP__GT_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),cljs.core.inc,(function (p1__1753_SHARP_){
return (p1__1753_SHARP_ * (2));
})),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6),(8),(10)], null),null,(1),null)),(2),null));
var result__1352__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__1351__auto__);
if(cljs.core.truth_(result__1352__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<#>","<#>",709955704,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.Symbol(null,"inc","inc",324505433,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1753#","p1__1753#",-739032854,null)], null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"p1__1753#","p1__1753#",-739032854,null),(2)))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6),(8),(10)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__1351__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<#>","<#>",709955704,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.Symbol(null,"inc","inc",324505433,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1753#","p1__1753#",-739032854,null)], null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"p1__1753#","p1__1753#",-739032854,null),(2)))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6),(8),(10)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__1351__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__1352__auto__;
}catch (e1754){var t__1396__auto__ = e1754;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<#>","<#>",709955704,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.Symbol(null,"inc","inc",324505433,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1753#","p1__1753#",-739032854,null)], null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"p1__1753#","p1__1753#",-739032854,null),(2)))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6),(8),(10)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__1396__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(wayra.core_test.functor.cljs$lang$var = new cljs.core.Var(function(){return wayra.core_test.functor;},new cljs.core.Symbol("wayra.core-test","functor","wayra.core-test/functor",60745201,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wayra.core-test","wayra.core-test",1224582005,null),new cljs.core.Symbol(null,"functor","functor",-1646013343,null),"test/wayra/core_test.cljc",17,1,222,222,cljs.core.List.EMPTY,null,(cljs.core.truth_(wayra.core_test.functor)?wayra.core_test.functor.cljs$lang$test:null)])));

//# sourceMappingURL=core_test.js.map
