<template>
  <view class="home">
    <u-navbar title="记录美好周末" :placeholder="true"> </u-navbar>

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
import DogcLogin from "@/components/dogc-login/dogc-login.vue";
import DogcNav from "@/components/dogc-nav/dogc-nav.vue";
import HomeDesc from "./components/home-desc/home-desc.vue";
import { ProfileState } from "@/store/profile/types";

const namespace: string = "profile";

// @ts-ignore
@Component({
  components: { DogcLogin, DogcNav, HomeDesc },
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

  mounted() {
    // this.fetchData();
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
}
</style>
