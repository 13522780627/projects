requirejs.config({
	baseUrl : "js/project",
	paths : {
		jquery : "libs/jquery"
	},
	shim : {
		index:{
			deps:["jquery"]
		}
	}
});
require(["load","init","snece","snece1","snece2"],function(load,init,snece,snece1,snece2){
	console.log("完成")
	
})

/*;(function($){
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
	setInterval(auto,10);*/
/*----------初始化选择--------------*/
	/*$(".man").on("click",function(){
		$(".xuanx").css({"display":"none"});
		$(".xingzuo").css({"display":"block"});
	})
	$(".girl").on("click",function(){
		$(".xuanx").css({"display":"none"});
		$(".xingzuo").css({"display":"block"});
	})
	$(".xing").on("click",function(){
		$(".xingzuo").css({"display":"none"});
		$(".changjing1").css({"display":"block"});
		idx=0;
		hua(".changjing1-1",".left",".right",".sss");
	})
/*---------------选择场景-----------------------*/
	/*$("#btn").on("click",function(){
		var da=$(".changjing1-1").eq(idx).data('na');
			if(da=="ai"){
				love="ai";
				$(".changjing1").css({"display":"none"});
				$(".changjing2").show();
				Up(".ch2",".changjing2");
				idx=0;
				hua(".changjing2-1",".left2",".right2",".bbb")
			}else if(da=="peng"){
				friend="peng"
					$(".changjing1").css({"display":"none"});
					$(".changjing2a").show().siblings().hide();
					Up(".ch2a",".changjing2a");
					idx=0;
					hua(".changjing2a-1",".left2a",".right2a",".c2a");
			}else if(da=="zhi"){
				work="zhi";
				$(".changjing1").css({"display":"none"});
				$(".changjing3a").show().siblings().hide();
				Up(".ch3a",".changjing3a");
				idx=0;
				hua(".changjing3a-1",".left3a",".right3a",".c3a");
			}
	})*/

/*----------场景1----------*/
	/*$(".btn2").on("click",function(){
		sa+=$(".changjing2-1").eq(idx).data('na');
		love1=$(".changjing2-1").eq(idx).data('na');
		$(".changjing2").hide();
		$(".changjing3").show();
		Up(".ch3",".changjing3");
		idx=0;
		hua(".changjing3-1",".left3",".right3",".ccc")
	})
	$(".btn3").on("click",function(){
		sa+=$(".changjing3-1").eq(idx).data('na');
		$(".changjing3").hide();
		$(".changjing4").show();
		Up(".ch4",".changjing4");
		idx=0;
		hua(".changjing4-1",".left4",".right4",".ddd")
	})
	$(".btn4").on("click",function(){
		sa+=$(".changjing4-1").eq(idx).data('na');
		love2=$(".changjing4-1").eq(idx).data('na');
		$(".changjing4").hide();
		$(".changjing5").show();
		Up(".ch5",".changjing5");
		idx=0;
		hua(".changjing5-1",".left5",".right5",".eee")
	})*/
/*----------场景2----------*/
	/*$(".btn2a").on("click",function(){
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
	})*/
/*----------场景3----------*/

	/*$(".btn3a").on("click",function(){
		sa+=$(".changjing3a-1").eq(idx).data('na');
		$(".changjing3a").hide();
		$(".changjing3b").show();
		Up(".ch3b",".changjing3b");
		idx=0;
		hua(".changjing3b-1",".left3b",".right3b",".c3b")
	})
	$(".btn3b").on("click",function(){
		sa+=$(".changjing3b-1").eq(idx).data('na');
		$(".changjing3b").hide();
		$(".changjing3c").show();
		Up(".ch3c",".changjing3c");
		idx=0;
		hua(".changjing3c-1",".left3c",".right3c",".c3c")
	})
	$(".btn3c").on("click",function(){
		sa+=$(".changjing3c-1").eq(idx).data('na');
		work1=$(".changjing3c-1").eq(idx).data('na');
		$(".changjing3c").hide();
		$(".changjing3d").show();
		Up(".ch3d",".changjing3d");
		idx=0;
		hua(".changjing3d-1",".left3d",".right3d",".c3d")
	})*/

/*------------结果------------*/
	/*$(".btn5").on("click",function(){
		stop(".changjing5-1",".changjing5")
	})
	$(".btn2d").on("click",function(){
		friend2=$(".changjing2d-1").eq(idx).data('na');
		stop(".changjing2d-1",".changjing2d")
	})
	$(".btn3d").on("click",function(){
		work2=$(".changjing3d-1").eq(idx).data('na');
		stop(".changjing3d-1",".changjing3d")
	})*/
