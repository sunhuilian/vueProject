<template>
  <div class="footer t_center gray_6">
    ©2018 风林火山集团 沪ICP备17040160号-2
  </div>
</template>
<script>
    export default {
        name: 'foot',
        data () {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
  @mixin center_v($h){height: $h;line-height: $h}
  .footer{background: #f0f0f0;@include center_v(50px)}
</style>
