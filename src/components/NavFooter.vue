<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="小米商城" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">小米官网</a><span>|</span> <a href="javascript:;">MIUI</a
      ><span>|</span> <a href="javascript:;">小米之家</a><span>|</span>
      <a href="javascript:;">服务网点</a><span>|</span>
      <a href="javascript:;">小米云服务</a>
    </div>
    <div class="copyright">Copyright ©2020 <span>mi.com</span> 京ICP证110507号</div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    margin-top: 13px;
    span {
      color: #ff6600;
    }
  }
}
</style>