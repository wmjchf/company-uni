import Vue from "vue";

// @ts-ignore
import uView from "uview-ui";

import App from "./App.vue";

import store from "./store";

import { initRequest } from "./api/request/index";

Vue.config.productionTip = false;

Vue.use(uView);

// @ts-ignore
uni.$u.setConfig({
  // 修改$u.config对象的属性
  config: {
    // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
    unit: "rpx",
  },
  // 修改$u.props对象的属性
  props: {
    // 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
    radio: {
      size: 15,
    },
    // 其他组件属性配置
    // ......
  },
});
// @ts-ignore
App.mpType = "app";

const app = new Vue({
  store,
  ...App,
});

initRequest(app);

app.$mount();
