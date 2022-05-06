<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mpType: "app",
  onLaunch() {
    console.log("App Launch");
    // @ts-ignore
    vk.userCenter.getCurrentUserInfo({
      // @ts-ignore
      success: function (data) {
        // 成功后的逻辑
        console.log(data);
      },
    });
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  },
});
</script>

<style lang="scss">
@import "uview-ui/index.scss";
/*每个页面公共css */
</style>
