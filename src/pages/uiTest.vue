<template>
  <div class="ui">
    <a-dropdown>
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        Hover me <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>


<script>
import { Menu, Dropdown, Icon } from 'ant-design-vue'
export default {
  name: 'uiTest',
  components: {
    aMenu: Menu,
    aDropdown: Dropdown,
    aIcon: Icon,
    aMenuItem: Menu.Item
  },
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

<style lang="scss" scoped></style>