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
 * 公告 实体类   标题,类型,封面,logo,内容,是否跳转链接,链接,是否显示
 */
@Entity
//@Table(name = "officialweb_notice")
@Table(name = "OFFICIALWEB_NOTICE")
@Getter
@Setter
@Data
@ToString
@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class Notice implements Serializable {
    @Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(length = 32,name = "ID")
    private String id;//主键
    @Column(name="CREATETIME")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date createtime;//时间
    @Column(name="TITLE")
    private String title;//标题名称
    @Column(name="COVERPIC")
    private String coverpic;//封面图
    @Column(name="SUMMARY")
    private String summary;//简介 概要
    @Column(name="CONTENT")
    private String content;//内容
    @Column(name="ISJUMP")
    private Integer isjump;//是否跳转链接  1是 2否
    @Column(name="URLPATH")
    private String urlpath;//跳转链接
    @Column(name="TYPEID")
    private String typeid;//公告类型id
    @Column(name="TYPENAME")
    private String typename;//公告类型名称
    @Column(name="ISSHOW")
    private Integer isshow;//是否显示 1是(显示)  2否(不显示)



}
