<template>
    <div class="container bgimg relative" :class="'container' + index " :style="imgStyle">
      <div class="t_center white" v-if="index==0">
        <h3 class="item_tit">集团介绍</h3>
        <p class="item_text f16">风林火山集团成立于2014年，注册资本人民币5亿元。主要业务包括投资银行、PPP、项目投融资、资产管理、私募基金、供应链金融等。风林火山集团牢牢锁定金融创新引领者、产业升级推动者的核心定位，依托于自身丰富的资本运作经验与广泛的社会资源优势，通过让金融灌注实体产业，最终实现服务社会的发展目标。</p>
        <p class="item_text f16">风林火山集团以投行的理念来看待市场和项目，以领先全球的资产管理、投资银行业务为重心，专注于结构性高增长、赢利前景可观的行业，通过科学配置，构建一个多层次，全方位的“金融投资+高端产业“ 生态系统，并通过“资本运作”优化和“科学配置”社会财富，最终实现社会效率最大化。</p>
        <p class="item_text f16">风林火山集团以资源配置者的高度，积极践行“产业+ 资本+投行“的理念，有效引导资本流动， 大力发挥一二级市场联动，打造投资银行，融入国际资本市场链；利用金融投资，融入现代金融创新链；通过价值投资，融入顶端金融价值链；力推新产业模式融入社会资本服务链。 集团的投资领域涵盖了物联网、消费升级、高端制造、新材料、人工智能、大健康等。</p>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['bgimg',  'index' ],
    data () {
      return {
        container: []
      }
    },
    computed: {
      imgStyle () {
        return { backgroundImage: 'url(' + require('../assets/img/'+this.bgimg ) + ')'}
      }
    }
  }
</script>

<style scoped>
.container0{  height: 960px;z-index: 2}
.container1{  height: 473px;background-attachment: fixed;}
.container2{  height: 641px;z-index: 2;margin: -200px 0 0 0}
.container3{  height: 720px;background-attachment: fixed;}
.container4{  height: 630px;z-index: 2;margin: -200px 0 0 0}
.container5{  height: 620px;background-attachment: fixed;}
.container6{  height: 644px;z-index: 2;margin: -200px 0 0 0}
.bgimg{
  background-repeat: no-repeat;
  background-size: cover ;
  background-position: center top;
}
  .item_tit{font-size: 60px;padding: 120px 0 20px;    text-shadow: 1px 1px 5px #656565;}
  .item_text{width: 800px;margin: 0 auto 25px;    text-shadow: 1px 1px 5px #656565;}
</style>
