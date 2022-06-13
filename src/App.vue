<script lang="ts">
import Vue from "vue";
export default {
  mpType: "app",
  onLaunch() {
    console.log("App Launch");
  },
  onShow() {
    console.log("App Show");
    uni.hideTabBar();
  },
  onHide() {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
@import "./styles/global.scss"; /*每个页面公共css */
</style>
