import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'GglgGpgAr1Rhxut0lmDpLP8PUmqeKLiZ'
})
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
