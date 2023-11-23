package com.xintian.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.xintian.common.domain.SysMenu;
import org.apache.ibatis.annotations.Mapper;


/**
 * @author wt
 * @date 2023/11/9
 */
@Mapper
public interface SysMenuDao  extends BaseMapper<SysMenu> {
}
