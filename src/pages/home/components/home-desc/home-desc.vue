<template>
  <view class="home-desc">
    <text>{{ user.firstName }}</text>
  </view>
</template>

<script lang="ts">
import { ProfileState } from "@/store/profile/types";
import { Vue, Component, Prop } from "vue-property-decorator";
import { State } from "vuex-class";

const namespace = "profile";

@Component({
  // @ts-ignore
  options: {
    styleIsolation: "shared",
  },
})
export default class HomeDesc extends Vue {
  @State("user", { namespace }) private user!: ProfileState["user"];
  mounted() {}
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.home-desc {
}
</style>
