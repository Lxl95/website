package com.xintian.service;

import com.xintian.common.domain.BusinessHandling;
import com.xintian.common.domain.Policy;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
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
public class PolicyService {

    @Autowired
    PolicyDao policyDao;

    /**
     * create by: yanyongpan
     * description:
     * 1 保存
     */

    public Result save(Policy policy){
        policy.setCreatetime(new Date());
        Policy save = policyDao.save(policy);
        return new Result(ResultCode.SUCCESS, save);
    }

    /**
     * create by: yanyongpan
     * description:
     *  2 查询所有轮播图
     *
     */
    public Result queryAll(){
        List<Policy> all = policyDao.findAll();
        return new Result(ResultCode.SUCCESS,all);

    }

    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    public Result del(String id){
        policyDao.deleteById(id);
        return new Result(ResultCode.SUCCESS);
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    public Result update(Policy policy){

        Optional<Policy> byId = policyDao.findById(policy.getId());
        if (byId.isPresent()) {
            Policy target = byId.get();
            target.setContent(policy.getContent());
            target.setTitle(policy.getTitle());
            target.setTypeid(policy.getTypeid());
            target.setTypename(policy.getTypename());
            target.setFileAddr(policy.getFileAddr());
            Policy save = policyDao.save(target);
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
        Optional<Policy> byId = policyDao.findById(id);
        if (byId.isPresent()) {
            Policy policy = byId.get();
            return new Result(ResultCode.SUCCESS,policy);
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
        Specification<Policy> spec = new Specification<Policy>() {
            /**
             * 动态拼接查询条件
             * @return
             */
            public Predicate toPredicate(Root<Policy> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> list = new ArrayList<>();
                if(!StringUtils.isEmpty(map.get("title"))) {
                    list.add(criteriaBuilder.like(root.get("title").as(String.class),"%"+(String)map.get("title")+"%"));
                }
                if(!StringUtils.isEmpty(map.get("isshow"))) {
                    list.add(criteriaBuilder.equal(root.get("isshow").as(Integer.class),(Integer)map.get("isshow")));
                }
                if(!StringUtils.isEmpty(map.get("typeid"))) {
                    list.add(criteriaBuilder.equal(root.get("typeid").as(String.class),(String)map.get("typeid")));
                }
                return criteriaBuilder.and(list.toArray(new Predicate[list.size()]));
            }
        };

        Page<Policy> resultPage = policyDao.findAll(spec, PageRequest.of(page - 1, size, new Sort(new Sort.Order(Sort.Direction.DESC, "createtime"))));//
        List<Policy> content = resultPage.getContent();
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
        Optional<Policy> byId = policyDao.findById(id);
        if (byId.isPresent()) {
            Policy target = byId.get();
            target.setIsshow(isshow);
            Policy save = policyDao.save(target);
            return new Result(ResultCode.SUCCESS,save);
        }
        return new Result(ResultCode.FAIL);
    }




}
