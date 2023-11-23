package com.xintian.login.base;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.toolkit.ObjectUtils;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xintian.common.tokenserver.YTHUser;
import com.xintian.login.entity.BaseEntity;
import com.xintian.login.utils.AuthUtil;
import com.xintian.login.utils.DateUtils;
import java.util.Date;
import org.springframework.validation.annotation.Validated;

@Validated
public class BaseServiceImpl<M extends BaseMapper<T>, T extends BaseEntity> extends ServiceImpl<M, T> implements BaseService<T> {
    public BaseServiceImpl(){
    }

    public boolean save(T entity) {
        YTHUser user = AuthUtil.getCurrentUser();
        if (user != null) {
            entity.setCreateUser(user.getIAdminID());
            entity.setLastUpdateUser(user.getIAdminID());
        }

        Date now = new Date();
        entity.setCreateTime(now);
        entity.setLastUpdateTime(now);

        return super.save(entity);
    }

    public boolean saveOrUpdate(T entity) {
        YTHUser user = AuthUtil.getCurrentUser();
        if (user != null) {
            if(StringUtils.isBlank(entity.getCreateUser())){
                entity.setCreateUser(user.getIAdminID());
            }
            entity.setLastUpdateUser(user.getIAdminID());
        }
        Date now = new Date();
        if(ObjectUtils.isEmpty(entity.getCreateTime())){
            entity.setCreateTime(now);
        }
        entity.setLastUpdateTime(now);

        return super.saveOrUpdate(entity);
    }

    public boolean updateById(T entity) {
        YTHUser user = AuthUtil.getCurrentUser();
        if (user != null) {
            entity.setLastUpdateUser(user.getIAdminID());
        }

        entity.setLastUpdateTime(DateUtils.getNowDate());
        return super.updateById(entity);
    }

}
