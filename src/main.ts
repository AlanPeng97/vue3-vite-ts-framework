import { createApp } from "vue";
import App from "./App.vue";
// global css
// import "@/assets/styles/index.scss";
// reset style sheet
import "@/styles/reset.scss";
// common style sheet
import "@/styles/common.scss";
import router from "@/routers/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import pinia from "@/store/index";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(ElementPlus);
app.use(pinia);

app.mount("#app");
