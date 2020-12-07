import Vue from 'vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
