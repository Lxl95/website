package com.xintian.login.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * 实体基类
 */
@Data
public class BaseEntity implements Serializable {

    @TableField(exist = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
//    @ApiModelProperty(value = "创建时间")
    private Date createTime;

    @JsonSerialize(
            using = ToStringSerializer.class
    )
//    @ApiModelProperty(value = "创建人id")
    @TableField(exist = false)
    private String createUser;


    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
//    @ApiModelProperty(value = "最后修改时间")
    @TableField(exist = false)
    private Date lastUpdateTime;

    @JsonSerialize(
            using = ToStringSerializer.class
    )
//    @ApiModelProperty(value = "最后修改人id")
    @TableField(exist = false)
    private String lastUpdateUser;

    public interface BaseEmptyView{};
    public interface BaseEntityView1{};


    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(final Date createTime) {
        this.createTime = createTime;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(final String createUser) {
        this.createUser = createUser;
    }

    public Date getLastUpdateTime() {
        return lastUpdateTime;
    }

    public void setLastUpdateTime(final Date lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
    }

    public String getLastUpdateUser() {
        return lastUpdateUser;
    }

    public void setLastUpdateUser(final String lastUpdateUser) {
        this.lastUpdateUser = lastUpdateUser;
    }
}
