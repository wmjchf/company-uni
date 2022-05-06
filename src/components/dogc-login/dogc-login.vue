<template>
  <view class="dogc-login">
    <u-button type="success" @click="login()">立即登陆</u-button>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getSetting, getUserInfo } from "@/utils";

@Component({
  // @ts-ignore
  options: {
    styleIsolation: "shared",
  },
})
export default class DogcLogin extends Vue {
  getUserInfo() {
    console.log();
  }
  async login() {
    const setting = await getSetting({ withSubscriptions: false });
    if (setting.authSetting["scope.userInfo"]) {
      const userInfo = await getUserInfo({ provider: "weixin" });
      console.log(userInfo);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.dogc-login {
  ::v-deep .u-button {
    width: 100px;
    border-radius: 12px;
  }
}
</style>
