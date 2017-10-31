/**
 * 	为复杂的子系统接口 提供统一的更高级别接口
 *  应用，处理浏览器兼容，如事件添加。
 */
function addEnvent(dom, type, fn) {
	if (dom.addEventListener) {
		dom.addEventListener(type, fn, false);
	} else if (dom.attachEvent) {
		dom.attachEvent("on" + type, fn);
	} else {
		dom['on' + type] = fn;
	}
}


/**
 * 课后题  获取css样式 只获取内联样式
 * 1  dom.style
 * 2  getComputedStyle方法
 * 有两个参数：第一个参数为要获取计算样式的元素，第二个参数可以是null、空字符串、伪类(如:before,:after)，这两个参数缺一不可。
 * 3  currentStyle  IE专用
 *
 */

function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}