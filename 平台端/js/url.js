// 本地地址
var baseUrl = "http://192.168.2.155:10028";
var imageUrl = "http://192.168.2.155:10028/JavaInstall/upload/imgs/";
var fileUrl = "http://192.168.2.155:10028/JavaInstall/upload/files/";
var videoUrl = "http://192.168.2.155:10028/JavaInstall/upload/video/";
var baoZhuangBaseUrl = "http://219.150.181.194:7878/";
//保德
var baseUrl_API_BZLC = "http://39.103.180.221:10000/bz/";
var baseUrl_API_WeiXin = "http://39.103.180.221:10016/";
//泉港
var baseUrl_API_BZLC2 = "http://183.250.254.69:10010/";
var baseUrl_API_WeiXin2 = "http://183.250.254.69:10016/";
var liuchengMes = {
  // 保德
  "userNewInstallLC": {
      "FlowId": 195,
      "NodeId": 2,
      "FileRuleId": 0,
      "ProjectType": 1,
      "FlowName": "个人报装",
      "formList": [{ "Name": "联系人", "Value": "", "Code": "UserName" },
          { "Name": "联系电话", "Value": "", "Code": "UserContact" },
          { "Name": "身份证号", "Value": "", "Code": "UserIdCard" },
          { "Name": "新装地址", "Value": "", "Code": "UserAddress" },
          { "Name": "备注", "Value": "", "Code": "ProjectDetail" }
      ]
  },
  "peopleNewInstallLC": {
      "FlowId": 1755,
      "NodeId": 2628,
      "FileRuleId": 0,
      "ProjectType": 1,
      "FlowName": "个人报装",
      "formList": [{ "Name": "联系人", "Value": "", "Code": "UserName" },
          { "Name": "联系电话", "Value": "", "Code": "UserContact" },
          { "Name": "身份证号", "Value": "", "Code": "UserIdCard" },
          { "Name": "新装地址", "Value": "", "Code": "UserAddress" },
          { "Name": "备注", "Value": "", "Code": "ProjectDetail" }
      ]
  },
  // 泉港
    "companyNewInstallLC": {
      "FlowId": 415,
      "NodeId": 1001,
      "FileRuleId": 0,
      "ProjectType": "QYAN",
      "FlowName": "企业报装",
      "formList": [{ "Name": "联系人", "Value": "", "Code": "UserLiaison" },
          { "Name": "联系电话", "Value": "", "Code": "UserContact" },
          { "Name": "新装地址", "Value": "", "Code": "UserAddress" },
          { "Name": "身份证号", "Value": "", "Code": "UserLiaisonIdCard" },
          { "Name": "营业执照", "Value": "", "Code": "UserTaxId" },
          { "Name": "备注", "Value": "", "Code": "ProjectDetail" }
      ]
      },
      "chooseUserNameLC": {
          "FlowId": 435,
          "NodeId": 1003,
          "FileRuleId": 0,
          "ProjectType": 3,
          "FlowName": "用户过户",
          "formList": [{ "Name": "用户编号", "Value": "", "Code": "UserCode" },
              { "Name": "申请人", "Value": "", "Code": "ApplyName" },
              { "Name": "申请人电话", "Value": "", "Code": "ApplyPhone" },
              { "Name": "地址", "Value": "", "Code": "ApplyAddress" },
              { "Name": "证件号码", "Value": "", "Code": "ApplyDNumber" },
              { "Name": "变更原因", "Value": "", "Code": "ApplyReason" }
          ]
      },
      "cancelUserLC": {
          "FlowId": 436,
          "NodeId": 1005,
          "FileRuleId": 0,
          "ProjectType": 4,
          "FlowName": "用户销户",
          "formList": [{ "Name": "用户编号", "Value": "", "Code": "UserCode" },
              { "Name": "申请人", "Value": "", "Code": "ApplyName" },
              { "Name": "申请人电话", "Value": "", "Code": "ApplyPhone" },
              { "Name": "地址", "Value": "", "Code": "ApplyAddress" },
              { "Name": "证件号码", "Value": "", "Code": "ApplyDNumber" },
              { "Name": "销户原因", "Value": "", "Code": "ApplyReason" }
          ]
      },
      "NatureOfWaterChange": {
          "FlowId": 855,
          "NodeId": 1521,
          "FileRuleId": 0,
          "ProjectType": "YSXZBG",
          "FlowName": "用水性质变更",
          "formList": [{ "Name": "用户编号", "Value": "", "Code": "UserCode" },
              { "Name": "用户名称", "Value": "", "Code": "UserName" },
              { "Name": "用户联系方式", "Value": "", "Code": "UserContact" },
              { "Name": "用户地址", "Value": "", "Code": "ProjectAddress" },
              { "Name": " 变更原因", "Value": "", "Code": "ApplyReason" },
              { "Name": " ProjectOrgNo", "Value": "", "Code": "ProjectOrgNo" }
          ]
      }
}
var liuchengMes2 = {
    // 泉港
    "userNewInstallLC": {
        "FlowId": 415,
        "NodeId": 1001,
        "FileRuleId": 0,
        "ProjectType": 1,
        "FlowName": "用户新装",
        "formList": [{ "Name": "联系人", "Value": "", "Code": "UserLiaison" },
            { "Name": "联系电话", "Value": "", "Code": "UserLiaisonContact" },
            { "Name": "身份证号", "Value": "", "Code": "UserLiaisonIdCard" },
            { "Name": "新装地址", "Value": "", "Code": "ProjectAddress" },
            { "Name": "备注", "Value": "", "Code": "ProjectDetail" }
        ]
    },
    "peopleNewInstallLC": {
        "FlowId": 635,
        "NodeId": 9,
        "FileRuleId": 0,
        "ProjectType": "GRAN",
        "FlowName": "个人报装",
        "formList": [{ "Name": "联系人", "Value": "", "Code": "UserName" },
            { "Name": "联系电话", "Value": "", "Code": "UserContact" },
            { "Name": "身份证号", "Value": "", "Code": "UserIdCard" },
            { "Name": "新装地址", "Value": "", "Code": "UserAddress" },
            { "Name": "备注", "Value": "", "Code": "ProjectDetail" }
        ]
    }
  }


