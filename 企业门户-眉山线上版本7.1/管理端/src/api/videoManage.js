import request from '@/utils/request'

// 视频新增
export function videoSave(data) {
    return request({
        url: '/video/save',
        method: 'post',
        data
    })
}
// 删除视频
export function videoDel(id) {
    console.log(id)
    return request({
        url: '/video/del?id=' + id,
        method: 'get'
    })
}
// 视频更新接口
export function videoUpdate(data) {
    return request({
        url: '/video/update',
        method: 'post',
        data
    })
}
// 视频查询接口
export function videoQueryAll(data) {
    return request({
        url: '/video/queryAll',
        method: 'get',
        params: data
    })
}
// 视频详情
export function videoFindById(data) {
 return request({
     url: '/video/findById?id=' + data.id,
     method: 'get'
 })
}
