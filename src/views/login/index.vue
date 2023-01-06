<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <div class="login-logo">
        <img src="@/assets/images/logo.svg" />
      </div>
      <h2 class="logo-text">微发现控费系统后台</h2>
      <div class="login-form">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import LoginForm from "./components/LoginForm.vue";
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
