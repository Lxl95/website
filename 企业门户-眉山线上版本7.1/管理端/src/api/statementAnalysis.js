import request from '@/utils/request'

// /api/smartwater/cti/report/getivrinfo
export function getivrinfo(data) {
  return request({
    url: '/api/smartwater/cti/report/getivrinfo',
    method: 'get',
    params: data
  })
}
