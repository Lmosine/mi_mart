<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(item2, index2) in item" :key="index2">
                    <!-- <a :href="'/#/product/' + item2.id"> -->
                    <div class="children-item" @click="goToProduct(item2.id)">
                      <img v-lazy="item2.img" :alt="item2.name" />
                      {{ item2.name }}
                    </div>
                    <!-- </a> -->
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img v-lazy="item.img" alt="" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <div
          class="ads-item"
          @click="goToProduct(item.id)"
          v-for="(item, index) in adsList"
          :key="index"
        >
          <img v-lazy="item.img" alt="" />
        </div>
      </div>
      <div class="banner">
        <div @click="goToProduct(30)">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </div>
      </div>
      <div class="product-box">
        <div class="container">
          <h2 class="title">手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <div @click="goToProduct(35)">
                <img v-lazy="'/imgs/mix-alpha.jpg'" alt="" />
              </div>
            </div>
            <div class="list-box">
              <div class="list" v-for="(item, index) in phoneList" :key="index">
                <div class="item" v-for="(item2, index2) in item" :key="index2">
                  <span class="new-pro" v-if="index2 % 2 == 0">新品</span>
                  <span class="kill-pro" v-else>秒杀</span>
                  <div class="item-img">
                    <img v-lazy="item2.mainImage" :alt="item2.name" />
                  </div>
                  <div class="item-info">
                    <h3>{{ item2.name }}</h3>
                    <p>{{ item2.subtitle }}</p>
                    <p class="price" @click="addCart(item2.id)">{{ item2.price }}元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      modalType="middle"
      title="提示"
      btnType="1"
      sureText="查看购物车"
      :showModal="showModal"
      @submit="goToCart"
      @cancle="showModal = false"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar.vue'
import Modal from '@/components/Modal.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import index from '../api/index'
import cart from '../api/cart'
import { mapActions } from 'vuex'
export default {
  name: 'index',
  components: { ServiceBar, swiper, swiperSlide, Modal },
  mixins: [],
  props: {},
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        { id: '42', img: 'imgs/slider/slide-1.jpg' },
        { id: '45', img: 'imgs/slider/slide-2.jpg' },
        { id: '46', img: 'imgs/slider/slide-3.jpg' },
        { id: '42', img: 'imgs/slider/slide-4.jpg' },
        { id: '42', img: 'imgs/slider/slide-5.jpg' }
      ],
      menuList: [
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '移动4G专区' }
        ],
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '移动4G专区' }
        ],
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '移动4G专区' }
        ],
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '移动4G专区' }
        ],
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '移动4G专区' }
        ],
        [
          { id: 30, img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: 31, img: '/imgs/item-box-2.png', name: '小米8青春版' },
          { id: 32, img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro' },
          { id: 33, img: '/imgs/item-box-4.jpg', name: '移动4G专区' }
        ]
      ],
      adsList: [
        { id: 33, img: '/imgs/ads/ads-1.png' },
        { id: 48, img: '/imgs/ads/ads-2.jpg' },
        { id: 45, img: '/imgs/ads/ads-3.png' },
        { id: 47, img: '/imgs/ads/ads-4.jpg' }
      ],
      phoneList: [],
      showModal: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getPhoneList()
  },
  beforeDestroy() {},
  methods: {
    ...mapActions({
      saveCartCount: 'cart/saveCartCount'
    }),
    goToProduct(id) {
      this.$router.push({ name: 'product', params: { id: id } })
    },
    goToCart() {
      this.$router.push('/cart')
    },
    async getPhoneList() {
      try {
        this.phoneList = await index.getPhoneList()
      } catch (error) {
        console.log(error)
      }
    },
    async addCart(id) {
      try {
        const { showModal, res } = await cart.addCart(id)
        this.showModal = showModal
        const cartCount = res.cartTotalQuantity || 0
        this.saveCartCount({ cartCount: cartCount })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            position: relative;
            display: block;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
              transition: width 0.5s;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            position: absolute;
            top: 0;
            left: 264px;
            box-sizing: border-box;
            background-color: #ffffff;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
                .children-item {
                  color: $colorB;
                  font-size: 14px;
                  cursor: pointer;
                  img {
                    width: 42px;
                    height: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    .ads-item {
      width: 296px;
      height: 167px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banner {
    img {
      height: 100%;
      width: 100%;
    }
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    .title {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: #ffffff;
            text-align: center;
            padding-top: 5px;
            box-sizing: border-box;
            span {
              display: inline-block;
              width: 80px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                width: 100%;
                height: 180px;
                padding-top: 5px;
              }
            }
            .item-info {
              h3 {
                font-size: 14px;
                color: $colorB;
                line-height: 14px;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
                &::after {
                  @include bgImg(18px, 18px, '/imgs/icon-cart-hover.png');
                  content: '';
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>