/**
 * 环境变量文件
 * 
 * 企业级项目中，通常至少有三个环境
 * 开发环境（dev）
 * 测试环境（test）
 * 线上环境（prod）
 */

// 当前环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/5baff7aec98af01a9ddf99e896a51f30/api'
    },
    test: {
        baseApi: 'https://test.future.com/api',
        mockApi: 'https://www.fastmock.site/mock/5baff7aec98af01a9ddf99e896a51f30/api'
    },
    prod: {
        baseApi: 'https://future.com/api',
        mockApi: 'https://www.fastmock.site/mock/5baff7aec98af01a9ddf99e896a51f30/api'
    }
}

export default {
    env,
    // mock的总开关
    mock: true,
    ...EnvConfig[env]
}
