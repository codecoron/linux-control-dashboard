import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import Layout from "../views/layout/index.vue";
// let isDev = process.env.NODE_ENV === 'development';

// 普通管理员路由
export const superRoutes = [
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
      // {
      //   path: "data",
      //   meta: { title: "设备数据" },
      //   name: "data-view",
      //   component: () => import("@/views/dashboard/data.vue"),
      // },
    ],
  },
];



// 最初的路由
const router = new Router({
  mode: "history",
  routes: superRoutes,
});


export default router;
