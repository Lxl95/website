package com.xintian.common.domain;

import com.baomidou.mybatisplus.annotation.KeySequence;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.xintian.login.entity.BaseEntity;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;


/**
 * 自定义菜单信息表
 * @TableName SYS_MENU
 */



@Data
@KeySequence(value = "MENU_ID", clazz = Integer.class)
@TableName(value ="SYS_MENU")
public class SysMenu extends BaseEntity {
    /**
     * 主键id
     */
    @ApiModelProperty("主键")
    @Id
    private Integer id;

    /**
     * 模块名称
     */
    @ApiModelProperty("模块名称")
    @TableField("NAME")
    private String name;

    /**
     * 菜单路径
     */
    @ApiModelProperty("菜单路径")
    @TableField("MENU_URL")
    private String menuUrl;

    /**
     * 图片路径
     */
    @ApiModelProperty("图片路径")
    @TableField("IMAGE_PATH")
    private String imagePath;

    /**
     * 是否展示
     */
    @ApiModelProperty("是否展示(1:展示 2：不展示)")
    @TableField("IS_SHOW")
    private String isShow;

    /**
     * 排列序号
     */
    @ApiModelProperty("排列序号")
    @TableField("SERIAL")
    private String serial;

    /**
     * 模块类型
     */
    @ApiModelProperty("模块类型")
    @TableField("MENU_TYPE")
    private String menuType;

}
