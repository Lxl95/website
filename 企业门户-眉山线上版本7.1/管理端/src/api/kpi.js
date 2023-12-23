import request from '@/utils/request'

// 考核指标列表
export function GetZhiBiaoList(data) {
  return request({
      url: '/api/smartwater/cti/worktime/getzhibiaolist',
      method: 'get',
      params: data
  })
}
// 添加指标
export function AddZhiBiao(data) {
  return request({
      url: '/api/smartwater/cti/worktime/addzhibiao',
      method: 'post',
      params: data
  })
}

// 修改指标
export function EditZhiBiao(data) {
  return request({
      url: '/api/smartwater/cti/worktime/editzhibiao',
      method: 'post',
      params: data
  })
}

// 删除指标
export function DeleteZhiBiao(data) {
  return request({
      url: '/api/smartwater/cti/worktime/deletezhibiao',
      method: 'post',
      params: data
  })
}

// 总分排名
export function ScoreRanking(data) {
  return request({
      url: '/api/smartwater/cti/worktime/getscoreranking',
      method: 'get',
      params: data
  })
}

// 考核成绩列表
export function GetScoreList(data) {
  return request({
      url: '/api/smartwater/cti/worktime/getscorelist',
      method: 'get',
      params: data
  })
}

// 添加考核成绩
export function AddChengJi(data) {
  return request({
      url: '/api/smartwater/cti/worktime/addchengji',
      method: 'post',
      params: data
  })
}

// 修改考核成绩
export function EditChengJi(data) {
  return request({
      url: '/api/smartwater/cti/worktime/modifychengji',
      method: 'post',
      params: data
  })
}

// 删除考核成绩
export function DeleteChengJi(data) {
  return request({
      url: '/api/smartwater/cti/worktime/deletechengji',
      method: 'post',
      params: data
  })
}

// 考核标准配置列表
export function GetPeiZhiList(data) {
  return request({
      url: '/api/smartwater/cti/worktime/getpeizhilist',
      method: 'get',
      params: data
  })
}

// 考核标准配置详情列表
export function GetBiaoZhunDetailList(data) {
  return request({
      url: '/api/smartwater/cti/worktime/getbiaozhundetaillist',
      method: 'get',
      params: data
  })
}

// 满意度设置
export function ManYiDu(data) {
  return request({
      url: '/api/smartwater/cti/worktime/manyidu',
      method: 'post',
      params: data
  })
}
// 接单量设置
export function JieDanLiang(data) {
  return request({
      url: '/api/smartwater/cti/worktime/jiedanliang',
      method: 'post',
      params: data
  })
}
// 添加接单量
export function AddJieDanLiang(data) {
  return request({
      url: '/api/smartwater/cti/worktime/addjiedanliang',
      method: 'post',
      params: data
  })
}
// 删除接单量
export function DeleteJieDanLiang(data) {
  return request({
      url: '/api/smartwater/cti/worktime/deletejiedanliang',
      method: 'post',
      params: data
  })
}


