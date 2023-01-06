<template>
  <el-form
    label-position="top"
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginRules"
    size="large"
    hide-required-asterisk="true"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="verticode">
      <el-col :span="16">
        <el-input v-model="loginForm.verticode" placeholder="请输入验证码"></el-input>
      </el-col>
      <el-col :span="8">
        <div style="text-align: center"><span>验证码图片</span></div>
      </el-col>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button type="primary">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Login } from "@/api/interface";
import type { FormInstance, FormRules } from "element-plus";

// tip 定义校验规则
const loginFormRef = ref<FormInstance>();
const loginRules = reactive<FormRules>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  verticode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});
const loginForm = reactive<Login.ReqLoginForm>({ username: "", password: "", verticode: "" });
</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>
