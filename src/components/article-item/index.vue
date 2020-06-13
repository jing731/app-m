<template>
  <div class="article-item">
    <van-cell class="article-item">
      <div slot="title">{{ article.title }}</div>
      <div slot="label">
        <div
        v-if="article.cover.type === 3"
        class="cover-wrap">
          <div class="cover-warp-item">
            <van-image
            width="116"
            height="73"
            :v-for="(img,index) in article.cover.images"
            :key="index"
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
      width="116"
      height="73"
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
