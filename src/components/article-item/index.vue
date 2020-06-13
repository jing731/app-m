<template>
  <div class="article-item">
    <van-cell class="article-item">
      <!-- 注意标题太长的时候，需要将部分标题省略 -->
      <!-- van-multi-ellipsis--l3 为自带的内部样式 -->
      <div slot="title" class="title van-multi-ellipsis--l3">{{ article.title }}</div>
      <div slot="label">
        <div
        v-if="article.cover.type === 3"
        class="cover-wrap"
        >
          <div
          class="cover-warp-item"
          v-for="(img, index) in article.cover.images"
          :key="index"
          >
            <van-image
            class="cover-item"
            fit='cover'
            :src="img" />
          </div>
        </div>
        <div class="label-warp">
          <span>{{ article.aut_name }}</span>
          <span>{{ article.comm_count }}</span>
          <span>{{ article.pubdate }}</span>
        </div>
      </div>
      <van-image v-if="article.cover.type === 1"
      class="right-cover"
      :src="article.cover.images[0]" />
    </van-cell>
  </div>
</template>
<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
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
.article-item{
  .title{
    font-size: 16px;
    color: #3a3a3a;
  }
  .right-cover{
    width: 116px;
    height: 73px;
  }
//   去除右侧的图片的flex：1，平均分不好看
  /deep/ .van-cell_value{
    flex: unset;
    width: 116px;
    height: 116px;
    margin-left: 12px;
  }
  .cover-wrap{
    padding: 15px 0;
    // 父容器flex布局
    display: flex;
    .cover-warp-item{
     // 子容器各占一份
      flex: 1;
      height: 73px;
      // 给图片添加一些边距
      // & 就是父元素 即cover-warp-item
      &:not(:last-child){
        padding-right: 4px;
      }
      .cover-item{
        width: 100%;
        height: 73px;
      }
    }
  }
  .label-wrap {
    font-size: 11px;
    color: #b4b4b4;
  }
  .label-warp span {
    margin-right: 12px;
  }
}
</style>
