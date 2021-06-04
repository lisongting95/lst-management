import { createRouter, createWebHashHistory } from "vue-router";
import { beforeEach } from "@/router/guard";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
    },
    component: () => import("../views/Home/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("../views/Login/Login"),
  },
  {
    path: "/user/:id",
    name: "User",
    meta: {
      title: "用户详情",
    },
    component: () => import("../views/User/User.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "关于",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About/About.vue"),
    children: [
      {
        path: "/nested",
        name: "Nested",
        meta: {
          title: "嵌套",
        },
        component: () => import("../views/Nested/Nested"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(beforeEach);

export default router;
