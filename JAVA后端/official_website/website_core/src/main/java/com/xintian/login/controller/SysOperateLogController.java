package com.xintian.login.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.login.entity.SysOperateLog;
import com.xintian.login.service.SysOperateLogService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 操作日志-控制器
 */
@RestController
@RequestMapping("/ctpSysOperateLog")
@CrossOrigin(origins = "*", maxAge = 3600)
//@Api(tags = "操作日志-控制器")
@Slf4j
public class SysOperateLogController {
    @Autowired
    private SysOperateLogService sysOperateLogService;

    @GetMapping("/listPage")
//    @ApiOperation(value = "列表查询接口(分页)")
    public Result listPage(@RequestParam(defaultValue = "10") Integer pageSize,
                           @RequestParam(defaultValue = "1") Integer pageNum,
                           SysOperateLog sysOperateLog) {
        try {
            log.info(">>>>>>>>>>>>>>>>>操作日志：>>列表查询接口(分页)");
            Page page = PageHelper.startPage(pageNum, pageSize);
            List<SysOperateLog> sysOperateLogList = sysOperateLogService.operateListPage(sysOperateLog);
            return new Result(ResultCode.SUCCESS, new PageResult(page.getTotal(), sysOperateLogList));
        } catch (Exception e) {
            e.printStackTrace();
            return Result.ERROR();
        }
    }

    @GetMapping("/detail")
//    @ApiOperation(value = "详情接口")
    public Result detail(@RequestParam String id) {
        try {
            log.info(">>>>>>>>>>>>>>>>>操作日志：>>详情接口");
            return new Result(ResultCode.SUCCESS, sysOperateLogService.getById(id));
        } catch (Exception e) {
            e.printStackTrace();
            return Result.ERROR();
        }
    }
}
