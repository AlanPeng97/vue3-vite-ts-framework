import { Login } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import DynamicRouter from "@/assets/json/dynamicRouter.json";
import http from "@/api";

/**
 * @name 登录模块
 */
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(PORT1 + `/login`, params);
  return http.post<Login.ResLogin>(`/user/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
};

// * 获取菜单列表
export const getAuthMenuListApi = () => {
  // return http.get<any[]>(PORT1 + `/menu/list`, {}, { headers: { noLoading: true } });
  return DynamicRouter;
};
