<template>
  <div class="profile">
    <top></top>
      <imgcontainer v-for="item in bgList" :bgimg="item.bgimg" :index="item.index" :key="item.index"></imgcontainer>
    <foot></foot>
  </div>
</template>
<script>
    import top from '../components/header.vue'
  import foot from '../components/footer.vue'
    import imgcontainer from '../components/section'

    export default {
        name: 'profile',
        data () {
            return {
              bgList:[
                {bgimg:'gk_02.jpg',index:'0'},
                {bgimg:'gk_03.jpg',index:'1'},
                {bgimg:'gk1_02.png',index:'2'},
                {bgimg:'gk_05.jpg',index:'3'},
                {bgimg:'gk1_04.png',index:'4'},
                {bgimg:'gk_07.jpg',index:'5'},
                {bgimg:'gk1_06.png',index:'6'}
              ]
            }
        },
        components: {
          top,
          foot,
          imgcontainer
        }
    }
</script>
<style lang="scss" scoped>

</style>
