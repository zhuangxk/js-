var Ext = {};

Ext.isIE = (function() {
	var ua ='opera', //navigator.userAgent.toLowerCase(),
		check = function(r) {
			return r.test(ua);
		},
		isOpera = check(/opera/);
	return !isOpera && check(/msie/);
})();
Ext.isObject = function(v) {
	return !!v && Object.prototype.toString.call(v) === '[object Object]'; //如果是函数 [object Function]
};
Ext.apply = function(o, c, defaults) {
	// no "this" reference for friendly out of scope calls
	if (defaults) {
		Ext.apply(o, defaults);
	}
	if (o && c && typeof c == 'object') {
		for (var p in c) {
			o[p] = c[p];
		}
	}
	return o;
};
Ext.override = function(origclass, overrides) {
	if (overrides) {
		var p = origclass.prototype;
		Ext.apply(p, overrides);
		if (Ext.isIE && overrides.hasOwnProperty('toString')) {
			p.toString = overrides.toString;
		}
	}
};
Ext.extend = function() {
	// inline overrides
	var io = function(o) {
		for (var m in o) {
			this[m] = o[m];
		}
	};
	//扩展；~并没有好用的
/*	var superclass = function(sp){
		var s = function(){return arguments.callee.superclass;};
		s.superclass=sp;
		return s;
	}*/
	var oc = Object.prototype.constructor;
	return function(sb, sp, overrides) {
		//sp如果是对象，实际只传入两个参数，Sb是自动生成的
		//sp如果不是对象，就当是子类函数
		if (Ext.isObject(sp)) {
			overrides = sp;
			sp = sb;
			sb = overrides.constructor != oc ? overrides.constructor : function() {
				sp.apply(this, arguments);
			};
		}
		var F = function() {},
			sbp, spp = sp.prototype;
		F.prototype = spp;
		sbp = sb.prototype = new F();
		sbp.constructor = sb;
		sb.superclass = spp;
		if (spp.constructor == oc) {
			spp.constructor = sp;
		}
		sb.override = function(o) {
			Ext.override(sb, o);
		};
		/*sbp.superclass = sbp.supr = superclass(spp)*/
		sbp.superclass = sbp.supr = (function() {
			return spp;
		});//加一层括号暂时看不出意图 知乎解释：分组运算符，与不加效果完全一样
		sbp.override = io;
		Ext.override(sb, overrides);
		sb.extend = function(o) {
			return Ext.extend(sb, o);
		};
		return sb;
	};
}();






var A = function(){
	console.log('A执行')
	this.A=1;
}
var B = Ext.extend(A, {
	constructor:function(B){
		console.log('B执行')
		console.log(this.superclass())
		//A.apply(this, arguments);
		this.superclass().constructor(B);
		this.B=B;
	},
	B: 3
});
var C = Ext.extend(B,{
	constructor:function(C){
		console.log('C执行')
		console.log(this.superclass())
		this.superclass().constructor(7)
		this.C=C;
	},
	C: 3
});

var b =new B(5);
var c =new C(8);
console.log(b,c,b);
console.log(b.supr);
