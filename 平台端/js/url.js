// linux测试地址
var baseUrl = 'http://123.161.164.68:30000/SuntrontOfficialwebAPI'
var imageUrl =
  'http://123.161.164.68:30000/SuntrontOfficialwebAPI/home/fileUpload/official/imgs/'
var fileUrl =
  'http://123.161.164.68:30000/SuntrontOfficialwebAPI/home/fileUpload/official/files/'
var videoUrl =
  'http://123.161.164.68:30000/SuntrontOfficialwebAPI/home/fileUpload/official/video/'
var baoZhuangBaseUrl = 'http://123.161.164.68:30000/apibz'
var baseUrl_ys = 'http://123.161.164.68:30000/ys'
var baseUrl_yth = 'http://123.161.164.68:30000/frame/'
var baseUrl_gis = 'http://123.161.164.68:30000/SuntrontOrderAPI/' //JAVA工单

var baseUrl_API_BZLC = 'http://123.161.164.76:10000/apibz/api/' // A新天智慧水务测试公众号
var baseUrl_API_WeiXin = 'http://123.161.164.76:10000/WeChat1/' // A新天智慧水务测试公众号
// A新天智慧水务测试公众号
var liuchengMes = {
  userNewInstallLC: {
    FlowId: 195,
    NodeId: 2,
    FileRuleId: 0,
    ProjectType: 1,
    FlowName: '用户新装',
    formList: [
      { Name: '联系人', Value: '', Code: 'UserLiaison' },
      { Name: '联系电话', Value: '', Code: 'UserLiaisonContact' },
      { Name: '身份证号', Value: '', Code: 'UserLiaisonIdCard' },
      { Name: '新装地址', Value: '', Code: 'ProjectAddress' },
      { Name: '备注', Value: '', Code: 'ProjectDetail' }
    ]
  },
  peopleNewInstallLC: {
    FlowId: 195,
    NodeId: 2,
    FileRuleId: 0,
    ProjectType: 1,
    FlowName: '个人报装',
    formList: [
      { Name: '联系人', Value: '', Code: 'UserName' },
      { Name: '联系电话', Value: '', Code: 'UserContact' },
      { Name: '身份证号', Value: '', Code: 'UserIdCard' },
      { Name: '新装地址', Value: '', Code: 'UserAddress' },
      { Name: '备注', Value: '', Code: 'ProjectDetail' }
    ]
  },
  companyNewInstallLC: {
    FlowId: 415,
    NodeId: 1001,
    FileRuleId: 0,
    ProjectType: 2,
    FlowName: '企业报装',
    formList: [
      { Name: '联系人', Value: '', Code: 'UserLiaison' },
      { Name: '联系电话', Value: '', Code: 'UserContact' },
      { Name: '新装地址', Value: '', Code: 'UserAddress' },
      { Name: '身份证号', Value: '', Code: 'UserLiaisonIdCard' },
      { Name: '营业执照', Value: '', Code: 'UserTaxId' },
      { Name: '备注', Value: '', Code: 'ProjectDetail' }
    ]
  },
  chooseUserNameLC: {
    FlowId: 435,
    NodeId: 1003,
    FileRuleId: 0,
    ProjectType: 3,
    FlowName: '用户过户',
    formList: [
      { Name: '用户编号', Value: '', Code: 'UserCode' },
      { Name: '申请人', Value: '', Code: 'ApplyName' },
      { Name: '申请人电话', Value: '', Code: 'ApplyPhone' },
      { Name: '地址', Value: '', Code: 'ApplyAddress' },
      { Name: '证件号码', Value: '', Code: 'ApplyDNumber' },
      { Name: '变更原因', Value: '', Code: 'ApplyReason' }
    ]
  },
  cancelUserLC: {
    FlowId: 436,
    NodeId: 1005,
    FileRuleId: 0,
    ProjectType: 4,
    FlowName: '用户销户',
    formList: [
      { Name: '用户编号', Value: '', Code: 'UserCode' },
      { Name: '申请人', Value: '', Code: 'ApplyName' },
      { Name: '申请人电话', Value: '', Code: 'ApplyPhone' },
      { Name: '地址', Value: '', Code: 'ApplyAddress' },
      { Name: '证件号码', Value: '', Code: 'ApplyDNumber' },
      { Name: '销户原因', Value: '', Code: 'ApplyReason' }
    ]
  },
  villageNewInstallLC: {
    FlowId: 536,
    NodeId: 861,
    FileRuleId: 24,
    ProjectType: 100
  }
}
