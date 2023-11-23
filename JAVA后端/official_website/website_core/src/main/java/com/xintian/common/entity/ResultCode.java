package com.xintian.common.entity;

/**
 * 公共的返回码
 *      返回码code：
 *          成功：10000
 *          失败：10001
 *          未登陆：10002
 *          未授权：10003
 *          抛出异常：99999
 *
 *
 * */
public enum ResultCode {

    SUCCESS(true,10000,"操作成功！"),
    //---系统错误返回码-----
    FAIL(false,10001,"操作失败"),
    UNAUTHENTICATED(false,10002,"您还未登录"),
    UNAUTHORISE(false,10003,"权限不足"),
    SERVER_ERROR(false,99999,"抱歉，系统繁忙，请稍后重试！"),
    NOUPLOADFILE_ERROR(false,20006,"上传失败，请选择文件!"),
    //---用户操作返回码----  2xxxx
    MOBILEORPASSWORDERROR(false,20001,"账户名或密码错误"),
    PERSONAL_USER_EXISTS(false,20002,"个人用户已存在!"),
    LOGINUSER_NOT_EXIST(false,20003,"该用户不存在!"),
    LOGINUSER_NOT_ALLOW(false,20004,"用户已被锁定，请联系管理员!"),
    MISSING_PARAM(false,20005,"缺少参数"),
    ERROR_IMAGE_CODE(false,20006,"图片验证码错误"),
    ERROR_SEND(false,20007,"短信验证码发送失败"),
    ERROR_MESSAGE_CODE(false,20008,"短信验证码验证失败"),
    PERSONAL_USER_NOT_EXISTS(false,20009,"个人用户不存在!"),
    //---企业操作返回码----  3xxxx
    COMPANY_USER_EXISTS(false,30001,"用户已存在!"),
    COMPANY_USER_UNEXISTS(false,30002,"企业用户不存在!"),
    COMPANY_ALREADY_EXISTS(false,30003,"企业已存在，请勿重复添加!");
    //---权限操作返回码----  4xxxx
    //---其他操作返回码----  5xxxx
    /**
     * 上面四种操作的返回码，在这里定义，预留着。
     * 每种操作类型的返回码，为了分别以2,3,4,5开头分别表示。
     * */

    //操作是否成功
    boolean success;
    //操作代码
    int code;
    //提示信息
    String message;

    ResultCode(boolean success,int code, String message){
        this.success = success;
        this.code = code;
        this.message = message;
    }

    public boolean success() {
        return success;
    }

    public int code() {
        return code;
    }

    public String message() {
        return message;
    }

}
