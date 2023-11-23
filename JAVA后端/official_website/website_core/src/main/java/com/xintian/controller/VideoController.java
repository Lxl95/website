package com.xintian.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.xintian.common.domain.Video;
import com.xintian.common.domain.VideoVo;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.common.utils.UpDownFileUtil;
import com.xintian.common.utils.VideoUtil;
import com.xintian.service.IMPL.VideoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;


/**
 * 视频控制层
 * @author wt
 * @date 2023/7/11
 */
@CrossOrigin
@RestController
@RequestMapping("/video")
@Slf4j
public class VideoController {
    @Value("${videoPath}")
    String videoPath;
    @Autowired
    UpDownFileUtil upDownFileUtil;
    @Autowired
    VideoUtil videoUtil;
    @Autowired
    private VideoService videoService;

    /**
     * description:
     *  1 保存接口
     */
    @RequestMapping("/save")
    public Result save(@RequestBody Video video){
        log.info("进入：视频保存");
        Result responseBean = videoService.save(video);
        return responseBean;
    }


    /**
     * 分页查询
     * @return
     */
    @GetMapping("/queryAll")
    public Result queryAll(@RequestParam(defaultValue = "10") Integer pageSize,
                           @RequestParam(defaultValue = "1") Integer pageNum,
                           VideoVo video) {
        try {
            Page page = PageHelper.startPage(pageNum, pageSize);
            List<Video> list = videoService.queryAllVideos(video);
            return new Result(ResultCode.SUCCESS, new PageResult(page.getTotal(), list));
        } catch (Exception e) {
            e.printStackTrace();
            return Result.ERROR();
        }

    }

    /**
     * description:
     * 3 更新接口
     */
    @RequestMapping("/update")
    public Result update(@RequestBody Video video){
        Result result = videoService.update(video);
        return result;
    }

    /**
     * description:
     *  4 根据id 查询详情
     */
    @GetMapping("/findById")
    public Result findById(@RequestParam String id){
        Result result = videoService.findById(id);
        return result;
    }


    /**
     * description:
     * 5 删除接口
     */
    @GetMapping("/del")
    public Result del(@RequestParam String id){
        Result result = videoService.del(id);
        return result;
    }

    /**
     * description:
     * 5 删除接口
     */
    @GetMapping("/delByids")
    public Result delByids(@RequestBody List<String> ids){
        int i = videoService.delByids(ids);
        return new Result(ResultCode.SUCCESS,i);
    }
    /**
     * create by: yanyongpan
     * description:
     * 3 视频上传接口
     */
    @PostMapping("/videoUpload")
    public Result videoUpload(HttpServletRequest request, HttpServletResponse response, @RequestParam("file") MultipartFile file) throws IOException {
        log.info("进入:视频上传接口");
        Result responseBean = new Result();
        //上传音频
        Result result = videoUtil.fileUpload(file, responseBean, request,videoPath);
        return result;
    }

}
