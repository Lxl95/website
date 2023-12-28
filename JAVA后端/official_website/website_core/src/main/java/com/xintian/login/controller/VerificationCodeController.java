package com.xintian.login.controller;



import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import com.xintian.login.entity.VerificationCode;
import com.xintian.login.service.VerificationCodeService;
import com.xintian.login.utils.UniqueIdGenerator;
import com.xintian.login.utils.ValidateCodeUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import redis.clients.jedis.Jedis;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/verificationCode/")
@Api(tags = "验证码-控制器")
@Slf4j
public class VerificationCodeController {
	@Autowired
	private VerificationCodeService verificationCodeService;
	@Value("${xintian.redisUrl}")
	private String redisUrl;
	@Value("${xintian.redisPort}")
	private Integer redisPort;
	@Value("${xintian.redisPassword}")
	private String redisPassword;

	@GetMapping("getVerificationCode")
	@ApiOperation(value = "获取短信验证码")
	public Result getVerificationCode(VerificationCode verificationCode) {
		try {
			boolean flag = verificationCodeService.getVerificationCode(verificationCode);
			return new Result(ResultCode.SUCCESS,flag);
		} catch (Exception e) {
			e.printStackTrace();
			log.error(">>>>>>>获取验证码发生异常，{}",e);
			return Result.ERROR();
		}
	}

//	@RequestMapping(value ="getPictureVerificationCode/{username}")
//	@ApiOperation(value = "获取图片验证码")
//	public void createCaptcha(@PathVariable String username, HttpServletResponse response) throws IOException {
//		// 定义图形验证码的长和宽
//		LineCaptcha lineCaptcha = CaptchaUtil.createLineCaptcha(200, 100);
//		// 图形验证码写出，可以写出到文件，也可以写出到流
//		lineCaptcha.write(response.getOutputStream());
//		// 关闭流
//		response.getOutputStream().close();
//
//		Jedis jedis = new Jedis(redisUrl,6379);
//		jedis.set(username,lineCaptcha.getCode());
//		jedis.get(username);
////		System.out.println("jedis.get::::::"+jedis.get(username));
//		jedis.close();
//		// getCode()可以获取到验证码的值
////		System.out.println(lineCaptcha.getCode());
//		// verify()验证图形验证码的有效性，返回boolean值
////		System.out.println(lineCaptcha.verify("ABCD"));
////		System.out.println(lineCaptcha.verify(lineCaptcha.getCode()));
//	}

	//返回验证码图片
	@GetMapping("/getCaptchaImg")
	@ApiOperation(value = "获取图片验证码")
	public void getCaptchaImg(HttpServletRequest request, HttpServletResponse response, HttpSession session) {

		try {


			response.setContentType("image/png");
			response.setHeader("Cache-Control", "no-cache");
			response.setHeader("Expire", "0");
			response.setHeader("Pragma", "no-cache");
			long id1 = UniqueIdGenerator.generateId();//生成唯一id
			String runNo = String.valueOf(id1);
			response.setHeader("codeId",runNo);
            response.setHeader("Access-Control-Expose-Headers","codeId");
			ValidateCodeUtil validateCode = new ValidateCodeUtil();
			// getRandomCodeImage方法会直接将生成的验证码图片写入response
			String randomCodeImage = validateCode.getRandomCodeImage(request, response);
			//验证码放到redis
			Jedis jedis = new Jedis(redisUrl,redisPort);
			if (!redisPassword.isEmpty()){
				jedis.auth(redisPassword);
			}
			jedis.setex(runNo,300,randomCodeImage.toLowerCase());
			jedis.close();
			// System.out.println("session里面存储的验证码为："+session.getAttribute("JCCODE"));
//			return new Result(ResultCode.SUCCESS,runNo);
		} catch (Exception e) {
			e.printStackTrace();
//			return new Result(ResultCode.FAIL);
		}

	}

}
