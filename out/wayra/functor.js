// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('wayra.functor');
goog.require('cljs.core');
goog.require('wayra.impl');

/**
 * @interface
 */
wayra.functor.Functor = function(){};

/**
 * map f over container
 */
wayra.functor.fmap = (function wayra$functor$fmap(this$,f){
if((((!((this$ == null)))) && ((!((this$.wayra$functor$Functor$fmap$arity$2 == null)))))){
return this$.wayra$functor$Functor$fmap$arity$2(this$,f);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (wayra.functor.fmap[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$,f);
} else {
var m__4485__auto__ = (wayra.functor.fmap["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"Functor.fmap",this$);
}
}
}
});

goog.object.set(wayra.functor.Functor,"null",true);

goog.object.set(wayra.functor.fmap,"null",(function (_,___$1){
return null;
}));

(cljs.core.PersistentVector.prototype.wayra$functor$Functor$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.wayra$functor$Functor$fmap$arity$2 = (function (v,f){
var v__$1 = this;
return cljs.core.vec.call(null,cljs.core.map.call(null,f,v__$1));
}));

(cljs.core.List.prototype.wayra$functor$Functor$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.wayra$functor$Functor$fmap$arity$2 = (function (l,f){
var l__$1 = this;
return cljs.core.map.call(null,l__$1,f);
}));

(cljs.core.LazySeq.prototype.wayra$functor$Functor$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.wayra$functor$Functor$fmap$arity$2 = (function (l,f){
var l__$1 = this;
return cljs.core.map.call(null,l__$1,f);
}));

(cljs.core.Cons.prototype.wayra$functor$Functor$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.wayra$functor$Functor$fmap$arity$2 = (function (l,f){
var l__$1 = this;
return cljs.core.map.call(null,l__$1,f);
}));

(Function.prototype.wayra$functor$Functor$ = cljs.core.PROTOCOL_SENTINEL);

(Function.prototype.wayra$functor$Functor$fmap$arity$2 = (function (m,f){
var m__$1 = this;
return (function (){
return wayra.impl.pure.call(null,f.call(null,wayra.impl.eval_m.call(null,m__$1)));
});
}));

(cljs.core.PersistentArrayMap.prototype.wayra$functor$Functor$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.wayra$functor$Functor$fmap$arity$2 = (function (m,f){
var m__$1 = this;
return (function (){
return wayra.impl.pure.call(null,f.call(null,wayra.impl.eval_m.call(null,m__$1)));
});
}));

//# sourceMappingURL=functor.js.map
