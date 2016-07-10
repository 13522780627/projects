define(["fn","snece","exports"],function(fn,snece,exports){
	require("jquery");
	$("#btn").on("click",function(){
			var da=$(".changjing1-1").eq(idx).data('na');
				if(da=="ai"){
					love="ai";
					$(".changjing1").css({"display":"none"});
					$(".changjing2").show();
					fn.Up(".ch2",".changjing2");
					idx=0;
					fn.hua(".changjing2-1",".left2",".right2",".bbb")
				}else if(da=="peng"){
					friend="peng"
						$(".changjing1").css({"display":"none"});
						$(".changjing2a").show().siblings().hide();
						fn.Up(".ch2a",".changjing2a");
						idx=0;
						hua(".changjing2a-1",".left2a",".right2a",".c2a");
				}else if(da=="zhi"){
					work="zhi";
					$(".changjing1").css({"display":"none"});
					$(".changjing3a").show().siblings().hide();
					fn.Up(".ch3a",".changjing3a");
					idx=0;
					fn.hua(".changjing3a-1",".left3a",".right3a",".c3a");
				}
		})
	console.log("场景选择完成")
})