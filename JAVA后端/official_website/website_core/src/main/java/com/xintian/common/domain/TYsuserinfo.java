package com.xintian.common.domain;

import lombok.Data;

import java.util.Date;
import java.io.Serializable;

/**
 * 营收户号关联表(TYsuserinfo)实体类
 *
 * @author makejava
 * @since 2023-09-25 14:33:23
 */
@Data
public class TYsuserinfo implements Serializable {
    private static final long serialVersionUID = 437002963450622495L;
    /**
     * 主键id
     */
    private Integer id;
    /**
     * 用户id
     */
    private Integer userId;
    /**
     * 手机号
     */
    private String mobileNumber;
    /**
     * 营收户号
     */
    private String ysCode;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 创建人
     */
    private String createUser;
    /**
     * 最后修改时间
     */
    private Date lastUpdateTime;
    /**
     * 最后修改人
     */
    private String lastUpdateUser;

    /**
     * 微信的openId
     */
    private String openId;
}

