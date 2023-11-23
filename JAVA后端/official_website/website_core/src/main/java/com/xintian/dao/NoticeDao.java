package com.xintian.dao;

import com.xintian.common.domain.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author: yanyongpan
 * @description：
 *
 */

public interface NoticeDao extends JpaRepository<Notice,String>,JpaSpecificationExecutor<Notice> {

}
