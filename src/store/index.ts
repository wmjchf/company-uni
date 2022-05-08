import Vue from "vue";

import Vuex, { StoreOptions } from "vuex";

import { RootState } from "./types";

import profile from "./profile";

Vue.use(Vuex); //vue的插件机制

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
    tabIndex: 0,
  },
  mutations: {
    changeTab(state, payload: number) {
      state.tabIndex = payload;
    },
  },
  modules: {
    profile,
  },
};
export default new Vuex.Store<RootState>(store);
