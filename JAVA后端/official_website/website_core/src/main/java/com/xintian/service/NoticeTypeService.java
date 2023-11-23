package com.xintian.service;

import com.xintian.common.domain.Activity;
import com.xintian.common.domain.NoticeType;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.dao.ActivityDao;
import com.xintian.dao.NoticeTypeDao;
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
public class NoticeTypeService {

    @Autowired
    NoticeTypeDao noticeTypeDao;

    /**
     * create by: yanyongpan
     * description:
     * 1 保存
     */

    public Result save(NoticeType activity){
        activity.setCreatetime(new Date());
        NoticeType save = noticeTypeDao.save(activity);
        return new Result(ResultCode.SUCCESS, save);
    }

    /**
     * create by: yanyongpan
     * description:
     *  2 查询所有轮播图
     *
     */
    public Result queryAll(){
        List<NoticeType> all = noticeTypeDao.findAll();
        return new Result(ResultCode.SUCCESS,all);

    }

    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    public Result del(String id){
        noticeTypeDao.deleteById(id);
        return new Result(ResultCode.SUCCESS);
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    public Result update(NoticeType noticeType){

        Optional<NoticeType> byId = noticeTypeDao.findById(noticeType.getId());
        if (byId.isPresent()) {
            NoticeType target = byId.get();
            target.setTypename(noticeType.getTypename());
            NoticeType save = noticeTypeDao.save(target);
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
        Optional<NoticeType> byId = noticeTypeDao.findById(id);
        if (byId.isPresent()) {
            NoticeType type = byId.get();
            return new Result(ResultCode.SUCCESS,type);
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
        Specification<NoticeType> spec = new Specification<NoticeType>() {
            /**
             * 动态拼接查询条件
             * @return
             */
            public Predicate toPredicate(Root<NoticeType> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
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

        Page<NoticeType> resultPage = noticeTypeDao.findAll(spec, PageRequest.of(page - 1, size, new Sort(new Sort.Order(Sort.Direction.DESC, "createtime"))));//
        List<NoticeType> content = resultPage.getContent();
        long totalElements = resultPage.getTotalElements();
        PageResult pageResult = new PageResult(totalElements,content);
        return new Result(ResultCode.SUCCESS,pageResult);

    }



}
