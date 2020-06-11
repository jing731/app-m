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
<van-form
:show-error = 'false'
:show-error-message = 'false'
 validate-first
@submit="Onlogin"
@failed="OnFailed"
>
  <van-field
    v-model="user.mobile"
    left-icon="smile-o"
    placeholder="请输入手机号"
    :rules="FromRules.mobile"
  />
  <van-field
    v-model="user.code"
    clearable
    left-icon="music-o"
    placeholder="请输入验证码"
    :rules="FromRules.code"
  >
    <template #button>
    <van-button size="small" round>发送验证码</van-button>
  </template>
  </van-field>
  <!-- 登录start -->
<div class="van-btn">
  <van-button type="info" block class="van-btn-n">登录</van-button>
</div>
<!-- 登录end -->
</van-form>
<!-- 输入框end -->
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
      },
      FromRules: {
        mobile: [
          {
            required: true, message: '请填写用户名'
          },
          {
            pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的手机号'
          }
        ],
        code: [
          {
            required: true, message: '请填写用户名'
          },
          {
            pattern: /^\d{6}$/, message: '请输入正确的手机号'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async Onlogin () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true, // 为true时，会默认不可点击屏幕
        duration: 0 // 加载时长，为0时会一直加载
      })
      try {
        const res = await login(this.user)
        console.log(res)
        this.$toast.success('登录成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败')
      }
    },
    OnFailed (error) { // 函数的参数 就是错误的类型
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
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
