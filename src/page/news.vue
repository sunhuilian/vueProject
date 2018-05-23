<template>
  <div class="news">
    <top></top>

    <div class="fl_banner"></div>
    <div class="gray_bg">
      <div class="wrap">
        <ul class="news">
          <li v-for="item in items" class="item clear">
            <!--<a :href="'/newsDetail?id='+item.id">-->
            <router-link :to="{path:'/newsDetail',query:{ id:item.id }}">
              <img class="item_img left" :src="item.imgUrl">
              <div class="item_con right">
                <h3 class="item_tit clear">
                  <span class="f20">{{item.title}}</span>
                  <span class="right f16 gray_6">{{item.createTime}}</span>
                </h3>
                <p class="item_text gray_6">{{item.subTitle}}</p>
                <span class="item_more right blue">查看更多 ></span>
              </div>
            </router-link>
            <!--</a>-->
          </li>
        </ul>
        <mo-paging :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange"></mo-paging>
      </div>
    </div>

    <foot></foot>
  </div>
</template>

<script>
    import top from '../components/header.vue'
    import foot from '../components/footer.vue'
    import MoPaging from '../components/pageination.vue'

    export default {
        name: 'news',
        data () {
            return {
              pageSize : 7 , //每页显示20条数据
              currentPage : 1, //当前页码
              count : 0, //总记录数
              items : []
            }
        },
        components: {
          top,
          foot,
          MoPaging
        },
      methods : {
        //获取数据
        getList () {
          let params = new URLSearchParams();
          params.append('pageNumber', this.currentPage);       //你要传给后台的参数值 key/value
          params.append('pageSize', this.pageSize);

          this.$axios({
            method: 'post',
            url:"front/queryNews",
            data:params
          }).then((res)=>{
            this.count = res.data.total
            this.items = res.data.data
          });
        },

        //从page组件传递过来的当前page
        pageChange (page) {
          this.currentPage = page
          this.getList()
        }
      },
      mounted() {
        //请求第一页数据
        this.getList()
      }
    }
</script>
<style lang="scss" scoped>
  .fl_banner{background: url('../assets/img/new_02.jpg') no-repeat center center;}
  .item{
    padding: 15px 0;border-bottom: 1px solid #ddd;cursor: pointer;
    &:hover .item_more{text-decoration: underline}
  }
  .item_img{width: 280px;height: 180px;}
  .item_con{width: 890px}
  .item_text{height: 100px;margin: 15px 0;line-height: 24px;}
</style>
