/**
 * 将一个类（对象）的接口（方法或属性）转化为另一个接口 使类（对象）之间的不兼容通过适配器解决
 *
 *
 * 用途1， 引入框架
 * 用途2， 参数适配 多个参数封装成一个对象传入
 * 用途3， 数据适配 。如 把数组 适配成对象
 * 用途4， 服务器数据适配  ，服务器数据格式改变的时候，只要在接受之前 适配成之前的数据格式就好了
 * 
 * 
 */


function ajaxAdapter(data){
	return [data['key1'],data['key2'],data['key3']]
};
$.ajax({
	url:'some.php',
	success:function(data,status){
		if(data){
			dosomething(ajaxAdapter(data));
		}
	}
});