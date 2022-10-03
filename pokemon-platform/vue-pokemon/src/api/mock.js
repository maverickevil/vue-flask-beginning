import Mock from 'mockjs'
import homeApi from './mockData/home'
import userApi from './mockData/user'
import permApi from './mockData/permission'
 
// 拦截请求
Mock.mock('/home/getData', homeApi.getHomeData)

// 本地拦截api数据
Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/addUser/, 'post', userApi.createUser)
Mock.mock(/user\/editUser/, 'post', userApi.updateUser)
Mock.mock(/user\/delUser/, 'get', userApi.deleteUser)
Mock.mock(/permission\/getMenu/, 'post', permApi.getMenu)
