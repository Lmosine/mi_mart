<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import user from './api/user'
import cart from './api/cart'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {},
  mounted() {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    ...mapActions({
      saveUserName: 'user/saveUserName',
      saveCartCount: 'cart/saveCartCount'
    }),
    async getUser() {
      try {
        const res = await user.getUser()
        this.saveUserName({ username: res.username })
      } catch (error) {
        console.log(error)
      }
    },
    async getCartCount() {
      try {
        const res = await cart.getCartCount()
        this.saveCartCount({ cartCount: res })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang='scss'>
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
