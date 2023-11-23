package com.xintian.login.service;


import com.xintian.login.base.BaseService;
import com.xintian.login.entity.SysOperateLog;

import java.util.List;

/**
 * 操作日志记录 服务类
 *
 * @author orcl
 * @since 2023-03-20
 */
public interface SysOperateLogService extends BaseService<SysOperateLog> {



    /** 分页列表 */
    List<SysOperateLog> operateListPage(SysOperateLog sysOperateLog);
}
