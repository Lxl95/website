package com.xintian.dao;

import com.xintian.common.domain.SystemInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author: yanyongpan
 * @description：
 *
 */

public interface SystemInfoDao extends JpaRepository<SystemInfo,String>,JpaSpecificationExecutor<SystemInfo> {

}
