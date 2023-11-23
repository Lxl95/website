package com.xintian.dao;

import com.xintian.common.domain.NoticeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author: yanyongpan
 * @description：
 *
 */

public interface NoticeTypeDao extends JpaRepository<NoticeType,String>,JpaSpecificationExecutor<NoticeType> {

}
