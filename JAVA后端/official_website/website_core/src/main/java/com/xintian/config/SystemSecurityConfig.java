package com.xintian.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
* @Description: TODO
 * 关于WebMvcConfigurationSupport
*    https://blog.csdn.net/weixin_30901729/article/details/94947400
*
*/
@Configuration
public class SystemSecurityConfig extends WebMvcConfigurationSupport {


    //app访问的相对路径
    @Value("${filePath}")
    private String filePath;
    //图片访问的相对路径
    @Value("${imgPath}")
    private String imgPath;
    //视频访问的相对路径
    @Value("${videoPath}")
    private String videoPath;
    @Value("${toolPath}")
    private String toolPath;
    //视频访问的相对路径
    @Value("${otherPath}")
    private String otherPath;
    @Value("${voicePath}")
    private String voicePath;

    @Value("${excludePath}")
    private String excludePath;

    //@Bean
    //public YTHInterceptor getSessionInterceptor() {
    //    return new YTHInterceptor();
    //}




    //获取当前项目所在磁盘
    String driver = System.getProperty("user.dir").split(":")[0];

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        //addResourceHandler是指你想在url请求的路径;addResourceLocations是图片存放的真实路径
        //如果在上线时，图片存放的真实路径问题需要讨论，有可能客户现场没有E盘，是放在C盘还是D盘？
        registry.addResourceHandler(imgPath+"**").addResourceLocations("file:"+driver+":"+imgPath);
        //registry.addResourceHandler("/资料文档/"+"**").addResourceLocations("file:"+driver+":"+"/资料文档/");
        //服务器上的app更新文件路径
        registry.addResourceHandler(filePath+"**").addResourceLocations("file:"+driver+":"+filePath);
        registry.addResourceHandler(toolPath+"**").addResourceLocations("file:"+driver+":"+toolPath);
        registry.addResourceHandler(videoPath+"**").addResourceLocations("file:"+driver+":"+videoPath);
        registry.addResourceHandler(otherPath+"**").addResourceLocations("file:"+driver+":"+otherPath);
        registry.addResourceHandler(voicePath+"**").addResourceLocations("file:"+driver+":"+voicePath);
        registry.addResourceHandler("/sunaas/资料路径/"+"**").addResourceLocations("file:"+driver+":"+"/sunaas/资料路径/");

        // 解决静态资源无法访问
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/");
        // 解决swagger无法访问
//        registry.addResourceHandler("/JavaInstall/upload/**")
//                .addResourceLocations("file:"+driver+":"+filePath);
        // 解决swagger无法访问
        registry.addResourceHandler("/swagger-ui/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/springfox-swagger-ui/")
                .resourceChain(false);
        // 解决swagger的js文件无法访问
        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");
        super.addResourceHandlers(registry);
    }

}
