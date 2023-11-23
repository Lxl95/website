package com.xintian.service.IMPL;

import com.xintian.common.domain.ColumnCategory;
import com.xintian.common.domain.Notice;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.common.utils.OrgnTreeUtil;
import com.xintian.dao.ColumnCategoryDao;
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
import java.util.stream.Collectors;

/**
 * @author: yanyongpan
 * @description：
 * 水务新闻服务层
 */
@Service
public class ColumnCategoryService {

    @Autowired
    ColumnCategoryDao columnCategoryDao;

    /**
     * create by: yanyongpan
     * description:      XtLibrary
     * 1 保存水务新闻
     */
    public Result save(ColumnCategory category){
        category.setCreatetime(new Date());
        String pid = category.getPid();
        if(StringUtils.isEmpty(pid)){
            //获取根结点
            pid = "0";
            category.setPid(pid);
        }
        ColumnCategory save = columnCategoryDao.save(category);
        return new Result(ResultCode.SUCCESS, save);
    }

    /**
     * create by: yanyongpan
     * description:
     * 2 查询接口
     *
     */
    public Result queryAll(){
        List<ColumnCategory> all = columnCategoryDao.findAll();
        return new Result(ResultCode.SUCCESS,all);

    }

    /**
     * create by: yanyongpan
     * description:
     * 3 删除接口
     */
    public Result del(String id){
        columnCategoryDao.deleteById(id);
        return new Result(ResultCode.SUCCESS);
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 更新接口
     */
    public Result update(ColumnCategory category){
        Optional<ColumnCategory> byId = columnCategoryDao.findById(category.getId());
        if (byId.isPresent()) {
            ColumnCategory target = byId.get();
            target.setUrlpath(category.getUrlpath());
            target.setIsjump(category.getIsjump());
            target.setIsshow(category.getIsshow());
            target.setName(category.getName());
            target.setSort(category.getSort());
            target.setIsnotice(category.getIsnotice());
            target.setBottomstate(category.getBottomstate());
            target.setIstabulation(category.getIstabulation());
            ColumnCategory save = columnCategoryDao.save(target);
            return new Result(ResultCode.SUCCESS,save);
        }

        return new Result(ResultCode.FAIL,"栏目类别不存在!");
    }


    /**
     * create by: yanyongpan
     * description:
     * 5 根据id 查询项目详情接口
     */
    public Result findById(String id){
        Optional<ColumnCategory> byId = columnCategoryDao.findById(id);
        if (!byId.isPresent()) {
            return new Result(ResultCode.FAIL, "信息不存在!");
        }
        ColumnCategory columnCategory = byId.get();
        return new Result(ResultCode.SUCCESS, columnCategory);
    }

    /**
     * create by: yanyongpan
     * description:
     * 6.查询所有的栏目类别树
     *
     */
    public  List<ColumnCategory> findOrgnNodeList() {

        Sort sort = Sort.by(Sort.Direction.ASC,"sort");
        List<ColumnCategory> jsonlist = columnCategoryDao.findAll(sort);//new Sort(new Sort.Order(Sort.Direction.ASC, "sort"))
        //定义list集合,存储从数据库查询出的所有记录
        //List<ColumnCategory> menuList = new ArrayList<ColumnCategory>();
        //调用TreeTest工具类方法生成树形结构的List集合
        List<ColumnCategory> treeList = OrgnTreeUtil.listToTree(jsonlist);
        return treeList;
    }


    /**
     * create by: yanyongpan
     * description:
     * 7  条件查询加分页
     */
    public  List<ColumnCategory> queryBy(Map map){

        //1.需要查询条件
        Specification<ColumnCategory> spec = new Specification<ColumnCategory>() {
            /**
             * 动态拼接查询条件
             * @return
             */
            public Predicate toPredicate(Root<ColumnCategory> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> list = new ArrayList<>();
                if(!StringUtils.isEmpty(map.get("bottomstate"))) {
                    list.add(criteriaBuilder.equal(root.get("bottomstate").as(Integer.class),(Integer)map.get("bottomstate")));
                }
                if(!StringUtils.isEmpty(map.get("pid"))) {
                    list.add(criteriaBuilder.equal(root.get("pid").as(Integer.class),(Integer)map.get("pid")));
                }
                return criteriaBuilder.and(list.toArray(new Predicate[list.size()]));
            }
        };
        List<ColumnCategory> jsonlist = columnCategoryDao.findAll(spec, Sort.by("sort"));
        List<ColumnCategory> all = columnCategoryDao.findAll(Sort.by("sort"));
        List<ColumnCategory> treelist = new ArrayList<>();
        for (ColumnCategory columnCategory:jsonlist) {
            ColumnCategory children = OrgnTreeUtil.findChildren(columnCategory, all);
            treelist.add(children);
        }
        return treelist;
    }


    /**
     * create by: yanyongpan
     * description:
     * 8 查询是公告类型的栏目类别 接口
     */

    public Result queryNotice(Integer isnotice){
        List<ColumnCategory> save = columnCategoryDao.findByIsnotice(isnotice);
        return new Result(ResultCode.SUCCESS,save);
    }

}
