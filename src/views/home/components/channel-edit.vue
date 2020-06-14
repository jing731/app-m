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
  <van-grid-item
  v-for="(channel, index) in userChannels"
  :key="index"
  :text="channel.name" />
  </van-grid>
   <!-- 宫格结束 -->
    <!-- 头部部分 -->
  <!-- :border='false'去除单元格的底边框 -->
  <van-cell center :border='false'>
    <div slot="title" class="channel-title">我的频道</div>
  </van-cell>
  <!-- 头部部分结束 -->
  <!-- 宫格开始 -->
  <!-- // channel我的频道中遍历的数据  userChannels 从父组件中传过来的数据 -->
  <van-grid :gutter="10">
  <van-grid-item
  v-for="(channel, index) in userChannels"
  :key="index" :text="channel.name"
  class="grid-item"
  />
  </van-grid>
   <!-- 宫格结束 -->
  </div>
</template>
<script>
import { GetAllChannels } from '@/api/channel'
export default {
  name: 'ChannelEdit',
  components: {},
  // 当属性名有特殊符号，需要用引号将属性名包起来 'user-channels'
  // 或者使用驼峰命名法
  props: {
    // 传过来的数据
    userChannels: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      AllChannels: [] // 所有的频道
    }
  },
  computed: {
    // 推荐的频道列表
    recommendChannels () {
      // 思路：所有的频道-我的频道 = 剩下的频道
      // filter 方法：过滤数组，根据方法返回的布尔值true来收集
      // filter 根据回调函数，返回新的数组
      return this.AllChannels.filter(channel => {
        // 判断channel是否属于用户频道
        // 数组实例的find()方法,用于找出第一个符合条件的数组成员
        // 它的参数是一个回调函数,所有数组成员依次执行该回调函数
        // 直到找出第一个返回值为true的成员,然后返回该成员。
        // 如果没有符合条件的成员,则返回undefined。
        // userChannel就是形参
        return !this.userChannels.find(userChannel => {
          // 找到满足该条件的元素
          return userChannel.id === channel.id
        })
      })
    }
  },
  watch: {},
  created () {
    this.loadAllChanneles()
  },
  mounted () {},
  methods: {
    async loadAllChanneles () {
      const { data } = await GetAllChannels()
      // console.log(data)
      this.AllChannels = data.data.channels
    }
  }
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
