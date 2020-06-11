<template>
  <div class="my-container">
  <!-- 头部部分 -->
  <van-cell-group class="my-info">
  <van-cell class="base-info" title="单元格" value="内容" center :border='false'>
  <van-image
  class="avatar"
  slot="icon"
  width="30" height="30" round fit='cover' src="https://img.yzcdn.cn/vant/cat.jpeg" />
  <div slot="title" class="name">昵称</div>
  <van-button size='small' round class="updata-btn">编辑资料</van-button>
  </van-cell>
  </van-cell-group>
  <!-- 头部结尾 -->
  <!-- 中间部分 -->
  <van-grid class="data-info" :border='false'>
  <van-grid-item class="data-info-item"><div slot="text">
    <div class="count">123</div>
    <div class="text">头条</div>
    </div></van-grid-item>
  <van-grid-item><div slot="text">
    <div class="count">123</div>
    <div class="text">关注</div>
    </div></van-grid-item>
  <van-grid-item><div slot="text">
    <div class="count">123</div>
    <div class="text">粉丝</div>
    </div></van-grid-item>
  <van-grid-item><div slot="text">
    <div class="count">123</div>
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
<style scoped lang="less">
.my-container {
  .my-info{
    background: url('./banner.png') no-repeat;
    background-size: cover;
    .base-info{
      box-sizing: border-box;
      background-color: unset;
      height: 115px;
      padding-top: 38px;
      padding-bottom: 11px;
      .avatar {
        box-sizing: border-box;
        width: 66px;
        height: 66px;
        border: 1px solid #ffffff;
        margin-right: 11px;
      }
      .name {
        font-size: 15px;
        color: #ffffff;
      }
      .updata-btn {
        height: 16px;
      }
    }
    .data-info {
      .data-info-item {
        height: 65px;
        color: #ffffff;
        .count {
          font-size: 18px;
        }
        .text {
          font-size: 11px;
        }
      }
    }
    /deep/ .van-grid-item_content {
      background-color: unset;
    }
 }
}
</style>
