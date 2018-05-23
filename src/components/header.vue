<template>
  <div class="header">
    <div class="wrap clear">
      <img class="logo block left" src="../assets/img/logo.png">
      <ul class="nav right f16 clear">
        <li class="relative t_center left" v-for="nav in navs">
          <router-link :to="nav.href">{{nav.name}}</router-link>
          <div class="line"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'top',
        data () {
            return {
              navs: [
                {name:'首页',href:'/'},
                {name:'企业概况',href:'/profile'},
                {name:'新闻资讯',href:'/news'},
                {name:'企业发展',href:'/develop'},
                {name:'业务规划与策略',href:'/planning'},
                {name:'业务服务',href:'/service'},
                {name:'联系我们',href:'/contactUs'}
              ]
            }
        }
    }
</script>
<style lang="scss" scoped>
  @mixin wh($w,$h){width: $w;height: $h}
  @mixin center_v($h){height: $h;line-height: $h}

  .header{
    @include wh(100%,120px);background: #fff;
    .logo{margin: 13px 0 0 0}
  }
  .nav{
    li{
      @include center_v(120px);cursor: pointer;padding: 0 25px;
      &:hover .line{margin-top: -6px}
      a{}
    }
    .line{width: 100%;height: 6px;background: #0c6897;transition: all 0.2s linear;padding: 0 25px;margin-left: -25px;}
  }
  .router-link-exact-active{color:#0c6897}
</style>
