package com.xintian.dao;

import com.xintian.common.domain.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author: yanyongpan
 * @description：
 *
 */

public interface PolicyDao extends JpaRepository<Policy,String>,JpaSpecificationExecutor<Policy> {

}
