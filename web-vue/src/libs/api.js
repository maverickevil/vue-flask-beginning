/*
  使用原生axios进行代码演示，
  开发建议进行二次封装为一个http的工具类。
*/
import Vue from 'vue'

// 判断当前环境
const baseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.VUE_APP_BASE_URI + process.env.VUE_APP_BASE_API
    : process.env.VUE_APP_BASE_URI;

// 后端API-01：/api/user/register，方法导出对外暴露
export const getRegisterData = () => {
    return Vue.prototype.$http.get(baseUrl + '/user/register')
    .then(function (response) {
        const { code, msg, data } = response.data;
        if (msg === 'success') {
            console.log(response);
        }
        if (code === 0) {
            return data;
        }
    })
    .catch(function (error) {
        console.log(error);
    })
};

// 后端API-02：/api/user/login，方法导出对外暴露
export const getLoginData = () => {
    return Vue.prototype.$http.get(baseUrl + '/user/login')
    .then(function (response) {
        const { code, msg, data } = response.data;
        if (msg === 'success') {
            console.log(response);
        }
        if (code === 0) {
            return data;
        }
    })
    .catch(function (error) {
        console.log(error);
    })
};