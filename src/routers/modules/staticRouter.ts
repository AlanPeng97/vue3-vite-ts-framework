import { RouteRecordRaw } from "vue-router";
import { HOME_URL, LOGIN_URL } from "@/config/config";

/**
 *tip staticRouter（静态路由）
 **/

export const staticRouter: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: HOME_URL,
  },
  {
    path: LOGIN_URL,
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
    }, // 注意这里要带上 文件后缀.vue
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("@/layouts/index.vue"),
    redirect: HOME_URL,
    children: [],
  },
];
