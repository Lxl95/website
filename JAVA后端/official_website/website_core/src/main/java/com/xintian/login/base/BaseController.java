package com.xintian.login.base;


import com.xintian.common.tokenserver.YTHUser;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.ModelAttribute;


/**
 * web层通用数据处理
 */
public class BaseController
{

    public HttpServletRequest request;
    public HttpServletResponse response;
    public String userid;
    public String username;
    public String userNo;
    public YTHUser ythUser;


    /**
     * springmvc提供的@ModelAttribute注解，此注解的作用是在所有的Controller方法执行之前，会先执行此注解标记的方法。
     * 然后我们的controller需要继承此BaseController，这样一来在进入我们的controller层后，
     * request和response和companyId和companyName都已经被赋值了。
     * */
    @ModelAttribute
    public void setResAnReq(HttpServletRequest request, HttpServletResponse response) {
        this.request = request;
        this.response = response;

        Object obj = request.getAttribute("YTHUser");

        if(obj != null) {
            this.ythUser = (YTHUser) obj;
            this.userid = ythUser.getIAdminID();
            this.username = ythUser.getCAdminName();
            this.userNo = ythUser.getCJobNumber();
        }
    }


}
