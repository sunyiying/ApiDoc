$(function(){
	if(data!=null&&data.length>0){
		$(".mainName").html("");
		for (var key in data) {
			var e=data[key];
			$(".mainName").append($("<li style='display:none;'>"+e.text+"</li>")); 
			$(".mainbanner_list").append("<li><a href='javascript:void(0);'>"+e.text+"</a></li>");	
			if(key==0){
				$("#iframe").attr("src",e.url)
			}
			 
		}					
	}

	$('.mainbanner').each(function(){
		var $_root = $(this);
		var $_fixBox=$(".fixBox");
		var $window_b = $_root.find('.mainbanner_window');
		var $list = $_root.find('.mainbanner_list');
		var $items = $list.children();
		var $window_ul = $window_b.find('#slideContainer');
		var count = $items.length;
		var item_size = 2000;
		var dur_ms = 1000;
		var autoplay_interval = _interval;		
		var cur_idx = 0;
		var fix_idx = function(_idx){
			if( _idx < 0 )
			return
			(count - 1);
			if( _idx >= count )
			return 0;
			return _idx;
		}	

		var goto = function(_idx){
			var idx = fix_idx( _idx );
			$items.eq(idx).addClass('active').siblings().removeClass('active');
			$('.mainName li').eq(idx).show().siblings().hide();
			if( cur_idx != idx ){
				//var offset_x = - idx * item_size;
				//$window_ul.stop().animate({'left':offset_x},dur_ms);
				$("#iframe").attr("src",data[idx].url)
				cur_idx = idx;
			}
		}

		$items.each(function(index, element){
			var $cur_item = $(this);
			var $cur_a = $cur_item.find('a');
			$cur_a.data('index',index);
			$cur_a.click(function(){
				var index = $(this).data('index');
				goto(index);
				return false;
			});
		});
		
		var autoplay_flag = true;

		window.setInterval(function(){
			if(autoplay_flag){
				goto( cur_idx + 1 );
			}
		},autoplay_interval);

 
		$_root.hover(function(e){
			autoplay_flag = false;
			console.log(e.clientY);
			console.log(autoplay_flag);
		},function(){
			autoplay_flag = true;
			console.log(autoplay_flag);
		});
	  	 
		$_fixBox.mouseover(function(e){
			autoplay_flag = !autoplay_flag;
			var color=autoplay_flag?"Green":"Red";
			$(".showMsg").css("background-color",color).fadeIn(2000).fadeOut(2000);
			
		});
		
		goto(0);
	});
	
})