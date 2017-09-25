/**
 * 1.1灵活的语言javascript
 * 函数链式调用，每个函数返回this
 * 1
 */
///为函数添加通用添加方法的addMethod()
///定义一个为函数添加多个方法的addMehtod
///定义一个既可以为函数原型添加方法，又可以为自身添加方法的addMethod
Function.prototype.addMethod=function(name,fn){
	this.prototype[name]=fn;
	return this;
}
Function.prototype.addMethods=function(fns){
	for (variable in fns) {
		this.prototype[variable]=fns[variable];
	}
	return this
}
Function.prototype.addMethod2=function(name,fn){
	this.prototype[name]=fn;
	this[name]=fn;
	return this;
}
//addMethod 测试
var a=function(){}
a.addMethod('test',function(){
	console.log('add test');
	return this;
})

var b =new a();
b.test();

//addMethods测试
var c=function(){};
c.addMethods({
	test1:function(){
		console.log('add test1');
		return this;
	},
	test2:function(){
		console.log('add test2');
		return this;
	}
});
var d = new c();
d.test1().test2();

//addMethod2测试
var e=function(){}
e.addMethod2('test3',function(){
	console.log('add test3');
	return this;
});
e.test3();

