import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    /*
    Vue路由懒加载：import() 和 require()
    懒加载：又叫延时加载，即在需要的时候进行加载，随用即载。
    */
    component: Main,
    children: [
      {
        path: "/register",
        name: "register",
        /*
        [import]
          规范：ES6 的一个语法标准，如果要兼容浏览器的话必须转化成 ES5 的语法。
          调用：是编译时调用
          本质：是一种赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量。
          注意：目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require。
        */
        component: () => import("../views/register"),
      },
      {
        path: "/login",
        name: "login",
        /*
        [require]
          规范：AMD规范引入方式
          调用：在运行时调用
          本质：是一种赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量。
        */
        component: resolve => (require(["../views/login"], resolve)),
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
