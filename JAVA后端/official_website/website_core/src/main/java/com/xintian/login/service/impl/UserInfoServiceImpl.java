package com.xintian.login.service.impl;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.ObjectUtils;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.xintian.login.base.BaseServiceImpl;
import com.xintian.login.entity.RequestData;
import com.xintian.login.entity.UserInfo;
import com.xintian.login.service.UserInfoService;
import com.xintian.login.mapper.UserInfoMapper;;
import com.xintian.login.utils.AESUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import redis.clients.jedis.Jedis;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class UserInfoServiceImpl extends BaseServiceImpl<UserInfoMapper, UserInfo> implements UserInfoService {
    @Autowired
    private UserInfoMapper userInfoMapper;
    @Autowired
    private UserInfoService userInfoService;
    @Value("${xintian.redisUrl}")
    private String redisUrl;

    public boolean userRegistration(UserInfo userInfo){
        int insert = userInfoMapper.insert(userInfo);
        if(insert!=1){return false;}return true;
    }

    /***
     * 用户密码变更
     * @param userInfo
     * @return
     */
    @Override
    public boolean updateUserPassward(UserInfo userInfo) {
        UserInfo userInfo1 = new UserInfo();
        userInfo1.setUserPassword(userInfo.getUserPassword());//更新的字段
        //更新的条件
        QueryWrapper<UserInfo> wrapper = new QueryWrapper<>();
        wrapper.eq("MOBILE_NUMBER",userInfo.getMobileNumber());
        int result = this.userInfoMapper.update(userInfo1,wrapper);
        System.out.println("result="+result);
        return false;
    }


    /**
     * 判断账户是否存在
     * @return
     */
    public boolean isExitUserAccount(UserInfo userInfo) {
        //先查询账号是否存在
        System.out.println();
        UserInfo existUser = getOne(
                Wrappers.<UserInfo>lambdaQuery()
                        .eq(UserInfo::getUserAccount,userInfo.getUserAccount())
        );
        if(ObjectUtils.isEmpty(existUser)){
            log.error("账号:["+userInfo.getUserAccount()+"]不存在");
            return true;
        }
        return false;
    }

    public boolean userLogin(UserInfo userInfo){
        //查询账号是否存在
        UserInfo existUser = getOne(
                Wrappers.<UserInfo>lambdaQuery()
                        .eq(UserInfo::getUserAccount,userInfo.getUserAccount())
        );
        if(ObjectUtils.isEmpty(existUser)){
            log.error("账号:["+userInfo.getUserAccount()+"]不存在");
            return false;
        }
        //验证密码
        try {
            String userPassword = userInfo.getUserPassword();//用户密码
            log.info("用户密码::"+userPassword);
            String userPassword1 = AESUtil.decryptCBC(userPassword, "abcdefghijklmnop");//解密
            System.out.println("解密用户输入密码:::"+userPassword1);

            QueryWrapper<UserInfo> wrapper = new QueryWrapper<>();
            wrapper.eq("USER_ACCOUNT", userInfo.getUserAccount())
                    .select("ID","MOBILE_NUMBER","USER_NAME", "USER_ACCOUNT","USER_PASSWORD");
            UserInfo userMassage = this.userInfoMapper.selectOne(wrapper);
            String dbUserPassward = userMassage.getUserPassword();
            String decryptDbUserPassward = AESUtil.decryptCBC(dbUserPassward,"abcdefghijklmnop");
            log.info("db存储密码解密后:"+decryptDbUserPassward);
            if (userPassword1.equals(decryptDbUserPassward)){
                return true;
            }return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public static void main(String[] args) {
        System.out.println("aaa");
    }
    @Override
    public boolean userMessageLogin(RequestData requestData) {
        //判断短信验证码是否正确
        //redis取验证码
        Jedis jedis = new Jedis(redisUrl,6379);
        String redisCode = jedis.get(requestData.getMobileNumber());
        String verificationCode = requestData.getVerificationCode();//用户验证码
        String userCode = verificationCode.toLowerCase();
        log.info("redis存储的code::"+redisCode);
        log.info("用户输入的code::"+userCode);
       if(userCode!=null&&redisCode!=null){
           if (userCode.equals(redisCode)){
               return true;
           }
           jedis.del(requestData.getMobileNumber());//删除key
       }
        return false;
    }


    public String getBackPassword(){




        return "";
    }


    public boolean userInfoChange(){




        return false;
    }

    /**
     *RequestData转UserInfo
     * @param requestData
     * @return
     */
    public UserInfo convert(RequestData requestData) {
        UserInfo userInfo = new UserInfo();
        userInfo.setMobileNumber(requestData.getMobileNumber());//手机号
        userInfo.setUserName(requestData.getMobileNumber().toString());//用户名称（手机号）
        userInfo.setUserAccount(requestData.getMobileNumber());//用户账号（手机号）

        userInfo.setUserPassword(requestData.getUserPassword());//密码
        return userInfo;
    }

    /**
     * 获取用户信息
     * @return
     */
    @Override
    public List<UserInfo> getuserInfoByMobleNumber(UserInfo userInfo) {
        if (userInfo.getMobileNumber()!=null && userInfo.getMobileNumber().length()>0){
            List<UserInfo> arrayList = new ArrayList<>();
            QueryWrapper<UserInfo> wrapper = new QueryWrapper<>();
            wrapper.eq("MOBILE_NUMBER", userInfo.getMobileNumber())
                    .select("ID","MOBILE_NUMBER","USER_NAME", "USER_ACCOUNT","USER_NICK_NAME","USER_AVATA_PATH","USER_BIRTHDAY","USER_ADDRESS","USER_HOBBY");
            UserInfo userMassage = this.userInfoMapper.selectOne(wrapper);
            arrayList.add(userMassage);
            return arrayList;
        }else {
            QueryWrapper<UserInfo> wrapper = new QueryWrapper<>();
            List<UserInfo> userInfos = userInfoMapper.selectList(wrapper);

            return userInfos;
        }

    }


    /**
     * 设置用户信息
     * @param userInfo
     * @return
     */
    @Override
    public int setuserInfoByMobleNumber(UserInfo userInfo) {
        UserInfo upUserInfo = new UserInfo();
        upUserInfo.setId(userInfo.getId());
        upUserInfo.setUserNickName(userInfo.getUserNickName());//昵称
        upUserInfo.setUserAvataPath(userInfo.getUserAvataPath());//头像路径
        upUserInfo.setUserAddress(userInfo.getUserAddress());//用户住址
        upUserInfo.setUserBirthday(userInfo.getUserBirthday());//用户生日
        upUserInfo.setUserHobby(userInfo.getUserHobby());//用户爱好
        System.out.println("upUserInfo:::::"+upUserInfo);
        int i = this.userInfoMapper.updateById(upUserInfo);
        return i;
    }

}
