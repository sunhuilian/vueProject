<template>
  <div class="planning">
    <top></top>

    <div class="fl_banner"></div>
    <div class="gray_bg overflow">
      <img class="item block" v-for="item in planList" :src="item.src">
    </div>

    <foot></foot>
  </div>
</template>
<script>
  import top from '../components/header.vue'
  import foot from '../components/footer.vue'

  export default {
    name: 'planning',
    data () {
      return {
        planList:[
          {src: require('../assets/img/ch_05.jpg')},
          {src: require('../assets/img/ch_08.jpg')},
          {src: require('../assets/img/ch_11.jpg')},
          {src: require('../assets/img/ch_14.jpg')},
          {src: require('../assets/img/ch_16.jpg')},
          {src: require('../assets/img/ch_18.jpg')}
        ]
      }
    },
    components: {
      top,
      foot
    }
  }
</script>
<style lang="scss" scoped>
  .fl_banner{background: url('../assets/img/ch_02.jpg') no-repeat center center;}
  .item{margin: 35px auto 0}
  .gray_bg{padding: 0 0 65px 0}
</style>
