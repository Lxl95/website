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
 * @Description
 */
    @Entity
    //@Table(name = "officialweb_loop_pic")
    @Table(name = "OFFICIALWEB_LOOP_PIC")
    @Getter
    @Setter
    @Data
    @ToString
    @GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class LoopPic implements Serializable {
    @Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(length = 32,name="ID")
    private String id;//主键
    @Column(name="CREATETIME")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date createtime;//时间
    @Column(name="NAME")
    private String name;//名称
    @Column(name="ISSHOW")
    private Integer isshow;//是否设置为轮播图展示  1展示 2不展示
    @Column(name="URLPATH")
    private String urlpath;//url链接
    @Column(name="SORT")
    private Integer sort;//排序编号 序号越小越靠前


}
