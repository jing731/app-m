import request from '@/utils/request'
// 在容器中使用store
// import store from '@/store/'
// 登录信息请求   body参数
export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
// 发送验证码信息请求  路径参数
export const OnSendSms = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
// 获取当前用户信息请求  没有参数
export const GetCurrentUser = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
    // headers: {
    //   Authorization: `Bearer ${store.state.user.token}`
    // }
  })
}
// 请求文章列表数据
export const GetChannerls = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
