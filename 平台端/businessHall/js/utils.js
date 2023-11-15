$(document).ready(function() {

 $('.js-dropdwn-name').bind('mouseover', function() {
     var oMenu = $(this).find('.dropdown');
     oMenu.show();
 });

 $('.js-dropdwn-name').bind('mouseout', function() {
     var oMenu = $(this).find('.dropdown');
     oMenu.hide();
 });

});
/*分页面左侧菜单*/
$(function() {
 $('.paging-main-left div').hide();
 $('.paging-main-left h1').hover(function() {
     $(this).addClass('hover');
 }, function() {
     $(this).removeClass('hover');
 });
 $('.paging-main-left h1').click(function() {
     $(this).next('div').slideToggle().siblings('div').slideUp();
     $(this).children('.icon').toggleClass('active')
         .parent().siblings('h1')
         .children('.icon').removeClass('active');
 });

 $('#current').show();
});
setlocalStorage('phone', GetQueryString('phone'))
getWXopenId()
// 重新扫码，获取手机号新绑定的openId
function getWXopenId() {
    if(getlocalStorage('phone')) {
      $.ajax({
        type: 'Post',
        url: baseUrl + '/ysUser/selectByNumber',
        data: JSON.stringify({
          "mobileNumber": getlocalStorage('phone')
        }),
        dataType: 'json',
        contentType: 'application/json',
        success: function (res) {
          if (res.code == 10000) {
            setlocalStorage('openId', res.data.openId)
          } 
        }
      })
    }
}

  //设置cookie中的phone和openId
function setlocalStorage(stringName,value) {
 let seconds = 3600; //设置有效时间1个小时
 let expires = new Date(new Date() * 1 + seconds * 1000);
 return Cookies.set("website-" + stringName, value, {
   expires: expires
 });
}
//获取cookie中的phone
function getlocalStorage(stringName) {
 return Cookies.get("website-" + stringName);
}
//清空cookie中的phone
function removelocalStorage(stringName, stringName2) {
  if(stringName2) {
   Cookies.remove("website-" + stringName2);
  }
  return Cookies.remove("website-" + stringName);
}

function GetQueryString(name) {
 var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
 var r = window.location.search.substr(1).match(reg);
 if (r != null) return unescape(r[2]);
 return null;
}