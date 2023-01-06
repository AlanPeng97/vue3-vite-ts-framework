import router from "@/routers/index";
import { getAuthMenuListApi } from "@/api/login/login";
// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

// 初始化动态路由

export const initDynamicRouter = async () => {
  const { data } = await getAuthMenuListApi();
  const dynamicRouter = data;
  console.log(dynamicRouter);
  // console.log(dynamicRouter);
  // console.log(getFlatArr(dynamicRouter));
  // console.log(dynamicRouter.flat(Infinity));
  getFlatArr(dynamicRouter).forEach((item: any) => {
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
};

export function getFlatArr(menuList: any) {
  let newMenuList = JSON.parse(JSON.stringify(menuList));
  // console.warn("json解析", newMenuList);
  return newMenuList.reduce((pre: any, current: any) => {
    let flatArr = [...pre, current];
    if (current.children) flatArr = [...flatArr, ...getFlatArr(current.children)];
    return flatArr;
  }, []);
}

/**
 * @description 判断数据类型
 * @param {Any} val 需要判断类型的数据
 * @return string
 */
export function isType(val: any) {
  if (val === null) return "null";
  if (typeof val !== "object") return typeof val;
  else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
}
