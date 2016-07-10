function Slider(opt){
	this.wrap = opt.wrap;
	this.left= opt.left;
	this.right = opt.right;
	this.callback = opt.callback;
	this.type=opt.type;
	this.int();
	this.inDom();
	this.inEvent();
	this.btn=opt.btn;
	this.btn2=opt.btn2;
	this.map=opt.map;
}
Slider.prototype={
	int : function(){
		this._height=$(window).height();
		this.idx=0;
		this._suo=false;
		this.Tap=false;
		
	},
	inDom : function(){
		var self=this;
		self._item=self.wrap.find(".main");
		for(var i=0;i<self._item.length;i++){
			$(self._item[i]).css('-webkit-transform','translate3d(0,'+i*self._height+'px'+',0)');
		}
		if(self.idx==0){
			self._suo=true;
			$(self._item[self.idx]).show().siblings().hide();
			setTimeout(function(){
				self._suo=false;
			},1500)
			console.log(self._suo)
		}
	},
	inEvent :function(){
		var startY,moveY,offsetY,self=this,len=this._item.length;
		self._item.on("touchstart",function(e){
			//self._suo=true;	
			
			e.preventDefault();
			self.startY=e.touches[0].screenY;
			self.offsetY=0;

		})
		self._item.on("touchmove",function(e){
			e.preventDefault();
			if(self._suo){
				//console.log(self._suo)
				return false;
			};
			if(self.Tap){
				return false;
			}
			self.moveY=e.touches[0].screenY;
			self.offsetY=self.moveY-self.startY;
			var _height=self._height,
				_ofset=self.offsetY;
			for(var i=0;i<len;i++){
				if($(self._item[i])){
					$(self._item[i]).css('-webkit-transform','translateY('+(((i-self.idx)*_height)+_ofset)+'px');
					$(self._item[i]).css('-webkit-transition','none');
				}
			}/*"+(((i - self._idx) * width) + offsetX) + "px*/
		})
		self._item.on("touchend",function(e){
			e.preventDefault();
			var offsetY=self.offsetY;
			if(offsetY<0){
				self.starY("+1");
			}else if(offsetY>0){
				self.starY("-1");
			}
		})
	},
	starY : function(num){
		var idx=this.idx,
			_width=this._width,
			_height=this._height,
			_item=this._item,
			len=_item.length;
			if(typeof(num)=="number"){
				nowIndex=idx+num;
			}

			if(typeof(num)=="string"){
				nowIndex=idx+num*1;
			}
			if(nowIndex>len-1) nowIndex=len-1;
			if(nowIndex<0) nowIndex=0;
			//console.log(nowIndex)	
			$(_item[nowIndex]) && $(_item[nowIndex]).css('-webkit-transform','translate3d(0,0,0)');
			$(_item[nowIndex-1]) && $(_item[nowIndex-1]).css('-webkit-transform','translate3d(0,'+(-_height)+'px,0)');
			$(_item[nowIndex+1]) && $(_item[nowIndex+1]).css('-webkit-transform','translate3d(0,'+(_height)+'px,0)');

			$(_item[nowIndex]) && $(_item[nowIndex]).css('-webkit-transition','all 0.3s');
			$(_item[nowIndex-1]) && $(_item[nowIndex-1]).css('-webkit-transition','all 0.3s');
			$(_item[nowIndex+1]) && $(_item[nowIndex+1]).css('-webkit-transition','all 0.3s');
			this.idx=nowIndex;		
			this.callback && this.callback();
			//this.ani();
	}//,
	/*ani : function(){
		if(this.idx==2){
			
		}
		
	}*/
	
}