/*-------------再测一次-----------*/
/*获取胶囊*/
/*$(".show2").on("click",function(){
	var ss=1+Math.round(Math.random()*(2-1));
	if(love){
		if(ss=1){
			$(".social1-1").show().siblings().hide();
			Up(".s1",".social1-1");
			$(".social1-1 .cunzai").show()
		}else if(ss=2){
			$(".social1-2").show().siblings().hide();
			Up(".s2",".social1-2");
			$(".social1-2 .cunzai").show()
		}
	}else if(friend){
		if(ss=1){
			$(".social2-1").show().siblings().hide();
			Up(".s3",".social2-1");
			$(".social2-1 .cunzai").show()
		}else if(ss=2){
			$(".social2-2").show().siblings().hide();
			Up(".s4",".social2-2");
			$(".social2-2 .cunzai").show()
		}
	}else if(work){
		if(ss=1){
			$(".social3-1").show().siblings().hide();
			Up(".s5",".social3-1");
			$(".social3-1 .cunzai").show()
		}else if(ss=2){
			$(".social3-2").show().siblings().hide();
			Up(".s6",".social3-2");
			$(".social3-2 .cunzai").show()
		}
	}


})*/

/*function stop(ss,ssb){
	sa+=$(ss).eq(idx).data('na');
	$(ssb).hide();
	if(sa==100){
		$(".jie").show().siblings().hide();
			end=99;
	}else if(sa==95){
		$(".jie").show().siblings().hide();
			end=95;
	}else if(sa<95&&sa>=85){
		$(".jie").show().siblings().hide();
			end=90;
	}else if(sa<85&&sa>=75){
		$(".jie").show().siblings().hide();
			end=80;
	}else if(sa<75&&sa>=60){
		$(".lose").show().siblings().hide();
			end=60;
	}else if(sa<60&&sa>=50){
		$(".lose").show().siblings().hide();
			end=50;
	}else if(sa<50&&sa>=40){
		$(".lose").show().siblings().hide();
			end=40;
	}else if(sa<40){
		$(".lose").show().siblings().hide();
			end=30;
	}
		
	
		console.log(sa)
		$(".sum").text(end);	
}
*/

/*function Up(img,btem){
	var ex,en,edx=0,
		ew=$(window).height();
		
		$(img).on("touchstart",function(e){
			 ex=e.touches[0].screenY;
		})
		$(img).on("touchmove",function(e){
			 en=e.touches[0].screenY;
		})
		$(img).on("touchend",function(e){
			if((en-ex)<0){
				edx++;
				if(edx<0) edx=0;
				eiw=-edx*ew;
				$(btem).css({
					"-webkit-transform":"translate3d(0,"+eiw+"px,0)",
					"-webkit-transition":"all 1s"
				})	
			}
		})	
}	*/
	
/*function hua(tem,left,right,btem){
	var sx,mx,
	len=$(tem).size(),
	w=$(window).width();
	$(left).on("click",function(){
		idx--;
		if(idx<0) idx=0;
		diw=-idx*w;
		$(btem).css({
			"-webkit-transform":"translate3d("+diw+"px,0,0)",
			"-webkit-transition":"all .3s"
		});
		 console.log(idx)
	})

	$(right).on("click",function(){
		idx++;
		if(idx>len-1) idx=len-1;
		diw=-idx*w;
		$(btem).css({
			"-webkit-transform":"translate3d("+diw+"px,0,0)",
			"-webkit-transition":"all .3s"
		})
		console.log(idx)
	})	
	$(btem).on("touchstart",function(e){
		 sx=e.touches[0].screenX;
	})
	$(btem).on("touchmove",function(e){
		 mx=e.touches[0].screenX;
	})
	$(btem).on("touchend",function(e){
		if((mx-sx)>0){
			idx--;
			if(idx<0) idx=0;
			diw=-idx*w;
			$(btem).css({
				"-webkit-transform":"translate3d("+diw+"px,0,0)",
				"-webkit-transition":"all .3s"
			})
		}else{
			idx++;
			if(idx>len-1) idx=len-1;
			diw=-idx*w;
			$(btem).css({
				"-webkit-transform":"translate3d("+diw+"px,0,0)",
				"-webkit-transition":"all .3s"
			})
		}
	})	
}	*/
//})(Zepto)

		