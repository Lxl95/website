//设置中文
videojs.addLanguage('zh-CN', {
  Play: '播放',
  Pause: '暂停',
  'Current Time': '当前时间',
  Duration: '时长',
  'Remaining Time': '剩余时间',
  'Stream Type': '媒体流类型',
  LIVE: '直播',
  Loaded: '加载完毕',
  Progress: '进度',
  Fullscreen: '全屏',
  'Non-Fullscreen': '退出全屏',
  Mute: '静音',
  Unmute: '取消静音',
  'Playback Rate': '播放速度',
  Subtitles: '字幕',
  'subtitles off': '关闭字幕',
  Captions: '内嵌字幕',
  'captions off': '关闭内嵌字幕',
  Chapters: '节目段落',
  'Close Modal Dialog': '关闭弹窗',
  Descriptions: '描述',
  'descriptions off': '关闭描述',
  'Audio Track': '音轨',
  'You aborted the media playback': '视频播放被终止',
  'A network error caused the media download to fail part-way.':
    '网络错误导致视频下载中途失败。',
  'The media could not be loaded, either because the server or network failed or because the format is not supported.':
    '视频因格式不支持或者服务器或网络的问题无法加载。',
  'The media playback was aborted due to a corruption problem or because the media used features your browser did not support.':
    '由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。',
  'No compatible source was found for this media.': '无法找到此视频兼容的源。',
  'The media is encrypted and we do not have the keys to decrypt it.':
    '视频已加密，无法解密。',
  'Play Video': '播放视频',
  Close: '关闭',
  'Modal Window': '弹窗',
  'This is a modal window': '这是一个弹窗',
  'This modal can be closed by pressing the Escape key or activating the close button.':
    '可以按ESC按键或启用关闭按钮来关闭此弹窗。',
  ', opens captions settings dialog': ', 开启标题设置弹窗',
  ', opens subtitles settings dialog': ', 开启字幕设置弹窗',
  ', opens descriptions settings dialog': ', 开启描述设置弹窗',
  ', selected': ', 选择',
  'captions settings': '字幕设定',
  'Audio Player': '音频播放器',
  'Video Player': '视频播放器',
  Replay: '重播',
  'Progress Bar': '进度小节',
  'Volume Level': '音量',
  'subtitles settings': '字幕设定',
  'descriptions settings': '描述设定',
  Text: '文字',
  White: '白',
  Black: '黑',
  Red: '红',
  Green: '绿',
  Blue: '蓝',
  Yellow: '黄',
  Magenta: '紫红',
  Cyan: '青',
  Background: '背景',
  Window: '视窗',
  Transparent: '透明',
  'Semi-Transparent': '半透明',
  Opaque: '不透明',
  'Font Size': '字体尺寸',
  'Text Edge Style': '字体边缘样式',
  None: '无',
  Raised: '浮雕',
  Depressed: '压低',
  Uniform: '均匀',
  Dropshadow: '下阴影',
  'Font Family': '字体库',
  'Proportional Sans-Serif': '比例无细体',
  'Monospace Sans-Serif': '单间隔无细体',
  'Proportional Serif': '比例细体',
  'Monospace Serif': '单间隔细体',
  Casual: '舒适',
  Script: '手写体',
  'Small Caps': '小型大写字体',
  Reset: '重启',
  'restore all settings to the default values': '恢复全部设定至预设值',
  Done: '完成',
  'Caption Settings Dialog': '字幕设定视窗',
  'Beginning of dialog window. Escape will cancel and close the window.':
    '开始对话视窗。离开会取消及关闭视窗',
  'End of dialog window.': '结束对话视窗'
})
//头部尾部路由设置
var jkApp = angular.module('myApp', ['ngRoute'])
jkApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'html/home.html'
    })
    .when('/main', {
      templateUrl: 'html/home.html'
    })
    .when('/login', {
      templateUrl: 'html/login.html'
    })
    .when('/register', {
      templateUrl: 'html/register.html'
    })
    .when('/forget', {
      templateUrl: 'html/forget.html'
    })
    .when('/OnlineBusinessHall', {
      templateUrl: 'html/OnlineBusinessHall/index.html'
    })
    .when('/toBind', {
      templateUrl: 'html/OnlineBusinessHall/toBind.html'
    })
    .when('/account', {
      templateUrl: 'html/OnlineBusinessHall/account.html'
    })
    .when('/userInfo', {
      templateUrl: 'html/OnlineBusinessHall/userInfo.html'
    })
    .when('/waterPriceQuery', {
      templateUrl: 'html/OnlineBusinessHall/waterPriceQuery.html'
    })
    .when('/paymentQuery', {
      templateUrl: 'html/OnlineBusinessHall/paymentQuery.html'
    })
    .when('/bindWeChat', {
      templateUrl: 'html/OnlineBusinessHall/bindWeChat.html'
    })
    .when('/peopleNewInstallLC', {
      templateUrl: 'html/OnlineBusinessHall/peopleNewInstallLC.html'
    })
    .when('/companyNewInstallLC', {
      templateUrl: 'html/OnlineBusinessHall/companyNewInstallLC.html'
    })
    .when('/chooseUserNameLC', {
      templateUrl: 'html/OnlineBusinessHall/chooseUserNameLC.html'
    })
    .when('/cancelUserLC', {
      templateUrl: 'html/OnlineBusinessHall/cancelUserLC.html'
    })
    .when('/chooseWaterNature', {
      templateUrl: 'html/OnlineBusinessHall/chooseWaterNature.html'
    })
    .when('/processListLC', {
      templateUrl: 'html/OnlineBusinessHall/processListLC.html'
    })
    .when('/new', {
      templateUrl: 'html/newList.html'
    })
    .when('/handling', {
      templateUrl: 'html/handling.html'
    })
    .when('/detail', {
      templateUrl: 'html/detail.html'
    })
    .when('/companyProfile', {
      templateUrl: 'html/companyProfile.html'
    })
    .when('/detailsNotice', {
      templateUrl: 'html/detailsNotice.html'
    })
    .when('/statutory', {
      templateUrl: 'html/statutory.html'
    })
    .when('/cc', {
      templateUrl: 'html/news.html'
    })
    .when('/chongqinghuoguo', {
      templateUrl: 'html/chongqinghuoguo.html'
    })
    .when('/food', {
      templateUrl: 'html/food.html'
    })
    .when('/bb', {
      templateUrl: 'html/food1.html'
    })
    .when('/aa', {
      templateUrl: 'html/chongqinghuoguo1.html'
    })
    .when('/joinin', {
      templateUrl: 'html/joinin.html'
    })
    .when('/hgcp', {
      templateUrl: 'html/hgcp.html'
    })
    .when('/hgcp2', {
      templateUrl: 'html/hgcp2.html'
    })
    .when('/entry', {
      templateUrl: 'html/alot/entry.html'
    })
    .when('/onlinePayment', {
      templateUrl: 'html/alot/onlinePayment.html'
    })
    .when('/usersNewClothes', {
      templateUrl: 'html/alot/usersNewClothes.html'
    })
    .when('/dealWithProgress', {
      templateUrl: 'html/alot/dealWithProgress.html'
    })
    .when('/InformationChanges', {
      templateUrl: 'html/alot/InformationChanges.html'
    })
    .when('/queryUser', {
      templateUrl: 'html/alot/queryUser.html'
    })
    .when('/changeName', {
      templateUrl: 'html/alot/changeName.html'
    })
    .when('/theNewUnit', {
      templateUrl: 'html/alot/theNewUnit.html'
    })
    .when('/dealWithProgressUnit', {
      templateUrl: 'html/alot/dealWithProgressUnit.html'
    })
    .when('/contactUs', {
      templateUrl: 'html/contactUs.html'
    })
    .when('/theBusinessApplication', {
      templateUrl: 'html/theBusinessApplication.html'
    })
    .when('/waterQuery', {
      templateUrl: 'html/waterQuery.html'
    })
    .when('/complaints', {
      templateUrl: 'html/complaints.html'
    })
    .when('/repairs', {
      templateUrl: 'html/repairs.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})
jkApp.run([
  '$rootScope',
  '$location',
  function ($rootScope, $location) {
    /* 监听路由的状态变化 */
    $rootScope.$on('$routeChangeStart', function (evt, next, current) {
      let next_path = next ? next.$$route.originalPath : ''
      // 登录页，不加载头部和尾部，使用单独页面
      if (
        next_path == '/login' ||
        next_path == '/register' ||
        next_path == '/forget'
      ) {
        $rootScope.pageName = 'user'
      } else if (
        next_path == '/OnlineBusinessHall' ||
        next_path == '/toBind' ||
        next_path == '/account'
      ) {
        $rootScope.pageName = 'business'
      } else if (
        next_path == '/userInfo' ||
        next_path == '/paymentQuery' ||
        next_path == '/waterPriceQuery'
      ) {
        $rootScope.pageName = 'business'
      } else if (next_path == '/bindWeChat') {
        $rootScope.pageName = 'business'
      } else if (
        next_path == '/processListLC' ||
        next_path == '/companyNewInstallLC' ||
        next_path == '/peopleNewInstallLC'
      ) {
        $rootScope.pageName = 'business'
      } else if (
        next_path == '/chooseUserNameLC' ||
        next_path == '/cancelUserLC' ||
        next_path == '/chooseWaterNature'
      ) {
        $rootScope.pageName = 'business'
      } else {
        $rootScope.pageName = 'home.html'
      }
      if (!getlocalStorage('phone') && $rootScope.pageName == 'business') {
        $location.path('/login')
      }
      if (
        !getlocalStorage('openId') &&
        $rootScope.pageName == 'business' &&
        next_path !== '/OnlineBusinessHall'
      ) {
        $location.path('/bindWeChat')
      }
    })
    $rootScope.$on('$routeChangeSuccess', function (evt, current, previous) {
      console.log(
        'route have already changed ：' + current.$$route.originalPath
      )
    })
  }
])
// //创建一个ajax服务
// jkApp.service('scrollAa', function() {
// 	console.log("111");
// 	this.getdata = function(route, index, http, scope, slx1, slx2, slx3) {
// 		http.get(route + '?index=' + index + '&index1=' + slx1 + '&index2=' + slx2 + '&index3=' + slx3)
// 			.success(function(data) {

// 				//				 return scope.lidata=data;
// 			});
// 	};
// });

//过户
jkApp.controller(
  'changeNameCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'upload'], function () {
      var form = layui.form
      var $ = layui.jquery,
        upload = layui.upload
      var IMAGEURL = []
      var index = 0
      //监听提交
      form.on('submit(formDemo1)', function (data) {
        var param = data.field
        USERNAME = param.USERNAME
        USERINFOCODE = param.USERINFOCODE

        $.ajax({
          type: 'POST',
          url:
            baoZhuangBaseUrl +
            '/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx',
          contentType: 'application/x-www-form-urlencoded',
          dataType: 'JSON',
          data: {
            OPType: 'GetUserInfoByCode',
            USERNAME: param.USERNAME,
            USERINFOCODE: param.USERINFOCODE,
            SOURCE: 'PC'
          },

          success: function (jsonResult) {
            if (jsonResult.Data.length == 0) {
              return layer.msg(
                '未获取到用户信息',
                {
                  icon: 2,
                  time: 2000
                },
                function () {}
              )
            } else {
              $scope.$apply(function () {
                $scope.userInfo = jsonResult.Data[0]
              })
              form.val('component-form-group', {
                USERNAME: jsonResult.Data[0].USERNAME,
                USERADDRESS: jsonResult.Data[0].USERADDRESS,
                CONTECT: jsonResult.Data[0].CONTECT,
                IDENTITYVALUE: jsonResult.Data[0].IDENTITYVALUE,
                METERCALNAME: jsonResult.Data[0].METERCALNAME,
                USEWATERTYPENAME: jsonResult.Data[0].USEWATERTYPENAME
              })
            }
          },
          error: function (data) {
            alert('请求失败')
          }
        })
        return false
      })
      //普通图片上传
      var uploadInst = upload.render({
        elem: '#test1',
        url: baseUrl + '/upload/imgUpload',
        accept: 'images',
        size: 50000,
        before: function (obj) {
          index += 1
          obj.preview(function (index, file, result) {
            // $('#demo1').attr('src', result);
            $('#demo2').append(
              '<div class="upload_div" id="upload_' +
                index +
                '"><img src="' +
                result +
                '" alt="' +
                file.name +
                '" class="layui-upload-img"></div>'
            )
          })
        },
        done: function (res) {
          //如果上传失败
          if (res.code == 10000) {
            return layer.msg(
              '上传成功!!',
              {
                icon: 6,
                time: 500
              },
              function () {}
            )
          }
          //上传成功
          // var demoText = $('#demoText');
          // demoText.html('<span style="color: #4cae4c;">上传成功</span>');

          var fileupload = $('.image')
          fileupload.attr('value', res.data)
          IMAGEURL.push(imageUrl + res.data)
          console.log(fileupload.attr('value'))
        },
        error: function () {
          //演示失败状态，并实现重传
          var demoText = $('#demoText')
          demoText.html(
            '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
          )
          demoText.find('.demo-reload').on('click', function () {
            uploadInst.upload()
          })
        }
      })

      //监听提交
      //监听提交
      form.on('submit(formDemo)', function (data) {
        // layer.msg(JSON.stringify(data.field));
        var param = data.field
        if ($scope.userInfo.USERNAME != param.USERNAME) {
          editUserInfo('USERNAME', $scope.userInfo.USERNAME, param.USERNAME)
        }
        if ($scope.userInfo.USERADDRESS != param.USERADDRESS) {
          editUserInfo(
            'USERADDRESS',
            $scope.userInfo.USERADDRESS,
            param.USERADDRESS
          )
        }
        if ($scope.userInfo.CONTECT != param.TELPHONE) {
          editUserInfo('TELPHONE', $scope.userInfo.CONTECT, param.TELPHONE)
        }
        if ($scope.userInfo.IDENTITYVALUE != param.CARDNO) {
          editUserInfo('CARDNO', $scope.userInfo.IDENTITYVALUE, param.CARDNO)
        }
        if ($scope.userInfo.USEWATERTYPENAME != param.USEWATERTYPENAME) {
          editUserInfo(
            'USEWATERTYPENAME',
            $scope.userInfo.USEWATERTYPENAME,
            param.USEWATERTYPENAME
          )
        }
        if ($scope.userInfo.METERCALNAME != param.METERCALNAME) {
          editUserInfo(
            'METERCALNAME',
            $scope.userInfo.METERCALNAME,
            param.METERCALNAME
          )
        }

        return false
      })

      function editUserInfo(MODIFYTYPE, BEFOREVALUE, AFTERVALUE) {
        $.ajax({
          type: 'POST',
          url:
            baoZhuangBaseUrl +
            '/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx',
          contentType: 'application/x-www-form-urlencoded',
          dataType: 'JSON',
          data: {
            OPType: 'MODIFYUSER',
            USERINFOID: $routeParams.USERINFOID,
            MODIFYTYPE: MODIFYTYPE,
            BEFOREVALUE: BEFOREVALUE,
            AFTERVALUE: AFTERVALUE,
            SOURCE: 'PC'
          },

          success: function (jsonResult) {
            layer.msg(
              '提交成功!!!',
              {
                icon: 6,
                time: 500
              },
              function () {
                // $("#uesrBaozhang")[0].reset();
                // $('#demo1').attr('src', '');
                // layui.form.render();
              }
            )
          },
          error: function (data) {
            alert('请求失败')
          }
        })
      }
      $scope.opneRemove = function (index) {
        console.log(index)
      }
    })
  }
)
jkApp.controller(
  'queryUserCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'upload'], function () {
      var form = layui.form
      var $ = layui.jquery
      var USERNAME, USERINFOCODE

      //监听提交
      form.on('submit(formDemo)', function (data) {
        var param = data.field
        USERNAME = param.USERNAME
        USERINFOCODE = param.USERINFOCODE

        $.ajax({
          type: 'POST',
          url:
            baoZhuangBaseUrl +
            '/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx',
          contentType: 'application/x-www-form-urlencoded',
          dataType: 'JSON',
          data: {
            OPType: 'GetUserInfoByCode',
            USERNAME: param.USERNAME,
            USERINFOCODE: param.USERINFOCODE,
            SOURCE: 'PC'
          },

          success: function (jsonResult) {
            if (jsonResult.Data.length == 0) {
              return layer.msg(
                '未获取到用户信息',
                {
                  icon: 2,
                  time: 2000
                },
                function () {}
              )
            } else {
              $scope.$apply(function () {
                $scope.userInfo = jsonResult.Data[0]
              })
            }
          },
          error: function (data) {
            alert('请求失败')
          }
        })
        return false
      })
      //变更信息
      $scope.editUserInfo = function () {
        $location.path('/InformationChanges').search({
          USERNAME: USERNAME,
          USERINFOCODE: USERINFOCODE
        })
      }
      //过户
      $scope.changeName = function () {
        $location.path('/changeName').search({
          USERNAME: USERNAME,
          USERINFOCODE: USERINFOCODE
        })
      }
      //用户销户
      $scope.pinhouseholds = function () {
        editUserInfo('USERSTATE', $scope.userInfo.USERSTATE, 2)
      }

      function editUserInfo(MODIFYTYPE, BEFOREVALUE, AFTERVALUE) {
        $.ajax({
          type: 'POST',
          url:
            baoZhuangBaseUrl +
            '/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx',
          contentType: 'application/x-www-form-urlencoded',
          dataType: 'JSON',
          data: {
            OPType: 'MODIFYUSER',
            USERINFOID: $scope.userInfo.USERINFOID,
            MODIFYTYPE: MODIFYTYPE,
            BEFOREVALUE: BEFOREVALUE,
            AFTERVALUE: AFTERVALUE,
            SOURCE: 'PC'
          },

          success: function (jsonResult) {
            layer.msg(
              '提交成功!!!',
              {
                icon: 6,
                time: 500
              },
              function () {
                // $("#uesrBaozhang")[0].reset();
                // $('#demo1').attr('src', '');
                // layui.form.render();
              }
            )
          },
          error: function (data) {
            alert('请求失败')
          }
        })
      }
    })
  }
)
jkApp.controller(
  'waterQueryCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'upload'], function () {
      var form = layui.form
      var $ = layui.jquery
      var USERNAME, USERINFOCODE

      //监听提交
      form.on('submit(formDemo)', function (data) {
        var param = data.field
        USERNAME = param.USERNAME
        USERINFOCODE = param.USERINFOCODE

        $.ajax({
          // type:   "POST",
          // url: baseUrl_ys + "/API/ArchivesManager/NoLogin/GetUserInfo",
          // contentType: 'application/json',
          //
          // data: {
          //     "keyValue": param.USERINFOCODE,
          //     "keyValue2": param.USERNAME
          // },
          url: baseUrl_ys + '/API/ArchivesManager/NoLogin/GetUserInfo',
          data: JSON.stringify({
            keyValue: param.USERINFOCODE,
            keyValue2: param.USERNAME
          }),
          type: 'POST',
          processData: false,
          contentType: 'application/json',
          success: function (jsonResult) {
            console.log(jsonResult)
            if (jsonResult.code == 400) {
              return layer.msg(
                jsonResult.info,
                {
                  icon: 2,
                  time: 2000
                },
                function () {}
              )
            } else {
              $scope.$apply(function () {
                $scope.userInfo = jsonResult.data
              })
            }
          },
          error: function (data) {
            alert('请求失败')
          }
        })
        return false
      })

      //点击重置
      $scope.reset = function () {
        $scope.userInfo = null
        layui.form.render()
      }
    })
  }
)

