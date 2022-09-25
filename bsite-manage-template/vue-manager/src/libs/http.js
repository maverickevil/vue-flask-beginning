import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.VUE_APP_BASE_URI + process.env.VUE_APP_BASE_API
    : process.env.VUE_APP_BASE_URI;

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getInsideConfig() {
    const config = {
      responseType: "json",
      baseUrl: this.baseUrl,
      timeout: 1000 * 3,
      header: {},
    };
    return config;
  }

  interceptors(instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      function (config) {
        // 在请求之前 do something
        return config;
      },
      function (error) {
        // 对请求错误 do something
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
      function (response) {
        // 对响应数据 do something
        return response;
      },
      function (error) {
        // 对错误响应 do something
        return Promise.reject(error);
      }
    );
  }

  request(options) {
    const instance = axios.create();
    options = { ...this.getInsideConfig(), ...options };
    // console.log(options);
    this.interceptors(instance);
    return instance(options);
  }
}

export default new HttpRequest(baseUrl);
