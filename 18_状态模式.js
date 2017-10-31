/**
 * 超级玛丽
 * 状态管理 能有效的简化分值判断逻辑
 * 实现： 利用闭包储存状态 暴露出 改变状态和执行方法
 */

var MarryState = function(){
	var _currentState={},
	states={
		jump:function(){console.log('jump')},
		move:function(){console.log('move')},
		shoot:function(){console.log('shoot')},
		squat:function(){console.log('squat')}
	}
	var Action = {
		/*设置状态*/
		changeState:function(){
			var args = arguments;
			_currentState={};
			if(args.length){
				for (var i = args.length - 1; i >= 0; i--) {
					_currentState[args[i]] = true;
				}
			}
			return this;
		},
		/*根据状态执行*/
		gose:function(){
			for (item in _currentState) {
				states[item]&&states[item]();
			}
			return this;
		}
	}
	return {
		changeState:Action.changeState,
		gose:Action.gose
	}
}
//test
MarryState().changeState('jump','move').gose().changeState('move').gose();
//COPY
new MarryState().changeState('jump','move').gose().changeState('move').gose();