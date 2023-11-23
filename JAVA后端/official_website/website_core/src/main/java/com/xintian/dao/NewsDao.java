package com.xintian.dao;

import com.xintian.common.domain.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author: yanyongpan
 * @description：
 *
 */

public interface NewsDao extends JpaRepository<News,String>,JpaSpecificationExecutor<News> {

}
