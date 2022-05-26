import { createStore } from "vuex";
import axiosClient from "../axios";
const store = createStore({
  state: {
    user: {
      data: sessionStorage.getItem("USERID"),
      token: sessionStorage.getItem("TOKEN"),
    },
  },
  getters: {},
  actions: {
    Register({ commit }, user) {
      return axiosClient.post("/auth/villagerSignUp", user).then(({ data }) => {
        alert("Sign up successfuly.")
        return data;
      });
    },
    Login({ commit }, user) {
      return axiosClient
        .post("/auth/login", {
          email: user.email,
          password: user.password,
        })
        .then(({ data }) => {
          commit("Login", data);
          commit("setUser", data);
          return data;
        }).catch(err => {
          alert("Your email or password Invalid.")
        })
    },
  },
  mutations: {
    Logout: (state) => {
      (state.user.data = {}), (state.user.token = null), sessionStorage.clear();
    },
    setUser: (state, userData) => {},
    Login: (state, userToken) => {
      state.user.token = userToken.token;
      sessionStorage.setItem("TOKEN", userToken.token);
    },
  },
  modules: {},
});

export default store;
