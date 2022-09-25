import Mock from "mockjs";

export default {
  getMenu: (config) => {
    const { username, password } = JSON.parse(config.body);
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === "root" && password === "root") {
      return {
        code: 0,
        msg: "success",
        data: {
          menu: [
            {
              path: "/",
              name: "home",
              label: "首页",
              icon: "s-home",
              url: "home/index",
            },
            {
              path: "/mall",
              name: "mall",
              label: "商品管理",
              icon: "video-play",
              url: "mall/index",
            },
            {
              path: "/user",
              name: "user",
              label: "用户管理",
              icon: "user",
              url: "user/index",
            },
            {
              label: "其他",
              icon: "location",
              children: [
                {
                  path: "/page1",
                  name: "page1",
                  label: "页面1",
                  icon: "setting",
                  url: "other/pageOne",
                },
                {
                  path: "/page2",
                  name: "page2",
                  label: "页面2",
                  icon: "setting",
                  url: "other/pageTwo",
                },
                {
                  path: "/page3",
                  name: "page3",
                  label: "页面3",
                  icon: "setting",
                  url: "other/pageThree",
                },
              ],
            },
          ],
          token: Mock.Random.guid(),
          detail: "获取成功",
        },
      };
    } else if (username === "xiaoming" && password === "12345") {
      return {
        code: 0,
        msg: "success",
        data: {
          menu: [
            {
              path: "/",
              name: "home",
              label: "首页",
              icon: "s-home",
              url: "home/index",
            },
            {
              path: "/video",
              name: "video",
              label: "商品管理",
              icon: "video-play",
              url: "mall/index",
            },
          ],
          token: Mock.Random.guid(),
          detail: "获取成功",
        },
      };
    } else {
      return {
        code: -999,
        msg: "failed",
        data: {
          detail: "用户名或密码错误",
        },
      };
    }
  },
};
