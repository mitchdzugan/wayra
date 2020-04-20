// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('wayra.core');
goog.require('cljs.core');
goog.require('wayra.impl');
goog.require('wayra.macros');
goog.require('wayra.functor');
goog.require('wayra.monoid');
wayra.core.mempty = wayra.monoid.mempty;
wayra.core.maplus = wayra.monoid.maplus;
wayra.core.mappend = wayra.monoid.mappend;
wayra.core._LT__SHARP__GT_ = (function wayra$core$_LT__SHARP__GT_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___1165 = arguments.length;
var i__4790__auto___1166 = (0);
while(true){
if((i__4790__auto___1166 < len__4789__auto___1165)){
args__4795__auto__.push((arguments[i__4790__auto___1166]));

var G__1167 = (i__4790__auto___1166 + (1));
i__4790__auto___1166 = G__1167;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return wayra.core._LT__SHARP__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(wayra.core._LT__SHARP__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (root,fns){
return cljs.core.reduce.call(null,(function (p1__1161_SHARP_,p2__1162_SHARP_){
return wayra.functor.fmap.call(null,p1__1161_SHARP_,p2__1162_SHARP_);
}),root,fns);
}));

(wayra.core._LT__SHARP__GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(wayra.core._LT__SHARP__GT_.cljs$lang$applyTo = (function (seq1163){
var G__1164 = cljs.core.first.call(null,seq1163);
var seq1163__$1 = cljs.core.next.call(null,seq1163);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1164,seq1163__$1);
}));

wayra.core._GT__GT__EQ_ = (function wayra$core$_GT__GT__EQ_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___1172 = arguments.length;
var i__4790__auto___1173 = (0);
while(true){
if((i__4790__auto___1173 < len__4789__auto___1172)){
args__4795__auto__.push((arguments[i__4790__auto___1173]));

var G__1174 = (i__4790__auto___1173 + (1));
i__4790__auto___1173 = G__1174;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return wayra.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(wayra.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (root,fns){
return cljs.core.reduce.call(null,(function (p1__1169_SHARP_,p2__1168_SHARP_){
return (function (){
return p2__1168_SHARP_.call(null,wayra.impl.eval_m.call(null,p1__1169_SHARP_));
});
}),root,fns);
}));

(wayra.core._GT__GT__EQ_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(wayra.core._GT__GT__EQ_.cljs$lang$applyTo = (function (seq1170){
var G__1171 = cljs.core.first.call(null,seq1170);
var seq1170__$1 = cljs.core.next.call(null,seq1170);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1171,seq1170__$1);
}));

wayra.core.pure = wayra.impl.pure;
wayra.core.fail = wayra.impl.fail;
wayra.core.ask = wayra.core._LT__SHARP__GT_.call(null,wayra.impl.raw_get,new cljs.core.Keyword(null,"reader","reader",169660853));
wayra.core.asks = (function wayra$core$asks(f){
return (function (){
var reader = wayra.impl.eval_m.call(null,wayra.core.ask);
return wayra.impl.pure.call(null,f.call(null,reader));
});
});
wayra.core.tell = (function wayra$core$tell(w){
return (function (){
var map__1175 = wayra.impl.eval_m.call(null,wayra.impl.raw_get);
var map__1175__$1 = (((((!((map__1175 == null))))?(((((map__1175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1175):map__1175);
var raw_state = map__1175__$1;
var writer = cljs.core.get.call(null,map__1175__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
return wayra.impl.raw_set.call(null,cljs.core.assoc.call(null,raw_state,new cljs.core.Keyword(null,"writer","writer",-277568236),wayra.monoid.maplus.call(null,writer,w)));
});
});
wayra.core.get = (function wayra$core$get(){
var raw_state = wayra.impl.eval_m.call(null,wayra.impl.raw_get);
return wayra.impl.pure.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(raw_state));
});
wayra.core.gets = (function wayra$core$gets(f){
return (function (){
var state = wayra.impl.eval_m.call(null,wayra.core.get);
return wayra.impl.pure.call(null,f.call(null,state));
});
});
wayra.core.put = (function wayra$core$put(s){
return wayra.core._GT__GT__EQ_.call(null,wayra.impl.raw_get,(function (p1__1177_SHARP_){
return wayra.impl.raw_set.call(null,cljs.core.assoc.call(null,p1__1177_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),s));
}));
});
wayra.core.modify = (function wayra$core$modify(f){
return wayra.core._GT__GT__EQ_.call(null,wayra.impl.raw_get,(function (p1__1178_SHARP_){
return wayra.impl.raw_set.call(null,cljs.core.assoc.call(null,p1__1178_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),f.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(p1__1178_SHARP_))));
}));
});
wayra.core.exec = (function wayra$core$exec(p__1179,m){
var map__1180 = p__1179;
var map__1180__$1 = (((((!((map__1180 == null))))?(((((map__1180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1180):map__1180);
var reader = cljs.core.get.call(null,map__1180__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var init_state = cljs.core.get.call(null,map__1180__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var init_writer = cljs.core.get.call(null,map__1180__$1,new cljs.core.Keyword(null,"init-writer","init-writer",-97264003));
return wayra.impl.raw_exec.call(null,m,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reader","reader",169660853),reader,new cljs.core.Keyword(null,"state","state",-1988618099),init_state,new cljs.core.Keyword(null,"writer","writer",-277568236),init_writer], null));
});
wayra.core.mapm = (function wayra$core$mapm(f,s){
return (function (){
if(cljs.core.empty_QMARK_.call(null,s)){
return wayra.core.pure.call(null,cljs.core.List.EMPTY);
} else {
return wayra.core.pure.call(null,cljs.core.reverse.call(null,(function (){var G__1185 = s;
var vec__1186 = G__1185;
var seq__1187 = cljs.core.seq.call(null,vec__1186);
var first__1188 = cljs.core.first.call(null,seq__1187);
var seq__1187__$1 = cljs.core.next.call(null,seq__1187);
var x = first__1188;
var xs = seq__1187__$1;
var acc = null;
var G__1185__$1 = G__1185;
var acc__$1 = acc;
while(true){
var vec__1192 = G__1185__$1;
var seq__1193 = cljs.core.seq.call(null,vec__1192);
var first__1194 = cljs.core.first.call(null,seq__1193);
var seq__1193__$1 = cljs.core.next.call(null,seq__1193);
var x__$1 = first__1194;
var xs__$1 = seq__1193__$1;
var acc__$2 = acc__$1;
if((xs__$1 == null)){
return cljs.core.conj.call(null,acc__$2,wayra.impl.eval_m.call(null,f.call(null,x__$1)));
} else {
var G__1195 = xs__$1;
var G__1196 = cljs.core.conj.call(null,acc__$2,wayra.impl.eval_m.call(null,f.call(null,x__$1)));
G__1185__$1 = G__1195;
acc__$1 = G__1196;
continue;
}
break;
}
})()));
}
});
});
wayra.core.eachm = (function wayra$core$eachm(s,f){
return (function (){
var seq__1197_1201 = cljs.core.seq.call(null,s);
var chunk__1198_1202 = null;
var count__1199_1203 = (0);
var i__1200_1204 = (0);
while(true){
if((i__1200_1204 < count__1199_1203)){
var v_1205 = cljs.core._nth.call(null,chunk__1198_1202,i__1200_1204);
wayra.impl.eval_m.call(null,f.call(null,v_1205));


var G__1206 = seq__1197_1201;
var G__1207 = chunk__1198_1202;
var G__1208 = count__1199_1203;
var G__1209 = (i__1200_1204 + (1));
seq__1197_1201 = G__1206;
chunk__1198_1202 = G__1207;
count__1199_1203 = G__1208;
i__1200_1204 = G__1209;
continue;
} else {
var temp__5735__auto___1210 = cljs.core.seq.call(null,seq__1197_1201);
if(temp__5735__auto___1210){
var seq__1197_1211__$1 = temp__5735__auto___1210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1197_1211__$1)){
var c__4609__auto___1212 = cljs.core.chunk_first.call(null,seq__1197_1211__$1);
var G__1213 = cljs.core.chunk_rest.call(null,seq__1197_1211__$1);
var G__1214 = c__4609__auto___1212;
var G__1215 = cljs.core.count.call(null,c__4609__auto___1212);
var G__1216 = (0);
seq__1197_1201 = G__1213;
chunk__1198_1202 = G__1214;
count__1199_1203 = G__1215;
i__1200_1204 = G__1216;
continue;
} else {
var v_1217 = cljs.core.first.call(null,seq__1197_1211__$1);
wayra.impl.eval_m.call(null,f.call(null,v_1217));


var G__1218 = cljs.core.next.call(null,seq__1197_1211__$1);
var G__1219 = null;
var G__1220 = (0);
var G__1221 = (0);
seq__1197_1201 = G__1218;
chunk__1198_1202 = G__1219;
count__1199_1203 = G__1220;
i__1200_1204 = G__1221;
continue;
}
} else {
}
}
break;
}

return wayra.core.pure.call(null,null);
});
});
wayra.core.preemptm = (function wayra$core$preemptm(var_args){
var G__1224 = arguments.length;
switch (G__1224) {
case 2:
return wayra.core.preemptm.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wayra.core.preemptm.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(wayra.core.preemptm.cljs$core$IFn$_invoke$arity$2 = (function (preempter,f){
return wayra.core.preemptm.call(null,preempter,cljs.core.identity,f);
}));

(wayra.core.preemptm.cljs$core$IFn$_invoke$arity$3 = (function (preempter,from_res,f){
return wayra.core.pure.call(null,preempter.call(null,from_res,(function (p1__1222_SHARP_){
return wayra.impl.eval_m.call(null,f.call(null,p1__1222_SHARP_));
})));
}));

(wayra.core.preemptm.cljs$lang$maxFixedArity = 3);

wayra.core.local = (function wayra$core$local(f,m){
return (function (){
var map__1226 = wayra.impl.eval_m.call(null,wayra.impl.raw_get);
var map__1226__$1 = (((((!((map__1226 == null))))?(((((map__1226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1226):map__1226);
var raw_state = map__1226__$1;
var reader = cljs.core.get.call(null,map__1226__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
wayra.impl.eval_m.call(null,wayra.impl.raw_set.call(null,cljs.core.assoc.call(null,raw_state,new cljs.core.Keyword(null,"reader","reader",169660853),f.call(null,reader))));

var res = wayra.impl.eval_m.call(null,m);
var new_state = wayra.impl.eval_m.call(null,wayra.impl.raw_get);
wayra.impl.eval_m.call(null,wayra.impl.raw_set.call(null,cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"reader","reader",169660853),reader)));

return wayra.impl.pure.call(null,res);
});
});
wayra.core.erased = (function wayra$core$erased(){
var map__1228 = wayra.impl.eval_m.call(null,wayra.impl.raw_get);
var map__1228__$1 = (((((!((map__1228 == null))))?(((((map__1228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1228):map__1228);
var writer = cljs.core.get.call(null,map__1228__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
return wayra.impl.pure.call(null,wayra.core.mempty.call(null,writer));
});
wayra.core.listen = (function wayra$core$listen(var_args){
var G__1231 = arguments.length;
switch (G__1231) {
case 1:
return wayra.core.listen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wayra.core.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(wayra.core.listen.cljs$core$IFn$_invoke$arity$1 = (function (m){
return (function (){
return wayra.core.listen.call(null,cljs.core.identity,m);
});
}));

(wayra.core.listen.cljs$core$IFn$_invoke$arity$2 = (function (alter_init,m){
return (function (){
var init_writer = wayra.impl.eval_m.call(null,wayra.core.erased);
var map__1232 = wayra.impl.eval_m.call(null,wayra.impl.raw_get);
var map__1232__$1 = (((((!((map__1232 == null))))?(((((map__1232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1232):map__1232);
var raw_state = map__1232__$1;
var writer = cljs.core.get.call(null,map__1232__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
wayra.impl.eval_m.call(null,wayra.impl.raw_set.call(null,cljs.core.assoc.call(null,raw_state,new cljs.core.Keyword(null,"writer","writer",-277568236),alter_init.call(null,init_writer))));

var res = wayra.impl.eval_m.call(null,m);
var new_state = wayra.impl.eval_m.call(null,wayra.impl.raw_get);
var bindings_array1234 = [null];
(bindings_array1234[(0)] = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(new_state));

var listened = (bindings_array1234[(0)]);
wayra.impl.eval_m.call(null,wayra.impl.raw_set.call(null,cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"writer","writer",-277568236),wayra.core.mappend.call(null,writer,listened))));

return wayra.impl.pure.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,listened], null));
});
}));

(wayra.core.listen.cljs$lang$maxFixedArity = 2);

wayra.core.pass = (function wayra$core$pass(var_args){
var G__1237 = arguments.length;
switch (G__1237) {
case 1:
return wayra.core.pass.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wayra.core.pass.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(wayra.core.pass.cljs$core$IFn$_invoke$arity$1 = (function (m){
return (function (){
return wayra.core.pass.call(null,cljs.core.identity,m);
});
}));

(wayra.core.pass.cljs$core$IFn$_invoke$arity$2 = (function (alter_init,m){
return (function (){
var init_writer = wayra.impl.eval_m.call(null,wayra.core.erased);
var map__1238 = wayra.impl.eval_m.call(null,wayra.impl.raw_get);
var map__1238__$1 = (((((!((map__1238 == null))))?(((((map__1238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1238):map__1238);
var raw_state = map__1238__$1;
var writer = cljs.core.get.call(null,map__1238__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
wayra.impl.eval_m.call(null,wayra.impl.raw_set.call(null,cljs.core.assoc.call(null,raw_state,new cljs.core.Keyword(null,"writer","writer",-277568236),alter_init.call(null,init_writer))));

var vec__1240 = wayra.impl.eval_m.call(null,m);
var res = cljs.core.nth.call(null,vec__1240,(0),null);
var f = cljs.core.nth.call(null,vec__1240,(1),null);
var new_state = wayra.impl.eval_m.call(null,wayra.impl.raw_get);
var bindings_array1243 = [null];
(bindings_array1243[(0)] = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(new_state));

var listened = (bindings_array1243[(0)]);
wayra.impl.eval_m.call(null,wayra.impl.raw_set.call(null,cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"writer","writer",-277568236),wayra.core.mappend.call(null,writer,f.call(null,listened)))));

return wayra.impl.pure.call(null,res);
});
}));

(wayra.core.pass.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=core.js.map
