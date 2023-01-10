// tip 公共函数
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
/**
 *@description 扁平化数组对象（处理路由）
 *@param { Array } menuList 所有菜单列表
 *@return array
 **/
export function getFlatArr(menuList: Menu.MenuOptions[]) {
  let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));
  // console.warn("json解析", newMenuList);
  return newMenuList.reduce((pre: Menu.MenuOptions[], current: Menu.MenuOptions) => {
    let flatArr = [...pre, current];
    if (current.children) flatArr = [...flatArr, ...getFlatArr(current.children)];
    return flatArr;
  }, []);
}

/**
 *@description 使用递归，过滤出需要渲染在左侧菜单的列表（剔除isHide == true 的菜单）
 *@param {Array} menuList 所有菜单列表
 *@return array
 **/
export function getShowMenuList(menuList: Menu.MenuOptions[]) {
  let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));
  return newMenuList.filter((item) => {
    item.children?.length && (item.children = getShowMenuList(item.children));
    return !item.meta?.isHide;
  });
}
