package com.xintian.login.entity;

import com.baomidou.mybatisplus.annotation.*;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.models.auth.In;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * 用户信息
 */

@Data
@KeySequence(value = "userinfo_id", clazz = Integer.class)
@TableName(value ="T_USER_INFO")
public class UserInfo extends BaseEntity{

    private static final long serialVersionUID = 1L;

    @ApiModelProperty("主键")
    @Id
    private Integer id;

    @ApiModelProperty("用户名称")
    @TableField("USER_NAME")
    private String userName;

    @ApiModelProperty("手机号")
    @TableField("MOBILE_NUMBER")
    private String mobileNumber;

    @ApiModelProperty("用户账号")
    @TableField("USER_ACCOUNT")
    private String userAccount;

    @ApiModelProperty("用户密码")
    @TableField("USER_PASSWORD")
    private String userPassword;

    @ApiModelProperty("户号 英文半角逗号分割")
    @TableField("ACCOUNT_NUMBER")
    private String accountNumber;

    @ApiModelProperty("创建时间")
    @TableField("CREATE_TIME")
    private Date createTime;

    @ApiModelProperty("创建人")
    @TableField("CREATE_USER")
    private String createUser;

    @ApiModelProperty("最后修改时间")
    @TableField("LAST_UPDATE_TIME")
    private Date lastUpdateTime;

    @ApiModelProperty("最后修改人")
    @TableField("LAST_UPDATE_USER")
    private String lastUpdateUser;

    @ApiModelProperty("用户昵称")
    @TableField("USER_NICK_NAME")
    private String userNickName;

    @ApiModelProperty("头像路径")
    @TableField("USER_AVATA_PATH")
    private String userAvataPath;

    @ApiModelProperty("生日")
    @TableField("USER_BIRTHDAY")
    private String userBirthday;

    @ApiModelProperty("用户住址")
    @TableField("USER_ADDRESS")
    private String userAddress;

    @ApiModelProperty("用户爱好")
    @TableField("USER_HOBBY")
    private String userHobby;

//    @ApiModelProperty("旧密码")
//    @TableField("OLD_PASSWORD")
//    private String oldPassword;
//    @ApiModelProperty("新密码")
//    @TableField("NEW_PASSWORD")
//    private String newPassword;
//    @ApiModelProperty("二次确认新密码")
//    @TableField("CONFIRM_PASSWORD")
//    private String confirmPassword;


}
