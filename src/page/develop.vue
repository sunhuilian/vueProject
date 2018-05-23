<template>
  <div class="develop">
    <top></top>

    <div class="fl_banner"></div>
    <div class="gray_bg">
      <!--<p class="dev1_tit t_center f36">组织架构</p>-->
      <!--<img class="dev1_img block" src="../assets/img/ys_05.jpg">-->
      <div class="dev2"></div>
    </div>

    <foot></foot>
  </div>
</template>
<script>
  import top from '../components/header.vue'
  import foot from '../components/footer.vue'

  export default {
    name: 'develop',
    data () {
      return {

      }
    },
    components: {
      top,
      foot
    }
  }
</script>
<style lang="scss" scoped>
  .fl_banner{background: url('../assets/img/ys_02.jpg') no-repeat center center;}
  /*.dev1_tit{padding: 75px 0 65px;}*/
  /*.dev1_img{margin: 0 auto}*/
  .dev2{width:100%;height:758px;background: url('../assets/img/ys_08.jpg') no-repeat center center;}
  .gray_bg{padding: 0 0 50px;}
</style>
