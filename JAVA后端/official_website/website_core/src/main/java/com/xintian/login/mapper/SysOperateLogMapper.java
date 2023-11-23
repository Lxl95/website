package com.xintian.login.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.xintian.login.entity.SysOperateLog;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 操作日志记录 Mapper 接口
 *
 * @author orcl
 * @since 2023-03-20
 */
@Mapper
public interface SysOperateLogMapper extends BaseMapper<SysOperateLog> {


    /** 列表 */
    List<SysOperateLog> operateList(SysOperateLog sysOperateLog);
}
