import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default () =>
  defineConfig({
    // 配置需要使用的插件列表
    plugins: [
      vue(),
      // ElementPlus组件的按需引入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],

    // 静态资源服务的文件夹
    publicDir: "public",
    base: "./",

    // 静态资源处理
    assetsInclude: "",

    // 控制台输出的级别 info 、warn、error、silent
    logLevel: "info",

    // 设为 false 可以避免 vite 清屏而错过在终端中打印某些关键信息
    clearScreen: true,

    resolve: {
      // 情景导出 package.json 配置中的 exports 字段
      conditions: [],
      // 导入时想要省略的扩展名列表
      // 不建议使用 .vue 影响IDE和类型支持
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },

    // css 类型文件相关配置
    css: {
      // 配置 css modules 的行为
      modules: {},
      // postCss 配置
      postcss: {},
      // 指定传递给 css 预处理器的选项
      preprocessorOptions: {
        scss: {
          additionalData: `$injectedColor:orange;`,
        },
      },
    },

    // json 类型文件相关配置
    json: {
      // 是否支持从 .json 文件中进行按名导入
      namedExports: true,
      // 若设置为 true 导入的 json 会被转为 export default JSON.parse("..") 会比转译成对象字面量性能更好
      stringify: false,
    },

    // 继承自 esbuild 转换选项，最常见的用例是自定义 JSX
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
      jsxInject: `import Vue from 'vue'`,
    },

    // 前端本地服务配置，以及反向代理配置
    server: {
      host: "127.0.0.1",
      https: false, // 是否启用 https 协议
      cors: true, // 为开发服务器配置 CORS , 默认启用并允许任何源
      open: true, // 服务启动时自动在浏览器中打开应用
      port: 8080,
      strictPort: false, // 设为 true 时端口被占用则直接退出，不会尝试下一个可用端口
      force: true, // 是否强制依赖预构建
      hmr: false, // 禁用或配置 HMR 连接
      // 传递给 chockidar 的文件系统监视器选项
      watch: {
        ignored: ["!**/node_modules/your-package-name/**"],
      },
      // 反向代理配置
      proxy: {
        "/api": {
          target: "http://127.0.0.1:5000", // 项目后端接口地址
          changeOrigin: true, // 设置允许跨域
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
