<template>
  <view class="bufang_splash" @click="hideSplash">
    <image :src="require('@/assets/duoLa.jpeg')"></image>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class BufangSplash extends Vue {
  hideSplash() {
    this.$emit("hideSplash");
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

.bufang_splash {
  position: relative;
  width: 100vw;
  height: 100vh;
  @include flex(row, center, flex-end);
  image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include grayscale();
  }
}
</style>
