/**
 * 继承 1类式继承
 *
 * 
 */
function SuperClass(){
	this.superValue='father';
	this.books=['javascript','css'];
}
SuperClass.prototype.getsuperValue=function(){
	return this.superValue;
}

function SubClass(){
	this.subValue='child';
}
//继承父类
SubClass.prototype=new SuperClass();

//添加子类方法
SubClass.prototype.getsubValue=function(){
	return this.subValue;
}
var sub = new SubClass(); //创建子类
console.log(sub.getsuperValue());
console.log(sub.getsubValue());
console.log(sub instanceof SubClass);
console.log(sub instanceof SuperClass);
console.log(SubClass instanceof SuperClass);

//问题
var instance1 = new SubClass();
var instance2 = new SubClass();

/*console.log(instance1.books);
instance1.books.push('html');
console.log(instance2.books); //instance1 无意中修改了instance2的books值*/

//创建即继承 构造函数继承
console.log('创建即继承 构造函数继承');

function SubClass2(id){
	SuperClass.call(this,id);
}
var instan1= new SubClass2();
var instan2= new SubClass2();

console.log(instan1.books);
instan1.books.push('html');
console.log(instan2.books);
//可以解决父类引用值被无意修改的问题，但是继承不了 prototype，违背的类的重用性

/**
 * 组合继承
 * 
 */
function Super(name){
	this.name=name;
	this.books=['js','css'];
}
Super.prototype.getName=Function(){
	console.log(this.name);
}
function Child(name,time){
	Super.call(this,name);  //构造函数继承
	this.time=time;
}
Child.prototype=new Super(); //类继承
Child.prototype.getTime=function(){
	return this.time;
}

//原型式继承 目的是复制一份对象
function InheritObject(o){
	function F(){}
	F.prototype=o;
	return new F();
}
// 子类中 值类型的属性被复制，引用类型的属性被共用
/**
 * 寄生式继承
 */
var book2={
	name:'js book',
	alikebook:['css','js']
}
function createBook(obj){
	var o = new InheritObject(obj);
	o.getName=function(){}
	return o;
}

//寄生组合式继承
function inheritPrototype(subClass,superClass){
	var p = InheritObject(superClass.prototype);
	p.constructor=subclass;
	subClass.prototype=p;
}

//终极实现!

function SuperC(name){
	this.name=name;
	this.colors=['red','blue'];
}
SuperC.prototype.getNmae=function(){
	return this.name;
}

function SubC(name,time){
	SuperC.call(this,name);
	this.time=time;
}
inheritPrototype(SubC,SuperC);

SubC.prototype.getTime=function(){
	return this.time;
}