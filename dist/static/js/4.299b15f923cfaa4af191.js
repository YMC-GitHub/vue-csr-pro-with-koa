webpackJsonp([4],{XrXe:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",[e._v(e._s(e.$t("message.hello")))]),e._v(" "),t("div",{staticClass:"locale-changer"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.$i18n,"locale",n.target.multiple?t:t[0])}}},e._l(e.langs,function(n,a){return t("option",{key:"Lang"+a,domProps:{value:n}},[e._v("\n        "+e._s(n)+"\n      ")])}),0)])])},staticRenderFns:[]},l=t("VU/8")({data:function(){return{langs:["ch","en"]}},methods:{fetchLang:function(e){},changeLang:function(){}},title:function(){return"Koa Vue SSR| Lang"}},a,!1,null,null,null);n.default=l.exports}});
//# sourceMappingURL=4.299b15f923cfaa4af191.js.map