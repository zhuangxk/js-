/**
 * 责任链模式
 * 把复杂的问题颗粒化，
 * 责任链定义了请求的传递方向，通过多个多个对象的请求的	传递实现一个复杂逻辑
 * 对于责任链上的每一个粒度 都可以接受请求信息
 * 
 */
// 需求 输入检查，输入提示 简单示例

/**
 * [SendDate 第一站]
 * @Author   ZhuangXK
 * @DateTime 2017-11-03T16:20:57+0800
 * @param    {[type]}                 data     请求数据
 * @param    {[type]}                 dealType 响应数据处理对象
 * @param    {[type]}                 dom      事件源
 */
function SendDate(data,dealType,dom){
	//ajax
	var xhr = new XMLHttpRequest(),
	url='get.php?';
	xhr.onload=functoin(){
		if((xhr.status>=200&&xhr.status<300)||xhr.status=304){
			dealData(xhr.responseText,dealType,dom);//进入数据处理阶段
		}else{

		}
	}
	for (i in data) {
		url+='&'+i+'='+data[i];
	}
	xhr.open('get',url,true);
	xhr.send(null);
}
/**
 * 数据适配
 * @Author   ZhuangXK
 * @DateTime 2017-11-03T16:34:41+0800
 * @param    {[type]}                 data     响应数据
 * @param    {[type]}                 dealType 响应数据处理对象
 * @param    {[type]}                 dom      事件源
 * @return   {[type]}                          [description]
 */
function dealData(data,dealType,dom){
	var dataType = Object.prototype.toString.call(this);
	switch (dealType) {
		case 'sug':
			if(dataType=='[object Array]'){
				createSug(data,dom); //传入下一阶段
			}
			if(dataType=='[object object]'){
				var newdate=[];
				for (i in data) {
					newdate.push(data[i]);
				}
				createSug(newdate,dom);
			}
		case 'validate':
			return createvalidate(data,dom);
			break;
		default:
			// statements_def
			break;
	}
}
//组件
function createSug(data,dom){
	var i =0,
		len = data.length,
		html='';
	for(;i<len;i++){
		html + = '<li>'+ data[i] +'</li>'
	}
	dom.parentNode.getElementsByTagName('ul')[0].innerHTML=html;
}
function createvalidate(){}