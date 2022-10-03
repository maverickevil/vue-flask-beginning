/**
 * 整个项目的api管理
 * 
 */
import request from './request'

export default {
    // home组件 左侧上方数据获取
    getCardData() {
        return request({
            url: '/home/getCardData',
            method: 'get',
            mock: true,
        })
    },
    // home组件 左侧表格数据获取
    getArrayData() {
        return request({
            url: '/home/getArrayData',
            method: 'get',
            mock: true,
        })
    },
    // home组件 右侧上方数据获取
    getFriendData() {
        return request({
            url: '/home/getFriendData',
            method: 'get',
            mock: true,
        })
    },
    // home组件 右侧下方数据获取
    getChartData() {
        return request({
            url: '/home/getChartData',
            method: 'get',
            mock: true,
        })
    },
    // user组件
    getUserData(params) {
        return request({
            url: '/user/getUser',
            method: 'get',
            mock: false,
            data: params,
        })
    },
    addUser(params) {
        return request({
            url: '/user/addUser',
            method: 'post',
            mock: false,
            data: params,
        })
    },
    editUser(params) {
        return request({
            url: '/user/editUser',
            method: 'post',
            mock: false,
            data: params,
        })
    },
    delUser(params) {
        return request({
            url: '/user/delUser',
            method: 'get',
            mock: false,
            data: params,
        })
    },

    // 根据用户的用户名不同，返回不同的菜单列表
    getMenu(params) {
        return request({
            url: '/permission/getMenu',
            method: 'post',
            mock: false,
            data: params,
        })
    },

    // elf组件
    getElfData(params) {
        return request({
            url: 'http://127.0.0.1:5000/api/pokemon/get-elf',
            method: 'get',
            mock: false,
            data: params,
        })
    }
}
