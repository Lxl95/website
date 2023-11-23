package com.xintian.service;

import com.xintian.common.domain.ColumnCategory;
import com.xintian.common.domain.News;
import com.xintian.common.domain.NewsDto;
import com.xintian.common.domain.NewsVO;
import com.xintian.common.entity.PageResult;
import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.dao.ColumnCategoryDao;
import com.xintian.dao.NewsDao;
import com.xintian.dao.NewsDaoTwo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.*;
import java.util.stream.Collectors;

/**
 * @author: yanyongpan
 * @description： 水务新闻服务层
 */
@Service
public class NewsService {

    @Autowired
    NewsDao newsDao;
    @Autowired
    NewsDaoTwo newsDaoTwo;

    @Autowired
    ColumnCategoryDao columnCategoryDao;

    /**
     * create by: yanyongpan
     * description:      XtLibrary
     * 保存水务新闻
     */

    public Result saveNews(News news) {
        news.setCreatetime(new Date());
        News save = newsDao.save(news);
        return new Result(ResultCode.SUCCESS, save);
    }

    /**
     * create by: yanyongpan
     * description:
     * 自定义条件查询并分页接口  mybatis方式
     */
    public Result findAll() {
        List<News> all = newsDao.findAll(Sort.by("sort"));
        return new Result(ResultCode.SUCCESS, all);

    }

    /**
     * create by: yanyongpan
     * description:
     * 项目案例删除接口
     */
    public Result deleNews(String id) {
        newsDao.deleteById(id);
        return new Result(ResultCode.SUCCESS);
    }

    /**
     * create by: yanyongpan
     * description:
     * 项目案例更新接口
     */
    public Result updateNews(News news) {
        Optional<News> byId = newsDao.findById(news.getId());
        if (byId.isPresent()) {
            News target = byId.get();
            target.setTitle(news.getTitle());
            target.setContent(news.getContent());
            target.setSummary(news.getSummary());
            target.setCoverpic(news.getCoverpic());
            target.setAttachment(news.getAttachment());
            target.setSort(news.getSort());
            target.setIshot(news.getIshot());//是否设置为热点新闻
            target.setIsrecommend(news.getIsrecommend());//是否设置为推荐新闻
            News save = newsDao.save(target);
            return new Result(ResultCode.SUCCESS, save);
        }

        return new Result(ResultCode.FAIL);
    }

    /**
     * description:
     * 根据id 查询项目，包括上条新闻的ID、名称和下条新闻的ID、名称
     */
    public Result findNewsInfoById(String id) {
        List<News> list = newsDao.findAll(new Sort(new Sort.Order(Sort.Direction.ASC, "sort")));
        NewsVO newsVO = new NewsVO();
        for (int i = 0; i < list.size(); i++) {
            News news = list.get(i);
            if (id.equals(news.getId())) {
                newsVO.setId(news.getId());
                newsVO.setAttachment(news.getAttachment());
                newsVO.setColumncategoryid(news.getColumncategoryid());
                newsVO.setContent(news.getContent());
                newsVO.setCoverpic(news.getCoverpic());
                newsVO.setIshot(news.getIshot());
                newsVO.setCreatetime(news.getCreatetime());
                newsVO.setTitle(news.getTitle());
                newsVO.setSummary(news.getSummary());
                newsVO.setIsrecommend(news.getIsrecommend());
                if (i > 0) {
                    newsVO.setPrevNewId(list.get(i - 1).getId());
                    newsVO.setPrevNewTitle(list.get(i - 1).getTitle());
                }
                if (i < list.size() - 1) {
                    newsVO.setNextNewId(list.get(i + 1).getId());
                    newsVO.setNextNewTitle(list.get(i + 1).getTitle());
                }
                break;
            }
        }
        if (newsVO != null) {
            return new Result(ResultCode.SUCCESS, newsVO);
        }
        return new Result(ResultCode.FAIL);
    }

    /**
     * create by: yanyongpan
     * description:
     * 根据id 查询项目详情
     */
    public Result findById(String id) {
        Optional<News> byId = newsDao.findById(id);
        if (byId.isPresent()) {
            News news = byId.get();
            return new Result(ResultCode.SUCCESS, news);
        }
        return new Result(ResultCode.FAIL);
    }


