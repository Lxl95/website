package com.xintian.controller;

import com.xintian.common.domain.LoopPic;
import com.xintian.common.entity.Result;
import com.xintian.service.LoopPicService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author: yanyongpan
 * @description：
 * 水务新闻控制层
 */
//1.解决跨域
@CrossOrigin
@RestController
@RequestMapping("/looppic")
@Slf4j
public class LoopPicController {
    @Autowired
    LoopPicService loopPicService;

    /**
     * create by: yanyongpan
     * description:
     *  1 保存接口
     */
    @RequestMapping("/save")
    public Result save(@RequestBody LoopPic loopPic){
        log.info("进入：保存项目案例信息接口");
        Result responseBean = loopPicService.save(loopPic);
        return responseBean;
    }

    /**
     * create by: yanyongpan
     * description:
     * 2 查询所有
     */
    @RequestMapping("/queryAll")
    public Result queryAll(){
        Result result = loopPicService.queryAll();
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    @GetMapping("/del")
    public Result del(String id){
        Result result = loopPicService.del(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    @RequestMapping("/update")
    public Result update(@RequestBody LoopPic loopPic){
        Result result = loopPicService.update(loopPic);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     *  5 根据id 查询详情
     */
    @RequestMapping("/findById")
    public Result findById(String id){
        Result result = loopPicService.findById(id);
        return result;
    }


}
