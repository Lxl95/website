import request from '@/utils/request'

// 栏目类别新增接口
export function columnCategorySave(data) {
    return request({
        url: '/columnCategory/save',
        method: 'post',
        data
    })
}
// 删除栏目类别接口
export function columnCategoryDel(data) {
    console.log(data)
    return request({
        url: '/columnCategory/del?id=' + data.id,
        method: 'get',
    })
}
// 栏目类别更新接口
export function columnCategoryUpdate(data) {
    return request({
        url: '/columnCategory/update',
        method: 'post',
        data
    })
}
//栏目类别查询接口
export function columnCategoryQueryAll() {
    return request({
        url: '/columnCategory/queryAll',
        method: 'get'
    })
}
//栏目类别查询接口
export function columnCategoryQueryList() {
    return request({
        url: '/columnCategory/tree/list',
        method: 'get'
    })
}
//新闻内容新增接口
export function newsSave(data) {
    return request({
        url: '/news/save',
        method: 'post',
        data
    })
}
//新闻内容删除接口
export function newsDel(data) {

    return request({
        url: '/news/del?id=' + data.id,
        method: 'get'
    })
}
//新闻内容查询接口

export function newsQueryBy(data) {
    return request({
        url: '/news/queryBy',
        method: 'post',
        data
    })
}
//新闻内容更新接口
export function newsUpdate(data) {
    return request({
        url: '/news/update',
        method: 'post',
        data
    })
}
//栏目类别根据id查询详情接口
export function newsFindById(id) {
    return request({
        url: '/news/findById',
        method: 'get',

    })
}
//活动管理
//活动新增接口
export function activitySave(data) {
    return request({
        url: '/activity/save',
        method: 'post',
        data
    })
}
//活动删除接口
export function activityDel(id) {
    return request({
        url: '/activity/del?id=' + id,
        method: 'get',

    })
}
//活动更新接口
export function activityUpdate(data) {
    return request({
        url: '/activity/update',
        method: 'post',
        data
    })
}
//活动查询接口
export function activityQueryBy(data) {

    return request({
        url: '/activity/queryBy',
        method: 'post',
        data
    })
}
//活动根据id查询详情接口
export function activityFindById(id) {
    return request({
        url: '/activity/findById?id=' + data.id,
        method: 'get',
    })
}
//设置活动是否启用接口
export function isenable(data) {
    console.log(data);
    return request({
        url: '/activity/isenable?id=' + data.id + "&isenable=" + data.isenable,
        method: 'get',
    })
}

//系统信息新增接口
export function systeminfoSave(data) {

    return request({
        url: '/systeminfo/save',
        method: 'post',
        data
    })
}
//系统信息删除接口
export function systeminfoDel(id) {
    return request({
        url: '/systeminfo/del?id=' + id,
        method: 'get',
    })
}

//系统信息更新接口

export function systeminfoUpdate(data) {

    return request({
        url: '/systeminfo/update',
        method: 'post',
        data
    })
}
//系统信息查询接口

export function systeminfoQueryAll() {
    return request({
        url: '/systeminfo/queryAll',
        method: 'get',
    })
}

//系统信息根据id查询详情接口

export function systeminfoDindById(id) {
    return request({
        url: '/systeminfo/findById?id=' + id,
        method: 'get',
    })
}


//公告类型新增接口

export function noticeTypeSave(data) {

    return request({
        url: '/noticeType/save',
        method: 'post',
        data
    })
}
//公告类型删除接口
export function noticeTypeDel(id) {
    return request({
        url: '/noticeType/del?id=' + id,
        method: 'get',
    })
}
//公告类型全部查询接口
export function noticeTypeQueryAll() {
    return request({
        url: '/noticeType/queryAll',
        method: 'get',
    })
}
//公告类型更新接口

export function noticeTypeUpdate(data) {

    return request({
        url: '/noticeType/update',
        method: 'post',
        data
    })
}
//公告类型条件查询接口


