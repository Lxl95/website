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
 * 政策法规类型 实体类
 */
@Entity
//@Table(name = "officialweb_policy")
@Table(name = "OFFICIALWEB_POLICY")
@Getter
@Setter
@Data
@ToString
@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class Policy implements Serializable {
    @Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(length = 32,name = "ID")
    private String id;//主键
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Column(name="CREATETIME")
    private Date createtime;//时间
    @Column(name="TITLE")
    private String title;//标题
    @Column(name="CONTENT")
    private String content;//内容
    @Column(name="TYPEID")
    private String typeid;//政策类型id
    @Column(name="TYPENAME")
    private String typename;//政策法规名称
    @Column(name="ISSHOW")
    private Integer isshow;//是否显示 1是(显示)  2否(不显示)

    /**
     * 附件地址
     */
    @Column(name="FILE_ADDR")
    private String fileAddr;
}
