<template>
  <view class="home">
    <dogc-nav title="记录美好周末"></dogc-nav>
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
import DogcLogin from "@/components/dogc-login/dogc-login.vue";
import DogcNav from "@/components/dogc-nav/dogc-nav.vue";
// @ts-ignore
@Component({
  components: { DogcLogin, DogcNav },
})
export default class HomePage extends Vue {
  private title = "HOME";

  private tabbarIndex = 0;
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.home {
  width: 100vw;
  height: 100vh;
  background: rgba(95, 167, 251, 0.1);
  @include flex(row, flex-start, flex-start);
}
</style>
