<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="goToLogin()">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" v-if="!username">注册</a>
          <a class="my-cart" href="javascript:;" @click="goToCart()"
            ><span class="icon-cart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img"><img v-lazy="item.mainImage" :alt="item.subtitle" /></div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in redMiList" :key="index">
                  <a href="" target="_blank">
                    <div class="pro-img"><img v-lazy="item.img" :alt="item.title" /></div>
                    <div class="pro-name">{{ item.title }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in tvList" :key="index">
                  <a href="" target="_blank">
                    <div class="pro-img"><img v-lazy="item.img" :alt="item.title" /></div>
                    <div class="pro-name">{{ item.title }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javsscript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import index from '../api/index'
export default {
  name: 'NavHeader',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      username: '',
      phoneList: [],
      redMiList: [
        { title: 'Redmi Note 9 系列', price: 999.0, img: '/imgs/nav-img/nav-2-1.webp' },
        { title: 'Redmi K30S 至尊纪念版', price: 2599.0, img: '/imgs/nav-img/nav-2-2.webp' },
        { title: 'Redmi K30 至尊纪念版', price: 1999.0, img: '/imgs/nav-img/nav-2-3.webp' },
        { title: 'Redmi 9A', price: 599.0, img: '/imgs/nav-img/nav-2-4.webp' },
        { title: 'Redmi K30 系列', price: 1399.0, img: '/imgs/nav-img/nav-2-5.webp' },
        { title: 'Redmi 10X', price: 999.0, img: '/imgs/nav-img/nav-2-6.webp' }
      ],
      tvList: [
        { title: '小米壁画电视', price: 6999.0, img: '/imgs/nav-img/nav-3-1.jpg' },
        { title: '小米全面屏电视E55A', price: 1999.0, img: '/imgs/nav-img/nav-3-2.jpg' },
        { title: '小米电视4A 32英寸', price: 699.0, img: '/imgs/nav-img/nav-3-3.png' },
        { title: '小米电视4A 55英寸', price: 1799.0, img: '/imgs/nav-img/nav-3-4.jpg' },
        { title: '小米电视4A 65英寸', price: 2699.0, img: '/imgs/nav-img/nav-3-5.jpg' },
        { title: '小米电视4K高清', price: 3699.0, img: '/imgs/nav-img/nav-3-6.png' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getProductList()
  },
  beforeDestroy() {},
  methods: {
    async getProductList() {
      try {
        const res = await index.getProductList()
        this.phoneList = res
      } catch (error) {
        console.log(error)
      }
    },
    goToCart() {
      this.$router.push('/cart')
    },
    goToLogin() {
      this.$router.push('/login')
    }
  },
  filters: {
    currency(val) {
      if (!val) return '0.00'
      return val.toFixed(2) + '元'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: '';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-logo.png') no-repeat center;
            background-size: 55px;
            transition: margin 0.2s;
          }
          &:after {
            content: '';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('/imgs/mi-home.png') no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            height: 0;
            opacity: 0;
            overflow: hidden;
            width: 1226px;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0 7px 6px rgba(0, 0, 0, 0.11);
            transition: height 0.5s;
            background-color: #ffffff;
            z-index: 10;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              &:before {
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
              a {
                display: inline-block;
                .pro-img {
                  height: 137px;
                  img {
                    width: auto;
                    height: 111px;
                    margin-top: 26px;
                  }
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url('/imgs/icon-search.png') no-repeat center;
            background-size: contain;
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>