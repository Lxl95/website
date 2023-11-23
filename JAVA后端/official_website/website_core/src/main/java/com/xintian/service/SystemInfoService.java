package com.xintian.service;

import com.xintian.common.domain.SystemInfo;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.dao.SystemInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * @author: yanyongpan
 * @description：
 * 水务新闻服务层
 */
@Service
public class SystemInfoService {

    @Autowired
    SystemInfoDao systemInfoDao;

    /**
     * create by: yanyongpan
     * description:      XtLibrary
     * 1 保存
     */

    public Result save(SystemInfo info){
        info.setCreatetime(new Date());
        SystemInfo save = systemInfoDao.save(info);
        return new Result(ResultCode.SUCCESS, save);
    }

    /**
     * create by: yanyongpan
     * description:
     *  2 查询所有
     *
     */
    public Result queryAll(){
        List<SystemInfo> all = systemInfoDao.findAll();
        if (all.size()==0) {
            return new Result(ResultCode.SUCCESS,new SystemInfo());
        }
        return new Result(ResultCode.SUCCESS,all);

    }

    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    public Result del(String id){
        systemInfoDao.deleteById(id);
        return new Result(ResultCode.SUCCESS);
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    public Result update(SystemInfo info){

        Optional<SystemInfo> byId = systemInfoDao.findById(info.getId());
        if (byId.isPresent()) {
            SystemInfo target = byId.get();
            target.setCommunicateaddress(info.getCommunicateaddress());
            target.setCompanyname(info.getCompanyname());
            target.setDomainname(info.getDomainname());
            target.setMobile(info.getMobile());
            target.setWebname(info.getWebname());
            target.setRecordnumber(info.getRecordnumber());
            target.setTitle(info.getTitle());
            target.setDescription(info.getDescription());
            target.setKeywords(info.getKeywords());
            target.setLogo(info.getLogo());
            target.setQrcode(info.getQrcode());
            target.setCompanyinfo(info.getCompanyinfo());
            target.setEmail(info.getEmail());
            target.setAddresslocation(info.getAddresslocation());
            target.setPostcode(info.getPostcode());

            SystemInfo save = systemInfoDao.save(target);
            return new Result(ResultCode.SUCCESS,save);
        }

        return new Result(ResultCode.FAIL);
    }


    /**
     * create by: yanyongpan
     * description:
     * 5 根据id 查询详情
     */
    public Result findById(String id){
        Optional<SystemInfo> byId = systemInfoDao.findById(id);
        if (byId.isPresent()) {
            SystemInfo info = byId.get();
            return new Result(ResultCode.SUCCESS, info);
        }
        return new Result(ResultCode.FAIL,"查询结果为空!");
    }



}
