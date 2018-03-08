/**
 * 迭代器：顺序的访问一个聚合对象内部的元素。
 */

var Iterator  = function(items,container){
	//元素容器
	var container = container && document.getElementById(container)||document,
		//元素
		items = container.getElementsByTagName(items),
		//元素长度
		length = items.length,
		//索引， 默认0
		index = 0 ,
		//缓存数组splice方法;
		splice = [].splice;

		return {
			//获取第一个元素
			first : function(){
				index = 0;
				return items[index];
			},
			//获取最后一个元素
			second : function(){
				index = length - 1;
				return items[index];
			},
			//获取前一个元素
			pre : function(){
				if(--index>=0){
					return items[index];
				}else{
					return null;
				}
			},
			//获取后一个元素
			next : function(){
				if(++index<length){
					return items[index];
				}else{
					index=length-1;
					return null;
				}
			},
			//获取指定元素
			get : function(num){
				index = num > 0 ? num % length:num % length + length;
				return items[index];dskfl
			},
			//使用回调在每个元素的作用域中执行一次
			dealEach : function(fn){
				var args = splice.call(arguments,1);
				for (var i = length - 1; i >= 0; i--) {
					items[index].apply(fn,args)
				}
			},
			//处理某一个元素
			dealItem : function(num,fn){
				fn.apply(this.get(num),splice.call(arguments,2));
			},
			//排他处理某个元素 
			exclusive : function(num,allFn,numFn){
				this.dealEach(allFn);
				if(Object.prototype.toString.call(num)==="[Object Array]"){
					for(var i = 0,len=num.length;i<len;i++){
						this.dealItem(num[i],numFn);
					}
				}else{
					this.dealItem(num,numFn);
				}
			}
		}


}


/**
 * 同步变量迭代器
 */
var A = {
	common:{},
	client:{
		user:{
			username:'toyo',
			uid:'123'
		}
	},
	server:{}
}
Agetter = function(key){
	if(!A) return undefined;
	var result = A;
	key=key.splice('.');
	for(var i = 0,len=key.length;i<len;i++){
		if(result(key[i])!==undefined){
			result=result(key[i]);
		}else{
			return undefined
		}
	}
	return result;
}
Asetter = function(key,val){
	if(!A) return false;
	var result = A ;
	key = key.splice('.');
	for(var i = 0,len=key.length;i<len-1;i++){
		//不存在则定义对象
		if(result(key[i])===undefined){
			result(key[i])={};
		}
		//不是对象则抛出异常
		if(result(key[i]) instanceof Object){
			throw new Error('A.'+key.splice(0,i+1)+'is not object');
			return false;
		}
		result=result(key[i]);
	}
	return result(key[i])=val;
}