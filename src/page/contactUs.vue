<template>
  <div class="contact">
    <top></top>

    <div class="fl_banner"></div>
    <div class="gray_bg">
      <div class="wrap">
        <h3 class="f24 t_bold cts_tit">风林火山集团</h3>
        <p class="cts_text f18">电话: 400－964－1988<br>
  地址: 上海市浦东新区杨高南路799号陆家嘴世际金融广场3号楼28楼</p>
        <iframe class="block" src="../../static/map.html" width="1200" height="430" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>

    <foot></foot>
  </div>
</template>
<script>
  import top from '../components/header.vue'
  import foot from '../components/footer.vue'

  export default {
    name: 'contact',
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
  .fl_banner{background: url('../assets/img/lx_02.jpg') no-repeat center center;}
  .cts_tit{padding: 45px 0 30px 185px}
  .cts_text{padding: 0 0 70px 185px}
  .wrap{background: #fff;  }
  .gray_bg{padding: 25px 0 30px}
</style>
