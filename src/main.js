import Vue from 'vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map'
// import Antd from 'ant-design-vue'

Vue.config.productionTip = false
Vue.use(VueCookie)
// Vue.use(Antd)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(BaiduMap, {
  ak: 'GSEtM6WdO5BWuPpQawjNbKjybWSWAqGA'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
