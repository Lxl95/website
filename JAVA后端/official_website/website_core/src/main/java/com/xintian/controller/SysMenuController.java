package com.xintian.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.xintian.common.domain.SysMenu;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.service.SysMenuService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *
 * @author wt
 * @date 2023/11/10
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/SysMenu")
@Api(tags = "模块管理")
@Slf4j
public class SysMenuController {

    @Autowired
    private SysMenuService sysMenuService;

    @GetMapping("/list")
    @ApiOperation(value = "模块分页查询")
    public Result list(@RequestParam(defaultValue = "10") Integer pageSize,
                       @RequestParam(defaultValue = "1") Integer pageNum,
                       SysMenu sysMenu) {
        Page page = PageHelper.startPage(pageNum, pageSize);
        List<SysMenu> list = sysMenuService.getAllMenu(sysMenu);
        return new Result(ResultCode.SUCCESS, new PageResult(page.getTotal(), list));
    }

    @GetMapping("/getById")
    @ApiOperation(value = "根据id查询")
    public Result getById(SysMenu sysMenu) {
        SysMenu byId = sysMenuService.getById(sysMenu);
        return new Result(ResultCode.SUCCESS, byId);
    }

    /**
     * 模型新增
     * @param sysMenu
     * @return
     */
    @PostMapping("/insert")
    @ApiOperation(value = "模块新增")
    public Result insert(@RequestBody SysMenu sysMenu) {
        return new Result(ResultCode.SUCCESS, sysMenuService.saveOrUpdate(sysMenu));

    }

    /**
     * description:
     * 3 更新接口
     */
    @ApiOperation(value = "模块更新")
    @PostMapping("/update")
    public Result update(@RequestBody SysMenu sysMenu){
        boolean b = sysMenuService.updateById(sysMenu);
        return new Result(ResultCode.SUCCESS, b);
    }


    /**
     * description:
     * 5 删除接口
     */
    @GetMapping("/del")
    @ApiOperation(value = "模块删除")
    public Result del(@RequestParam String id){
        boolean b = sysMenuService.removeById(id);
        return new Result(ResultCode.SUCCESS, b);
    }


//    /**
//     * 根据id批量删除场景信息
//     * @param ids
//     * @return
//     */
//    @GetMapping ("/deleteBatch")
//    @ApiOperation(value = "根据模型id批量删除")
//    public Result deleteBatch(@RequestBody List<String> ids) {
//        return new Result(ResultCode.SUCCESS, modelService.removeByIds(ids));
//    }



}
