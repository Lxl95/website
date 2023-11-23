package com.xintian.login.controller;

import com.xintian.login.utils.ValidateCodeUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * @author wt
 * @date 2023/10/16
 */
@CrossOrigin(origins = "*")
@Slf4j
public class ValidateCodeController {
    //返回验证码图片
    @GetMapping("/getCaptchaImg")
    public void getCaptchaImg(HttpServletRequest request, HttpServletResponse response, HttpSession session) {

        try {

            response.setContentType("image/png");
            response.setHeader("Cache-Control", "no-cache");
            response.setHeader("Expire", "0");
            response.setHeader("Pragma", "no-cache");
            ValidateCodeUtil validateCode = new ValidateCodeUtil();
            // getRandomCodeImage方法会直接将生成的验证码图片写入response
            validateCode.getRandomCodeImage(request, response);
//            log.info("session里面存储的验证码为："+session.getAttribute("JCCODE"));
            // System.out.println("session里面存储的验证码为："+session.getAttribute("JCCODE"));

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
