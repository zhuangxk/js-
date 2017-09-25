var Book = function(id,name,price){
	//私有属性
	var num =1;
	//私有方法
	function checkId(){};

	//特权方法
	this.getName=function(){}
	this.getPrice=function(){}
	this.setName=function(){}
	this.setPrice=function(){}

	//对象公用属性
	this.id=id;

	//对象共有方法
	this.copy=function(){}

	//构造器
	this.setName(name);
	this.setPrice(price);
}
//类静态公共属性
Book.isChinese=true;
//类静态公共方法
Book.resetTime=function(){}

Book.prototype={
	//公共属性，公共方法
	isJSBook:false,
	display:function(){}
}
/**
 * 通过new关键字创建的对象实质是对新对象this的不断赋值，并将prototype指向类的prototype所指向的对象，
 * 而类的构造函数外面通过点语法定义的属性是不会添加到新对象上去的，
 */
/**
 * 2.2.3 闭包
 */
//利用闭包实现
//
var Book=(function(){
	//静态私有变量
	var bookNum = 0;
	//静态私有方法
	function checkBook(name){}
	//创建类
	function _book(newId,newName,newPrice){
		//私有变量
		var name,price;
		//私有方法
		function checkID(id){}
		//特权方法
		this.getName=function(){};
		this.setName=function(){};
		//共有属性
		this.id=newId;
		//共有方法
		this.copy=function(){
			console.log("copyed")
		}
		bookNum++;
		if(bookNum > 100){
			throw new Error('max 100');
		}
		//构造器
		this.setName(name);
		//this.setPrice(price);
	}
	//构建原型
	_book.prototype={
		//静态共有属性
		isJSBook:false,
		display:function(){}
	}
	//返回类
	return _book;
})()

/*var b= new Book();
b.copy()*/

/*for (var i = 120; i >= 0; i--) {
	new Book()
}*/
//创建类的安全模式 防止未使用new关键字
//
var Book2=function(title){
	if (this instanceof Book2) {
		this.title=title;
	} else {
		return new Book2(title);
	}
}
var b2=Book2('安全模式');
console.log(b2.title);

