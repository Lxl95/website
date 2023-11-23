package com.xintian.service.IMPL;

import com.xintian.common.domain.TYsuserinfo;
import com.xintian.common.domain.TYsuserinfoDto;
import com.xintian.common.domain.TYsuserinfoVo;
import com.xintian.dao.TYsuserinfoMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.DocFlavor;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author wt
 * @date 2023/9/25
 */
@Service
@Slf4j
public class YsUserInfoService {
    @Autowired
    private TYsuserinfoMapper tYsuserinfoMapper;

    /***
     * 批量关联营收户号和手机号,营收用户
     * @param param
     * @return
     */
    public int insertBatch(TYsuserinfoDto param){
        int i = 0;
        String mobileNumber = param.getMobileNumber();
        List<TYsuserinfo> ysCodeList = tYsuserinfoMapper.getYsCode(mobileNumber);
         if (ysCodeList.size()>0){//已存在 删除后新增
             tYsuserinfoMapper.deleteByPrimaryKey(mobileNumber);
         }
        List<String> addList = param.getYsCode();
        if (addList != null && addList.size() > 0) {
        List<TYsuserinfo> arrayList = new ArrayList<>();
        for (String s : addList) {
            TYsuserinfo tYsuserinfo = new TYsuserinfo();
            tYsuserinfo.setYsCode(s);
            tYsuserinfo.setMobileNumber(param.getMobileNumber());
            tYsuserinfo.setOpenId(param.getOpenId());
            arrayList.add(tYsuserinfo);
        }
            i += tYsuserinfoMapper.insertBatch(arrayList);
        }
        return i;
    }

    public TYsuserinfoDto getYsCode (TYsuserinfoDto param){
        List<TYsuserinfo> ysCodeList = tYsuserinfoMapper.getYsCode(param.getMobileNumber());
        TYsuserinfoDto tYsuserinfoDto = new TYsuserinfoDto();
        List<String> ysCodes = new ArrayList<>();
        for (TYsuserinfo tYsuserinfo : ysCodeList) {
            tYsuserinfoDto.setOpenId(tYsuserinfo.getOpenId());
            tYsuserinfoDto.setMobileNumber(tYsuserinfo.getMobileNumber());
            ysCodes.add(tYsuserinfo.getYsCode());
        }
        tYsuserinfoDto.setYsCode(ysCodes);
        return tYsuserinfoDto;
    }
    public int deleteById  (TYsuserinfoDto param){
        int i = tYsuserinfoMapper.deleteByPrimaryKey(param.getMobileNumber());
        return i;
    }


}
