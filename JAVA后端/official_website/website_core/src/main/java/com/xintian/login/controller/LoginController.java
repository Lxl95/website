package com.xintian.login.controller;

import com.xintian.annotation.BusinessType;
import com.xintian.annotation.Log;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.login.entity.RequestData;
import com.xintian.login.entity.UserInfo;
import com.xintian.login.service.UserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import redis.clients.jedis.Jedis;

import javax.servlet.http.HttpSession;



@RestController
@RequestMapping("/login")
@Slf4j
@Api(tags ="用户登录-控制器")
@CrossOrigin(origins = "*")
public class LoginController {
    @Autowired
    private UserInfoService userInfoService;
    @Value("${xintian.redisUrl}")
    private String redisUrl;
    @Value("${xintian.redisPort}")
    private Integer redisPort;
    @Value("${xintian.redisPassword}")
    private String redisPassword;
    /**
     * 登录功能（非短信验证码登录）
     */
    @Log(title = "用户账户登录",businessType = BusinessType.LOGIN)
    @ApiOperation(value = "登录功能（非短信验证码登录）")
    @PostMapping("/userLogin")
    public Result userLogin(@RequestBody RequestData requestData, HttpSession session){
        //判断图片验证码是否正确

        Jedis jedis = new Jedis(redisUrl,redisPort);
        if (!redisPassword.isEmpty()){
            jedis.auth(redisPassword);
        }
        if(requestData.getVerificationCode()==null|| jedis.get(requestData.getCodeId())==null){
            return new Result(ResultCode.FAIL,"登录失败");
        }
        String s= jedis.get(requestData.getCodeId());
        jedis.close();
        String redisCodeValue = s.toLowerCase();
        log.info("redis里的图片验证码："+redisCodeValue);
        String receivedCode=requestData.getVerificationCode();
        String realReceivedCode = receivedCode.toLowerCase();//toLowerCase() 不区分大小写进行验证码校验
        log.info("用户的验证码:"+realReceivedCode);
        if (realReceivedCode.equals(redisCodeValue)){
            log.info("账号登录接口图片验证码一致");
            UserInfo userInfo = userInfoService.convert(requestData);//RequestData转userInfo
            boolean flag = userInfoService.userLogin(userInfo);
            if (flag==true){
                return new Result(ResultCode.SUCCESS,flag);
            }
            return new Result(ResultCode.FAIL,"登录失败");
        }
        log.info("账号登录接口图片验证码不一致");
        return new Result(ResultCode.ERROR_IMAGE_CODE);
    }

    /**
     * 登录功能（短信验证码登录）
     */
    @Log(title = "用户手机号登录登录",businessType = BusinessType.LOGIN)
    @ApiOperation(value = "登录功能（短信验证码登录）")
    @PostMapping("/userMessageLogin")
    public Result userMessageLogin(@RequestBody RequestData requestData, HttpSession session){
        UserInfo userInfo = userInfoService.convert(requestData);//RequestData转userInfo
        //判断账户是否存在
        boolean exitUserAccount = userInfoService.isExitUserAccount(userInfo);
        if (exitUserAccount==true){
            return new Result(ResultCode.PERSONAL_USER_NOT_EXISTS);
        }
        boolean flag = userInfoService.userMessageLogin(requestData);
        if (flag==true){
            return new Result(ResultCode.SUCCESS,flag);
        }
        return new Result(ResultCode.ERROR_MESSAGE_CODE,flag);
    }

}
