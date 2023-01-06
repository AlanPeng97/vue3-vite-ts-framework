<template>
  <div>
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
      <h2 class="login-dialog-title">系统登录</h2>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLoginForm(loginFormRef)" class="login-dialog-button">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { FormInstance } from "element-plus";

const loginFormRef = ref<FormInstance>();
const loginForm = reactive({
  username: "",
  password: "",
});
const validateUserName = (rule: any, value: string, callback: any) => {
  if (value.trim() === "") {
    return callback(new Error("请输入用户名"));
  } else {
    callback();
  }
};
const validatePassword = (rule: any, value: string, callback: any) => {
  if (value.trim() === "") {
    return callback(new Error("请输入密码"));
  } else {
    callback();
  }
};
const loginRules = reactive({
  username: [{ validator: validateUserName, trigger: "blur" }],
  password: [{ validator: validatePassword, trigger: "blur" }],
});

const submitLoginForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      console.log("登录");
    } else {
      return false;
    }
  });
};
</script>

<style scoped lang="scss"></style>
