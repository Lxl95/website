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
//@Table(name = "officialweb_activity")
@Table(name = "OFFICIALWEB_ACTIVITY")
@Getter
@Setter
@Data
@ToString
@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class Activity implements Serializable {
    @Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(length = 32,name = "ID")
    private String id;//主键
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Column(name="CREATETIME")
    private Date createtime;//时间
    @Column(name="TITLE")
    private String title;//活动标题
    @Column(name="COVERPIC")
    private String coverpic;//活动封面图
    @Column(name="CONTENT")
    private String content;//活动内容
    @Column(name="URLPATH")
    private String urlpath;//活动链接
    @Column(name="ISENABLE")
    private Integer isenable;//活动是否启用 1启用 2不启用
    @Column(name="ATTACHMENT")
    private String attachment;//附件


}
