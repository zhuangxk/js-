/**
 * javascript 类测试
 */

function inheritObject(o){
	function F(){};
	F.prototype=o;
	return new F();
}
function inheritPrototype(SubClass,SuperClass){
	var p = inheritObject(SuperClass.prototype);
	p.constructor=SubClass;
	SubClass.prototype=p;
}
//原型对象继承封装
function inherit(SubClass,SuperClass){
	function F(){};
	F.prototype=SuperClass.prototype;
	var p = new F();
	p.constructor=SubClass;
	SubClass.prototype=p;
};

var File = (function(){
	var count=0;
	var fileSize=0;
	function setSize(s){
		fileSize=s;
	}
	function _file(name,size){
		this.name=name;
		this.size=size;
		count++;
		if(count>5) throw new Error('文件个数超出5个限制');
		setSize(size)
		this.display = function(){
			console.log('name:'+this.name);
			console.log('count:'+count);
			console.log('size:'+size);
			console.log('fileSize:'+fileSize);
		}
	}
	_file.prototype={
		constructor:_file,   //此时真正的构造函数是_file File指向_file  所以必须让constructor指向_file
		copy:function(){
			return new File(this.name,fileSize)
		}
	}
	return _file;
})()


var Image=(function(){
	var Num=0;
	var _image=function(name,size,view){
		File.call(this,'img','1mb');
		this.view=view;
	}
	inherit(_image,File);
	_image.prototype.display=function(){
		console.log('go');
		console.log(this.view);
	}
	return _image;
})()




var f = new File('word','100kb');
f.display();
var m = new Image('img','www',true)
m.display();
console.log(m.copy)



