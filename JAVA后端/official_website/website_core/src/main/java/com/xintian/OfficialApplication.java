package com.xintian;

import com.xintian.common.utils.UpDownFileUtil;
import com.xintian.common.utils.UploadFileUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableAsync;
import springfox.documentation.oas.annotations.EnableOpenApi;

@EnableAsync
@EnableOpenApi
@EnableAspectJAutoProxy(exposeProxy = true)
//1.配置springboot的包扫描
@SpringBootApplication(scanBasePackages = "com.xintian")
//2.配置jpa注解的扫描
@EntityScan(value="com.xintian")
public class OfficialApplication {

    /**
     * 启动方法
     */
    public static void main(String[] args) {
        SpringApplication.run(OfficialApplication.class,args);
        System.out.println("============================企业门户启动成功=======================================");
    }


    @Bean
    public UpDownFileUtil updownFileUtil() {
        return new UpDownFileUtil();
    }
    @Bean
    public UploadFileUtils uploadFileUtil() {
        return new UploadFileUtils();
    }
}
