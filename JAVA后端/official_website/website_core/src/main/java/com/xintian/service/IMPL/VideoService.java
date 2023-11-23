package com.xintian.service.IMPL;

import com.xintian.common.domain.Video;
import com.xintian.common.domain.VideoVo;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.dao.VideoDao;
import com.xintian.dao.VideoMapper;
import it.sauronsoftware.jave.Encoder;
import it.sauronsoftware.jave.MultimediaInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.nio.channels.FileChannel;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 视频服务层
 *
 * @author wt
 * @date 2023/7/11
 */
@Service
@Slf4j
public class VideoService {
    @Autowired
    private VideoDao videoDao;
    @Autowired
    private VideoMapper videoMapper;

    /**
     * create by: yanyongpan
     * description:
     * 1 保存
     */

    public Result save(Video video) {
        video.setCreatDate(new Date());
        Video save = videoDao.save(video);
        return new Result(ResultCode.SUCCESS, save);
    }

    /**
     * description:
     * 2 查询
     */
    public List<Video> queryAllVideos(VideoVo video) {
        List<Video> videos = videoMapper.queryAllVideos(video);
        return videos;
    }
//    /**
//     * description:
//     * 2 查询所有视频
//     */
//    public Result queryAll(Video video) {
//        List<Video> all = videoDao.findAll(new Sort(new Sort.Order(Sort.Direction.ASC, "sort")));
//        return new Result(ResultCode.SUCCESS, all);
//    }

    /**
     * create by: yanyongpan
     * description:
     * 3 更新接口
     */
    public Result update(Video video) {
        Optional<Video> byId = videoDao.findById(video.getId());
        if (byId.isPresent()) {
            Video target = byId.get();
            target.setIsIntroduce(video.getIsIntroduce());
            target.setResolution(video.getResolution());
            target.setVideoTitle(video.getVideoTitle());
            target.setVpath(video.getVpath());
            target.setPpath(video.getPpath());
            target.setIsPublicize(video.getIsPublicize());
            target.setVsize(video.getVsize());
            target.setVformat(video.getVformat());
            target.setResolution(video.getResolution());
            target.setState(video.getState());
            target.setSort(video.getSort());
            Video save = videoDao.save(target);
            return new Result(ResultCode.SUCCESS, save);
        }
        return new Result(ResultCode.FAIL);
    }


    /**
     * create by: yanyongpan
     * description:
     * 4 根据id 查询详情
     */
    public Result findById(String id) {
        Optional<Video> byId = videoDao.findById(id);
        if (byId.isPresent()) {
            Video video = byId.get();
            return new Result(ResultCode.SUCCESS, video);
        }
        return new Result(ResultCode.FAIL, "查询结果为空!");
    }

    /**
     * description:
     * 5 删除接口
     */
    public Result del(String id) {
        videoDao.deleteById(id);
        return new Result(ResultCode.SUCCESS);
    }

    /**
     * description:
     * 5 批量删除接口
     */
    public int delByids(List<String> ids) {
        return videoMapper.deleteByIds(ids);
    }

}