    /**
     * create by: yanyongpan
     * description:
     * 根据id 查询项目详情
     */
    public Result queryBy(Map map) {
        Integer page = (Integer) map.get("page");
        Integer size = (Integer) map.get("size");

        //1.需要查询条件
        Specification<NewsDto> spec = new Specification<NewsDto>() {
            /**
             * 动态拼接查询条件
             * @return
             */
            public Predicate toPredicate(Root<NewsDto> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> list = new ArrayList<>();
                if (!StringUtils.isEmpty(map.get("title"))) {
                    list.add(criteriaBuilder.like(root.get("title").as(String.class), "%" + (String) map.get("title") + "%"));
                }
                if (!StringUtils.isEmpty(map.get("isrecommend"))) {
                    list.add(criteriaBuilder.equal(root.get("isrecommend").as(Integer.class), (Integer) map.get("isrecommend")));
                }
                if (!StringUtils.isEmpty(map.get("ishot"))) {
                    list.add(criteriaBuilder.equal(root.get("ishot").as(Integer.class), (Integer) map.get("ishot")));
                }
                if (!StringUtils.isEmpty(map.get("columncategoryid"))) {
                    list.add(criteriaBuilder.equal(root.get("columncategoryid").as(String.class), (String) map.get("columncategoryid")));
                }
                if (!StringUtils.isEmpty(map.get("isPublish"))) {
                    list.add(criteriaBuilder.equal(root.get("isPublish").as(Integer.class), (Integer) map.get("isPublish")));
                }
                return criteriaBuilder.and(list.toArray(new Predicate[list.size()]));
            }
        };

        Page<NewsDto> resultPage = newsDaoTwo.findAll(spec, PageRequest.of(page - 1, size, new Sort(new Sort.Order(Sort.Direction.ASC, "sort"))));//
        List<NewsDto> content = resultPage.getContent();
        List<String> collect = content.stream().map(m -> m.getColumncategoryid()).distinct().collect(Collectors.toList());
        List<ColumnCategory> list = new ArrayList<>();
        if(!CollectionUtils.isEmpty(collect)){
            //查询栏目类别信息
            list = columnCategoryDao.findAll(new Specification<ColumnCategory>() {
                @Override
                public Predicate toPredicate(Root<ColumnCategory> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
                    List<Predicate> list = new ArrayList<Predicate>();
                    CriteriaBuilder.In<String> in = cb.in(root.get("id"));
                    for (String id : collect) {
                        in.value(id);
                    }
                    list.add(in);
                    Predicate[] p = new Predicate[list.size()];
                    return cb.and(list.toArray(p));
                }
            });
            if(!CollectionUtils.isEmpty(list)){
                for(NewsDto entity:content){
                    String columncategoryid = entity.getColumncategoryid();
                    Optional<ColumnCategory> first = list.stream().filter(f -> columncategoryid.equals(f.getId())).findFirst();
                    if(first.isPresent()){
                        entity.setColumnCategoryName(first.get().getName());
                    }
                }
            }
        }
        long totalElements = resultPage.getTotalElements();
        PageResult pageResult = new PageResult(totalElements, content);
        return new Result(ResultCode.SUCCESS, pageResult);

    }


    /**
     * create by: yanyongpan
     * description:
     * 7 设置热点新闻
     */
    public Result setHotNews(Map map) {
        String id = (String) map.get("id");
        Integer ishot = (Integer) map.get("ishot");
        Optional<News> byId = newsDao.findById(id);
        if (byId.isPresent()) {
            News target = byId.get();
            target.setIshot(ishot);
            News save = newsDao.save(target);
            return new Result(ResultCode.SUCCESS, save);
        }
        return null;
    }


    /**
     * create by: yanyongpan
     * description:
     * 8 设置推荐新闻
     */
    public Result setRecommendNews(Map map) {
        String id = (String) map.get("id");
        Integer isrecommend = (Integer) map.get("isrecommend");
        Optional<News> byId = newsDao.findById(id);
        if (byId.isPresent()) {
            News target = byId.get();
            target.setIsrecommend(isrecommend);
            News save = newsDao.save(target);
            return new Result(ResultCode.SUCCESS, save);
        }
        return new Result(ResultCode.FAIL);
    }

    /**
     * 发布新闻、取消发布新闻
     * @param map
     * @return
     */
    public Result setPublishNews(Map map) {
        String id = (String) map.get("id");
        Integer isPublish = (Integer) map.get("isPublish");
        Optional<News> byId = newsDao.findById(id);
        if (byId.isPresent()) {
            News target = byId.get();
            target.setIsPublish(isPublish);
            News save = newsDao.save(target);
            return new Result(ResultCode.SUCCESS, save);
        }
        return new Result(ResultCode.FAIL);
    }
}
