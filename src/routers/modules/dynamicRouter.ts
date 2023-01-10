import router from "@/routers/index";
// import { getAuthMenuListApi } from "@/api/modules/login";
import { AuthStore } from "@/store/modules/auth";
import { isType } from "@/utils/util";
// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

// 初始化动态路由

export const initDynamicRouter = async () => {
  const authStore = AuthStore();
  try {
    await authStore.getAuthMenuList();
    authStore.flatMenuListGet.forEach((item: any) => {
      item.children && delete item.children;
      if (item.component && isType(item.component) == "string") {
        item.component = modules["/src/views" + item.component + ".vue"];
      }
      if (item.meta.isFull) {
        router.addRoute(item);
      } else {
        router.addRoute("layout", item);
      }
    });
  } catch (error) {
    console.log("error");
  }
  // const { data } = await getAuthMenuListApi();
  // const dynamicRouter = data;
  // console.log(dynamicRouter);
  // console.log(dynamicRouter);
  // console.log(getFlatArr(dynamicRouter));
  // console.log(dynamicRouter.flat(Infinity));
};
