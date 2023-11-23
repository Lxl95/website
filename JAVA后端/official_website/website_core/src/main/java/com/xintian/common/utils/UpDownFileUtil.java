package com.xintian.common.utils;

import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.ClassUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Component
@Slf4j
public class UpDownFileUtil {

    //声明一个对象用来保存图片地址；
    private String appDownloadUrl = null;
    private String imageShowUrl = null;

   //单文件上传:服务于app文件上传
    public Result appUpload(MultipartFile file, Result responseBean, String filePath) {

        System.out.println("进入：单文件上传接口");
        //file == null ||
        if (file.isEmpty()) {
            System.out.println("上传失败，请选择文件");
            responseBean.setCode(1);
            responseBean.setMessage("上传失败，请选择文件！");
            return responseBean;
        }

        //1. 获取文件名
        String fileName = file.getOriginalFilename();
        //2.获取文件大小
        int size = (int) file.getSize();
        System.out.println("fileName=" + fileName + "-->" + "fileSize=" + size);
        //3.1 指定上传路径
        //获取当前项目所在磁盘
        String path = System.getProperty("user.dir");
        String driver = path.split(":")[0];

        String PATH_PREFIX = driver+":"+filePath;
        String FILE_PATH_PREFIX = filePath;
        String fileDirPath = new String(PATH_PREFIX);
        File fileDir = new File(fileDirPath);
        String absolutePath = fileDir.getAbsolutePath();
        System.out.println(absolutePath);
        File uploadPath = new File(absolutePath);

        //3.2 判断路径存在否，不存在则创建；
        if (!uploadPath.exists()) {
            uploadPath.mkdirs();
        }

        //4.开始上传
        File destFile = new File(uploadPath + File.separator + fileName);
        try {
            file.transferTo(destFile);
            System.out.println("上传成功");
            appDownloadUrl = FILE_PATH_PREFIX + fileName;
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("上传失败");
            responseBean.setCode(1);
            responseBean.setMessage("上传失败：服务异常！");
        }
        responseBean.setCode(0);
        responseBean.setMessage("上传成功！");
        responseBean.setData(appDownloadUrl);
        return responseBean;
    }

    //带结果响应类的单文件上传
    public Result fileUpload(MultipartFile file, Result responseBean, HttpServletRequest request, String imgPath) throws IOException {

        log.info("进入：单文件上传接口file.getOriginalFilename为{}",file.getOriginalFilename());
        long size = file.getSize();
        String originalFilename = file.getOriginalFilename();
        String contentType = file.getContentType();
        if (file.isEmpty()) {
            return new Result(ResultCode.NOUPLOADFILE_ERROR);
        }
        //1.获取源文件名
        String fileName = file.getOriginalFilename();

        String PATH_PREFIX;//路径前缀
        //获取当前项目所在磁盘盘符 path = D:\XinTianKeJi\tianyuanproject\yuZhou-userAppAndPC
        String path = System.getProperty("user.dir");
        String driver = path.split(":")[0];//driver = D
        PATH_PREFIX = driver+":"+imgPath;  //这个是指定到了本地磁盘；PATH_PREFIX = D:/JavaInstall/upload/imgs/
        //6.指定上传路径
        String fileDirPath = new String(PATH_PREFIX);
        /** 按照日期生成图片文件夹 =======开始==========*/
        Date date = new Date();
        String format = new SimpleDateFormat("yyyy/MM/dd/").format(date);
        String endPath = fileDirPath + format;
        File fileDir = new File(endPath);
        String absolutePath = fileDir.getAbsolutePath();//getAbsolutePath()方法返回抽象路径名的绝对路径名字符串
        File uploadPath = new File(absolutePath); //uploadPath =D:/JavaInstall/upload/imgs+
        /** 按照日期生成图片文件夹 =======开始==========*/
        //7.判断路径存在否，不存在则创建；
        if (!uploadPath.exists()) {
            uploadPath.mkdirs();
        }

        //目标文件名
        File destFile = new File(uploadPath + File.separator + fileName);

        File destFile2 = null;
        if(destFile .exists()){
            //如果存在
            String[] fileNameOfSplit = fileName.split("\\.");
            String sub = fileNameOfSplit[fileNameOfSplit.length-2];//获取逗号 后缀名前面的一个字符串
            Date time = new Date();
            String res = new SimpleDateFormat("yyyyMMddHHmmss").format(time);
            String fileName2 = sub+res+"."+fileNameOfSplit[fileNameOfSplit.length-1];
            destFile2 = new File(uploadPath + File.separator + fileName2);
        }else {
            destFile2 = destFile;
        }


        try {
            //transferto()方法，是springmvc封装的方法，用于图片上传时，把内存中图片写入磁盘
            file.transferTo(destFile2);
            imageShowUrl = format+fileName;//imageShowUrl = /JavaInstall/upload/imgs/a3f1ad3338ac4c61ad5f8aad2d51f0dc.png
            //将图片回显地址放进object中；
            responseBean.setSuccess(true);
            responseBean.setCode(10000);
            responseBean.setMessage("上传成功");
            responseBean.setData(imageShowUrl);
        } catch (IOException e) {
            System.out.println("上传失败");
            e.printStackTrace();
        }
        return responseBean;
    }

