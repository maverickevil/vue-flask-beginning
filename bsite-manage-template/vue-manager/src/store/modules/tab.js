import Cookie from "js-cookie";

const tab = {
  state: {
    // 是否折叠
    isCollapse: false,

    // 面包屑导航
    navsList: [
      // 默认值
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ],

    // 高亮定位
    currentMenu: null,

    // 空菜单
    menu: [],
  },
  mutations: {
    collapseMenu: (state) => {
      state.isCollapse = !state.isCollapse;
    },
    selectMenu(state, val) {
      if (val.name === "home") {
        state.currentMenu = null;
      } else {
        state.currentMenu = val;
        const result = state.navsList.findIndex(
          (item) => item.name === val.name
        );
        if (result === -1) {
          state.navsList.push(val);
        }
      }
    },
    closeTag(state, val) {
      const result = state.navsList.findIndex((item) => item.name === val.name);
      state.navsList.splice(result, 1);
    },
    setMenu(state, val) {
      state.menu = val;
      // 将menu存入cookie中，避免因为刷新导致路由数据丢失
      Cookie.set("menu", JSON.stringify(val));
    },
    clearMenu(state) {
      state.menu = [];
      Cookie.remove("menu");
    },
    addMenu(state, router) {
      if (!Cookie.get("menu")) {
        return;
      }
      const menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      const menuArray = [];
      menu.forEach((item) => {
        if (item.children) {
          // 有子菜单
          item.children = item.children.map((item) => {
            item.component = () => import(`@/views/${item.url}`);
            return item;
          });
          menuArray.push(...item.children);
        } else {
          // 一级菜单
          item.component = () => import(`@/views/${item.url}`);
          menuArray.push(item);
        }
      });
      // 路由的动态添加
      menuArray.forEach((item) => {
        router.addRoute("main", item);
      });
    },
  },
};

export default tab;
