import qs from 'qs'
import axios from 'axios'
import config from '../config'
import { ElMessage } from 'element-plus'


const NETWORK_ERROR = '网络请求异常, 请稍后重试...'

// 创建一个axios实例对象
const service = axios.create({
    baseURL: config.baseApi
})

// 在请求之前，do something...
service.interceptors.request.use((req) => {
    // 自定义header
    // jwt-token认证
    if (req.method == 'get') {
        // 所有数据需要统一用qs.stringify(data)处理，否则CORS跨域会将实际get/post方法变成options方法
        req.data = qs.stringify(req.data)
    }
    return req
})

// 在请求之后，do something...
service.interceptors.response.use((res) => {
    const { code, msg, data } = res.data
    // code值：根据公司规范定义
    if (code == 0) {
        return data
    } else {
        // 网络请求错误
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

// axios二次封装核心
function request(options) {

    /*
    传入对象示例：
    {
        method: "post",
        data: {
            "name": "zero"
        },
        mock: false
    }
    */

    // 默认请求类型为 get
    options.method = options.method || 'get'

    if (options.method.toLowerCase() == 'get') {
        options.params = options.data
    }

    // 对mock的处理
    let isMock = config.mock
    if (typeof options.mock !== 'undefined') {
        isMock = options.mock

    }
    
    // 对线上环境做处理
    if (config.env == 'prod') {
        // 不允许使用mock
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }

    return service(options)
}

export default request
