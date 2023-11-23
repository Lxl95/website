package com.xintian.login.service;


import com.xintian.login.base.BaseService;
import com.xintian.login.entity.VerificationCode;

public interface VerificationCodeService extends BaseService<VerificationCode> {


    boolean getVerificationCode(VerificationCode verificationCode) throws Exception;
}
