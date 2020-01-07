//tasks:
//01.use load effect
//02.create vue app instance
//03.init vue state
//04.add mixin
//05.mount app to html document

//include some lib
import { createApp } from "./main";
import ProgressBar from "@/components/LoadingBar.vue";
import Vue from "vue";
import api from "@/api/index-csr-server.js";

// 加载动效-一个实例
const loading = (Vue.prototype.$loading = new Vue(ProgressBar).$mount());

// eslint-disable-next-line
const { app, router, store } = createApp();

// 将服务端渲染时候的状态写入vuex中
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
  store.$api = store.state.$api = api;
}
// 加载动效-挂到文档
document.body.appendChild(loading.$el);

// 全局注册混入对象
Vue.mixin({
  // 数据预取
  // 组件钩子--beforeRouteUpdate只在动态路由时触发
  beforeRouteUpdate(to, from, next) {
    const { asyncData } = this.$options;
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      })
        .then(next)
        .catch(next);
    } else {
      next();
    }
  }
});
// 路由-全局钩子
// 首页进入某页:
// g:beforeEach->r:beforeEnter->c:beforeRouteEnter->g:beforeResolve->g:afterEach
// 某页返回首页：
// c:beforeRouteLeave->g:beforeEach->g:beforeResolve->g:afterEach
// c:beforeRouteUpdate的触发是在动态路由情形下

router.beforeEach((to, from, next) => {
  console.log("global beforeEach");
  next();
});

router.beforeResolve((to, from, next) => {
  console.log("global beforeResolve");
  next();
});

router.afterEach((to, from, next) => {
  console.log("global afterEach");
});

console.log(`router onReady:`);
router.beforeResolve((to, from, next) => {
  console.log(`router beforeResolve`);
  // 获取组件
  const matched = router.getMatchedComponents(to);
  const prevMatched = router.getMatchedComponents(from);
  // 查找差异
  let diffed = false;
  const activated = matched.filter((c, i) => {
    return diffed || (diffed = prevMatched[i] !== c);
  });

  if (!activated.length) {
    return next();
  }
  // 加载动效-开始
  loading.start();
  // 预取数据
  Promise.all(
    activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({
          store,
          route: to
        });
      }
    })
  )
    .then(() => {
      // 加载动效-结束
      loading.finish();
      next();
    })
    .catch(next);
});

// 因为可能存在异步组件，所以等待router将所有异步组件加载完毕，服务器端配置也需要此操作
router.onReady(() => {
  // 挂浏览器
  app.$mount("#app");
});
