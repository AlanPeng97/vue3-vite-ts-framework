import { createRouter, createWebHistory } from "vue-router";
import { staticRouter } from "@/routers/modules/staticRouter";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
// import { HOME_URL, LOGIN_URL } from "@/config/config";

// const routes: RouteRecordRaw[] = [
//   {
//     path: "/",
//     redirect: HOME_URL,
//   },
//   {
//     path: LOGIN_URL,
//     name: "Login",
//     component: () => import("@/views/login/index.vue"), // 注意这里要带上 文件后缀.vue
//   },
//   {
//     path: "/layout",
//     name: "layout",
//     component: () => import("@/layouts/index.vue"),
//     redirect: HOME_URL,
//     children: [
//       {
//         path: "/home",
//         component: () => import("@/views/home/index.vue"),
//         name: "home",
//       },
//     ],
//   },
// ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...staticRouter],
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * @description 路由拦截
 **/
let isToken = true;
router.beforeEach(async (to, from, next) => {
  if (isToken) {
    await initDynamicRouter();
    isToken = false;
    return next({ ...to, replace: true });
  } else {
    next();
  }
});
export default router;
