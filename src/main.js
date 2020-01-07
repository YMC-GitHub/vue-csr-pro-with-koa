// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { createRouter } from "./router";
import { createStore } from "./store";
import { createI18n } from "./locale";
import { currency } from "./filter/currency";
import { time } from "./filter/time";
//import "./utlis/rem.js";
Vue.filter("currency", currency);
Vue.filter("time", time);
Vue.config.productionTip = false;

/* eslint-disable no-new */
export function createApp() {
  // 创建 router 实例
  // eslint-disable-next-line
  const router = createRouter();
  const store = createStore();
  const i18n = createI18n();
  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    // 注入 store 到根 Vue 实例
    store,
    // 注入 i18n 到根 Vue 实例
    i18n,
    render: h => h(App)
  });
  // 返回 app 和 router
  return { app, router, store, i18n };
}
