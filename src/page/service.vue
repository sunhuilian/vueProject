<template>
  <div class="service">
    <top></top>

    <div class="fl_banner"></div>
    <div >
      <p class="ser1_tit t_center f36">业务发展核心</p>
      <h4 class="f18 t_bold t_center gray_6">产业与金融资源的结合</h4>
      <p class="ser1_text t_center gray_6 f18">以金融资本为手段推动产业资本的发展，以产业的发展促进金融业务的深化。<br>
实体产业通过现金流或业务收入形势支持金融发展和金融资本的聚集，实现产业规模与效益的扩张，提升产业竞争力。</p>
      <div class="wrap">
        <div class="ser2 clear">
          <div class="item clear">
            <img class="item_img left" src="../assets/img/yw_03.jpg">
            <div class="item_text right gray_6 f16">
              <p>针对上市公司主营业务所处行业的共同发展周期，风林火山对应导入优质的中小企业生态，提供稳健的资源支撑，平滑上市公司业绩表现。</p>
              <p>产业生态链包括：工业4.0、云计算、新材料、物联网、人工智能、智慧城市、军工（含军民融合）</p>
            </div>
          </div>

          <div class="item clear">
            <img class="item_img left" src="../assets/img/yw_06.jpg">
            <div class="item_text right gray_6 f16">
              <p>风林火山资本策略：根据联盟的上市公司的资产需求，风林火山协助相关的多中小企业进行整合，以一定估值（换股上控股等）获得资产形成资产包并体现利润（上市公司改善经营能力或战略布局的资产），再以较高估值装入上市公司。</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <foot></foot>
  </div>
</template>
<script>
  import top from '../components/header.vue'
  import foot from '../components/footer.vue'

  export default {
    name: 'service',
    data () {
      return {
//        serList:[
//          {src:'' + require('../assets/img/yw_03.jpg')},
//          {src:'' + require('../assets/img/yw_06.jpg')}
//        ]
      }
    },
    components: {
      top,
      foot
    }
  }
</script>
<style lang="scss" scoped>
  .fl_banner{background: url('../assets/img/yw_02.jpg') no-repeat center center;}
  .ser1_tit{padding: 50px 0 25px}
  .ser1_text{margin: 5px 0 0 0}
  .ser2{
    .item{
      padding: 80px 0;border-bottom: 1px solid #d1d1d1;
      &:last-child{border: none}
    }
    .item_text{width: 810px;}
  }

</style>
