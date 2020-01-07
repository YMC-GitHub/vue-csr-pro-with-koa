import "es6-promise/auto";
import Vue from "vue";
import Vuex from "vuex";
import shop from "./shop";
import chat from "./chat";
import todo from "./todo";
Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    modules: {
      shop: shop,
      chat: chat,
      todo: todo
    }
  });
}
