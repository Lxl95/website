package com.xintian.login.controller;

import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.login.entity.RequestData;
import com.xintian.login.entity.UserInfo;
import com.xintian.login.entity.VerificationCode;
import com.xintian.login.service.UserInfoService;
import com.xintian.login.service.VerificationCodeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import redis.clients.jedis.Jedis;

import javax.servlet.http.HttpSession;
import java.util.Locale;

/**
 * 提供注册与找回功能
 * 免登录拦截
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/registration")
@Api(tags = "用户注册-控制器")
@Slf4j
public class RegistrationController {
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private VerificationCodeService verificationCodeService;
    @Value("${xintian.redisUrl}")
    private String redisUrl;
    @Value("${xintian.redisPort}")
    private Integer redisPort;
    @Value("${xintian.redisPassword}")
    private String redisPassword;

    @PostMapping("/userRegistration")
    @ApiOperation(value = "用户注册")
    public Result save(@RequestBody RequestData requestData,HttpSession session){
        log.info("注册requestData：："+requestData);
        UserInfo userInfo = userInfoService.convert(requestData);//RequestData转userInfo
        if (requestData.getMobileNumber()==null||requestData.getUserPassword().isEmpty()
        ){return new Result(ResultCode.MISSING_PARAM);}
        //判断账户是否存在
        boolean exitUserAccount = userInfoService.isExitUserAccount(userInfo);
        if (exitUserAccount==false){
            return new Result(ResultCode.PERSONAL_USER_EXISTS);
        }
        //判断短信验证码是否正确
        //redis取验证码
        Jedis jedis = new Jedis(redisUrl,redisPort);
        if (!redisPassword.isEmpty()){
            jedis.auth(redisPassword);
        }
        String redisCode = jedis.get(requestData.getMobileNumber());
        String verificationCode = requestData.getVerificationCode();//用户验证码
        String userCode = verificationCode.toLowerCase();
        log.info("redis存储的code::"+redisCode);
        log.info("用户输入的code::"+userCode);
        boolean flag = false;
        if (userCode.equals(redisCode)){//短信验证码一致进行注册
             flag = userInfoService.userRegistration(userInfo);
            jedis.del(requestData.getMobileNumber());
            return new Result(ResultCode.SUCCESS,flag);

        }
        jedis.close();
        return new Result(ResultCode.ERROR_MESSAGE_CODE,"短信验证码验证失败");
    }

    /**
     * 发送短信验证码
     * @param code 用户输入验证码
     * @param phoneNumber 用户输入手机号
     * @param session
     * @return
     */
    @GetMapping("/sendInformation")
    @ApiOperation(value = "发送短信验证码")
    public Result SendInformation(@RequestParam("code") String code,@RequestParam("codeId") String codeId,@RequestParam("phoneNumber") String phoneNumber,HttpSession session){
        //判断图片验证码是否正确
        Jedis jedis = new Jedis(redisUrl,redisPort);
        if (!redisPassword.isEmpty()){
            jedis.auth(redisPassword);
        }
        String redisCodeValue= jedis.get(codeId);
        jedis.close();
        log.info("redis里的图片验证码："+redisCodeValue);
        String receivedCode=code.toLowerCase();
        String realReceivedCode = receivedCode.toLowerCase();//toLowerCase() 不区分大小写进行验证码校验
        log.info("用户的验证码:"+realReceivedCode);
        if (realReceivedCode.equals(redisCodeValue)){
            log.info("图片验证码一致");
            try {
                //调用短信接口 发送短信
                VerificationCode verificationCode = new VerificationCode();
                verificationCode.setMobileNumber(phoneNumber);
                verificationCodeService.getVerificationCode(verificationCode);
                return new Result(ResultCode.SUCCESS);
            } catch (Exception e) {
                e.printStackTrace();
                return new Result(ResultCode.ERROR_SEND);
            }
        }else {
            log.info("！！！图片验证码不一致");
            return new Result(ResultCode.ERROR_IMAGE_CODE);
        }

    }


    @PostMapping("/getBackPassword")
    @ApiOperation(value = "密码找回")
    public Result getBackPassword(@RequestBody RequestData requestData,HttpSession session){
        UserInfo userInfo = userInfoService.convert(requestData);//RequestData转userInfo
        if (requestData.getMobileNumber()==null||requestData.getUserPassword().isEmpty()
        ){return new Result(ResultCode.MISSING_PARAM);}
        //判断账户是否存在
        boolean exitUserAccount = userInfoService.isExitUserAccount(userInfo);
        if (exitUserAccount==true){
            return new Result(ResultCode.PERSONAL_USER_NOT_EXISTS);
        }
        //判断短信验证码是否正确
        //redis取验证码
        Jedis jedis = new Jedis(redisUrl,redisPort);
        if (!redisPassword.isEmpty()){
            jedis.auth(redisPassword);
        }
        String redisCode = jedis.get(requestData.getMobileNumber());
        String verificationCode = requestData.getVerificationCode();//用户验证码
        String userCode = verificationCode.toLowerCase();
        log.info("redis存储的code::"+redisCode);
        log.info("用户输入的code::"+userCode);
        boolean flag = false;
        if (userCode.equals(redisCode)){//短信验证码一致进行修改密码
            flag = userInfoService.updateUserPassward(userInfo);
            return new Result(ResultCode.SUCCESS,flag);
        }
        jedis.close();
        return new Result(ResultCode.ERROR_MESSAGE_CODE,"短信验证码验证失败");
    }

}