export function noticeTypeQueryBy(data) {

    return request({
        url: '/noticeType/queryBy',
        method: 'post',
        data
    })
}
//公告新增接口

export function noticeSave(data) {

    return request({
        url: '/notice/save',
        method: 'post',
        data
    })
}

//公告删除接口

export function noticeDel(id) {
    return request({
        url: '/notice/del?id=' + id,
        method: 'get',
    })
}

//公告更新接口
export function noticeUpdate(data) {

    return request({
        url: '/notice/update',
        method: 'post',
        data
    })
}

//公告条件查询接口
export function noticeQueryBy(data) {

    return request({
        url: '/notice/queryBy',
        method: 'post',
        data
    })
}



//政策法规类型新增接口

export function policeTypeSave(data) {

    return request({
        url: '/policeType/save',
        method: 'post',
        data
    })
}
//政策法规类型删除接口

export function policeTypeDel(id) {
    return request({
        url: '/policeType/del?id=' + id,
        method: 'get',
    })
}
//政策法规类型全部查询接口
export function policeTypeQueryAll() {
    return request({
        url: '/policeType/queryAll',
        method: 'get',
    })
}
//政策法规类型更新接口

export function policeTypeUpdate(data) {

    return request({
        url: '/policeType/update',
        method: 'post',
        data
    })
}
//政策法规类型条件查询接口


export function policeTypeQueryBy(data) {

    return request({
        url: '/policeType/queryBy',
        method: 'post',
        data
    })
}

//政策法规新增接口
export function policeSave(data) {

    return request({
        url: '/police/save',
        method: 'post',
        data
    })
}

//政策法规删除接口

export function policeDel(id) {
    return request({
        url: '/police/del?id=' + id,
        method: 'get',
    })
}

//政策法规更新接口

export function policeUpdate(data) {

    return request({
        url: '/police/update',
        method: 'post',
        data
    })
}
//政策法规条件查询接口
export function policeQueryBy(data) {

    return request({
        url: '/police/queryBy',
        method: 'post',
        data
    })
}
//设置推荐新闻接口

export function setRecommendNews(data) {

    return request({
        url: '/news/setRecommendNews',
        method: 'post',
        data
    })
}
//设置发布接口

export function setPublishNews(data) {

    return request({
        url: '/news/setPublishNews',
        method: 'post',
        data
    })
}
//设置热点新闻接口
export function setHotNews(data) {

    return request({
        url: '/news/setHotNews',
        method: 'post',
        data
    })
}

//业务办理新增
export function businessHandlingSave(data) {

    return request({
        url: '/businessHandling/save',
        method: 'post',
        data
    })
}

//业务办理删除接口

export function businessHandlingDel(id) {
    return request({
        url: '/businessHandling/del?id=' + id,
        method: 'get',
    })
}

//业务办理更新
export function businessHandlingUpdate(data) {

    return request({
        url: '/businessHandling/update',
        method: 'post',
        data
    })
}

//业务办理条件查询
export function businessHandlingQueryBy(data) {

    return request({
        url: '/businessHandling/queryBy',
        method: 'post',
        data
    })
}

//业务办理 是否展示设置接口

export function businessHandlingisshow(data) {

    return request({
        url: '/businessHandling/isshow',
        method: 'get',
        params: { id: data.id, isshow: data.isshow }
    })
}

//公告 是否展示设置接口

export function noticeIsshow(data) {

    return request({
        url: '/notice/isshow',
        method: 'get',
        params: { id: data.id, isshow: data.isshow }
    })
}
export function imgUpload(data) {

    return request({
        url: '/upload/imgUpload',
        method: 'post',
        data
    })
}

export function feedbackqueryBy(data) {

    return request({
        url: '/feedback/queryBy',
        method: 'post',
        data
    })
}

export function feedbackdel(id) {

    return request({
        url: '/feedback/del?id=' + id,
        method: 'get',
    })
}