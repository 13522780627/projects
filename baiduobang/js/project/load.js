define("load",function(){
	require("jquery");
	$(window).on("touch",function(e){
		e.preventDefault;
	})
	var i=0,idx=0,sa=0,end,love,friend,work;
	function auto(){
		if(i>=100){
		//显示下个区域
			//return false;
		$(".load").css({"display":"none"});
		}
		i+=2;
		$(".run").css("width",i+"%");
		$(".num").html(i+"%");
	}
	setInterval(auto,10);
	console.log("loading加载完成")
})