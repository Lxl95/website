import request from '@/utils/request'

// 操作日志
export function operLogList(data) {
 return request({
     url: '/monitor/operlog/list',
     method: 'get',
     params: data
 })
}

// 查询账户
export function getuserInfoByMobleNumber(data) {
    return request({
        url: '/userInfo/getuserInfoByMobleNumber',
        method: 'post',
        data
    })
}
// 更改账户
export function setuserInfoByMobleNumber(data) {
 return request({
     url: '/userInfo/setuserInfoByMobleNumber',
     method: 'post',
     data
 })
}

// 业务模块
export function SysMenuList(data) {
    return request({
        url: '/SysMenu/list',
        method: 'get',
        params: data
    })
}
export function delSysMenu(data) {
    return request({
        url: '/SysMenu/del',
        method: 'get',
        params: data
    })
}
export function getSysMenuById(data) {
    return request({
        url: '/SysMenu/getById',
        method: 'get',
        params: data
    })
}
export function insertSysMenu(data) {
    return request({
        url: '/SysMenu/insert',
        method: 'post',
        data
    })
}
export function updateSysMenu(data) {
    return request({
        url: '/SysMenu/update',
        method: 'post',
        data
    })
}