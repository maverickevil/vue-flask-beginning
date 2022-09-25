import axios from "./http";

export const getData = () => {
  return axios.request({
    url: "/home/getData",
    method: "get",
  });
};

export const getUser = (params) => {
  return axios.request({
    url: "/user/lists",
    method: "get",
    params,
  });
};

// export const getMenu = (params) => {
//   return axios.request({
//     url: "/permission/getmenu",
//     method: "post",
//     data: params,
//   });
// };

export const menuApi = (params) => {
  return axios.request({
    url: "http://127.0.0.1:5000/api/menu",
    method: "post",
    data: params,
  });
};

export const infoApi = () => {
  return axios.request({
    url: "http://127.0.0.1:5000/api/info",
    method: "get",
  });
};

export const orderApi = () => {
  return axios.request({
    url: "http://127.0.0.1:5000/api/order",
    method: "get",
  });
};
