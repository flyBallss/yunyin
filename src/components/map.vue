<template>
    <div class="map">
      <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
     </baidu-map>
       
        

    </div>
</template>

<script>
   

    export default {
         data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
       
    }
</script>

<style lang="less">
   .map {
  width: 400px;
  height: 300px;
}
</style>


