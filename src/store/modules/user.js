import model from "@/api/model";

/* eslint-disable */
const state = () => ({
  userInfo: { name: "LiSongTing" },
  userName: "李松庭",
  token: window.localStorage.getItem("token")
    ? JSON.parse(window.localStorage.getItem("token"))
    : null,
});

// getters
const getters = {
  // getter的参数：当前的模块的state，当前模块的getters，根状态（rootState），根getter
  getUserInfo: (state, getters, rootState, rootGetters) => {
    return state.userInfo;
  },

  getToken: (state) => {
    return state.token;
  },
};

// actions
const actions = {
  async login({ commit }, payload) {
    let loginRes = await model.login(payload);
    commit("setToken", loginRes);
  },
};

// mutations
const mutations = {
  //保存token
  setToken(state, payload) {
    state.token = payload;
    if (payload) {
      window.localStorage.setItem("token", JSON.stringify(payload));
    } else {
      window.localStorage.removeItem("token");
    }
  },
};

export default {
  // 使用namespaced为避免不同模块间变量重名，在引用时需加上命名域
  // this.$store.commit("user/setUserInfo",userInfo)
  // $store.state.user.userName
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
