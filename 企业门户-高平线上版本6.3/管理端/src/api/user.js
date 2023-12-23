import request from '@/utils/requestyth'

export function login(data) {
  return request({
    url: '/Authority_Api/api/SmartWater/WaterManage/SystemMoule/Account/login',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/api/SystemMoule/PSysUser/GetUserMeau',
    method: 'get',
    params: data
  })
}

export function updataPwd(data) {
  return request({
    url: '/Authority_Api/api/SmartWater/WaterManage/SystemMoule/PSysUser/UpdatePwd',
    method: 'post',
    data
  })
}

// 更新头像
export function updateCompanyLogo(data) {
  return request({
    url: '/user/updateCompanyLogo',
    method: 'post',
    data
  })
}

export function logout(token) {
  return request({
    url: '/Authority_Api/api/SmartWater/WaterManage/SystemMoule/Account/LoginOut',
    method: 'get',
    params: { token: token, loginMark:'' }
  })
}
