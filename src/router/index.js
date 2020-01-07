import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history", // 注意这里也是为history模式
    routes: [
      {
        path: "/",
        name: "Hello",
        component: HelloWorld
      },
      {
        path: "/test",
        name: "Test",
        component: () => import("@/components/Test") // eslint-disable-line
      },
      {
        path: "/lang",
        name: "Lang",
        component: () => import("@/components/Lang") // eslint-disable-line
      },
      {
        path: "/shop",
        name: "Shop",
        component: () => import("@/views/Shop") // eslint-disable-line
      },
      {
        path: "/vwlayout",
        name: "VwLayout",
        component: () => import("@/views/Vwlayout")
      },
      {
        path: "/chat",
        name: "Chat",
        component: () => import("@/views/Chat")
      },
      {
        path: "/todo",
        name: "Todo",
        component: () => import("@/views/Todo")
      },
      {
        path: "/layout",
        name: "Layout",
        component: () => import("@/layout/default.vue")
      },
      {
        path: "/grid",
        name: "Grid",
        component: () => import("@/layout/grid.vue")
      }
    ]
  });
}
