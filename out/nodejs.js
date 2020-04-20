// Compiled by ClojureScript 1.10.597 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__3847__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3848__i = 0, G__3848__a = new Array(arguments.length -  0);
while (G__3848__i < G__3848__a.length) {G__3848__a[G__3848__i] = arguments[G__3848__i + 0]; ++G__3848__i;}
  args = new cljs.core.IndexedSeq(G__3848__a,0,null);
} 
return G__3847__delegate.call(this,args);};
G__3847.cljs$lang$maxFixedArity = 0;
G__3847.cljs$lang$applyTo = (function (arglist__3849){
var args = cljs.core.seq(arglist__3849);
return G__3847__delegate(args);
});
G__3847.cljs$core$IFn$_invoke$arity$variadic = G__3847__delegate;
return G__3847;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__3850__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__3850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3851__i = 0, G__3851__a = new Array(arguments.length -  0);
while (G__3851__i < G__3851__a.length) {G__3851__a[G__3851__i] = arguments[G__3851__i + 0]; ++G__3851__i;}
  args = new cljs.core.IndexedSeq(G__3851__a,0,null);
} 
return G__3850__delegate.call(this,args);};
G__3850.cljs$lang$maxFixedArity = 0;
G__3850.cljs$lang$applyTo = (function (arglist__3852){
var args = cljs.core.seq(arglist__3852);
return G__3850__delegate(args);
});
G__3850.cljs$core$IFn$_invoke$arity$variadic = G__3850__delegate;
return G__3850;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
