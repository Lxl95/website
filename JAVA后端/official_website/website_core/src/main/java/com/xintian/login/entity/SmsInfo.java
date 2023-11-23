package com.xintian.login.entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 短信发送请求实体
 */
@Data
public class SmsInfo{

    private static final long serialVersionUID = 1L;

    @JSONField(name = "FROM_PLAT")
    private String fromPlat;
    @JSONField(name = "RUN_NO")
    private String runNo;
    @JSONField(name = "SENDER_NO")
    private String senderNo;
    @JSONField(name = "RCVER_PHONE")
    private String rcverPhone;
    @JSONField(name = "TEMPLATE_CODE")
    private String templateCode;
    @JSONField(name = "SMS_CONTENT")
    private String smsContent;
    @JSONField(name = "SEND_TIME")
    private String sendTime;
    @JSONField(name = "SEND_CONTENT")
    private String sendContent;

}
