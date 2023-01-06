<template>
  <el-container class="layout">
    <el-aside>
      <div class="menu">
        <div class="logo flx-center">
          <span>微发现</span>
        </div>
        <el-scrollbar>
          <el-menu
            default-active=""
            :router="false"
            :collapse-transition="false"
            :unique-opened="true"
            background-color="#191a20"
            text-color="#bdbdc0"
            active-text-color="#ffffff"
          >
            <SubMenu :menuList="menuList" />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <ToolBarLeft />
        <ToolBarRight />
      </el-header>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import {} from "vue";
import ToolBarRight from "@/layouts/components/Header/ToolBarRight.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";
import SubMenu from "@/layouts/components/Menu/SubMenu.vue";
import { getAuthMenuListApi } from "@/api/login/login";

const { data } = getAuthMenuListApi();
console.log(data);
let menuList = getShowMenuList(data);
console.log(menuList);
function getShowMenuList(menuList: any) {
  let newMenuList: any = JSON.parse(JSON.stringify(menuList));
  return newMenuList.filter((item: any) => {
    item.children?.length && (item.children = getShowMenuList(item.children));
    return !item.meta?.isHide;
  });
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
