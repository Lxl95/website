// var width = document.body.clientWidth;
// var height = width*0.4;
// console.log(width)
// if(width > 1280){
//     $('#main').css({"height":height});
//     $('#main .register').css({"left":"835px"})
// }
// if(width >= 1300 && width <= 1440){
//     $('#main .register').css({"left":"850px"})
// }
// if(width > 1440 && width <= 1680){
//     $('#main .register').css({"left":"870px"})
// }
// if(width>1680 && width <= 1920){
//     $('#main .register').css({"left":"940px"})
// }
// if(width>1920 && width <= 2160){
//     $('#main .register').css({"left":"985px"})
// }
// if(width>2160 && width <= 2560){
//     $('#main .register').css({"left":"1000px"})
// }
// function checkPhone(phone) {
//     if((/^1[3|4|5|6|7|8|9][0-9]\d{8,11}$/).test(phone)){
//         return true;
//     }
//     return false;
// }

// function checkUserName(val) {
//     if(val == ''){
//         return false;
//     }
//     var regex =  /^[0-9]+$/;//匹配表达式
//     if(regex.test(val)){
//         return false;
//     }
//     regex =  new RegExp("^[0-9a-zA-Z_]{1,}$");
//     if(!regex.test(val)){
//         return false;
//     }
//     //或者通过NaN函数
//     if(!isNaN(val)){
//         return false;
//     }
//     return true;
// }

// var InterValObj; //timer变量，控制时间
// var count = 60; //间隔函数，1秒执行
// var curCount;//当前剩余秒数
// function sendMessage() {
//     var phone  = $("#phone").val();
//     if(!checkPhone(phone)){
//         top.layer.msg("请输入正确手机号",{icon:2,time:3000});
//         return;
//     }
//     var load = layer.load(3);
//     //向后台发送处理数据
//     $.ajax({
//         type: "POST", //用POST方式传输
//         dataType: "JSON", //数据格式:JSON
//         url: 'register/checkCaptcha', //目标地址
//         data: {
//             code:$("#code").val(),
//             phone:phone
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) { layer.close(load);   top.layer.msg('服务请求失败！',{icon:2,time:3000});},
//         success: function (result){
//             layer.close(load);
//             $("#code").after().click();
//             if (result.code !=0){
//                 top.layer.msg(result.msg,{icon:2,time:3000});
//                 return;
//             }
//             top.layer.msg("短信发送成功，请注意查看" );
//             InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
//             curCount = count;
//             //设置button效果，开始计时
//             $("#btnSendCode").attr("disabled", "true");
//             $("#btnSendCode").html(curCount + "s");
//         }
//     });
// }
// //timer处理函数
// function SetRemainTime() {
//     if (curCount == 0) {
//         window.clearInterval(InterValObj);//停止计时器
//         $("#btnSendCode").removeAttr("disabled");//启用按钮
//         $("#btnSendCode").html("重新发送");
//     }
//     else {
//         curCount--;
//         $("#btnSendCode").html(curCount + "s");
//     }
// }

