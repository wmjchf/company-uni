<template>
  <view class="dogc-login">
    <u-button type="success" @click="login()">立即登陆</u-button>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getSetting, getUserInfo, getWXUserInfo, login } from "@/utils";

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
    // @ts-ignore
    this.vk.userCenter.loginByWeixin({
      data: {},
      // @ts-ignore
      success: function (data) {
        // 成功后的逻辑
        console.log(data);
      },
    });
    // this.vk.toast("提示内容");
    // const setting = await getSetting({ withSubscriptions: false });
    // if (setting.authSetting["scope.userInfo"]) {
    //   try {
    //     const userInfo = await getWXUserInfo({ desc: "用户用户信息完善" });
    //     console.log(userInfo);
    //     const loginInfo = await login({ provider: "weixin" });
    //     console.log(loginInfo);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
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
