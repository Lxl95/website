import request from '@/utils/request'

// 获取坐席列表
export function getadmin(data) {
  return request({
    url: '/cloud-cti/cti/calladmin/list',
    method: 'get',
    params: data
  })
}
// 根据id获取坐席
export function getadmininfo(data) {
  return request({
    url: '/cloud-cti/cti/calladmin/info/' + data,
    method: 'get'
  })
}
// 添加坐席
export function addadmin(data) {
  return request({
    url: '/cloud-cti/cti/calladmin/add',
    method: 'post',
    data
  })
}
// 解绑坐席
export function unbunding(id) {
  return request({
    url:'/cloud-cti/cti/calladmin/delete/' + id,
    method: 'post'
  })
}
// 坐席登陆日志
export function getsiteLogininfo(data) {
  return request({
    url:  '/cloud-cti/cti/sitestateinfo/list',
    method: 'get',
    params: data
  })
}

// 队列监控
export function getqueuemointorinfo(data) {
  return request({
    url: '/cloud-cti/cti/queuestateinfo/list',
    method: 'get',
    params: data
  })
}
// 坐席监控
export function getsitemointorinfo(data) {
  return request({
    url: '/cloud-cti/cti/calllinfconfig/list',
    method: 'get',
    params: data
  })
}
// 分机号配置列表
export function getextensionconfiglist(data) {
  return request({
    url: '/api/smartwater/cti/call/callrecord/getextensionconfiglist',
    method: 'get',
    params: data
  })
}
// 添加配置分机号
export function addextensionconfig(data) {
  return request({
    url: '/api/smartwater/cti/call/callrecord/addextensionconfig',
    method: 'post',
    data
  })
}
// 删除配置分机号
export function delextensionconfig(data) {
  return request({
    url: '/api/smartwater/cti/call/callrecord/delextensionconfig',
    method: 'post',
    data
  })
}
