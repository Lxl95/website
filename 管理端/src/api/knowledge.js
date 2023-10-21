import request from '@/utils/request'

// 知识库管理-获取列表
export function getknowledgelist(data) {
  return request({
    url: '/cloud-cti/cti/repositoryinfo/list',
    method: 'get',
    params: data
  })
}
// 知识库管理-添加
export function addknowledge(data) {
  return request({
    url: '/cloud-cti/cti/repositoryinfo/add',
    method: 'post',
    data
  })
}
// 知识库管理-编辑
export function editknowledge(data) {
  return request({
    url: '/cloud-cti/cti/repositoryinfo/edit',
    method: 'post',
    data
  })
}
// 知识库管理-删除
export function delknowledge(data) {
  return request({
    url: '/cloud-cti/cti/repositoryinfo/delete/' + data,
    method: 'post'
  })
}
// 知识库-公告管理列表
export function getnoticelistall(data) {
  return request({
    url: '/cloud-cti/cti/notice/list',
    method: 'get',
    params: data
  })
}
// 知识库-添加公告
export function addnotice(data) {
  return request({
    url: '/cloud-cti/cti/notice/add',
    method: 'post',
    data
  })
}
// 知识库-修改公告
export function editnotice(data) {
  return request({
    url: '/cloud-cti/cti/notice/edit',
    method: 'post',
    data
  })
}
// 知识库管理-删除
export function delnotice(data) {
  return request({
    url: '/cloud-cti/cti/notice/delete/' + data,
    method: 'post'
  })
}
// 知识库-知识库类型列表
export function getknowledgetypelist(data) {
  return request({
    url: '/cloud-cti/cti/repositoryclassinfo/list',
    method: 'get',
    params: data
  })
}
// 知识库-知识库类型添加
export function addknowledgetype(data) {
  return request({
    url: '/cloud-cti/cti/repositoryclassinfo/add',
    method: 'post',
    data
  })
}
// 知识库-知识库类型编辑
export function modifyknowledgetype(data) {
  return request({
    url: '/cloud-cti/cti/repositoryclassinfo/edit',
    method: 'post',
    data
  })
}
// 知识库-知识库类型删除
export function deleteknowledgetype(data) {
  return request({
    url: '/cloud-cti/cti/repositoryclassinfo/delete/' + data,
    method: 'post'
  })
}
