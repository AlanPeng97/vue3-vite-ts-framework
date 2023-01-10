<template>
  <el-container class="layout">
    <el-aside>
      <div class="menu">
        <div class="logo flx-center">
          <span>Simply Admin</span>
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
import { computed } from "vue";
import ToolBarRight from "@/layouts/components/Header/ToolBarRight.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";
import SubMenu from "@/layouts/components/Menu/SubMenu.vue";
import { AuthStore } from "@/store/modules/auth";

const authStore = AuthStore();
const menuList = computed(() => authStore.showMenuListGet);
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
