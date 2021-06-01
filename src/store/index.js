import { createStore } from "vuex";
import user from "./modules/user";

export default createStore({
  state() {
    return {
      stateText: "hello I'm stateText~",
      token: null,
    };
  },
  getters: {
    getToken: (state) => {
      return state.token;
    },
  },
  mutations: {
    setToken: (state, params) => {
      state.token = params;
    },
  },
  actions: {},
  modules: {
    user,
  },
});
