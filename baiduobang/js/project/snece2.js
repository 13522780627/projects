define(["fn","snece2"],function(fn,snece2){
	$(".btn2a").on("click",function(){
			sa+=$(".changjing2a-1").eq(idx).data('na');
			$(".changjing2a").hide();
			$(".changjing2b").show();
			Up(".ch2b",".changjing2b");
			idx=0;
			hua(".changjing2b-1",".left2b",".right2b",".c2b")
		})
		$(".btn2b").on("click",function(){
			sa+=$(".changjing2b-1").eq(idx).data('na');
			$(".changjing2b").hide();
			$(".changjing2c").show();
			Up(".ch2c",".changjing2c");
			idx=0;
			hua(".changjing2c-1",".left2c",".right2c",".c2c")
		})
		$(".btn2c").on("click",function(){
			sa+=$(".changjing2c-1").eq(idx).data('na');
			friend1=$(".changjing2c-1").eq(idx).data('na');
			$(".changjing2c").hide();
			$(".changjing2d").show();
			Up(".ch2d",".changjing2d");
			idx=0;
			hua(".changjing2d-1",".left2d",".right2d",".c2d")
		})
})