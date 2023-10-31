
$(function () {
    /**
     * 设置未来(全局)的AJAX请求默认选项
     * 主要设置了AJAX请求遇到Session过期的情况
     */
    $.ajaxSetup({
        complete: function(xhr,status) {
            var sessionStatus = xhr.getResponseHeader('sessionstatus');
            if(sessionStatus == 'timeout') {
                layer.confirm('亲,由于您长时间没有操作, 请重新登录.', {btn: ['确定','取消']},function(){
                    top.location.reload();
                });
            }
        }
    });

    function trClick(e) {
        //排除tr的第一个td
        if($(this)[0].tagName =='TD'){
            var index  =$(this).parent().find("td").index($(this));
            if (index == 0){
                return;
            }
            $(this).parent().find("td").first().click();
        }
    }

    $(document).on('click', "table:not(.short) tbody tr td", trClick);

    $('.clickshow').click(function(){
        $(this).next().fadeToggle()
        $('#bg').css({"display":"block"})
    })
    $('#bg').click(function(){
        $('.clickshow').next().fadeToggle();
        $('#bg').css({"display":"none"})
    })
    $('.clickshow').next().blur(function(){
        $(this).fadeToggle()
    })
    
    var offsetWid = document.documentElement.clientWidth;
    
    $('.show').click(function () {
        $(this).children(".more").slideToggle(20, function () {
            $(this).children(".in").fadeToggle(400);
        })
        if (!$(this).hasClass("menu_selected")) {
            $(this).addClass("menu_selected")
            $(this).find('.layui-icon-right').css({
                "transform": "rotate(90deg)"
            })
        } else {
            $(this).removeClass("menu_selected")
            $(this).find('.layui-icon-right').css({
                "transform": "rotate(0deg)"
            })
        }
    })
    


    // 新的菜单点击
    if(offsetWid <= 767){
        $('.teshow').click(function () {
            $(this).children(".more").slideToggle(20, function () {
                $(this).children(".in").fadeToggle(400);
            })
            if (!$(this).hasClass("menu_selected")) {
                $(this).addClass("menu_selected")
                $(this).find('.layui-icon-right').css({
                    "transform": "rotate(90deg)"
                })
            } else {
                $(this).removeClass("menu_selected")
                $(this).find('.layui-icon-right').css({
                    "transform": "rotate(0deg)"
                })
            }
        })
    }
    if(offsetWid > 767){
        var str = '<div id="bg2"></div>';
        $(str).appendTo($('#main>.right'))
        $('.newshow').click(function () {

            $('#bg2').fadeToggle(200);
            $(".newmore").slideToggle(20, function () {
                $(this).children(".newin").fadeToggle(400);
            })
            if (!$(this).hasClass("menu_selected")) {
                $(this).addClass("menu_selected")
                $(this).find('.layui-icon-right').css({
                    "transform": "rotate(90deg)"
                })
            } else {
                $(this).removeClass("menu_selected")
                $(this).find('.layui-icon-right').css({
                    "transform": "rotate(0deg)"
                })
            }
        })
        $('#main>.right #bg2').click(function () {
            $(".newmore").slideToggle(20, function () {
                $(this).children(".newin").fadeToggle(400);
            })
            $('#bg2').css({ "display": "none" })
            if (!$('.newshow').hasClass("menu_selected")) {
                $('.newshow').addClass("menu_selected")
                $('.newshow').find('.layui-icon-right').css({
                    "transform": "rotate(90deg)"
                })
            } else {
                $('.newshow').removeClass("menu_selected")
                $('.newshow').find('.layui-icon-right').css({
                    "transform": "rotate(0deg)"
                })
            }
        })
    }
    
    $(function () {
        //侧边栏鼠标划入划出
        $("#aside li a").mouseenter(function () {
   
            $(this).addClass('color')
            $(this).children('i').addClass('block')
            if ($(this).parent().parent('class') == 'more') {
                $(this).parent().parent().parent().removeClass('color');
                $(this).parent().parent().parent().children().removeClass('block');
            }
        })
        $("#aside li a").mouseleave(function () {
            $(this).removeClass('color')
            $(this).children('i').removeClass('block')

        })



        $("#aside .ul li").each(function (index, item) {
            var url = location.hash;
            var targetUrl = $(item).children().eq(1).attr("href");
            
            if (url == targetUrl) {
                $(item).addClass("menu_selected");
                $(item).find('i').css({
                    "display": "block"
                })
                if ( $(item).parents("ul").hasClass("biz-group")){
                     //$(".newmore").hide();
                }else{
                    $(item).parents("ul").click();
                }
            }
        });

        //移动端菜单点击显示隐藏
        $('.head-phone-left').click(function () {
            $('#aside').animate({
                left: '0px'
            }, 500)
            $('#main>.right').animate({
                left: '0px'
            }, 500)
            $('.head-phone').animate({
                left: '0px'
            }, 500)
            $('.head-phone').addClass('hasleft')
            $('.head-phone .head-phone-left').css({
                color:"#1c67bf"
            }) 
        })
        
        $('.indentation').click(function(){
            $('#aside').animate({
                left: '-220px'
            }, 500)
            $('#main>.right').animate({
                left: '0px'
            }, 500)
            $('.head-phone').removeClass('hasleft')
            $('.head-phone').animate({
                left: '0px'
            }, 500,function(){
                $('.head-phone .head-phone-left').css({
                color:"#fff"
            })
            })
            
        })
        $('.right').click(function(){
            if($('.head-phone').hasClass('hasleft')){
                    $('#aside').animate({
                        left: '-220px'
                    }, 500)
                    $('#main>.right').animate({
                        left: '0px'
                    }, 500)
                    $('.head-phone').removeClass('hasleft')
                    $('.head-phone').animate({
                        left: '0px'
                    }, 500,function(){
                        $('.head-phone .head-phone-left').css({
                        color:"#fff"
                    })
                    })
                }
            
        })
        $('#page-title').click(function(){
            if($('.head-phone').hasClass('hasleft')){
                $('#aside').animate({
                    left: '-220px'
                }, 500)
                $('#main>.right').animate({
                    left: '0px'
                }, 500)
                $('.head-phone').removeClass('hasleft')
                $('.head-phone').animate(
                    { left: '0px' }, 500, function(){
                        $('.head-phone .head-phone-left').css({ color:"#fff" })
                    }
                )
            }
        })
    })

})
// 业务办理-搜索的点击和enter键搜索

