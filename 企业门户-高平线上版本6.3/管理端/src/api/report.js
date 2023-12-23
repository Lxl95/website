import request from '@/utils/request'

// 月报表
export function dermonthreport1(data) {
  return request({
      url: 'api/smartwater/cti/report/ordermonthreport1',
      method: 'get',
      params: data
  })
}
export function dayReportTable(data) {
    return request({
        url: '/api/smartwater/cti/report/orderdayreport',
        method: 'get',
        params: data
    })
}
export function yearReportTable(data) {
    return request({
        url: '/api/smartwater/cti/report/orderyearreport',
        method: 'get',
        params: data
    })
}
export function monthtotalReportTable(data) {
    return request({
        url: '/api/smartwater/cti/report/monthtotal',
        method: 'get',
        params: data
    })
}
export function functiontotalReportTable(data) {
    return request({
        url: '/api/smartwater/cti/report/functiontotal',
        method: 'get',
        params: data
    })
}
export function weektotalReportTable(data) {
    return request({
        url: '/api/smartwater/cti/report/weektotal',
        method: 'get',
        params: data
    })
}
export function yeartotalReportTable(data) {
    return request({
        url: '/api/smartwater/cti/report/yeartotal',
        method: 'get',
        params: data
    })
}
export function sourcetotal(data) {
    return request({
        url: '/api/smartwater/cti/report/workeventsourcetotal',
        method: 'get',
        params: data
    })
}
export function ivrcounttotal(data) {
    return request({
        url: '/api/smartwater/cti/report/ivrcounttotal',
        method: 'get',
        params: data
    })
}
export function losetotal(data) {
    return request({
        url: '/api/smartwater/cti/report/siteanswerlosetotal',
        method: 'get',
        params: data
    })
}
// 坐席列表
export function clerklist(data) {
    return request({
        url: '/api/smartwater/cti/report/getseatclerklist',
        method: 'get',
        params: data
    })
}
export function monthcalllist(data) {
    return request({
        url: '/api/smartwater/cti/report/getmonthlycalllist',
        method: 'get',
        params: data
    })
}
export function yearcalllist(data) {
    return request({
        url: '/api/smartwater/cti/report/getseatworklist',
        method: 'get',
        params: data
    })
}
export function workorderttotal(data) {
    return request({
        url: '/api/smartwater/cti/report/getworkorderttotal',
        method: 'get',
        params: data
    })
}
