/* eslint-disable */
const state = () => ({
  userInfo: { name: "LiSongTing" },
  userName: "李松庭",
});

// getters
const getters = {
  // getter的参数：当前的模块的state，当前模块的getters，根状态（rootState），根getter
  getUserInfo: (state, getters, rootState, rootGetters) => {
    return state.userInfo;
  },
};

// actions
const actions = {
  async getAllProducts({ commit }) {
    const products = [{ pro: 1 }];
    commit("setProducts", products);
  },
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find((product) => product.id === id);
    product.inventory--;
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
