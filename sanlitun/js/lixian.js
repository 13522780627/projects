var canvas=document.getElementById("canvas");
//var endmain=document.getElementById("endmain");
var y=document.getElementById("y"),
	y2=document.getElementById("y2"),
	x=document.getElementById("x"),
	s1=document.getElementById("s1"),
	Return=document.getElementById("return"),
	s2=document.getElementById("s2");
var context=canvas.getContext('2d'),timer;
	var arr1=[
			{
				movex:60,
				movey:374,
				tox:35,
				toy:0
			},
			{
				movex:95,
				movey:374,
				tox:0,
				toy:175
			},
			{
				movex:95,
				movey:199,
				tox:90,
				toy:0
			},
			{
				movex:185,
				movey:199,
				tox:0,
				toy:-65
			},
			{
				movex:185,
				movey:264,
				tox:-15,
				toy:0
			},
			{
				movex:185,
				movey:264,
				tox:0,
				toy:-110
			},
			{
				movex:185,
				movey:374,
				tox:-60,
				toy:0
			},
			{
				movex:125,
				movey:374,
				tox:0,
				toy:20
			}
			];
	var arr2=[
			{
				movex:60,
				movey:199,
				tox:125,
				toy:0
			},
			{
				movex:185,
				movey:199,
				tox:0,
				toy:-65
			},
			{
				movex:185,
				movey:264,
				tox:-15,
				toy:0
			},
			{
				movex:185,
				movey:264,
				tox:0,
				toy:-110
			},
			{
				movex:185,
				movey:374,
				tox:-60,
				toy:0
			},
			{
				movex:125,
				movey:374,
				tox:0,
				toy:20
			}
			];
		var arr3=[{
					movex:295,
					movey:185,
					tox:0,
					toy:-14
				  },
				  {
					movex:295,
					movey:199,
					tox:-110,
					toy:0
				  },
				  {
				  	movex:185,
				  	movey:199,
				  	tox:0,
				  	toy:-65
				  },
				  {
				  	movex:185,
				  	movey:264,
				  	tox:-15,
				  	toy:0
				  },
				  {
				  	movex:185,
				  	movey:264,
				  	tox:0,
				  	toy:-110
				  },
				  {
				  	movex:185,
				  	movey:374,
				  	tox:-60,
				  	toy:0
				  },
				  {
				  	movex:125,
				  	movey:374,
				  	tox:0,
				  	toy:20
				  },
				  {
					movex:295,
					movey:199,
					tox:0,
					toy:-175
				  },
				  {
				  	movex:295,
				  	movey:374,
				  	tox:-110,
				  	toy:0
				  }
				 ];
			var arr4=[
					 {
						movex:295,
						movey:400,
						tox:0,
						toy:201
					 },
					 {
						movex:295,
						movey:199,
						tox:-110,
						toy:0
					  },
					  {
					  	movex:185,
					  	movey:199,
					  	tox:0,
					  	toy:-65
					  },
					  {
					  	movex:185,
					  	movey:264,
					  	tox:-15,
					  	toy:0
					  },
					  {
					  	movex:185,
					  	movey:264,
					  	tox:0,
					  	toy:-110
					  },
					  {
					  	movex:185,
					  	movey:374,
					  	tox:-60,
					  	toy:0
					  },
					  {
					  	movex:125,
					  	movey:374,
					  	tox:0,
					  	toy:20
					  },
					  {
					  	movex:295,
					  	movey:374,
					  	tox:-110,
					  	toy:0
					  }
					];
			var arr5=[
					  {
					  	movex:190,
					  	movey:405,
					  	tox:0,
					  	toy:30
					  },
					  {
					  	movex:190,
					  	movey:375,
					  	tox:105,
					  	toy:0
					  },
					  {
					  	movex:295,
					  	movey:375,
					  	tox:0,
					  	toy:176
					  },
					   {
						movex:295,
						movey:199,
						tox:-110,
						toy:0
					  },
					  {
					  	movex:185,
					  	movey:199,
					  	tox:0,
					  	toy:-65
					  },
					  {
					  	movex:185,
					  	movey:264,
					  	tox:-15,
					  	toy:0
					  },
					  {
					  	movex:185,
					  	movey:264,
					  	tox:0,
					  	toy:-110
					  },
					  {
					  	movex:185,
					  	movey:374,
					  	tox:-60,
					  	toy:0
					  },
					  {
					  	movex:125,
					  	movey:374,
					  	tox:0,
					  	toy:20
					  }
					 ]
	var i=0;
	var num=0;
	var _loak=false;
	function line1(arr1,num){
		    i=0;
		timer2=setTimeout(function(){
		    num++;
		    if(num>=arr1.length){
		        clearInterval(timer);
		        return false;
		    }
		    line1(arr1,num)
		},900);
		timer=setInterval(function(){
			i+=1;
		if(i>=8){			i=8;
			clearInterval(timer)
			}
			context.strokeStyle='red';
            context.lineCap='square';
            context.beginPath();
            if(arr1[num].tox==0){
            	context.moveTo(arr1[num].movex,arr1[num].movey);
           		context.lineTo(arr1[num].movex,arr1[num].movey-arr1[num].toy/8*i);
            }else{
            	 context.moveTo(arr1[num].movex,arr1[num].movey);
            	 context.lineTo(arr1[num].movex+arr1[num].tox/8*i,arr1[num].movey);
            }
           
            context.stroke();
             context.closePath();
		},100)
	}
	//line1(arr5,num);

x.addEventListener("tap",function(){
	if(_loak){
		return false
	}
	line1(arr3,num)
	_loak=true;
	y.style.display="none";
	y2.style.display="none";
	s1.style.display="none";
	s2.style.display="none";

},false)
y.addEventListener("tap",function(){
	
	if(_loak){
		return false;
	}
	line1(arr2,num)
	_loak=true;
	x.style.display="none";
	y2.style.display="none";
	s1.style.display="none";
	s2.style.display="none";
},false)
y2.addEventListener("tap",function(){
	if(_loak){
		return false
	}
	line1(arr1,num)
	_loak=true;
	y.style.display="none";
	x.style.display="none";
	s1.style.display="none";
	s2.style.display="none";
},false)
s1.addEventListener("tap",function(){
	
	if(_loak){
		return false;
	}
	line1(arr5,num)
	_loak=true;
	y.style.display="none";
	y2.style.display="none";
	x.style.display="none";
	s2.style.display="none";
	
},false)
s2.addEventListener("tap",function(){
	
	if(_loak){
		return false;
	}
	line1(arr4,num)
	_loak=true;
	y.style.display="none";
	y2.style.display="none";
	s1.style.display="none";
	x.style.display="none";
},false);
Return.addEventListener("tap",function(){
	if(_loak){
		context.clearRect(0,0,320,568);
		_loak=false;
		clearInterval(timer);
		clearTimeout(timer2);
		y.style.display="block";
		y2.style.display="block";
		s1.style.display="block";
		s2.style.display="block";
		x.style.display="block";		
	}else if(_loak==false){
			window.location.reload();
	}

	console.log(_loak)
})
/*ar _item=$(".container").find(".main");
		console.log(_item)
*/