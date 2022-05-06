<template>
  <view class="dogc-login">
    <u-button type="success" @click="login()">立即登陆</u-button>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getSetting, getWXUserInfo } from "@/utils";

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

  vkLogin(): Promise<any> {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      vk.userCenter.loginByWeixin({
        data: {
          type: "",
        },
        // @ts-ignore
        success: function (data) {
          // 成功后的逻辑
          resolve(data);
          console.log(data);
        },
      });
    });
  }
  /**
   * 设置昵称等用户展示的个人信息
   * data 请求参数 说明
   * @param {String} nickname 昵称
   * @param {String} avatar 头像
   * @param {Number} gender 性别
   */
  vkUpdateUser(userInfo: {
    nickname?: string;
    avatar?: string;
    gender?: number;
  }): Promise<any> {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      vk.userCenter.updateUser({
        data: {
          ...userInfo,
        },
        // @ts-ignore
        success: function (data) {
          // 成功后的逻辑
          resolve(data);
        },
      });
    });
  }

  async login() {
    const setting = await getSetting({ withSubscriptions: false });
    if (setting.authSetting["scope.userInfo"]) {
      try {
        const wxUserInfo = await getWXUserInfo({ desc: "用于用户信息完善" });

        const loginInfo = await this.vkLogin();

        const updateInfo = await this.vkUpdateUser({
          nickname: wxUserInfo.userInfo.nickName,
          avatar: wxUserInfo.userInfo.avatarUrl,
          // @ts-ignore
          gender: wxUserInfo.userInfo.gender,
        });
      } catch (error) {
        console.log(error);
      }
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
