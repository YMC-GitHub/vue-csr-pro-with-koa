webpackJsonp([6],{SKkE:function(t,e){},jNyJ:function(t,e){t.exports=[{id:"m_1",threadID:"t_1",threadName:"Jing and Bill",authorName:"Bill",text:"Hey Jing, want to give a Flux talk at ForwardJS?",timestamp:Date.now()-99999},{id:"m_2",threadID:"t_1",threadName:"Jing and Bill",authorName:"Bill",text:"Seems like a pretty cool conference.",timestamp:Date.now()-89999},{id:"m_3",threadID:"t_1",threadName:"Jing and Bill",authorName:"Jing",text:"Sounds good.  Will they be serving dessert?",timestamp:Date.now()-79999},{id:"m_4",threadID:"t_2",threadName:"Dave and Bill",authorName:"Bill",text:"Hey Dave, want to get a beer after the conference?",timestamp:Date.now()-69999},{id:"m_5",threadID:"t_2",threadName:"Dave and Bill",authorName:"Dave",text:"Totally!  Meet you at the hotel bar.",timestamp:Date.now()-59999},{id:"m_6",threadID:"t_3",threadName:"Functional Heads",authorName:"Bill",text:"Hey Brian, are you going to be talking about functional stuff?",timestamp:Date.now()-49999},{id:"m_7",threadID:"t_3",threadName:"Bill and Brian",authorName:"Brian",text:"At ForwardJS?  Yeah, of course.  See you there!",timestamp:Date.now()-39999}]},qenb:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("//Fk"),r=a.n(n),i=(a("MU8w"),a("7+uW")),s=a("9JMe"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"menu-horizontal"},[a("router-link",{staticClass:"menu__heading menu__link",attrs:{to:"/home"}},[t._v("Home")]),t._v(" "),a("ul",{staticClass:"menu__list"},[a("li",{staticClass:"menu__item"},[a("router-link",{staticClass:"menu__link",attrs:{to:"/menu","active-class":"menu__item--active"}},[t._v("Menu")])],1),t._v(" "),a("li",{staticClass:"menu__item"},[a("router-link",{staticClass:"menu__link",attrs:{to:"/button","active-class":"menu__item--active"}},[t._v("Button")])],1),t._v(" "),a("li",{staticClass:"menu__item"},[a("router-link",{staticClass:"menu__link",attrs:{to:"/lang","active-class":"menu__item--active"}},[t._v("Lang")])],1),t._v(" "),a("li",{staticClass:"menu__item"},[a("router-link",{staticClass:"menu__link",attrs:{to:"/chat","active-class":"menu__item--active"}},[t._v("Chat")])],1),t._v(" "),a("li",{staticClass:"menu__item"},[a("router-link",{staticClass:"menu__link",attrs:{to:"/shop","active-class":"menu__item--active"}},[t._v("Shop")])],1)])],1),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{staticClass:"view"})],1)],1)},staticRenderFns:[]};var u=a("VU/8")({name:"APP"},o,!1,function(t){a("SKkE")},null,null).exports,c=a("NYxO"),l={posts:{},post:{},tag:{},archives:{}},m={},d={},h=a("fZjL"),_=a.n(h),v=function(t){return t.currentThreadID?t.threads[t.currentThreadID]:{}},f={threads:function(t){return t.threads},currentThread:v,currentMessages:function(t){var e=v(t);return e.messages?e.messages.map(function(e){return t.messages[e]}):[]},unreadCount:function(t){var e=t.threads;return _()(e).reduce(function(t,a){return e[a].lastMessage.isRead?t:t+1},0)},sortedMessages:function(t,e){return e.currentMessages.slice().sort(function(t,e){return t.timestamp-e.timestamp})}},p=a("jNyJ"),g=16;function D(t,e){e.isRead=e.threadID===t.currentThreadID;var a=t.threads[e.threadID];a.messages.some(function(t){return t===e.id})||(a.messages.push(e.id),a.lastMessage=e),i.a.set(t.messages,e.id,e)}function w(t,e){t.currentThreadID=e,t.threads[e],t.threads[e].lastMessage.isRead=!0}var N={namespaced:!0,state:{currentThreadID:null,threads:{},messages:{}},getters:f,actions:{getAllMessages:function(t){var e,a=t.commit;e=function(t){a("receiveAll",t)},setTimeout(function(){e(p)},g)},sendMessage:function(t,e){var a,n,r,i,s,o,u=t.commit;n=function(t){u("receiveMessage",t)},r=(a=e).text,i=a.thread,s=Date.now(),o={id:"m_"+s,text:r,timestamp:s,threadID:i.id,threadName:i.name,authorName:"Evan"},setTimeout(function(){n(o)},g)},switchThread:function(t,e){(0,t.commit)("switchThread",e)}},mutations:{receiveAll:function(t,e){var a=void 0;e.forEach(function(e){t.threads[e.threadID]||function(t,e,a){i.a.set(t.threads,e,{id:e,name:a,messages:[],lastMessage:null})}(t,e.threadID,e.threadName),(!a||e.timestamp>a.timestamp)&&(a=e),D(t,e)}),w(t,a.threadID)},receiveMessage:function(t,e){D(t,e)},switchThread:function(t,e){w(t,e)}}};i.a.use(c.a);var I=a("/ocq");i.a.use(I.a);var k=a("TXmL"),b={ch:{message:{hello:"你好 世界"}},en:{message:{hello:"hello world"}}};i.a.use(k.a);var y=function(){return new k.a({locale:"ch",messages:b})};function C(t){var e=t.$options.title;return!!e&&("function"==typeof e?e.call(t):e)}var T={created:function(){var t=C(this);t&&(this.$ssrContext.title=t)}},M={mounted:function(){var t=C(this);t&&(document.title=t)}},x="server"===Object({NODE_ENV:"production"}).VUE_ENV?T:M;i.a.mixin(x),i.a.mixin({beforeRouteUpdate:function(t,e,a){var n=this.$options.asyncData;n?n({store:this.$store,route:t}).then(a).catch(a):a()}});var B,E,S,J=(B=new I.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",redirect:"/home"},{path:"/home",component:function(){return a.e(1).then(a.bind(null,"8kqy"))}},{path:"/button",component:function(){return a.e(3).then(a.bind(null,"E6AV"))}},{path:"/menu",component:function(){return a.e(2).then(a.bind(null,"dWNN"))}},{path:"/lang",component:function(){return a.e(4).then(a.bind(null,"XrXe"))}},{path:"/chat",component:function(){return a.e(0).then(a.bind(null,"i+3+"))}},{path:"*",redirect:"/"}]}),E=new c.a.Store({state:l,actions:m,mutations:d,modules:{chat:N}}),S=y(),Object(s.sync)(E,B),{app:new i.a({router:B,store:E,i18n:S,render:function(t){return t(u)}}),router:B,store:E,i18n:S}),A=J.app,j=J.store,R=J.router;window.__INITIAL_STATE__&&j.replaceState(window.__INITIAL_STATE__),R.onReady(function(){R.beforeResolve(function(t,e,a){var n=R.getMatchedComponents(t),i=R.getMatchedComponents(e),s=!1,o=n.filter(function(t,e){return s||(s=i[e]!==t)}).map(function(t){return t.asyncData}).filter(function(t){return t});if(!o.length)return a();r.a.all(o.map(function(e){return e({store:j,route:t})})).then(function(){return a()}).catch(a)}),A.$mount("#app")}),"https:"===window.location.protocol&&navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js")}},["qenb"]);
//# sourceMappingURL=app.9a13a6b554bc2154a1ed.js.map