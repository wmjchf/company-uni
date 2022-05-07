import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { ProfileState } from "./types";
import { RootState } from "../types";

export const state: ProfileState = {
  user: {
    firstName: "wang",
    lastName: "ming",
    email: "15997129014@163.com",
    phone: "15868843247",
  },
  error: false,
};
const namespaced: boolean = true;
const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default profile;
