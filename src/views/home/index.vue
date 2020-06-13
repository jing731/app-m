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
    <van-tabs v-model="active" class="channel-tabs">
    <van-tab
    class="tab-item"
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
      <!-- 汉堡按钮定位把列表最后的位置给挡住了，解决办法就是在这个
      添加一个占位符 -->
      <div slot="nav-right" class="wap-nav-placeholder"></div>
      <div slot="nav-right"
      @click="isChannelEditShow = true"
      class="wap-nav-wrap"
      >
        <van-icon name="wap-nav"/>
      </div>
    </van-tabs>
    <!-- 标签页滚动结束 -->
    <!-- 弹出层 -->
    <!-- 因为弹出层不属于任何元素的孩子 -->
    <!-- get-container="body" -->
    <van-popup
    v-model="isChannelEditShow"
    close-icon-position="top-left"
    get-container="body"
    position="bottom"
    closeable
    style="height: 100%"
    ><channel-edit /></van-popup>
    <!-- 注意：由于弹出层的内容及逻辑过多，为了后期维护方便，所以
    将弹出层的内容与逻辑单独封装到一个组件
    封装到单独一个组件的作用：一，重用，二，逻辑过多，为了后期维护方便 -->
    <!-- 弹出层结束 -->
  </div>
</template>
<script>
import { GetChannerls } from '@/api/user'
// 加载子组件
import ChannelEdit from './components/channel-edit'
// 加载子组件
import ArticleList from './components/article-list'
export default {
  name: 'HomeIndex',
  components: {
    // 注册子组件
    ArticleList,
    ChannelEdit
  },
  props: {},
  data () {
    return {
      active: 2,
      loadChanneles: [], // 列表频道的数据
      isChannelEditShow: false
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
// flex-shrink 表示子项不参与其他子项的分配位置
.wap-nav-placeholder{
  width: 33px;
  flex-shrink: 0;
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
 .channel-tabs{
   /deep/ .van-tab{
     border-right: 1px solid #edeff3;
     border-bottom: 1px solid #edeff3;
   }
 }
 /deep/ .van-tabs__line{
   bottom: 20px;
   width: 15px !important;
   height: 3px;
   background: #3296fa;
 }
 .wap-nav-wrap{
   position: fixed;
   right: 0;
   width: 33px;
   height: 43px;
   background-color: #ffffff;
   display: flex;
   justify-content: center;
   align-content: center;
   opacity: .9;
   .van-icon{
     font-size: 24px;
   }
   &:before{
     content: '';
     width: 1px;
     height: 43px;
     background: url('') no-repeat;
     background-size: contain;
     position: absolute;
     left: 0;
     top: 0;
   }
 }
}
</style>