//了解更多-公司简介
jkApp.controller(
  'companyProfileCtrl',
  function ($scope, $location, $routeParams, $sce) {
    $scope.imageUrl = imageUrl
    systeminfo()

    //获取基本信息
    function systeminfo() {
      $.ajax({
        url: baseUrl + '/systeminfo/queryAll',
        success: function (result) {
          $scope.$apply(function () {
            $scope.info = result.data[0]
            $scope.html = $sce.trustAsHtml(result.data[0].description)
          })
        }
      })
    }
  }
)
//用户业务办理进度
jkApp.controller(
  'dealWithProgressCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'layedit', 'laydate', 'table'], function () {
      var form = layui.form
      var table = layui.table

      var layer = layui.layer
      var layedit = layui.layedit
      var laydate = layui.laydate
      table.render({
        elem: '#demo',
        id: 'testReload',
        height: 462,
        url:
          baoZhuangBaseUrl + 'ArchivesManage/User/WebAPI/OfficiaWebsite.ashx', //数据接口
        page: true, //开启分页
        request: {
          pageName: 'page', //页码的参数名称，默认：page
          limitName: 'rows' //每页数据量的参数名，默认：limit
        },
        where: {
          OPType: 'GetDataPageListForAddUser',
          USERTYPE: 1,
          SOURCE: 'PC'
        },
        parseData: function (res) {
          //res 即为原始返回的数据
          return {
            code: res.ErrCode, //解析接口状态
            msg: res.Data, //解析提示文本
            count: res.total, //解析数据长度
            data: res.rows //解析数据列表
          }
        },
        cols: [
          [
            //表头
            // { field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left' },
            { field: 'BZNUMBER', title: '申请编号', align: 'center' },
            { field: 'USERNAME', title: '申请人名称', align: 'center' },
            { field: 'USERADDRESS', title: '地址', align: 'center' },
            { field: 'TELPHONE', title: '手机号', align: 'center' },
            { field: 'CARDNO', title: '身份证号', align: 'center' },
            {
              field: 'STATE',
              title: '最新进度',
              align: 'center',
              templet: function (d) {
                if (d.STATE == 0) {
                  return '未受理'
                } else if (d.STATE == 1) {
                  return '已受理'
                } else if (d.STATE == 2) {
                  return '拒绝'
                }
              }
            },
            { title: '照片', align: 'center', toolbar: '#barDemo' }
          ]
        ]
      })
      //监听单元格事件
      table.on('tool(test)', function (obj) {
        var data = obj.data
        if (obj.event === 'openImage') {
          console.log(data)
          var imageList = data.IMAGEURL
          imageList = imageList.split(',')
          var html = ''
          if (imageList.length > 0) {
            html = '<div style="display:flex;min-width:200px;" >'
            for (var index = 0; index < imageList.length; index++) {
              html +=
                '<img src="' + imageList[index] + '"  class="layui-upload-img">'
            }
            html += '</div>'
          }
          layer.open({
            title: '照片',
            type: 1,
            content: html
          })
        }
      })

      //点击查询
      $scope.searchQuery = function () {
        var USERNAME = $('.layui-input-userName').val()
        var TELPHONE = $('.layui-input-phone').val()
        table.reload('testReload', {
          url:
            baoZhuangBaseUrl + 'ArchivesManage/User/WebAPI/OfficiaWebsite.ashx',
          // ,methods:"post"
          request: {
            pageName: 'page', //页码的参数名称，默认：page
            limitName: 'rows' //每页数据量的参数名，默认：limit
          },
          where: {
            OPType: 'GetDataPageListForAddUser',
            USERNAME: USERNAME,
            TELPHONE: TELPHONE,
            USERTYPE: 1,
            SOURCE: 'PC'
          },
          parseData: function (res) {
            //res 即为原始返回的数据
            return {
              code: res.ErrCode, //解析接口状态
              msg: res.Data, //解析提示文本
              count: res.total, //解析数据长度
              data: res.rows //解析数据列表
            }
          },
          page: {
            curr: 1
          }
        })
      }
    })
  }
)
//单位业务办理进度
jkApp.controller(
  'dealWithProgressUnitCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'layedit', 'laydate', 'table'], function () {
      var form = layui.form
      var table = layui.table

      var layer = layui.layer
      var layedit = layui.layedit
      var laydate = layui.laydate
      table.render({
        elem: '#demo',
        id: 'testReload',
        height: 462,
        url:
          baoZhuangBaseUrl + 'ArchivesManage/User/WebAPI/OfficiaWebsite.ashx', //数据接口
        page: true, //开启分页
        request: {
          pageName: 'page', //页码的参数名称，默认：page
          limitName: 'rows' //每页数据量的参数名，默认：limit
        },
        where: {
          OPType: 'GetDataPageListForAddUser',
          USERTYPE: 2,
          SOURCE: 'PC'
        },
        parseData: function (res) {
          //res 即为原始返回的数据
          return {
            code: res.ErrCode, //解析接口状态
            msg: res.Data, //解析提示文本
            count: res.total, //解析数据长度
            data: res.rows //解析数据列表
          }
        },
        cols: [
          [
            //表头
            // { field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left' },
            { field: 'BZNUMBER', title: '申请编号', align: 'center' },
            { field: 'USERNAME', title: '企业名称', align: 'center' },
            { field: 'USERADDRESS', title: '企业地址', align: 'center' },
            { field: 'TELPHONE', title: '手机号', align: 'center' },
            { field: 'CARDNO', title: '信用代码', align: 'center' },
            {
              field: 'STATE',
              title: '最新进度',
              align: 'center',
              templet: function (d) {
                if (d.STATE == 0) {
                  return '未受理'
                } else if (d.STATE == 1) {
                  return '已受理'
                } else if (d.STATE == 2) {
                  return '拒绝'
                }
              }
            },
            { title: '照片', align: 'center', toolbar: '#barDemo' }
          ]
        ]
      })
      //监听单元格事件
      table.on('tool(test)', function (obj) {
        var data = obj.data
        if (obj.event === 'openImage') {
          console.log(data)
          var imageList = data.IMAGEURL
          imageList = imageList.split(',')
          var html = ''
          if (imageList.length > 0) {
            html = '<div style="display:flex;min-width:200px;" >'
            for (var index = 0; index < imageList.length; index++) {
              html +=
                '<img src="' + imageList[index] + '"  class="layui-upload-img">'
            }
            html += '</div>'
          }
          layer.open({
            title: '照片',
            type: 1,
            content: html
          })
        }
      })

      //点击查询
      $scope.searchQuery = function () {
        var USERNAME = $('.layui-input-userName').val()
        var TELPHONE = $('.layui-input-phone').val()
        table.reload('testReload', {
          url:
            baoZhuangBaseUrl + 'ArchivesManage/User/WebAPI/OfficiaWebsite.ashx',
          // ,methods:"post"
          request: {
            pageName: 'page', //页码的参数名称，默认：page
            limitName: 'rows' //每页数据量的参数名，默认：limit
          },
          where: {
            OPType: 'GetDataPageListForAddUser',
            USERNAME: USERNAME,
            TELPHONE: TELPHONE,
            USERTYPE: 2,
            SOURCE: 'PC'
          },
          parseData: function (res) {
            //res 即为原始返回的数据
            return {
              code: res.ErrCode, //解析接口状态
              msg: res.Data, //解析提示文本
              count: res.total, //解析数据长度
              data: res.rows //解析数据列表
            }
          },
          page: {
            curr: 1
          }
        })
      }
    })
  }
)
//信息变更
jkApp.controller(
  'InformationChangesCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'upload'], function () {
      var form = layui.form
      var $ = layui.jquery,
        upload = layui.upload
      var IMAGEURL = []
      var index = 0
      //监听提交
      form.on('submit(formDemo1)', function (data) {
        var param = data.field
        USERNAME = param.USERNAME
        USERINFOCODE = param.USERINFOCODE

        $.ajax({
          type: 'POST',
          url:
            baoZhuangBaseUrl +
            '/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx',
          contentType: 'application/x-www-form-urlencoded',
          dataType: 'JSON',
          data: {
            OPType: 'GetUserInfoByCode',
            USERNAME: param.USERNAME,
            USERINFOCODE: param.USERINFOCODE,
            SOURCE: 'PC'
          },

          success: function (jsonResult) {
            if (jsonResult.Data.length == 0) {
              return layer.msg(
                '未获取到用户信息',
                {
                  icon: 2,
                  time: 2000
                },
                function () {}
              )
            } else {
              $scope.$apply(function () {
                $scope.userInfo = jsonResult.Data[0]
              })
              form.val('component-form-group', {
                USERNAME: jsonResult.Data[0].USERNAME,
                USERADDRESS: jsonResult.Data[0].USERADDRESS,
                CONTECT: jsonResult.Data[0].CONTECT,
                IDENTITYVALUE: jsonResult.Data[0].IDENTITYVALUE,
                METERCALNAME: jsonResult.Data[0].METERCALNAME,
                USEWATERTYPENAME: jsonResult.Data[0].USEWATERTYPENAME
              })
            }
          },
          error: function (data) {
            alert('请求失败')
          }
        })
        return false
      })
      //普通图片上传
      var uploadInst = upload.render({
        elem: '#test1',
        url: baseUrl + '/upload/imgUpload',
        accept: 'images',
        size: 50000,
        before: function (obj) {
          index += 1
          obj.preview(function (index, file, result) {
            // $('#demo1').attr('src', result);
            $('#demo2').append(
              '<div class="upload_div" id="upload_' +
                index +
                '"><img src="' +
                result +
                '" alt="' +
                file.name +
                '" class="layui-upload-img"></div>'
            )
          })
        },
        done: function (res) {
          //如果上传失败
          if (res.code == 10000) {
            return layer.msg(
              '上传成功!!',
              {
                icon: 6,
                time: 500
              },
              function () {}
            )
          }
          //上传成功
          // var demoText = $('#demoText');
          // demoText.html('<span style="color: #4cae4c;">上传成功</span>');

          var fileupload = $('.image')
          fileupload.attr('value', res.data)
          IMAGEURL.push(imageUrl + res.data)
          console.log(fileupload.attr('value'))
        },
        error: function () {
          //演示失败状态，并实现重传
          var demoText = $('#demoText')
          demoText.html(
            '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
          )
          demoText.find('.demo-reload').on('click', function () {
            uploadInst.upload()
          })
        }
      })

      //监听提交
      //监听提交
      form.on('submit(formDemo)', function (data) {
        // layer.msg(JSON.stringify(data.field));
        var param = data.field
        if ($scope.userInfo.USERNAME != param.USERNAME) {
          editUserInfo('USERNAME', $scope.userInfo.USERNAME, param.USERNAME)
        }
        if ($scope.userInfo.USERADDRESS != param.USERADDRESS) {
          editUserInfo(
            'USERADDRESS',
            $scope.userInfo.USERADDRESS,
            param.USERADDRESS
          )
        }
        if ($scope.userInfo.CONTECT != param.CONTECT) {
          editUserInfo('CONTECT', $scope.userInfo.CONTECT, param.CONTECT)
        }
        if ($scope.userInfo.IDENTITYVALUE != param.IDENTITYVALUE) {
          editUserInfo(
            'IDENTITYVALUE',
            $scope.userInfo.IDENTITYVALUE,
            param.IDENTITYVALUE
          )
        }
        if ($scope.userInfo.USEWATERTYPENAME != param.USEWATERTYPENAME) {
          editUserInfo(
            'USEWATERTYPENAME',
            $scope.userInfo.USEWATERTYPENAME,
            param.USEWATERTYPENAME
          )
        }
        if ($scope.userInfo.METERCALNAME != param.METERCALNAME) {
          editUserInfo(
            'METERCALNAME',
            $scope.userInfo.METERCALNAME,
            param.METERCALNAME
          )
        }

        return false
      })

      function editUserInfo(MODIFYTYPE, BEFOREVALUE, AFTERVALUE) {
        $.ajax({
          type: 'POST',
          url:
            baoZhuangBaseUrl +
            '/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx',
          contentType: 'application/x-www-form-urlencoded',
          dataType: 'JSON',
          data: {
            OPType: 'MODIFYUSER',
            USERINFOID: $routeParams.USERINFOID,
            MODIFYTYPE: MODIFYTYPE,
            BEFOREVALUE: BEFOREVALUE,
            AFTERVALUE: AFTERVALUE,
            SOURCE: 'PC'
          },

          success: function (jsonResult) {
            layer.msg(
              '提交成功!!!',
              {
                icon: 6,
                time: 500
              },
              function () {
                // $("#uesrBaozhang")[0].reset();
                // $('#demo1').attr('src', '');
                // layui.form.render();
              }
            )
          },
          error: function (data) {
            alert('请求失败')
          }
        })
      }
      $scope.opneRemove = function (index) {
        console.log(index)
      }
    })
  }
)
//单位新装申请
jkApp.controller(
  'theNewUnitCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'upload'], function () {
      var form = layui.form
      var $ = layui.jquery,
        upload = layui.upload
      var IMAGEURL = []
      //普通图片上传
      var uploadInst = upload.render({
        elem: '#test1',
        url: baseUrl + '/upload/imgUpload',
        accept: 'images',
        size: 50000,
        before: function (obj) {
          obj.preview(function (index, file, result) {
            $('#demo2').append(
              '<div class="upload_div" id="upload_' +
                index +
                '"><img src="' +
                result +
                '" alt="' +
                file.name +
                '" class="layui-upload-img"></div>'
            )
          })
        },
        done: function (res) {
          // //如果上传失败
          // if (res.code == 10000) {
          //     return layer.msg('上传失败');
          // }
          //上传成功
          if (res.code == 10000) {
            layer.msg('上传成功')
          }
          var demoText = $('#demoText')
          demoText.html('<span style="color: #4cae4c;">上传成功</span>')

          var fileupload = $('.image')
          fileupload.attr('value', res.data)
          IMAGEURL.push(imageUrl + res.data)
          console.log(fileupload.attr('value'))
        },
        error: function () {
          //演示失败状态，并实现重传
          var demoText = $('#demoText')
          demoText.html(
            '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
          )
          demoText.find('.demo-reload').on('click', function () {
            uploadInst.upload()
          })
        }
      })

      //监听提交
      form.on('submit(formDemo)', function (data) {
        // layer.msg(JSON.stringify(data.field));
        var param = data.field

        $.ajax({
          type: 'POST',
          url:
            baoZhuangBaseUrl +
            '/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx',
          contentType: 'application/x-www-form-urlencoded',
          dataType: 'JSON',
          data: {
            OPType: 'ADDUSER',
            USERNAME: filterXSS(param.USERNAME),
            USERADDRESS: filterXSS(param.USERADDRESS),
            TELPHONE: filterXSS(param.TELPHONE),
            CARDNO: filterXSS(param.CARDNO),
            IMAGEURL: filterXSS(IMAGEURL.toString()),
            USERTYPE: 2,
            SOURCE: 'PC'
          },

          success: function (jsonResult) {
            layer.msg(
              '提交成功!!!',
              {
                icon: 6,
                time: 500
              },
              function () {
                $('#uesrBaozhang')[0].reset()
                $('#demo2').html('')
                layui.form.render()
              }
            )
          },
          error: function (data) {
            alert('请求失败')
          }
        })
        return false
      })

      //点击重置
      $scope.reset = function () {
        $('#uesrBaozhang')[0].reset()
        $('#demo2').html('')
        layui.form.render()
      }
    })
  }
)
//联系我们
jkApp.controller(
  'contactUsCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'upload'], function () {
      var form = layui.form
      var $ = layui.jquery

      //监听提交
      form.on('submit(formDemo)', function (data) {
        var param = data.field
        var data = {
          feedbackName: filterXSS(param.feedbackName),
          feedbackPhone: filterXSS(param.feedbackPhone),
          email: filterXSS(param.email),
          content: filterXSS(param.content)
        }
        $.ajax({
          type: 'POST',
          url: baseUrl + '/feedback/save',
          contentType: 'application/json',
          data: JSON.stringify({
            feedbackName: filterXSS(param.feedbackName),
            feedbackPhone: filterXSS(param.feedbackPhone),
            email: filterXSS(param.email),
            content: filterXSS(param.content)
          }),

          success: function (jsonResult) {
            layer.msg(
              '提交成功!!!',
              {
                icon: 6,
                time: 500
              },
              function () {
                $('#uesrBaozhang')[0].reset()
                $('#demo2').html('')
                layui.form.render()
              }
            )
          },
          error: function (data) {
            alert('请求失败')
          }
        })
        return false
      })

      //点击重置
      $scope.reset = function () {
        $('#uesrBaozhang')[0].reset()
        layui.form.render()
      }
    })
  }
)
//报修

jkApp.controller(
  'repairsCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'upload'], function () {
      var form = layui.form
      var $ = layui.jquery,
        upload = layui.upload
      var ImageData = []
      var token = ''
      getToken()

      //监听提交
      form.on('submit(formDemo)', function (data) {
        // layer.msg(JSON.stringify(data.field));
        var param = data.field

        var dataInfo = JSON.stringify({
          dispatchDirectly: false,
          accessToken: token,
          JointOperId: [],
          apiKey: 'KHAa0Xeu29upqukclXqh',
          urgencyId: 2,
          reportUserType: 1,
          fromId: 10,
          typeId: 243,
          reportUserNo: 'XT_html',
          title: param.title,
          description:
            '上报人' +
            param.nick +
            '  联系方式' +
            param.phone +
            '  ' +
            param.description,
          address: param.address
        })
        $.ajax({
          type: 'POST',
          url: baseUrl_gis + '/public/workorder/create',
          contentType: 'application/json',

          headers: { AccessToken: token },
          data: JSON.stringify({
            data: dataInfo
          }),

          success: function (jsonResult) {
            if (jsonResult.code == 200) {
              layer.msg(
                '提交成功!!!',
                {
                  icon: 6,
                  time: 500
                },
                function () {
                  $('#zxtsForm')[0].reset()
                  layui.form.render()
                }
              )
            } else {
              return layer.msg(jsonResult.info)
            }
          },
          error: function (data) {
            alert('请求失败')
          }
        })
        return false
      })

      function getToken() {
        $.ajax({
          type: 'POST',
          url: baseUrl_yth + 'api/SystemMoule/Account/login',
          contentType: 'application/json',
          data: JSON.stringify({
            password: 'qazwsx123',
            username: 'HTML'
          }),

          success: function (jsonResult) {
            token = jsonResult.data.accessToken
          },
          error: function (data) {
            alert('请求失败')
          }
        })
      }
      //点击重置
      $scope.reset = function () {
        $('#zxtsForm')[0].reset()
        layui.form.render()
      }
    })
  }
)
//咨询投诉
jkApp.controller(
  'complaintsCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'upload'], function () {
      var form = layui.form
      var $ = layui.jquery,
        upload = layui.upload
      var ImageData = []
      var token = ''
      getToken()

      //监听提交
      form.on('submit(formDemo)', function (data) {
        // layer.msg(JSON.stringify(data.field));
        var param = data.field

        var dataInfo = JSON.stringify({
          dispatchDirectly: false,
          accessToken: token,
          JointOperId: [],
          apiKey: 'KHAa0Xeu29upqukclXqh',
          urgencyId: 2,
          reportUserType: 1,
          fromId: 10,
          typeId: 242,
          reportUserNo: 'XT_html',
          title: param.title,
          description:
            '上报人' +
            param.nick +
            '  联系方式' +
            param.phone +
            '  ' +
            param.description,
          address: param.address
        })

        $.ajax({
          type: 'POST',
          url: baseUrl_gis + '/public/workorder/create',
          contentType: 'application/json',

          headers: { AccessToken: token },
          data: JSON.stringify({
            data: dataInfo
          }),

          success: function (jsonResult) {
            if (jsonResult.code == 200) {
              layer.msg(
                '提交成功!!!',
                {
                  icon: 6,
                  time: 500
                },
                function () {
                  $('#zxtsForm')[0].reset()
                  layui.form.render()
                }
              )
            } else {
              return layer.msg(jsonResult.info)
            }
          },
          error: function (data) {
            alert('请求失败')
          }
        })
        return false
      })

      function getToken() {
        $.ajax({
          type: 'POST',
          url: baseUrl_yth + 'api/SystemMoule/Account/login',
          contentType: 'application/json',
          data: JSON.stringify({
            password: 'qazwsx123',
            username: 'HTML'
          }),

          success: function (jsonResult) {
            token = jsonResult.data.accessToken
          },
          error: function (data) {
            alert('请求失败')
          }
        })
      }
      //点击重置
      $scope.reset = function () {
        $('#zxtsForm')[0].reset()
        layui.form.render()
      }
    })
  }
)
//用户报装
jkApp.controller(
  'theBusinessApplicationCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'upload'], function () {
      var form = layui.form
      var $ = layui.jquery,
        upload = layui.upload
      var IMAGEURL = []
      var ImageData = []
      //普通图片上传
      var uploadInst = upload.render({
        elem: '#test1',
        url:
          baseUrl_API_BZLC +
          '/Wfms/Overt/WeChart/PublicAccount/Handle/File/UploadNoInsId',
        accept: 'images',
        size: 50000,
        before: function (obj) {
          if (!$('#phone').val()) {
            return layer.msg('请填写手机号')
          }
          var files = (this.files = obj.pushFile())
          var fileName
          var fileSize
          var i = 0
          var j = 0
          for (var key in files) {
            i++
            fileName = files[key].name
            fileSize = files[key].size
          }
          this.data = {
            SystemMark: 'XtWeChart',
            WeChatOpenId: '110',
            NodeId: '1679',
            FileRuleId: '0',
            FileName: fileName,
            FileLength: fileSize
          } //关键代码
          obj.preview(function (index, file, result) {
            $('#demo2').append(
              '<div class="upload_div" id="upload_' +
                index +
                '" style="margin-right:20px"><img src="' +
                result +
                '" alt="' +
                file.name +
                '" class="layui-upload-img"></div>'
            )
          })
        },
        done: function (res) {
          // //如果上传失败

          //上传成功
          if (res.Result == 1) {
            layer.msg('上传成功')
          }
          var demoText = $('#demoText')
          demoText.html('<span style="color: #4cae4c;">上传成功</span>')

          var fileupload = $('.image')
          fileupload.attr('value', res.Data)
          ImageData.push(res.Data)
          console.log(fileupload.attr('value'))
        },
        error: function () {
          //演示失败状态，并实现重传
          var demoText = $('#demoText')
          demoText.html(
            '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
          )
          demoText.find('.demo-reload').on('click', function () {
            uploadInst.upload()
          })
        }
      })

      //监听提交
      form.on('submit(formDemo)', function (data) {
        // layer.msg(JSON.stringify(data.field));
        var param = data.field

        $.ajax({
          type: 'POST',
          url:
            baseUrl_API_BZLC +
            '/Wfms/Overt/WeChart/PublicAccount/Handle/Submit/QuickStart',
          contentType: 'application/json',
          data: JSON.stringify({
            SystemMark: 'MeiShanWz',
            OtherOperId: param.phone, //用户openId
            OtherOperName: '眉山网站', //用户昵称
            Entity: {
              FlowId: 1017,
              NodeId: 1679,
              Datas: [
                {
                  DataCode: 'InsCode',
                  DataGroup: 0,
                  DataValue: nowTime() //项目ID
                },
                {
                  DataCode: 'ProjectType',
                  DataGroup: 0,
                  DataValue: 1 //项目类型
                },
                {
                  DataCode: 'UserAddress',
                  DataGroup: 1,
                  DataValue: param.site //地址
                },
                {
                  DataCode: 'ProjectAddress',
                  DataGroup: 0,
                  DataValue: param.site //项目地址
                },
                {
                  DataCode: 'UserName',
                  DataGroup: 1,
                  DataValue: param.contacts //联系人
                },
                {
                  DataCode: 'UserLiaison',
                  DataGroup: 0,
                  DataValue: param.contacts //用户联系人
                },
                {
                  DataCode: 'ProjectName',
                  DataGroup: 0,
                  DataValue: param.contacts //项目联系人
                },
                {
                  DataCode: 'UserLiaisonContact',
                  DataGroup: 0,
                  DataValue: param.phone //用户联系电话
                },
                {
                  DataCode: 'UserIdCard',
                  DataGroup: 1,
                  DataValue: param.number //用户身份证号
                },
                {
                  DataCode: 'UserLiaisonIdCard',
                  DataGroup: 0,
                  DataValue: param.number //用户联络人身份证号
                },
                {
                  DataCode: 'UserHouseCertificateNo',
                  DataGroup: 0,
                  DataValue: param.addedValue //用户房屋产权证编号
                },
                {
                  DataCode: 'UserTaxId',
                  DataGroup: 0,
                  DataValue: param.number //用户纳税人识别号
                },
                {
                  DataCode: 'ProjectOrgNo',
                  DataGroup: 0,
                  DataValue: '10000'
                }
              ],
              Files: ImageData.map((el) => el.FileId)
            }
          }),

          success: function (jsonResult) {
            layer.msg(
              '提交成功!!!',
              {
                icon: 6,
                time: 500
              },
              function () {
                $('#uesrBaozhang')[0].reset()
                $('#demo2').html('')
                layui.form.render()
              }
            )
          },
          error: function (data) {
            alert('请求失败')
          }
        })
        return false
      })

      function nowTime() {
        const mydate = new Date()
        let year = mydate.getFullYear()
        let month = mydate.getMonth()
        let day = mydate.getDate()
        let hour = mydate.getHours()
        let minutes = mydate.getMinutes()
        let seconds = mydate.getSeconds()
        let milli = mydate.getMilliseconds()
        if (month < 10) {
          month = month - 0 + 1
          month = '0' + month
        } else {
          month = month - 0 + 1
        }
        if (day < 10) {
          day = '0' + day
        }
        if (hour < 10) {
          hour = '0' + hour
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
        if (seconds < 10) {
          seconds = '0' + seconds
        }
        return year + month + day + hour + minutes + seconds + milli
      }
      //点击重置
      $scope.reset = function () {
        $('#uesrBaozhang')[0].reset()
        $('#demo2').html('')
        layui.form.render()
      }
    })
  }
)
//用户新装申请
jkApp.controller(
  'usersNewClothesCtrl',
  function ($scope, $location, $routeParams, $sce) {
    layui.use(['form', 'upload'], function () {
      var form = layui.form
      var $ = layui.jquery,
        upload = layui.upload
      var IMAGEURL = []
      //普通图片上传
      var uploadInst = upload.render({
        elem: '#test1',
        url: baseUrl + '/upload/imgUpload',
        accept: 'images',
        size: 50000,
        before: function (obj) {
          obj.preview(function (index, file, result) {
            $('#demo2').append(
              '<div class="upload_div" id="upload_' +
                index +
                '"><img src="' +
                result +
                '" alt="' +
                file.name +
                '" class="layui-upload-img"></div>'
            )
          })
        },
        done: function (res) {
          // //如果上传失败
          // if (res.code == 10000) {
          //     return layer.msg('上传失败');
          // }
          //上传成功
          if (res.code == 10000) {
            layer.msg('上传成功')
          }
          var demoText = $('#demoText')
          demoText.html('<span style="color: #4cae4c;">上传成功</span>')

          var fileupload = $('.image')
          fileupload.attr('value', res.data)
          IMAGEURL.push(imageUrl + res.data)
          console.log(fileupload.attr('value'))
        },
        error: function () {
          //演示失败状态，并实现重传
          var demoText = $('#demoText')
          demoText.html(
            '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
          )
          demoText.find('.demo-reload').on('click', function () {
            uploadInst.upload()
          })
        }
      })

      //监听提交
      form.on('submit(formDemo)', function (data) {
        // layer.msg(JSON.stringify(data.field));
        var param = data.field

        $.ajax({
          type: 'POST',
          url:
            baoZhuangBaseUrl +
            '/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx',
          contentType: 'application/x-www-form-urlencoded',
          dataType: 'JSON',
          data: {
            OPType: 'ADDUSER',
            USERNAME: filterXSS(param.USERNAME),
            USERADDRESS: filterXSS(param.USERADDRESS),
            TELPHONE: filterXSS(param.TELPHONE),
            CARDNO: filterXSS(param.CARDNO),
            IMAGEURL: filterXSS(IMAGEURL.toString()),
            USERTYPE: 1,
            SOURCE: 'PC'
          },

          success: function (jsonResult) {
            layer.msg(
              '提交成功!!!',
              {
                icon: 6,
                time: 500
              },
              function () {
                $('#uesrBaozhang')[0].reset()
                $('#demo2').html('')
                layui.form.render()
              }
            )
          },
          error: function (data) {
            alert('请求失败')
          }
        })
        return false
      })

      //点击重置
      $scope.reset = function () {
        $('#uesrBaozhang')[0].reset()
        $('#demo2').html('')
        layui.form.render()
      }
    })
  }
)

