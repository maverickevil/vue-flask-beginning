import Vue from "vue";
import App from "./App.vue";

import {
  Button,
  Container,
  Main,
  Header,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Switch,
  DatePicker,
  Dialog,
  Pagination,
  Message,
  MessageBox,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "@/less/index.less";

import "@/mock/index.js"; // 拦截请求

import router from "@/router";
import store from "@/store";
import http from "axios";

Vue.prototype.$http = http;

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.config.productionTip = false;
Vue.config.devtools = false;

// 方式一
Vue.use(Button);

// 方式二
Vue.component(Container.name, Container);
Vue.component(Main.name, Main);
Vue.component(Header.name, Header);
Vue.component(Aside.name, Aside);
Vue.component(Menu.name, Menu);
Vue.component(Submenu.name, Submenu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Card.name, Card);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(Tag.name, Tag);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Switch.name, Switch);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Dialog.name, Dialog);
Vue.component(Pagination.name, Pagination);

// 导航守卫
router.beforeEach((to, from, next) => {
  store.commit("getToken");
  const token = store.state.user.token;
  if (!token && to.name !== "login") {
    // 无token，跳转登录页
    next({ name: "login" });
  } else if (token && to.name == "login") {
    // 处于登录中的状态，不应该再访问登陆页
    next({ name: "home" });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    store.commit("addMenu", router);
  },
}).$mount("#app");
