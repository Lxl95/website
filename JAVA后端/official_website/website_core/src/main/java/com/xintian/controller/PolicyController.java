package com.xintian.controller;

import com.xintian.common.domain.Activity;
import com.xintian.common.domain.Policy;
import com.xintian.common.entity.Result;
import com.xintian.service.ActivityService;
import com.xintian.service.PolicyService;
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
@RequestMapping("/police")
@Slf4j
public class PolicyController {
    @Autowired
    PolicyService policyService;

    /**
     * create by: yanyongpan
     * description:
     *  1 保存接口
     */
    @RequestMapping("/save")
    public Result save(@RequestBody Policy policy){
        log.info("进入：官网活动保存接口");
        Result responseBean = policyService.save(policy);
        return responseBean;
    }

    /**
     * create by: yanyongpan
     * description:
     * 2 查询所有
     */
    @RequestMapping("/queryAll")
    public Result queryAll(){
        Result result = policyService.queryAll();
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    @GetMapping("/del")
    public Result del(String id){
        Result result = policyService.del(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    @RequestMapping("/update")
    public Result update(@RequestBody Policy policy){
        Result result = policyService.update(policy);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     *  5 根据id 查询详情
     */
    @RequestMapping("/findById")
    public Result findById(String id){
        Result result = policyService.findById(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 6 自定义条件查询并分页接口
     */
    @RequestMapping("/queryBy")
    public Result queryBy(@RequestBody Map map){
        Result result = policyService.queryBy(map);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 7 是否展示   //是否显示 1是(显示)  2否(不显示)
     */
    @RequestMapping("/isshow")
    public Result isshow(String id,Integer isshow){
        Result result = policyService.isshow(id,isshow);
        return result;
    }


}
