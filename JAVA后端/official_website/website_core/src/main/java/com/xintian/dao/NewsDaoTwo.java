package com.xintian.dao;

import com.xintian.common.domain.News;
import com.xintian.common.domain.NewsDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author wt
 * @date 2023/7/24
 */
public interface NewsDaoTwo extends JpaRepository<NewsDto,String>, JpaSpecificationExecutor<NewsDto> {

}
