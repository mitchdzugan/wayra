// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('wayra.impl');
goog.require('cljs.core');
wayra.impl._STAR_state_STAR_ = [null,null,null];
wayra.impl.unwrap_f = (function wayra$impl$unwrap_f(mf){
var m = mf;
while(true){
if(cljs.core.fn_QMARK_.call(null,m)){
var G__3047 = m.call(null);
m = G__3047;
continue;
} else {
return m;
}
break;
}
});
wayra.impl.eval_m = (function wayra$impl$eval_m(mf){
if(((wayra.impl._STAR_state_STAR_[(2)]) == null)){
var map__3049 = wayra.impl.unwrap_f.call(null,mf);
var map__3049__$1 = (((((!((map__3049 == null))))?(((((map__3049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3049):map__3049);
var type = cljs.core.get.call(null,map__3049__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var val = cljs.core.get.call(null,map__3049__$1,new cljs.core.Keyword(null,"val","val",128701612));
var err = cljs.core.get.call(null,map__3049__$1,new cljs.core.Keyword(null,"err","err",-2089457205));
if(((wayra.impl._STAR_state_STAR_[(2)]) == null)){
return (wayra.impl._STAR_state_STAR_[(1)] = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),(function (){
return (wayra.impl._STAR_state_STAR_[(0)]);
}),new cljs.core.Keyword(null,"pure","pure",1433370394),(function (){
return val;
}),new cljs.core.Keyword(null,"set","set",304602554),(function (){
(wayra.impl._STAR_state_STAR_[(0)] = val);

return null;
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (){
(wayra.impl._STAR_state_STAR_[(2)] = err);

return null;
})], null),type).call(null));
} else {
return null;
}
} else {
return null;
}
});
wayra.impl.raw_exec = (function wayra$impl$raw_exec(mf,s){
var _STAR_state_STAR__orig_val__3051 = wayra.impl._STAR_state_STAR_;
var _STAR_state_STAR__temp_val__3052 = [s,null,null];
(wayra.impl._STAR_state_STAR_ = _STAR_state_STAR__temp_val__3052);

try{wayra.impl.eval_m.call(null,mf);

var state = (wayra.impl._STAR_state_STAR_[(0)]);
var result = (wayra.impl._STAR_state_STAR_[(1)]);
var error = (wayra.impl._STAR_state_STAR_[(2)]);
return cljs.core.merge.call(null,(((error == null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),result], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"writer","writer",-277568236),new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(state)], null));
}finally {(wayra.impl._STAR_state_STAR_ = _STAR_state_STAR__orig_val__3051);
}});
wayra.impl.raw_get = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"get","get",1683182755)], null);
wayra.impl.raw_set = (function wayra$impl$raw_set(s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"val","val",128701612),s], null);
});
wayra.impl.pure = (function wayra$impl$pure(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pure","pure",1433370394),new cljs.core.Keyword(null,"val","val",128701612),x], null);
});
wayra.impl.fail = (function wayra$impl$fail(err){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"err","err",-2089457205),err], null);
});

//# sourceMappingURL=impl.js.map
