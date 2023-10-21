import request from '@/utils/request'

export function saveImg(data) {
    return request({
        url: '/looppic/save',
        method: 'post',
        data
    })
}
export function updateLooppic(data) {
    return request({
        url: '/looppic/update',
        method: 'post',
        data
    })
}
export function getImgList() {
    return request({
        url: '/looppic/queryAll',
        method: 'get'
    })
}
export function deleteImg(id) {
    return request({
        url: '/looppic/del',
        method: 'get',
        params: { id: id }
    })
}
export function switchChange(data) {
    return request({
        url: '/looppic/update',
        method: 'post',
        data
    })
}
// 底部查询信息
export function getCompanyInfoById(id) {
    return request({
        url: '/companyInfo/findCompanyInfoById',
        method: 'get',
        params: { id: id }
    })
}
// 底部更新信息
export function saveCompanyInfo(data) {
    return request({
        url: '/companyInfo/updateCompanyInfo',
        method: 'post',
        data
    })
}