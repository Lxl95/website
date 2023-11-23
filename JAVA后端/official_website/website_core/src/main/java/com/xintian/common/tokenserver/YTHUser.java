package com.xintian.common.tokenserver;

import lombok.Data;

/**
 * 一体化用户信息
 * @author：wxz
 */
@Data
public class YTHUser {

    /**
     * 用户id
     */
    private String iAdminID;
    /**
     * 部门id
     */
    private String iDeptID;
    /**
     * 部门名称
     */
    private String cDetpName;
    /**
     * 用户名称
     */
    private String cAdminName;
    /**
     * 工作编号
     */
    private String CJobNumber;
    /**
     * 用户性别
     */
    private String cAdminSex;
    /**
     * 用户密码
     */
    private String cAdminPassWord;
    /**
     * 用户电话
     */
    private String cAdminTel;
    /**
     * 用户邮件
     */
    private String cAdminEmail;
    /**
     * 是否锁住
     */
    private String iIsLocked;
    private String iIsAllowChangePWD;
    private String cLastLoginIP;
    private String LoginTicket;
    private String AllPinyin;
    private String cRoleId;
    /**
     * 组织编号
     */
    private String OrgNo;
    /**
     * 组织名称
     */
    private String OrgName;
    /**
     * 角色id
     */
    private String RoleIDs;
    /**
     * 授权id
     */
    private String AuthIDs;
    /**
     * 盐值
     */
    private String Salt;

}
