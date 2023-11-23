package com.xintian.service;

import com.xintian.common.domain.BusinessHandling;
import com.xintian.common.domain.Policy;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.dao.BusinessHandlingDao;
import com.xintian.dao.PolicyDao;
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
public class BusinessHandlingService {

    @Autowired
    BusinessHandlingDao handlingDao;

    /**
     * create by: yanyongpan
     * description:
     * 1 保存
     */

    public Result save(BusinessHandling businessHandling){
        businessHandling.setCreatetime(new Date());
        BusinessHandling save = handlingDao.save(businessHandling);
        return new Result(ResultCode.SUCCESS, save);
    }

    /**
     * create by: yanyongpan
     * description:
     *  2 查询所有轮播图
     *
     */
    public Result queryAll(){
        List<BusinessHandling> all = handlingDao.findAll(new Sort(new Sort.Order(Sort.Direction.ASC, "sort")));
        return new Result(ResultCode.SUCCESS,all);

    }

    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    public Result del(String id){
        handlingDao.deleteById(id);
        return new Result(ResultCode.SUCCESS);
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    public Result update(BusinessHandling handling){

        Optional<BusinessHandling> byId = handlingDao.findById(handling.getId());
        if (byId.isPresent()) {
            BusinessHandling target = byId.get();
            target.setContent(handling.getContent());
            target.setTitle(handling.getTitle());
            target.setCoverpic(handling.getCoverpic());
            target.setIsjump(handling.getIsjump());
            target.setUrlpath(handling.getUrlpath());
            target.setSummary(handling.getSummary());
            target.setIsshow(handling.getIsshow());
            target.setSort(handling.getSort());
            BusinessHandling save = handlingDao.save(target);
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
        Optional<BusinessHandling> byId = handlingDao.findById(id);
        if (byId.isPresent()) {
            BusinessHandling handling = byId.get();
            return new Result(ResultCode.SUCCESS,handling);
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
        Specification<BusinessHandling> spec = new Specification<BusinessHandling>() {
            /**
             * 动态拼接查询条件
             * @return
             */
            public Predicate toPredicate(Root<BusinessHandling> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> list = new ArrayList<>();
                if(!StringUtils.isEmpty(map.get("title"))) {
                    list.add(criteriaBuilder.like(root.get("title").as(String.class),"%"+(String)map.get("title")+"%"));
                }
                if(!StringUtils.isEmpty(map.get("isshow"))) {
                    list.add(criteriaBuilder.equal(root.get("isshow").as(Integer.class),(Integer)map.get("isshow")));
                }
                return criteriaBuilder.and(list.toArray(new Predicate[list.size()]));
            }
        };

        Page<BusinessHandling> resultPage = handlingDao.findAll(spec, PageRequest.of(page - 1, size, new Sort(new Sort.Order(Sort.Direction.ASC, "sort"))));//
        List<BusinessHandling> content = resultPage.getContent();
        long totalElements = resultPage.getTotalElements();
        PageResult pageResult = new PageResult(totalElements,content);
        return new Result(ResultCode.SUCCESS,pageResult);

    }


    /**
     * create by: yanyongpan
     * description:
     * 7 是否展示   //是否显示 1是(显示)  2否(不显示)
     */
    public Result isshow(String id,Integer isshow){
        Optional<BusinessHandling> byId = handlingDao.findById(id);
        if (byId.isPresent()) {
            BusinessHandling target = byId.get();
            target.setIsshow(isshow);
            BusinessHandling save = handlingDao.save(target);
            return new Result(ResultCode.SUCCESS,save);
        }
        return new Result(ResultCode.FAIL);
    }



}
