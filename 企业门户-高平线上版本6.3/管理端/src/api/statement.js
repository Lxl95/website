import request from '@/utils/request'

// 日通话统计
export function DailyCallStatistics(data) {
  return request({
      url: '/api/smartwater/cti/report/getdailycalllist',
      method: 'get',
      params: data
  })
}

// 坐席人员列表
export function GetSeatClerkList(data) {
  return request({
      url: '/api/smartwater/cti/report/getseatclerklist',
      method: 'get',
      params: data
  })
}

// 话务工单汇总
export function GetEventTotal(data) {
  return request({
    url: '/api/smartwater/cti/report/geteventtotal',
    method: 'get',
    params: data
  })
}

