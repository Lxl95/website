import request from '@/utils/request'

// 信息栏-交接班
export function getreceiveworkdoing(data) {
  return request({
    url: '/api/smartwater/cti/knowledge/getreceiveworkdoing',
    method: 'get',
    params: data
  })
}
