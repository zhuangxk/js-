/**
 * 实例	
 */
function Strategy(){
	var _strategy={
		notNull:function(value){
			return /\s+/.test(value)?'请输入内容':'';
		},
		number:function(valur){
			return /^[0-9]+(\.[0-9]+)?$/.test(value)?'请输入数字':'';
		},
		phone:function(value){
			return /^\d{13}$/.test(value)?'请输入手机号':'';
		}

	};
	return {
		check:function(type,value){
			_strategy[type]&&_strategy[type](value);
		},
		addStrategy:function(type,fn){
			_strategy[type]=fn;
		}
	}
}
/**
 * 策略模式 对算法的封装
 * jquery 的animate 就是策略模式实现
 * 
 */