package com.xintian.controller;

import com.xintian.common.domain.PolicyType;
import com.xintian.common.entity.Result;
import com.xintian.service.PolicyTypeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

/**
 * @author: yanyongpan
 * @description：
 * 政策法规类型控制层
 */
//1.解决跨域
@CrossOrigin
@RestController
@RequestMapping("/policeType")
@Slf4j
public class PolicyTypeController {
    @Autowired
    PolicyTypeService policyTypeService;

    /**
     * create by: yanyongpan
     * description:
     *  1 保存接口
     */
    @RequestMapping("/save")
    public Result save(@RequestBody PolicyType type){
        log.info("进入：官网活动保存接口");
        Result responseBean = policyTypeService.save(type);
        return responseBean;
    }

    /**
     * create by: yanyongpan
     * description:
     * 2 查询所有
     */
    @RequestMapping("/queryAll")
    public Result queryAll(){
        Result result = policyTypeService.queryAll();
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    @GetMapping("/del")
    public Result del(String id){
        Result result = policyTypeService.del(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    @RequestMapping("/update")
    public Result update(@RequestBody PolicyType type){
        Result result = policyTypeService.update(type);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     *  5 根据id 查询详情
     */
    @RequestMapping("/findById")
    public Result findById(String id){
        Result result = policyTypeService.findById(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 6 自定义条件查询并分页接口
     */
    @RequestMapping("/queryBy")
    public Result queryBy(@RequestBody Map map){
        Result result = policyTypeService.queryBy(map);
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 7 是否启用活动接口   //活动是否启用 1启用 2关闭
     */
//    @RequestMapping("/isenable")
//    public Result isenable(Integer id){
//        Result result = policyTypeService.isenable(id);
//        return result;
//    }

}
