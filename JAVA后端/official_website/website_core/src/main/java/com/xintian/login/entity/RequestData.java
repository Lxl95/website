package com.xintian.login.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.models.auth.In;
import lombok.Data;

/**
 * @author wt
 * @date 2023/10/13
 */
@Data
public class RequestData {
    @ApiModelProperty("用户名称")
    private String userName;
    @ApiModelProperty("手机号")
    private String mobileNumber;
    @ApiModelProperty("用户账号")
    private String userAccount;
    @ApiModelProperty("用户密码")
    private String userPassword;
    @ApiModelProperty("户号 英文半角逗号分割")
    private String accountNumber;
    @ApiModelProperty("验证码")
    private String verificationCode;

    @ApiModelProperty("旧密码")
    private String oldPassword;
    @ApiModelProperty("新密码")
    private String newPassword;
    @ApiModelProperty("二次确认新密码")
    private String confirmPassword;

    @ApiModelProperty("codeId")
    private String codeId;
}
