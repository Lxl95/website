package com.xintian.controller;

import com.xintian.common.domain.News;
import com.xintian.common.entity.Result;
import com.xintian.service.IMPL.NewsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

/**
 * @author: yanyongpan
 * @description：
 * 水务新闻控制层
 */
//1.解决跨域
@CrossOrigin
@RestController
@RequestMapping("/news")
@Slf4j
public class NewsController {
    @Autowired
    NewsService newsService;

    /**
     * create by: yanyongpan
     * description:
     * 1 保存项目案例信息接口
     */
    @RequestMapping("/save")
    public Result saveNews(@RequestBody News news){
        log.info("进入：保存项目案例信息接口");
        Result responseBean = newsService.saveNews(news);
        return responseBean;
    }

    /**
     * create by: yanyongpan
     * description:
     * 2 自定义条件查询并分页接口  官网前台用到
     */
    @RequestMapping("/queryAll")
    public Result queryAll(){
        Result result = newsService.findAll();
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     *  3 项目案例删除接口
     */
    @RequestMapping("/del")
    public Result deleNews(String id){
        Result result = newsService.deleNews(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 4 项目案例更新接口
     */
    @RequestMapping("/update")
    public Result updateNews(@RequestBody News news){
        Result result = newsService.updateNews(news);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 5 根据id 查询项目详情
     */
    @RequestMapping("/findById")
    public Result findById(String id){
        Result result = newsService.findNewsInfoById(id);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 6 自定义条件查询并分页接口
     */
    @RequestMapping("/queryBy")
    public Result queryBy(@RequestBody Map map){
        Result result = newsService.queryBy(map);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 7 设置热点新闻
     */
    @RequestMapping("/setHotNews")
    public Result setHotNews(@RequestBody Map map){
        Result result = newsService.setHotNews(map);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 8 设置推荐新闻
     */
    @RequestMapping("/setRecommendNews")
    public Result setRecommendNews(@RequestBody Map map){
        Result result = newsService.setRecommendNews(map);
        return result;
    }


    /**
     * 设置是否发布新闻
     * @param map   {id:新闻主键ID，isPublish:发布1，取消发布2}
     * @return
     */
    @RequestMapping("/setPublishNews")
    public Result setPublishNews(@RequestBody Map map){
        Result result = newsService.setPublishNews(map);
        return result;
    }

}
