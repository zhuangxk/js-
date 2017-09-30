/**
 *以下图片轮播类 实现 了 简单的继承。通过简单重写成员方法 实现自有功能；
 * @
 */
/**
 * 图片轮播类 基类
 */
var LoopImages = function(imageArr,container){
	this.imageArr = imageArr;
	this.container = container;
	this.createImage = function(){};
	this.changeImage = function(){};
}

/**
 * [上下滑动轮播类]
 */
var SlideLoopImg = function(imageArr,container){
	LoopImages.call(this,imageArr,container);
	this.changeImage = function(){
		console.log('上下滑动切换');
	}
}
/**
 * 渐隐切换类
 */
var FadeLoopImg = function(imageArr,container,arrow){
	LoopImages.call(this,imageArr,container);
	this.arrow= arrow;
	this.changeImage = function(){
		console.log('渐进切换');
	}
}
var slide = new FadeLoopImg(['loop.jpg','loop2.jpg'],'div',['left.jpg','right.jpg']);
slide.changeImage();


/*
缺陷：每次继承 就会创建一次父类 （如果父类存在大量逻辑运算 会增加消耗）
为提高性能，需要恭喜：
将有差异的放在 构造函数中，消耗大的逻辑放在原型中
所以要用法组合继承模式
 */
/**
 * 组合继承 --改造
*/
var LoopImages2 = function(imageArr, container) {
	this.imageArr = imageArr;
	this.container = container;
}
LoopImages2.prototype = {
		constructor: LoopImages2,
		createImage() {
			console.log('创建基类图片');
		},
		changeImage() {
			console.log('基类切换图片');
		}
	}
/**
 * 上下滑动
 */
var SlideLoopImg2 = function(imageArr, container) {
	LoopImages2.call(this, imageArr, container); //构造函数继承
}
SlideLoopImg2.prototype = new LoopImages2(); //  原型继承
SlideLoopImg2.prototype.changeImage = function() {
		console.log('上下滑动切换');
	}
/**
 * 渐隐切换
 */
var FadeLoopImg2 = function(imageArr, container, arrow) {
	LoopImages2.call(this, imageArr, container);
	this.arrow = arrow;
}
FadeLoopImg2.prototype = new LoopImages2();
FadeLoopImg2.prototype.changeImage = function() {
	console.log('渐隐切换类');
}

var fade = new FadeLoopImg2([], 'div');
fade.changeImage();

