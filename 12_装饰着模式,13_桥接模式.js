/**
 * 12
 * 装饰着模式  Decorator  	在不改变原有对象的基础上 
 * 通过进行包装扩展（添加属性或方法）使原有对象可以满足更复杂需求
 *
 *
 * 案例： 输入框提示 包装click事件
 */

/**
 * 13
 * 桥接模式
 * 桥接模式就是抽取很多方法的共同部分，然后将实现与抽象 通过桥架函数 连接在一起，实现解耦
 *
 *
 *
 */
/*
 桥接--多维模式的抽象    
 */
//运动类
function Speed(x,y){
	this.x=x;
	this.y=y;
}
Speed.prototype.run=function(){console.log('运动')}
//着色类
function Color(cl){
	this.color=cl;
}
Color.prototype.draw=function(){console.log('绘制颜色')}
//变形单元
function Shape(sp){
	this.sp=sp;
}
Shape.prototype.change=function(){console.log('改变形状')}
//说话单元
function Speek(wd){
	this.wd=wd;
}
Speek.prototype.say=function(){console.log('书写')}


//创建球
function Ball(x,y,c){
	this.Speed=new Speed(x,y);
	this.color=new Color(c);
}
Ball.prototype.init=function(){
	this.Speed.run();
	this.color.draw();
}

//创建人
function Person(x,y,f){
	this.Speed=new Speeed(x,y);
	this.font=new Speek(f);
}
Person.prototype.init=function(){
	this.Speeed.run();
	this.font.say();
}