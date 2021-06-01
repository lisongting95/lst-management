import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/Home.vue"),
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

  // 返回 false 以取消导航
  // return false;
});

export default router;
