package com.xintian.controller;

import com.xintian.common.domain.Activity;
import com.xintian.common.entity.Result;
import com.xintian.service.ActivityService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

/**
 * @author: yanyongpan
 * @description：
 * 水务新闻控制层
 */
//1.解决跨域
@CrossOrigin
@RestController
@RequestMapping("/activity")
@Slf4j
public class ActivityController {
    @Autowired
    ActivityService activityService;

    /**
     * create by: yanyongpan
     * description:
     *  1 保存接口
     */
    @RequestMapping("/save")
    public Result save(@RequestBody Activity activity){
        log.info("进入：官网活动保存接口");
        Result responseBean = activityService.save(activity);
        return responseBean;
    }

    /**
     * create by: yanyongpan
     * description:
     * 2 查询所有
     */
    @RequestMapping("/queryAll")
    public Result queryAll(){
        Result result = activityService.queryAll();
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    @GetMapping("/del")
    public Result del(String id){
        Result result = activityService.del(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    @RequestMapping("/update")
    public Result update(@RequestBody Activity activity){
        Result result = activityService.update(activity);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     *  5 根据id 查询详情
     */
    @RequestMapping("/findById")
    public Result findById(String id){
        Result result = activityService.findById(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 6 自定义条件查询并分页接口
     */
    @RequestMapping("/queryBy")
    public Result queryBy(@RequestBody Map map){
        Result result = activityService.queryBy(map);
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 7 是否启用活动接口   //活动是否启用 1启用 2关闭
     */
    @RequestMapping("/isenable")
    public Result isenable(String id,Integer isenable){
        Result result = activityService.isenable(id,isenable);
        return result;
    }

}
