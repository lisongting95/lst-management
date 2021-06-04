import store from "@/store";

// eslint-disable-next-line no-unused-vars
const beforeEach = (to, from) => {
  console.log("router -->", to);
  console.log("store -->", store.getters["user/getToken"]);
  if (to.name === "Login") {
    if (store.getters["user/getToken"]) {
      return { name: "Home" };
    }
    return true;
  }
  if (!store.getters["user/getToken"]) {
    return { name: "Login" };
  }
  return true;
};

export { beforeEach };
