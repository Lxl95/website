package com.xintian.login.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 验证码
 */
@Data
@TableName("T_VERIFICATION_CODE")
public class VerificationCode extends BaseEntity{

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("用户账号")
    @TableField("USER_ACCOUNT")
    private String userAccount;
    @ApiModelProperty("手机号")
    @TableField("MOBILE_NUMBER")
    private String mobileNumber;
    @ApiModelProperty("验证码")
    @TableField("VERIFICATION_CODE")
    private Integer verificationCode;
    @ApiModelProperty("失效时间")
    @TableField("LOSS_TIME")
    private String lossTime;
}
