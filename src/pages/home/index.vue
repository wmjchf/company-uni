<template>
  <view class="home">
    <dogc-login></dogc-login>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DogcLogin from "@/components/dogc-login/dogc-login.vue";
// @ts-ignore
@Component({
  components: { DogcLogin },
})
export default class HomePage extends Vue {
  private title = "HOME";
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.home {
  width: 100vw;
  height: 100vh;
  @include flex(row, center, center);
}
</style>
