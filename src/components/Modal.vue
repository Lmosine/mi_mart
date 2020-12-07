<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dailog">
        <div class="modal-header">
          <span>{{ title }}</span>
          <div class="icon-close" @click="$emit('cancle')"></div>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType === '1'" @click="$emit('submit')">{{
            sureText
          }}</a>
          <a href="javascript:;" class="btn" v-if="btnType === '2'" @click="$emit('cancle')">{{
            cancelText
          }}</a>
          <div class="btn-group" v-if="btnType === '3'">
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{ sureText }}</a>
            <a href="javascript:;" class="btn" @click="$emit('cancle')">{{ cancelText }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  components: {},
  mixins: [],
  props: {
    modalType: {
      type: String,
      default: 'form'
    },
    title: String,
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  },
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
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
</style>