<template>
  <div class="channel-edit">
  <!-- 头部部分 -->
  <!-- :border='false'去除单元格的底边框 -->
  <van-cell center :border='false'>
    <div slot="title">我的频道</div>
    <van-button
    round type='danger'
    plain size='mini'>编辑</van-button>
  </van-cell>
  <!-- 头部部分结束 -->
  <!-- 宫格开始 -->
  <van-grid :gutter="10">
  <van-grid-item v-for="value in 8" :key="value" icon="photo-o"/>
  </van-grid>
   <!-- 宫格结束 -->
    <!-- 头部部分 -->
  <!-- :border='false'去除单元格的底边框 -->
  <van-cell center :border='false'>
    <div slot="title">我的频道</div>
  </van-cell>
  <!-- 头部部分结束 -->
  <!-- 宫格开始 -->
  <van-grid :gutter="10">
  <van-grid-item v-for="value in 8" :key="value" icon="photo-o"/>
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
}
</style>
