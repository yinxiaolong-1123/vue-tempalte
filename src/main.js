import Vue from 'vue';
import App from './App.vue';

// 滚动条插件, 公共组件中左侧菜单栏用到
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';

// 公共组件存放位置应位于路由文件和vuex之上
import WdzCommonComponent from "wdz-common-components";
import WdzVideo from "wdz-video";

import router from './router';
import store from './store';

// 各类插件
import "./plugins/iview";
import "./plugins/moment";
import "./plugins/cookie.js";
import i18n from "./plugins/i18n";

// 全局方法混入
import publicMethods from './common/publicMethods';
Vue.mixin(publicMethods);

// eventBus全局处理
Vue.prototype.$eventBus = new Vue();
Vue.mixin({
  beforeRouteLeave(to, from, next){
    // 拦截beforeDestroy钩子自动销毁所有订阅的事件
    this.$eventBus.$off();
    next();
  }
});

// http/https类型判断
if (window.location.href.substr(0, 5) == "https") {
  Vue.prototype.$https = true;
} else {
  Vue.prototype.$https = false;
}

Vue.config.productionTip = false;

Vue.use(WdzCommonComponent);
Vue.use(WdzVideo);
Vue.use(PerfectScrollbar);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
