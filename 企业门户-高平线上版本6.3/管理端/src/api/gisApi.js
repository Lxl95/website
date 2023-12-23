import request from '@/utils/requestGis'

// 来电弹屏分派工单需要调gis接口
export function CreateOrder(data) {
  return request({
    url: '/PublicWebApi/WorkOrder/CreateOrder',
    method: 'post',
    data
  })
}

// 工单-办理内容接口
export function GetOrderDetail(data) {
  return request({
    url: '/PublicWebApi/WorkOrder/GetOrderDetail',
    method: 'post',
    data
  })
}

// 工单-完成
export function Terminate(data) {
  return request({
    url: '/PublicWebApi/WorkOrder/Terminate',
    method: 'post',
    data
  })
}
// 工单-催办
export function Urge(data) {
  return request({
    url: '/PublicWebApi/WorkOrder/Urge',
    method: 'post',
    data
  })
}

