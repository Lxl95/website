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
 * 视频实体类
 * @author wt
 * @date 2023/7/11
 */
@Entity
@Table(name = "OFFICIALWEB_VIDEO")
@Getter
@Setter
@Data
@ToString
@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class Video implements Serializable {
    @Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(length = 32,name = "ID")
    private String id;//主键

    @Column(name="VIDEOTITLE")
    private String videoTitle;//视频标题

    @Column(name="VPATH")
    private String vpath;//视频存储路径

    @Column(name="PPATH")
    private String ppath;//预览图存储路径

    @Column(name="ISINTRODUCE")
    private String isIntroduce;//是否公司简介视频（1：是2：否）

    @Column(name="ISPUBLICIZE")
    private String isPublicize;//是否是宣传视频（1：是2：否）

    @Column(name="VSIZE")
    private String vsize;//视频大小

    @Column(name="VFORMAT")
    private String vformat;//视频格式

    @Column(name="RESOLUTION")
    private String resolution;//分辨率

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Column(name="CREATDATE")
    private Date creatDate;//创建时间

    @Column(name="STATE")
    private Integer state;//状态（1：启用2：禁用）

    @Column(name="SORT")
    private String sort;//排序编号 序号越小越靠前


}
