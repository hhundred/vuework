import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
//轮播图---图片懒加载
import { Lazyload } from 'vant';
import { AddressEdit } from 'vant';
// import { BASE_URL } from "./utils/tools";



Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(AddressEdit);

Vue.config.productionTip = false

// Vue.filter("dalImg", (v) => {
//   // 配置如果找不到图片文件的话就从这里去取，是一个filter方法
//   if (v) {
//     //判断v是否存在，如果存在进入内部的判断，如果不存在就到else
//     if (v.startsWith("http")) {
//       //startsWith是字符串方法，类似正则，效果是验证字符串开头是否是传递的参数，这里是验证开头是否是http如果是结果为true，return结束这次判断如果不是激怒人西安面returnserverUrl + v在结束这次判断，serverUrl这是配置好的http://192.168.13.169:133接口的地址
//       return v;
//     }
//     return BASE_URL + v;
//   } else {
//     return "https://i02piccdn.sogoucdn.com/adcc5530029bc8cb";
//     //如果不存在图片进入这里 用一张图来取代本应该存在的图，这个就是设置图片不存在或则图片加载失败的方法
//   }
// });
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
