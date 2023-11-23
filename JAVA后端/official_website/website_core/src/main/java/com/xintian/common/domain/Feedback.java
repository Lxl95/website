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
 * @author caoyanpeng
 * @date 2022/10/26
 * @apiNote 用户反馈 实体类
 */
@Entity
@Table(name = "OFFICIALWEB_FEEDBACK")
@Getter
@Setter
@Data
@ToString
@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public class Feedback implements Serializable {

    /**
     * 主键
     */
    @Id
    @GeneratedValue(generator = "jpa-uuid")
    @Column(length = 32,name = "ID")
    private String id;

    /**
     * 留言名称
     */
    @Column(name="FEEDBACK_NAME")
    private String feedbackName;

    /**
     * 留言手机
     */
    @Column(name="FEEDBACK_PHONE")
    private String feedbackPhone;

    /**
     * 邮箱
     */
    @Column(name="EMAIL")
    private String email;

    /**
     * 留言内容
     */
    @Column(name="CONTENT")
    private String content;

    /**
     * 留言状态（状态（0-未处理，1-已处理，2-暂不处理））
     */
    @Column(name="STATUS")
    private String status;



    /**
     * 留言时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Column(name="CREATE_TIME")
    private Date createTime;
}
