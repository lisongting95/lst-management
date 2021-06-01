import store from "@/store";

// eslint-disable-next-line no-unused-vars
const beforeEach = (to, from) => {
  console.log("router -->", to);
  console.log("store -->", store.getters.getToken);
  if (to.name === "Login") {
    return true;
  }
  if (!store.getters.getToken) {
    return { name: "Login" };
  }
  // 返回 false 以取消导航
  // return false;
};

export { beforeEach };
