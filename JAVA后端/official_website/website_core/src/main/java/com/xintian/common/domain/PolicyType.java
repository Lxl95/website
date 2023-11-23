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
//@Table(name = "officialweb_policy_type")
@Table(name = "OFFICIALWEB_POLICY_TYPE")
@Getter
@Setter
@Data
@ToString
@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class PolicyType implements Serializable {
    @Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(length = 32,name = "ID")
    private String id;//主键
    @Column(name="CREATETIME")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date createtime;//时间
    @Column(name="TYPENAME")
    private String typename;//类型名称
    @Column(name="ICONACTIVE")
    private String iconactive;//效果图标
    @Column(name="ICON")
    private String icon;//图标


}
