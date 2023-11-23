package com.xintian.login.service;


import com.xintian.login.base.BaseService;
import com.xintian.login.entity.RequestData;
import com.xintian.login.entity.UserInfo;

import java.util.List;

public interface UserInfoService extends BaseService<UserInfo> {


    boolean userRegistration(UserInfo userInfo);

    boolean updateUserPassward(UserInfo userInfo);

    boolean isExitUserAccount(UserInfo userInfo);

    boolean userLogin(UserInfo userInfo);

    boolean userMessageLogin(RequestData requestData);

    String getBackPassword();

    boolean userInfoChange();

    UserInfo convert(RequestData requestData);

    List<UserInfo> getuserInfoByMobleNumber(UserInfo userInfo);


    int setuserInfoByMobleNumber(UserInfo userInfo);

}


