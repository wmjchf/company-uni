import { ActionTree } from "vuex";

import { ProfileState, User } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    commit("profileLoaded", {
      firstName: "wang",
      lastName: "ming",
      email: "15997129014@163.com",
      phone: "15868843247",
    });
    // axios({
    //     url: 'https://....'
    // }).then((response) => {
    //     const payload: User = response && response.data;
    //     commit('profileLoaded', payload);
    // }, (error) => {
    //     console.log(error);
    //     commit('profileError');
    // });
  },
};
