package com.xintian.dao;

import com.xintian.common.domain.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author: yanyongpan
 * @description：
 *
 */

public interface ActivityDao extends JpaRepository<Activity,String>,JpaSpecificationExecutor<Activity> {

}
