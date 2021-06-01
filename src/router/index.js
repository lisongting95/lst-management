import { createRouter, createWebHashHistory } from "vue-router";
import { beforeEach } from "@/router/guard";

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

router.beforeEach(beforeEach);

export default router;
