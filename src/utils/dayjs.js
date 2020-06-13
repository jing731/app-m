// import Vue from 'vue'
// import dayjs from 'dayjs'
// import 'dayjs/locale/zh-cn'
// import relativeTime from 'dayjs/plugin/relativeTime'
// // 使用vue的过滤处理时间
// // 配置使用处理相对时间
// dayjs.extend(relativeTime)
// // // 配置使用中文语言包
// dayjs.locale('zh-cn')
// 示例
// console.log(dayjs('2019-01-09').from(dayjs()))
// 把处理相对时间的代码包装为全局过滤器

// 在组件中使用过滤器的方法：{{ XXX | relativeTime }}
// 管道符前面的内容会做为参数传递给过滤器函数
// 过滤器的返回值会渲染到使用过滤器的模板中
// relativeTime 为过滤器的名字
// Vue.filter('relativeTime', value => {
//   return dayjs(value).from(dayjs())
// })
