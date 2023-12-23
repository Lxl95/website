//var commonurl = "http://192.168.2.122:11005";
var commonurl = "http://192.168.2.64";//公用url
// 图片上传demo
jQuery(function() {
    var $ = jQuery,
        $list = $('#fileList'),
       
        // 优化retina, 在retina下这个值是2
        ratio = window.devicePixelRatio || 1,
 
        // 缩略图大小
        thumbnailWidth = 100 * ratio,
        thumbnailHeight = 100 * ratio,
 
        // Web Uploader实例
        uploader;
 
    // 初始化Web Uploader
    uploader = WebUploader.create({
        // 自动上传。
        auto: true,
        // 文件接收服务端。
        server: commonurl + '/MainOA/Bussiness_InterFace/GetSiteMail.ashx',
        formData:{
            'oper': 'uploadimages',
        },
        // [默认值：'file']  设置文件上传域的name。
        fileVal:'upload',
 
        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '#filePicker',
        // 只允许选择文件，可选。
        accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,bmp,png',
            mimeTypes: 'image/*'
        }
    });
 
    // 当有文件添加进来的时候
    
	uploader.on( 'fileQueued', function( file ) {
		if ($('.file-item').length<3) {
	        var $li = $('<div id="' + file.id + '" class="file-item thumbnail">' + '<span class="file-remove">×</span><img style="width:100%;">' + '</div>'),
	            $img = $li.find('img');
	        		$list.append( $li );
	        // 创建缩略图
	        uploader.makeThumb( file, function( error, src ) {
	            if ( error ) {
	                $img.replaceWith('<span>不能预览</span>');
	                return;
	            }
	            $img.attr( 'src', src );
	        }, thumbnailWidth, thumbnailHeight );
	         imgRemove();
	         console.log(file);
        }else{
        	alert('最多只能添加3张图片！');
        }
        });
		//移除已添加的图片
		function imgRemove(file) {
       $('.file-remove').each(function(i,e){
       		$(this).click(function(){
       			var same = $(this);
       			var sameIndex = $(this).index();
                $(same).parent().remove();
                uploader.reset($(same));
       		});
       });
    };
    // 文件上传过程中创建进度条实时显示。
    uploader.on( 'uploadProgress', function( file, percentage ) {
        var $li = $( '#'+file.id ),
            $percent = $li.find('.progress span');
        // 避免重复创建
        if ( !$percent.length ) {
            $percent = $('<p class="progress"><span></span></p>').appendTo( $li ).find('span');
        }
 
        $percent.css( 'width', percentage * 100 + '%' );
    });
 
    // 文件上传成功，给item添加成功class, 用样式标记上传成功。
    uploader.on( 'uploadSuccess', function( file,data ) {
        //var fileList = $.parseJSON(callBack);//转换为json对象
        console.log(data);
        $('#uploader-demo').append('<input  type="text" name="fileUrl" value="'+data.name+'"/>');
        $( '#'+file.id ).attr("data-url",data.FilePath).addClass('upload-state-done').append('<div class="error sure">上传成功</div>');

        //console.log("上传成功√");
    });
 
    // 文件上传失败，现实上传出错。
    uploader.on( 'uploadError', function( file ) {
        var $li = $( '#'+file.id ),
            $error = $li.find('div.error');
        console.log(file); 
        // 避免重复创建
        if ( !$error.length ) {
            $error = $('<div class="error"></div>').appendTo( $li );
        }
 
        $error.text('上传失败!!!');
    });
 
    // 完成上传完了，成功或者失败，先删除进度条。
    uploader.on( 'uploadComplete', function( file ) {
        $( '#'+file.id ).find('.progress').remove();
    });
   
});