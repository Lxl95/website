import request from '@/utils/request'

// 值班管理-交接班查询
export function getfloatinglist(data) {
  return request({
    url: '/api/smartwater/cti/worktime/getfloatinglist',
    method: 'get',
    params: data
  })
}
// 值班管理-排版列表
export function getworkinglist(data) {
  return request({
    url: '/api/smartwater/cti/worktime/getworkinglist',
    method: 'get',
    params: data
  })
}
// 值班管理-读取班次列表
export function getworktimeInfo(data) {
  return request({
    url: '/api/smartwater/cti/worktime/getworktimeInfo',
    method: 'get',
    params: data
  })
}
// 值班管理-排版
export function scheduling(data) {
  return request({
    url: '/api/smartwater/cti/worktime/scheduling',
    method: 'post',
    data
  })
}
// 值班管理-排版详情
export function getfloatingdetaillist(data) {
  return request({
    url: '/api/smartwater/cti/worktime/getfloatingdetaillist',
    method: 'get',
    params: data
  })
}
// 值班管理-排版签到
export function signin(data) {
  return request({
    url: '/api/smartwater/cti/worktime/signin',
    method: 'post',
    data
  })
}
// 值班管理-交接班内容
export function givereceiveinfo(data) {
  return request({
    url: '/api/smartwater/cti/worktime/givereceiveinfo',
    method: 'get',
    params: data
  })
}
// 值班管理-交接班
export function receive(data) {
  return request({
    url: '/api/smartwater/cti/worktime/receive',
    method: 'post',
    data
  })
}
// 值班管理-获取班组下用户信息
export function getadmin(data) {
  return request({
    url: '/api/smartwater/cti/worktime/getadmin',
    method: 'get',
    params: data
  })
}
// 值班管理-交接班颜色
export function getcolors(data) {
  return request({
    url: '/api/smartwater/cti/worktime/getcolors',
    method: 'post',
    data
  })
}
// 值班管理-获取当前坐席每天排班情况
export function judgesigninnotice(data) {
  return request({
    url: '/api/smartwater/cti/worktime/judgesigninnotice',
    method: 'post',
    data
  })
}
// 值班管理-获取取当前坐席每天排班情况
export function working(data) {
  return request({
    url: '/api/smartwater/cti/worktime/working',
    method: 'post',
    data
  })
}
// 值班管理-班组列表
export function getworkgrouplist(data) {
  return request({
    url: '/api/smartwater/cti/worktime/getworkgrouplist',
    method: 'get',
    params: data
  })
}
// 值班管理-添加班组
export function addworkgroup(data) {
  return request({
    url: '/api/smartwater/cti/worktime/addworkgroup',
    method: 'post',
    data
  })
}
// 值班管理-修改班组
export function modifyworkgroup(data) {
  return request({
    url: '/api/smartwater/cti/worktime/modifyworkgroup',
    method: 'post',
    data
  })
}
// 值班管理-删除班组
export function deletegroup(data) {
  return request({
    url: '/api/smartwater/cti/worktime/deletegroup',
    method: 'post',
    data
  })
}

// 值班管理-班次管理列表
export function GetWorkTimeInfo(data) {
  return request({
    url: '/api/smartwater/cti/worktime/getworktimeinfo',
    method: 'get',
    params: data
  })
}
