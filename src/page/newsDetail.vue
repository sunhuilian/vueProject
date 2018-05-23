<template>
  <div class="news_detail">
    <top></top>

    <div class="fl_banner"></div>
    <div class="gray_bg">
      <div class="wrap">
        <h3 class="item_tit f32 t_center">{{detail.title}}</h3>
        <p class="item_time gray_9 t_center">发布时间 : {{detail.createTime}}</p>
        <div class="item_con" v-html="content">
          {{content}}
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
      name: 'newsDetail',
      data () {
        return {
          detail: {},
          content:''
        }
      },
      components: {
        top,
        foot
      },
      methods: {
        getNewsDetail(){
          let params = new URLSearchParams();
          //params.append('newId', window.location.search.split('=')[1]);
          params.append('newId', this.$route.query.id);
          this.$axios({
            method: 'post',
            url: 'front/queryNewDetail',
            data: params
          }).then((res) => {
            this.detail = res.data.data;
            this.content = this.detail.content;
            console.log(this.content)
          });
        }
      },
      mounted(){
        this.getNewsDetail()
      }
    }
</script>
<style lang="scss" scoped>
  .fl_banner{background: url('../assets/img/new_02.jpg') no-repeat center center;}
  .item_tit{padding: 35px 0 0 0}
  .item_time{margin: 20px 0 50px}
  .item_con{padding: 0 0 60px 0}
  .item_con img{max-width: 100%}
</style>
