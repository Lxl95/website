package com.xintian.dao;

import com.xintian.common.domain.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author caoyanpeng
 * @date 2022/10/26
 * @apiNote 用户留言
 */
public interface FeedbackDao extends JpaRepository<Feedback, String>, JpaSpecificationExecutor<Feedback> {


}
