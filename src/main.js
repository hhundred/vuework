import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
//轮播图---图片懒加载
import { Lazyload } from 'vant';

Vue.use(Vant);
Vue.use(Lazyload);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
