<template>
  <div class="home-container">
    <!-- 头部部分开始 -->
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
    <!-- 头部部分结束 -->
    <!-- 标签页滚动 -->
    <van-tabs v-model="active">
    <van-tab
    :title="channel.name"
    v-for="channel in loadChanneles"
    :key="channel.id"
    >
    <!-- 文章列表 -->
    <!-- 使用组件 -->
    <!-- <article-list /> -->
    <!-- 将当前的组件传递给文章列表，遍历文章列表 -->
    <article-list :channel='channel'/>
    <!-- 文章列表 -->
      </van-tab>
    </van-tabs>
    <!-- 标签页滚动结束 -->
  </div>
</template>
<script>
import { GetChannerls } from '@/api/user'
// 加载子组件
import ArticleList from './components/article-list'
export default {
  name: 'HomeIndex',
  components: {
    // 注册子组件
    ArticleList
  },
  props: {},
  data () {
    return {
      active: 2,
      loadChanneles: [] // 列表频道的数据
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      // 加载请求文章列表数据
      const loadChannelsRes = await GetChannerls()
      console.log(loadChannelsRes)
      this.loadChanneles = loadChannelsRes.data.data.channels
    }
  }
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
