package com.xintian.controller;

import com.xintian.common.entity.Result;
import com.xintian.common.utils.UpDownFileUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sun.misc.BASE64Encoder;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URLEncoder;

/**
 * @author: yanyongpan
 * @description：
 */
//1.解决跨域
@CrossOrigin
//2.声明restContoller
@RestController
//3.设置父路径
@RequestMapping(value="/upload")
@Slf4j
public class UpDownFileController {

    @Value("${filePath}")
    String filePath;
    @Value("${imgPath}")
    String imgPath;
    @Value("${videoPath}")
    String videoPath;
    @Value("${otherPath}")
    String otherPath;
    @Value("${toolPath}")
    String toolPath;
    @Autowired
    UpDownFileUtil upDownFileUtil;

    /**
     * create by: yanyongpan
     * description:
     * 1.工具上传接口
     */

    @PostMapping("/toolUpload")
    public Result voiceUpload(HttpServletRequest request, HttpServletResponse response, @RequestParam("file") MultipartFile file) throws Exception {
        log.info("进入:音频上传接口");
        long size = file.getSize();
        String originalFilename = file.getOriginalFilename();
        Result responseBean = new Result();
        //上传音频
        Result result = upDownFileUtil.fileUpload(file, responseBean, request,toolPath);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     *  2 图片上传接口
     */
    @PostMapping("/imgUpload")
    public Result imgUpload(HttpServletRequest request, HttpServletResponse response, @RequestParam("file") MultipartFile file) throws IOException {
        System.out.println("进入:图片上传接口");
        log.info("进入:图片上传接口");
        Result responseBean = new Result();
        //上传音频
        Result result = upDownFileUtil.fileUpload(file, responseBean, request,imgPath);
        return result;
    }
    /**
     * create by: yanyongpan
     * description:
     * 3 视频上传接口
     */
    @PostMapping("/videoUpload")
    public Result videoUpload(HttpServletRequest request, HttpServletResponse response, @RequestParam("file") MultipartFile file) throws IOException {
        log.info("进入:视频上传接口");
        Result responseBean = new Result();
        //上传音频
        Result result = upDownFileUtil.fileUpload(file, responseBean, request,videoPath);
        return result;
    }
    /**
     * create by: yanyongpan
     * description:
     *  4 附件上传接口
     */
    @PostMapping("/fileUpload")
    public Result fileUpload(HttpServletRequest request, HttpServletResponse response, @RequestParam("file") MultipartFile file) throws IOException {
        System.out.println("进入:附件上传接口");
        log.info("进入:附件上传接口");
        Result responseBean = new Result();
        //上传音频
        Result result = upDownFileUtil.fileUpload(file, responseBean, request,filePath);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     * 5.其他资料上传接口
     */

    @PostMapping("/otherUpload")
    public Result otherUpload(HttpServletRequest request, HttpServletResponse response, @RequestParam("file") MultipartFile file) throws Exception {
        log.info("进入:音频上传接口");
        long size = file.getSize();
        String originalFilename = file.getOriginalFilename();
        Result responseBean = new Result();
        //上传音频
        Result result = upDownFileUtil.fileUpload(file, responseBean, request,otherPath);
        return result;
    }

    /**
     * create by: yanyongpan
     * description:
     *  6 下载接口
     */
    @RequestMapping("/download")
    public void add(String name, HttpServletRequest request, HttpServletResponse response)throws IOException{
        String path = "E:/JavaInstall/upload/voice/";
        String pathname = path+name;

        ServletContext servletContext = request.getServletContext();
        String mimeType = servletContext.getMimeType(pathname);
        System.out.println(mimeType);
        response.setContentType(mimeType);
       //response.setHeader("Content-Disposition","attachment;fileName="+"你好.jpg");
        if (request.getHeader("User-Agent").contains("Firefox")) {
            //如果是火狐浏览器使用Base64编码
            response.setHeader("Content-Disposition","attachment;fileName==?UTF-8?B?"+ new BASE64Encoder().encode("你好.jpg".getBytes("UTF-8"))+"?=");//+new BASE64Decoder().encode()
        }else {
            //如果是IE或者谷歌浏览器用URL编码
            response.setHeader("Content-Disposition","attachment;fileName="+ URLEncoder.encode("你好.jpg","UTF-8"));
        }

        FileInputStream resourceAsStream = new FileInputStream(pathname);
        //InputStream resourceAsStream = servletContext.getResourceAsStream(filename);
        IOUtils.copy(resourceAsStream,response.getOutputStream());
    }

    /**
     * create by: yanyongpan
     * description:
     *  7 .删除接口
     */
    @RequestMapping("/del")
    public boolean del(String name, HttpServletResponse response,HttpServletRequest request) throws IOException {
        String path = "E:/JavaInstall/upload/voice/";
        String pathname = path+name;
        //删除文件
        File file = new File(pathname);
        deleteFile(file);//出入要删除的文件
        return true;
    }


    //用来删除文件的方法
    public void deleteFile(File f){
        //判断是否是目录
        if (f.isDirectory()) {
            //得到目录下的所有文件.然后遍历
            File[] listFiles = f.listFiles();
            for (File file : listFiles) {
                //是文件夹就递归调用
                if (file.isDirectory()) {
                    deleteFile(file);
                }else {//是文件就删除
                    file.delete();
                }
            }
            //最后干掉自己
            f.delete();
        }else {//是文件直接删除
            f.delete();
        }
    }






}
