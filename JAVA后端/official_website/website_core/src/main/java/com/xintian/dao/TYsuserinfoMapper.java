package com.xintian.dao;

import com.xintian.common.domain.TYsuserinfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.PostMapping;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
@Mapper
public interface TYsuserinfoMapper {


    int insert(TYsuserinfo record);

    int insertSelective(TYsuserinfo record);

    TYsuserinfo selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TYsuserinfo record);

    int updateByPrimaryKey(TYsuserinfo record);

    int insertBatch(List<TYsuserinfo> list);

    List<TYsuserinfo> getYsCode(@Param("mobileNumber")String mobileNumber);

    int deleteByPrimaryKey(@Param("mobileNumber")String mobileNumber);

}
