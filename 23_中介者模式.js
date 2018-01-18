/**
 * 中介者模式 是观察者模式的简化 中介者模式只能模块只能订阅，不能发布，只有中介者统一发布
 * 同样是用于模块间的通信 来解决模块间的耦合
 * 
 */

// 核心方法

var Mediator = function(){
	var _msg={};
	return {
		register:function(type,fn){
			if(_msg[type]){
				_msg[type].push(fn);
			}else{
				_msg[type]=[fn];
			}
		},
		send:function(type){ //此处单向通信 不需要参数？？ 可以有
			if(_msg[type]){
				for (var i = _msg[type].length - 1; i >= 0; i--) {
					_msg[type][i]();
				}
			}
		}
	}
}();

Mediator.register('test',function(){
	console.log('test');
})

Mediator.send('test');
//实例 设置用户界面