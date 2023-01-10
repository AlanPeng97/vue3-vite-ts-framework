import { defineStore } from "pinia";
import { AuthState } from "@/store/interface/index";
import { getAuthMenuListApi } from "@/api/modules/login";
import { getFlatArr, getShowMenuList } from "@/utils/util";

export const AuthStore = defineStore({
  id: "AuthState",
  state: (): AuthState => ({
    authMenuList: [],
  }),
  getters: {
    // 后端返回的菜单列表 ==> 这里不做任何处理
    authMenuListGet: (state) => state.authMenuList,
    // 后端返回的菜单列表 ==> 左侧菜单渲染需要去除 isHide == true
    showMenuListGet: (state) => getShowMenuList(state.authMenuList),
    // 扁平化之后的一维数组路由，主要用来添加动态路由
    flatMenuListGet: (state) => getFlatArr(state.authMenuList),
  },
  actions: {
    // 获取菜单列表方法
    async getAuthMenuList() {
      const { data } = await getAuthMenuListApi();
      this.authMenuList = data;
    },
  },
});
