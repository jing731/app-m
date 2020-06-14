<template>
  <div class="channel-edit">
  <!-- 头部部分 -->
  <!-- :border='false'去除单元格的底边框 -->
  <van-cell center :border='false'>
    <div slot="title" class="channel-title">我的频道</div>
    <van-button
    round type='danger'
    plain size='mini'>编辑</van-button>
  </van-cell>
  <!-- 头部部分结束 -->
  <!-- 宫格开始 -->
  <van-grid :gutter="10">
  <van-grid-item v-for="value in 8" :key="value" text="文字" />
  </van-grid>
   <!-- 宫格结束 -->
    <!-- 头部部分 -->
  <!-- :border='false'去除单元格的底边框 -->
  <van-cell center :border='false'>
    <div slot="title" class="channel-title">我的频道</div>
  </van-cell>
  <!-- 头部部分结束 -->
  <!-- 宫格开始 -->
  <van-grid :gutter="10">
  <van-grid-item
  v-for="value in 8"
  :key="value" text="文字"
  class="grid-item"
  />
  </van-grid>
   <!-- 宫格结束 -->
  </div>
</template>
<script>
export default {
  name: 'ChannelEdit',
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
.channel-edit{
  padding-top: 54px;
  .channel-title{
    font-size: 16px;
    color: #333;
  }
  .grid-item{
    width: 80px;
    height: 43px;
    /deep/.van-grid-item_content{
      background-color: red;
    }
  }
}
</style>
