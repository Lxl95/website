package com.xintian.service;

import com.xintian.common.domain.LoopPic;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.dao.LoopPicDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.*;

/**
 * @author: yanyongpan
 * @description：
 * 水务新闻服务层
 */
@Service
public class LoopPicService {

    @Autowired
    LoopPicDao picDao;

    /**
     * create by: yanyongpan
     * description:      XtLibrary
     * 1 保存
     */

    public Result save(LoopPic loopPic){
         loopPic.setCreatetime(new Date());
        LoopPic save = picDao.save(loopPic);
        return new Result(ResultCode.SUCCESS, save);
    }

    /**
     * create by: yanyongpan
     * description:
     *  2 查询所有轮播图
     *
     */
    public Result queryAll(){
        List<LoopPic> all = picDao.findAll(new Sort(new Sort.Order(Sort.Direction.ASC, "sort")));
        return new Result(ResultCode.SUCCESS,all);

    }

    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    public Result del(String id){
        picDao.deleteById(id);
        return new Result(ResultCode.SUCCESS);
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    public Result update(LoopPic loopPic){

        Optional<LoopPic> byId = picDao.findById(loopPic.getId());
        if (byId.isPresent()) {
            LoopPic target = byId.get();
            target.setIsshow(loopPic.getIsshow());
            target.setName(loopPic.getName());
            target.setUrlpath(loopPic.getUrlpath());
            target.setSort(loopPic.getSort());
            LoopPic save = picDao.save(target);
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
        Optional<LoopPic> byId = picDao.findById(id);
        if (byId.isPresent()) {
            LoopPic loopPic = byId.get();
            return new Result(ResultCode.SUCCESS, loopPic);
        }
        return new Result(ResultCode.FAIL,"查询结果为空!");
    }


    /**
     * create by: yanyongpan
     * description:
     *  6 查询最新10条新闻  用于在首页展示10条新闻轮播
     *   SELECT * FROM xt_news ORDER BY TIME DESC LIMIT 0,10
     */
//    public Result findLastestTenNews(){
//        List<News> lastestTenNews = newsMapper.findLastestTenNews();
//        return new Result(ResultCode.SUCCESS,lastestTenNews);
//    }


}
