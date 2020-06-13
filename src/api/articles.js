import request from '@/utils/request'
// 获取文章列表  Query参数
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params
  })
}
