// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('wayra.monoid');
goog.require('cljs.core');
goog.require('clojure.set');

/**
 * @interface
 */
wayra.monoid.Monoid = function(){};

/**
 * add single element
 */
wayra.monoid.maplus = (function wayra$monoid$maplus(a,b){
if((((!((a == null)))) && ((!((a.wayra$monoid$Monoid$maplus$arity$2 == null)))))){
return a.wayra$monoid$Monoid$maplus$arity$2(a,b);
} else {
var x__4487__auto__ = (((a == null))?null:a);
var m__4488__auto__ = (wayra.monoid.maplus[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,a,b);
} else {
var m__4485__auto__ = (wayra.monoid.maplus["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"Monoid.maplus",a);
}
}
}
});

/**
 * combined two monoids
 */
wayra.monoid.mappend = (function wayra$monoid$mappend(a,b){
if((((!((a == null)))) && ((!((a.wayra$monoid$Monoid$mappend$arity$2 == null)))))){
return a.wayra$monoid$Monoid$mappend$arity$2(a,b);
} else {
var x__4487__auto__ = (((a == null))?null:a);
var m__4488__auto__ = (wayra.monoid.mappend[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,a,b);
} else {
var m__4485__auto__ = (wayra.monoid.mappend["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"Monoid.mappend",a);
}
}
}
});

/**
 * get empty version of collection
 */
wayra.monoid.mempty = (function wayra$monoid$mempty(a){
if((((!((a == null)))) && ((!((a.wayra$monoid$Monoid$mempty$arity$1 == null)))))){
return a.wayra$monoid$Monoid$mempty$arity$1(a);
} else {
var x__4487__auto__ = (((a == null))?null:a);
var m__4488__auto__ = (wayra.monoid.mempty[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,a);
} else {
var m__4485__auto__ = (wayra.monoid.mempty["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,a);
} else {
throw cljs.core.missing_protocol.call(null,"Monoid.mempty",a);
}
}
}
});

goog.object.set(wayra.monoid.Monoid,"null",true);

goog.object.set(wayra.monoid.maplus,"null",(function (a,b){
return cljs.core.conj.call(null,a,b);
}));

goog.object.set(wayra.monoid.mappend,"null",(function (a,b){
return b;
}));

goog.object.set(wayra.monoid.mempty,"null",(function (_){
return null;
}));

(cljs.core.PersistentVector.prototype.wayra$monoid$Monoid$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.wayra$monoid$Monoid$maplus$arity$2 = (function (a,b){
var a__$1 = this;
return cljs.core.conj.call(null,a__$1,b);
}));

(cljs.core.PersistentVector.prototype.wayra$monoid$Monoid$mappend$arity$2 = (function (a,b){
var a__$1 = this;
return cljs.core.vec.call(null,cljs.core.concat.call(null,a__$1,b));
}));

(cljs.core.PersistentVector.prototype.wayra$monoid$Monoid$mempty$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
}));

(cljs.core.List.prototype.wayra$monoid$Monoid$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.wayra$monoid$Monoid$maplus$arity$2 = (function (a,b){
var a__$1 = this;
return cljs.core.conj.call(null,a__$1,b);
}));

(cljs.core.List.prototype.wayra$monoid$Monoid$mappend$arity$2 = (function (a,b){
var a__$1 = this;
return cljs.core.concat.call(null,b,a__$1);
}));

(cljs.core.List.prototype.wayra$monoid$Monoid$mempty$arity$1 = (function (_){
var ___$1 = this;
return null;
}));

(cljs.core.LazySeq.prototype.wayra$monoid$Monoid$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.wayra$monoid$Monoid$maplus$arity$2 = (function (a,b){
var a__$1 = this;
return cljs.core.conj.call(null,a__$1,b);
}));

(cljs.core.LazySeq.prototype.wayra$monoid$Monoid$mappend$arity$2 = (function (a,b){
var a__$1 = this;
return cljs.core.concat.call(null,b,a__$1);
}));

(cljs.core.LazySeq.prototype.wayra$monoid$Monoid$mempty$arity$1 = (function (_){
var ___$1 = this;
return null;
}));

(cljs.core.Cons.prototype.wayra$monoid$Monoid$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.wayra$monoid$Monoid$maplus$arity$2 = (function (a,b){
var a__$1 = this;
return cljs.core.conj.call(null,a__$1,b);
}));

(cljs.core.Cons.prototype.wayra$monoid$Monoid$mappend$arity$2 = (function (a,b){
var a__$1 = this;
return cljs.core.concat.call(null,b,a__$1);
}));

(cljs.core.Cons.prototype.wayra$monoid$Monoid$mempty$arity$1 = (function (_){
var ___$1 = this;
return null;
}));

(cljs.core.PersistentHashSet.prototype.wayra$monoid$Monoid$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.wayra$monoid$Monoid$maplus$arity$2 = (function (a,b){
var a__$1 = this;
return cljs.core.conj.call(null,a__$1,b);
}));

(cljs.core.PersistentHashSet.prototype.wayra$monoid$Monoid$mappend$arity$2 = (function (a,b){
var a__$1 = this;
return clojure.set.union.call(null,a__$1,b);
}));

(cljs.core.PersistentHashSet.prototype.wayra$monoid$Monoid$mempty$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.PersistentHashSet.EMPTY;
}));

(cljs.core.PersistentArrayMap.prototype.wayra$monoid$Monoid$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.wayra$monoid$Monoid$maplus$arity$2 = (function (a,b){
var a__$1 = this;
var a_ = cljs.core.merge.call(null,a__$1,cljs.core.reduce_kv.call(null,(function (m,k,_){
return cljs.core.assoc.call(null,m,k,cljs.core.get.call(null,a__$1,k));
}),cljs.core.PersistentArrayMap.EMPTY,b));
return cljs.core.merge_with.call(null,wayra.monoid.maplus,a_,b);
}));

(cljs.core.PersistentArrayMap.prototype.wayra$monoid$Monoid$mappend$arity$2 = (function (a,b){
var a__$1 = this;
var a_ = cljs.core.merge.call(null,a__$1,cljs.core.reduce_kv.call(null,(function (m,k,_){
return cljs.core.assoc.call(null,m,k,cljs.core.get.call(null,a__$1,k));
}),cljs.core.PersistentArrayMap.EMPTY,b));
return cljs.core.merge_with.call(null,wayra.monoid.mappend,a_,b);
}));

(cljs.core.PersistentArrayMap.prototype.wayra$monoid$Monoid$mempty$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.reduce_kv.call(null,(function (p1__3042_SHARP_,p2__3043_SHARP_,p3__3044_SHARP_){
return cljs.core.assoc.call(null,p1__3042_SHARP_,p2__3043_SHARP_,wayra.monoid.mempty.call(null,p3__3044_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,m__$1);
}));

//# sourceMappingURL=monoid.js.map
