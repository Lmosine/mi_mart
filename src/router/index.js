import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import Login from '@/pages/login.vue'
import Index from '@/pages/index.vue'
import Product from '@/pages/product.vue'
import Detail from '@/pages/detail.vue'
import Cart from '@/pages/cart.vue'
import Order from '@/pages/order.vue'
import OrderConfiirm from '@/pages/orderConfirm.vue'
import OrderList from '@/pages/orderList.vue'
import OrderPay from '@/pages/orderPay.vue'
import AliPay from '@/pages/alipay.vue'
import UiTest from '@/pages/uiTest.vue'
import Map from '@/pages/map.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
      children: [
        { path: '/index', name: 'index', component: Index },
        { path: '/product/:id', name: 'product', component: Product },
        { path: '/detail/:id', name: 'detail', component: Detail }
      ]
    },
    { path: '/login', name: 'login', component: Login },
    { path: '/cart', name: 'cart', component: Cart },
    { path: '/ui', name: 'uiTest', component: UiTest },
    { path: '/map', name: 'Map', component: Map },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        { path: 'list', name: 'order-list', component: OrderList },
        { path: 'confirm', name: 'order-confirm', component: OrderConfiirm },
        { path: 'pay', name: 'order-pay', component: OrderPay },
        { path: 'alipay', name: 'alipay', component: AliPay }
      ]
    }
  ]
})

export default router
