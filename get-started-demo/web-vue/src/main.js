import Vue from 'vue'
import App from './App.vue'

// 加载vue-router路由系统，默认找其目录下的index.js
import router from './router'

// 加载axios模块，使用axios需要将其绑定至原型
import http from 'axios'
Vue.prototype.$http = http;

// 一些个性化设置（避免提示warning信息）
Vue.config.productionTip = false;
Vue.config.devtools = false;

// 实例化Vue对象
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
