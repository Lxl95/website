package com.xintian.login.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import java.util.Date;

public class SpecialBaseEntity extends BaseEntity {
    private static final long serialVersionUID = 1L;

    @TableField(exist = false)
    private Date createTime;
    @TableField(exist = false)
    private String createUser;
    @TableField(exist = false)
    private Date lastUpdateTime;
    @TableField(exist = false)
    private String lastUpdateUser;
}
