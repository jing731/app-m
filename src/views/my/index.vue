<template>
  <div class="my-container">
  <!-- 头部部分 -->
  <van-cell-group class="my-info" v-if="user">
  <van-cell class="base-info" center :border='false'>
  <van-image
  class="avatar"
  slot="icon"
  width="30" height="30" round fit='cover' :src="CurrentUser.photo"/>
  <div slot="title" class="name">{{ CurrentUser.name }}</div>
  <van-button size='small' round class="updata-btn">编辑资料</van-button>
  </van-cell>
  </van-cell-group>
  <!-- 头部结尾 -->
  <!-- 未登录部分 -->
  <div class="not-login" v-else>
    <div>
      <img @click="$router.push('/my')" src="./banner.png" class="mobile">
    </div>
    <div class="text">登录/注册</div>
  </div>
  <!-- 未登录部分结尾 -->
  <!-- 中间部分 -->
  <van-grid class="data-info" :border='false'>
  <van-grid-item class="data-info-item"><div slot="text">
    <div class="count">{{ CurrentUser.art_count }}</div>
    <div class="text">头条</div>
    </div></van-grid-item>
  <van-grid-item><div slot="text">
    <div class="count">{{ CurrentUser.follow_count }}</div>
    <div class="text">关注</div>
    </div></van-grid-item>
  <van-grid-item><div slot="text">
    <div class="count">{{ CurrentUser.fans_count }}</div>
    <div class="text">粉丝</div>
    </div></van-grid-item>
  <van-grid-item><div slot="text">
    <div class="count">{{ CurrentUser.like_count }}</div>
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
  <!-- 如果用户有效，则是登录状态 -->
  <van-cell
  @click="OutLogin"
  v-if="user"
  title="退出登录" />
  <!-- 退出登录结束 -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { GetCurrentUser } from '@/api/user'
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {
      CurrentUser: {}
    }
  },
  computed: {
    // 将容器中的数据映射到本地
    ...mapState(['user'])
  },
  watch: {},
  created () {
    this.OnCurrentUser()
  },
  mounted () {},
  methods: {
    async OnCurrentUser () {
      const { data } = await GetCurrentUser()
      // console.log(data)
      this.CurrentUser = data.data
    },
    // 点击之后弹出弹框，询问是否需要退出？
    OutLogin () {
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认退出吗'
      })
        .then(() => {
        // 成功 将容器中token数据清空
          this.$store.commit('setUser', null)
        })
        .catch(() => {
        // 失败
          this.$store.commit('setUser', null)
        })
    }
  }
}
/*
   组件的样式作用域
   一个组件的样式是有作用域的，
   如果你没有声明作用域，则组建的样式是全局
   如果希望当前的组件样式不影响别的组件，我们可以添加组件作用域
   如何添加？
   在style 中添加scoped属性 如：<style scoped>

   问题：
   在有作用域的组件中如何给子组件设置样式？
   默认只能作用到子组件的根节点
    使用子组件根节点本身的class类名
    如果使用的是第三方，则不知道第三方的根节点的class类名，
    那只能审查元素查看，或者自己添加一个类名
      建议使用自己的类名

      /deep/   深度作用操作符
      >>> 的作用与 /deep/ 的作用是一样的
*/
</script>
<style scoped lang="less">
.my-container {
  .not-login{
    height: 180px;
    background: url('./banner.png') no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    .mobile{
      width: 66px;
      height: 66px;
    }
  }
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