$('.business-search .searchBtn').click(function(){
    var content = $('.search').val();
    $(".hide-item").removeClass("hide-item");
    if (content == ''){
        return;
    }
    $('.business-ul .title ul li a').each(function(index,item){
        if(item.innerHTML.indexOf(content) ==-1){
            $(item).parent().addClass("hide-item");
        }
    });
    $('.business-ul .title').each(function(index,item){
        if($(item).find("li").not('.hide-item').size()==0){
            $(item).addClass("hide-item");
        }
    });

})
$('.search').bind('keypress',function(){
    if (event.keyCode == "13") {
        $(".searchBtn").click();
    }
});
$('.search').keyup(function(){
    $(".searchBtn").click();
})
/**
 * back 返回不刷新
 * 如果true了，页面还不刷新,在需要刷新的页面加上监听
 *     window.addEventListener("pageshow", function (event) {
        if (event.persisted || window.performance &&
            window.performance.navigation.type == 2)
        {
            location.reload();
        }
    },false);
 * 返回前一页（或关闭本页面）
 * <li>如果没有前一页历史，则直接关闭当前页面</li>
 */
function goBack(flag){
    //有锚点。点击返回根据锚点返回
    if (window.location.hash){
        window.history.go( -1 );
        return;
    }

    if (isWeiXin()){
        if(window.history.length > 1 && document.referrer){
            if(flag){
                window.history.go( -1 );
                return
            }
            window.history.back();

        }else{
            WeixinJSBridge.call('closeWindow');
        }
        return;
    }
    if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){ // IE
        if(history.length > 0 && document.referrer){
            if(flag){
                window.history.go( -1 );
                return
            }
            window.history.back();

        }else{
            window.opener=null;window.close();
        }
    }else{ //非IE浏览器
        if (navigator.userAgent.indexOf('Firefox') >= 0 ||
            navigator.userAgent.indexOf('Opera') >= 0 ||
            navigator.userAgent.indexOf('Safari') >= 0 ||
            navigator.userAgent.indexOf('Chrome') >= 0 ||
            navigator.userAgent.indexOf('WebKit') >= 0){
            if(window.history.length >= 1 && document.referrer){
                if(flag){
                    window.history.go( -1 );
                    return
                }
                window.history.back();

            }else{
               //兼容我的南京里面后退。
                try{
                    var enterType = suypower.util.cookie.getCookie("enterType");
                    if ("MYNJ_APP" == enterType){
                        if (location.search ==""){
                            window.location.href = window.location.href+"?type=exit";
                        }else{
                            window.location.href = window.location.href+"&type=exit";
                        }
                        return
                    }
                }catch (e){
                    window.history.go( -1 );
                    return
                }
                    window.location.href = "about:blank";//关键是这句话
                    window.close();
            }
        }else{ //未知的浏览器
            if(flag){
                window.history.go( -1 );
                return
            }
            window.history.back();

        }
    }
}
// getWXopenId()
// // 重新扫码，获取手机号新绑定的openId
// function getWXopenId() {
//     if(getlocalStorage('phone')) {
//       $.ajax({
//         type: 'Post',
//         url: baseUrl + '/ysUser/selectByNumber',
//         data: JSON.stringify({
//           "mobileNumber": getlocalStorage('phone')
//         }),
//         dataType: 'json',
//         contentType: 'application/json',
//         success: function (res) {
//           if (res.code == 10000) {
//             setlocalStorage('openId', res.data.openId)
//           } 
//         }
//       })
//     }
//   }



















