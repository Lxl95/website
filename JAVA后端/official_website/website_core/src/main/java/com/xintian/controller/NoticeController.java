package com.xintian.controller;

import com.xintian.common.domain.Notice;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.service.NoticeService;
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
@RequestMapping("/notice")
@Slf4j
public class NoticeController {
    @Autowired
    NoticeService noticeService;

    /**
     * create by: yanyongpan
     * description:
     *  1 保存接口
     */
    @RequestMapping("/save")
    public Result save(@RequestBody Notice notice){
        log.info("进入：官网活动保存接口");
        Result responseBean = noticeService.save(notice);
        return responseBean;
    }

    /**
     * create by: yanyongpan
     * description:
     * 2 查询所有
     */
    @RequestMapping("/queryAll")
    public Result queryAll(){
        Result result = noticeService.queryAll();
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    @GetMapping("/del")
    public Result del(String id){
        Result result = noticeService.del(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    @RequestMapping("/update")
    public Result update(@RequestBody Notice notice){
        Result result = noticeService.update(notice);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     *  5 根据id 查询详情
     */
    @RequestMapping("/findById")
    public Result findById(String id){
        Result result = noticeService.findById(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 6 自定义条件查询并分页接口
     */
    @RequestMapping("/queryBy")
    public Result queryBy(@RequestBody Map map){
        Result result = noticeService.queryBy(map);
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 7  公告是否展示
     */
    @RequestMapping("/isshow")
    public Result isshow(String id,Integer isshow){
        if (id == null || isshow == null) {
            return new Result(ResultCode.FAIL,"所需参数为空!");
        }
        Result result = noticeService.isshow(id,isshow);
        return result;
    }


}
