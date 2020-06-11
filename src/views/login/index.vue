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
 ref="login-form"
@submit="Onlogin"
@failed="OnFailed"
>
  <van-field
    v-model="user.mobile"
    left-icon="smile-o"
    placeholder="请输入手机号"
    center
    name='mobile'
    :rules="FromRules.mobile"
  />
  <van-field
    v-model="user.code"
    clearable
    left-icon="music-o"
    center
    placeholder="请输入验证码"
    name='code'
    :rules="FromRules.code"
  >
    <template #button>
    <van-count-down :time="1000 * 5" format="ss s" v-if="isTimeShow" @finish="isTimeShow = false" />
    <van-button size="small" round @click.prevent="OnSendSms" v-else :loading='isSmsLoading'>发送验证码</van-button>
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
import { login, OnSendSms } from '@/api/user'
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
      },
      isTimeShow: false, // 默认倒计时不会显示
      isSmsLoading: false // 控制发送按钮的loading状态
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
        this.$toast.success('登录成功')
        // 将后端返回的用户登录状态（token等数据）存储在vuex容器中
        this.$store.commit('setUser', res.data.data)
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
    },
    async OnSendSms () { // 发送验证码
      // 由于点击发送验证码按钮，会默认触发验证行为，所以采用单独验证的功能
      try {
        const validateres = await this.$refs['login-form'].validate('mobile')
        console.log(validateres)
        // 验证通过，请求发送验证码
        this.isSmsLoading = true
        const Smsres = await OnSendSms(this.user.mobile)
        // 发送验证码成功后，启动倒计时
        this.isTimeShow = true
        console.log(Smsres)
      } catch (error) {
        let message = ''
        if (error && error.request && error.request.status === 429) {
          message = '发送太频繁了，请稍后再试'
        } else if (error.name === 'mobile') {
          message = error.message
        } else {
          message = '发送失败，请稍后再试'
        }
        this.$toast({
          message,
          position: 'top'
        })
      }
      // 无论发送成功还是失败，都关闭loading
      this.isSmsLoading = false
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
