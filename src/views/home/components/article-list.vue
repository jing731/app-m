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
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  >
  <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
  </div>
</template>
<script>
export default {
  name: 'ArticleList',
  components: {},
  props: {
    // 子组件声明接收
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [], // 数据列表
      loading: false, // 控制加载中的loading状态
      finished: false
      // 控制加载结束的状态，当加载结束，不再触发加载更多
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // 1.请求获取数据
      setTimeout(() => {
        // 2.将数据放到list数组中
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 3.加载状态结束，设置本次加载状态结束，它才可以判断是否需要
        // 加载下一次，否则就会永远的停在这里
        this.loading = false
        // 4.数据全部加载完成
        if (this.list.length >= 40) {
          // 数据全部加载完成，不再触发加载更多
          this.finished = true
        }
      }, 1000)
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