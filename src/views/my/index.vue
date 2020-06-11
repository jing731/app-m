<template>
  <div class="my-container">
  <!-- 头部部分 -->
  <van-cell-group>
  <van-cell title="单元格" value="内容" center>
  <van-image
  slot="icon"
  width="30" height="30" round fit='cover' src="https://img.yzcdn.cn/vant/cat.jpeg" />
  <div slot="title">昵称</div>
  <van-button size='small' round>编辑资料</van-button>
  </van-cell>
  </van-cell-group>
  <!-- 头部结尾 -->
  <!-- 中间部分 -->
  <van-grid>
  <van-grid-item><div slot="text">
    <div class="span">123</div>
    <div class="text">头条</div>
    </div></van-grid-item>
  <van-grid-item><div slot="text">
    <div class="span">123</div>
    <div class="text">关注</div>
    </div></van-grid-item>
  <van-grid-item><div slot="text">
    <div class="span">123</div>
    <div class="text">粉丝</div>
    </div></van-grid-item>
  <van-grid-item><div slot="text">
    <div class="span">123</div>
    <div class="text">获赞</div>
    </div></van-grid-item>
  </van-grid>
  <!-- 中间结尾 -->
  <!-- 结尾部分 -->
  <van-grid :column-num="2">
  <van-grid-item icon="star-o" text="文字" />
  <van-grid-item icon="browsing-history-o" text="文字" />
 </van-grid>
  <!-- 结尾部分结束 -->
  <!-- 退出登录开始 -->
  <van-cell title="消息通知" is-link to="/" />
  <van-cell title="小智同学" is-link to="/" />
  <van-cell title="退出登录" />
  <!-- 退出登录结束 -->
  </div>
</template>
<script>
export default {
  name: 'MyIndex',
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
