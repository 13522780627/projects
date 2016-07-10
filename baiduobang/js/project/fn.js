define("fn",function(){
	require("jquery");
	return {
		Up : function(img,btem){
			var ex,en,edx=0,
				ew=$(window).height();
				
				$(img).on("touchstart",function(e){
					 ex=e.originalEvent.targetTouches[0].screenY;
				})
				$(img).on("touchmove",function(e){
					 en=e.originalEvent.targetTouches[0].screenY;
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
			},
		hua : function(tem,left,right,btem){
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
					 sx=e.originalEvent.targetTouches[0].screenX;
				})
				$(btem).on("touchmove",function(e){
					 mx=e.originalEvent.targetTouches[0].screenX;
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
			},
		stop : function(ss,ssb){
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
	}
	
})