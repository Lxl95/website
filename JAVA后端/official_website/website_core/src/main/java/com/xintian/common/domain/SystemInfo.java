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
//@Table(name = "officialweb_system_info")
@Table(name = "OFFICIALWEB_SYSTEM_INFO")
@Getter
@Setter
@Data
@ToString
@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class SystemInfo implements Serializable {
    @Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(length = 32,name = "ID")
    private String id;//主键
    @Column(name="CREATETIME")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date createtime;//时间
    @Column(name="WEBNAME")
    private String webname;//主站名称
    @Column(name="DOMAINNAME")
    private String domainname;//主站域名
    @Column(name="COMPANYNAME")
    private String companyname;//公司名称
    @Column(name="COMMUNICATEADDRESS")
    private String communicateaddress;//通讯地址
    @Column(name="MOBILE")
    private String mobile;//客服电话
    @Column(name="RECORDNUMBER")
    private String recordnumber;//备案号

    //网站主页SEO设置
    @Column(name="TITLE")
    private String title;//标题
    @Column(name="KEYWORDS")
    private String keywords;//关键字
    @Column(name="DESCRIPTION")
    private String description;//描述
    //官网首页配置
    @Column(name="LOGO")
    private String logo;//logo图片
    @Column(name="QRCODE")
    private String qrcode;//二维码
    @Column(name="COMPANYINFO")
    private String companyinfo;//公司简介
    @Column(name="EMAIL")
    private String email;//公司邮箱
    @Column(name="ADDRESSLOCATION")
    private String addresslocation;//公司地址
    @Column(name="POSTCODE")
    private String postcode;//邮编地址

}
