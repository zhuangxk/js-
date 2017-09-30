/**
 * 简单工厂模式：创建一个新对象，然后包装增强其属性和功能实现
 * 与类实例化创建不同：类实例化的对象可以共享方法，而简单工厂模式创建的每个对象都是新的
 */

function createObj(type, text) {
	var o = new Object();
	o.content = text;
	switch (type) {
		case 1:
			o.get = function() {}
			break;
		case 2:
			o.set = function() {}
			break;
		default:
			// statements_def
			break;
	}
	return o;
}
/**
 * 安全模式类: 防止调用者 遗漏new关键字
 */
var Demo = function() {
	if (!this instanceof Demo) {
		return new Demo();
	}
}
Demo.prototype.show = function() {};
/**
 * 安全工厂方法
 */

var Factory = function(type, content) {
	if (this instanceof Factory) {
		return new this[type](content);
	} else {
		return new Factory(type, content);
	}
}
Factory.prototype = {
		java: function() {},
		UI: function() {},
		JavaScript: function(content) {
			this.content = content;
			(function(content) {
				console.log('javascript :' + content);
			})(content)
		}
	}
	//调用
var data = [{
	type: 'java',
	content: ''
}, {
	type: 'UI',
	content: ''
}, {
	type: 'JavaScript',
	content: 'GO!'
}];
data.forEach(function(v, i, a) {
	Factory(v.type, v.content);
})
/**
 * 抽象工厂模式 Abstract Factory
 */
//抽象类
var Car = function () {}
Car.prototype={
	getPrice:function(){
		throw new Error('抽象方法不能调用')
	}
}
var c = new Car();
c.getPrice();

