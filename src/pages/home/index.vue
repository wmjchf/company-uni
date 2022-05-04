<template>
  <view>
    <u-button text="月落" type="success"></u-button>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class HomePage extends Vue {
  private title = "HOME";
}
</script>

<style lang="scss" scoped></style>
