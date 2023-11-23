package com.xintian.common.utils;
//import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;

import com.xintian.common.entity.Result;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;
import org.springframework.stereotype.Component;
import org.springframework.util.ClassUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Component
@Slf4j
public class UploadFileUtil {



    //声明一个对象用来保存图片地址；
    private String appDownloadUrl = null;
    private String imageShowUrl = null;

    /***
     * 1.单文件上传:服务于app文件上传
     * @param
     * @param
     *@author lishuguang
     *@date 2019-08-21
     */
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

    /**
     * 2.带结果响应类的单文件上传
     *
     */
    public Result fileUpload(MultipartFile file, Result responseBean, HttpServletRequest request, String imgPath) throws IOException {

        log.info("进入：单文件上传接口file.getOriginalFilename为{}",file.getOriginalFilename());
        long size = file.getSize();
        String originalFilename = file.getOriginalFilename();

//        if (file.isEmpty()) {
//            return new Result(ResultCode.NOUPLOADFILE_ERROR);
//        }

        //1.获取文件名
        String fileName = file.getOriginalFilename();
        //2.取文件的后缀名；
//        String substring = fileName.substring(fileName.length() - 3, fileName.length());
//        String fileNameToLowerCase = substring.toLowerCase();
        /*======================*/
        String[] fileNameOfSplit = fileName.split("\\.");
        String substring = fileNameOfSplit[fileNameOfSplit.length-1];
        String fileNameToLowerCase = substring.toLowerCase();
        /*=======================*/
        String PATH_PREFIX;
        String FILE_PATH_PREFIX;
        //获取当前项目所在磁盘盘符 path = D:\XinTianKeJi\tianyuanproject\yuZhou-userAppAndPC
        String path = System.getProperty("user.dir");
        String driver = path.split(":")[0];//driver = D
        PATH_PREFIX = driver+":"+imgPath;  //这个是指定到了本地磁盘；PATH_PREFIX = D:/JavaInstall/upload/imgs/
        FILE_PATH_PREFIX = imgPath;//FILE_PATH_PREFIX= /JavaInstall/upload/imgs/
        //3.生成唯一随机串
        UUID uuid = UUID.randomUUID();
        String uuidStr = uuid.toString().replace("-", "");
        //4.生成唯一文件名
        String newFileName = uuidStr + "." + fileNameToLowerCase;
        //6.指定上传路径
        String fileDirPath = new String(PATH_PREFIX);
        /** 按照日期生成图片文件夹 =======开始==========*/
        Date date = new Date();
        String format = new SimpleDateFormat("yyyy/MM/dd/").format(date);
        String endPath = fileDirPath + format;
        File fileDir = new File(endPath);
        String absolutePath = fileDir.getAbsolutePath();//getAbsolutePath()方法返回抽象路径名的绝对路径名字符串
        File uploadPath = new File(absolutePath); //uploadPath =D:/JavaInstall/upload/imgs
        /** 按照日期生成图片文件夹 =======开始==========*/
        //7.判断路径存在否，不存在则创建；
        if (!uploadPath.exists()) {
            uploadPath.mkdirs();
        }

        //目标文件名  destFile = D:/JavaInstall/upload/imgs/a3f1ad3338ac4c61ad5f8aad2d51f0dc.png
        File destFile = new File(uploadPath + File.separator + newFileName);
        try {
            //下面这一行 file.transferTo(destFile);方法，就是调用MultipartFile file的transferTo()方法。
            file.transferTo(destFile);
            // 拼接图片访问路径存
            //获取主机地址
            // String ipAdress = getHostIPUtil.getIpAdress(request);
            //获取http协议
            String scheme = request.getScheme();//http
            //获取主机名
            String serverName = request.getServerName();//localhost
            // String serverName = request.getServerName();//localhost
            //获取端口号
            int serverPort = request.getServerPort();//8080
            //获取项目名
            String contextPath = request.getContextPath();//项目名
            //拼接图片访问路径
            // String url = scheme + "://" + serverName + ":" + serverPort + contextPath + FILE_PATH_PREFIX;
            //图片路径不能写死，需要前端获取当前主机信息，然后实时拼接；http://192.168.2.212:8899/images/5e298a03b8f2455a9df09da4c50bd411.jpg
            imageShowUrl = format+newFileName;//imageShowUrl = /JavaInstall/upload/imgs/a3f1ad3338ac4c61ad5f8aad2d51f0dc.png
            //将图片回显地址放进object中；
            responseBean.setSuccess(true);
            responseBean.setCode(10000);
            responseBean.setMessage("上传成功");
            responseBean.setData(imageShowUrl);
        } catch (IOException e) {
            System.out.println("失败");
            e.printStackTrace();
        }
        return responseBean;
    }

    /**
     * 3.文件上传
     * @param file
     * @param responseBean
     * @param request
     * @return
     */
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

