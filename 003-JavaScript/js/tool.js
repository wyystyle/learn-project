function tool(){
	function Carousel(option){
		this.oBox=document.getElementById(option.id);
		this.oImgUl=null;
		this.aImg=option.aImg;
		this.width=option.width;
		this.height=option.height;
		this.leftBtn=null;
		this.rightBtn=null;
		this.oBttomBtn=null;
		this.now=0;
		this.playDuration=option.playDuration;
		// console.log(this.oBox)
		
		//创建Dom节点
		this.init();
		this.bindEvent();
		if(this.playDuration){
			this.autoPlay();
		}

	}

	Carousel.prototype.init=function(){	
		this.oImgUl=document.createElement('ul');
		this.oBox.style.width=this.width+'px';
		this.oBox.style.height=this.height+'px';
		this.oBox.style.position='relative';
		for(var i=0;i<this.aImg.length;i++){
			oLi=document.createElement('li');
			oImg=document.createElement('img');
			oLi.style.position='absolute';
			oLi.style.left=0;
			oLi.style.top=0;
			if(i==0){
				oLi.style.opacity=1;
				oLi.style.zIndex=10;
			}else{
				oLi.style.opacity=0.5;
				oLi.style.zIndex=0;
			}
			oImg.style.width=this.width+'px';
			oImg.style.height=this.height+'px';
			oImg.src=this.aImg[i];
			this.oImgUl.appendChild(oLi);
			oLi.appendChild(oImg);
		}
		//创建左右按钮
		this.leftBtn=document.createElement('span');
		this.rightBtn=document.createElement('span');
		//添加Css属性
		this.leftBtn.className='leftBtn';
		this.rightBtn.className='rightBtn';
		this.leftBtn.innerHTML="&lt;";
		this.rightBtn.innerHTML="&gt;";
		this.leftBtn.style.zIndex=999;
		this.rightBtn.style.zIndex=999;
		

		//创建底部按钮
		this.oBttomBtn=document.createElement('ul');
		this.oBttomBtn.style.zIndex=999;
		this.oBttomBtn.className='oBttomBtn';
		// this.oBttomBtn.style.marginLeft=-this.oBttomBtn.offsetWidth*0.5 +'px';
		for(var i=0;i<this.aImg.length;i++){
			oLi=document.createElement('li');
			// oLi.style.zIndex=999;

			if(i==0){
				oLi.className='active';
			}
			this.oBttomBtn.appendChild(oLi);

		}



		// 插入到容器中
		this.oBox.appendChild(this.leftBtn);
		this.oBox.appendChild(this.rightBtn);
		this.oBox.appendChild(this.oBttomBtn);
		//把底部按钮居中
		this.oBttomBtn.style.marginLeft=-this.oBttomBtn.offsetWidth*0.5 +'px';
		this.oBox.appendChild(this.oImgUl)
	}
	Carousel.prototype.bindEvent=function(){
		//显示下一张图片
		this.rightBtn.onclick=function(){
			
			// for(var i=0;i<this.oImgUl.children.length;i++){
			// 	this.oImgUl.children[i].style.zIndex=0;
			// 	this.oImgUl.children[i].style.opacity=0.5;
			// 	this.oBttomBtn.children[i].className='';
			// }
			this.now++;
			if(this.now>=this.oImgUl.children.length){
				this.now=0
			}
			this.tab();
			// this.oImgUl.children[this.now].style.zIndex=10;
			// this.oImgUl.children[this.now].style.opacity=1;
			// this.oBttomBtn.children[this.now].className='active';
		}.bind(this);
		//显示上一张
		this.leftBtn.onclick=function(){
			// for(var i=0;i<this.oImgUl.children.length;i++){
			// 	this.oImgUl.children[i].style.zIndex=0;
			// 	this.oImgUl.children[i].style.opacity=0.5;
			// 	this.oBttomBtn.children[i].className='';
			// }
			this.now--;
			if(this.now<0){
				this.now=this.oImgUl.children.length-1;
			}
			this.tab();
			// this.oImgUl.children[this.now].style.zIndex=10;
			// this.oImgUl.children[this.now].style.opacity=1;
			// this.oBttomBtn.children[this.now].className='active';

		}.bind(this);
		//底部按钮事件
		var _self=this;
		for(var i=0;i<this.oBttomBtn.children.length;i++){

			this.oBttomBtn.children[i].index=i;
			this.oBttomBtn.children[i].onclick=function(){
				_self.now=this.index;
				_self.tab();
			}
		}
	}
	Carousel.prototype.tab=function(){
		for(var i=0;i<this.oImgUl.children.length;i++){
			this.oImgUl.children[i].style.zIndex=0;
			this.oImgUl.children[i].style.opacity=0.5;
			this.oBttomBtn.children[i].className='';
		}
		
		this.oImgUl.children[this.now].style.zIndex=10;
		// this.oImgUl.children[this.now].style.opacity=1;
		animation(this.oImgUl.children[this.now],{opacity:100})
		this.oBttomBtn.children[this.now].className='active';
	}
	Carousel.prototype.autoPlay=function(){
		var timer=null;
		timer=setInterval(this.rightBtn.onclick,this.playDuration);
		this.oBox.onmouseover=function(){
			clearInterval(timer);
		}
		this.oBox.onmouseout=function(){
			timer=setInterval(this.rightBtn.onclick,this.playDuration);
		}.bind(this);
	}
// 	new Carousel({
// 		id:'div',
// 		aImg:[
// 			'images/006.jpg',
// 			'images/007.jpg',
// 			'images/008.jpg',
// 			'images/009.jpg',
// 		],
// 		width:1226,
// 		height:460,
// 		playDuration:2000
// })
}
