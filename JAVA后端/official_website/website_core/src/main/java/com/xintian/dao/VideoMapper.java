package com.xintian.dao;

import com.xintian.common.domain.Video;
import com.xintian.common.domain.VideoVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface VideoMapper {

    /**
     * 查询所有记录
     *
     * @return 返回集合，没有返回空List
     */
    List<Video> queryAllVideos(VideoVo video);

    int deleteByIds(List<String> ids);
}
