package com.xintian.common.tokenserver;

import com.alibaba.fastjson.JSON;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

/**
 * 注： 此拦截器走完之后，会接着走到BaseController中，把拦截器中获取的claims传递给BaseController，然后BaseController再接着相应操作。
 *
 * 一体化平台登陆拦截器
 *      继承HandlerInterceptorAdapter
 *
 *      preHandle:进入到控制器方法之前执行的内容
 *          boolean：
 *              true：可以继续执行控制器方法
 *              false：拦截
 *      posthandler：执行控制器方法之后执行的内容
 *      afterCompletion：响应结束之前执行的内容
 *
 * 1.简化获取token数据的代码编写
 *      统一的用户权限校验（是否登录）
 * 2.判断用户是否具有当前访问接口的权限
 *
 */
@Slf4j
@Component
public class YTHInterceptor extends HandlerInterceptorAdapter {

    @Autowired
    private RedisTemplate<String,  String> redisTemplate;

    /**
     * 简化获取token数据的代码编写（判断是否登录）
     *  1.通过request获取请求token信息
     *  2.从token中解析获取用户信息
     *  3.将用户信息绑定到request域中(此步骤是为了方便我们每一个控制器方法的访问，可以把claims直接绑定到request域中，便于在控制器中直接获取到claims)
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //log.info("执行拦截器，url"+ request.getRequestURL());
        return true;
        /**
         * 从请求头信息中获取token数据
         *   1.获取请求头信息：名称=Authorization
         *   2.替换Bearer+空格
         *   3.解析token
         *   4.获取用户信息
         */
        /*if(request.getMethod().toUpperCase().equals("OPTIONS")){
            return true; // 通过所有OPTION请求
        } else {
            String authorization = null;
            String requestMod = request.getMethod();
            if("POST".equals(requestMod)){
                authorization = request.getHeader("accessToken");
            }
            if("GET".equals(requestMod)){
                authorization = request.getParameter("accessToken");
            }

            // 1.通过request获取请求token信息
            //String authorization = request.getHeader("Authorization");
            //String authorization = request.getParameter("accessToken");
            log.info("accessToken:"+authorization);

            Map<String, Object> map = new HashMap<>();
            if(null == authorization){
                map.put("msg", "token为空");
                map.put("state", false);
                String json = new ObjectMapper().writeValueAsString(map);
                response.setContentType("application/json;charset=UTF-8");
                response.getWriter().println(json);
                return false;
            }

            //判断请求头信息是否为空，或者是否已Bearer开头
            try{
                //如果请求头不为空，并且以Bearer 开头
                //获取token数据
                String token = authorization.replace("Bearer ","");
                //解析token获取claims
                String userStr = redisTemplate.opsForValue().get("XTxt_token_" + token);
                //log.info(userStr);
                if(userStr != null ) {
                    YTHUser user = JSON.parseObject(userStr,YTHUser.class);
                    request.setAttribute("YTHUser",user);
                    //返回true，继续往下执行，进入到控制器层的方法。
                    return true;
                }

            } catch (Exception e) {
                e.printStackTrace();
            }
            map.put("msg", "token无效");
            map.put("state", false);
            String json = new ObjectMapper().writeValueAsString(map);
            response.setContentType("application/json;charset=UTF-8");
            response.getWriter().println(json);
            return false;
        }*/
    }
}
