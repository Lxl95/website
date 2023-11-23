package com.xintian.config;

import com.baomidou.mybatisplus.extension.incrementer.OracleKeyGenerator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author wt
 * @date 2023/10/16
 */
@Configuration
public class MybatisPlusConfig {
    @Bean
    public OracleKeyGenerator keyGenerator() {
        return new OracleKeyGenerator();
    }
}
