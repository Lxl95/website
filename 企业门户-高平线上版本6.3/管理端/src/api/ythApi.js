import request from '@/utils/requestyth'

// 账户管理-树形图
export function getDeptListTree(data) {
  return request({
    url: '/api/SystemMoule/ODept/GetDeptListTree',
    method: 'get',
    params: data
  })
}
// 账户管理-用户信息
export function getUserPageList(data) {
  return request({
    url: '/api/SystemMoule/PSysUser/PSysUserPageList',
    method: 'get',
    params: data
  })
}
