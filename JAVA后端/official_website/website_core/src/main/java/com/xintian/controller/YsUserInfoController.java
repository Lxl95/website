package com.xintian.controller;

import com.xintian.common.domain.TYsuserinfoDto;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.service.IMPL.YsUserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 营收用户Controller
 * @author wt
 * @date 2023/9/25
 */
@CrossOrigin
@RestController
@RequestMapping("/ysUser")
@Slf4j
@Api(tags = "绑定用户相关")
public class YsUserInfoController {
    @Autowired
    private YsUserInfoService ysUserInfoService;
    /**
     * description:
     *  1 新增
     */
    @ApiOperation(value = "新增")
    @PostMapping("/save")
    public Result save(@RequestBody TYsuserinfoDto tYsuserinfoDtodeo){
        log.info("进入：新增-营收用户号");
        int i = ysUserInfoService.insertBatch(tYsuserinfoDtodeo);
        return new Result(ResultCode.SUCCESS, i);
    }

    /**
     * description:
     *  2 根据手机号查询营收户号
     */
    @ApiOperation(value = "根据手机号查询营收户号")
    @PostMapping("/selectByNumber")
    public Result selectByNumber(@RequestBody TYsuserinfoDto tYsuserinfoDtodeo){
        log.info("进入：营收户号查询");
        TYsuserinfoDto ysCode = ysUserInfoService.getYsCode(tYsuserinfoDtodeo);
        return new Result(ResultCode.SUCCESS, ysCode);
    }

    /**
     * description:
     *  3 根据id删除
     */
    @ApiOperation(value = "根据手机号删除")
    @PostMapping("/deleteById")
    public Result deleteById(@RequestBody TYsuserinfoDto tYsuserinfoDtodeo){
        log.info("进入：根据手机号删除");
        int i = ysUserInfoService.deleteById(tYsuserinfoDtodeo);
        return new Result(ResultCode.SUCCESS, i);
    }
}