// 眉山地址
// var baseUrl = "http://117.139.103.7:20021/gw";
// var imageUrl = "http://117.139.103.7:20021/gw/JavaInstall/upload/imgs/";
// var fileUrl = "http://117.139.103.7:20021/gw/JavaInstall/upload/files/";
// var baoZhuangBaseUrl = "http://219.150.181.194:7878/";
// var baseUrl_API_BZLC = "http://117.139.103.7:20021/bz/";
// var baseUrl_ys = "http://117.139.103.7:20021/ys/"
// var baseUrl_yth = "http://117.139.103.7:20021/frame/"
// var baseUrl_gis = "http://117.139.103.7:20021/gis/"


// 208测试地址
// var baseUrl = "http://192.168.2.208:60028";
// var imageUrl = "http://192.168.2.208:60028/JavaInstall/upload/imgs/";
// var fileUrl = "http://192.168.2.208:60028/JavaInstall/upload/files/";
// var videoUrl = "http://192.168.2.208:60028/JavaInstall/upload/video/";
// var baoZhuangBaseUrl = "http://192.168.2.208:60010/";
// var baseUrl_API_BZLC = "http://192.168.2.208:60010/";
// var baseUrl_ys = "http://192.168.2.208:60002/"
// var baseUrl_yth = "http://192.168.2.208:60001/"
// var baseUrl_gis = "http://192.168.2.208:60006/"

// linux测试地址
// var baseUrl = "http://123.161.164.75:10000/SuntrontOfficialwebAPI";
// var imageUrl = "http://123.161.164.75:10000/SuntrontOfficialwebAPI/home/fileUpload/official/imgs/";
// var fileUrl = "http://123.161.164.75:10000/SuntrontOfficialwebAPI/home/fileUpload/official/files/";
// var baoZhuangBaseUrl = "http://123.161.164.75:10010/";
// var baseUrl_API_BZLC = "http://123.161.164.75:10010/";
// var baseUrl_ys = "http://123.161.164.75:10002/"
// var baseUrl_yth = "http://123.161.164.75:10000/frame"
// var baseUrl_gis = "http://123.161.164.75:10000/javagis/"