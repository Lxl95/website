package com.xintian.login.service.impl;

import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.xintian.login.base.BaseServiceImpl;
import com.xintian.login.entity.SysOperateLog;
import com.xintian.login.mapper.SysOperateLogMapper;
import com.xintian.login.service.SysOperateLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

/**
 * 操作日志记录 服务实现类
 *
 * @author orcl
 * @since 2023-03-20
 */
@Service
public class SysOperateLogServiceImpl extends BaseServiceImpl<SysOperateLogMapper, SysOperateLog> implements SysOperateLogService {

    @Autowired
    private SysOperateLogMapper sysOperateLogMapper;

    public List<SysOperateLog> operateListPage(SysOperateLog sysOperateLog){
        List<SysOperateLog> sysOperateLogList = sysOperateLogMapper.operateList(sysOperateLog);
        if(CollectionUtils.isEmpty(sysOperateLogList)){
            return Collections.emptyList();
        }
        return sysOperateLogList;
    }

}
