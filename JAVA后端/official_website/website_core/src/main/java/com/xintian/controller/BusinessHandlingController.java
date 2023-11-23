package com.xintian.controller;

import com.xintian.common.domain.BusinessHandling;
import com.xintian.common.entity.Result;
import com.xintian.service.IMPL.BusinessHandlingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author: yanyongpan
 * @description：
 * 业务办理控制层
 */
//1.解决跨域
@CrossOrigin
@RestController
@RequestMapping("/businessHandling")
@Slf4j
public class BusinessHandlingController {
    @Autowired
    BusinessHandlingService businessHandlingService;

    /**
     * create by: yanyongpan
     * description:
     *  1 保存接口
     */
    @RequestMapping("/save")
    public Result save(@RequestBody BusinessHandling handling){
        log.info("进入：官网活动保存接口");
        Result responseBean = businessHandlingService.save(handling);
        return responseBean;
    }

    /**
     * create by: yanyongpan
     * description:
     * 2 查询所有
     */
    @RequestMapping("/queryAll")
    public Result queryAll(){
        Result result = businessHandlingService.queryAll();
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    @GetMapping("/del")
    public Result del(String id){
        Result result = businessHandlingService.del(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    @RequestMapping("/update")
    public Result update(@RequestBody BusinessHandling handling){
        Result result = businessHandlingService.update(handling);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     *  5 根据id 查询详情
     */
    @RequestMapping("/findById")
    public Result findById(String id){
        Result result = businessHandlingService.findById(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 6 自定义条件查询并分页接口
     */
    @RequestMapping("/queryBy")
    public Result queryBy(@RequestBody Map map){

        Result result = businessHandlingService.queryBy(map);
        return result;
    }



    /**
     * create by: yanyongpan
     * description:
     * 7 是否展示   //是否显示 1是(显示)  2否(不显示)
     */
    @RequestMapping("/isshow")
    public Result isshow(String id,Integer isshow){
        Result result = businessHandlingService.isshow(id,isshow);
        return result;
    }


}
