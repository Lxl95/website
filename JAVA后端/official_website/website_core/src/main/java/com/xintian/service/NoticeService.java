package com.xintian.service;

import com.xintian.common.domain.Activity;
import com.xintian.common.domain.Notice;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.dao.ActivityDao;
import com.xintian.dao.NoticeDao;
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
public class NoticeService {

    @Autowired
    NoticeDao noticeDao;

    /**
     * create by: yanyongpan
     * description:
     * 1 保存
     */

    public Result save(Notice notice){
        notice.setCreatetime(new Date());
        Notice save = noticeDao.save(notice);
        return new Result(ResultCode.SUCCESS, save);
    }

    /**
     * create by: yanyongpan
     * description:
     *  2 查询所有轮播图
     *
     */
    public Result queryAll(){
        List<Notice> all = noticeDao.findAll();
        return new Result(ResultCode.SUCCESS,all);

    }

    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    public Result del(String id){
        noticeDao.deleteById(id);
        return new Result(ResultCode.SUCCESS);
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    public Result update(Notice notice){

        Optional<Notice> byId = noticeDao.findById(notice.getId());
        if (byId.isPresent()) {
            Notice target = byId.get();
            target.setTypeid(notice.getTypeid());
            target.setTypename(notice.getTypename());
            target.setTitle(notice.getTitle());
            target.setCoverpic(notice.getCoverpic());
            target.setSummary(notice.getSummary());
            target.setIsjump(notice.getIsjump());
            target.setUrlpath(notice.getUrlpath());
            target.setContent(notice.getContent());
            Notice save = noticeDao.save(target);
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
        Optional<Notice> byId = noticeDao.findById(id);
        if (byId.isPresent()) {
            Notice notice = byId.get();
            return new Result(ResultCode.SUCCESS,notice);
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
        Specification<Notice> spec = new Specification<Notice>() {
            /**
             * 动态拼接查询条件
             * @return
             */
            public Predicate toPredicate(Root<Notice> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> list = new ArrayList<>();
                if(!StringUtils.isEmpty(map.get("title"))) {
                    list.add(criteriaBuilder.like(root.get("title").as(String.class),"%"+(String)map.get("title")+"%"));
                }
                if(!StringUtils.isEmpty(map.get("isenable"))) {
                    list.add(criteriaBuilder.equal(root.get("isenable").as(Integer.class),(Integer)map.get("isenable")));
                }
                if(!StringUtils.isEmpty(map.get("typeid"))) {
                    list.add(criteriaBuilder.equal(root.get("typeid").as(String.class),(String)map.get("typeid")));
                }
                return criteriaBuilder.and(list.toArray(new Predicate[list.size()]));
            }
        };

        Page<Notice> resultPage = noticeDao.findAll(spec, PageRequest.of(page - 1, size, new Sort(new Sort.Order(Sort.Direction.DESC, "createtime"))));//
        List<Notice> content = resultPage.getContent();
        long totalElements = resultPage.getTotalElements();
        PageResult pageResult = new PageResult(totalElements,content);
        return new Result(ResultCode.SUCCESS,pageResult);

    }

    /**
     * create by: yanyongpan
     * description:
     * 7  公告是否展示
     */
    public Result isshow(String id,Integer isshow){
        Optional<Notice> byId = noticeDao.findById(id);
        if (byId.isPresent()) {
            Notice target = byId.get();
            target.setIsshow(isshow);
            Notice save = noticeDao.save(target);
            return new Result(ResultCode.SUCCESS,save);
        }
        return new Result(ResultCode.FAIL);
    }


}
