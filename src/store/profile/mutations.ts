import { MutationTree } from "vuex";
import { ProfileState, User } from "./types";

export const mutations: MutationTree<ProfileState> = {
  profileLoaded(state, payload: User) {
    state.error = false;

    state.user = payload;
  },
  profileError(state) {
    console.log("fffff");
    state.error = true;
    state.user = undefined;
  },
};
