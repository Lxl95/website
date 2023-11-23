package com.xintian.service;
import com.xintian.common.domain.SysMenu;
import com.xintian.login.base.BaseService;
import org.springframework.stereotype.Service;
import java.util.List;


/**
 * 菜单模块管理服务层
 * @author wt
 * @date 2023/11/9
 */
@Service
public interface SysMenuService extends BaseService<SysMenu> {

    /**
     * 分页查询
     */
    List<SysMenu> getAllMenu(SysMenu sysMenu);


}
