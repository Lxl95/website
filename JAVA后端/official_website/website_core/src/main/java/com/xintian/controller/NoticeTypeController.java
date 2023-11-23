package com.xintian.controller;

import com.xintian.common.domain.NoticeType;
import com.xintian.common.entity.Result;
import com.xintian.service.NoticeTypeService;
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
@RequestMapping("/noticeType")
@Slf4j
public class NoticeTypeController {
    @Autowired
    NoticeTypeService noticeTypeService;

    /**
     * create by: yanyongpan
     * description:
     *  1 保存接口
     */
    @RequestMapping("/save")
    public Result save(@RequestBody NoticeType noticeType){
        log.info("进入：官网活动保存接口");
        Result responseBean = noticeTypeService.save(noticeType);
        return responseBean;
    }

    /**
     * create by: yanyongpan
     * description:
     * 2 查询所有
     */
    @RequestMapping("/queryAll")
    public Result queryAll(){
        Result result = noticeTypeService.queryAll();
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    @GetMapping("/del")
    public Result del(String id){
        Result result = noticeTypeService.del(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    @RequestMapping("/update")
    public Result update(@RequestBody NoticeType noticeType){
        Result result = noticeTypeService.update(noticeType);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     *  5 根据id 查询详情
     */
    @RequestMapping("/findById")
    public Result findById(String id){
        Result result = noticeTypeService.findById(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 6 自定义条件查询并分页接口
     */
    @RequestMapping("/queryBy")
    public Result queryBy(@RequestBody Map map){
        Result result = noticeTypeService.queryBy(map);
        return result;
    }



}
