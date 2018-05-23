<template>
  <div class="index">
    <top></top>

    <slide-show :slides="slides" v-if="bannershow"></slide-show>

    <div class="wrap">
      <div class="index1">
        <div class="item clear">
          <img class="item_img left" src="../assets/img/home_05.jpg">
          <div class="item_con right">
            <p class="item_text  f30 t_bold">产业生态链</p>
            <div class="item_font f16">
              <p>针对上市公司主营业务所处行业的共同发展周期，风林火山对应导入优质的中小企业生态，提供稳健的资源支撑，平滑上市公司业绩表现。</p>
              <p>产业生态链包括：工业4.0、云计算、新材料、物联网、人工智能、智慧城市、军工（含军民融合）</p>
            </div>
            <router-link to="/service" class="right hover_blue item_btn f16">查看更多</router-link>
          </div>
        </div>
        <div class="item clear">
          <div class="item_con left">
            <p class="item_text  f30 t_bold">生态金融链</p>
            <div class="item_font f16">
              <p>风林火山资本策略：根据联盟的上市公司的资产需求，风林火山协助相关的多中小企业进行整合，以一定估值（换股上控股等）获得资产形成资产包并体现利润（上市公司改善经营能力或战略布局的资产），再以较高估值装入上市公司。</p>
              <p>生态金融链包括：股权投资、大投行、金融服务</p>
            </div>
            <router-link to="/service" class="right hover_blue item_btn f16">查看更多</router-link>
          </div>
          <img class="item_img right" src="../assets/img/home_07.jpg">
        </div>
      </div>

      <div class="index2 clear">
        <div class="index_news ">
          <h3 class="index2_tit f20">
            新闻资讯
            <router-link to="/news" class="right f12 hover_blue">查看更多 ></router-link>
          </h3>
          <div class="index_new clear">

  <!--              <a :href="'/newsDetail?id='+item.id" class="item_text block clear f12" v-for="item in tjNews" :key="item.id">-->
            <router-link :to="{path:'/newsDetail',query:{ id:item.id }}" class="item block clear f12 left" v-for="item in tjNews" :key="item.id">
              <img class="item_img block" :src="item.imgUrl">
              <div class="item_font t_overflow f16 t_bold">{{item.title}}</div>
              <div class="item_time gray_6">{{item.createTime}}</div>
              <div class="t_overflow f14">{{item.subTitle}}</div>
            </router-link>


          </div>
        </div>

        <!--<div class="index_qy left">
          <h3 class="index2_tit f16 t_bold">企业愿景</h3>
          <router-link to="/planning"><img src="../assets/img/home_17.jpg"/></router-link>
        </div>

        <div class="index_qy left">
          <h3 class="index2_tit f16 t_bold">企业战略</h3>
          <router-link to="/planning"><img src="../assets/img/home_19.jpg"/></router-link>
        </div>-->
      </div>

    </div>

    <foot></foot>
  </div>
</template>
<script>
    import top from '../components/header.vue'
    import foot from '../components/footer.vue'
    import slideShow from '../components/slideShow.vue'

    export default {
        name: 'index',
        data () {
            return {
              ywList:[
                {text:'产业生态链',href:'/service',src: require('../assets/img/home_05.jpg')},
                {text:'生态金融链',href:'/service',src: require('../assets/img/home_07.jpg')}
              ],
              tjNews: [],
              slides: [],
              bannershow:false
            }
        },
      components: {
        top,
        foot,
        slideShow
      },
      methods: {
        getBanner(){
         this.$axios.post("front/queryBanner").then(res=>{
            this.slides = res.data.data;
            this.bannershow = true
          });
        },
        getIndexNews(){
          let params = new URLSearchParams();
          params.append('pageNumber', '1');       //你要传给后台的参数值 key/value
          params.append('pageSize', '3');
          this.$axios({
            method: 'post',
            url:"front/queryNews",
            data:params
          }).then((res)=>{
              console.log(res.data.data)
              this.tjNews = res.data.data;
          });
        }
      },
      created(){
        this.getBanner(),
        this.getIndexNews()
      }
   }

</script>
<style lang="scss" scoped>
  .index1{
    .item{
      padding: 80px 0;border-bottom: 1px solid #d1d1d1;
    }
    .item_img{width: 550px;height: 300px;}
    .item_con{width: 580px;}
    .item_font{line-height: 30px;margin: 30px 0;}
    .item_btn{
      width: 128px;height: 38px;line-height: 38px;text-align: center;border: 1px solid #b5b5b5;
      &:hover{border-color: #0c6897}
    }
  }
  .index2_tit{margin: 0 0 25px 0}
  .index2{margin: 0 0 45px 0}
  .index_news{padding: 60px 0 0 0}
  .index_new{
    width: 1230px;
    .item{width: 380px;margin: 0 30px 0 0;
      &:hover .item_font{color: #0c6897}
    }
    .item_img{width: 380px;height: 210px;margin: 0 0 15px 0 }
    .item_time{margin: 5px 0}
  }
  .index_qy{
    width: 280px;margin: 0 30px 0 0;
    img{width: 280px;height: 150px;}
  }
</style>
