import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: "UserName",
    imageInfo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU",
    showDialog: false,
    choose: "password",
    visibility: "mdi-eye-off",
    accountList: [],
  },
  mutations: {
    renderDataUser(state, info) {
      state.accountList = info;
    },
    setDialog(state, info) {
      state.showDialog = info;
    },
    setAccountList(state, accountList) {
      state.accountList = accountList;
    },
    setShowPassword(state) {
      if (state.choose === "password") {
        state.choose = "text";
        state.visibility = "mdi-eye";
      } else {
        state.choose = "password";
        state.visibility = "mdi-eye-off";
      }
    },
  },
  actions: {
    actionSetDialog({ commit }, info) {
      commit("setDialog", info);
    },
    actionSetShowPassword({ commit }) {
      commit("setShowPassword");
    },
    actionRenderDataUser({ commit }, info) {
      commit("renderDataUser", info);
    },
    actionSetAccountList({ commit }, accountList) {
      commit("setAccountList", accountList);
    },
  },
  modules: {},
});
