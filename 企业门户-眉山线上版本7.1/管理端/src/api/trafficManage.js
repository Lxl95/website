import request from '@/utils/request'

// 来电弹屏-工单信息
export function getwfrecordnew(data) {
  return request({
    url: '/cloud-cti/cti/workorder/list',
    method: 'get',
    params: data
  })
}

// 来电弹屏-登记
export function regwfinfo(data) {
  return request({
    url: '/cloud-cti/cti/workorder/add',
    method: 'post',
    data
  })
}

// 来电弹屏-重发工单后派单 （调用gis接口创建工单成功后调用此接口）
export function sendworkorder(data) {
  return request({
    url: '/api/smartwater/cti/workorder/sendworkorder',
    method: 'post',
    params: data
  })
}

// 来电弹屏-通话记录
export function gethiscallrecord(data) {
  return request({
    url: '/cloud-cti/cti/callrecord/list',
    method: 'get',
    params: data
  })
}

// 来电弹屏-查询号码归属地
export function getPhonePlace(phone, data) {
  return request({
    url: '/cloud-cti/cti/areacodeinfo/info/' + phone,
    method: 'get',
    params: data
  })
}

// 来电弹屏-查询号码归属地
export function addSiteLog(data) {
  return request({
    url: '/cloud-cti/cti/sitestateinfo/add',
    method: 'post',
    data
  })
}

// 获取备忘录列表
export function getworknotelist(data) {
  return request({
    url: '/cloud-cti/cti/worknote/list',
    method: 'get',
    params: data
  })
}

// 备忘录添加
export function addworknote(data) {
  return request({
    url: '/cloud-cti/cti/worknote/add',
    method: 'post',
    data
  })
}

// 备忘录修改
export function editworknote(data) {
  return request({
    url: '/cloud-cti/cti/worknote/edit',
    method: 'post',
    data
  })
}

// 备忘录删除
export function delworknote(data) {
  return request({
    url: '/cloud-cti/cti/worknote/delete/' + data,
    method: 'post'
  })
}

// 短信列表
export function getmessagelist(data) {
  return request({
    url: '/cloud-cti/cti/message/list',
    method: 'get',
    params: data
  })
}

// 添加短信
export function addmessage(data) {
  return request({
    url: '/cloud-cti/cti/message/add',
    method: 'post',
    data
  })
}

// 删除短信
export function delmessage(data) {
  return request({
    url: '/cloud-cti/cti/message/delete/' + data,
    method: 'post'
  })
}

// 号码归属地列表
export function gettelareacodeinfo(data) {
  return request({
    url: '/cloud-cti/cti/areacodeinfo/list',
    method: 'get',
    params: data
  })
}

// 黑名单列表
export function getblacklist(data) {
  return request({
    url: '/cloud-cti/cti/blacklist/list',
    method: 'get',
    params: data
  })
}

// 添加黑名单
export function addblack(data) {
  return request({
    url: '/cloud-cti/cti/blacklist/add',
    method: 'post',
    data
  })
}

// 编辑黑名单
export function editblack(data) {
  return request({
    url: '/cloud-cti/cti/blacklist/edit',
    method: 'post',
    data
  })
}

// 删除黑名单
export function delblack(data) {
  return request({
    url: '/cloud-cti/cti/blacklist/delete',
    method: 'post',
    data
  })
}

// 语音留言列表
export function gettelmessageinfo(data) {
  return request({
    url: '/api/smartwater/cti/call/callrecord/gettelmessageinfo',
    method: 'get',
    params: data
  })
}

// 语音留言处理
export function edittelmessageinfo(data) {
  return request({
    url: '/api/smartwater/cti/call/callrecord/edittelmessageinfo',
    method: 'post',
    data
  })
}

// 查询分机号
export function getExtenList(data) {
  return request({
    url: '/cloud-cti/cti/extension/list',
    method: 'get',
    params: data
  })
}
