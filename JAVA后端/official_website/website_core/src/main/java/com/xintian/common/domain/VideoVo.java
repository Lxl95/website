package com.xintian.common.domain;

import lombok.Data;

/**
 * @author wt
 * @date 2023/7/12
 */
@Data
public class VideoVo extends Video {
    private String dataSort;//排序字段
    private String dataOrder;//排序方式
}
