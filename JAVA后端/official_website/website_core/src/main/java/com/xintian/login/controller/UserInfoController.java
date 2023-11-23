package com.xintian.login.controller;

import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.login.entity.UserInfo;
import com.xintian.login.service.UserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/userInfo")
@Api(tags = "用户信息-控制器")
@Slf4j
public class UserInfoController {
    @Autowired
    private UserInfoService userInfoService;

    @PostMapping("/userInfoChange")
//    @ApiOperation(value = "用户信息变更")
    public Result userInfoChange(@RequestBody UserInfo userInfo){
        boolean flag = userInfoService.userRegistration(userInfo);
        return new Result(ResultCode.SUCCESS,flag);
    }
    @PostMapping("/getuserInfoByMobleNumber")
    @ApiOperation(value = "用户信息查询")
    public Result getuserInfoByMobleNumber(@RequestBody UserInfo userInfo){
        List<UserInfo> userInfos = userInfoService.getuserInfoByMobleNumber(userInfo);
        return new Result(ResultCode.SUCCESS,userInfos);
    }
    @PostMapping("/setuserInfoByMobleNumber")
    @ApiOperation(value = "设置用户信息")
    public Result setuserInfoByMobleNumber(@RequestBody UserInfo userInfo){
        int i = userInfoService.setuserInfoByMobleNumber(userInfo);
        return new Result(ResultCode.SUCCESS,i);
    }

}
