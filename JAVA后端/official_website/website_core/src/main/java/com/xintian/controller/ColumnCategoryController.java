package com.xintian.controller;

import com.xintian.common.domain.ColumnCategory;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.service.IMPL.ColumnCategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;


/**
 * @author: yanyongpan
 * @description：
 * 水务新闻控制层
 */
//1.解决跨域
@CrossOrigin
@RestController
@RequestMapping("/columnCategory")
@Slf4j
public class ColumnCategoryController {
    @Autowired
    ColumnCategoryService columnCategoryService;

    /**
     * create by: yanyongpan
     * description:
     * 1 保存接口
     */
    @RequestMapping("/save")
    public Result save(@RequestBody ColumnCategory columnCategory){
        log.info("进入：保存项目案例信息接口");
        Result responseBean = columnCategoryService.save(columnCategory);
        return responseBean;
    }

    /**
     * create by: yanyongpan
     * description:
     * 2 查询接口
     */
    @RequestMapping("/queryAll")
    public Result queryBy(){
        Result result = columnCategoryService.queryAll();
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    @RequestMapping("/del")
    public Result del(String id){
        Result result = columnCategoryService.del(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    @RequestMapping("/update")
    public Result update(@RequestBody ColumnCategory category){
        Result result = columnCategoryService.update(category);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 5 根据id查询详情
     */
    @RequestMapping("/findById")
    public Result findById(String id){
        Result result = columnCategoryService.findById(id);
        return result;
    }


    /**
     * create by: yanyongpan
     * description:
     * 6.查询所有的栏目类别树
     *
     */
    @RequestMapping(value="/tree/list")
    public Result findAllOrgnTree(){
        log.info("进入：查询所有的菜单树接口");
        List<ColumnCategory> menuNodeList = columnCategoryService.findOrgnNodeList();
        System.out.println(menuNodeList);
        return new Result(ResultCode.SUCCESS,menuNodeList);
    }

    /**
     * create by: yanyongpan
     * description:
     * 7 自定义条件查询并分页接口
     */
    @RequestMapping("/queryBy")
    public Result queryBy(@RequestBody Map map){
        List<ColumnCategory> result = columnCategoryService.queryBy(map);
        return new Result(ResultCode.SUCCESS,result);
    }

    /**
     * create by: yanyongpan
     * description:
     * 8 查询是公告类型的栏目类别 接口
     */
    @RequestMapping("/queryNotice")
    public Result queryNotice(Integer isnotice){
        if (isnotice == null || isnotice.equals("")) {
            return new Result(ResultCode.FAIL,"参数不能为空!");
        }
        Result result = columnCategoryService.queryNotice(isnotice);
        return new Result(ResultCode.SUCCESS,result);
    }




}
