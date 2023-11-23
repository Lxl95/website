package com.xintian.service;

import com.xintian.common.domain.*;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.dao.FeedbackDao;
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
 * @description： 水务新闻服务层
 */
@Service
public class FeedbackService {

    @Autowired
    FeedbackDao feedbackDao;

    /**
     * create by: caoyp
     * description:      新增用户留言
     *
     */
    public Result save(Feedback feedback) {
        feedback.setCreateTime(new Date());
        Feedback save = feedbackDao.save(feedback);
        return new Result(ResultCode.SUCCESS, save);
    }

    /**
     * create by: caoyp
     * description: 查询全部留言
     */
    public Result findAll() {
        List<Feedback> all = feedbackDao.findAll();
        return new Result(ResultCode.SUCCESS, all);

    }

    /**
     * create by: caoyp
     * description:
     * 6 条件查询加分页
     */
    public Result queryBy(Map map){
        Integer page = (Integer)map.get("page");
        Integer size = (Integer)map.get("size");

        //1.需要查询条件
        Specification<Feedback> spec = new Specification<Feedback>() {
            /**
             * 动态拼接查询条件
             * @return
             */
            @Override
            public Predicate toPredicate(Root<Feedback> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> list = new ArrayList<>();
                if(!StringUtils.isEmpty(map.get("feedbackName"))) {
                    list.add(criteriaBuilder.like(root.get("feedbackName").as(String.class),"%"+(String)map.get("feedbackName")+"%"));
                }
                if(!StringUtils.isEmpty(map.get("feedbackPhone"))) {
                    list.add(criteriaBuilder.equal(root.get("feedbackPhone").as(Integer.class),(Integer)map.get("feedbackPhone")));
                }
                if(!StringUtils.isEmpty(map.get("email"))) {
                    list.add(criteriaBuilder.equal(root.get("email").as(String.class),(String)map.get("email")));
                }
                return criteriaBuilder.and(list.toArray(new Predicate[list.size()]));
            }
        };

        Page<Feedback> resultPage = feedbackDao.findAll(spec, PageRequest.of(page - 1, size, new Sort(new Sort.Order(Sort.Direction.DESC, "createTime"))));//
        List<Feedback> content = resultPage.getContent();
        long totalElements = resultPage.getTotalElements();
        PageResult pageResult = new PageResult(totalElements,content);
        return new Result(ResultCode.SUCCESS,pageResult);

    }

    /**
     * create by: caoyp
     * description:删除留言
     *
     */
    public Result delete(String id) {
        feedbackDao.deleteById(id);
        return new Result(ResultCode.SUCCESS);
    }


    /**
     * create by: yanyongpan
     * description:
     * 根据id 查询项目详情
     */
    public Result findById(String id) {
        Optional<Feedback> byId = feedbackDao.findById(id);
        if (byId.isPresent()) {
            Feedback feedback = byId.get();
            return new Result(ResultCode.SUCCESS, feedback);
        }
        return new Result(ResultCode.FAIL);
    }

}
