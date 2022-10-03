import { createRouter, createWebHashHistory } from 'vue-router'

// 定义路由配置
const routes = [
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    name: 'root',
    redirect: '/home',
    children: [],
    // children: [
    //   {
    //     path: '/home',
    //     name: 'home',
    //     component: () => import('../views/home/Home.vue')
    //   },
    //   {
    //     path: '/user',
    //     name: 'user',
    //     component: () => import('../views/user/User.vue')
    //   },
    //   {
    //     path: '/elf',
    //     name: 'elf',
    //     component: () => import('../views/elf/Elf.vue')
    //   },
    //   {
    //     path: '/page1',
    //     name: 'page1',
    //     component: () => import('../views/other/Page1.vue')
    //   },
    //   {
    //     path: '/page2',
    //     name: 'page2',
    //     component: () => import('../views/other/Page2.vue')
    //   }
    // ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
];

// 实例化路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
