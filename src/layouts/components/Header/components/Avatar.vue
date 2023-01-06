<template>
  <el-dropdown>
    <span><el-avatar :icon="UserFilled" /> <span class="username">张三</span></span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import {} from "vue";
import { UserFilled } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.el-dropdown {
  align-items: center;
  :deep(.el-tooltip__trigger) {
    display: flex;
    align-items: center;
    .username {
      margin-left: 5px;
    }
  }
}
</style>
