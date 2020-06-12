<template>
  <div class="home-container">
    <!-- 注意，可以支持插槽，slot就是插槽 -->
    <van-nav-bar
      class="app-nav-bar"
    ><van-button
    class="app-nav-btn"
    type="warning"
    icon="search"
    round
    slot="title">搜索</van-button>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="less">
.home-container {
  /deep/ .van-nav-bar_title {
  max-width: none;
}
.app-nav-btn{
  width: 277px;
  height: 32px;
  background: #5babfb;
  border: none;
  .van-icon {
    font-size: 16px;
  }
  .van-button_text {
    font-size: 14px;
  }
 }
}
</style>
