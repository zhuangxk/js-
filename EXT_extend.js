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
	return !!v && Object.prototype.toString.call(v) === '[object Object]';
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
	var oc = Object.prototype.constructor;
	return function(sb, sp, overrides) {
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
		sbp.superclass = sbp.supr = (function() {
			return spp;
		});
		sbp.override = io;
		Ext.override(sb, overrides);
		sb.extend = function(o) {
			return Ext.extend(sb, o);
		};
		return sb;
	};
}();


var A = function(){
	this.A=1;
}
var B = Ext.extend(A, {
	constructor:function(C){
		A.apply(this, arguments);
		this.C=C;
	},
	B: 3
});
var b =new B(5);
console.log(b.A,b.B)
console.log(b.constructor)
console.log(b.superclass)