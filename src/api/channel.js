import request from '@/utils/request'
// 获取所有的频道列表
// 没有参数
export const GetAllChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/channels'
  })
}
