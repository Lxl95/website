package com.xintian.dao;

import com.xintian.common.domain.BusinessHandling;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author: yanyongpan
 * @description：
 *
 */

public interface BusinessHandlingDao extends JpaRepository<BusinessHandling,String>,JpaSpecificationExecutor<BusinessHandling> {

}
