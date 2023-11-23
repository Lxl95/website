package com.xintian.dao;


import com.xintian.common.domain.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface VideoDao extends JpaRepository<Video,String>, JpaSpecificationExecutor<Video> {

}
