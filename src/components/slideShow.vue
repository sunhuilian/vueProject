<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].linkUrl">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].imgUrl">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].imgUrl">
        </transition>
      </a>
    </div>
    <ul class="slide-pages" v-if="pageShow">
      <li class="slide-arrow arrow-left" @click="goto(prevIndex)"></li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{on: index === nowIndex}"></a>
      </li>
      <li class="slide-arrow arrow-right" @click="goto(nextIndex)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 4000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true,
      pageShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    runInv () {
        if(this.slides.length > 1){
          this.invId = setInterval(() => {
            this.goto(this.nextIndex)
          }, this.inv)
        }else {
            this.pageShow = false
        }
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv();
  },
  watch:{
    slides(val, oldVal){
        //console.log(val)
      this.slides = val;
    }
  }
}
</script>

<style scoped>
  .slide-trans-enter-active {transition: all .5s;}
  .slide-trans-enter {transform: translateX(100%);}
  .slide-trans-old-leave-active {transition: all .5s;transform: translateX(-100%);}
  .slide-show {position: relative;width: 100%;height: 600px;overflow: hidden;z-index: 1}
  .slide-img img {  width: 100%;  height: 100%;  position: absolute;left: 50%;top:50%;margin: -300px 0 0 -50%}
  .slide-pages {position: absolute;bottom: 20px;width: 100%;text-align: center}
  .slide-pages li {display: inline-block;padding: 0 5px;cursor: pointer;color:#fff;font-size: 32px;font-family: Arial}
  .slide-pages li a{display: inline-block;width: 35px;height: 6px;background: #fff;opacity: 0.7}
  .slide-pages li .on{background: #0c6897;opacity: 1}
  .slide-arrow{width: 40px;height:80px;background: url("../assets/img/al.png");position: absolute;top:-285px;left: 50px;display: none!important;opacity: 0.5}
  .slide-arrow:hover{opacity: 1}
  .arrow-right{background: url("../assets/img/ar.png");left: auto;right: 50px}
  .slide-show:hover .slide-arrow{display: inline-block!important;}
</style>
