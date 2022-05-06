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
  mounted() {
    const systemInfo = uni.getSystemInfoSync();
    console.log(systemInfo);
    this.statusBarHeight = systemInfo.statusBarHeight + "px";
    this.titleBarHeight = systemInfo.system.includes("iOS") ? "40px" : "48px";
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.dogc-nav {
  .dogc-nav-title {
    width: 100vw;
    background: green;
    @include flex(row, center, center);
    text {
      font-size: 14px;
    }
  }
}
</style>
