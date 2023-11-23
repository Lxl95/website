package com.xintian.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import com.xintian.annotation.BusinessType;
import com.xintian.annotation.Log;
import com.xintian.common.domain.SysOperLog;
import com.xintian.common.entity.AjaxResult;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.login.base.BaseController;
import com.xintian.service.ISysOperLogService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 操作日志记录
 *
 * @author ruoyi
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@Slf4j
@RestController
@RequestMapping("/monitor/operlog")
@Api(tags = "操作日志")
public class SysOperlogController extends BaseController {
    @Autowired
    private ISysOperLogService operLogService;

    @GetMapping("/list")
    @ApiOperation(value = "日志分页查询")
    public Result list(@RequestParam(defaultValue = "10") Integer pageSize,
                       @RequestParam(defaultValue = "1") Integer pageNum,
                       SysOperLog operLog) {
        Page page = PageHelper.startPage(pageNum, pageSize);
        List<SysOperLog> list = operLogService.selectOperLogList(operLog);
        return new Result(ResultCode.SUCCESS, new PageResult(page.getTotal(), list));
    }

//    @Log(title = "操作日志", businessType = BusinessType.EXPORT)
//    @PostMapping("/export")
//    public void export(HttpServletResponse response, SysOperLog operLog)
//    {
//        List<SysOperLog> list = operLogService.selectOperLogList(operLog);
//        ExcelUtil<SysOperLog> util = new ExcelUtil<SysOperLog>(SysOperLog.class);
//        util.exportExcel(response, list, "操作日志");
//    }

//    @Log(title = "操作日志", businessType = BusinessType.DELETE)
//    @DeleteMapping("/{operIds}")
//    public AjaxResult remove(@PathVariable Long[] operIds) {
//        return toAjax(operLogService.deleteOperLogByIds(operIds));
//    }

    @Log(title = "操作日志", businessType = BusinessType.CLEAN)
    @DeleteMapping("/clean")
    public AjaxResult clean() {
        operLogService.cleanOperLog();
        return AjaxResult.success();
    }
}
