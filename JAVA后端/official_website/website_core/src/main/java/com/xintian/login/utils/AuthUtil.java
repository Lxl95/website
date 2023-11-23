package com.xintian.login.utils;

import com.xintian.common.tokenserver.YTHUser;
import com.xintian.login.base.BaseController;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

/**
 * 登录用户工具类
 */
public class AuthUtil extends BaseController {

    /**
     * 获取当前登录用户(一体化用户)信息
     * @return
     */
    public static YTHUser getCurrentUser(){
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = requestAttributes == null ? null : ((ServletRequestAttributes)requestAttributes).getRequest();
        if(null == request){
            return null;
        }else{
            Object obj = request.getAttribute("YTHUser");
            return (YTHUser) obj;
        }
    }

}