// $("#agreement").click(function () {
//     var offset =  ['5%', '5%'];
//     // if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
//     //     offset = ['20%', '5%'];
//     // }
//     layer.open({
//         title: '用户协议',
//         type: 1,
//         skin: 'layui-layer-demo', //样式类名
//         closeBtn: 0, //不显示关闭按钮
//         anim: 2,
//         offset: offset,
//         area: ['90%', '90%'],
//         shadeClose: true, //开启遮罩关闭
//         content: '尊敬的客户: <p class="agreement">感谢您注册使用我公司网上营业厅。网上营业厅的所有权和运作权，以及受理具体业务的经营权归南京水务集团有限公司所有。在注册使用本网站之前，您必须完全同意以下所有服务条款：</p> <p class="agreement"> 一、定义 </p> <p class="agreement">1、 本网站：指南京水务集团有限公司网站，网址为。</p> <p class="agreement"> 2、 用户/您：指同意并遵守本协议，完成本网站所有注册程序并经本网站确认，拥有本网站登录帐号和密码的自然人、法人、其他组织。</p> ' +
//         '<p class="agreement">3、 用户信息：指用户注册信息以及用户使用本网站用户服务时提交的、被本网站所知悉的交易信息。</p>'+
//         '<p class="agreement">4、 用户注册信息：指用户在本网站注册的各项信息，包括其后通过身份验证后修改所填写的内容。</p>'+
//         '<p class="agreement">5、 用户指令：本协议中，除非专门指明或声明，均指用户以数据电文形式向本网站提出的申请、要求，包括但不限于用户要求本网站提供、变更或取消其依据本网站业务流程可享有的各项服务的申请、要求。</p>'+
//         '<p class="agreement">6、 用户服务/产品使用协议：根据南京水务集团有限公司的业务规定或规则，用户与南京水务集团有限公司就提供互联网服务事宜另行签署的协议和/或合同。</p>'+
//         '<p class="agreement">二、 协议条款的确认和接受</p>'+
//         '<p class="agreement">1、 本网站在此特别提醒您，在您使用注册前请确实仔细阅读本协议，如果您对本协议的任何条款和/或将来随时可能修改、补充的条款有异议，您可选择不注册成为本网站的用户。</p>'+
//         '<p class="agreement">2、 当您点选“同意”按钮时即视为您已仔细阅读本条款，同意接受本协议条款的所有规范包括接受本网站对本协议条款随时所做的任何修改，并愿受其拘束。</p>'+
//         '<p class="agreement">3、 本网站有权在必要时修改本协议条款，协议条款一旦发生变动，将会在重要页面上提示修改内容。如果不同意所改动的内容，用户可以主动注销其用户帐号。如果用户继续享用本网站所提供的网络服务，则视为接受服务条款的变动。</p>'+
//         '<p class="agreement"> 4、 本网站保留在任何时候自行决定对本网站及其相关功能的变更、升级、修改、转移的权利。本网站进一步保留在本网站中开发新功能的权利。上述所有新的功能、软件服务的提供，除非本网站另有说明，否则仍适用本协议。</p>'+
//         '<p class="agreement">三、 服务内容</p>'+
//         '<p class="agreement">1、 本网站将按照本协议及相关操作规程为用户提供相应的用户服务。本网站保证其所提供服务的合法性，并有义务在现有技术上维护整个网上服务及交易的正常运行，并努力提升和改进技术，使用户网上服务和交易活动得以顺利进行。</p>'+
//         '<p class="agreement">2、 本网站所提供的用户服务包括：用户注册、网站登录、安全退出、找回密码、修改密码、业务办理查询、业务办理申请、水量水费查询、水费缴纳等服务，本网站有权根据实际情况的变化调整用户服务具体内容。</p>'+
//         '<p class="agreement">3、 本网站仅提供网络服务，与网络服务有关的通信设备（如电脑、调制解调器及其他与接入互联网有关的装置）及通信服务所需的费用（如为接入互联网而支付的电话费及宽带费）由用户自行承担。</p>'+
//         '<p class="agreement"> 四、 使用规则 </p>'+
//         '<p class="agreement">1、 用户资料的真实性：用户保证自己在注册时用户身份的真实性和正确性及完整性，如果资料发生变化，用户应及时更改，本网站不能也不会对您的资料不真实、不准确，或您的资料未能及时更新，或因您丢失了身份号码和密码而引起的任何损失或损害承担责任。若用户提供任何错误、不实、过时或不完整的资料，并为本网站所确知；或者本网站有合理理由怀疑前述资料为错误、不实、过时或不完整，本网站有权暂停或终止用户的帐号，并拒绝现在或将来使用本服务的全部或一部分。</p>'+
//         '<p class="agreement"> 2、 用户帐号、密码</p>'+
//         '<p class="agreement">用户登陆帐号及密码为用户在本网站的唯一身份权证，为享受本网站提供的用户服务，您须按照对应的服务要求键入正确的客户登陆帐号及密码。</p>'+
//         '<p class="agreement">您应保管好自己的客户登陆帐号和密码，在服务使用过程中可更改密码。非因本网站原因导致客户登陆帐号、密码遗失、遗忘或被他人窃取的，本网站不承担责任。如果用户发现自己的个人信息泄密，尤其是本网站帐户及密码发生泄露，立即致电96055。</p>'+
//         '<p class="agreement">3、 您在使用本网站提供的用户服务过程中，必须遵守以下原则：</p>'+
//         '<p class="agreement">a、遵守中国有关的法律和法规；</p>'+
//         '<p class="agreement">b、不得为任何非法目的而使用本网站所提供网络服务系统；</p>'+
//         '<p class="agreement">c、遵守所有与网络服务有关的网络协议、规定和程序；</p>'+
//         '<p class="agreement">d、禁止出售、转售或复制、开发本网站授予的使用权限；</p>'+
//         '<p class="agreement">e、禁止损害本公司利益或者其他用户利益的行为。</p>'+
//         '<p class="agreement">4、 用户承诺其通过本网站服务进行活动引发的一切后果，由其承担全部责任。如因用户使用本网站的行为，导致南京水务集团有限公司为此承担了相关的责任，用户需全额赔偿南京水务集团有限公司的相关支出及损失，包括律师费用、诉讼费等。</p>'+
//         '<p class="agreement">五、 用户隐私</p>'+
//         '<p class="agreement">a、事先获得用户的明确授权；</p>'+
//         '<p class="agreement">b、根据有关的法律法规要求；</p>'+
//         '<p class="agreement">c、按照相关政府主管部门的要求；</p>'+
//         '<p class="agreement">d、为维护社会公众的利益；</p>'+
//         '<p class="agreement">e、为维护本网站或用户的合法权益；</p>'+
//         '<p class="agreement">f、不可抗力所导致的用户信息公开；</p>'+
//         '<p class="agreement">g、不能归咎于本站的客观情势，所导致的个人资料的公开；</p>'+
//         '<p class="agreement">h、由于本网站的硬件和软件的能力限制，所导致用户信息的公开；</p>'+
//         '<p class="agreement">i、本网站有充分理由相信用户信息的公开，符合本站和用户利益要求的。</p>'+
//         '<p class="agreement">2、 在不透露单个用户信息的前提下，本网站有权对整个用户数据库进行分析并对用户数据库进行利用。</p>'+
//         '<p class="agreement">3、 本网站应在其网络系统内建立合理的安全体系，包括身份识别体系、内部安全防范体系，以使用户数据完整，并且保密。但用户了解并同意技术手段在不断更新，本网站无法杜绝全部的非安全因素，但本网站会及时更新体系，妥善维护网络及相关数据。</p>'+
//         '<p class="agreement">六、 服务变更、中断或终止</p>'+
//         '<p class="agreement">1、 如因系统维护或升级的需要而需暂停网络服务本网站将尽可能事先进行通告。</p>'+
//         '<p class="agreement">2、 本网站有权判定您的行为是否符合本网站有关要求，出现包括但不限于以下情形的，本网站有权单方在不作通知的情况下终止对您提供的客户服务，由此产生的风险及责任由您自行承担。如造成本网站损失的，您还应承担赔偿等责任：</p>'+
//         '<p class="agreement">a、用户提供的注册资料不真实；</p>'+
//         '<p class="agreement">b、用户违反本协议中规定的使用规则。</p>'+
//         '<p class="agreement">3、 用户完成网站的注销手续时，本协议即为终止；</p>'+
//         '<p class="agreement">4、 本协议的终止并不意味着终止前所发生的未完成客户指令的撤销，也不能消除因终止前的交易所带来的法律后果。</p>'+
//         '<p class="agreement">5、 本网站保留在不事先通知用户的情况下随时中断或终止部分或全部网络服务的权利，对于所有服务的中断或终止而造成的任何损失，本网站无需对用户或任何第三方承担任何责任。</p>'+
//         '<p class="agreement">七、 免责声明</p>'+
//         '<p class="agreement">1、 本网站尽力向客户提供优质服务，但不能保证客户服务一定满足客户要求，也不保证客户服务不会受中断。</p>'+
//         '<p class="agreement">2、 本网站所发布的信息中可能没有包含与我公司业务有关的最新信息。本网站所提供的信息，只供参考之用。</p>'+
//         '<p class="agreement">3、 用户明确同意其使用本网站服务所存在的风险将完全由其自己承担；因其使用本网络服务而产生的一切后果也由其自己承担。</p>'+
//         '<p class="agreement">4、 在所适用的法律允许的范围内，任何一方均无须就数据的丢失和/或损坏及任何间接的、附带的、特殊的、后果性的损失向另一方负责赔偿。</p>'+
//         '<p class="agreement">八、 不可抗力</p>'+
//         '<p class="agreement">如果由于黑客攻击或政府管制或网络通讯瘫痪等用户对其发生和后果不能预见的事件，双方均确认此属不可抗力；双方应按照不可抗力对影响履行本协议的程度，协商决定是否解除本协议、免除履行本协议的部分义务，或者延期履行本协议。</p>'+
//         '<p class="agreement">九、 法律适用</p>'+
//         '<p class="agreement">本协议适用中华人民共和国法律法规，您和本网站一致同意服从相关法律法规以及本协议的规定。如果本协议的部分条款在任何时候变成不合法、无效或不可强制执行而不从根本上影响本协议的效力时，本协议的其它条款不受影响。</p>'

