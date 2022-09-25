import Vue from "vue";
import VueRouter from "vue-router";

// 重复跳转当前路由，忽略报错
// "NavigationDuplicated", message: "Navigating to current location ("/") is not allowed", stack: "Error
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/main.vue"),
    children: [
      // {
      //   path: "/home",
      //   name: "home",
      //   component: () => import("@/views/home"),
      // },
      // {
      //   path: "/mall",
      //   name: "mall",
      //   component: () => import("@/views/mall"),
      // },
      // {
      //   path: "/user",
      //   name: "user",
      //   component: () => import("@/views/user"),
      // },
      // {
      //   path: "/page1",
      //   name: "page1",
      //   component: () => import("@/views/other/pageOne.vue"),
      // },
      // {
      //   path: "/page2",
      //   name: "page2",
      //   component: () => import("@/views/other/pageTwo.vue"),
      // },
      // {
      //   path: "/page3",
      //   name: "page3",
      //   component: () => import("@/views/other/pageThree.vue"),
      // },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