//政策法规
jkApp.controller(
  'statutoryCtrl',
  function ($scope, $location, $routeParams, $sce) {
    //获取政策法规详情

    $scope.imageUrl = imageUrl
    policefindById()

    function policefindById() {
      $.ajax({
        url: baseUrl + '/police/findById?id=' + $routeParams.id,
        success: function (result) {
          $scope.$apply(function () {
            $scope.dataInfo = result.data
            $scope.html = $sce.trustAsHtml(result.data.content)
            if (result.data.fileAddr) {
              var resources = JSON.parse(result.data.fileAddr)
              var arr = []
              for (var i = 0; i < resources.length; i++) {
                var str = resources[i].split('/')
                str = str[0] + '/' + str[1] + '/' + str[2] + '/'
                a = resources[i].replace(str, '')

                arr[i] = { url: resources[i], url1: a }
              }

              $scope.fjData = arr
            } else {
              $scope.fjData = []
            }
          })
        }
      })
    }
    //点击下载
    $scope.openDown = function (item) {
      window.open(fileUrl + item.url)
    }
    $scope.yulan = function (item) {
      window.open('https://view.xdocin.com/xdoc?_xdoc=' + fileUrl + item.url)
    }
  }
)
//新闻公告
jkApp.controller(
  'detailsNoticeCtrl',
  function ($scope, $location, $routeParams, $sce) {
    //获取新闻公告详情

    $scope.imageUrl = imageUrl
    noticefindById()

    function noticefindById() {
      $.ajax({
        url: baseUrl + '/notice/findById?id=' + $routeParams.id,
        success: function (result) {
          $scope.$apply(function () {
            $scope.dataInfo = result.data
            $scope.html = $sce.trustAsHtml(result.data.content)
            if (result.data.attachment) {
              $scope.fjData = JSON.parse(result.data.attachment)
            } else {
              $scope.fjData = []
            }
          })
        }
      })
    }

    //点击下载
    $scope.openDown = function (item) {
      window.open(fileUrl + item)
    }
  }
)
//业务处理
jkApp.controller(
  'handlingCtrl',
  function ($scope, $location, $routeParams, $sce) {
    //获取业务处理详情

    $scope.imageUrl = imageUrl
    businessHandlingfindById()

    function businessHandlingfindById() {
      $.ajax({
        url: baseUrl + '/businessHandling/findById?id=' + $routeParams.id,
        success: function (result) {
          $scope.$apply(function () {
            $scope.dataInfo = result.data
            $scope.html = $sce.trustAsHtml(result.data.content)
            if (result.data.attachment) {
              $scope.fjData = JSON.parse(result.data.attachment)
            } else {
              $scope.fjData = []
            }
          })
        }
      })
    }

    //点击下载
    $scope.openDown = function (item) {
      window.open(fileUrl + item)
    }
  }
)
//新闻详情
jkApp.controller(
  'detailCtrl',
  function ($scope, $location, $routeParams, $sce) {
    //获取栏目类别

    $scope.imageUrl = imageUrl
    console.log($routeParams.start)
    if ($routeParams.start) {
      var param = {
        columncategoryid: $routeParams.id,
        page: 1,
        size: 20
      }

      $.ajax({
        url: baseUrl + '/news/queryBy',
        type: 'post',
        data: JSON.stringify(param),
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (result) {
          if (result.data.rows) {
            if (result.data.rows.length > 0) {
              getNews(result.data.rows[0].id)
            }
          }
        }
      })
    } else {
      getNews($routeParams.id)
    }

    function getNews(id) {
      $.ajax({
        url: baseUrl + '/news/findById?id=' + id,
        success: function (result) {
          $scope.$apply(function () {
            $scope.dataInfo = result.data
            $scope.html = $sce.trustAsHtml(result.data.content)
            if (result.data.attachment) {
              var resources = JSON.parse(result.data.attachment)
              var arr = []
              for (var i = 0; i < resources.length; i++) {
                var str = resources[i].split('/')
                str = str[0] + '/' + str[1] + '/' + str[2] + '/'
                a = resources[i].replace(str, '')

                arr[i] = { url: resources[i], url1: a }
              }
              $scope.fjData = arr
            } else {
              $scope.fjData = []
            }
          })
        }
      })
    }

    //点击下载
    $scope.openDown = function (item) {
      window.open(fileUrl + item.url)
    }
    $scope.opendetails = function (id) {
      $location.path('/detail').search({
        id: id
      })
    }
    $scope.yulan = function (item) {
      window.open('https://view.xdocin.com/xdoc?_xdoc=' + fileUrl + item.url)
    }
  }
)
//新闻列表
jkApp.controller('newCtrl', function ($scope, $location, $routeParams) {
  //获取栏目类别
  var page = 1
  var total = 1
  var box
  getNewsList()
  box = new CustomPagination('#page', {
    total: Math.ceil(total / 10), //总页数
    changePage: function (pageNum) {
      //切换页码成功回调
      page = pageNum
      getNewsList()
    }
  })

  $scope.imageUrl = imageUrl
  $scope.title = $routeParams.name

  function getNewsList() {
    var param = {
      columncategoryid: $routeParams.id,
      page: page,
      size: 20,
      isPublish: 1
    }
    $.ajax({
      url: baseUrl + '/news/queryBy',
      type: 'post',
      data: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (result) {
        if (result.data) {
          page++
          $scope.$apply(function () {
            var dataList = result.data.rows
            for (var i = 0; i < dataList.length; i++) {
              var createtime = dataList[i].createtime.split(' ')
              var time = createtime[0].split('-')
              dataList[i].time1 = time[0] + '-' + time[1]
              dataList[i].time2 = time[2]
            }
            // dataList.map((item) => {
            // 	var createtime = item.createtime.split(" ");

            // 	var time = createtime[0].split("-")
            // 	item.time1 = time[0] + '-' + time[1];
            // 	item.time2 = time[2];
            // })
            $scope.dataList = dataList
            box = new CustomPagination('#page', {
              total: Math.ceil(result.data.total / 10), //总页数
              changePage: function (pageNum) {
                //切换页码成功回调
                page = pageNum
                getNewsList2()
              }
            })
            boxs = new CustomPagination('#pages', {
              total: Math.ceil(result.data.total / 10), //总页数
              changePage: function (pageNum) {
                //切换页码成功回调
                page = pageNum
                getNewsList2()
              }
            })
          })
        }
      }
    })
  }

  function getNewsList2() {
    var param = {
      columncategoryid: $routeParams.id,
      page: page,
      size: 20,
      isPublish: 1
    }
    $.ajax({
      url: baseUrl + '/news/queryBy',
      type: 'post',
      data: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (result) {
        if (result.data) {
          page++
          $scope.$apply(function () {
            var dataList = result.data.rows
            for (var i = 0; i < dataList.length; i++) {
              var createtime = dataList[i].createtime.split(' ')
              var time = createtime[0].split('-')
              dataList[i].time1 = time[0] + '-' + time[1]
              dataList[i].time2 = time[2]
            }
            // dataList.map((item) => {
            // 	var createtime = item.createtime.split(" ");

            // 	var time = createtime[0].split("-")
            // 	item.time1 = time[0] + '-' + time[1];
            // 	item.time2 = time[2];
            // })
            $scope.dataList = dataList
          })
        }
      }
    })
  }
  //点击栏目内容
  $scope.newDetail = function (item) {
    $location.path('/detail').search({
      id: item
    })
  }
})
//头部
jkApp.controller('headCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  $scope.focus = 0
  $scope.websitePhone = getlocalStorage('phone')
  $scope.getOut = function () {
    removelocalStorage('phone', 'openId')
    window.location.reload()
  }
  //获取栏目类别
  treeList()
  activityQueryBy()
  systeminfo()
  $scope.imageUrl = imageUrl
  var xPos = 20
  var yPos = document.body.clientHeight
  var step = 1
  var delay = 50
  var height = 0
  var Hoffset = 0
  var Woffset = 0
  var yon = 0
  var xon = 0
  var pause = true
  var interval
  imgpop.style.top = yPos

  function changePos() {
    width = document.documentElement.clientWidth
    height = document.documentElement.clientHeight

    try {
      Hoffset = imgpop.offsetHeight
      Woffset = imgpop.offsetWidth
      imgpop.style.left = xPos + document.documentElement.scrollLeft + 'px'
      imgpop.style.top = yPos + document.documentElement.scrollTop + 'px'
    } catch {
      clearInterval(interval)
    }
    if (yon) {
      yPos = yPos + step
    } else {
      yPos = yPos - step
    }
    if (yPos < 0) {
      yon = 1
      yPos = 0
    }
    if (yPos >= height - Hoffset) {
      yon = 0
      yPos = height - Hoffset
    }
    if (xon) {
      xPos = xPos + step
    } else {
      xPos = xPos - step
    }
    if (xPos < 0) {
      xon = 1
      xPos = 0
    }
    if (xPos >= width - Woffset) {
      xon = 0
      xPos = width - Woffset
    }
  }

  function start() {
    imgpop.style.visibility = 'visible'
    interval = setInterval(changePos, delay)
  }
  start()

  //设为首页
  $scope.SetHome = function (obj) {
    var url = window.location.href
    try {
      obj.style.behavior = 'url(#default#homepage)'
      obj.setHomePage(url)
    } catch (e) {
      if (window.netscape) {
        try {
          netscape.security.PrivilegeManager.enablePrivilege(
            'UniversalXPConnect'
          )
        } catch (e) {
          alert(
            "抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'"
          )
        }
      } else {
        alert(
          '抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【' +
            url +
            '】设置为首页。'
        )
      }
    }
  }

  //收藏本站
  $scope.AddFavorite = function () {
    var url = window.location.href
    var title = $scope.info.companyname
    try {
      window.external.addFavorite(url, title)
    } catch (e) {
      try {
        window.sidebar.addPanel(title, url, '')
      } catch (e) {
        alert(
          '抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加'
        )
      }
    }
  }
  //点击活动
  $scope.activityClick = function () {
    clearInterval(interval)
    imgpop.style.visibility = 'hidden'
  }
  $scope.activityMouseenter = function () {
    clearInterval(interval)
  }
  $scope.activityOnmouseout = function () {
    interval = setInterval(changePos, delay)
  }
  //获取栏目内容
  function treeList() {
    $.ajax({
      url: baseUrl + '/columnCategory/tree/list',
      success: function (result) {
        $scope.$apply(function () {
          $scope.treeList = result.data
        })
      }
    })
  }
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
  //获取活动信息
  function activityQueryBy() {
    var param = {
      page: 1,
      size: 15,
      title: '',
      isenable: 1
    }
    $.ajax({
      url: baseUrl + '/activity/queryBy',
      type: 'post',
      data: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (result) {
        if (result.data) {
          $scope.$apply(function () {
            $scope.activityInfo = result.data.rows[0]
          })
        }
      }
    })
  }
  $scope.yrlanmu = function (i) {
    $scope.start = true
    $scope.focus = i
  }

  //点击栏目内容
  $scope.newDetail = function (item) {
    $scope.start = false
    if (item.isjump == 1) {
      window.location.href = item.urlpath
    } else {
      $scope.focus = $scope.focus
      if (item.pid != '0') {
        //跳转列表
        if (item.istabulation == 1) {
          $location.path('/new').search({
            name: item.name,
            id: item.id
          })
        } else {
          $location.path('/detail').search({
            id: item.id,
            start: 1
          })
        }
      }
    }
  }
  $scope.yclanmu = function () {
    if ($scope.start) {
      $scope.focus = 0
    }
  }
  //点击收藏
  var tag = 1
  $('.home-collect').click(function () {
    if (tag == 0) {
      $(this).css('color', 'red')
      tag = 1
    } else if (tag == 1) {
      $(this).css('color', '#0052a6')
      tag = 0
    }
  })

  //导航
  $('.head-nav>li').each(function (i, e) {
    $(this).mouseenter(function () {
      $(this).find('a').addClass('nav-hover')
      $(this).find('ul').slideDown(1000)
    })
    $(this).mouseleave(function () {
      $(this).find('a').removeClass('nav-hover')
      $(this).find('ul').slideUp()
    })
  })
  $('.code-show').hover(function () {
    $('.head-code').slideToggle()
  })
  $scope.loginClick = function () {
    $location.path('/login')
  }
  $scope.registerClick = function () {
    $location.path('/register')
  }
})
//在线支付
jkApp.controller(
  'onlinePaymentCtrl',
  function ($scope, $location, $routeParams) {
    $scope.imageUrl = imageUrl
    systeminfo()
    //获取基本信息
    function systeminfo() {
      $.ajax({
        url: baseUrl + '/systeminfo/queryAll',
        success: function (result) {
          $scope.$apply(function () {
            $scope.info = result.data[0]
          })
        }
      })
    }
  }
)
//尾部
jkApp.controller('footCtrl', function ($scope, $location, $routeParams) {
  $scope.imageUrl = imageUrl
  var tip_index
  systeminfo()
  columnCategory()
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          $('#foot_companyInfo').mouseenter(function () {
            tip_index = layer.tips(
              $scope.info.companyinfo,
              '#foot_companyInfo',
              {
                tips: [4, '#'], //1-4表示上右下左四个方向，# 可带背景色
                area: ['450px', 'auto'], // 提示框宽高
                time: 0, //自动关闭所需毫秒,0表示不自动关闭}),
                success: function (layero, index) {
                  var oldTop = layero.css('top')
                  oldTop = oldTop.substring(0, oldTop.indexOf('px'))
                  layero.css('top', oldTop - 50 + 'px')
                }
              }
            )
          })
          $('#foot_companyInfo').mouseleave(function () {
            layer.close(tip_index)
          })
        })
      }
    })
  }
  //公司简介
  $scope.learnMore = function () {
    //跳转列表
    $location.path('/companyProfile')
  }
  //点击栏目内容
  $scope.newDetail = function (item) {
    if (item.isjump == 1) {
      window.location.href = item.urlpath
    } else {
      if (item.pid != 0) {
        //跳转列表
        if (item.istabulation == 1) {
          $location.path('/new').search({
            name: item.name,
            id: item.id
          })
        } else {
          $location.path('/detail').search({
            id: item.id,
            start: 1
          })
        }
      }
    }
  }

  function columnCategory() {
    var param = {
      page: 1,
      size: 3,
      bottomstate: 1
    }
    $.ajax({
      url: baseUrl + '/columnCategory/queryBy',
      type: 'post',
      data: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (result) {
        $scope.$apply(function () {
          $scope.columnCategoryData = result.data
        })
      }
    })
  }
  //小火箭
  $(function () {
    $('.rocket').click(function (e) {
      TweenMax.to(window, 1.5, {
        scrollTo: 0,
        ease: Expo.easeInOut
      })
      var huojian = new TimelineLite()
      huojian.to(
        '.rocket',
        1,
        {
          y: 0,
          rotationY: 0,
          opacity: 1,
          scale: 1,
          ease: Expo.easeOut,
          clearProps: 'all'
        },
        '1.4'
      )
    })
  })
})
//主页  home
jkApp.controller('homeCtrl', function ($scope, $location, $sce) {
  var swiper
  swiper() //获取轮播图
  businessHandlingQueryAll() //获取业务办理模块
  getHotNew()
  getRecommendList()
  swiperInit()
  getNotice()
  policeTypeQueryAll()
  systeminfo()
  $scope.videoUrl = videoUrl
  videoQueryAll()
  $scope.imageUrl = imageUrl
  //视频播放事件
  $scope.videoUrlFun = function (url) {
    var urlFun = $sce.trustAsResourceUrl(url)
    return urlFun
  }

  //获取轮播图
  function swiper() {
    $.ajax({
      url: baseUrl + '/looppic/queryAll',
      success: function (result) {
        var arr = []
        if (result.data.length > 0) {
          for (var i = 0; i < result.data.length; i++) {
            if (result.data[i].isshow == 1) {
              arr.push(result.data[i])
            }
          }
        }

        $scope.$apply(function () {
          $scope.swiperData = arr
        })
        //轮播图
        var mySwiper = new Swiper('.swiper-container1', {
          //vertical  竖直
          direction: 'horizontal',
          //  loop: true,
          // 如果需要分页器
          pagination: '.swiper-pagination1',
          paginationClickable: true, // 点击分页器的指示点,控制Swiper切换
          // 如果需要前进后退按钮
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          //自动播放
          autoplay: 3000,
          //动画效果(cube fade overflow flip)
          effect: 'overflow',
          // 如果需要滚动条
          //  scrollbar: '.swiper-scrollbar',
          onSlideChangeEnd: function (swiper) {
            //				console.log(swiper.activeIndex); //切换结束时，告诉我现在是第几个slide
          },
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          onSlideChangeEnd: function (swiper) {
            swiper.update()
            // mySwiper.startAutoplay();
            // mySwiper.reLoop();
          }
        })
      }
    })
  }
  //获取业务办理模块
  function businessHandlingQueryAll() {
    $.ajax({
      url: baseUrl + '/businessHandling/queryAll',
      success: function (result) {
        var arr = []
        if (result.data.length > 0) {
          for (var i = 0; i < result.data.length; i++) {
            if (result.data[i].isshow == 1) {
              arr.push(result.data[i])
            }
          }
          // result.data.map((item) => {
          // 	if (item.isshow == 1) {
          // 		arr.push(item)
          // 	}
          // })
        }

        $scope.$apply(function () {
          $scope.businessHandlingData = arr
        })
      }
    })
  }
  //获取热点新闻
  function getHotNew() {
    var param = {
      page: 1,
      size: 5,
      ishot: 1,
      isPublish: 1
    }
    $.ajax({
      url: baseUrl + '/news/queryBy',
      type: 'post',
      data: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (result) {
        // $scope.$apply(function() {
        if (result.data.rows.length > 0) {
          // $scope.hotData = result.data.rows;
          $scope.hotData = result.data.rows.splice(0, 4)
          if (result.data.rows.length > 0) {
            $scope.titles = result.data.rows[0].title
          }

          swiperInit()
        } else {
          $scope.hotData = []
        }

        // });
      }
    })
  }
  //推荐新闻
  function getRecommendList() {
    var param = {
      page: 1,
      size: 7,
      isrecommend: 1,
      isPublish: 1
    }
    $.ajax({
      url: baseUrl + '/news/queryBy',
      type: 'post',
      data: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (result) {
        $scope.$apply(function () {
          if (result.data.rows.length > 0) {
            $scope.recommendData = result.data.rows
          } else {
            $scope.recommendData = []
          }
        })
      }
    })
  }
  //根据类型获取公告类型新闻
  function getNotice(typeid) {
    $.ajax({
      url: baseUrl + '/columnCategory/queryNotice?isnotice=1',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (result) {
        $scope.$apply(function () {
          if (result.data.data.length > 0) {
            $scope.noticeTypeDate = result.data.data
            $scope.noticeTypeQueryAll(result.data.data[0].id)
          } else {
            $scope.noticeTypeDate = []
          }
        })
      }
    })
  }
  //获取视频
  function videoQueryAll() {
    var param = {
      page: 1,
      size: 15
    }
    $.ajax({
      url: baseUrl + '/video/queryAll',
      type: 'get',
      params: param,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (result) {
        $scope.$apply(function () {
          if (result.data.rows.length > 0) {
            // 公司简介视频、宣传视频
            $scope.IntroduceVideoList = result.data.rows.filter(
              (item) => item.isIntroduce == 1
            )
            $scope.PublicizeVideoList = result.data.rows.filter(
              (item) => item.isPublicize == 1
            )
          } else {
            $scope.IntroduceVideoList = []
            $scope.PublicizeVideoList = []
          }
        })
      }
    })
  }
  $scope.right_click = function () {
    if (
      document.querySelector('.announcement_left_title_ul').scrollLeft <
      $scope.noticeTypeDate.length * 120
    ) {
      $('.announcement_left_title_ul').animate({ scrollLeft: '+=140px' })
    }
  }
  $scope.left_click = function () {
    if (document.querySelector('.announcement_left_title_ul').scrollLeft > 0) {
      $('.announcement_left_title_ul').animate({ scrollLeft: '-=140px' })
    }
  }
  //获取公告类型
  $scope.noticeTypeQueryAll = function (id) {
    var param = {
      columncategoryid: id,
      page: 1,
      size: 20,
      isPublish: 1
    }
    $.ajax({
      url: baseUrl + '/news/queryBy',
      type: 'post',
      data: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (result) {
        if (result.data) {
          $scope.$apply(function () {
            var dataList = result.data.rows
            $scope.noticeData = dataList
          })
        }
      }
    })
  }
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
        })
      }
    })
  }
  //获取政策法规类型
  function policeTypeQueryAll() {
    $.ajax({
      url: baseUrl + '/policeType/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          if (result.data.length > 0) {
            for (var i = 0; i < result.data.length; i++) {
              result.data[i].img = result.data[i].icon
            }
            // result.data.map((item) => {
            // 	item.img = item.icon;
            // })
            result.data[0].img = result.data[0].iconactive
            $scope.policeTypeData = result.data
            getPoliceData(result.data[0].id)
          } else {
            $scope.policeTypeData = []
          }
        })
      }
    })
  }

  //根据政策法规类型获取新闻
  function getPoliceData(typeid) {
    var param = {
      page: 1,
      size: 7,
      typeid: typeid
    }
    $.ajax({
      url: baseUrl + '/police/queryBy',
      type: 'post',
      data: JSON.stringify(param),
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (result) {
        $scope.$apply(function () {
          if (result.data.rows.length > 0) {
            $scope.policeData = result.data.rows
          } else {
            $scope.policeData = []
          }
        })
      }
    })
  }
  $scope.focus = 0
  $scope.li_click = function (i, typeid) {
    $scope.noticeTypeQueryAll(typeid)
    $scope.focus = i
  }

  $scope.openpoliceType = function (items) {
    for (var i = 0; i < $scope.policeTypeData.length; i++) {
      $scope.policeTypeData[i].img = $scope.policeTypeData[i].icon
    }
    // $scope.policeTypeData.map((item) => {
    // 	item.img = item.icon
    // })
    console.log(items.iconactive)
    items.img = items.iconactive
    getPoliceData(items.id)
  }
  //了解更多
  $scope.learnMore = function () {
    //跳转列表
    $location.path('/companyProfile')
  }
  //点击业务办理
  $scope.openbusinessHandling = function (item) {
    //判断是否跳转链接
    if (item.isjump == 1) {
      if (item.urlpath.substr(0, 3) == '/#/') {
        item.urlpath = item.urlpath.slice(3)
        //跳转列表
        $location.path(item.urlpath)
      } else {
        window.location.href = item.urlpath
      }
    } else {
      //跳转列表
      $location.path('/handling').search({
        id: item.id
      })
    }
  }
  //跳转新闻详情
  $scope.opendetails = function (id) {
    $location.path('/detail').search({
      id: id
    })
  }

  //跳转公告详情
  $scope.openDetailsNotice = function (item) {
    if (item.isjump == 1) {
      window.location.href = item.urlpath
    } else {
      $location.path('/detail').search({
        id: item.id
      })
    }
  }
  // 更多公告新闻
  $scope.openMore = function (item) {
    $location.path('/new').search({
      name: item.columnCategoryName,
      id: item.columncategoryid
    })
  }
  //政策法规
  $scope.openstatutory = function (item) {
    if (item.isjump == 1) {
      window.location.href = item.urlpath
    } else {
      $location.path('/statutory').search({
        id: item.id
      })
    }
  }
  //跳转新闻详情
  $scope.opendetailsId = function () {
    console.log($scope.detailsId)
    $location.path('/detail').search({
      id: $scope.detailsId
    })
  }
  //给每个页码绑定跳转的事件
  $('.pagination').on('click', 'li', function () {
    var index = this.innerHTML

    $scope.$apply(function () {
      $scope.titles = $scope.hotData[index - 1].title
      $scope.detailsId = $scope.hotData[index - 1].id
    })
    swiper.slideTo(index - 1, 500, false) //切换到第一个slide，速度为1秒
  })

  function swiperInit() {
    //小轮播图
    swiper = new Swiper('.swiper-container2', {
      direction: 'horizontal',
      pagination: '.pagination',
      autoplay: 4000,
      effect: 'fade',
      paginationType: 'custom', //自定义-分页器样式类型（前提）
      onSlideChangeEnd: function (swiper) {},
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      onSlideChangeEnd: function (swiper) {
        swiper.update()
      },
      //设置自定义分页器的内容
      paginationCustomRender: function (swiper, current, total) {
        $('.pagination').css('width', 40 * total + 'px')
        var _html = ''
        if ($scope.hotData && $scope.hotData.length > 0) {
          $scope.$apply(function () {
            $scope.titles = $scope.hotData[current - 1].title

            $scope.detailsId = $scope.hotData[current - 1].id
          })
        }

        for (var i = 1; i <= total; i++) {
          if (current == i) {
            _html += "<li style='background:#0d5ba0'>" + i + '</li>'
          } else {
            _html += '<li>' + i + '</li>'
          }
        }
        return _html //返回所有的页码html
      }
    })
  }
})
// 登录页
jkApp.controller('loginCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  systeminfo()
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
  $scope.loginReload = function () {
    window.location.reload()
  }
  $scope.goHome = function () {
    $location.path('/')
  }
  $scope.registerClick = function () {
    $location.path('/register')
  }
  $scope.forgetClick = function () {
    $location.path('/forget')
  }
  $(document).on('keypress', function (event) {
    if (event.keyCode == '13') {
      $('#dataFrom .button-login:visible').click()
    }
  })
  // 图片验证码
  $scope.getCodeImg = function () {
    $.ajax({
      url: baseUrl + '/verificationCode/getCaptchaImg',
      xhrFields: { responseType: 'arraybuffer' },
      success: function (result) {
        $scope.$apply(function () {
          var binary = ''
          var bytes = new Uint8Array(result)
          var len = bytes.byteLength
          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          $('#codeImg').attr(
            'src',
            'data:img/png;base64,' + window.btoa(binary)
          )
          $('.codeImg2').attr(
            'src',
            'data:img/png;base64,' + window.btoa(binary)
          )
        })
      },
      complete: function (xhr) {
        //请求完成后，获取Response Headers 中的Codeid
        $scope.$apply(function () {
          $scope.Codeid = xhr.getResponseHeader('CodeId')
        })
      }
    })
  }
  $scope.getCodeImg()
  var InterValObj //timer变量，控制时间
  var count = 60 //间隔函数，1秒执行
  var curCount = 60 //当前剩余秒数
  var interval
  var wxqrcode
  // $(document).ready(function() {
  //     wxqrcode = new QRCode("wxqrcode", {width: 200,height: 200});
  // });
  $scope.login = function () {
    $('#errorTip').html('')
    var userName = $("input[name='mobile']").val()
    var code = $("input[name='code']").val()
    var password = $("input[name='password']").val()
    if (userName == '') {
      top.layer.msg('请输入手机号或用户名', { icon: 2, time: 3000 })
      return
    }

    if (password == '' || password.length < 6) {
      top.layer.msg('请输入6-16位密码', { icon: 2, time: 3000 })
      return
    }
    if (code == '') {
      top.layer.msg('请正确输入验证码', { icon: 2, time: 3000 })
      return
    }
    var load = layer.load(3)

    $.ajax({
      type: 'POST',
      url: baseUrl + '/login/userLogin',
      data: JSON.stringify({
        mobileNumber: $("input[name='mobile']").val(),
        userPassword: Encrypt($("input[name='password']").val()),
        verificationCode: $("input[name='code']").val(),
        codeId: $scope.Codeid
      }),
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
        $('#codeImg').click()
        layer.close(load)
        if (data.code == 10000) {
          top.layer.msg('登录成功')
          setlocalStorage('phone', userName)
          $location.path('/OnlineBusinessHall')
        } else {
          data.message = data.message || data.msg
          $('#errorTip').html(data.message)
        }
      },
      error: function (res) {
        layer.close(load)
        top.layer.msg('请求失败', {
          icon: 2,
          time: 3000
        })
      }
    })
  }

  $scope.smsLogin = function () {
    var phone = $('#phone4sms').val()
    var smsCode = $('#smsCode').val()
    var code = $('#code4Sms').val()

    if (!checkPhone(phone)) {
      $('#phone-error').html('手机号格式错误')
      return
    }
    if (code == '') {
      top.layer.msg('请正确输入验证码', { icon: 2, time: 3000 })
      return
    }
    if (smsCode == '') {
      top.layer.msg('请正确输入短信验证码', { icon: 2, time: 3000 })
      return
    }

    $('#errorTip').html('')
    var load = layer.load(3)
    $.ajax({
      type: 'POST',
      url: baseUrl + '/login/userMessageLogin',
      data: JSON.stringify({
        mobileNumber: phone,
        userPassword: Encrypt($("input[name='password']").val()),
        verificationCode: smsCode,
        codeId: $scope.Codeid
      }),
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
        $('#code4Sms').next().click()
        layer.close(load)
        if (data.code == 1000) {
          top.layer.msg('登录成功')
          setlocalStorage('phone', phone)
          $location.path('/OnlineBusinessHall')
        } else {
          $('#errorTip4Sms').html(data.message)
        }
      },
      error: function (res) {
        layer.close(load)
        top.layer.msg('请求失败', {
          icon: 2,
          time: 3000
        })
      }
    })
  }
  function checkPhone(phone) {
    if (/^1[3|4|5|6|7|8|9][0-9]\d{8,11}$/.test(phone)) {
      return true
    }
    return false
  }
  function SetRemainTime(id) {
    if (curCount == 0) {
      window.clearInterval(InterValObj) //停止计时器
      $('.' + id).removeAttr('disabled') //启用按钮
      $('.' + id).html('重新发送')
    } else {
      curCount--
      $('.' + id).html(curCount + 's')
    }
  }

  $scope.sendMessage = function () {
    var phone = $('#phone4sms').val()
    if (!checkPhone(phone)) {
      top.layer.msg('请输入正确手机号', {
        icon: 2,
        time: 3000
      })
      return
    }
    var load = layer.load(3)
    //向后台发送处理数据
    $.ajax({
      url:
        baseUrl +
        `/registration/sendInformation?phoneNumber=` +
        phone +
        `&code=` +
        $('#code4Sms').val() +
        '&codeId=' +
        $scope.Codeid,
      error: function (XMLHttpRequest, textStatus, errorThrown) {},
      success: function (result) {
        layer.close(load)
        $('#code4Sms').after().click()
        if (result.code != 10000) {
          top.layer.msg(result.message, {
            icon: 2,
            time: 3000
          })
          return
        }
        top.layer.msg('短信发送成功，请注意查看')
        InterValObj = window.setInterval(function () {
          SetRemainTime('loginSendCode')
        }, 1000) //启动计时器，1秒执行一次
        curCount = count
        //设置button效果，开始计时
        $('.loginSendCode').attr('disabled', 'true')
        $('.loginSendCode').html(curCount + 's')
      }
    })
  }
  $('.form-tab>p').click(function () {
    $(this).addClass('border')
    $(this).siblings().removeClass('border')
    console.log($(this).index())
    var wx = $('form>div').eq($(this).index()).hasClass('wx')
    // if (wx) {
    //     genWxQRCode();
    // } else {
    //     window.clearInterval(interval);
    // }
    $('form>div').eq($(this).index()).addClass('show')
    $('form>div').eq($(this).index()).siblings().removeClass('show')
    $('#codeImg').click()
  })

  function genWxQRCode() {
    $('#qrcode-error').hide()
    $.ajax({
      type: 'GET',
      url: 'sso/createWxQRCode?v=' + Math.random(),
      dataType: 'json',
      success: function (data) {
        if (data.data.status == 1) {
          window.clearInterval(interval)
          wxqrcode.clear()
          wxqrcode.makeCode(data.data.url)
          // interval = self.setInterval("checkQRCode('wx')", 2000);
        }
      },
      error: function (res) {
        $('#qrcode-error').show()
        $('#err-cont').html('二维码生成失败!')
      }
    })
  }

  function checkQRCode(type) {
    $.ajax({
      type: 'GET',
      url:
        type == 'wx'
          ? 'sso/checkWxQRCode?v=' + Math.random()
          : 'sso/checkMynjQRCode?v=' + Math.random(),
      data: {
        url: suypower.util.getQueryString('url')
      },
      dataType: 'json',
      success: function (data) {
        if (data.msg == '333') {
          mustSetPass()
          return
        }
        //登录成功跳转
        if (data.status == 3) {
          top.layer.msg('登录成功!', {
            icon: 1,
            time: 1000
          })
          window.clearInterval(interval)
          location.href = data.url
        }
        //扫码成功但系统未注册
        if (data.status == 4) {
          window.clearInterval(interval)
          window.location.href = 'sso/registerPage?type=' + type + '&from=pc'
        }
        //二维码过期POINTS
        if (data.status == 0) {
          if (type == 'wx') {
            $('#qrcode-error').show()
          } else {
            $('#mynjQrcode-error').show()
          }
          window.clearInterval(interval)
        }
      },
      error: function (res) {
        if (type == 'wx') {
          $('#qrcode-error').show()
          $('#err-cont').html('二维码校验失败!')
        } else {
          $('#mynjQrcode-error').show()
          $('#mynjErr-cont').html('二维码校验失败!')
        }
        window.clearInterval(interval)
      }
    })
  }
})
// 注册页
jkApp.controller('registerCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  systeminfo()

  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
  $scope.registerReload = function () {
    window.location.reload()
  }
  // 图片验证码
  $scope.getCodeImg = function () {
    $.ajax({
      url: baseUrl + '/verificationCode/getCaptchaImg',
      xhrFields: { responseType: 'arraybuffer' },
      success: function (result) {
        $scope.$apply(function () {
          var binary = ''
          var bytes = new Uint8Array(result)
          var len = bytes.byteLength
          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          $('#codeImg').attr(
            'src',
            'data:img/png;base64,' + window.btoa(binary)
          )
        })
      },
      complete: function (xhr) {
        //请求完成后，获取Response Headers 中的Codeid
        $scope.$apply(function () {
          $scope.Codeid = xhr.getResponseHeader('CodeId')
        })
      }
    })
  }
  $scope.getCodeImg()

  var width = document.body.clientWidth
  var height = width * 0.4
  console.log(width)
  if (width > 1280) {
    // $('#main').css({ height: height })
    $('#main .register').css({ left: '835px' })
  }
  if (width >= 1300 && width <= 1440) {
    $('#main .register').css({ left: '850px' })
  }
  if (width > 1440 && width <= 1680) {
    $('#main .register').css({ left: '870px' })
  }
  if (width > 1680 && width <= 1920) {
    $('#main .register').css({ left: '940px' })
  }
  if (width > 1920 && width <= 2160) {
    $('#main .register').css({ left: '985px' })
  }
  if (width > 2160 && width <= 2560) {
    $('#main .register').css({ left: '1000px' })
  }
  function checkPhone(phone) {
    if (/^1[3|4|5|6|7|8|9][0-9]\d{8,11}$/.test(phone)) {
      return true
    }
    return false
  }

  function checkUserName(val) {
    if (val == '') {
      return false
    }
    var regex = /^[0-9]+$/ //匹配表达式
    if (regex.test(val)) {
      return false
    }
    regex = new RegExp('^[0-9a-zA-Z_]{1,}$')
    if (!regex.test(val)) {
      return false
    }
    //或者通过NaN函数
    if (!isNaN(val)) {
      return false
    }
    return true
  }

  var InterValObj //timer变量，控制时间
  var count = 60 //间隔函数，1秒执行
  var curCount = 60 //当前剩余秒数
  $scope.sendMessage = function () {
    var phone = $('#phone').val()
    if (!checkPhone(phone)) {
      top.layer.msg('请输入正确手机号', { icon: 2, time: 3000 })
      return
    }
    var load = layer.load(3)
    //向后台发送处理数据
    $.ajax({
      url:
        baseUrl +
        `/registration/sendInformation?phoneNumber=` +
        phone +
        `&code=` +
        $('#code').val() +
        '&codeId=' +
        $scope.Codeid,
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        layer.close(load)
        top.layer.msg('服务请求失败！', { icon: 2, time: 3000 })
      },
      success: function (result) {
        layer.close(load)
        $('#code').after().click()
        if (result.success != true) {
          top.layer.msg(result.message, { icon: 2, time: 3000 })
          return
        }
        top.layer.msg('短信发送成功，请注意查看')
        InterValObj = window.setInterval(SetRemainTime, 1000) //启动计时器，1秒执行一次
        curCount = count
        //设置button效果，开始计时
        $('.registerSendCode').attr('disabled', 'true')
        $('.registerSendCode').html(curCount + 's')
      }
    })
  }
  //timer处理函数
  function SetRemainTime() {
    if (curCount == 0) {
      window.clearInterval(InterValObj) //停止计时器
      $('.registerSendCode').removeAttr('disabled') //启用按钮
      $('.registerSendCode').html('重新发送')
    } else {
      curCount--
      $('.registerSendCode').html(curCount + 's')
    }
  }

  $('#agreement').click(function () {
    var offset = ['5%', '5%']
    // if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
    //     offset = ['20%', '5%'];
    // }
    layer.open({
      title: '用户协议',
      type: 1,
      skin: 'layui-layer-demo', //样式类名
      closeBtn: 0, //不显示关闭按钮
      anim: 2,
      offset: offset,
      area: ['90%', '90%'],
      shadeClose: true, //开启遮罩关闭
      content:
        '尊敬的客户: <p class="agreement">感谢您注册使用我公司网上营业厅。网上营业厅的所有权和运作权，以及受理具体业务的经营权归水务集团有限公司所有。在注册使用本网站之前，您必须完全同意以下所有服务条款：</p> <p class="agreement"> 一、定义 </p> <p class="agreement">1、 本网站：指水务集团有限公司网站，网址为。</p> <p class="agreement"> 2、 用户/您：指同意并遵守本协议，完成本网站所有注册程序并经本网站确认，拥有本网站登录帐号和密码的自然人、法人、其他组织。</p> ' +
        '<p class="agreement">3、 用户信息：指用户注册信息以及用户使用本网站用户服务时提交的、被本网站所知悉的交易信息。</p>' +
        '<p class="agreement">4、 用户注册信息：指用户在本网站注册的各项信息，包括其后通过身份验证后修改所填写的内容。</p>' +
        '<p class="agreement">5、 用户指令：本协议中，除非专门指明或声明，均指用户以数据电文形式向本网站提出的申请、要求，包括但不限于用户要求本网站提供、变更或取消其依据本网站业务流程可享有的各项服务的申请、要求。</p>' +
        '<p class="agreement">6、 用户服务/产品使用协议：根据水务集团有限公司的业务规定或规则，用户与水务集团有限公司就提供互联网服务事宜另行签署的协议和/或合同。</p>' +
        '<p class="agreement">二、 协议条款的确认和接受</p>' +
        '<p class="agreement">1、 本网站在此特别提醒您，在您使用注册前请确实仔细阅读本协议，如果您对本协议的任何条款和/或将来随时可能修改、补充的条款有异议，您可选择不注册成为本网站的用户。</p>' +
        '<p class="agreement">2、 当您点选“同意”按钮时即视为您已仔细阅读本条款，同意接受本协议条款的所有规范包括接受本网站对本协议条款随时所做的任何修改，并愿受其拘束。</p>' +
        '<p class="agreement">3、 本网站有权在必要时修改本协议条款，协议条款一旦发生变动，将会在重要页面上提示修改内容。如果不同意所改动的内容，用户可以主动注销其用户帐号。如果用户继续享用本网站所提供的网络服务，则视为接受服务条款的变动。</p>' +
        '<p class="agreement"> 4、 本网站保留在任何时候自行决定对本网站及其相关功能的变更、升级、修改、转移的权利。本网站进一步保留在本网站中开发新功能的权利。上述所有新的功能、软件服务的提供，除非本网站另有说明，否则仍适用本协议。</p>' +
        '<p class="agreement">三、 服务内容</p>' +
        '<p class="agreement">1、 本网站将按照本协议及相关操作规程为用户提供相应的用户服务。本网站保证其所提供服务的合法性，并有义务在现有技术上维护整个网上服务及交易的正常运行，并努力提升和改进技术，使用户网上服务和交易活动得以顺利进行。</p>' +
        '<p class="agreement">2、 本网站所提供的用户服务包括：用户注册、网站登录、安全退出、找回密码、修改密码、业务办理查询、业务办理申请、水量水费查询、水费缴纳等服务，本网站有权根据实际情况的变化调整用户服务具体内容。</p>' +
        '<p class="agreement">3、 本网站仅提供网络服务，与网络服务有关的通信设备（如电脑、调制解调器及其他与接入互联网有关的装置）及通信服务所需的费用（如为接入互联网而支付的电话费及宽带费）由用户自行承担。</p>' +
        '<p class="agreement"> 四、 使用规则 </p>' +
        '<p class="agreement">1、 用户资料的真实性：用户保证自己在注册时用户身份的真实性和正确性及完整性，如果资料发生变化，用户应及时更改，本网站不能也不会对您的资料不真实、不准确，或您的资料未能及时更新，或因您丢失了身份号码和密码而引起的任何损失或损害承担责任。若用户提供任何错误、不实、过时或不完整的资料，并为本网站所确知；或者本网站有合理理由怀疑前述资料为错误、不实、过时或不完整，本网站有权暂停或终止用户的帐号，并拒绝现在或将来使用本服务的全部或一部分。</p>' +
        '<p class="agreement"> 2、 用户帐号、密码</p>' +
        '<p class="agreement">用户登陆帐号及密码为用户在本网站的唯一身份权证，为享受本网站提供的用户服务，您须按照对应的服务要求键入正确的客户登陆帐号及密码。</p>' +
        '<p class="agreement">您应保管好自己的客户登陆帐号和密码，在服务使用过程中可更改密码。非因本网站原因导致客户登陆帐号、密码遗失、遗忘或被他人窃取的，本网站不承担责任。如果用户发现自己的个人信息泄密，尤其是本网站帐户及密码发生泄露，立即致电96055。</p>' +
        '<p class="agreement">3、 您在使用本网站提供的用户服务过程中，必须遵守以下原则：</p>' +
        '<p class="agreement">a、遵守中国有关的法律和法规；</p>' +
        '<p class="agreement">b、不得为任何非法目的而使用本网站所提供网络服务系统；</p>' +
        '<p class="agreement">c、遵守所有与网络服务有关的网络协议、规定和程序；</p>' +
        '<p class="agreement">d、禁止出售、转售或复制、开发本网站授予的使用权限；</p>' +
        '<p class="agreement">e、禁止损害本公司利益或者其他用户利益的行为。</p>' +
        '<p class="agreement">4、 用户承诺其通过本网站服务进行活动引发的一切后果，由其承担全部责任。如因用户使用本网站的行为，导致水务集团有限公司为此承担了相关的责任，用户需全额赔偿水务集团有限公司的相关支出及损失，包括律师费用、诉讼费等。</p>' +
        '<p class="agreement">五、 用户隐私</p>' +
        '<p class="agreement">a、事先获得用户的明确授权；</p>' +
        '<p class="agreement">b、根据有关的法律法规要求；</p>' +
        '<p class="agreement">c、按照相关政府主管部门的要求；</p>' +
        '<p class="agreement">d、为维护社会公众的利益；</p>' +
        '<p class="agreement">e、为维护本网站或用户的合法权益；</p>' +
        '<p class="agreement">f、不可抗力所导致的用户信息公开；</p>' +
        '<p class="agreement">g、不能归咎于本站的客观情势，所导致的个人资料的公开；</p>' +
        '<p class="agreement">h、由于本网站的硬件和软件的能力限制，所导致用户信息的公开；</p>' +
        '<p class="agreement">i、本网站有充分理由相信用户信息的公开，符合本站和用户利益要求的。</p>' +
        '<p class="agreement">2、 在不透露单个用户信息的前提下，本网站有权对整个用户数据库进行分析并对用户数据库进行利用。</p>' +
        '<p class="agreement">3、 本网站应在其网络系统内建立合理的安全体系，包括身份识别体系、内部安全防范体系，以使用户数据完整，并且保密。但用户了解并同意技术手段在不断更新，本网站无法杜绝全部的非安全因素，但本网站会及时更新体系，妥善维护网络及相关数据。</p>' +
        '<p class="agreement">六、 服务变更、中断或终止</p>' +
        '<p class="agreement">1、 如因系统维护或升级的需要而需暂停网络服务本网站将尽可能事先进行通告。</p>' +
        '<p class="agreement">2、 本网站有权判定您的行为是否符合本网站有关要求，出现包括但不限于以下情形的，本网站有权单方在不作通知的情况下终止对您提供的客户服务，由此产生的风险及责任由您自行承担。如造成本网站损失的，您还应承担赔偿等责任：</p>' +
        '<p class="agreement">a、用户提供的注册资料不真实；</p>' +
        '<p class="agreement">b、用户违反本协议中规定的使用规则。</p>' +
        '<p class="agreement">3、 用户完成网站的注销手续时，本协议即为终止；</p>' +
        '<p class="agreement">4、 本协议的终止并不意味着终止前所发生的未完成客户指令的撤销，也不能消除因终止前的交易所带来的法律后果。</p>' +
        '<p class="agreement">5、 本网站保留在不事先通知用户的情况下随时中断或终止部分或全部网络服务的权利，对于所有服务的中断或终止而造成的任何损失，本网站无需对用户或任何第三方承担任何责任。</p>' +
        '<p class="agreement">七、 免责声明</p>' +
        '<p class="agreement">1、 本网站尽力向客户提供优质服务，但不能保证客户服务一定满足客户要求，也不保证客户服务不会受中断。</p>' +
        '<p class="agreement">2、 本网站所发布的信息中可能没有包含与我公司业务有关的最新信息。本网站所提供的信息，只供参考之用。</p>' +
        '<p class="agreement">3、 用户明确同意其使用本网站服务所存在的风险将完全由其自己承担；因其使用本网络服务而产生的一切后果也由其自己承担。</p>' +
        '<p class="agreement">4、 在所适用的法律允许的范围内，任何一方均无须就数据的丢失和/或损坏及任何间接的、附带的、特殊的、后果性的损失向另一方负责赔偿。</p>' +
        '<p class="agreement">八、 不可抗力</p>' +
        '<p class="agreement">如果由于黑客攻击或政府管制或网络通讯瘫痪等用户对其发生和后果不能预见的事件，双方均确认此属不可抗力；双方应按照不可抗力对影响履行本协议的程度，协商决定是否解除本协议、免除履行本协议的部分义务，或者延期履行本协议。</p>' +
        '<p class="agreement">九、 法律适用</p>' +
        '<p class="agreement">本协议适用中华人民共和国法律法规，您和本网站一致同意服从相关法律法规以及本协议的规定。如果本协议的部分条款在任何时候变成不合法、无效或不可强制执行而不从根本上影响本协议的效力时，本协议的其它条款不受影响。</p>'
    })
  })

  $('#register').click(function () {
    if ($('#killOrder:checked').val() != '1') {
      layer.alert('请接受《用户协议》')
      return
    }
    $('.error-tip').html('')
    // var userName = $("#userName").val();
    var phone = $('#phone').val()
    var code = $('#code').val()
    var smsCode = $('#smsCode').val()
    var password = $('#password').val()
    var confirmPassword = $('#confirmPassword').val()

    if (!checkPhone(phone)) {
      $('#phone-error').html('手机号格式错误')
      return
    }
    // if(!checkUserName(userName)){
    //     $("#userName-error").html("用户名仅支持中英文、数字和下划线,且不能为纯数字");
    //     return;
    // }
    // if (userName.length< 6 || userName.length>16){
    //     return $("#userName-error").html("请输入6-16位用户名");
    // }
    if (code == '') {
      top.layer.msg('请正确输入验证码', { icon: 2, time: 3000 })
      return
    }
    if (smsCode == '') {
      top.layer.msg('请正确输入短信验证码', { icon: 2, time: 3000 })
      return
    }
    if (password == '' || password.length < 6) {
      $('#password-error').html('请输入6-16位密码')
      return
    }
    if (password != confirmPassword) {
      $('#confirmPassword-error').html('两次密码输入不一致')
      return
    }

    var load = layer.load(3)
    $.ajax({
      url: baseUrl + '/registration/userRegistration',
      type: 'POST',
      data: JSON.stringify({
        mobileNumber: $('#phone').val(),
        verificationCode: $('#smsCode').val(),
        userPassword: Encrypt($('#password').val())
      }),
      contentType: 'application/json',
      dataType: 'JSON',
      success: function (result) {
        layer.close(load)
        if (result.code == 10000) {
          top.layer.msg('注册成功！', { icon: 1, time: 1000 }, function () {})
          $location.path('/login')
        } else {
          top.layer.msg(result.message, { icon: 2, time: 1000 })
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        layer.close(load)
        top.layer.msg('服务请求失败！', { icon: 2, time: 3000 })
      }
    })
  })
})
// 忘记密码页
jkApp.controller('forgetCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  systeminfo()
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
  $scope.loginClick = function () {
    $location.path('/login')
  }
  $scope.registerClick = function () {
    $location.path('/register')
  }
  $scope.goHome = function () {
    $location.path('/')
  }
  // 图片验证码
  $scope.getCodeImg = function () {
    $.ajax({
      url: baseUrl + '/verificationCode/getCaptchaImg',
      xhrFields: { responseType: 'arraybuffer' },
      success: function (result) {
        $scope.$apply(function () {
          var binary = ''
          var bytes = new Uint8Array(result)
          var len = bytes.byteLength
          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          $('#codeImg').attr(
            'src',
            'data:img/png;base64,' + window.btoa(binary)
          )
        })
      },
      complete: function (xhr) {
        //请求完成后，获取Response Headers 中的Codeid
        $scope.$apply(function () {
          $scope.Codeid = xhr.getResponseHeader('CodeId')
        })
      }
    })
  }
  $scope.getCodeImg()
  var width = document.body.clientWidth
  var height = width * 0.4
  if (width > 1280) {
    // $('#main').css({ height: height })
    $('#main .register').css({ left: '835px' })
  }
  if (width >= 1300 && width <= 1440) {
    $('#main .register').css({ left: '850px' })
  }
  if (width > 1440 && width <= 1680) {
    $('#main .register').css({ left: '870px' })
  }
  if (width > 1680 && width <= 1920) {
    $('#main .register').css({ left: '940px' })
  }
  if (width > 1920 && width <= 2160) {
    $('#main .register').css({ left: '985px' })
  }
  if (width > 2160 && width <= 2560) {
    $('#main .register').css({ left: '1000px' })
  }
  function checkPhone(phone) {
    if (/^1[3|4|5|6|7|8|9][0-9]\d{8,11}$/.test(phone)) {
      return true
    }
    return false
  }

  var InterValObj //timer变量，控制时间
  var count = 60 //间隔函数，1秒执行
  var curCount = 60 //当前剩余秒数
  $scope.sendMessage = function () {
    var phone = $('#phone').val()
    if (!checkPhone(phone)) {
      top.layer.msg('请输入正确手机号', { icon: 2, time: 3000 })
      return
    }
    var load = layer.load(3)
    //向后台发送处理数据
    $.ajax({
      url:
        baseUrl +
        `/registration/sendInformation?phoneNumber=` +
        phone +
        `&code=` +
        $('#code').val() +
        '&codeId=' +
        $scope.Codeid,
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        layer.close(load)
        top.layer.msg('服务请求失败！', { icon: 2, time: 3000 })
      },
      success: function (result) {
        layer.close(load)
        $('#code').after().click()
        if (result.success != true) {
          top.layer.msg(result.message, { icon: 2, time: 3000 })
          return
        }
        top.layer.msg('短信发送成功，请注意查看')
        InterValObj = window.setInterval(SetRemainTime, 1000) //启动计时器，1秒执行一次
        curCount = count
        //设置button效果，开始计时
        $('.forgetSendCode').attr('disabled', 'true')
        $('.forgetSendCode').html(curCount + 's')
      }
    })
  }
  //timer处理函数
  function SetRemainTime() {
    if (curCount == 0) {
      window.clearInterval(InterValObj) //停止计时器
      $('.forgetSendCode').removeAttr('disabled') //启用按钮
      $('.forgetSendCode').html('重新发送')
    } else {
      curCount--
      $('.forgetSendCode').html(curCount + 's')
    }
  }

  $('#save').click(function () {
    $('.error-tip').html('')
    var phone = $('#phone').val()
    var code = $('#code').val()
    var smsCode = $('#smsCode').val()
    var password = $('#password').val()
    var confirmPassword = $('#confirmPassword').val()
    if (!checkPhone(phone)) {
      $('#phone-error').html('手机号格式错误')
      return
    }
    if (code == '') {
      $('#code-error').html('请正确输入验证码')
      return
    }
    if (smsCode == '') {
      $('#smsCode-error').html('请正确输入短信验证码')
      return
    }
    if (password == '' || password.length < 6) {
      $('#password-error').html('请输入6-16位密码')
      return
    }
    if (password != confirmPassword) {
      $('#confirmPassword-error').html('两次密码输入不一致')
      return
    }

    load = layer.load(3)
    $.ajax({
      url: baseUrl + '/registration/getBackPassword',
      type: 'POST',
      data: JSON.stringify({
        mobileNumber: $('#phone').val(),
        verificationCode: $('#smsCode').val(),
        userPassword: Encrypt($('#password').val())
      }),
      contentType: 'application/json',
      dataType: 'JSON',
      success: function (result) {
        layer.close(load)
        if (result.code == 10000) {
          top.layer.msg('保存成功！', { icon: 1, time: 2000 }, function () {
            $location.path('/login')
          })
        } else {
          top.layer.msg(result.message, { icon: 2, time: 3000 })
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        layer.close(load)
        top.layer.msg('服务请求失败！', { icon: 2, time: 3000 })
      }
    })
  })
})
// 网上营业厅
jkApp.controller('businessCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  systeminfo()
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
  treeList()
  //获取栏目内容
  function treeList() {
    $.ajax({
      url: baseUrl + '/columnCategory/tree/list',
      success: function (result) {
        $scope.$apply(function () {
          $scope.treeList = result.data
        })
      }
    })
  }
  getSysMenu()
  // 报装菜单
  $scope.SysMenuList = []
  function getSysMenu() {
    $.ajax({
      url: baseUrl + '/SysMenu/list?isShow=1',
      success: function (res) {
        if (res.code == 10000) {
          $scope.$apply(function () {
            $scope.SysMenuList = res.data.rows
          })
        }
      }
    })
  }
  // 获取手机号绑定的openId
  function getWXopenId() {
    if (getlocalStorage('phone')) {
      $.ajax({
        type: 'Post',
        url: baseUrl + '/ysUser/selectByNumber',
        data: JSON.stringify({
          mobileNumber: getlocalStorage('phone')
        }),
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
          if (res.code == 10000) {
            setlocalStorage('openId', res.data.openId)
            getWXConsList()
          }
        }
      })
    }
  }

  $scope.consInfo = {}
  $scope.websitePhone = getlocalStorage('phone')
  if (getlocalStorage('openId')) {
    getWXConsList()
  } else {
    getWXopenId()
  }
  // 获取户号列表和上次操作户号
  function getWXConsList() {
    if (getlocalStorage('openId')) {
      $.ajax({
        type: 'GET',
        url:
          baseUrl_API_WeiXin +
          'payUser/selectByOpenId?openId=' +
          getlocalStorage('openId'),
        success: function (res) {
          if (res.code == 1) {
            $scope.$apply(function () {
              $scope.lastOperatedTable = res.msg.lastOperatedTable
              $scope.myConsNo = res.msg.lastOperatedTable
              getConsDetail()
              getMoneyDetail()

              $scope.consList = res.userList
            })
          }
        }
      })
    }
  }
  // 获取户号信息
  function getConsDetail() {
    if ($scope.lastOperatedTable) {
      $.ajax({
        type: 'GET',
        url:
          baseUrl_API_WeiXin +
          'netUserInfoController/findAllUser?userInfoCode=' +
          $scope.lastOperatedTable,
        success: function (res) {
          if (res.code == 1) {
            $scope.$apply(function () {
              $scope.consInfo = res
            })
          }
        }
      })
    }
  }
  // 获取户号欠费信息
  function getMoneyDetail() {
    if ($scope.lastOperatedTable) {
      $.ajax({
        type: 'GET',
        url:
          baseUrl_API_WeiXin +
          'netUserInfoController/netFindOweBillDetails?userInfoCode=' +
          $scope.lastOperatedTable,
        success: function (res) {
          if (res.code == 0) {
            $scope.$apply(function () {
              $scope.rcvblAmt = res.rcvblAmt
            })
          }
        }
      })
    }
  }
  GetUserInfo()
  //获取账户信息
  function GetUserInfo() {
    if (getlocalStorage('phone')) {
      $.ajax({
        url: baseUrl + '/userInfo/getuserInfoByMobleNumber',
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
          mobileNumber: getlocalStorage('phone')
        }),
        success: function (result) {
          $scope.$apply(function () {
            $scope.userAddress = result.data[0].userAddress
            $scope.userAvataPath = result.data[0].userAvataPath
          })
        }
      })
    }
  }
  $scope.toUserInfo = function () {
    $location.path('/userInfo')
  }
  GetBusinessNumber()
  //获取业务数量
  function GetBusinessNumber() {
    if (getlocalStorage('openId')) {
      $.ajax({
        url:
          baseUrl_API_BZLC +
          '/Wfms/Overt/WeChart/PublicAccount/Query/Ins/CurrPage', //数据接口
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
          SystemMark: 'XtWeChart',
          WeChatOpenId: getlocalStorage('openId'),
          WeChatNickName: '',
          Entity: {},
          PageInfo: { Sum: 0, PageSize: 1000, CurrPage: 1, Sort: '' }
        }),
        success: function (res) {
          $scope.$apply(function () {
            if (res.Result == 1) {
              $scope.businessNumber = res.Datas.length
            }
          })
        }
      })
    }
  }
})
// 绑定户号
jkApp.controller('bindCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  systeminfo()
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
  getSysMenu()
  // 报装菜单
  $scope.SysMenuList = []
  function getSysMenu() {
    $.ajax({
      url: baseUrl + '/SysMenu/list?isShow=1',
      success: function (res) {
        if (res.code == 10000) {
          $scope.$apply(function () {
            $scope.SysMenuList = res.data.rows
          })
        }
      }
    })
  }
})
jkApp.controller('userInfoCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  $scope.userInfo = {}
  $scope.websitePhone = getlocalStorage('phone')
  getSysMenu()
  // 报装菜单
  $scope.SysMenuList = []
  function getSysMenu() {
    $.ajax({
      url: baseUrl + '/SysMenu/list?isShow=1',
      success: function (res) {
        if (res.code == 10000) {
          $scope.$apply(function () {
            $scope.SysMenuList = res.data.rows
          })
        }
      }
    })
  }
  systeminfo()
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
  getSysMenu()
  // 报装菜单
  $scope.SysMenuList = []
  function getSysMenu() {
    $.ajax({
      url: baseUrl + '/SysMenu/list?isShow=1',
      success: function (res) {
        if (res.code == 10000) {
          $scope.$apply(function () {
            $scope.SysMenuList = res.data.rows
          })
        }
      }
    })
  }
  GetUserInfo()
  //获取账户信息
  function GetUserInfo() {
    if (getlocalStorage('phone')) {
      $.ajax({
        url: baseUrl + '/userInfo/getuserInfoByMobleNumber',
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
          mobileNumber: getlocalStorage('phone')
        }),
        success: function (result) {
          $scope.$apply(function () {
            $scope.userInfo = result.data[0]
          })
        }
      })
    }
  }
  $scope.onAddBtn = function () {
    let addLayerIndex = layer.open({
      type: 1,
      title: '编辑账户',
      closeBtn: false,
      shift: 2,
      area: ['400px', '500px'],
      shadeClose: true,
      // btn: ['新增', '取消'],
      // btnAlign: 'c',
      content: $('#add-main'),
      success: function (layero, index) {
        layui.use(['layer', 'form'], function () {
          var layer = layui.layer,
            form = layui.form
          form.val('editUserInfoForm', {
            // class="layui-form" 所在元素属性 lay-filter="" 对应的值
            mobileNumber: $scope.websitePhone, // "name": "value"
            userAddress: $scope.userInfo.userAddress || '',
            userHobby: $scope.userInfo.userHobby || '',
            userAvataPath: $scope.userInfo.userAvataPath || ''
          })

          //提交监听事件
          form.on('submit(save)', function (data) {
            params = data.field
            console.log(JSON.stringify(params))
            submitEditUserInfo(params)
            return false
          })

          var obj = document.getElementById('closeBtn')
          obj.addEventListener('click', function cancel() {
            layer.close(addLayerIndex)
          })
          //普通图片上传
          let uploadInst = layui.upload.render({
            elem: '#test',
            url: baseUrl + '/upload/imgUpload',
            accept: 'images',
            auto: false,
            size: 50000,
            choose: function (obj) {
              var that = this
              obj.preview(function (index, file, result) {
                // console.log(file);
                that.data = {
                  FileName: file.name,
                  FileLength: file.size
                }
                obj.upload(index, file)
              })
            },
            before: function (obj) {
              obj.preview(function (index, file, result) {
                $('#demo').html(
                  '<div class="upload_div" id="upload_' +
                    index +
                    '"><img src="' +
                    result +
                    '" alt="' +
                    file.name +
                    '" class="layui-upload-img"></div>'
                )
              })
            },
            done: function (res) {
              //上传成功
              if (res.code == 10000) {
                layer.msg('上传成功')
              }
              var demoText = $('#demoText')
              demoText.html('<span style="color: #4cae4c;">上传成功</span>')

              console.log(res.data)
              $scope.userInfo.userAvataPath = res.data
            },
            error: function () {
              //演示失败状态，并实现重传
              var demoText = $('#demoText')
              demoText.html(
                '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
              )
              demoText.find('.demo-reload').on('click', function () {
                uploadInst.upload()
              })
            }
          })
        })

        //提交
        function submitEditUserInfo(params) {
          var load = layui.layer.load(3)
          $.ajax({
            type: 'POST',
            url: baseUrl + '/userInfo/setuserInfoByMobleNumber',
            contentType: 'application/json',
            data: JSON.stringify({
              ...$scope.userInfo,
              ...params
            }),
            success: function (jsonResult) {
              layer.close(load)
              if (jsonResult.code == 10000) {
                layer.msg(
                  '提交成功!!!',
                  {
                    icon: 6,
                    time: 500
                  },
                  function () {
                    GetUserInfo()
                    layer.close(addLayerIndex)
                  }
                )
              } else {
                layer.msg(jsonResult.Msg || '提交申请失败')
              }
            },
            error: function (data) {
              layer.close(load)
            }
          })
        }
      },
      yes: function () {}
    })
  }
})
jkApp.controller('accountCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  getSysMenu()
  // 报装菜单
  $scope.SysMenuList = []
  function getSysMenu() {
    $.ajax({
      url: baseUrl + '/SysMenu/list?isShow=1',
      success: function (res) {
        if (res.code == 10000) {
          $scope.$apply(function () {
            $scope.SysMenuList = res.data.rows
          })
        }
      }
    })
  }
  systeminfo()
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
  layui.use(['form', 'layedit', 'laydate', 'table'], function () {
    var form = layui.form
    var table = layui.table

    var layer = layui.layer
    var layedit = layui.layedit
    var laydate = layui.laydate
    var table_name = table.render({
      elem: '#suypowerGrid',
      id: 'testReload',
      height: 462,
      url: baseUrl_API_WeiXin + 'payUser/selectByOpenId', //数据接口
      // page: true, //开启分页
      request: {
        pageName: 'page', //页码的参数名称，默认：page
        limitName: 'rows' //每页数据量的参数名，默认：limit
      },
      where: {
        openId: getlocalStorage('openId')
      },
      parseData: function (res) {
        //res 即为原始返回的数据
        return {
          code: res.code == 1 ? 0 : '', //解析接口状态
          msg: res.info, //解析提示文本
          count: res.total, //解析数据长度
          data: res.userList //解析数据列表
        }
      },
      cols: [
        [
          //表头
          { field: 'userInfoCode', title: '户号', align: 'center' },
          { field: 'userName', title: '户名', align: 'center' },
          { field: '', title: '操作', align: 'center', toolbar: '#barDemo' }
        ]
      ]
    })
    table.on('tool(test)', function (obj) {
      var data = obj.data
      if ('update' == obj.event) {
        console.log('222')
        changeCons(data.userInfoCode)
      }
    })

    //点击查询
    $scope.searchQuery = function () {
      var USERNAME = $('.layui-input-userName').val()
      var TELPHONE = $('.layui-input-phone').val()
      table.reload('testReload', {
        url: baseUrl_API_WeiXin + 'payUser/selectByOpenId', //数据接口
        // ,methods:"post"
        request: {
          pageName: 'page', //页码的参数名称，默认：page
          limitName: 'rows' //每页数据量的参数名，默认：limit
        },
        where: {
          openId: getlocalStorage('openId')
        },
        parseData: function (res) {
          //res 即为原始返回的数据
          return {
            code: res.code == 1 ? 0 : '', //解析接口状态
            msg: res.info, //解析提示文本
            count: res.total, //解析数据长度
            data: res.userList //解析数据列表
          }
        },
        page: {
          curr: 1
        }
      })
    }
  })
  // 切换户号
  function changeCons(lastOperatedTable) {
    if (lastOperatedTable) {
      $.ajax({
        type: 'GET',
        url:
          baseUrl_API_WeiXin +
          'payUser/updateLastByOpenId?openId=' +
          getlocalStorage('openId') +
          '&lastOperatedTable=' +
          lastOperatedTable,
        success: function (res) {
          if (res.code == 10000) {
            layer.msg(res.message || '已切换户号')
          }
        }
      })
    }
  }
})
jkApp.controller('waterPriceQueryCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  getSysMenu()
  // 报装菜单
  $scope.SysMenuList = []
  function getSysMenu() {
    $.ajax({
      url: baseUrl + '/SysMenu/list?isShow=1',
      success: function (res) {
        if (res.code == 10000) {
          $scope.$apply(function () {
            $scope.SysMenuList = res.data.rows
          })
        }
      }
    })
  }
  systeminfo()
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
  $scope.myConsNo = ''
  getWXConsList()
  // 获取户号列表和上传操作户号
  function getWXConsList() {
    if (getlocalStorage('openId')) {
      $.ajax({
        type: 'GET',
        url:
          baseUrl_API_WeiXin +
          'payUser/selectByOpenId?openId=' +
          getlocalStorage('openId'),
        success: function (res) {
          if (res.code == 1) {
            $scope.$apply(function () {
              $scope.lastOperatedTable = res.msg.lastOperatedTable
              $scope.myConsNo = res.msg.lastOperatedTable
              $scope.consList = res.userList
              tableInit()
            })
          }
        }
      })
    }
  }
  function tableInit() {
    layui.use(['form', 'layedit', 'laydate', 'table'], function () {
      var form = layui.form
      $('#consSelect').val($scope.myConsNo)
      var table = layui.table

      var layer = layui.layer
      var layedit = layui.layedit
      var laydate = layui.laydate
      var table_name = table.render({
        elem: '#suypowerGrid',
        id: 'testReload',
        height: 462,
        url: baseUrl_API_WeiXin + 'netUserInfoController/getWaterRate', //数据接口
        // page: true, //开启分页
        request: {
          pageName: 'page', //页码的参数名称，默认：page
          limitName: 'rows' //每页数据量的参数名，默认：limit
        },
        where: {
          pagination: JSON.stringify({
            page: 1,
            rows: 200,
            sidx: 'RCVBL_YM',
            sord: 'desc'
          }),
          userInfoCode: $scope.lastOperatedTable
        },
        parseData: function (res) {
          //res 即为原始返回的数据
          return {
            code: res.code == 200 ? 0 : '', //解析接口状态
            msg: res.info, //解析提示文本
            count: res.total, //解析数据长度
            data: res.rows //解析数据列表
          }
        },
        cols: [
          [
            //表头
            { field: 'RCVBL_YM', title: '账单月份', align: 'center' },
            { field: 'LAST_MR_NUM', title: '上期读数', align: 'center' },
            { field: 'THIS_READ', title: '本期读数', align: 'center' },
            { field: 'T_PQ', title: '水量', align: 'center' },
            { field: 'RCVBL_AMT', title: '水费', align: 'center' },
            {
              field: 'status',
              title: '缴费情况',
              align: 'center',
              templet: function (d) {
                if (d.status == 1) {
                  return '已缴清'
                } else {
                  return '未缴清'
                }
              }
            }
            // , { title: '照片', align: "center", toolbar: '#barDemo' }
          ]
        ],

        done: function (res, curr, count) {
          //如果是异步请求数据方式，res即为你接口返回的信息。
          console.log(res)
          //得到当前页码
          console.log(curr)
        }
      })
      //监听工具条
      table.on('tool(layuiTable)', function (obj) {
        var data = obj.data
        if (obj.event === 'edit') {
          console.log(table_name.config.page.pages)
        } else if (obj.event === 'del') {
          //代码
        }
      })
      //监听单元格事件
      // table.on('tool(test)', function(obj) {
      //     var data = obj.data;
      //     if (obj.event === 'openImage') {
      //         console.log(data);
      //         var imageList = data.IMAGEURL;
      //         imageList = imageList.split(',')
      //         var html = ""
      //         if (imageList.length > 0) {
      //             html = '<div style="display:flex;min-width:200px;" >'
      //             for (var index = 0; index < imageList.length; index++) {

      //                 html += '<img src="' + imageList[index] + '"  class="layui-upload-img">'
      //             }
      //             html += '</div>'
      //         }
      //         layer.open({
      //             title: '照片',
      //             type: 1,
      //             content: html
      //         });
      //     }
      // });

      //点击查询
      $scope.searchQuery = function () {
        var consNo = $("input[name='consNo']").val()
        table.reload('testReload', {
          url: baseUrl_API_WeiXin + 'netUserInfoController/getWaterRate',
          // ,methods:"post"
          request: {
            pageName: 'page', //页码的参数名称，默认：page
            limitName: 'rows' //每页数据量的参数名，默认：limit
          },
          where: {
            pagination: JSON.stringify({
              page: 1,
              rows: 100,
              sidx: 'RCVBL_YM',
              sord: 'desc'
            }),
            userInfoCode: $scope.myConsNo || $scope.lastOperatedTable
          },
          parseData: function (res) {
            //res 即为原始返回的数据
            return {
              code: res.code == 200 ? 0 : '', //解析接口状态
              msg: res.info, //解析提示文本
              count: res.total, //解析数据长度
              data: res.rows //解析数据列表
            }
          }
          // page: {
          //     curr: 1
          // }
        })
        console.log(table_name)
      }
    })
  }
})
jkApp.controller('paymentQueryCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  $scope.myConsNo = ''
  getSysMenu()
  // 报装菜单
  $scope.SysMenuList = []
  function getSysMenu() {
    $.ajax({
      url: baseUrl + '/SysMenu/list?isShow=1',
      success: function (res) {
        if (res.code == 10000) {
          $scope.$apply(function () {
            $scope.SysMenuList = res.data.rows
          })
        }
      }
    })
  }
  systeminfo()
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
  getWXConsList()
  // 获取户号列表和上传操作户号
  function getWXConsList() {
    if (getlocalStorage('openId')) {
      $.ajax({
        type: 'GET',
        url:
          baseUrl_API_WeiXin +
          'payUser/selectByOpenId?openId=' +
          getlocalStorage('openId'),
        success: function (res) {
          if (res.code == 1) {
            $scope.$apply(function () {
              $scope.lastOperatedTable = res.msg.lastOperatedTable
              $scope.myConsNo = res.msg.lastOperatedTable
              $scope.consList = res.userList
              tableInit()
            })
          }
        }
      })
    }
  }
  function tableInit() {
    layui.use(['form', 'layedit', 'laydate', 'table'], function () {
      var form = layui.form
      $('#consSelect').val($scope.myConsNo)
      var table = layui.table

      var layer = layui.layer
      var layedit = layui.layedit
      var laydate = layui.laydate
      var table_name = table.render({
        elem: '#my-table',
        id: 'testReload',
        height: 462,
        url: baseUrl_API_WeiXin + 'netUserInfoController/getPayRecord', //数据接口
        // page: true, //开启分页
        request: {
          pageName: 'page', //页码的参数名称，默认：page
          limitName: 'rows' //每页数据量的参数名，默认：limit
        },
        where: {
          pagination: JSON.stringify({
            page: 1,
            rows: 200,
            sidx: '',
            sord: 'desc'
          }),
          queryJson: JSON.stringify({ UserInfoCode: $scope.lastOperatedTable })
        },
        parseData: function (res) {
          //res 即为原始返回的数据
          return {
            code: res.code == 0 ? 0 : '', //解析接口状态
            msg: res.meg, //解析提示文本
            count: res.data.total, //解析数据长度
            data: res.data.rows //解析数据列表
          }
        },
        cols: [
          [
            //表头
            { field: 'charge_DATE', title: '缴费日期', align: 'center' },
            { field: 'rcv_AMT', title: '缴费金额', align: 'center' },
            { field: 'pay_MODE', title: '缴费方式', align: 'center' }
          ]
        ]
      })

      //点击查询
      $scope.searchQuery = function () {
        var USERNAME = $('.layui-input-userName').val()
        var TELPHONE = $('.layui-input-phone').val()
        table.reload('testReload', {
          url: baseUrl_API_WeiXin + 'netUserInfoController/getPayRecord', //数据接口
          // ,methods:"post"
          request: {
            pageName: 'page', //页码的参数名称，默认：page
            limitName: 'rows' //每页数据量的参数名，默认：limit
          },
          where: {
            pagination: JSON.stringify({
              page: 1,
              rows: 200,
              sidx: '',
              sord: 'desc'
            }),
            queryJson: JSON.stringify({
              UserInfoCode: $scope.myConsNo || $scope.lastOperatedTable
            })
          },
          parseData: function (res) {
            //res 即为原始返回的数据
            return {
              code: res.code == 200 ? 0 : '', //解析接口状态
              msg: res.info, //解析提示文本
              count: res.data.total, //解析数据长度
              data: res.data.rows //解析数据列表
            }
          }
          // page: {
          //     curr: 1
          // }
        })
      }
    })
  }
})
// 关联微信
jkApp.controller('bindWeChatCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  getSysMenu()
  // 报装菜单
  $scope.SysMenuList = []
  function getSysMenu() {
    $.ajax({
      url: baseUrl + '/SysMenu/list?isShow=1',
      success: function (res) {
        if (res.code == 10000) {
          $scope.$apply(function () {
            $scope.SysMenuList = res.data.rows
          })
        }
      }
    })
  }
  systeminfo()
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
})
// 个人报装申请
jkApp.controller(
  'peopleNewInstallLCCtrl',
  function ($scope, $location, $routeParams, $sce) {
    $scope.imageUrl = imageUrl
    $scope.fileMsgList = []
    var IMAGEURL = []
    getSysMenu()
    // 报装菜单
    $scope.SysMenuList = []
    function getSysMenu() {
      $.ajax({
        url: baseUrl + '/SysMenu/list?isShow=1',
        success: function (res) {
          if (res.code == 10000) {
            $scope.$apply(function () {
              $scope.SysMenuList = res.data.rows
            })
          }
        }
      })
    }
    systeminfo()
    //获取基本信息
    function systeminfo() {
      $.ajax({
        url: baseUrl + '/systeminfo/queryAll',
        success: function (result) {
          $scope.$apply(function () {
            $scope.info = result.data[0]
          })
        }
      })
    }
    layui.form.render()
    //监听提交
    layui.form.on('submit(formDemo)', function (data) {
      // layer.msg(JSON.stringify(data.field));
      var params = data.field
      let InsCode = getNowTime()
      var load = layer.load(3)
      $.ajax({
        type: 'POST',
        url: baseUrl_API_BZLC + '/Bzms/WeChat/Apply/Apply',
        contentType: 'application/json',
        dataType: 'JSON',
        data: JSON.stringify({
          SystemMark: 'XtBpm',
          AccessToken: getlocalStorage('openId'), //用户openId
          WeChatNickName: '微信用户', //用户昵称
          Data: {
            ApplyOpenId: getlocalStorage('openId'),
            ProjectName: params.USERNAME,
            ProjectAddr: params.USERADDRESS,
            UserType: params.LawGuarantee,
            UserName: params.USERNAME, //联系人
            UserMobile: params.TELPHONE, //报装联系电话
            UserIdcard: params.CARDNO,
            VerifyStatus: 0,
            ProjectType: '1',
            ApplyType: '1',
            FilesIdList: IMAGEURL
          }
        }),
        success: function (jsonResult) {
          layer.close(load)
          if (jsonResult.Result == 1) {
            layer.msg(
              '提交成功!!!',
              {
                icon: 6,
                time: 2000
              },
              function () {
                IMAGEURL = []
                $('#uesrBaozhang')[0].reset()
                $scope.fileMsgList.forEach((item, index) => {
                  $('#demo' + index).html('')
                })
                layui.form.render()
              }
            )
          } else {
            layer.msg(jsonResult.Msg || '提交申请失败')
          }
        },
        error: function (data) {
          layer.close(load)
          alert('请求失败')
        }
      })
      return false
    })
    //点击重置
    $scope.reset = function () {
      $('#uesrBaozhang')[0].reset()
      $('#demo2').html('')
      layui.form.render()
    }
    // getFileMsg()
    function getFileMsg() {
      $.ajax({
        type: 'POST',
        url:
          baseUrl_API_BZLC +
          '/Wfms/Overt/WeChart/PublicAccount/Query/Node/Node',
        contentType: 'application/json',
        data: JSON.stringify({
          SystemMark: 'XtWeChart',
          WeChatOpenId: getlocalStorage('openId'), //用户openId
          WeChatNickName: '微信用户', //用户昵称
          Entity: {
            FlowId: liuchengMes.peopleNewInstallLC.FlowId,
            NodeId: liuchengMes.peopleNewInstallLC.NodeId
          }
        }),
        dataType: 'JSON',
        success: function (res) {
          $scope.$apply(function () {
            if (res.Result == 1) {
              res.Data.Node.FileRules.forEach((item) => {
                if (item.FileRuleName.indexOf('(') <= -1) {
                  item.FileRuleNameA = item.FileRuleName
                  item.FileRuleText = ''
                } else {
                  item.FileRuleNameA = item.FileRuleName.split('(')[0]
                  item.FileRuleText = '(' + item.FileRuleName.split('(')[1]
                }
                $scope.fileMsgList.push(item)
              })
              $scope.fileMsgList.forEach((item, uploadIndex) => {
                uploadInit(item, uploadIndex)
              })
            }
          })
        }
      })
    }
    function uploadInit(item, uploadIndex) {
      layui.use(['form', 'upload'], function () {
        var form = layui.form
        var $ = layui.jquery,
          upload = layui.upload
        let uploadInst = upload.render({
          elem: '#test' + uploadIndex,
          url:
            baseUrl_API_BZLC +
            '/Wfms/Overt/WeChart/PublicAccount/Handle/File/UploadNoInsId',
          accept: 'file',
          auto: false,
          size: 50000,
          choose: function (obj) {
            var that = this
            obj.preview(function (index, file, result) {
              // console.log(file);
              that.data = {
                SystemMark: 'XtWeChart',
                WeChatOpenId: getlocalStorage('openId'),
                NodeId: liuchengMes.userNewInstallLC.NodeId,
                FileRuleId: item.FileRuleId,
                FileName: file.name,
                FileLength: file.size
              }
              obj.upload(index, file)
            })
          },
          before: function (obj) {
            obj.preview(function (index, file, result) {
              console.log(file)
            })
          },
          done: function (res, index) {
            console.log(res)
            //上传成功
            if (res.Result == 1) {
              layer.msg('上传成功')
              if (isImage(res.Data.FileName)) {
                $('#demo' + uploadIndex).append(
                  '<div class="upload_div" id="upload_' +
                    index +
                    '"><img src="' +
                    baseUrl_API_BZLC +
                    res.Data.FilePath +
                    '" alt="' +
                    res.Data.FileName +
                    '" class="layui-upload-img"></div>'
                )
              }
              if (!isImage(res.Data.FileName)) {
                $('#demo' + uploadIndex).append(
                  '<div class="upload_div" id="upload_' +
                    index +
                    '"><a href="' +
                    baseUrl_API_BZLC +
                    res.Data.FilePath +
                    '" target="_blank" class="layui-upload-img">' +
                    res.Data.FileName +
                    '</a></div>'
                )
              }
            }
            // <i class="layui-icon layui-icon-close-fill" style="cursor:pointer" onclick="deleteFile('+index+')"/>
            var demoText = $('#demoText')
            demoText.html('<span style="color: #4cae4c;">上传成功</span>')

            var fileupload = $('.image')
            fileupload.attr('value', res.Data.FilePath)
            IMAGEURL.push(res.Data.FileId)
            console.log(fileupload.attr('value'))
            console.log(IMAGEURL)
          },
          error: function () {
            //演示失败状态，并实现重传
            var demoText = $('#demoText')
            demoText.html(
              '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
            )
            demoText.find('.demo-reload').on('click', function () {
              uploadInst.upload()
            })
          }
        })

        //监听提交
        form.on('submit(formDemo)', function (data) {
          // layer.msg(JSON.stringify(data.field));
          var params = data.field
          let InsCode = getNowTime()
          var load = layer.load(3)
          $.ajax({
            type: 'POST',
            url:
              baseUrl_API_BZLC +
              '/Wfms/Overt/WeChart/PublicAccount/Handle/Submit/QuickStart',
            contentType: 'application/json',
            dataType: 'JSON',
            data: JSON.stringify({
              SystemMark: 'XtWeChart',
              WeChatOpenId: getlocalStorage('openId'), //用户openId
              WeChatNickName: '微信用户', //用户昵称
              Entity: {
                FlowId: liuchengMes.peopleNewInstallLC.FlowId,
                NodeId: liuchengMes.peopleNewInstallLC.NodeId,
                Datas: [
                  {
                    DataCode: 'InsCode',
                    DataGroup: 0,
                    DataValue: InsCode //项目ID
                  },
                  {
                    DataCode: 'ProjectType',
                    DataGroup: 0,
                    DataValue: liuchengMes.peopleNewInstallLC.ProjectType //项目类型
                  },
                  {
                    DataCode: 'ProjectOrgNo',
                    DataGroup: 0,
                    DataValue: $scope.companyNo //单位ID
                  },
                  {
                    DataCode: 'UserAddress',
                    DataGroup: 1,
                    DataValue: params.USERADDRESS //地址
                  },
                  {
                    DataCode: 'ProjectAddress',
                    DataGroup: 0,
                    DataValue: params.USERADDRESS //项目地址
                  },
                  {
                    DataCode: 'UserName',
                    DataGroup: 1,
                    DataValue: params.USERNAME //联系人
                  },
                  {
                    DataCode: 'UserLiaison',
                    DataGroup: 0,
                    DataValue: params.USERNAME //用户联系人
                  },
                  {
                    DataCode: 'ProjectName',
                    DataGroup: 0,
                    DataValue: params.USERNAME //项目联系人
                  },
                  {
                    DataCode: 'UserLiaisonContact',
                    DataGroup: 0,
                    DataValue: params.TELPHONE //用户联系电话
                  },
                  {
                    DataCode: 'UserContactPerson',
                    DataGroup: 1,
                    DataValue: params.USERNAME //报装用户名
                  },
                  {
                    DataCode: 'UserContact',
                    DataGroup: 1,
                    DataValue: params.TELPHONE //报装联系电话
                  },
                  {
                    DataCode: 'UserIdCard',
                    DataGroup: 1,
                    DataValue: params.CARDNO //用户身份证号
                  },
                  {
                    DataCode: 'UserLiaisonIdCard',
                    DataGroup: 0,
                    DataValue: params.CARDNO //用户联络人身份证号
                  },
                  {
                    DataCode: 'ProjectDetail',
                    DataGroup: 0,
                    DataValue: params.ProjectDetail //备注
                  },
                  {
                    DataCode: 'UserTaxId',
                    DataGroup: 0,
                    DataValue: params.CARDNO //用户纳税人识别号
                  }
                ],
                Files: IMAGEURL
              }
            }),
            success: function (jsonResult) {
              layer.close(load)
              if (jsonResult.Result == 1) {
                layer.msg(
                  '提交成功!!!',
                  {
                    icon: 6,
                    time: 2000
                  },
                  function () {
                    IMAGEURL = []
                    $('#uesrBaozhang')[0].reset()
                    $scope.fileMsgList.forEach((item, index) => {
                      $('#demo' + index).html('')
                    })
                    layui.form.render()
                  }
                )
              } else {
                layer.msg(jsonResult.Msg || '提交申请失败')
              }
            },
            error: function (data) {
              layer.close(load)
              alert('请求失败')
            }
          })
          return false
        })

        //点击重置
        $scope.reset = function () {
          $('#uesrBaozhang')[0].reset()
          $('#demo2').html('')
          layui.form.render()
        }
      })
    }
    getWXConsList()
    // 获取户号列表和上次操作户号
    function getWXConsList() {
      if (getlocalStorage('openId')) {
        $.ajax({
          type: 'GET',
          url:
            baseUrl_API_WeiXin +
            'payUser/selectByOpenId?openId=' +
            getlocalStorage('openId'),
          success: function (res) {
            if (res.code == 1) {
              $scope.$apply(function () {
                $scope.lastOperatedTable = res.msg.lastOperatedTable
                getConsDetail()
                $scope.consList = res.userList
              })
            }
          }
        })
      }
    }
    // 获取户号信息
    function getConsDetail() {
      if ($scope.lastOperatedTable) {
        $.ajax({
          type: 'GET',
          url:
            baseUrl_API_WeiXin +
            'netUserInfoController/findAllUser?userInfoCode=' +
            $scope.lastOperatedTable,
          success: function (res) {
            if (res.code == 1) {
              $scope.$apply(function () {
                $scope.companyNo = res.org_no
              })
            }
          }
        })
      }
    }
  }
)
// 企事业报装申请
jkApp.controller(
  'companyNewInstallLCCtrl',
  function ($scope, $location, $routeParams, $sce) {
    $scope.imageUrl = imageUrl
    getSysMenu()
    // 报装菜单
    $scope.SysMenuList = []
    function getSysMenu() {
      $.ajax({
        url: baseUrl + '/SysMenu/list?isShow=1',
        success: function (res) {
          if (res.code == 10000) {
            $scope.$apply(function () {
              $scope.SysMenuList = res.data.rows
            })
          }
        }
      })
    }
    systeminfo()
    //获取基本信息
    function systeminfo() {
      $.ajax({
        url: baseUrl + '/systeminfo/queryAll',
        success: function (result) {
          $scope.$apply(function () {
            $scope.info = result.data[0]
          })
        }
      })
    }
    $scope.fileMsgList = []
    var IMAGEURL = []
    getFileMsg()
    function getFileMsg() {
      $.ajax({
        type: 'POST',
        url:
          baseUrl_API_BZLC +
          '/Wfms/Overt/WeChart/PublicAccount/Query/Node/Node',
        contentType: 'application/json',
        data: JSON.stringify({
          SystemMark: 'XtWeChart',
          WeChatOpenId: getlocalStorage('openId'), //用户openId
          WeChatNickName: '微信用户', //用户昵称
          Entity: {
            FlowId: liuchengMes.userNewInstallLC.FlowId,
            NodeId: liuchengMes.userNewInstallLC.NodeId
          }
        }),
        dataType: 'JSON',
        success: function (res) {
          $scope.$apply(function () {
            if (res.Result == 1) {
              res.Data.Node.FileRules.forEach((item) => {
                if (item.FileRuleName.indexOf('(') <= -1) {
                  item.FileRuleNameA = item.FileRuleName
                  item.FileRuleText = ''
                } else {
                  item.FileRuleNameA = item.FileRuleName.split('(')[0]
                  item.FileRuleText = '(' + item.FileRuleName.split('(')[1]
                }
                $scope.fileMsgList.push(item)
              })
              $scope.fileMsgList.forEach((item, uploadIndex) => {
                uploadInit(item, uploadIndex)
              })
            }
          })
        }
      })
    }
    function uploadInit(item, uploadIndex) {
      layui.use(['form', 'upload'], function () {
        var form = layui.form
        form.render()
        var $ = layui.jquery,
          upload = layui.upload
        //普通图片上传
        let uploadInst = upload.render({
          elem: '#test' + uploadIndex,
          url:
            baseUrl_API_BZLC +
            '/Wfms/Overt/WeChart/PublicAccount/Handle/File/UploadNoInsId',
          accept: 'file',
          auto: false,
          size: 50000,
          choose: function (obj) {
            var that = this
            obj.preview(function (index, file, result) {
              // console.log(file);
              that.data = {
                SystemMark: 'XtWeChart',
                WeChatOpenId: getlocalStorage('openId'), //用户openId
                NodeId: liuchengMes.companyNewInstallLC.NodeId,
                FileRuleId: item.FileRuleId,
                FileName: file.name,
                FileLength: file.size
              }
              obj.upload(index, file)
            })
          },
          before: function (obj) {},
          done: function (res, index) {
            //上传成功
            if (res.Result == 1) {
              layer.msg('上传成功')
              if (isImage(res.Data.FileName)) {
                $('#demo' + uploadIndex).append(
                  '<div class="upload_div" id="upload_' +
                    index +
                    '"><img src="' +
                    baseUrl_API_BZLC +
                    res.Data.FilePath +
                    '" alt="' +
                    res.Data.FileName +
                    '" class="layui-upload-img"></div>'
                )
              }
              if (!isImage(res.Data.FileName)) {
                $('#demo' + uploadIndex).append(
                  '<div class="upload_div" id="upload_' +
                    index +
                    '"><a href="' +
                    baseUrl_API_BZLC +
                    res.Data.FilePath +
                    '" target="_blank" class="layui-upload-img">' +
                    res.Data.FileName +
                    '</a></div>'
                )
              }
            }
            var demoText = $('#demoText')
            demoText.html('<span style="color: #4cae4c;">上传成功</span>')

            var fileupload = $('.image')
            fileupload.attr('value', res.Data.FilePath)
            IMAGEURL.push(res.Data.FileId)
            console.log(fileupload.attr('value'))
            console.log(IMAGEURL)
          },
          error: function () {
            //演示失败状态，并实现重传
            var demoText = $('#demoText')
            demoText.html(
              '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
            )
            demoText.find('.demo-reload').on('click', function () {
              uploadInst.upload()
            })
          }
        })

        //监听提交
        form.on('submit(formDemo)', function (data) {
          // layer.msg(JSON.stringify(data.field));
          var params = data.field
          let InsCode = getNowTime()
          var load = layer.load(3)
          $.ajax({
            type: 'POST',
            url:
              baseUrl_API_BZLC +
              '/Wfms/Overt/WeChart/PublicAccount/Handle/Submit/QuickStart',
            contentType: 'application/json',
            dataType: 'JSON',
            data: JSON.stringify({
              SystemMark: 'XtWeChart',
              WeChatOpenId: getlocalStorage('openId'), //用户openId
              WeChatNickName: '微信用户', //用户昵称
              Entity: {
                FlowId: liuchengMes.companyNewInstallLC.FlowId,
                NodeId: liuchengMes.companyNewInstallLC.NodeId,
                Datas: [
                  {
                    DataCode: 'InsCode',
                    DataGroup: 0,
                    DataValue: InsCode //项目ID
                  },
                  {
                    DataCode: 'ProjectType',
                    DataGroup: 0,
                    DataValue: liuchengMes.companyNewInstallLC.ProjectType //项目类型
                  },
                  {
                    DataCode: 'ProjectOrgNo',
                    DataGroup: 0,
                    DataValue: $scope.companyNo //单位ID
                  },
                  {
                    DataCode: 'UserAddress',
                    DataGroup: 1,
                    DataValue: params.site //地址
                  },
                  {
                    DataCode: 'ProjectAddress',
                    DataGroup: 0,
                    DataValue: params.site //项目地址
                  },
                  {
                    DataCode: 'UserName',
                    DataGroup: 1,
                    DataValue: params.companyName //用户名称
                  },
                  {
                    DataCode: 'UserLegalPerson',
                    DataGroup: 0,
                    DataValue: params.userLegalPerson //用户法人
                  },
                  {
                    DataCode: 'UserIdentityType',
                    DataGroup: 0,
                    DataValue: params.userIdentityTypeId //用户身份类型ID
                  },
                  {
                    DataCode: 'UserLiaisonIdCard',
                    DataGroup: 0,
                    DataValue: params.userLiaisonIdCard //身份证号
                  },
                  {
                    DataCode: 'UserLiaison',
                    DataGroup: 0,
                    DataValue: params.contacts //用户联系人
                  },
                  {
                    DataCode: 'ProjectName',
                    DataGroup: 0,
                    DataValue: params.companyName //项目名称
                  },
                  {
                    DataCode: 'UserLiaisonContact',
                    DataGroup: 0,
                    DataValue: params.phone //企业联系电话
                  },
                  {
                    DataCode: 'UserTaxId',
                    DataGroup: 0,
                    DataValue: params.number //用户纳税人识别号
                  }
                ],
                Files: IMAGEURL
              }
            }),
            success: function (jsonResult) {
              layer.close(load)
              if (jsonResult.Result == 1) {
                layer.msg(
                  '提交成功!!!',
                  {
                    icon: 6,
                    time: 2000
                  },
                  function () {
                    IMAGEURL = []
                    $('#uesrBaozhang')[0].reset()
                    $scope.fileMsgList.forEach((item, index) => {
                      $('#demo' + index).html('')
                    })
                    layui.form.render()
                  }
                )
              } else {
                layer.msg(jsonResult.Msg || '提交申请失败')
              }
            },
            error: function (data) {
              layer.close(load)
              alert('请求失败')
            }
          })
          return false
        })

        //点击重置
        $scope.reset = function () {
          $('#uesrBaozhang')[0].reset()
          $('#demo2').html('')
          layui.form.render()
        }
      })
    }
    getWXConsList()
    // 获取户号列表和上次操作户号
    function getWXConsList() {
      if (getlocalStorage('openId')) {
        $.ajax({
          type: 'GET',
          url:
            baseUrl_API_WeiXin +
            'payUser/selectByOpenId?openId=' +
            getlocalStorage('openId'),
          success: function (res) {
            if (res.code == 1) {
              $scope.$apply(function () {
                $scope.lastOperatedTable = res.msg.lastOperatedTable
                getConsDetail()
                $scope.consList = res.userList
              })
            }
          }
        })
      }
    }
    // 获取户号信息
    function getConsDetail() {
      if ($scope.lastOperatedTable) {
        $.ajax({
          type: 'GET',
          url:
            baseUrl_API_WeiXin +
            'netUserInfoController/findAllUser?userInfoCode=' +
            $scope.lastOperatedTable,
          success: function (res) {
            if (res.code == 1) {
              $scope.$apply(function () {
                $scope.companyNo = res.org_no
              })
            }
          }
        })
      }
    }
  }
)
// 更名/过户
jkApp.controller(
  'chooseUserNameLCCtrl',
  function ($scope, $location, $routeParams, $sce) {
    $scope.imageUrl = imageUrl
    getSysMenu()
    // 报装菜单
    $scope.SysMenuList = []
    function getSysMenu() {
      $.ajax({
        url: baseUrl + '/SysMenu/list?isShow=1',
        success: function (res) {
          if (res.code == 10000) {
            $scope.$apply(function () {
              $scope.SysMenuList = res.data.rows
            })
          }
        }
      })
    }
    systeminfo()
    //获取基本信息
    function systeminfo() {
      $.ajax({
        url: baseUrl + '/systeminfo/queryAll',
        success: function (result) {
          $scope.$apply(function () {
            $scope.info = result.data[0]
          })
        }
      })
    }
    $scope.fileMsgList = []
    var IMAGEURL = []
    getFileMsg()
    function getFileMsg() {
      $.ajax({
        type: 'POST',
        url:
          baseUrl_API_BZLC +
          '/Wfms/Overt/WeChart/PublicAccount/Query/Node/Node',
        contentType: 'application/json',
        data: JSON.stringify({
          SystemMark: 'XtWeChart',
          WeChatOpenId: getlocalStorage('openId'), //用户openId
          WeChatNickName: '微信用户', //用户昵称
          Entity: {
            FlowId: liuchengMes.chooseUserNameLC.FlowId,
            NodeId: liuchengMes.chooseUserNameLC.NodeId
          }
        }),
        dataType: 'JSON',
        success: function (res) {
          $scope.$apply(function () {
            if (res.Result == 1) {
              res.Data.Node.FileRules.forEach((item) => {
                if (item.FileRuleName.indexOf('(') <= -1) {
                  item.FileRuleNameA = item.FileRuleName
                  item.FileRuleText = ''
                } else {
                  item.FileRuleNameA = item.FileRuleName.split('(')[0]
                  item.FileRuleText = '(' + item.FileRuleName.split('(')[1]
                }
                $scope.fileMsgList.push(item)
              })
              $scope.fileMsgList.forEach((item, uploadIndex) => {
                uploadInit(item, uploadIndex)
              })
            }
          })
        }
      })
    }
    function uploadInit(item, uploadIndex) {
      layui.use(['form', 'upload'], function () {
        var form = layui.form
        form.render()
        var $ = layui.jquery,
          upload = layui.upload
        //普通图片上传
        let uploadInst = upload.render({
          elem: '#test' + uploadIndex,
          url:
            baseUrl_API_BZLC +
            '/Wfms/Overt/WeChart/PublicAccount/Handle/File/UploadNoInsId',
          accept: 'file',
          auto: false,
          size: 50000,
          choose: function (obj) {
            var that = this
            obj.preview(function (index, file, result) {
              // console.log(file);
              that.data = {
                SystemMark: 'XtWeChart',
                WeChatOpenId: getlocalStorage('openId'), //用户openId
                NodeId: liuchengMes.chooseUserNameLC.NodeId,
                FileRuleId: item.FileRuleId,
                FileName: file.name,
                FileLength: file.size
              }
              obj.upload(index, file)
            })
          },
          before: function (obj) {},
          done: function (res, index) {
            //上传成功
            if (res.Result == 1) {
              layer.msg('上传成功')
              if (isImage(res.Data.FileName)) {
                $('#demo' + uploadIndex).append(
                  '<div class="upload_div" id="upload_' +
                    index +
                    '"><img src="' +
                    baseUrl_API_BZLC +
                    res.Data.FilePath +
                    '" alt="' +
                    res.Data.FileName +
                    '" class="layui-upload-img"></div>'
                )
              }
              if (!isImage(res.Data.FileName)) {
                $('#demo' + uploadIndex).append(
                  '<div class="upload_div" id="upload_' +
                    index +
                    '"><a href="' +
                    baseUrl_API_BZLC +
                    res.Data.FilePath +
                    '" target="_blank" class="layui-upload-img">' +
                    res.Data.FileName +
                    '</a></div>'
                )
              }
            }
            var demoText = $('#demoText')
            demoText.html('<span style="color: #4cae4c;">上传成功</span>')

            var fileupload = $('.image')
            fileupload.attr('value', res.Data.FilePath)
            IMAGEURL.push(res.Data.FileId)
            console.log(fileupload.attr('value'))
            console.log(IMAGEURL)
          },
          error: function () {
            //演示失败状态，并实现重传
            var demoText = $('#demoText')
            demoText.html(
              '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
            )
            demoText.find('.demo-reload').on('click', function () {
              uploadInst.upload()
            })
          }
        })

        //监听提交
        form.on('submit(formDemo)', function (data) {
          // layer.msg(JSON.stringify(data.field));
          var params = data.field
          let InsCode = getNowTime()
          var load = layer.load(3)
          $.ajax({
            type: 'POST',
            url:
              baseUrl_API_BZLC +
              '/Wfms/Overt/WeChart/PublicAccount/Handle/Submit/QuickStart',
            contentType: 'application/json',
            dataType: 'JSON',
            data: JSON.stringify({
              SystemMark: 'XtWeChart',
              WeChatOpenId: getlocalStorage('openId'), //用户openId
              WeChatNickName: '微信用户', //用户昵称
              Entity: {
                FlowId: liuchengMes.chooseUserNameLC.FlowId,
                NodeId: liuchengMes.chooseUserNameLC.NodeId,
                Datas: [
                  {
                    DataCode: 'InsCode',
                    DataGroup: 0,
                    DataValue: InsCode //项目ID
                  },
                  {
                    DataCode: 'ProjectType',
                    DataGroup: 0,
                    DataValue: liuchengMes.companyNewInstallLC.ProjectType //项目类型
                  },
                  {
                    DataCode: 'ProjectOrgNo',
                    DataGroup: 0,
                    DataValue: $scope.companyNo //单位ID
                  },
                  {
                    DataCode: 'UserCode',
                    DataGroup: 0,
                    DataValue: params.userInfoCode //用户编号
                  },
                  {
                    DataCode: 'ApplyName',
                    DataGroup: 0,
                    DataValue: params.UserContactPerson //联系人
                  },
                  {
                    DataCode: 'ApplyPhone',
                    DataGroup: 0,
                    DataValue: params.UserContactNew //联系电话
                  },
                  {
                    DataCode: 'ApplyAddress',
                    DataGroup: 0,
                    DataValue: params.site //地址
                  },
                  {
                    DataCode: 'ApplyDNumber',
                    DataGroup: 0,
                    DataValue: params.CertificatesNumber //证件号码
                  },
                  {
                    DataCode: 'ApplyReason',
                    DataGroup: 0,
                    DataValue: params.ChangeReason //过户原因
                  }
                ],
                Files: IMAGEURL
              }
            }),
            success: function (jsonResult) {
              layer.close(load)
              if (jsonResult.Result == 1) {
                layer.msg(
                  '提交成功!!!',
                  {
                    icon: 6,
                    time: 2000
                  },
                  function () {
                    IMAGEURL = []
                    $('#uesrBaozhang')[0].reset()
                    $scope.fileMsgList.forEach((item, index) => {
                      $('#demo' + index).html('')
                    })
                    layui.form.render()
                  }
                )
              } else {
                layer.msg(jsonResult.Msg || '提交申请失败')
              }
            },
            error: function (data) {
              layer.close(load)
              alert('请求失败')
            }
          })
          return false
        })

        form.on('select(testSelect)', function (data) {
          console.log(data)
          getConsDetail(data.value)
        })

        //点击重置
        $scope.reset = function () {
          $('#uesrBaozhang')[0].reset()
          $('#demo2').html('')
          layui.form.render()
        }
      })
    }
    getWXConsList()
    // 获取户号列表和上次操作户号
    function getWXConsList() {
      if (getlocalStorage('openId')) {
        $.ajax({
          type: 'GET',
          url:
            baseUrl_API_WeiXin +
            'payUser/selectByOpenId?openId=' +
            getlocalStorage('openId'),
          success: function (res) {
            if (res.code == 1) {
              $scope.$apply(function () {
                getConsDetail(res.msg.lastOperatedTable)
                $scope.consList = res.userList
              })
            }
          }
        })
      }
    }
    // 获取户号信息
    function getConsDetail(lastOperatedTable) {
      if (lastOperatedTable) {
        $.ajax({
          type: 'GET',
          url:
            baseUrl_API_WeiXin +
            'netUserInfoController/findAllUser?userInfoCode=' +
            lastOperatedTable,
          success: function (res) {
            if (res.code == 1) {
              $scope.$apply(function () {
                $scope.companyNo = res.org_no
                $scope.consInfo = res
                layui.form.val('testForm', {
                  userInfoCode: lastOperatedTable,
                  UserName: res.userName,
                  UserContact: res.userPhone || '',
                  UserAddress: res.site
                })
                layui.form.render('select')
              })
            }
          }
        })
      }
    }
  }
)
// 销户
jkApp.controller(
  'cancelUserLCCtrl',
  function ($scope, $location, $routeParams, $sce) {
    $scope.imageUrl = imageUrl
    getSysMenu()
    // 报装菜单
    $scope.SysMenuList = []
    function getSysMenu() {
      $.ajax({
        url: baseUrl + '/SysMenu/list?isShow=1',
        success: function (res) {
          if (res.code == 10000) {
            $scope.$apply(function () {
              $scope.SysMenuList = res.data.rows
            })
          }
        }
      })
    }
    systeminfo()
    //获取基本信息
    function systeminfo() {
      $.ajax({
        url: baseUrl + '/systeminfo/queryAll',
        success: function (result) {
          $scope.$apply(function () {
            $scope.info = result.data[0]
          })
        }
      })
    }
    $scope.fileMsgList = []
    var IMAGEURL = []
    getFileMsg()
    function getFileMsg() {
      $.ajax({
        type: 'POST',
        url:
          baseUrl_API_BZLC +
          '/Wfms/Overt/WeChart/PublicAccount/Query/Node/Node',
        contentType: 'application/json',
        data: JSON.stringify({
          SystemMark: 'XtWeChart',
          WeChatOpenId: getlocalStorage('openId'), //用户openId
          WeChatNickName: '微信用户', //用户昵称
          Entity: {
            FlowId: liuchengMes.cancelUserLC.FlowId,
            NodeId: liuchengMes.cancelUserLC.NodeId
          }
        }),
        dataType: 'JSON',
        success: function (res) {
          $scope.$apply(function () {
            if (res.Result == 1) {
              res.Data.Node.FileRules.forEach((item) => {
                if (item.FileRuleName.indexOf('(') <= -1) {
                  item.FileRuleNameA = item.FileRuleName
                  item.FileRuleText = ''
                } else {
                  item.FileRuleNameA = item.FileRuleName.split('(')[0]
                  item.FileRuleText = '(' + item.FileRuleName.split('(')[1]
                }
                $scope.fileMsgList.push(item)
              })
              $scope.fileMsgList.forEach((item, uploadIndex) => {
                uploadInit(item, uploadIndex)
              })
            }
          })
        }
      })
    }
    function uploadInit(item, uploadIndex) {
      layui.use(['form', 'upload'], function () {
        var form = layui.form
        form.render()
        var $ = layui.jquery,
          upload = layui.upload
        //普通图片上传
        let uploadInst = upload.render({
          elem: '#test' + uploadIndex,
          url:
            baseUrl_API_BZLC +
            '/Wfms/Overt/WeChart/PublicAccount/Handle/File/UploadNoInsId',
          accept: 'file',
          auto: false,
          size: 50000,
          choose: function (obj) {
            var that = this
            obj.preview(function (index, file, result) {
              // console.log(file);
              that.data = {
                SystemMark: 'XtWeChart',
                WeChatOpenId: getlocalStorage('openId'), //用户openId
                NodeId: liuchengMes.cancelUserLC.NodeId,
                FileRuleId: item.FileRuleId,
                FileName: file.name,
                FileLength: file.size
              }
              obj.upload(index, file)
            })
          },
          before: function (obj) {},
          done: function (res, index) {
            //上传成功
            if (res.Result == 1) {
              layer.msg('上传成功')
              if (isImage(res.Data.FileName)) {
                $('#demo' + uploadIndex).append(
                  '<div class="upload_div" id="upload_' +
                    index +
                    '"><img src="' +
                    baseUrl_API_BZLC +
                    res.Data.FilePath +
                    '" alt="' +
                    res.Data.FileName +
                    '" class="layui-upload-img"></div>'
                )
              }
              if (!isImage(res.Data.FileName)) {
                $('#demo' + uploadIndex).append(
                  '<div class="upload_div" id="upload_' +
                    index +
                    '"><a href="' +
                    baseUrl_API_BZLC +
                    res.Data.FilePath +
                    '" target="_blank" class="layui-upload-img">' +
                    res.Data.FileName +
                    '</a></div>'
                )
              }
            }
            var demoText = $('#demoText')
            demoText.html('<span style="color: #4cae4c;">上传成功</span>')

            var fileupload = $('.image')
            fileupload.attr('value', res.Data.FilePath)
            IMAGEURL.push(res.Data.FileId)
            console.log(fileupload.attr('value'))
            console.log(IMAGEURL)
          },
          error: function () {
            //演示失败状态，并实现重传
            var demoText = $('#demoText')
            demoText.html(
              '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
            )
            demoText.find('.demo-reload').on('click', function () {
              uploadInst.upload()
            })
          }
        })

        //监听提交
        form.on('submit(formDemo)', function (data) {
          // layer.msg(JSON.stringify(data.field));
          var params = data.field
          let InsCode = getNowTime()
          var load = layer.load(3)
          $.ajax({
            type: 'POST',
            url:
              baseUrl_API_BZLC +
              '/Wfms/Overt/WeChart/PublicAccount/Handle/Submit/QuickStart',
            contentType: 'application/json',
            dataType: 'JSON',
            data: JSON.stringify({
              SystemMark: 'XtWeChart',
              WeChatOpenId: getlocalStorage('openId'), //用户openId
              WeChatNickName: '微信用户', //用户昵称
              Entity: {
                FlowId: liuchengMes.cancelUserLC.FlowId,
                NodeId: liuchengMes.cancelUserLC.NodeId,
                Datas: [
                  {
                    DataCode: 'InsCode',
                    DataGroup: 0,
                    DataValue: InsCode //项目ID
                  },
                  {
                    DataCode: 'ProjectType',
                    DataGroup: 0,
                    DataValue: liuchengMes.cancelUserLC.ProjectType //项目类型
                  },
                  {
                    DataCode: 'ProjectOrgNo',
                    DataGroup: 0,
                    DataValue: $scope.companyNo //单位ID
                  },
                  {
                    DataCode: 'UserCode',
                    DataGroup: 0,
                    DataValue: params.userInfoCode //用户编号
                  },
                  {
                    DataCode: 'ProjectName',
                    DataGroup: 0,
                    DataValue: params.UserContactPerson //项目用户名称
                  },
                  {
                    DataCode: 'ApplyName',
                    DataGroup: 0,
                    DataValue: params.UserContactPerson //联系人
                  },
                  {
                    DataCode: 'ApplyPhone',
                    DataGroup: 0,
                    DataValue: params.UserContactNew //联系电话
                  },
                  {
                    DataCode: 'ApplyAddress',
                    DataGroup: 0,
                    DataValue: params.site //地址
                  },
                  {
                    DataCode: 'ApplyDNumber',
                    DataGroup: 0,
                    DataValue: params.CertificatesNumber //证件号码
                  },
                  {
                    DataCode: 'ApplyReason',
                    DataGroup: 0,
                    DataValue: params.ChangeReason //过户原因
                  }
                ],
                Files: IMAGEURL
              }
            }),
            success: function (jsonResult) {
              layer.close(load)
              if (jsonResult.Result == 1) {
                layer.msg(
                  '提交成功!!!',
                  {
                    icon: 6,
                    time: 2000
                  },
                  function () {
                    IMAGEURL = []
                    $('#uesrBaozhang')[0].reset()
                    $scope.fileMsgList.forEach((item, index) => {
                      $('#demo' + index).html('')
                    })
                    layui.form.render()
                  }
                )
              } else {
                layer.msg(jsonResult.Msg || '提交申请失败')
              }
            },
            error: function (data) {
              layer.close(load)
              alert('请求失败')
            }
          })
          return false
        })

        form.on('select(testSelect)', function (data) {
          console.log(data)
          getConsDetail(data.value)
        })

        //点击重置
        $scope.reset = function () {
          $('#uesrBaozhang')[0].reset()
          $('#demo2').html('')
          layui.form.render()
        }
      })
    }
    getWXConsList()
    // 获取户号列表和上次操作户号
    function getWXConsList() {
      if (getlocalStorage('openId')) {
        $.ajax({
          type: 'GET',
          url:
            baseUrl_API_WeiXin +
            'payUser/selectByOpenId?openId=' +
            getlocalStorage('openId'),
          success: function (res) {
            if (res.code == 1) {
              $scope.$apply(function () {
                getConsDetail(res.msg.lastOperatedTable)
                $scope.consList = res.userList
              })
            }
          }
        })
      }
    }
    // 获取户号信息
    function getConsDetail(lastOperatedTable) {
      if (lastOperatedTable) {
        $.ajax({
          type: 'GET',
          url:
            baseUrl_API_WeiXin +
            'netUserInfoController/findAllUser?userInfoCode=' +
            lastOperatedTable,
          success: function (res) {
            if (res.code == 1) {
              $scope.$apply(function () {
                $scope.companyNo = res.org_no
                $scope.consInfo = res
                layui.form.val('testForm', {
                  userInfoCode: lastOperatedTable,
                  UserName: res.userName,
                  UserContact: res.userPhone || '',
                  UserAddress: res.site
                })
                layui.form.render('select')
              })
            }
          }
        })
      }
    }
  }
)
// 用水性质变更
jkApp.controller(
  'chooseWaterNatureCtrl',
  function ($scope, $location, $routeParams, $sce) {
    $scope.imageUrl = imageUrl
    getSysMenu()
    // 报装菜单
    $scope.SysMenuList = []
    function getSysMenu() {
      $.ajax({
        url: baseUrl + '/SysMenu/list?isShow=1',
        success: function (res) {
          if (res.code == 10000) {
            $scope.$apply(function () {
              $scope.SysMenuList = res.data.rows
            })
          }
        }
      })
    }
    systeminfo()
    //获取基本信息
    function systeminfo() {
      $.ajax({
        url: baseUrl + '/systeminfo/queryAll',
        success: function (result) {
          $scope.$apply(function () {
            $scope.info = result.data[0]
          })
        }
      })
    }
    $scope.fileMsgList = []
    var IMAGEURL = []
    getFileMsg()
    function getFileMsg() {
      $.ajax({
        type: 'POST',
        url:
          baseUrl_API_BZLC +
          '/Wfms/Overt/WeChart/PublicAccount/Query/Node/Node',
        contentType: 'application/json',
        data: JSON.stringify({
          SystemMark: 'XtWeChart',
          WeChatOpenId: getlocalStorage('openId'), //用户openId
          WeChatNickName: '微信用户', //用户昵称
          Entity: {
            FlowId: liuchengMes.NatureOfWaterChange.FlowId,
            NodeId: liuchengMes.NatureOfWaterChange.NodeId
          }
        }),
        dataType: 'JSON',
        success: function (res) {
          $scope.$apply(function () {
            if (res.Result == 1) {
              res.Data.Node.FileRules.forEach((item) => {
                if (item.FileRuleName.indexOf('(') <= -1) {
                  item.FileRuleNameA = item.FileRuleName
                  item.FileRuleText = ''
                } else {
                  item.FileRuleNameA = item.FileRuleName.split('(')[0]
                  item.FileRuleText = '(' + item.FileRuleName.split('(')[1]
                }
                $scope.fileMsgList.push(item)
              })
              $scope.fileMsgList.forEach((item, uploadIndex) => {
                uploadInit(item, uploadIndex)
              })
            }
          })
        }
      })
    }
    function uploadInit(item, uploadIndex) {
      layui.use(['form', 'upload'], function () {
        var form = layui.form
        form.render()
        var $ = layui.jquery,
          upload = layui.upload
        //普通图片上传
        let uploadInst = upload.render({
          elem: '#test' + uploadIndex,
          url:
            baseUrl_API_BZLC +
            '/Wfms/Overt/WeChart/PublicAccount/Handle/File/UploadNoInsId',
          accept: 'file',
          auto: false,
          size: 50000,
          choose: function (obj) {
            var that = this
            obj.preview(function (index, file, result) {
              // console.log(file);
              that.data = {
                SystemMark: 'XtWeChart',
                WeChatOpenId: getlocalStorage('openId'), //用户openId
                NodeId: liuchengMes.NatureOfWaterChange.NodeId,
                FileRuleId: item.FileRuleId,
                FileName: file.name,
                FileLength: file.size
              }
              obj.upload(index, file)
            })
          },
          before: function (obj) {},
          done: function (res, index) {
            //上传成功
            if (res.Result == 1) {
              layer.msg('上传成功')
              if (isImage(res.Data.FileName)) {
                $('#demo' + uploadIndex).append(
                  '<div class="upload_div" id="upload_' +
                    index +
                    '"><img src="' +
                    baseUrl_API_BZLC +
                    res.Data.FilePath +
                    '" alt="' +
                    res.Data.FileName +
                    '" class="layui-upload-img"></div>'
                )
              }
              if (!isImage(res.Data.FileName)) {
                $('#demo' + uploadIndex).append(
                  '<div class="upload_div" id="upload_' +
                    index +
                    '"><a href="' +
                    baseUrl_API_BZLC +
                    res.Data.FilePath +
                    '" target="_blank" class="layui-upload-img">' +
                    res.Data.FileName +
                    '</a></div>'
                )
              }
            }
            var demoText = $('#demoText')
            demoText.html('<span style="color: #4cae4c;">上传成功</span>')

            var fileupload = $('.image')
            fileupload.attr('value', res.Data.FilePath)
            IMAGEURL.push(res.Data.FileId)
            console.log(fileupload.attr('value'))
            console.log(IMAGEURL)
          },
          error: function () {
            //演示失败状态，并实现重传
            var demoText = $('#demoText')
            demoText.html(
              '<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>'
            )
            demoText.find('.demo-reload').on('click', function () {
              uploadInst.upload()
            })
          }
        })

        //监听提交
        form.on('submit(formDemo)', function (data) {
          // layer.msg(JSON.stringify(data.field));
          var params = data.field
          let InsCode = getNowTime()
          var load = layer.load(3)
          $.ajax({
            type: 'POST',
            url:
              baseUrl_API_BZLC +
              '/Wfms/Overt/WeChart/PublicAccount/Handle/Submit/QuickStart',
            contentType: 'application/json',
            dataType: 'JSON',
            data: JSON.stringify({
              SystemMark: 'XtWeChart',
              WeChatOpenId: getlocalStorage('openId'), //用户openId
              WeChatNickName: '微信用户', //用户昵称
              Entity: {
                FlowId: liuchengMes.NatureOfWaterChange.FlowId,
                NodeId: liuchengMes.NatureOfWaterChange.NodeId,
                Datas: [
                  {
                    DataCode: 'InsCode',
                    DataGroup: 0,
                    DataValue: InsCode //项目ID
                  },
                  {
                    DataCode: 'ProjectType',
                    DataGroup: 0,
                    DataValue: liuchengMes.NatureOfWaterChange.ProjectType //项目类型
                  },
                  // {
                  //     DataCode: "ProjectOrgNo",
                  //     DataGroup: 0,
                  //     DataValue: $scope.companyNo, //单位ID
                  // },
                  {
                    DataCode: 'UserCode',
                    DataGroup: 0,
                    DataValue: params.userInfoCode //用户编号
                  },
                  {
                    DataCode: 'UserName',
                    DataGroup: 0,
                    DataValue: params.UserName //联系人
                  },
                  {
                    DataCode: 'UserContact',
                    DataGroup: 0,
                    DataValue: params.UserContact //联系电话
                  },
                  {
                    DataCode: 'ProjectAddress',
                    DataGroup: 0,
                    DataValue: params.UserAddress //地址
                  },
                  {
                    DataCode: 'ApplyReason',
                    DataGroup: 0,
                    DataValue: params.ChangeReason //变更原因
                  },
                  {
                    DataCode: 'ProjectName',
                    DataGroup: 0,
                    DataValue: params.UserName + '[' + params.userInfoCode + ']'
                  }
                ],
                Files: IMAGEURL
              }
            }),
            success: function (jsonResult) {
              layer.close(load)
              if (jsonResult.Result == 1) {
                layer.msg(
                  '提交成功!!!',
                  {
                    icon: 6,
                    time: 2000
                  },
                  function () {
                    IMAGEURL = []
                    $('#uesrBaozhang')[0].reset()
                    $scope.fileMsgList.forEach((item, index) => {
                      $('#demo' + index).html('')
                    })
                    layui.form.render()
                  }
                )
              } else {
                layer.msg(jsonResult.Msg || '提交申请失败')
              }
            },
            error: function (data) {
              layer.close(load)
              alert('请求失败')
            }
          })
          return false
        })

        form.on('select(testSelect)', function (data) {
          console.log(data)
          getConsDetail(data.value)
        })

        //点击重置
        $scope.reset = function () {
          $('#uesrBaozhang')[0].reset()
          $('#demo2').html('')
          layui.form.render()
        }
      })
    }
    getWXConsList()
    // 获取户号列表和上次操作户号
    function getWXConsList() {
      if (getlocalStorage('openId')) {
        $.ajax({
          type: 'GET',
          url:
            baseUrl_API_WeiXin +
            'payUser/selectByOpenId?openId=' +
            getlocalStorage('openId'),
          success: function (res) {
            if (res.code == 1) {
              $scope.$apply(function () {
                getConsDetail(res.msg.lastOperatedTable)
                $scope.consList = res.userList
              })
            }
          }
        })
      }
    }
    // 获取户号信息
    function getConsDetail(lastOperatedTable) {
      if (lastOperatedTable) {
        $.ajax({
          type: 'GET',
          url:
            baseUrl_API_WeiXin +
            'netUserInfoController/findAllUser?userInfoCode=' +
            lastOperatedTable,
          success: function (res) {
            if (res.code == 1) {
              $scope.$apply(function () {
                $scope.companyNo = res.org_no
                $scope.consInfo = res
                layui.form.val('testForm', {
                  userInfoCode: lastOperatedTable,
                  UserName: res.userName,
                  UserContact: res.userPhone || '',
                  UserAddress: res.site
                })
                layui.form.render('select')
              })
            }
          }
        })
      }
    }
  }
)
// 我的业务列表
jkApp.controller('processListLCCtrl', function ($scope, $location) {
  $scope.imageUrl = imageUrl
  getSysMenu()
  // 报装菜单
  $scope.SysMenuList = []
  function getSysMenu() {
    $.ajax({
      url: baseUrl + '/SysMenu/list?isShow=1',
      success: function (res) {
        if (res.code == 10000) {
          $scope.$apply(function () {
            $scope.SysMenuList = res.data.rows
          })
        }
      }
    })
  }
  systeminfo()
  //获取基本信息
  function systeminfo() {
    $.ajax({
      url: baseUrl + '/systeminfo/queryAll',
      success: function (result) {
        $scope.$apply(function () {
          $scope.info = result.data[0]
          // 动态配置客网页头名称
          document.title = $scope.info.companyname
        })
      }
    })
  }
  layui.use(['form', 'layedit', 'laydate', 'table'], function () {
    var form = layui.form
    var table = layui.table

    var layer = layui.layer
    var layedit = layui.layedit
    var laydate = layui.laydate
    var table_name = table.render({
      elem: '#suypowerGrid',
      id: 'testReload',
      height: 462,
      url: baseUrl_API_BZLC + '/Bzms/WeChat/ApplyBind/PageByCurr', //数据接口
      // page: true, //开启分页
      request: {
        pageName: 'curr', // 页码的参数名称，默认：page
        limitName: 'nums' // 每页数据条数的参数名，默认：limit
      },
      method: 'post',
      contentType: 'application/json',
      where: {
        SystemMark: 'XtBpm',
        AccessToken: getlocalStorage('openId'),
        WeChatNickName: '',
        Data: {},
        Page: { Sum: 0, PageSize: 1000, CurrPage: 1, Sort: '' }
      },
      parseData: function (res) {
        //res 即为原始返回的数据
        return {
          code: res.State == 1 ? 0 : '', //解析接口状态
          msg: res.Msg, //解析提示文本
          count: res.Page.Sum, //解析数据长度
          data: res.Datas //解析数据列表
        }
      },
      cols: [
        [
          //表头
          { field: 'ApplyTypeName', title: '报装类型', align: 'center' },
          { field: 'ProjectName', title: '项目名称', align: 'center' },
          { field: 'UserMobile', title: '联系方式', align: 'center' },
          { field: 'ProjectAddr', title: '项目地址', align: 'center' },
          {
            field: 'ApplyTime',
            title: '上报时间',
            align: 'center',
            templet: function (d) {
              return '<span>' + d.ApplyTime.replace('T', ' ') + '</span>'
            }
          },
          { field: 'VerifyStatusName', title: '当前进度', align: 'center' }
          // { field: '', title: '操作', align: 'center', toolbar: '#MyBarDemo' }
        ]
      ]
    })
    table.on('tool(test)', function (obj) {
      var data = obj.data
      if ('update' == obj.event) {
        console.log(data)
        getBZDetails(data)
      }
    })

    //点击查询
    $scope.searchQuery = function () {
      var USERNAME = $('.layui-input-userName').val()
      var TELPHONE = $('.layui-input-phone').val()
      table.reload('testReload', {
        url: baseUrl_API_BZLC + '/Bzms/WeChat/ApplyBind/PageByCurr', //数据接口
        request: {},
        method: 'post',
        contentType: 'application/json',
        where: {
          SystemMark: 'XtBpm',
          AccessToken: getlocalStorage('openId'),
          WeChatNickName: '',
          Data: {},
          Page: { Sum: 0, PageSize: 1000, CurrPage: 1, Sort: '' }
        },
        parseData: function (res) {
          //res 即为原始返回的数据
          return {
            code: res.Result == 1 ? 0 : '', //解析接口状态
            msg: res.Msg, //解析提示文本
            count: res.PageInfo.Sum, //解析数据长度
            data: res.Datas //解析数据列表
          }
        },
        page: {
          curr: 1
        }
      })
    }
  })
  // 进度详情
  function getBZDetails(BZObj) {
    if (BZObj.CreateActId) {
      $.ajax({
        type: 'post',
        url:
          baseUrl_API_BZLC + '/Wfms/Overt/WeChart/PublicAccount/Query/Act/Run',
        contentType: 'application/json',
        data: JSON.stringify({
          SystemMark: 'XtWeChart',
          WeChatOpenId: getlocalStorage('openId'),
          WeChatNickName: '微信用户',
          Entity: { ActId: BZObj.CreateActId }
        }),
        success: function (res) {
          if (res.Result == 1) {
            layer.open({
              // 打开弹出框
              type: 1, // 这个很关键！1为页面层
              title: '报装详情',
              shadeClose: true, //开启遮罩关闭
              // shade: 0.8,
              area: ['70%', '90%'],
              maxmin: true,
              content:
                '<div class="layui-container" style="width: 98%"><table id="transfer" lay-filter="transfer" class=""></table></div>',
              // 弹出层表格定义
              success: function () {
                layui.table.render({
                  elem: '#transfer', // 弹出层表格id ,
                  url:
                    baseUrl_API_BZLC +
                    '/Wfms/Overt/IntegrationApp/Query/File/List',
                  // page: true, //开启分页
                  request: {},
                  method: 'post',
                  contentType: 'application/json',
                  where: {
                    SystemMark: 'XtWeChart',
                    WeChatOpenId: getlocalStorage('openId'),
                    WeChatNickName: '微信用户',
                    Entity: { InsId: BZObj.InsId }
                  },
                  parseData: function (res) {
                    //res 即为原始返回的数据
                    return {
                      code: res.Result == 1 ? 0 : '', //解析接口状态
                      msg: res.Msg, //解析提示文本
                      count: res.Datas.length, //解析数据长度
                      data: res.Datas //解析数据列表
                    }
                  },
                  cols: [
                    [
                      //表头
                      { field: 'InsName', title: '项目名称', align: 'center' },
                      {
                        field: 'FileRlName',
                        title: '上传附件',
                        align: 'center'
                      },
                      { field: 'FileName', title: '文件名称', align: 'center' },
                      {
                        field: 'CreateTime',
                        title: '上报时间',
                        align: 'center',
                        templet: function (d) {
                          return (
                            '<span>' +
                            d.CreateTime.replace('T', ' ') +
                            '</span>'
                          )
                        }
                      },
                      { field: 'NodeName', title: '当前进度', align: 'center' },
                      {
                        field: '',
                        title: '查看',
                        align: 'center',
                        toolbar: '#ImgDemo'
                      }
                    ]
                  ]
                })
                layui.table.on('tool(transfer)', function (obj) {
                  var data = obj.data
                  if (obj.event === 'openImage') {
                    console.log(data)
                    var imageList = baseUrl_API_BZLC + data.FilePath
                    imageList = imageList.split(',')
                    var html = ''
                    if (isImage(data.FilePath)) {
                      if (imageList.length > 0) {
                        html = '<div style="display:flex;min-width:200px;" >'
                        for (var index = 0; index < imageList.length; index++) {
                          html +=
                            '<img src="' +
                            imageList[index] +
                            '" style="object-fit:none;width:auto" class="layui-upload-img">'
                        }
                        html += '</div>'
                      }
                      layer.open({
                        area: ['50%', '50%'],
                        title: '查看',
                        type: 1,
                        content: html
                      })
                    } else {
                      window.open(baseUrl_API_BZLC + data.FilePath)
                    }
                  }
                })
              }
            })
          }
        }
      })
    }
    if (BZObj.InsId) {
      $.ajax({
        type: 'post',
        url: baseUrl_API_BZLC + '/Wfms/Overt/IntegrationApp/Query/File/List',
        contentType: 'application/json',
        data: JSON.stringify({
          SystemMark: 'XtWeChart',
          WeChatOpenId: getlocalStorage('openId'),
          WeChatNickName: '微信用户',
          Entity: { InsId: BZObj.InsId }
        }),
        success: function (res) {
          if (res.Result == 1) {
          }
        }
      })
    }
  }
})
