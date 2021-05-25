<template>
  <div class="test1">
    <div class="test3">
      账号：
      <input class="test2" type="text" placeholder="请输入账号" />
    </div>
    <div class="test3">
      密码：
      <input class="test2" type="text" placeholder="请输入密码" />
    </div>
    <div>
      <button class="test2 test4">登录</button>
      <button class="test2 test4">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
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
.test1 {
  height: 250px;
  width: 350px;
  background-color: rgb(119, 112, 151);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  left: 600px;
  top: 200px;
}
.test2 {
  background-color: rgb(150, 61, 83);
}
.test4 {
  margin-left: 30px;
  margin-top: 10px;
}
</style>
