/**
 *	1,命名空间
 *	2,管理模块

 * 最简单的单例模式  >>命名空间
 */

var namespace ={
	g:function(){},
	css:function(){return this.g(id)}
}

//代码库
var ZXk ={
	Util:{
		get:funciton(){}
	},
	Ajax:{
		post:function(){}
	}
}

//模拟静态变量
var Conf=(function(){
	var config={
		MAX:100,
		MIN:10
	}
	return {
		get:function(name){
			return config[name]?config[name]:null;
		}
	}
})()

//懒性单例

var LazySingle = (function(){
	var _instance=null;
	function Single(){
		 return {
		 	A:1,
		 	B:2
		 }
	}
	return function(){
		if(!_instance){
			_instance=Single();
		}
		return _instance;
	}
})()