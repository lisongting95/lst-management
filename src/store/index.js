import { createStore } from "vuex";
import user from "./modules/user";

export default createStore({
  state() {
    return {
      stateText: "hello I'm stateText~",
    };
  },
  mutations: {},
  actions: {},
  modules: {
    user,
  },
});
