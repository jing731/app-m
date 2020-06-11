<template>
    <div class="login-container">
      <!-- 登录start -->
      <van-nav-bar
      class="app-nav-bar"
      title="登录"
      left-arrow
      @click-left="$router.back()"
     />
     <!-- 登录end -->
     <!-- 输入框start -->
<van-cell-group>
  <van-field
    v-model="user.mobile"
    left-icon="smile-o"
    placeholder="请输入手机号"
  />
  <van-field
    v-model="user.code"
    clearable
    left-icon="music-o"
    placeholder="请输入验证码"
  >
    <template #button>
    <van-button size="small" round>发送验证码</van-button>
  </template>
  </van-field>
</van-cell-group>
<!-- 输入框end -->
<!-- 登录start -->
<div class="van-btn">
  <van-button type="info" block class="van-btn-n" @click="Onlogin">登录</van-button>
</div>
<!-- 登录end -->
    </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async Onlogin () {
      try {
        const res = await login(this.user)
        console.log(res)
      } catch (err) {
        console.log(err)
        console.log('登录错误')
      }
    }
  }
}
</script>
<style scoped lang="less">
.van-btn{
  padding: 16px 26px;
  .van-btn-n{
    color: #ffffff;
    border: none;
  }
}
</style>
