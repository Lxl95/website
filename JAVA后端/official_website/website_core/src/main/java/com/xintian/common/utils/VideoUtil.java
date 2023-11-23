package com.xintian.common.utils;

import com.xintian.common.entity.Result;
import com.xintian.common.entity.ResultCode;
import it.sauronsoftware.jave.Encoder;
import it.sauronsoftware.jave.MultimediaInfo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.nio.channels.FileChannel;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @author wt
 * @date 2023/7/12
 */
@Component
@Slf4j
public class VideoUtil {
    //声明一个对象用来保存图片地址；
    private String imageShowUrl = null;
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
            Map<String, String> videoInformation = getVideoTime(file);
            videoInformation.get("RESOLUTION");
            videoInformation.get("SIZE");
            videoInformation.get("TIME");
            videoInformation.get("VFORMAT");

            //transferto()方法，是springmvc封装的方法，用于图片上传时，把内存中图片写入磁盘
            file.transferTo(destFile2);
            imageShowUrl = format+fileName;//imageShowUrl = /JavaInstall/upload/imgs/a3f1ad3338ac4c61ad5f8aad2d51f0dc.png
            //将图片回显地址放进object中；
//            Map<String, String> map = new HashMap<>();
            responseBean.setSuccess(true);
            responseBean.setCode(10000);
            responseBean.setMessage("上传成功");
            responseBean.setData(imageShowUrl);
            videoInformation.put("imageShowUrl",imageShowUrl);
            responseBean.setData(videoInformation);
        } catch (Exception e) {
            System.out.println("上传失败");
            e.printStackTrace();
        }
        return responseBean;
    }
    public Map<String,String> getVideoTime(MultipartFile multipartFile) throws Exception{
        Map<String,String> map = new HashMap<>();
        //MultipartFile转File
        File file = MultipartFileToFile(multipartFile);
        if(null == file){
            throw new Exception("MultipartFile转File失败");
        }
        Encoder encoder = new Encoder();
        Long second = null;
        try (FileInputStream fis = new FileInputStream(file)){
            MultimediaInfo m = encoder.getInfo(file);

            //视频高
            int height = m.getVideo().getSize().getHeight();
            //视频宽
            int width = m.getVideo().getSize().getWidth();
            map.put("RESOLUTION", width+"*"+height);//分辨率

            FileChannel fc = fis.getChannel();
            BigDecimal fileSize = new BigDecimal(fc.size());
            //视频大小
            String size = fileSize.divide(new BigDecimal(1048576), 2, RoundingMode.HALF_UP) + "MB";
            map.put("SIZE", size);
            long duration = m.getDuration() / 1000;
            second = duration;
            log.info("视频时长：{}s",duration);
        } catch (Exception e) {
            e.printStackTrace();
        }
        String time = second2Time(second);
//        map.put("TIME",time);//时长
        // 获取文件名
        String fileName = multipartFile.getOriginalFilename();
        // 获取文件后缀
        String fileNameSuffix = getFileNameSuffix(fileName);
        map.put("VFORMAT",fileNameSuffix);//格式
        return map;
    }
    /**
     * 将MultipartFile转换为File
     * @param multiFile 传入的文件
     * @return 出参
     */
    private File MultipartFileToFile(MultipartFile multiFile) {
        // 获取文件名
        String fileName = multiFile.getOriginalFilename();
        // 获取文件后缀
        String prefix = fileName.substring(fileName.lastIndexOf("."));
        //时间戳+6位随机数
        SimpleDateFormat sdf2 = new SimpleDateFormat("yyyyMMddhhmmssSSS");
        String date2 = sdf2.format(new Date());
        String random = String.valueOf((int) ((Math.random() * 9 + 1) * Math.pow(10,5)));
        String preName = date2+random;

        try {
            File file = File.createTempFile(fileName+preName, prefix);
            multiFile.transferTo(file);
            return file;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * @param second 秒
     * @description: 秒转换为时分秒 HH:mm:ss 格式 仅当小时数大于0时 展示HH
     * @return: {@link String}
     */
    public static String second2Time(Long second) {
        if (second == null || second < 0) {
            return "00:00";
        }

        long h = second / 3600;
        long m = (second % 3600) / 60;
        long s = second % 60;
        String str = "";
        if (h > 0) {
            str = (h < 10 ? ("0" + h) : h) + ":";
        }
        str += (m < 10 ? ("0" + m) : m) + ":";
        str += (s < 10 ? ("0" + s) : s);
        return str;
    }
    /**
     * 获取后缀:如果 filePath = xxxxxx.jpg 返回“.jpg”后缀
     */
    public static String getFileNameSuffix(String filePath) {
        if (filePath == null || filePath.lastIndexOf(".") == -1) {
            //文件没有后缀名的情况,直接返回空
            return "";
        }
        //获取filePath最后一个.后面的字符串当后缀
        return filePath.substring(filePath.lastIndexOf("."));
    }
}
