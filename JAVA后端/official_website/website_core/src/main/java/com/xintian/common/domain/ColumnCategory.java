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
import java.util.List;

/**
 * @author: yanyongpan
 * @description：
 * 栏目类别 实体类
 */
@Entity
//@Table(name = "officialweb_column_category")
@Table(name = "OFFICIALWEB_COLUMN_CATEGORY")
@Getter
@Setter
@Data
@ToString
@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class ColumnCategory implements Serializable {
    @Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(length = 32,name = "ID")
    private String id;//主键
    @Column(name="CREATETIME")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date createtime;//时间
    @Column(name="NAME")
    private String name;//类别名称
    @Column(name="ISSHOW")
    private Integer isshow;//是否展示  1展示 2不展示
    @Column(name="ISJUMP")
    private Integer isjump;//是否跳转url  1跳转  2不跳转
    @Column(name="URLPATH")
    private String urlpath;//url链接
    @Column(name="SORT")
    private Integer sort;//排序编号 序号越小越靠前
    @Column(name="PID")
    private String pid;//父id
    @Column(name="BOTTOMSTATE")
    private Integer bottomstate;//底部推荐状态
    @Column(name="ISTABULATION")
    private Integer istabulation;//是否列表   1列表 2详情页
    @Column(name="ISNOTICE")
    private Integer isnotice;//是否是公告类型  1是 2否

    @Transient//实体类中字段不与数据库表映射
    List<ColumnCategory> child;//该节点的子节点对象

}
