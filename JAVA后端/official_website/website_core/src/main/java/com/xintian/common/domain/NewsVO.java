package com.xintian.common.domain;

import lombok.Data;

import java.io.Serializable;

@Data
public class NewsVO extends News implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 上一个新闻ID */
    private String prevNewId;

    /** 上一个新闻名称 */
    private String prevNewTitle;

    /** 下一个新闻ID */
    private String nextNewId;

    /** 下一个新闻名称 */
    private String nextNewTitle;

}
