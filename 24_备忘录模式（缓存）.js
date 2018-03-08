/**
 * 备忘录 缓存， 进行ajax请求 登或类似操作 进行每次请求的缓存 避免重复请求
 * 归根揭底 还是闭包
 */

 function Page(){
 	var cache={}
 	return function(page,fn){
 		if(cache[page]){
 			showpage(page,cache[page]);
 			fn && fn();
 		}else{
 			$post('data.php',{
 				page:page
 			},function(res){
 				if(res.errNo==0){
 					showpage(page,res);
 					cache[page]=res;
 					fn&&fn();
 				}
 			})
 		}
 	}
 }