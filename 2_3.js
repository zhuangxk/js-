/**
 *  多继承 
 *  ---理论上js只有一条原型链 所以只能复制属性 
 */

//属性复制 单继承 浅复制
var extend = function(target, source) {
	for (var property in source) {
		targget[property] = source[property];
	}
	return target;
}

//多继承
var mix = function() {
	var i = 1,
		len = arguments.length,
		target = arguments[0],
		arg;
	for (; i < len; i++) {
		arg = arguments[i];
		for (var property in arg) {
			target[property] = arg[property];
		}
	}
	return target;
}
//扩展到object
Object.prototype.mix=function(){
	var i=0,
	len,arguments.length,
	arg;
	for (var property in arg) {
		this[property]=arg[property];
	}
}

/**
 * 多肽，js实现多肽 通过监视传过来的arguments参数的length属性
 */