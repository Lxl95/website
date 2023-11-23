package com.xintian.service.IMPL;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.xintian.common.domain.SysMenu;

import com.xintian.dao.SysMenuDao;
import com.xintian.login.base.BaseServiceImpl;
import com.xintian.login.entity.UserInfo;
import com.xintian.mapper.SysMenuMapper;
import com.xintian.service.SysMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author wt
 * @date 2023/11/10
 */
@Service
public class SysMenuServiceImpl extends BaseServiceImpl<SysMenuMapper, SysMenu> implements SysMenuService {
    @Autowired
    private SysMenuDao sysMenuDao;

    @Override
    public List<SysMenu> getAllMenu(SysMenu sysMenu) {
        QueryWrapper<SysMenu> wrapper = new QueryWrapper<>();
        if (sysMenu.getName()!= null) {//条件查询
            wrapper.like("NAME",sysMenu.getName());
        }
        if (sysMenu.getIsShow()!= null){
            wrapper.eq("IS_SHOW", sysMenu.getIsShow());
        }
        wrapper.select("ID","NAME","MENU_URL","IMAGE_PATH","IS_SHOW","SERIAL","MENU_TYPE").orderByAsc("SERIAL");
        return sysMenuDao.selectList(wrapper);
    }
}
