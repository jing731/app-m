<template>
<!-- List 组件通过 loading 和 finished 两个变量控制加载状态
当组件初始化或滚动到到底部时，会触发 load 事件并将 loading 设置成 true，
此时可以发起异步操作并更新数据，数据更新完毕后，
将 loading 设置成 false 即可。 若数据已全部加载完毕，
则直接将 finished 设置成 true 即可。

load 事件：
List 初始化后会触发一次 load 事件，用于加载第一屏的数据。
如果一次请求加载的数据条数较少，导致列表内容无法铺满当前屏幕，
List 会继续触发 load 事件，直到内容铺满屏幕或数据全部加载完成。

loading 属性：控制加载中的 loading 状态
非加载中，loading 为 false，
此时会根据列表滚动位置判断是否触发 load 事件（列表内容不足一屏幕时，会直接触发）
加载中，loading 为 true，表示正在发送异步请求，此时不会触发 load 事件

finished 属性：控制加载结束的状态
在每次请求完毕后，需要手动将 loading 设置为 false，表示本次加载结束
所有数据加载结束，finished 为 true，此时不会触发 load 事件 -->
  <div class="article-list">
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isRefreshing"
    @refresh="onRefresh"
    :success-text="refreshSuccessText"
    success-duration='2000'
    >
    <!-- 内容区域 -->
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  >
  <!-- 使用，之前遍历的是文章列表，而现在如何遍历由子组件决定 -->
  <!-- 将文章列表项传给子组件 -->
  <!-- :article='article' -->
  <article-item
  v-for="(article, index) in articles"
  :key="index"
  :article='article'
  />
  <!-- <van-cell v-for="(article, index) in articles"
  :key="index"
  :title="article.title" /> -->
  </van-list>
  </van-pull-refresh>
  </div>
</template>
<script>
import { getArticles } from '@/api/articles'
// 加载子组件
import ArticleItem from '@/components/article-item'
export default {
  name: 'ArticleList',
  components: {
    // 注册子组件
    ArticleItem
  },
  props: {
    // 子组件声明接收
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      articles: [], // 数据列表
      loading: false, // 控制加载中的loading状态
      finished: false,
      // 控制加载结束的状态，当加载结束，不再触发加载更多
      timestamp: null, // 获取下一页的时间戳
      isRefreshing: false, // 下拉刷新的loading状态
      refreshSuccessText: '' // 下拉刷新的动态文本
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // 1.请求获取数据
      const { data } = await getArticles({
        // channel.id是ArticleList中的channel的id
        channel_id: this.channel.id, // 频道ID
        // 因为初始值为null，所以如果为null的时候，则使用Date.now()
        timestamp: this.timestamp || Date.now(), // 时间戳，请求新的推荐数据传当前的时间戳,
        // 请求历史推荐传指定的时间戳
        // timestamp 相当于页码，请求最新数据使用当前最新时间戳，
        // 下一页数据使用上一次返回的数据中的时间戳
        with_top: 1 // 是否包含置顶，进入页面第一次请求时要包含置顶文章
        // 1-包含置顶，0-不包含
      })
      // console.log(data)
      // console.log(data)
      // 2.将数据放到list数组中
      // 必须用push，防止覆盖之前的数据
      const { results } = data.data
      this.articles.push(...results)
      // 3.加载状态结束，设置本次加载状态结束，它才可以判断是否需要
      // 加载下一次，否则就会永远的停在这里
      this.loading = false
      // 4.数据全部加载完成
      if (results.length) {
      // 更新下一页数据
      // pre_timestamp为后台返回的下一页历史数据的时间戳
        this.timestamp = data.data.pre_timestamp
      } else {
      // 没有数据了，把加载状态设置为结束，不再触发加兹安更多
        this.finished = true
      }
      // setTimeout(() => {
      //   // 2.将数据放到list数组中
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1)
      //   }
      //   // 3.加载状态结束，设置本次加载状态结束，它才可以判断是否需要
      //   // 加载下一次，否则就会永远的停在这里
      //   this.loading = false
      //   // 4.数据全部加载完成
      //   if (this.list.length >= 40) {
      //     // 数据全部加载完成，不再触发加载更多
      //     this.finished = true
      //   }
      // }, 1000)
    },
    // 下拉刷新会触发此函数
    async onRefresh () {
      // console.log('pp')
      // 1，下拉刷新，请求数据
      const { data } = await getArticles({
        channel_id: this.channel.id, // 频道ID
        timestamp: Date.now(), // 只要是最新的时间戳，下拉刷新就会有新的数据
        with_top: 1
      })
      // 2,将数据往顶部追加
      const { results } = data.data
      this.articles.unshift(...results)
      // 3,关闭下拉刷新的状态
      this.isRefreshing = false
      // 下拉刷新的文本
      this.refreshSuccessText = `下拉刷新了${results.length}条数据`
    }
  }
}
</script>
<style scoped lang="less">
.article-list{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 90px;
  overflow-y: auto;
}
</style>
