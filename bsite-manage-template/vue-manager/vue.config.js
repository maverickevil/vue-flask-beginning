const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  // 打包编译
  transpileDependencies: true,

  // 关闭 elsint 检测
  lintOnSave: false,

  // 开发环境配置
  devServer: {
    open: true,
    host: "127.0.0.1",
    port: 8000,
    https: false,

    // 前端解决跨域问题
    // 提醒：在ajax请求或<a>标签href属性中，host url要写前端的端口号（注意不是后端）
    // proxy: {
    //   // 配置跨域
    //   '/api': {
    //     target: 'http://127.0.0.1:5000',         // 这里填写项目真实的后台接口地址
    //     changOrigin: true,                       // 设置允许跨域
    //     ws: true,
    //     // pathRewrite: {                        // 这个重写不可省略！因为我们真正请求的地址并不含 /api
    //     //   '^/api': ''
    //     //     /*
    //     //     当我们在浏览器中看到请求的地址为：http://localhost:8080/api/data/list 时
    //     //     因为重写了 /api ，所以实际上访问的地址是：http://x.x.x.x:x/data/list，
    //     //     */
    //     // }
    //   }
    // }
  },
});