    //单视频上传
    public Result videoUpload(MultipartFile multipartFile, HttpServletRequest request, String videoPath){
        Result responseBean = new Result();
        //视频上传
        //获取原文件名
        String name=multipartFile.getOriginalFilename();
        //获取文件后缀
        String subffix=name.substring(name.lastIndexOf(".")+1,name.length());
        //控制格式
        if(subffix.equals("mp4")|| subffix.equals("mov") || subffix.equals("avi") || subffix.equals("wmv") || subffix.equals("m4v") || subffix.equals("dat") || subffix.equals("flv") || subffix.equals("mkv"))
        {
            //生成唯一随机串
            UUID uuid = UUID.randomUUID();
            String uuidStr = uuid.toString().replace("-", "");
            System.out.println("uuidStr= " + uuidStr);
            //生成唯一文件名
            String newFileName = uuidStr + "." + subffix;
            String PATH_PREFIX;
            //获取当前项目所在磁盘盘符 path = D:\XinTianKeJi\tianyuanproject\yuZhou-userAppAndPC
            String path = System.getProperty("user.dir");
            String driver = path.split(":")[0];//driver = D
            PATH_PREFIX = videoPath;

            //6.指定上传路径
            // File uploadPath = new File(ClassUtils.class.getClassLoader().getResource("images/upload").getPath());
            // String fileDirPath = new String("src/main/resources/" + PATH_PREFIX);
            String fileDirPath = new String(PATH_PREFIX);
            File fileDir = new File(fileDirPath);
            String absolutePath = fileDir.getAbsolutePath();//getAbsolutePath()方法返回抽象路径名的绝对路径名字符串
            System.out.println("文件路径：" + absolutePath);
            File uploadPath = new File(absolutePath); //uploadPath =D:/JavaInstall/upload/imgs

            //7.判断路径存在否，不存在则创建；
            if (!uploadPath.exists()) {
                uploadPath.mkdirs();
            }

            //目标文件名  destFile = D:/JavaInstall/upload/imgs/a3f1ad3338ac4c61ad5f8aad2d51f0dc.png
            File destFile = new File(uploadPath + File.separator + newFileName);

            //保存文件
            try {
                multipartFile.transferTo(destFile);
            } catch (IOException e) {
                System.out.println(e);
            }
            System.out.println("上传视频成功");
            //最终的可访问路径是 http://39.98.76.39:15011/videos/20200729104738.mp4
            //imageShowUrl = "https://192.168.2.212:9002" + videoPath+newFileName;
            imageShowUrl =  newFileName;
            responseBean.setCode(0);
            responseBean.setMessage("上传成功");
            responseBean.setData(imageShowUrl);
            responseBean.setSuccess(true);

        }else{
            log.error("视频格式不对====");
        }

        return responseBean;
    }




    /**
     * 小程序音频上传接口 需要Base64解密微信端的ilk文件为webm格式
     *
     */
    public Result wxVoiceUpload(MultipartFile file, Result responseBean, HttpServletRequest request, String imgPath) throws Exception{

        log.info("进入：小程序音频上传接口,接收的参数为{}",file.getOriginalFilename());
        String originalFilename = file.getOriginalFilename();
        byte[] bytes = file.getBytes();
        InputStream inputStream1 = file.getInputStream();
        String contentType = file.getContentType();
        String name = file.getName();
        long size = file.getSize();
        boolean empty = file.isEmpty();

//        if (file==null ||file.isEmpty()) {
//            return new Result(ResultCode.FAIL);
//        }
        InputStreamReader read = null;//考虑到编码格式
        StringBuilder lineTxt = null;
        try {
            InputStream inputStream = file.getInputStream();
            read = new InputStreamReader(inputStream,"utf-8");
            BufferedReader bufferedReader = new BufferedReader(read);
            lineTxt = new StringBuilder();
            String line = null;
            while ((line = bufferedReader.readLine()) != null) {
                lineTxt.append(line);
            }
        } catch (IOException e) {
            log.error("小程序解码音频文件失败,{}",e);
            e.printStackTrace();
        } finally {
            read.close();
        }

        String olddata = lineTxt.toString();
        olddata = olddata.replace("data:audio/webm;base64,", "");

        //获取当前项目所在磁盘盘符 path = D:\XinTianKeJi\tianyuanproject\yuZhou-userAppAndPC
        String path = System.getProperty("user.dir");
        String driver = path.split(":")[0];//driver = D
        String PATH_PREFIX = driver+":"+imgPath;  //这个是指定到了本地磁盘；PATH_PREFIX = D:/JavaInstall/upload/imgs/
        //3.生成唯一随机串
        UUID uuid = UUID.randomUUID();
        String uuidStr = uuid.toString().replace("-", "");
        //4.生成唯一文件名
        String newFileName = uuidStr +".webm";
        //6.指定上传路径
        String fileDirPath = new String(PATH_PREFIX);
        /** 按照日期生成图片文件夹 =======开始==========*/
        Date date = new Date();
        String format = new SimpleDateFormat("yyyy/MM/dd/").format(date);
        String endPath = fileDirPath + format;
        File fileDir = new File(endPath);
        String absolutePath = fileDir.getAbsolutePath();//getAbsolutePath()方法返回抽象路径名的绝对路径名字符串
        File uploadPath = new File(absolutePath); //uploadPath =D:/JavaInstall/upload/imgs
        /** 按照日期生成图片文件夹 =======开始==========*/
        //7.判断路径存在否，不存在则创建；
        if (!uploadPath.exists()) {
            uploadPath.mkdirs();
        }

            //语音解码后的音频文件保存的地址
            String webmurl = uploadPath + File.separator + newFileName;
            File webmFile = new File(webmurl);

            //byte[] bt = Base64.decode(olddata);
            //java.util.Base64
            FileOutputStream in = new FileOutputStream(webmFile);
            try {
                byte[] bt = Base64.decodeBase64(olddata);
                in.write(bt, 0, bt.length);
                in.close();
                imageShowUrl = format+newFileName;//imageShowUrl = /JavaInstall/upload/imgs/a3f1ad3338ac4c61ad5f8aad2d51f0dc.png
                //将图片回显地址放进object中；
                responseBean.setSuccess(true);
                responseBean.setCode(10000);
                responseBean.setMessage("上传成功");
                responseBean.setData(imageShowUrl);
            } catch (IOException e) {
                log.error("小程序保存解码后的音频文件失败,{}",e);
                e.printStackTrace();
            }

        return responseBean;
    }

}
