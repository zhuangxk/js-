/**
 * 工厂模式追求创建的结果，
 * 建造者模式 不仅得到结果 更参与了创建过程
 *
 * 缺点：无形中增加了机构复杂性
 */

function Human(param){
	this.skill=param && param.skill || '保密';
	this.hobby=param && param.hobby || '保密';
}
Human.prototype={
	constructor:Human,
	getkill(){
		return this.skill;
	},
	gethobby(){
		return this.hobby;
	}
}
//实例化姓名类
function Name(name){
	var that = this;
	(function(that,name){
		that.WholeName=name;
		if(name.indexOf(' ')>-1){
			that.FirstName=name.slice(0,name.indexOf(' '));
			that.SecondName=name.slice(name.indexOf(' '));
		}
	})(that,name)
}
//实例化职位类 sdc
function Work(work){
	var that = this;
	(function (that,work){
		switch (work) {
			case 'code':
				that.work='工程师';
				break;
			case 'UI':
				that.work = '设计师';
				break;
			default:
				// statements_def
				break;
		}
	})(that,work)
}



var person = function(name, work){
	var _person = new Human();
	_person.name=new Name(name);
	_person.work=new Work(work);
	return _person;
}
var p  = new person('tokyoq','code');
console.log(p)