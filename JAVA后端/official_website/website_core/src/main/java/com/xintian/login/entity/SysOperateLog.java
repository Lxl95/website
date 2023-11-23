package com.xintian.login.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 操作日志记录实体类
 *
 * @author orcl
 * @since 2023-03-20
 */
@Data
@TableName("SYS_OPERATE_LOG")
@ApiModel(value = "SysOperateLog对象", description = "操作日志记录")
public class SysOperateLog extends BaseEntity {

    private static final long serialVersionUID = 1L;


    @ApiModelProperty(value = "日志主键")
    @TableId("ID")
    private String id;

    @ApiModelProperty(value = "模块标题")
    private String title;
    @ApiModelProperty(value = "业务类型（0其它 1新增 2修改 3删除）")
    private Integer businessType;
    @ApiModelProperty(value = "方法名称")
    private String method;
    @ApiModelProperty(value = "请求方式")
    private String requestMethod;
    @ApiModelProperty(value = "操作人员")
    private String operateName;
    @ApiModelProperty(value = "部门名称")
    private String deptName;
    @ApiModelProperty(value = "请求URL")
    private String operateUrl;
    @ApiModelProperty(value = "主机地址")
    private String operateIp;
    @ApiModelProperty(value = "操作地点")
    private String operateLocation;
    @ApiModelProperty(value = "请求参数")
    private String operateParam;
    @ApiModelProperty(value = "返回参数")
    private String jsonResult;
    @ApiModelProperty(value = "操作状态（0正常 1异常）")
    private Integer status;
    @ApiModelProperty(value = "错误消息")
    private String errorMsg;

    @ApiModelProperty(value = "操作人类别(0-其他 1后台用户 2手机端用户)")
    private Integer operatorType;

    @ApiModelProperty(value = "模块类型（0-操作日志，1-阀门启闭，2-工地巡检日志，3-巡检日志） ")
    private Integer moduleType;


    @ApiModelProperty(value = "查询时间-起 ")
    @TableField(exist = false)
    private String timeStart;
    @ApiModelProperty(value = "查询时间-止")
    @TableField(exist = false)
    private String timeEnd;

}
