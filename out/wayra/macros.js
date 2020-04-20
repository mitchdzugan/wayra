// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('wayra.macros');
goog.require('cljs.core');
goog.require('wayra.impl');
wayra.macros.add_fdo = (function wayra$macros$add_fdo(sym){
return (function() { 
var G__3182__delegate = function (statements){
var fn_QMARK_ = cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"fn","fn",465265323,null));
var defn_QMARK_ = cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"defn","defn",-126010802,null));
var n_QMARK_ = ((defn_QMARK_) || (fn_QMARK_));
var docstring_QMARK_ = (((!(fn_QMARK_))) && (typeof cljs.core.nth.call(null,statements,(1)) === 'string'));
var take_n = (((1) + ((docstring_QMARK_)?(1):(0))) + ((fn_QMARK_)?(-1):(0)));
var untouched = cljs.core.take.call(null,take_n,statements);
var add_to_fn = (function (p__3178){
var vec__3179 = p__3178;
var seq__3180 = cljs.core.seq.call(null,vec__3179);
var first__3181 = cljs.core.first.call(null,seq__3180);
var seq__3180__$1 = cljs.core.next.call(null,seq__3180);
var args = first__3181;
var statements__$1 = seq__3180__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("wayra.macros","mdo","wayra.macros/mdo",-52453031,null),null,(1),null)),statements__$1))),null,(1),null)))));
});
var rest = cljs.core.drop.call(null,take_n,statements);
var updated = ((((n_QMARK_) && (cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,rest)))))?add_to_fn.call(null,rest):((n_QMARK_)?cljs.core.map.call(null,add_to_fn,rest):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("wayra.macros","mdo","wayra.macros/mdo",-52453031,null),null,(1),null)),rest))),null,(1),null)))))
));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,sym,null,(1),null)),untouched,updated)));
};
var G__3182 = function (var_args){
var statements = null;
if (arguments.length > 0) {
var G__3183__i = 0, G__3183__a = new Array(arguments.length -  0);
while (G__3183__i < G__3183__a.length) {G__3183__a[G__3183__i] = arguments[G__3183__i + 0]; ++G__3183__i;}
  statements = new cljs.core.IndexedSeq(G__3183__a,0,null);
} 
return G__3182__delegate.call(this,statements);};
G__3182.cljs$lang$maxFixedArity = 0;
G__3182.cljs$lang$applyTo = (function (arglist__3184){
var statements = cljs.core.seq(arglist__3184);
return G__3182__delegate(statements);
});
G__3182.cljs$core$IFn$_invoke$arity$variadic = G__3182__delegate;
return G__3182;
})()
;
});

//# sourceMappingURL=macros.js.map
