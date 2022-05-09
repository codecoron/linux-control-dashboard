import Vue from 'vue'
import Router from "vue-router";
// import router from "./router/index";
import App from './App.vue'
// import navbar from './components/Navbar'
import dashboard from './views/dashboard'
import store from "./store";
import Layout from './views/layout'
// import { superRoutes } from './router/index'

Vue.config.productionTip = false

// css reset
import "./style/cssreset.css";
import "./style/public.less";
// // 字体图标库
import "./iconfont/iconfont.css";
import "./iconfont/font/iconfont.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// // element ui样式重置
// import "./style/elreset.less";
Vue.use(ElementUI);
Vue.use(Router)

// backdoor 提前把router和store的数据填充好

const superRoutes = [
  // 仪表盘
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
      icon: "icon-panel",
    },
    component: Layout,
    redirect: "/home/dashboard",
    children: [
      {
        path: "dashboard",
        name: "home-dashboard",
        meta: {
          title: "仪表盘",
        },
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "data",
        meta: { title: "设备数据" },
        name: "data-view",
        component: () => import("@/views/dashboard/data.vue"),
      },
    ],
  },
];

const router = new Router({
  // mode: isDev?"history":"hash",
  mode: "history",
  routes: superRoutes,
});

router.addRoutes(superRoutes);
store.commit("set_routes", superRoutes);
console.log('print store')
console.log(store)

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
