<template>
  <view>
    <bufang-splash @hideSplash="hideSplash" v-if="splashShow"></bufang-splash>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class IndexPage extends Vue {
  splashShow = true;

  hideSplash() {
	const wang = uniCloud.importObject("wang");
	wang.add("name","云函数测试");
    uni.redirectTo({
      url: "/pages/home/index",
    });
  }
}
</script>

<style lang="scss" scoped></style>
