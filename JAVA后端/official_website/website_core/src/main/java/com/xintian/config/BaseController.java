package com.xintian.config;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.xintian.common.entity.AjaxResult;
import com.xintian.common.tokenserver.YTHUser;
import org.springframework.web.bind.annotation.ModelAttribute;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * web层通用数据处理
 *
 * @author ruoyi
 */
public class BaseController {

    protected HttpServletRequest request;
    protected HttpServletResponse response;
    protected String userid;
    protected String username;
    protected String accessToken;
    protected YTHUser ythUser;


    @ModelAttribute
    public void setResAnReq(HttpServletRequest request, HttpServletResponse response) {
        this.request = request;
        this.response = response;

        Object obj = request.getAttribute("YTHUser");
        this.accessToken = request.getAttribute("accessToken") != null ?
                request.getAttribute("accessToken").toString() : "";
        if (obj != null) {
            this.ythUser = (YTHUser) obj;
            this.userid = ythUser.getCJobNumber();
            this.username = ythUser.getCAdminName();
        }
    }

//    /**
//     * 设置请求分页数据
//     */
//    protected void startPage() {
//        PageUtils.startPage();
//    }
//
//    /**
//     * 设置请求排序数据
//     */
//    protected void startOrderBy() {
//        PageDomain pageDomain = TableSupport.buildPageRequest();
//        if (StringUtils.isNotEmpty(pageDomain.getOrderBy())) {
//            String orderBy = SqlUtil.escapeOrderBySql(pageDomain.getOrderBy());
//            PageHelper.orderBy(orderBy);
//        }
//    }
//
//    /**
//     * 响应请求分页数据
//     */
//    @SuppressWarnings({"rawtypes", "unchecked"})
//    protected TableDataInfo getDataTable(List<?> list) {
//        TableDataInfo rspData = new TableDataInfo();
//        rspData.setCode(HttpStatus.SUCCESS);
//        rspData.setMsg("查询成功");
//        rspData.setRows(list);
//        rspData.setTotal(new PageInfo(list).getTotal());
//        return rspData;
//    }

    /**
     * 响应返回结果
     *
     * @param rows 影响行数
     * @return 操作结果
     */
    protected AjaxResult toAjax(int rows)
    {
        return rows > 0 ? AjaxResult.success() : AjaxResult.error();
    }

    /**
     * 返回成功
     */
    public AjaxResult success()
    {
        return AjaxResult.success();
    }

    /**
     * 返回失败消息
     */
    public AjaxResult error()
    {
        return AjaxResult.error();
    }

    /**
     * 返回成功消息
     */
    public AjaxResult success(String message)
    {
        return AjaxResult.success(message);
    }

    /**
     * 返回失败消息
     */
    public AjaxResult error(String message)
    {
        return AjaxResult.error(message);
    }
}
