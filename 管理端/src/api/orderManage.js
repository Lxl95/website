import request from '@/utils/request'

// 工单管理-外派工单列表
export function getwfrecord(data) {
  return request({
    url: '/api/smartwater/cti/workorder/getwfrecord',
    method: 'get',
    params: data
  })
}
// 工单管理-简易工单列表
export function getsimpleorder(data) {
  return request({
    url: 'cloud-cti/cti/workorder/list',
    method: 'get',
    params: data
  })
}
// 工单管理-修改工单
export function modifyorder(data) {
  return request({
    url: '/api/smartwater/cti/workorder/modifyorder',
    method: 'post',
    data
  })
}
// 工单管理-完成
export function updatestatus(data) {
  return request({
    url: '/api/smartwater/cti/workorder/updatestatus',
    method: 'post',
    data
  })
}
// 工单管理-办结
export function complete(data) {
  return request({
    url: '/api/smartwater/cti/workorder/complete',
    method: 'post',
    data
  })
}
// 工单管理-催办
export function arge(data) {
  return request({
    url: '/api/smartwater/cti/worktime/arge',
    method: 'post',
    data
  })
}
