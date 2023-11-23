package com.xintian.dao;

import com.xintian.common.domain.ColumnCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

/**
 * @author: yanyongpan
 * @description：
 *
 */

public interface ColumnCategoryDao extends JpaRepository<ColumnCategory,String>,JpaSpecificationExecutor<ColumnCategory> {
    List<ColumnCategory> findByIsnotice(Integer isnotice);

}