//     });

// })

// $("#register").click(function () {
//     if($('#killOrder:checked').val() != '1'){
//         layer.alert('请接受《用户协议》');
//         return;
//     }
//     $(".error-tip").html('');
//     // var userName = $("#userName").val();
//     var phone = $("#phone").val();
//     var code = $("#code").val();
//     var smsCode = $("#smsCode").val();
//     var password = $("#password").val();
//     var confirmPassword = $("#confirmPassword").val();

//     if(!checkPhone(phone)){
//         $("#phone-error").html("手机号格式错误");
//         return;
//     }
//     // if(!checkUserName(userName)){
//     //     $("#userName-error").html("用户名仅支持中英文、数字和下划线,且不能为纯数字");
//     //     return;
//     // }
//     // if (userName.length< 6 || userName.length>16){
//     //     return $("#userName-error").html("请输入6-16位用户名");
//     // }
//     if(code ==''){
//         top.layer.msg("请正确输入验证码",{icon:2,time:3000});
//         return;
//     }
//     if(smsCode ==''){
//         top.layer.msg("请正确输入短信验证码",{icon:2,time:3000});
//         return;
//     }
//     if(password =='' || password.length < 6){
//         $("#password-error").html("请输入6-16位密码");
//         return;
//     }
//     if(password !=confirmPassword ){
//         $("#confirmPassword-error").html("两次密码输入不一致");
//         return;
//     }

//    var load = layer.load(3);
//     $.ajax({
//         url : "user/register",
//         type : "post",
//         data : $("#dataFrom").serialize(),
//         dataType : "json",
//         success : function(result) {
//             layer.close(load);
//             if(result.code == 0){
//                 top.layer.msg('注册成功！',{icon:1,time:1000},function () {
//                     location.href = "userAccount/toBind";
//                 });
//             }else{
//                 top.layer.msg(result.msg,{icon:2,time:1000});
//             }
//         },
//         error:function(XMLHttpRequest, textStatus,errorThrown){
//             layer.close(load);
//             top.layer.msg('服务请求失败！',{icon:2,time:3000});
//         }
//     });

// })
