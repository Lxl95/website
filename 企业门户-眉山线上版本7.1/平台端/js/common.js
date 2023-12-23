    //设置中文
    videojs.addLanguage('zh-CN', {
        "Play": "播放",
        "Pause": "暂停",
        "Current Time": "当前时间",
        "Duration": "时长",
        "Remaining Time": "剩余时间",
        "Stream Type": "媒体流类型",
        "LIVE": "直播",
        "Loaded": "加载完毕",
        "Progress": "进度",
        "Fullscreen": "全屏",
        "Non-Fullscreen": "退出全屏",
        "Mute": "静音",
        "Unmute": "取消静音",
        "Playback Rate": "播放速度",
        "Subtitles": "字幕",
        "subtitles off": "关闭字幕",
        "Captions": "内嵌字幕",
        "captions off": "关闭内嵌字幕",
        "Chapters": "节目段落",
        "Close Modal Dialog": "关闭弹窗",
        "Descriptions": "描述",
        "descriptions off": "关闭描述",
        "Audio Track": "音轨",
        "You aborted the media playback": "视频播放被终止",
        "A network error caused the media download to fail part-way.": "网络错误导致视频下载中途失败。",
        "The media could not be loaded, either because the server or network failed or because the format is not supported.": "视频因格式不支持或者服务器或网络的问题无法加载。",
        "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
        "No compatible source was found for this media.": "无法找到此视频兼容的源。",
        "The media is encrypted and we do not have the keys to decrypt it.": "视频已加密，无法解密。",
        "Play Video": "播放视频",
        "Close": "关闭",
        "Modal Window": "弹窗",
        "This is a modal window": "这是一个弹窗",
        "This modal can be closed by pressing the Escape key or activating the close button.": "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
        ", opens captions settings dialog": ", 开启标题设置弹窗",
        ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
        ", opens descriptions settings dialog": ", 开启描述设置弹窗",
        ", selected": ", 选择",
        "captions settings": "字幕设定",
        "Audio Player": "音频播放器",
        "Video Player": "视频播放器",
        "Replay": "重播",
        "Progress Bar": "进度小节",
        "Volume Level": "音量",
        "subtitles settings": "字幕设定",
        "descriptions settings": "描述设定",
        "Text": "文字",
        "White": "白",
        "Black": "黑",
        "Red": "红",
        "Green": "绿",
        "Blue": "蓝",
        "Yellow": "黄",
        "Magenta": "紫红",
        "Cyan": "青",
        "Background": "背景",
        "Window": "视窗",
        "Transparent": "透明",
        "Semi-Transparent": "半透明",
        "Opaque": "不透明",
        "Font Size": "字体尺寸",
        "Text Edge Style": "字体边缘样式",
        "None": "无",
        "Raised": "浮雕",
        "Depressed": "压低",
        "Uniform": "均匀",
        "Dropshadow": "下阴影",
        "Font Family": "字体库",
        "Proportional Sans-Serif": "比例无细体",
        "Monospace Sans-Serif": "单间隔无细体",
        "Proportional Serif": "比例细体",
        "Monospace Serif": "单间隔细体",
        "Casual": "舒适",
        "Script": "手写体",
        "Small Caps": "小型大写字体",
        "Reset": "重启",
        "restore all settings to the default values": "恢复全部设定至预设值",
        "Done": "完成",
        "Caption Settings Dialog": "字幕设定视窗",
        "Beginning of dialog window. Escape will cancel and close the window.": "开始对话视窗。离开会取消及关闭视窗",
        "End of dialog window.": "结束对话视窗"
    });
    //头部尾部路由设置
    var jkApp = angular.module("myApp", ["ngRoute"]);
    jkApp.config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "html/home.html"
        }).when("/main", {
            templateUrl: "html/home.html"
        }).when("/new", {
            templateUrl: "html/newList.html"
        }).when("/handling", {
            templateUrl: "html/handling.html"
        }).when("/detail", {
            templateUrl: "html/detail.html"
        }).when("/companyProfile", {
            templateUrl: "html/companyProfile.html"
        }).when("/detailsNotice", {
            templateUrl: "html/detailsNotice.html"
        }).when("/statutory", {
            templateUrl: "html/statutory.html"
        }).when("/cc", {
            templateUrl: "html/news.html"
        }).when("/chongqinghuoguo", {
            templateUrl: "html/chongqinghuoguo.html"
        }).when("/food", {
            templateUrl: "html/food.html"
        }).when("/bb", {
            templateUrl: "html/food1.html"
        }).when("/aa", {
            templateUrl: "html/chongqinghuoguo1.html"
        }).when("/joinin", {
            templateUrl: "html/joinin.html"
        }).when("/hgcp", {
            templateUrl: "html/hgcp.html"
        }).when("/hgcp2", {
            templateUrl: "html/hgcp2.html"
        }).when("/entry", {
            templateUrl: "html/alot/entry.html"
        }).when("/onlinePayment", {
            templateUrl: "html/alot/onlinePayment.html"
        }).when("/usersNewClothes", {
            templateUrl: "html/alot/usersNewClothes.html"
        }).when("/dealWithProgress", {
            templateUrl: "html/alot/dealWithProgress.html"
        }).when("/InformationChanges", {
            templateUrl: "html/alot/InformationChanges.html"
        }).when("/queryUser", {
            templateUrl: "html/alot/queryUser.html"
        }).when("/changeName", {
            templateUrl: "html/alot/changeName.html"
        }).when("/theNewUnit", {
            templateUrl: "html/alot/theNewUnit.html"
        }).when("/dealWithProgressUnit", {
            templateUrl: "html/alot/dealWithProgressUnit.html"
        }).when("/contactUs", {
            templateUrl: "html/contactUs.html"
        }).when("/theBusinessApplication", {
            templateUrl: "html/theBusinessApplication.html"
        }).when("/waterQuery", {
            templateUrl: "html/waterQuery.html"
        }).when("/complaints", {
            templateUrl: "html/complaints.html"
        }).when("/repairs", {
            templateUrl: "html/repairs.html"
        }).otherwise({
            redirectTo: "/"
        })
    });
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
    jkApp.controller('changeNameCtrl', function($scope, $location, $routeParams, $sce) {
        layui.use(['form', 'upload'], function() {
            var form = layui.form;
            var $ = layui.jquery,
                upload = layui.upload;
            var IMAGEURL = []
            var index = 0;
            //监听提交
            form.on('submit(formDemo1)', function(data) {

                var param = data.field;
                USERNAME = param.USERNAME;
                USERINFOCODE = param.USERINFOCODE;

                $.ajax({                    
                    type:   "POST",
                    url: baoZhuangBaseUrl + "/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx",
                    contentType:   "application/x-www-form-urlencoded",
                    dataType: 'JSON',
                             
                    data: {
                        "OPType": "GetUserInfoByCode",
                        "USERNAME": param.USERNAME,
                        "USERINFOCODE": param.USERINFOCODE,
                        "SOURCE": "PC"

                    },

                    success:   function (jsonResult)  { 
                        if (jsonResult.Data.length == 0) {
                            return layer.msg('未获取到用户信息', {
                                icon: 2,
                                time: 2000
                            }, function() {

                            });
                        } else {
                            $scope.$apply(function() {
                                $scope.userInfo = jsonResult.Data[0];
                            });
                            form.val('component-form-group', {
                                "USERNAME": jsonResult.Data[0].USERNAME,
                                "USERADDRESS": jsonResult.Data[0].USERADDRESS,
                                "CONTECT": jsonResult.Data[0].CONTECT,
                                "IDENTITYVALUE": jsonResult.Data[0].IDENTITYVALUE,
                                "METERCALNAME": jsonResult.Data[0].METERCALNAME,
                                "USEWATERTYPENAME": jsonResult.Data[0].USEWATERTYPENAME,

                            });

                        }
                    },
                    error:   function (data)  {                      
                        alert("请求失败");                    
                    }                
                });
                return false;
            });
            //普通图片上传
            var uploadInst = upload.render({
                elem: '#test1',
                url: baseUrl + '/upload/imgUpload',
                accept: 'images',
                size: 50000,
                before: function(obj) {
                    index += 1;
                    obj.preview(function(index, file, result) {

                        // $('#demo1').attr('src', result);
                        $('#demo2').append('<div class="upload_div" id="upload_' + index + '"><img src="' + result + '" alt="' + file.name + '" class="layui-upload-img"></div>')
                    });
                },
                done: function(res) {
                    //如果上传失败
                    if (res.code == 10000) {
                        return layer.msg("上传成功!!", {
                            icon: 6,
                            time: 500
                        }, function() {

                        });

                    }
                    //上传成功
                    // var demoText = $('#demoText');
                    // demoText.html('<span style="color: #4cae4c;">上传成功</span>');

                    var fileupload = $(".image");
                    fileupload.attr("value", res.data);
                    IMAGEURL.push(imageUrl + res.data)
                    console.log(fileupload.attr("value"));
                },
                error: function() {
                    //演示失败状态，并实现重传
                    var demoText = $('#demoText');
                    demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                    demoText.find('.demo-reload').on('click', function() {
                        uploadInst.upload();
                    });
                }
            });

            //监听提交
            //监听提交
            form.on('submit(formDemo)', function(data) {
                // layer.msg(JSON.stringify(data.field));
                var param = data.field;
                if ($scope.userInfo.USERNAME != param.USERNAME) {
                    editUserInfo("USERNAME", $scope.userInfo.USERNAME, param.USERNAME)
                }
                if ($scope.userInfo.USERADDRESS != param.USERADDRESS) {
                    editUserInfo("USERADDRESS", $scope.userInfo.USERADDRESS, param.USERADDRESS)
                }
                if ($scope.userInfo.CONTECT != param.TELPHONE) {
                    editUserInfo("TELPHONE", $scope.userInfo.CONTECT, param.TELPHONE)
                }
                if ($scope.userInfo.IDENTITYVALUE != param.CARDNO) {
                    editUserInfo("CARDNO", $scope.userInfo.IDENTITYVALUE, param.CARDNO)
                }
                if ($scope.userInfo.USEWATERTYPENAME != param.USEWATERTYPENAME) {
                    editUserInfo("USEWATERTYPENAME", $scope.userInfo.USEWATERTYPENAME, param.USEWATERTYPENAME)
                }
                if ($scope.userInfo.METERCALNAME != param.METERCALNAME) {
                    editUserInfo("METERCALNAME", $scope.userInfo.METERCALNAME, param.METERCALNAME)
                }


                return false;
            });

            function editUserInfo(MODIFYTYPE, BEFOREVALUE, AFTERVALUE) {
                $.ajax({                    
                    type:   "POST",
                    url: baoZhuangBaseUrl + "/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx",
                    contentType:   "application/x-www-form-urlencoded",
                    dataType: 'JSON',
                             
                    data: {
                        "OPType": "MODIFYUSER",
                        "USERINFOID": $routeParams.USERINFOID,
                        "MODIFYTYPE": MODIFYTYPE,
                        "BEFOREVALUE": BEFOREVALUE,
                        "AFTERVALUE": AFTERVALUE,
                        "SOURCE": "PC"

                    },

                    success:   function (jsonResult)  {                        
                        layer.msg("提交成功!!!", {
                            icon: 6,
                            time: 500
                        }, function() {
                            // $("#uesrBaozhang")[0].reset();
                            // $('#demo1').attr('src', '');
                            // layui.form.render();
                        });                                
                    },
                    error:   function (data)  {                      
                        alert("请求失败");                    
                    }                
                });
            }
            $scope.opneRemove = function(index) {

                console.log(index);

            }

        });




    })
    jkApp.controller('queryUserCtrl', function($scope, $location, $routeParams, $sce) {

        layui.use(['form', 'upload'], function() {
            var form = layui.form;
            var $ = layui.jquery;
            var USERNAME, USERINFOCODE;

            //监听提交
            form.on('submit(formDemo)', function(data) {

                var param = data.field;
                USERNAME = param.USERNAME;
                USERINFOCODE = param.USERINFOCODE;

                $.ajax({                    
                    type:   "POST",
                    url: baoZhuangBaseUrl + "/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx",
                    contentType:   "application/x-www-form-urlencoded",
                    dataType: 'JSON',
                             
                    data: {
                        "OPType": "GetUserInfoByCode",
                        "USERNAME": param.USERNAME,
                        "USERINFOCODE": param.USERINFOCODE,
                        "SOURCE": "PC"

                    },

                    success:   function (jsonResult)  { 
                        if (jsonResult.Data.length == 0) {
                            return layer.msg('未获取到用户信息', {
                                icon: 2,
                                time: 2000
                            }, function() {

                            });
                        } else {
                            $scope.$apply(function() {
                                $scope.userInfo = jsonResult.Data[0];
                            });
                        }
                    },
                    error:   function (data)  {                      
                        alert("请求失败");                    
                    }                
                });
                return false;
            });
            //变更信息
            $scope.editUserInfo = function() {
                    $location.path("/InformationChanges").search({
                        USERNAME: USERNAME,
                        USERINFOCODE: USERINFOCODE

                    });

                }
                //过户
            $scope.changeName = function() {
                    $location.path("/changeName").search({
                        USERNAME: USERNAME,
                        USERINFOCODE: USERINFOCODE

                    });

                }
                //用户销户
            $scope.pinhouseholds = function() {
                editUserInfo("USERSTATE", $scope.userInfo.USERSTATE, 2)
            }

            function editUserInfo(MODIFYTYPE, BEFOREVALUE, AFTERVALUE) {
                $.ajax({                    
                    type:   "POST",
                    url: baoZhuangBaseUrl + "/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx",
                    contentType:   "application/x-www-form-urlencoded",
                    dataType: 'JSON',
                             
                    data: {
                        "OPType": "MODIFYUSER",
                        "USERINFOID": $scope.userInfo.USERINFOID,
                        "MODIFYTYPE": MODIFYTYPE,
                        "BEFOREVALUE": BEFOREVALUE,
                        "AFTERVALUE": AFTERVALUE,
                        "SOURCE": "PC"

                    },

                    success:   function (jsonResult)  {                        
                        layer.msg("提交成功!!!", {
                            icon: 6,
                            time: 500
                        }, function() {
                            // $("#uesrBaozhang")[0].reset();
                            // $('#demo1').attr('src', '');
                            // layui.form.render();
                        });                                
                    },
                    error:   function (data)  {                      
                        alert("请求失败");                    
                    }                
                });
            }
        })




    })
    jkApp.controller('waterQueryCtrl', function($scope, $location, $routeParams, $sce) {

        layui.use(['form', 'upload'], function() {
            var form = layui.form;
            var $ = layui.jquery;
            var USERNAME, USERINFOCODE;

            //监听提交
            form.on('submit(formDemo)', function(data) {

                var param = data.field;
                USERNAME = param.USERNAME;
                USERINFOCODE = param.USERINFOCODE;

                $.ajax({                    
                    // type:   "POST",
                    // url: baseUrl_ys + "/API/ArchivesManager/NoLogin/GetUserInfo",
                    // contentType: 'application/json',
                    //          
                    // data: {
                    //     "keyValue": param.USERINFOCODE,
                    //     "keyValue2": param.USERNAME
                    // },
                    url: baseUrl_ys + "/API/ArchivesManager/NoLogin/GetUserInfo",
                    'data': JSON.stringify({
                        "keyValue": param.USERINFOCODE,
                        "keyValue2": param.USERNAME
                    }),
                    'type': 'POST',
                    'processData': false,
                    'contentType': 'application/json',
                    success:   function (jsonResult)  { 
                        console.log(jsonResult);
                        if (jsonResult.code == 400) {
                            return layer.msg(jsonResult.info, {
                                icon: 2,
                                time: 2000
                            }, function() {

                            });
                        } else {
                            $scope.$apply(function() {
                                $scope.userInfo = jsonResult.data;
                            });
                        }
                    },
                    error:   function (data)  {                      
                        alert("请求失败");                    
                    }                
                });
                return false;
            });

            //点击重置
            $scope.reset = function() {
                $scope.userInfo = null
                layui.form.render();

            }


        })




    })

    //了解更多-公司简介
    jkApp.controller('companyProfileCtrl', function($scope, $location, $routeParams, $sce) {


            $scope.imageUrl = imageUrl;
            systeminfo();

            //获取基本信息
            function systeminfo() {
                $.ajax({
                    url: baseUrl + "/systeminfo/queryAll",
                    success: function(result) {
                        $scope.$apply(function() {
                            $scope.info = result.data[0];
                            $scope.html = $sce.trustAsHtml(result.data[0].description);
                        });
                    }
                });
            }

        })
        //用户业务办理进度
    jkApp.controller('dealWithProgressCtrl', function($scope, $location, $routeParams, $sce) {
            layui.use(['form', 'layedit', 'laydate', 'table'], function() {
                var form = layui.form;
                var table = layui.table;

                var layer = layui.layer;
                var layedit = layui.layedit;
                var laydate = layui.laydate;
                table.render({
                    elem: '#demo',
                    id: 'testReload',
                    height: 312,
                    url: baoZhuangBaseUrl + 'ArchivesManage/User/WebAPI/OfficiaWebsite.ashx' //数据接口
                        ,
                    page: true //开启分页
                        ,
                    request: {
                        pageName: 'page' //页码的参数名称，默认：page
                            ,
                        limitName: 'rows' //每页数据量的参数名，默认：limit

                    },
                    where: {
                        OPType: "GetDataPageListForAddUser",
                        USERTYPE: 1,
                        "SOURCE": "PC"
                    },
                    parseData: function(res) { //res 即为原始返回的数据
                        return {
                            "code": res.ErrCode, //解析接口状态
                            "msg": res.Data, //解析提示文本
                            "count": res.total, //解析数据长度
                            "data": res.rows //解析数据列表
                        };
                    },
                    cols: [
                        [ //表头
                            // { field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left' },
                            { field: 'BZNUMBER', title: '申请编号', align: "center" },
                            { field: 'USERNAME', title: '申请人名称', align: "center" },
                            { field: 'USERADDRESS', title: '地址', align: "center" },
                            { field: 'TELPHONE', title: '手机号', align: "center" },
                            { field: 'CARDNO', title: '身份证号', align: "center" },
                            {
                                field: 'STATE',
                                title: '最新进度',
                                align: "center",
                                templet: function(d) {
                                    if (d.STATE == 0) {
                                        return '未受理'
                                    } else if (d.STATE == 1) {
                                        return '已受理'
                                    } else if (d.STATE == 2) {
                                        return '拒绝'
                                    }


                                }
                            }, { title: '照片', align: "center", toolbar: '#barDemo' }
                        ]
                    ]
                });
                //监听单元格事件
                table.on('tool(test)', function(obj) {
                    var data = obj.data;
                    if (obj.event === 'openImage') {
                        console.log(data);
                        var imageList = data.IMAGEURL;
                        imageList = imageList.split(',')
                        var html = ""
                        if (imageList.length > 0) {
                            html = '<div style="display:flex;min-width:200px;" >'
                            for (var index = 0; index < imageList.length; index++) {

                                html += '<img src="' + imageList[index] + '"  class="layui-upload-img">'
                            }
                            html += '</div>'
                        }
                        layer.open({
                            title: '照片',
                            type: 1,
                            content: html
                        });
                    }
                });

                //点击查询
                $scope.searchQuery = function() {
                    var USERNAME = $('.layui-input-userName').val()
                    var TELPHONE = $('.layui-input-phone').val()
                    table.reload('testReload', {
                        url: baoZhuangBaseUrl + 'ArchivesManage/User/WebAPI/OfficiaWebsite.ashx'
                            // ,methods:"post"
                            ,
                        request: {
                            pageName: 'page' //页码的参数名称，默认：page
                                ,
                            limitName: 'rows' //每页数据量的参数名，默认：limit
                        },
                        where: {
                            OPType: "GetDataPageListForAddUser",
                            USERNAME: USERNAME,
                            TELPHONE: TELPHONE,
                            USERTYPE: 1,
                            SOURCE: "PC"
                        },
                        parseData: function(res) { //res 即为原始返回的数据
                            return {
                                "code": res.ErrCode, //解析接口状态
                                "msg": res.Data, //解析提示文本
                                "count": res.total, //解析数据长度
                                "data": res.rows //解析数据列表
                            };
                        },
                        page: {
                            curr: 1
                        }
                    });

                }
            });




        })
        //单位业务办理进度
    jkApp.controller('dealWithProgressUnitCtrl', function($scope, $location, $routeParams, $sce) {
            layui.use(['form', 'layedit', 'laydate', 'table'], function() {
                var form = layui.form;
                var table = layui.table;

                var layer = layui.layer;
                var layedit = layui.layedit;
                var laydate = layui.laydate;
                table.render({
                    elem: '#demo',
                    id: 'testReload',
                    height: 312,
                    url: baoZhuangBaseUrl + 'ArchivesManage/User/WebAPI/OfficiaWebsite.ashx' //数据接口
                        ,
                    page: true //开启分页
                        ,
                    request: {
                        pageName: 'page' //页码的参数名称，默认：page
                            ,
                        limitName: 'rows' //每页数据量的参数名，默认：limit

                    },
                    where: {
                        OPType: "GetDataPageListForAddUser",
                        USERTYPE: 2,
                        SOURCE: "PC"
                    },
                    parseData: function(res) { //res 即为原始返回的数据
                        return {
                            "code": res.ErrCode, //解析接口状态
                            "msg": res.Data, //解析提示文本
                            "count": res.total, //解析数据长度
                            "data": res.rows //解析数据列表
                        };
                    },
                    cols: [
                        [ //表头
                            // { field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left' },
                            { field: 'BZNUMBER', title: '申请编号', align: "center" },
                            { field: 'USERNAME', title: '企业名称', align: "center" },
                            { field: 'USERADDRESS', title: '企业地址', align: "center" },
                            { field: 'TELPHONE', title: '手机号', align: "center" },
                            { field: 'CARDNO', title: '信用代码', align: "center" },
                            {
                                field: 'STATE',
                                title: '最新进度',
                                align: "center",
                                templet: function(d) {
                                    if (d.STATE == 0) {
                                        return '未受理'
                                    } else if (d.STATE == 1) {
                                        return '已受理'
                                    } else if (d.STATE == 2) {
                                        return '拒绝'
                                    }


                                }
                            }, { title: '照片', align: "center", toolbar: '#barDemo' }
                        ]
                    ]
                });
                //监听单元格事件
                table.on('tool(test)', function(obj) {
                    var data = obj.data;
                    if (obj.event === 'openImage') {
                        console.log(data);
                        var imageList = data.IMAGEURL;
                        imageList = imageList.split(',')
                        var html = ""
                        if (imageList.length > 0) {
                            html = '<div style="display:flex;min-width:200px;" >'
                            for (var index = 0; index < imageList.length; index++) {

                                html += '<img src="' + imageList[index] + '"  class="layui-upload-img">'
                            }
                            html += '</div>'
                        }
                        layer.open({
                            title: '照片',
                            type: 1,
                            content: html
                        });
                    }
                });

                //点击查询
                $scope.searchQuery = function() {
                    var USERNAME = $('.layui-input-userName').val()
                    var TELPHONE = $('.layui-input-phone').val()
                    table.reload('testReload', {
                        url: baoZhuangBaseUrl + 'ArchivesManage/User/WebAPI/OfficiaWebsite.ashx'
                            // ,methods:"post"
                            ,
                        request: {
                            pageName: 'page' //页码的参数名称，默认：page
                                ,
                            limitName: 'rows' //每页数据量的参数名，默认：limit
                        },
                        where: {
                            OPType: "GetDataPageListForAddUser",
                            USERNAME: USERNAME,
                            TELPHONE: TELPHONE,
                            USERTYPE: 2,
                            SOURCE: "PC"
                        },
                        parseData: function(res) { //res 即为原始返回的数据
                            return {
                                "code": res.ErrCode, //解析接口状态
                                "msg": res.Data, //解析提示文本
                                "count": res.total, //解析数据长度
                                "data": res.rows //解析数据列表
                            };
                        },
                        page: {
                            curr: 1
                        }
                    });

                }
            });




        })
        //信息变更
    jkApp.controller('InformationChangesCtrl', function($scope, $location, $routeParams, $sce) {
            layui.use(['form', 'upload'], function() {
                var form = layui.form;
                var $ = layui.jquery,
                    upload = layui.upload;
                var IMAGEURL = []
                var index = 0;
                //监听提交
                form.on('submit(formDemo1)', function(data) {

                    var param = data.field;
                    USERNAME = param.USERNAME;
                    USERINFOCODE = param.USERINFOCODE;

                    $.ajax({                    
                        type:   "POST",
                        url: baoZhuangBaseUrl + "/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx",
                        contentType:   "application/x-www-form-urlencoded",
                        dataType: 'JSON',
                                 
                        data: {
                            "OPType": "GetUserInfoByCode",
                            "USERNAME": param.USERNAME,
                            "USERINFOCODE": param.USERINFOCODE,
                            "SOURCE": "PC"

                        },

                        success:   function (jsonResult)  { 
                            if (jsonResult.Data.length == 0) {
                                return layer.msg('未获取到用户信息', {
                                    icon: 2,
                                    time: 2000
                                }, function() {

                                });
                            } else {
                                $scope.$apply(function() {
                                    $scope.userInfo = jsonResult.Data[0];
                                });
                                form.val('component-form-group', {
                                    "USERNAME": jsonResult.Data[0].USERNAME,
                                    "USERADDRESS": jsonResult.Data[0].USERADDRESS,
                                    "CONTECT": jsonResult.Data[0].CONTECT,
                                    "IDENTITYVALUE": jsonResult.Data[0].IDENTITYVALUE,
                                    "METERCALNAME": jsonResult.Data[0].METERCALNAME,
                                    "USEWATERTYPENAME": jsonResult.Data[0].USEWATERTYPENAME,

                                });

                            }
                        },
                        error:   function (data)  {                      
                            alert("请求失败");                    
                        }                
                    });
                    return false;
                });
                //普通图片上传
                var uploadInst = upload.render({
                    elem: '#test1',
                    url: baseUrl + '/upload/imgUpload',
                    accept: 'images',
                    size: 50000,
                    before: function(obj) {
                        index += 1;
                        obj.preview(function(index, file, result) {

                            // $('#demo1').attr('src', result);
                            $('#demo2').append('<div class="upload_div" id="upload_' + index + '"><img src="' + result + '" alt="' + file.name + '" class="layui-upload-img"></div>')
                        });
                    },
                    done: function(res) {
                        //如果上传失败
                        if (res.code == 10000) {
                            return layer.msg("上传成功!!", {
                                icon: 6,
                                time: 500
                            }, function() {

                            });

                        }
                        //上传成功
                        // var demoText = $('#demoText');
                        // demoText.html('<span style="color: #4cae4c;">上传成功</span>');

                        var fileupload = $(".image");
                        fileupload.attr("value", res.data);
                        IMAGEURL.push(imageUrl + res.data)
                        console.log(fileupload.attr("value"));
                    },
                    error: function() {
                        //演示失败状态，并实现重传
                        var demoText = $('#demoText');
                        demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                        demoText.find('.demo-reload').on('click', function() {
                            uploadInst.upload();
                        });
                    }
                });

                //监听提交
                //监听提交
                form.on('submit(formDemo)', function(data) {
                    // layer.msg(JSON.stringify(data.field));
                    var param = data.field;
                    if ($scope.userInfo.USERNAME != param.USERNAME) {
                        editUserInfo("USERNAME", $scope.userInfo.USERNAME, param.USERNAME)
                    }
                    if ($scope.userInfo.USERADDRESS != param.USERADDRESS) {
                        editUserInfo("USERADDRESS", $scope.userInfo.USERADDRESS, param.USERADDRESS)
                    }
                    if ($scope.userInfo.CONTECT != param.CONTECT) {
                        editUserInfo("CONTECT", $scope.userInfo.CONTECT, param.CONTECT)
                    }
                    if ($scope.userInfo.IDENTITYVALUE != param.IDENTITYVALUE) {
                        editUserInfo("IDENTITYVALUE", $scope.userInfo.IDENTITYVALUE, param.IDENTITYVALUE)
                    }
                    if ($scope.userInfo.USEWATERTYPENAME != param.USEWATERTYPENAME) {
                        editUserInfo("USEWATERTYPENAME", $scope.userInfo.USEWATERTYPENAME, param.USEWATERTYPENAME)
                    }
                    if ($scope.userInfo.METERCALNAME != param.METERCALNAME) {
                        editUserInfo("METERCALNAME", $scope.userInfo.METERCALNAME, param.METERCALNAME)
                    }


                    return false;
                });

                function editUserInfo(MODIFYTYPE, BEFOREVALUE, AFTERVALUE) {
                    $.ajax({                    
                        type:   "POST",
                        url: baoZhuangBaseUrl + "/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx",
                        contentType:   "application/x-www-form-urlencoded",
                        dataType: 'JSON',
                                 
                        data: {
                            "OPType": "MODIFYUSER",
                            "USERINFOID": $routeParams.USERINFOID,
                            "MODIFYTYPE": MODIFYTYPE,
                            "BEFOREVALUE": BEFOREVALUE,
                            "AFTERVALUE": AFTERVALUE,
                            "SOURCE": "PC"

                        },

                        success:   function (jsonResult)  {                        
                            layer.msg("提交成功!!!", {
                                icon: 6,
                                time: 500
                            }, function() {
                                // $("#uesrBaozhang")[0].reset();
                                // $('#demo1').attr('src', '');
                                // layui.form.render();
                            });                                
                        },
                        error:   function (data)  {                      
                            alert("请求失败");                    
                        }                
                    });
                }
                $scope.opneRemove = function(index) {

                    console.log(index);

                }


            });




        })
        //单位新装申请
    jkApp.controller('theNewUnitCtrl', function($scope, $location, $routeParams, $sce) {
            layui.use(['form', 'upload'], function() {
                var form = layui.form;
                var $ = layui.jquery,
                    upload = layui.upload;
                var IMAGEURL = [];
                //普通图片上传
                var uploadInst = upload.render({
                    elem: '#test1',
                    url: baseUrl + '/upload/imgUpload',
                    accept: 'images',
                    size: 50000,
                    before: function(obj) {

                        obj.preview(function(index, file, result) {

                            $('#demo2').append('<div class="upload_div" id="upload_' + index + '"><img src="' + result + '" alt="' + file.name + '" class="layui-upload-img"></div>')
                        });
                    },
                    done: function(res) {
                        // //如果上传失败
                        // if (res.code == 10000) {
                        //     return layer.msg('上传失败');
                        // }
                        //上传成功
                        if (res.code == 10000) {
                            layer.msg('上传成功');
                        }
                        var demoText = $('#demoText');
                        demoText.html('<span style="color: #4cae4c;">上传成功</span>');

                        var fileupload = $(".image");
                        fileupload.attr("value", res.data);
                        IMAGEURL.push(imageUrl + res.data)
                        console.log(fileupload.attr("value"));
                    },
                    error: function() {
                        //演示失败状态，并实现重传
                        var demoText = $('#demoText');
                        demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                        demoText.find('.demo-reload').on('click', function() {
                            uploadInst.upload();
                        });
                    }
                });

                //监听提交
                form.on('submit(formDemo)', function(data) {
                    // layer.msg(JSON.stringify(data.field));
                    var param = data.field;


                    $.ajax({                    
                        type:   "POST",
                        url: baoZhuangBaseUrl + "/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx",
                        contentType:   "application/x-www-form-urlencoded",
                        dataType: 'JSON',
                                 
                        data: {
                            "OPType": "ADDUSER",
                            "USERNAME": filterXSS(param.USERNAME),
                            "USERADDRESS": filterXSS(param.USERADDRESS),
                            "TELPHONE": filterXSS(param.TELPHONE),
                            "CARDNO": filterXSS(param.CARDNO),
                            "IMAGEURL": filterXSS(IMAGEURL.toString()),
                            "USERTYPE": 2,
                            "SOURCE": "PC"
                        },

                        success:   function (jsonResult)  {                        
                            layer.msg("提交成功!!!", {
                                icon: 6,
                                time: 500
                            }, function() {
                                $("#uesrBaozhang")[0].reset();
                                $('#demo2').html('');
                                layui.form.render();
                            });                                
                        },
                        error:   function (data)  {                      
                            alert("请求失败");                    
                        }                
                    });
                    return false;
                });

                //点击重置
                $scope.reset = function() {
                    $("#uesrBaozhang")[0].reset();
                    $('#demo2').html('');
                    layui.form.render();

                }
            });



        })
        //联系我们
    jkApp.controller('contactUsCtrl', function($scope, $location, $routeParams, $sce) {
            layui.use(['form', 'upload'], function() {
                var form = layui.form;
                var $ = layui.jquery;


                //监听提交
                form.on('submit(formDemo)', function(data) {
                    var param = data.field;
                    var data = {
                        "feedbackName": filterXSS(param.feedbackName),
                        "feedbackPhone": filterXSS(param.feedbackPhone),
                        "email": filterXSS(param.email),
                        "content": filterXSS(param.content)
                    }
                    $.ajax({                    
                        type:   "POST",
                        url: baseUrl + "/feedback/save",
                        contentType:   "application/json",
                                 
                        data: JSON.stringify({
                            "feedbackName": filterXSS(param.feedbackName),
                            "feedbackPhone": filterXSS(param.feedbackPhone),
                            "email": filterXSS(param.email),
                            "content": filterXSS(param.content)
                        }),

                        success:   function (jsonResult)  {                        
                            layer.msg("提交成功!!!", {
                                icon: 6,
                                time: 500
                            }, function() {
                                $("#uesrBaozhang")[0].reset();
                                $('#demo2').html('');
                                layui.form.render();
                            });                                
                        },
                        error:   function (data)  {                      
                            alert("请求失败");                    
                        }                
                    });
                    return false;
                });

                //点击重置
                $scope.reset = function() {
                    $("#uesrBaozhang")[0].reset();
                    layui.form.render();

                }
            });



        })
        //报修

    jkApp.controller('repairsCtrl', function($scope, $location, $routeParams, $sce) {
            layui.use(['form', 'upload'], function() {
                var form = layui.form;
                var $ = layui.jquery,
                    upload = layui.upload;
                var ImageData = []
                var token = "";
                getToken()

                //监听提交
                form.on('submit(formDemo)', function(data) {
                    // layer.msg(JSON.stringify(data.field));
                    var param = data.field;


                    var dataInfo = JSON.stringify({
                        dispatchDirectly: false,
                        accessToken: token,
                        JointOperId: [],
                        apiKey: "KHAa0Xeu29upqukclXqh",
                        urgencyId: 2,
                        reportUserType: 1,
                        fromId: 10,
                        typeId: 243,
                        reportUserNo: "XT_html",
                        title: param.title,
                        description: "上报人" + param.nick + '  联系方式' + param.phone + '  ' + param.description,
                        address: param.address
                    })
                    $.ajax({                    
                        type:   "POST",
                        url: baseUrl_gis + "/public/workorder/create",
                        contentType:   "application/json",

                        headers: { 'AccessToken': token },
                        data: JSON.stringify({
                            data: dataInfo
                        }),

                        success:   function (jsonResult)  {   
                            if (jsonResult.code == 200) {
                                layer.msg("提交成功!!!", {
                                    icon: 6,
                                    time: 500
                                }, function() {
                                    $("#zxtsForm")[0].reset()
                                    layui.form.render();
                                });   
                            } else {   
                                return layer.msg(jsonResult.info);                  
                            }                             
                        },
                        error:   function (data)  {                      
                            alert("请求失败");                    
                        }                
                    });
                    return false;
                });

                function getToken() {
                    $.ajax({                    
                        type:   "POST",
                        url: baseUrl_yth + "api/SystemMoule/Account/login",
                        contentType:   "application/json",
                                 
                        data: JSON.stringify({
                            password: "qazwsx123",
                            username: "HTML"
                        }),

                        success:   function (jsonResult)  {  
                            token = jsonResult.data.accessToken;
                        },
                        error:   function (data)  {                      
                            alert("请求失败");                    
                        }                
                    });
                }
                //点击重置
                $scope.reset = function() {
                    $("#zxtsForm")[0].reset();
                    layui.form.render();

                }
            });



        })
        //咨询投诉
    jkApp.controller('complaintsCtrl', function($scope, $location, $routeParams, $sce) {
            layui.use(['form', 'upload'], function() {
                var form = layui.form;
                var $ = layui.jquery,
                    upload = layui.upload;
                var ImageData = []
                var token = "";
                getToken()

                //监听提交
                form.on('submit(formDemo)', function(data) {
                    // layer.msg(JSON.stringify(data.field));
                    var param = data.field;

                    var dataInfo = JSON.stringify({
                        dispatchDirectly: false,
                        accessToken: token,
                        JointOperId: [],
                        apiKey: "KHAa0Xeu29upqukclXqh",
                        urgencyId: 2,
                        reportUserType: 1,
                        fromId: 10,
                        typeId: 242,
                        reportUserNo: "XT_html",
                        title: param.title,
                        description: "上报人" + param.nick + '  联系方式' + param.phone + '  ' + param.description,
                        address: param.address
                    })

                    $.ajax({                    
                        type:   "POST",
                        url: baseUrl_gis + "/public/workorder/create",
                        contentType:   "application/json",

                        headers: { 'AccessToken': token },
                        data: JSON.stringify({
                            data: dataInfo
                        }),

                        success:   function (jsonResult)  {   
                            if (jsonResult.code == 200) {
                                layer.msg("提交成功!!!", {
                                    icon: 6,
                                    time: 500
                                }, function() {
                                    $("#zxtsForm")[0].reset()
                                    layui.form.render();
                                });   
                            } else {   
                                return layer.msg(jsonResult.info);                  
                            }                             
                        },
                        error:   function (data)  {                      
                            alert("请求失败");                    
                        }                
                    });
                    return false;
                });

                function getToken() {
                    $.ajax({                    
                        type:   "POST",
                        url: baseUrl_yth + "api/SystemMoule/Account/login",
                        contentType:   "application/json",
                                 
                        data: JSON.stringify({
                            password: "qazwsx123",
                            username: "HTML"
                        }),

                        success:   function (jsonResult)  {  
                            token = jsonResult.data.accessToken;
                        },
                        error:   function (data)  {                      
                            alert("请求失败");                    
                        }                
                    });
                }
                //点击重置
                $scope.reset = function() {
                    $("#zxtsForm")[0].reset();
                    layui.form.render();

                }
            });



        })
        //用户报装
    jkApp.controller('theBusinessApplicationCtrl', function($scope, $location, $routeParams, $sce) {
            layui.use(['form', 'upload'], function() {
                var form = layui.form;
                var $ = layui.jquery,
                    upload = layui.upload;
                var IMAGEURL = [];
                var ImageData = []
                    //普通图片上传
                var uploadInst = upload.render({
                    elem: '#test1',
                    url: baseUrl_API_BZLC + '/Wfms/Overt/WeChart/PublicAccount/Handle/File/UploadNoInsId',
                    accept: 'images',
                    size: 50000,
                    before: function(obj) {
                        if (!$("#phone").val()) {
                            return layer.msg('请填写手机号');
                        }
                        var files = this.files = obj.pushFile();
                        var fileName;
                        var fileSize;
                        var i = 0;
                        var j = 0;
                        for (var key in files) {
                            i++;
                            fileName = files[key].name;
                            fileSize = files[key].size;
                        }
                        this.data = {
                            'SystemMark': "XtWeChart",
                            'WeChatOpenId': "110",
                            'NodeId': "1679",
                            'FileRuleId': "0",
                            'FileName': fileName,
                            'FileLength': fileSize,
                        }; //关键代码
                        obj.preview(function(index, file, result) {
                            $('#demo2').append('<div class="upload_div" id="upload_' + index + '" style="margin-right:20px"><img src="' + result + '" alt="' + file.name + '" class="layui-upload-img"></div>')
                        });

                    },
                    done: function(res) {
                        // //如果上传失败

                        //上传成功
                        if (res.Result == 1) {
                            layer.msg('上传成功');
                        }
                        var demoText = $('#demoText');
                        demoText.html('<span style="color: #4cae4c;">上传成功</span>');

                        var fileupload = $(".image");
                        fileupload.attr("value", res.Data);
                        ImageData.push(res.Data)
                        console.log(fileupload.attr("value"));
                    },
                    error: function() {
                        //演示失败状态，并实现重传
                        var demoText = $('#demoText');
                        demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                        demoText.find('.demo-reload').on('click', function() {
                            uploadInst.upload();
                        });
                    }
                });

                //监听提交
                form.on('submit(formDemo)', function(data) {
                    // layer.msg(JSON.stringify(data.field));
                    var param = data.field;


                    $.ajax({                    
                        type:   "POST",
                        url: baseUrl_API_BZLC + "/Wfms/Overt/WeChart/PublicAccount/Handle/Submit/QuickStart",
                        contentType:   "application/json",
                                 
                        data: JSON.stringify({
                            SystemMark: "MeiShanWz",
                            OtherOperId: param.phone, //用户openId
                            OtherOperName: "眉山网站", //用户昵称
                            Entity: {
                                FlowId: 1017,
                                NodeId: 1679,
                                Datas: [{
                                        DataCode: "InsCode",
                                        DataGroup: 0,
                                        DataValue: nowTime() //项目ID
                                    },
                                    {
                                        DataCode: "ProjectType",
                                        DataGroup: 0,
                                        DataValue: 1 //项目类型
                                    },
                                    {
                                        DataCode: "UserAddress",
                                        DataGroup: 1,
                                        DataValue: param.site //地址
                                    },
                                    {
                                        DataCode: "ProjectAddress",
                                        DataGroup: 0,
                                        DataValue: param.site //项目地址
                                    },
                                    {
                                        DataCode: "UserName",
                                        DataGroup: 1,
                                        DataValue: param.contacts //联系人
                                    },
                                    {
                                        DataCode: "UserLiaison",
                                        DataGroup: 0,
                                        DataValue: param.contacts //用户联系人
                                    },
                                    {
                                        DataCode: "ProjectName",
                                        DataGroup: 0,
                                        DataValue: param.contacts //项目联系人
                                    },
                                    {
                                        DataCode: "UserLiaisonContact",
                                        DataGroup: 0,
                                        DataValue: param.phone //用户联系电话
                                    },
                                    {
                                        DataCode: "UserIdCard",
                                        DataGroup: 1,
                                        DataValue: param.number //用户身份证号
                                    },
                                    {
                                        DataCode: "UserLiaisonIdCard",
                                        DataGroup: 0,
                                        DataValue: param.number //用户联络人身份证号
                                    },
                                    {
                                        DataCode: "UserHouseCertificateNo",
                                        DataGroup: 0,
                                        DataValue: param.addedValue //用户房屋产权证编号
                                    },
                                    {
                                        DataCode: "UserTaxId",
                                        DataGroup: 0,
                                        DataValue: param.number //用户纳税人识别号
                                    },    
                                    { 
                                        DataCode: "ProjectOrgNo",
                                        DataGroup:  0,
                                        DataValue:   "10000"          
                                    }
                                ],
                                Files: ImageData.map(el => el.FileId)
                            }
                        }),

                        success:   function (jsonResult)  {                        
                            layer.msg("提交成功!!!", {
                                icon: 6,
                                time: 500
                            }, function() {
                                $("#uesrBaozhang")[0].reset();
                                $('#demo2').html('');
                                layui.form.render();
                            });                                
                        },
                        error:   function (data)  {                      
                            alert("请求失败");                    
                        }                
                    });
                    return false;
                });

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
                $scope.reset = function() {
                    $("#uesrBaozhang")[0].reset();
                    $('#demo2').html('');
                    layui.form.render();

                }
            });



        })
        //用户新装申请
    jkApp.controller('usersNewClothesCtrl', function($scope, $location, $routeParams, $sce) {
        layui.use(['form', 'upload'], function() {
            var form = layui.form;
            var $ = layui.jquery,
                upload = layui.upload;
            var IMAGEURL = [];
            //普通图片上传
            var uploadInst = upload.render({
                elem: '#test1',
                url: baseUrl + '/upload/imgUpload',
                accept: 'images',
                size: 50000,
                before: function(obj) {

                    obj.preview(function(index, file, result) {

                        $('#demo2').append('<div class="upload_div" id="upload_' + index + '"><img src="' + result + '" alt="' + file.name + '" class="layui-upload-img"></div>')
                    });
                },
                done: function(res) {
                    // //如果上传失败
                    // if (res.code == 10000) {
                    //     return layer.msg('上传失败');
                    // }
                    //上传成功
                    if (res.code == 10000) {
                        layer.msg('上传成功');
                    }
                    var demoText = $('#demoText');
                    demoText.html('<span style="color: #4cae4c;">上传成功</span>');

                    var fileupload = $(".image");
                    fileupload.attr("value", res.data);
                    IMAGEURL.push(imageUrl + res.data)
                    console.log(fileupload.attr("value"));
                },
                error: function() {
                    //演示失败状态，并实现重传
                    var demoText = $('#demoText');
                    demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                    demoText.find('.demo-reload').on('click', function() {
                        uploadInst.upload();
                    });
                }
            });

            //监听提交
            form.on('submit(formDemo)', function(data) {
                // layer.msg(JSON.stringify(data.field));
                var param = data.field;


                $.ajax({                    
                    type:   "POST",
                    url: baoZhuangBaseUrl + "/ArchivesManage/User/WebAPI/OfficiaWebsite.ashx",
                    contentType:   "application/x-www-form-urlencoded",
                    dataType: 'JSON',
                             
                    data: {
                        "OPType": "ADDUSER",
                        "USERNAME": filterXSS(param.USERNAME),
                        "USERADDRESS": filterXSS(param.USERADDRESS),
                        "TELPHONE": filterXSS(param.TELPHONE),
                        "CARDNO": filterXSS(param.CARDNO),
                        "IMAGEURL": filterXSS(IMAGEURL.toString()),
                        "USERTYPE": 1,
                        "SOURCE": "PC"
                    },

                    success:   function (jsonResult)  {                        
                        layer.msg("提交成功!!!", {
                            icon: 6,
                            time: 500
                        }, function() {
                            $("#uesrBaozhang")[0].reset();
                            $('#demo2').html('');
                            layui.form.render();
                        });                                
                    },
                    error:   function (data)  {                      
                        alert("请求失败");                    
                    }                
                });
                return false;
            });

            //点击重置
            $scope.reset = function() {
                $("#uesrBaozhang")[0].reset();
                $('#demo2').html('');
                layui.form.render();

            }
        });



    })

    //政策法规
    jkApp.controller('statutoryCtrl', function($scope, $location, $routeParams, $sce) {
            //获取政策法规详情

            $scope.imageUrl = imageUrl;
            policefindById();

            function policefindById() {
                $.ajax({
                    url: baseUrl + "/police/findById?id=" + $routeParams.id,
                    success: function(result) {
                        $scope.$apply(function() {
                            $scope.dataInfo = result.data;
                            $scope.html = $sce.trustAsHtml(result.data.content);
                            if (result.data.fileAddr) {
                                var resources = JSON.parse(result.data.fileAddr);
                                var arr = [];
                                for (var i = 0; i < resources.length; i++) {
                                    var str = resources[i].split("/");
                                    str = str[0] + "/" + str[1] + "/" + str[2] + "/";
                                    a = resources[i].replace(str, '');

                                    arr[i] = { "url": resources[i], "url1": a }
                                }

                                $scope.fjData = arr
                            } else {
                                $scope.fjData = []
                            }

                        });
                    }
                });
            }
            //点击下载
            $scope.openDown = function(item) {
                window.open(fileUrl + item.url);

            }
            $scope.yulan = function(item) {
                window.open("https://view.xdocin.com/xdoc?_xdoc=" + fileUrl + item.url);
            }
        })
        //新闻公告
    jkApp.controller('detailsNoticeCtrl', function($scope, $location, $routeParams, $sce) {
            //获取新闻公告详情

            $scope.imageUrl = imageUrl;
            noticefindById();

            function noticefindById() {
                $.ajax({
                    url: baseUrl + "/notice/findById?id=" + $routeParams.id,
                    success: function(result) {
                        $scope.$apply(function() {
                            $scope.dataInfo = result.data;
                            $scope.html = $sce.trustAsHtml(result.data.content);
                            if (result.data.attachment) {
                                $scope.fjData = JSON.parse(result.data.attachment)
                            } else {
                                $scope.fjData = []
                            }

                        });
                    }
                });
            }


            //点击下载
            $scope.openDown = function(item) {

                window.open(fileUrl + item);

            }

        })
        //业务处理
    jkApp.controller('handlingCtrl', function($scope, $location, $routeParams, $sce) {
            //获取业务处理详情

            $scope.imageUrl = imageUrl;
            businessHandlingfindById();

            function businessHandlingfindById() {
                $.ajax({
                    url: baseUrl + "/businessHandling/findById?id=" + $routeParams.id,
                    success: function(result) {
                        $scope.$apply(function() {
                            $scope.dataInfo = result.data;
                            $scope.html = $sce.trustAsHtml(result.data.content);
                            if (result.data.attachment) {
                                $scope.fjData = JSON.parse(result.data.attachment)
                            } else {
                                $scope.fjData = []
                            }

                        });
                    }
                });
            }


            //点击下载
            $scope.openDown = function(item) {
                window.open(fileUrl + item);

            }

        })
        //新闻详情
    jkApp.controller('detailCtrl', function($scope, $location, $routeParams, $sce) {
            //获取栏目类别

            $scope.imageUrl = imageUrl;
            console.log($routeParams.start);
            if ($routeParams.start) {
                var param = {
                    columncategoryid: $routeParams.id,
                    page: 1,
                    size: 20
                }

                $.ajax({
                    url: baseUrl + "/news/queryBy",
                    type: 'post',
                    data: JSON.stringify(param),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    success: function(result) {
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
                    url: baseUrl + "/news/findById?id=" + id,
                    success: function(result) {
                        $scope.$apply(function() {
                            $scope.dataInfo = result.data;
                            $scope.html = $sce.trustAsHtml(result.data.content);
                            if (result.data.attachment) {
                                var resources = JSON.parse(result.data.attachment);
                                var arr = [];
                                for (var i = 0; i < resources.length; i++) {
                                    var str = resources[i].split("/");
                                    str = str[0] + "/" + str[1] + "/" + str[2] + "/";
                                    a = resources[i].replace(str, '');

                                    arr[i] = { "url": resources[i], "url1": a }
                                }
                                $scope.fjData = arr

                            } else {
                                $scope.fjData = []
                            }

                        });
                    }
                });
            }


            //点击下载
            $scope.openDown = function(item) {
                window.open(fileUrl + item.url);

            }
            $scope.opendetails = function(id) {
                $location.path("/detail").search({
                    id: id
                });
            }
            $scope.yulan = function(item) {
                window.open("https://view.xdocin.com/xdoc?_xdoc=" + fileUrl + item.url);
            }
        })
        //新闻列表
    jkApp.controller('newCtrl', function($scope, $location, $routeParams) {
            //获取栏目类别
            var page = 1;
            var total = 1;
            var box;
            getNewsList();　
            box = new CustomPagination('#page', {
                total: Math.ceil(total / 10), //总页数
                changePage: function(pageNum) { //切换页码成功回调
                    page = pageNum;
                    getNewsList();
                }
            });

            $scope.imageUrl = imageUrl;
            $scope.title = $routeParams.name;


            function getNewsList() {
                var param = {
                    columncategoryid: $routeParams.id,
                    page: page,
                    size: 20,
                    isPublish: 1
                }
                $.ajax({
                    url: baseUrl + "/news/queryBy",
                    type: 'post',
                    data: JSON.stringify(param),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    success: function(result) {
                        if (result.data) {
                            page++;
                            $scope.$apply(function() {
                                var dataList = result.data.rows;
                                for (var i = 0; i < dataList.length; i++) {
                                    var createtime = dataList[i].createtime.split(" ");
                                    var time = createtime[0].split("-")
                                    dataList[i].time1 = time[0] + '-' + time[1];
                                    dataList[i].time2 = time[2];
                                }
                                // dataList.map((item) => {
                                // 	var createtime = item.createtime.split(" ");

                                // 	var time = createtime[0].split("-")
                                // 	item.time1 = time[0] + '-' + time[1];
                                // 	item.time2 = time[2];
                                // })
                                $scope.dataList = dataList;
                                box = new CustomPagination('#page', {
                                    total: Math.ceil(result.data.total / 10), //总页数
                                    changePage: function(pageNum) { //切换页码成功回调
                                        page = pageNum;
                                        getNewsList2();
                                    }
                                });
                                boxs = new CustomPagination('#pages', {
                                    total: Math.ceil(result.data.total / 10), //总页数
                                    changePage: function(pageNum) { //切换页码成功回调
                                        page = pageNum;
                                        getNewsList2();
                                    }
                                });
                            });
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
                    url: baseUrl + "/news/queryBy",
                    type: 'post',
                    data: JSON.stringify(param),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    success: function(result) {
                        if (result.data) {
                            page++;
                            $scope.$apply(function() {
                                var dataList = result.data.rows;
                                for (var i = 0; i < dataList.length; i++) {
                                    var createtime = dataList[i].createtime.split(" ");
                                    var time = createtime[0].split("-")
                                    dataList[i].time1 = time[0] + '-' + time[1];
                                    dataList[i].time2 = time[2];
                                }
                                // dataList.map((item) => {
                                // 	var createtime = item.createtime.split(" ");

                                // 	var time = createtime[0].split("-")
                                // 	item.time1 = time[0] + '-' + time[1];
                                // 	item.time2 = time[2];
                                // })
                                $scope.dataList = dataList;

                            });
                        }

                    }
                })
            }
            //点击栏目内容
            $scope.newDetail = function(item) {
                $location.path("/detail").search({
                    id: item
                });

            }

        })
        //头部
    jkApp.controller('headCtrl', function($scope, $location) {
            $scope.imageUrl = imageUrl;
            $scope.focus = 0;
            //获取栏目类别
            treeList();
            activityQueryBy();
            systeminfo();
            $scope.imageUrl = imageUrl;
            var xPos = 20;
            var yPos = document.body.clientHeight;
            var step = 1;
            var delay = 50;
            var height = 0;
            var Hoffset = 0;
            var Woffset = 0;
            var yon = 0;
            var xon = 0;
            var pause = true;
            var interval;
            imgpop.style.top = yPos;

            function changePos() {

                width = document.documentElement.clientWidth;
                height = document.documentElement.clientHeight;
                Hoffset = imgpop.offsetHeight;
                Woffset = imgpop.offsetWidth;
                imgpop.style.left = xPos + document.documentElement.scrollLeft + 'px';
                imgpop.style.top = yPos + document.documentElement.scrollTop + 'px';

                if (yon) {
                    yPos = yPos + step
                } else {
                    yPos = yPos - step;
                }
                if (yPos < 0) {
                    yon = 1;
                    yPos = 0;
                }
                if (yPos >= (height - Hoffset)) {
                    yon = 0;
                    yPos = (height - Hoffset);
                }
                if (xon) {
                    xPos = xPos + step;
                } else {
                    xPos = xPos - step;
                }
                if (xPos < 0) {
                    xon = 1;
                    xPos = 0;
                }
                if (xPos >= (width - Woffset)) {
                    xon = 0;
                    xPos = (width - Woffset);
                }
            }

            function start() {
                imgpop.style.visibility = "visible";
                interval = setInterval(changePos, delay);
            }
            start();

            //设为首页
            $scope.SetHome = function(obj) {
                var url = window.location.href;
                try {
                    obj.style.behavior = 'url(#default#homepage)';
                    obj.setHomePage(url);
                } catch (e) {
                    if (window.netscape) {
                        try {
                            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        } catch (e) {
                            alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
                        }
                    } else {
                        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
                    }
                }
            }




            //收藏本站
            $scope.AddFavorite = function() {
                    var url = window.location.href;
                    var title = $scope.info.companyname;
                    try {
                        window.external.addFavorite(url, title);
                    } catch (e) {
                        try {
                            window.sidebar.addPanel(title, url, "");
                        } catch (e) {
                            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
                        }
                    }
                }
                //点击活动
            $scope.activityClick = function() {

                clearInterval(interval);
                imgpop.style.visibility = 'hidden'
            }
            $scope.activityMouseenter = function() {

                clearInterval(interval)
            }
            $scope.activityOnmouseout = function() {
                    interval = setInterval(changePos, delay)
                }
                //获取栏目内容
            function treeList() {
                $.ajax({
                    url: baseUrl + "/columnCategory/tree/list",
                    success: function(result) {
                        $scope.$apply(function() {
                            $scope.treeList = result.data;
                        });
                    }
                });
            }
            //获取基本信息
            function systeminfo() {
                $.ajax({
                    url: baseUrl + "/systeminfo/queryAll",
                    success: function(result) {
                        $scope.$apply(function() {
                            $scope.info = result.data[0];
                            // 动态配置客网页头名称
                            document.title = $scope.info.companyname
                        });
                    }
                });
            }
            //获取活动信息
            function activityQueryBy() {
                var param = {
                    page: 1,
                    size: 15,
                    title: "",
                    isenable: 1,
                }
                $.ajax({
                    url: baseUrl + "/activity/queryBy",
                    type: 'post',
                    data: JSON.stringify(param),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    success: function(result) {
                        if (result.data) {
                            $scope.$apply(function() {
                                $scope.activityInfo = result.data.rows[0];
                            });
                        }

                    }
                })
            }
            $scope.yrlanmu = function(i) {
                $scope.start = true;
                $scope.focus = i;
            }


            //点击栏目内容
            $scope.newDetail = function(item) {
                $scope.start = false;
                if (item.isjump == 1) {
                    window.location.href = item.urlpath;
                } else {
                    $scope.focus = $scope.focus;
                    if (item.pid != '0') {
                        //跳转列表
                        if (item.istabulation == 1) {
                            $location.path("/new").search({
                                name: item.name,
                                id: item.id
                            });
                        } else {
                            $location.path("/detail").search({
                                id: item.id,
                                start: 1
                            });

                        }
                    }


                }
            }
            $scope.yclanmu = function() {
                    if ($scope.start) {
                        $scope.focus = 0;
                    }

                }
                //点击收藏
            var tag = 1;
            $('.home-collect').click(function() {
                if (tag == 0) {
                    $(this).css('color', 'red');
                    tag = 1;
                } else if (tag == 1) {
                    $(this).css('color', '#0052a6');
                    tag = 0;
                }

            })

            //导航
            $('.head-nav>li').each(function(i, e) {
                $(this).mouseenter(function() {
                    $(this).find('a').addClass('nav-hover');
                    $(this).find('ul').slideDown(1000);
                })
                $(this).mouseleave(function() {
                    $(this).find('a').removeClass('nav-hover');
                    $(this).find('ul').slideUp();
                })
            })
            $('.code-show').hover(function() {
                $('.head-code').slideToggle();
            })

        })
        //尾部
    jkApp.controller('onlinePaymentCtrl', function($scope, $location, $routeParams) {
            $scope.imageUrl = imageUrl;
            systeminfo();
            //获取基本信息
            function systeminfo() {
                $.ajax({
                    url: baseUrl + "/systeminfo/queryAll",
                    success: function(result) {
                        $scope.$apply(function() {
                            $scope.info = result.data[0];
                        });
                    }
                });
            }


        })
        //尾部
    jkApp.controller('footCtrl', function($scope, $location, $routeParams) {
            $scope.imageUrl = imageUrl;
            var tip_index;
            systeminfo();
            columnCategory();
            //获取基本信息
            function systeminfo() {
                $.ajax({
                    url: baseUrl + "/systeminfo/queryAll",
                    success: function(result) {
                        $scope.$apply(function() {
                            $scope.info = result.data[0];
                            $('#foot_companyInfo').mouseenter(function() {
                                tip_index = layer.tips($scope.info.companyinfo,'#foot_companyInfo', { 
                                    tips: [4, "#"],  //1-4表示上右下左四个方向，# 可带背景色
                                    area: ['450px', 'auto'], // 提示框宽高
                                    time: 0,  //自动关闭所需毫秒,0表示不自动关闭}),
                                    success: function (layero, index) {
                                        var oldTop = layero.css("top");
                                        oldTop = oldTop.substring(0,oldTop.indexOf('px'));
                                        layero.css("top", (oldTop-50)+'px');
                                    }
                                });
                            })
                            $('#foot_companyInfo').mouseleave(function() {
                                layer.close(tip_index)
                            }); 
                        });
                    }
                });
            }
            //公司简介
            $scope.learnMore = function() {
                    //跳转列表
                    $location.path("/companyProfile");
                }
                //点击栏目内容
            $scope.newDetail = function(item) {


                if (item.isjump == 1) {
                    window.location.href = item.urlpath;
                } else {
                    if (item.pid != 0) {
                        //跳转列表
                        if (item.istabulation == 1) {
                            $location.path("/new").search({
                                name: item.name,
                                id: item.id
                            });
                        } else {
                            $location.path("/detail").search({
                                id: item.id,
                                start: 1
                            });

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
                    url: baseUrl + "/columnCategory/queryBy",
                    type: 'post',
                    data: JSON.stringify(param),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    success: function(result) {
                        $scope.$apply(function() {
                            $scope.columnCategoryData = result.data;
                        });
                    }
                });
            }
            //小火箭
            $(function() {
                $(".rocket").click(function(e) {
                    TweenMax.to(window, 1.5, {
                        scrollTo: 0,
                        ease: Expo.easeInOut
                    });
                    var huojian = new TimelineLite();
                    huojian.to(".rocket", 1, {
                        y: 0,
                        rotationY: 0,
                        opacity: 1,
                        scale: 1,
                        ease: Expo.easeOut,
                        clearProps: "all"
                    }, "1.4");
                });
            });
        })
        //主页  home
    jkApp.controller('homeCtrl', function($scope, $location, $sce) {
        var swiper;
        swiper(); //获取轮播图
        businessHandlingQueryAll(); //获取业务办理模块
        getHotNew();
        getRecommendList();
        swiperInit();
        getNotice();
        policeTypeQueryAll();
        systeminfo();
        $scope.videoUrl = videoUrl;
        videoQueryAll();
        $scope.imageUrl = imageUrl;
         //视频播放事件
        $scope.videoUrlFun = function(url){
            var urlFun = $sce.trustAsResourceUrl(url);
            return urlFun;
        };


        //获取轮播图
        function swiper() {
            $.ajax({
                url: baseUrl + "/looppic/queryAll",
                success: function(result) {
                    var arr = [];
                    if (result.data.length > 0) {
                        for (var i = 0; i < result.data.length; i++) {
                            if (result.data[i].isshow == 1) {
                                arr.push(result.data[i])
                            }
                        }

                    }

                    $scope.$apply(function() {
                        $scope.swiperData = arr;
                    });
                    //轮播图
                    var mySwiper = new Swiper('.swiper-container1', {
                        //vertical  竖直
                        direction: 'horizontal',
                        //  loop: true,
                        // 如果需要分页器
                        pagination: '.swiper-pagination1',
                        paginationClickable :true, // 点击分页器的指示点,控制Swiper切换
                        // 如果需要前进后退按钮
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        //自动播放
                        autoplay: 3000,
                        //动画效果(cube fade overflow flip)
                        effect: "overflow",
                        // 如果需要滚动条
                        //  scrollbar: '.swiper-scrollbar',
                        onSlideChangeEnd: function(swiper) {
                            //				console.log(swiper.activeIndex); //切换结束时，告诉我现在是第几个slide
                        },
                        observer: true, //修改swiper自己或子元素时，自动初始化swiper
                        observeParents: true, //修改swiper的父元素时，自动初始化swiper
                        onSlideChangeEnd: function(swiper) {
                            swiper.update();
                            // mySwiper.startAutoplay();
                            // mySwiper.reLoop();
                        }
                    })
                }
            });
        }
        //获取业务办理模块
        function businessHandlingQueryAll() {
            $.ajax({
                url: baseUrl + "/businessHandling/queryAll",
                success: function(result) {
                    var arr = [];
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

                    $scope.$apply(function() {
                        $scope.businessHandlingData = arr;
                    });

                }
            });
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
                url: baseUrl + "/news/queryBy",
                type: 'post',
                data: JSON.stringify(param),
                headers: {
                    'Content-Type': 'application/json'
                },
                success: function(result) {
                    $scope.$apply(function() {
                        if (result.data.rows.length > 0) {
                            // $scope.hotData = result.data.rows;
                            $scope.hotData = result.data.rows.splice(0, 4);
                            if (result.data.rows.length > 0) {
                                $scope.titles = result.data.rows[0].title;
                            }

                            swiperInit();
                        } else {
                            $scope.hotData = [];
                        }


                    });

                }
            });
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
                url: baseUrl + "/news/queryBy",
                type: 'post',
                data: JSON.stringify(param),
                headers: {
                    'Content-Type': 'application/json'
                },
                success: function(result) {

                    $scope.$apply(function() {
                        if (result.data.rows.length > 0) {
                            $scope.recommendData = result.data.rows;

                        } else {
                            $scope.recommendData = [];
                        }
                    });





                }
            });
        }
        //根据类型获取公告类型新闻
        function getNotice(typeid) {

            $.ajax({
                url: baseUrl + "/columnCategory/queryNotice?isnotice=1",
                headers: {
                    'Content-Type': 'application/json'
                },
                success: function(result) {

                    $scope.$apply(function() {
                        if (result.data.data.length > 0) {
                            $scope.noticeTypeDate = result.data.data;
                            $scope.noticeTypeQueryAll(result.data.data[0].id)

                        } else {
                            $scope.noticeTypeDate = [];
                        }
                    });





                }
            });
        }
        //获取视频
        function videoQueryAll() {
            var param = {
                page: 1,
                size: 15,
            }
            $.ajax({
                url: baseUrl + "/video/queryAll",
                type: 'get',
                params: param,
                headers: {
                    'Content-Type': 'application/json'
                },
                success: function(result) {
                    $scope.$apply(function() {
                        if (result.data.rows.length > 0) {
                            // 公司简介视频、宣传视频
                            $scope.IntroduceVideoList = result.data.rows.filter(item => item.isIntroduce == 1);
                            $scope.PublicizeVideoList = result.data.rows.filter(item => item.isPublicize == 1);
                        } else {
                            $scope.IntroduceVideoList = [];
                            $scope.PublicizeVideoList = [];
                        }


                    });

                }
            });
        }
        $scope.right_click = function() {
            if(document.querySelector('.announcement_left_title_ul').scrollLeft < $scope.noticeTypeDate.length * 120) {
                $('.announcement_left_title_ul').animate({scrollLeft:'+=140px' });
            }
        }
        $scope.left_click = function() {
            if(document.querySelector('.announcement_left_title_ul').scrollLeft > 0) {
                $('.announcement_left_title_ul').animate({scrollLeft:'-=140px' });
            }
        }
        //获取公告类型
        $scope.noticeTypeQueryAll = function(id) {
                var param = {
                    columncategoryid: id,
                    page: 1,
                    size: 20,
                    isPublish: 1
                }
                $.ajax({
                    url: baseUrl + "/news/queryBy",
                    type: 'post',
                    data: JSON.stringify(param),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    success: function(result) {
                        if (result.data) {

                            $scope.$apply(function() {
                                var dataList = result.data.rows;
                                $scope.noticeData = dataList;

                            });
                        }

                    }
                })
            }
            //获取基本信息
        function systeminfo() {
            $.ajax({
                url: baseUrl + "/systeminfo/queryAll",
                success: function(result) {
                    $scope.$apply(function() {
                        $scope.info = result.data[0];
                    });
                }
            });
        }
        //获取政策法规类型
        function policeTypeQueryAll() {
            $.ajax({
                url: baseUrl + "/policeType/queryAll",
                success: function(result) {

                    $scope.$apply(function() {
                        if (result.data.length > 0) {
                            for (var i = 0; i < result.data.length; i++) {
                                result.data[i].img = result.data[i].icon;
                            }
                            // result.data.map((item) => {
                            // 	item.img = item.icon;
                            // })
                            result.data[0].img = result.data[0].iconactive;
                            $scope.policeTypeData = result.data;
                            getPoliceData(result.data[0].id)
                        } else {
                            $scope.policeTypeData = [];
                        }

                    });

                }
            });
        }

        //根据政策法规类型获取新闻
        function getPoliceData(typeid) {
            var param = {
                page: 1,
                size: 7,
                typeid: typeid
            }
            $.ajax({
                url: baseUrl + "/police/queryBy",
                type: 'post',
                data: JSON.stringify(param),
                headers: {
                    'Content-Type': 'application/json'
                },
                success: function(result) {

                    $scope.$apply(function() {
                        if (result.data.rows.length > 0) {

                            $scope.policeData = result.data.rows;

                        } else {
                            $scope.policeData = [];
                        }
                    });





                }
            });
        }
        $scope.focus = 0;
        $scope.li_click = function(i, typeid) {
            $scope.noticeTypeQueryAll(typeid)
            $scope.focus = i;
        };

        $scope.openpoliceType = function(items) {
                for (var i = 0; i < $scope.policeTypeData.length; i++) {
                    $scope.policeTypeData[i].img = $scope.policeTypeData[i].icon;
                }
                // $scope.policeTypeData.map((item) => {
                // 	item.img = item.icon
                // })
                console.log(items.iconactive);
                items.img = items.iconactive;
                getPoliceData(items.id)
            }
            //了解更多
        $scope.learnMore = function() {
                //跳转列表
                $location.path("/companyProfile");
            }
            //点击业务办理
        $scope.openbusinessHandling = function(item) {
                //判断是否跳转链接
                if (item.isjump == 1) {
                    if (item.urlpath.substr(0, 3) == "/#/") {
                        item.urlpath = item.urlpath.slice(3);
                        //跳转列表
                        $location.path(item.urlpath);
                    } else {
                        window.location.href = item.urlpath;
                    }

                } else {
                    //跳转列表
                    $location.path("/handling").search({
                        id: item.id
                    });
                }
            }
            //跳转新闻详情
        $scope.opendetails = function(id) {
            $location.path("/detail").search({
                id: id
            });
        }

        //跳转公告详情
        $scope.openDetailsNotice = function(item) {

                if (item.isjump == 1) {
                    window.location.href = item.urlpath;
                } else {
                    $location.path("/detail").search({
                        id: item.id
                    });
                }

            }
            // 更多公告新闻
        $scope.openMore = function(item) {
            $location.path("/new").search({
                name: item.columnCategoryName,
                id: item.columncategoryid
            });

        }
            //政策法规
        $scope.openstatutory = function(item) {
                if (item.isjump == 1) {
                    window.location.href = item.urlpath;
                } else {
                    $location.path("/statutory").search({
                        id: item.id
                    });
                }
            }
            //跳转新闻详情
        $scope.opendetailsId = function() {
                console.log($scope.detailsId);
                $location.path("/detail").search({
                    id: $scope.detailsId
                });
            }
            //给每个页码绑定跳转的事件   
        $('.pagination').on('click', 'li', function() {
            var index = this.innerHTML;

            $scope.$apply(function() {
                $scope.titles = $scope.hotData[index - 1].title;
                $scope.detailsId = $scope.hotData[index - 1].id;
            })
            swiper.slideTo(index - 1, 500, false); //切换到第一个slide，速度为1秒
        });

        function swiperInit() {
            //小轮播图
            swiper = new Swiper('.swiper-container2', {
                direction: 'horizontal',
                pagination: '.pagination',
                autoplay: 4000,
                effect: "fade",
                paginationType: 'custom', //自定义-分页器样式类型（前提）
                onSlideChangeEnd: function(swiper) {},
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                onSlideChangeEnd: function(swiper) {
                    swiper.update();

                },
                //设置自定义分页器的内容
                paginationCustomRender: function(swiper, current, total) {
                    $('.pagination').css('width', 40 * total + 'px');
                    var _html = '';
                    if ($scope.hotData && $scope.hotData.length > 0) {
                        $scope.$apply(function() {
                            $scope.titles = $scope.hotData[current - 1].title;

                            $scope.detailsId = $scope.hotData[current - 1].id;
                        })
                    }

                    for (var i = 1; i <= total; i++) {
                        if (current == i) {
                            _html += "<li style='background:#0d5ba0'>" + i + '</li>';
                        } else {
                            _html += '<li>' + i + '</li>';
                        }
                    }
                    return _html; //返回所有的页码html
                }
            });
        }

    })