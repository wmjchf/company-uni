import Vue from "vue";
import store from "./store";
// @ts-ignore
import uView from "uview-ui";

import App from "./App.vue";

// @ts-ignore
// import vk from "./uni_modules/vk-unicloud";

Vue.config.productionTip = false;

Vue.use(uView);
// Vue.use(vk);

// 初始化 vk框架
// Vue.prototype.vk.init({
//   Vue, // Vue实例           // 配置
// });

// 初始化 vk框架
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

app.$mount();
