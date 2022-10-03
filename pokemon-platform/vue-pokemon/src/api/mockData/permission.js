import Mock from 'mockjs'

export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 0,
        msg: "success",
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 'HomeFilled',
              // url 与文件路径对应
              url: 'home/Home'
            },
            {
              path: '/elf',
              name: 'elf',
              label: '图鉴管理',
              icon: 'SwitchFilled',
              url: 'elf/Elf',
            },
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'UserFilled',
              url: 'user/User',
            },
            {
              path: '/other',
              label: '其他',
              icon: 'location',
              children: [
                  {
                    path: '/page1',
                    name: 'page1',
                    label: '页面1',
                    icon: 'Tools',
                    url: 'other/Page1'
                  },
                  {
                    path: '/page2',
                    name: 'page2',
                    label: '页面2',
                    icon: 'Tools',
                    url: 'other/Page2'
                  }
              ]
            }
          ],
          token: Mock.Random.guid(),
        }
      }
    } else if (username === 'user' && password === 'user') {
      return {
        code: 0,
        msg: "success",
        data: {
            menu: [
                {
                    path: '/home',
                    name: 'home',
                    label: '首页',
                    icon: 'House',
                    url: 'home/Home'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'UserFilled',
                    url: 'user/User',
                },
            ],
          token: Mock.Random.guid(),
        }
      }
    } else {
      return {
        code: -999,
        data: {
          detail: '密码错误'
        }
      }
    }

  }
}






