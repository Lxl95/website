package com.xintian.login.service.impl;


import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.xintian.common.entity.Result;
import com.xintian.login.base.BaseServiceImpl;
import com.xintian.login.entity.SmsInfo;
import com.xintian.login.entity.VerificationCode;
import com.xintian.login.service.VerificationCodeService;
import com.xintian.login.mapper.VerificationCodeMapper;
import com.xintian.login.utils.HttpUtils;
import com.xintian.login.utils.RandomUtils;
import com.xintian.login.utils.UniqueIdGenerator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import redis.clients.jedis.Jedis;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class VerificationCodeServiceImpl extends BaseServiceImpl<VerificationCodeMapper, VerificationCode> implements VerificationCodeService {
    @Value("${xintian.redisUrl}")
    private String redisUrl;
    @Value("${xintian.redisPort}")
    private Integer redisPort;
    @Value("${xintian.redisPassword}")
    private String redisPassword;
    @Value("${xintian.messageUrl}")
    private String messageUrl;
    @Value("${xintian.messageToken}")
    private String messageToken;


    @Override
    public boolean getVerificationCode(VerificationCode verificationCode)  {
        try {
        Map map = new HashMap();
        String accessToken = messageToken;
        map.put("accessToken",accessToken);
        long id1 = UniqueIdGenerator.generateId();//生成唯一id
        String runNo = String.valueOf(id1);
        //拿到验证码
        String codeStr = generateCode();
        //验证码放到redis
        Jedis jedis = new Jedis(redisUrl,redisPort);
        if (!redisPassword.isEmpty()){
            jedis.auth(redisPassword);
        }
        jedis.setex(verificationCode.getMobileNumber(),300,codeStr);
        jedis.close();

        SmsInfo smsInfo = new SmsInfo();
        smsInfo.setFromPlat("企业门户测试短信发送");
        smsInfo.setRunNo(runNo);
        smsInfo.setSenderNo("门户测试");
        smsInfo.setRcverPhone(verificationCode.getMobileNumber());
        smsInfo.setTemplateCode("SMS_463607529");
        smsInfo.setSmsContent("{\"code\":\""+codeStr+"\"}");
        smsInfo.setSendTime(null);
        smsInfo.setSendContent("您的验证码"+codeStr+",该验证码5分钟内有效,请勿泄漏于他人。");
        List<SmsInfo> smsInfoList = new ArrayList<>();
        smsInfoList.add(smsInfo);
        map.put("data",smsInfoList);
        String url = messageUrl;
        JSONObject jsonObject = (JSONObject) JSONObject.toJSON(map);
        log.info("请求参数："+jsonObject.toJSONString());
        String response = null;
        response = HttpUtils.sendPostJsonStr(url, jsonObject.toJSONString(), accessToken);
        if(StringUtils.isNotBlank(response)){
            log.info("调用post请求，地址：{}，接口返回：{}", url, response);
            Result result = JSONObject.parseObject(response, Result.class);
            if (result.getCode() == 200) {
                log.warn("短信平台返回>>>"+result.getData());
                return true;
            }else{
                log.error("短信平台返回失败>>>"+"post请求，地址：{}失败，接口返回：{}", url, result.getMessage());
                return false;
            }
        }
        return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


    /**
     * 生成验证码
     * @return
     */
    private String generateCode(){
        return RandomUtils.getFourBitRandom();
    }


}
