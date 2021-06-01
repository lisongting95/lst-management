import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/Login"),
  },
  {
    path: "/user/:id",
    name: "User",
    component: () => import("../views/User/User.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About/About.vue"),
    children: [
      {
        path: "/nested",
        name: "Nested",
        component: () => import("../views/Nested/Nested"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// eslint-disable-next-line
router.beforeEach((to, from) => {
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
});

export default router;
