import Cookie from "js-cookie";

const user = {
  state: {
    token: "",
  },
  mutations: {
    setToken(state, val) {
      state.token = val;
      Cookie.set("token", val);
    },
    clearToken(state) {
      state.token = "";
      Cookie.remove("token");
    },
    getToken(state) {
      state.token = state.token || Cookie.get("token");
    },
  },
};

export default user;
