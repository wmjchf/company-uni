<template>
  <view class="home">
    <u-navbar title="我是你爸爸" :placeholder="true"> </u-navbar>
    <view class="home-body"> body </view>
    <u-tabbar
      :value="tabIndex"
      @change="changeTabbar"
      :fixed="true"
      :placeholder="true"
      :border="false"
      :safeAreaInsetBottom="true"
    >
      <u-tabbar-item text="记录" icon="photo"></u-tabbar-item>
      <u-tabbar-item
        text="回忆"
        icon="play-right"
        @click="toMemory"
      ></u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Mutation, Getter } from "vuex-class";
import HomeDesc from "./components/home-desc/home-desc.vue";
import { ProfileState } from "@/store/profile/types";

import { GetTopPlaylist } from "@/api/module/common/dict";

const namespace: string = "profile";

// @ts-ignore
@Component({
  components: { HomeDesc },
})
export default class HomePage extends Vue {
  @State("version") version!: string;

  @State("tabIndex") tabIndex!: number;

  @Mutation("changeTab") changeTab!: any;

  // @Action("fetchData", { namespace }) fetchData: any;

  @Getter("fullName", { namespace }) private fullName!: string;

  @State("user", { namespace }) private user!: ProfileState["user"];

  @State("profile") private profile!: ProfileState;

  private title = "HOME";

  async getTopPlayList() {
    const res = await GetTopPlaylist({ params: { cat: "华语" } });
    console.log(res);
  }

  mounted() {
    // this.fetchData();
    this.getTopPlayList();
  }
  updated() {
    // console.log(this.profileState, "update");
  }

  changeTabbar(index: number) {
    this.changeTab(index);
  }

  toMemory() {
    uni.switchTab({
      url: "/pages/memory/index",
    });
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.home {
  width: 100vw;
  height: 100vh;
  background: rgba(95, 167, 251, 0.1);
  @include flex(column, flex-start, flex-start);
  ::v-deep {
    .u-navbar__content__left {
      display: none;
    }
  }
  &-body {
    width: 100%;
  }
}
</style>
