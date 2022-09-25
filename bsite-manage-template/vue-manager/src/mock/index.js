import Mock from "mockjs";

/* 定义请求拦截器 */

import homeApi from "./serverData/home";
import userApi from "./serverData/user";
// import permApi from "./serverData/permission";

Mock.mock("/home/getData", homeApi.getStatisticalData);

Mock.mock(/user\/add/, "post", userApi.createUser);
Mock.mock(/user\/edit/, "post", userApi.updateUser);

Mock.mock(/user\/lists/, "get", userApi.getUserList);
Mock.mock(/user\/del/, "post", userApi.deleteUser);

// Mock.mock(/permission\/getmenu/, "post", permApi.getMenu);
