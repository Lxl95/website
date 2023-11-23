package com.xintian.service.IMPL;

import com.xintian.common.domain.Activity;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.dao.ActivityDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.*;

/**
 * @author: yanyongpan
 * @description：
 * 水务新闻服务层
 */
@Service
public class ActivityService {

    @Autowired
    ActivityDao activityDao;

    /**
     * create by: yanyongpan
     * description:
     * 1 保存
     */

    public Result save(Activity activity){
        activity.setCreatetime(new Date());
        Activity save = activityDao.save(activity);
        return new Result(ResultCode.SUCCESS, save);
    }

    /**
     * create by: yanyongpan
     * description:
     *  2 查询所有轮播图
     *
     */
    public Result queryAll(){
        List<Activity> all = activityDao.findAll();
        return new Result(ResultCode.SUCCESS,all);

    }

    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    public Result del(String id){
        activityDao.deleteById(id);
        return new Result(ResultCode.SUCCESS);
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    public Result update(Activity activity){

        Optional<Activity> byId = activityDao.findById(activity.getId());
        if (byId.isPresent()) {
            Activity target = byId.get();
            target.setContent(activity.getContent());
            target.setCoverpic(activity.getCoverpic());
            target.setUrlpath(activity.getUrlpath());
            target.setTitle(activity.getTitle());
            target.setIsenable(activity.getIsenable());
            Activity save = activityDao.save(target);
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
        Optional<Activity> byId = activityDao.findById(id);
        if (byId.isPresent()) {
            Activity activity = byId.get();
            return new Result(ResultCode.SUCCESS,activity);
        }
        return new Result(ResultCode.FAIL,"查询结果为空!");
    }

    /**
     * create by: yanyongpan
     * description:
     * 6 条件查询加分页
     */
    public Result queryBy(Map map){
        Integer page = (Integer)map.get("page");
        Integer size = (Integer)map.get("size");

        //1.需要查询条件
        Specification<Activity> spec = new Specification<Activity>() {
            /**
             * 动态拼接查询条件
             * @return
             */
            public Predicate toPredicate(Root<Activity> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> list = new ArrayList<>();
                if(!StringUtils.isEmpty(map.get("title"))) {
                    list.add(criteriaBuilder.like(root.get("title").as(String.class),"%"+(String)map.get("title")+"%"));
                }
                if(!StringUtils.isEmpty(map.get("isenable"))) {
                    list.add(criteriaBuilder.equal(root.get("isenable").as(Integer.class),(Integer)map.get("isenable")));
                }
                return criteriaBuilder.and(list.toArray(new Predicate[list.size()]));
            }
        };

        Sort sort = Sort.by(Sort.Direction.DESC,"createtime");
        Page<Activity> resultPage = activityDao.findAll(spec, PageRequest.of(page - 1, size, sort));//
        List<Activity> content = resultPage.getContent();
        long totalElements = resultPage.getTotalElements();
        PageResult pageResult = new PageResult(totalElements,content);
        return new Result(ResultCode.SUCCESS,pageResult);

    }

    /**
     * create by: yanyongpan
     * description:
     * 7 是否启用活动接口   //活动是否启用 1启用 2关闭
     */
    public Result isenable(String id,Integer isenable){
        List<Activity> all = activityDao.findAll();
        for (Activity activity:all) {
            String res = activity.getId();
            if (res.equals(id)) {
                activity.setIsenable(isenable);//把传递过来的活动id设置为启用状态
            }else {
                activity.setIsenable(2);//把其他的活动id全部设置为关闭状态
            }
            Activity save = activityDao.save(activity);
        }
        return new Result(ResultCode.SUCCESS);
    }



}
