<template>
  <view class="dogc-nav">
    <view
      class="dogc-nav-title"
      :style="{ height: titleBarHeight, paddingTop: statusBarHeight }"
    >
      <text>{{ title }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

// import NavPng from '@/assets'

@Component({
  // @ts-ignore
  options: {
    styleIsolation: "shared",
  },
})
export default class DogcNav extends Vue {
  @Prop({
    type: String,
  })
  title: string = "";

  statusBarHeight = "0px";

  titleBarHeight = "0px";

  backgroundHeight = "0px";
  mounted() {
    const systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight + "px";
    this.titleBarHeight = systemInfo.system.includes("iOS") ? "40px" : "48px";
    this.backgroundHeight =
      (systemInfo.statusBarHeight || 0) +
      (systemInfo.system.includes("iOS") ? 40 : 48) +
      "px";
    console.log(this.backgroundHeight, "sss");
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.dogc-nav {
  position: relative;
  .dogc-nav-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
  }
  .dogc-nav-title {
    width: 100vw;
    @include flex(row, center, center);
    text {
      font-size: 14px;
    }
  }
}
</style>
