package com.xintian.dao;

import com.xintian.common.domain.LoopPic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * @author: yanyongpan
 * @description：
 *
 */

public interface LoopPicDao extends JpaRepository<LoopPic,String>,JpaSpecificationExecutor<LoopPic> {

}
