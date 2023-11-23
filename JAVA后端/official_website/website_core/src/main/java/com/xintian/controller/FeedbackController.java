package com.xintian.controller;

import com.xintian.common.domain.Feedback;
import com.xintian.common.domain.Notice;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.service.FeedbackService;
import com.xintian.service.NoticeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author: caoyp
 * @description：
 * 用户留言控制层
 */
@CrossOrigin
@RestController
@RequestMapping("/feedback")
@Slf4j
public class FeedbackController {
    @Autowired
    FeedbackService feedbackService;

    /**
     * create by: caoyp
     * description:
     *  1 保存接口
     */
    @RequestMapping("/save")
    public Result save(@RequestBody Feedback feedback){
        log.info("进入：用户留言保存接口");
        Result responseBean = feedbackService.save(feedback);
        return responseBean;
    }

    /**
     * create by: caoyp
     * description:
     * 2 查询所有
     */
    @RequestMapping("/findAll")
    public Result findAll(){
        Result result = feedbackService.findAll();
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 6 自定义条件查询并分页接口
     */
    @RequestMapping("/queryBy")
    public Result queryBy(@RequestBody Map map){
        Result result = feedbackService.queryBy(map);
        return result;
    }



    /**
     * create by: caoyp
     * description:
     * 3 删除接口
     */
    @GetMapping("/del")
    public Result del(String id){
        Result result = feedbackService.delete(id);
        return result;
    }


    /**
     * create by: caoyp
     * description:
     *  5 根据id 查询详情
     */
    @RequestMapping("/findById")
    public Result findById(String id){
        Result result = feedbackService.findById(id);
        return result;
    }
}
