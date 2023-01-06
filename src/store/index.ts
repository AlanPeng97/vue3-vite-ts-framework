import { defineStore, createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export const useGlobalStore = defineStore({
  id: "GlobalState",
  state: () => ({
    // token
    token: "",
  }),
  getters: {
    tokenLength: (state) => state.token.length,
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
  },
  persist: { key: "GlobalState", storage: window.localStorage },
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
