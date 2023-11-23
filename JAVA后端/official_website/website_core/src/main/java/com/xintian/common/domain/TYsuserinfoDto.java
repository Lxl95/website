package com.xintian.common.domain;

import lombok.Data;

import java.util.List;

/**
 * @author wt
 * @date 2023/9/25
 */
@Data
public class TYsuserinfoDto {
    /**
     * 主键id
     */
    private Integer id;
    /**
     * 手机号
     */
    private String mobileNumber;
    /**
     * 营收户号
     */
    private List<String> ysCode;

    /**
     * 微信openID
     */
    private String openId;
}
