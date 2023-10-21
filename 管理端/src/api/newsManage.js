import request from '@/utils/request'

export function saveNews(data) {
  return request({
    url: '/news/saveNews',
    method: 'post',
    data
  })
}
export function updateNews(data) {
  return request({
    url: '/news/updateNews',
    method: 'post',
    data
  })
}
export function getNewsList(data) {
  return request({
    url: '/news/queryBy',
    method: 'post',
    data
  })
}
export function deleteNews(id) {
  return request({
    url: '/news/deleNews',
    method: 'get',
    params: { id: id }
  })
}
export function getInfoByid(id) {
  return request({
    url: '/news/findById',
    method: 'get',
    params: { id: id }
  })
}
