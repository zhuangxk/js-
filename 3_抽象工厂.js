//抽象工厂方法
var VehicleFactory = function(Sub, Super) {
	if (typeof VehicleFactory[Super] === 'function') {
		function F() {};
		F.prototype = new VehicleFactory[Super]();
		Sub.prototype = new F();
		Sub.prototype.constructor = Sub; //书中有错
	} else {
		throw new Error('抽象类未创建')
	}

}
//抽象类Car
VehicleFactory.Car=function(){
	this.type='Car';
	console.log('Car');
}
VehicleFactory.Car.prototype={
	getPrice:function(){
		return new Error('抽象方法不能调用')
	}
}


//子类
function BMW (price){
	this.price=price;
	console.log('BMW');
}
VehicleFactory(BMW,'Car');//继承抽象方法
BMW.prototype.getPrice=function(){
	return this.price;
}

var bmw = new BMW(123);
console.log(bmw)
