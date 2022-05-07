<template>
  <view class="home">
    <dogc-nav title="记录美好周末"></dogc-nav>
    <home-desc></home-desc>
    <u-tabbar
      :value="tabbarIndex"
      @change="(name) => (tabbarIndex = name)"
      :fixed="true"
      :placeholder="true"
      :border="false"
      :safeAreaInsetBottom="true"
    >
      <u-tabbar-item text="记录" icon="photo"></u-tabbar-item>
      <u-tabbar-item text="回忆" icon="play-right"></u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
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

  // @Action("fetchData", { namespace }) fetchData: any;

  @Getter("fullName", { namespace }) private fullName!: string;

  @State("user", { namespace }) private user!: ProfileState["user"];

  @State("profile") private profile!: ProfileState;

  private title = "HOME";

  private tabbarIndex = 0;

  mounted() {
    // this.fetchData();
  }
  updated() {
    // console.log(this.profileState, "update");
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
}
</style>
