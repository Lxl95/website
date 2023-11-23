package com.xintian.dao;

import com.xintian.common.domain.News;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;
import java.util.Map;


/**
 * @author: yanyongpan
 * @description：
 */
@Mapper
public interface NewsMapper {
    //自定义加分页查询
    public List<News> findPageByCondition(Map map);
    //查询最新10条新闻  用于在首页展示10条新闻轮播
    public List<News> findLastestTenNews();

}
