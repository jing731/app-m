import axios from 'axios'
import store from '@/store/'
// 在拦截器里面提供token
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})
// 请求拦截器
request.interceptors.request.use(function (config) {
  // config参数就是请求的对象
  // console.log(123)
  // console.log(config)
  // console.log(store.state)
  const { user } = store.state
  // 如果用户登录，才会有token数据
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
export default request