   //文件上传
    public Result fileUpload(MultipartFile file, Result responseBean, HttpServletRequest request) {

        // log.info("单文件上传");file == null ||
        if ( file.isEmpty()) {
            responseBean.setCode(1);
            responseBean.setMessage("上传失败，请选择文件");
            return responseBean;
        }
        //获取文件名
        String fileName = file.getOriginalFilename();
        //取文件的后缀名；
        String[] fileNameOfSplit = fileName.split("\\.");
        //得到文件的后缀名
        String fileNameToLowerCase = fileNameOfSplit[1].toLowerCase();
        String PATH_PREFIX;
        String FILE_PATH_PREFIX;
        PATH_PREFIX = "C:/JavaInstall/upload/imgs";  //这个是指定到了本地磁盘；
        // PATH_PREFIX = "D:/JavaInstall/upload/imgs";
        FILE_PATH_PREFIX = "/JavaInstall/upload/imgs/";
        //生成唯一随机串
        UUID uuid = UUID.randomUUID();
        String uuidStr = uuid.toString().replace("-", "");
        System.out.println("uuidStr=" + uuidStr);
        //生成唯一文件名
        String newFileName = uuidStr + "." + fileNameToLowerCase;
        //获取文件大小
        int size = (int) file.getSize();
        System.out.println("fileName=" + fileName + "-->" + "fileSize=" + size);

        //指定上传路径
        // File uploadPath = new File(ClassUtils.class.getClassLoader().getResource("images/upload").getPath());
        // String fileDirPath = new String("src/main/resources/" + PATH_PREFIX);
        String fileDirPath = new String(PATH_PREFIX);
        File fileDir = new File(fileDirPath);
        String absolutePath = fileDir.getAbsolutePath();
        System.out.println(absolutePath);
        File uploadPath = new File(absolutePath);

        //判断路径存在否，不存在则创建；
        if (!uploadPath.exists()) {
            uploadPath.mkdirs();
        }
        //也可以指定本地绝对路径
        // String filePath = "E:/XTKJ/pictureTest/";

        //目标文件名
        File destFile = new File(uploadPath + File.separator + newFileName);
        try {
            file.transferTo(destFile);
            System.out.println("上传成功");
            // 拼接图片访问路径存
            //获取主机地址
            // String ipAdress = getHostIPUtil.getIpAdress(request);
            //获取http协议
            // String scheme = request.getScheme();//http
            //获取主机名
            // String serverName = request.getServerName();//localhost
            // String serverName = request.getServerName();//localhost
            //获取端口号
            // int serverPort = request.getServerPort();//8080
            //获取项目名
            // String contextPath = request.getContextPath();//项目名
            //拼接图片访问路径
            // String url = scheme + "://" + serverName + ":" + serverPort + contextPath + FILE_PATH_PREFIX;
            // imageShowUrl = url + newFileName;
            //图片路径不能写死，需要前端人员获取当前主机然后实时拼接图片地址；
            imageShowUrl = FILE_PATH_PREFIX + newFileName;
            //将图片回显地址放进object中；
            responseBean.setCode(0);
            responseBean.setMessage("上传成功");
            responseBean.setData(imageShowUrl);
        } catch (IOException e) {
            System.out.println("上传shibai");
            e.printStackTrace();
        }
        return responseBean;
    }

    //实现多文件上传
    public List<String> multiUpload(HttpServletRequest request, String newsId) {
        System.out.println("多文件上传");
        List<MultipartFile> files = ((MultipartHttpServletRequest) request).getFiles("file");
        List<String> list = new ArrayList<>();
        for (int i = 0; i < files.size(); i++) {
            MultipartFile file = files.get(i);
            if (file.isEmpty()) {
                list.add("第" + (i + 1) + "文件为空，" + "上传失败");
                return list;
            }
            //获取文件名
            String fileName = file.getOriginalFilename();

            //取文件的后缀名；
            String[] fileNameOfSplit = fileName.split("\\.");
            String fileNameToLowerCase = fileNameOfSplit[1].toLowerCase();

            //生成唯一随机串
            UUID uuid = UUID.randomUUID();
            String uuidStr = uuid.toString().replace("-", "");
            System.out.println("uuidStr= " + uuidStr);
            //生成唯一文件名
            String newFileName = uuidStr + fileName;

            //获取项目路径到webapp
            String filepath=request.getServletContext().getRealPath("/")+"files\\";
            //获取项目根路径并转到static/videos
            String path = ClassUtils.getDefaultClassLoader().getResource("").getPath()+"static/images/";
            File file2=new File(path);//指定上传路径


            //判断路径存在否，不存在则创建；
            if (!file2.exists()) {
                file2.mkdirs();
            }

            try {
                file.transferTo(new File(file2+"\\"+newFileName+"."+fileNameToLowerCase));
                System.out.println("第" + (i + 1) + "个文件上传成功");
                imageShowUrl = "http://192.168.2.212:9002/images/"+newFileName+"."+fileNameToLowerCase;
                list.add(i, imageShowUrl);
                // System.out.println("i=" + i);
            } catch (IOException e) {
                System.out.println(e);
                System.out.println("上传第" + (i + 1) + "个文件失败");
                list.add("第" + (i + 1) + "上传失败");
                return list;
            }
        }
        return list;
    }



//        if(destFile .exists()){
//            //如果存在
//            String[] fileNameOfSplit = fileName.split("\\.");
//            String sub = fileNameOfSplit[fileNameOfSplit.length-2];//获取逗号 后缀名前面的一个字符串
//            String num = sub.substring(sub.length() - 1, sub.length()); //截取其最后一个数字
//            if (num.equals("1")) {
//                //如果是1  就转为数字类型 在加上1
//                Integer it = new Integer(num);
//                Integer itres = it + 1;
//                sub.replace(num,itres+"");
//            }
//            //如果不是1 就加1
//            sub = sub + 1;
//
//
//            fileName = sub+"."+fileNameOfSplit[fileNameOfSplit.length-1];
//        }
//
//        File destFile2 = new File(uploadPath + File.separator + fileName);



}
