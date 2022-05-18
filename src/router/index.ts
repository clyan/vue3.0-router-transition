import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Mine from "../views/Mine.vue";
import About from "../views/About.vue";
import Setting from "../views/Setting.vue";
import { routeTransition } from "./router-helper";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Mine",
    component: Mine,
    meta: {
      title: "我的",
    },
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
    meta: {
      title: "设置",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "关于",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 应用路由跳转动画
routeTransition(router);

export default router;
