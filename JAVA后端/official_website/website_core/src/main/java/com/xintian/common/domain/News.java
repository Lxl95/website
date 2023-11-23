package com.xintian.common.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * @author: yanyongpan
 * @description：
 * 新闻实体类
 */
@Entity
//@Table(name = "officialweb_news")
@Table(name = "OFFICIALWEB_NEWS")
@Getter
@Setter
@Data
@ToString
@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class News implements Serializable {
    @Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(length = 32,name = "ID")
    private String id;//主键
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Column(name="CREATETIME")
    private Date createtime;//时间
    @Column(name="TITLE")
    private String title;//标题名称
    @Column(name="SUMMARY")
    private String summary;//摘要
    @Column(name="COVERPIC")
    private String coverpic;//封面图
    @Column(name="CONTENT")
    private String content;//内容
    @Column(name="COLUMNCATEGORYID")
    private String columncategoryid;//栏目类别id
    @Column(name="ATTACHMENT")
    private String attachment;//附件
    @Column(name="ISHOT")
    private Integer ishot;//是否设置为热点新闻 1是  2否
    @Column(name="ISRECOMMEND")
    private Integer isrecommend;//是否设置为推荐新闻  1是  2否
    @Column(name="ISPUBLISH")
    private Integer isPublish;//是否发布 1是  2否
    @Column(name="SORT")
    private Integer sort;//排序编码

    /**栏目类别名称 */
    @Transient
    private String columnCategoryName;
}
