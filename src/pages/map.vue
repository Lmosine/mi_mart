<template>
  <div class="map-component">
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      @ready="handler"
      :scroll-wheel-zoom="true"
    >
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: 'map',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      center: { lng: 121.506377, lat: 31.245105 },
      zoom: 3
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    handler() {
      this.zoom = 15
    }
  }
}
</script>

<style lang="scss" scoped>
.map-component {
  display: flex;
  align-content: space-around;
  .bm-view {
    width: 60%;
    height: 300px;
  }
}
</style>