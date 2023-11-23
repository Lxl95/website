package com.xintian.dao;

import com.xintian.common.domain.PolicyType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author: yanyongpan
 * @description：
 *
 */

public interface PolicyTypeDao extends JpaRepository<PolicyType,String>,JpaSpecificationExecutor<PolicyType> {

}
