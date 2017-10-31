/**
 * 站长统计
 */
var count =(function(){
	var img=new Image();//图片缓存 备忘录模式
	return function(param){
		var str = 'www.baidu.com?';

		for (i in param) {
			str+=i + '='+iparam[i]'+'&';
		}
		img.src=str;
	}
})()
count({mun:10});

/**
 *2 JSONP
 *3 代理模板
 *
 *  A: 请求页面： 1，回调函数
 *  			  2，隐藏的iframe ,用于加载提交的页面准备
 *  			  3，提交的iframe  含有参target指向隐藏的iframe  提交数据到外域
 *
 *  C：外域    ：外域 收到要重定向的url 和 回调函数 等，，计算加上一个参数 返回给代理页面
 *
 *
 *  B：代理模板：解析参数 调用回调函数；
 *
 *
 *
 */
/**
 * 这种跨域模式复杂，不好用！ 而且  把返回值放在地址中，暴露出来 而且 有长度限制
 *
 */

