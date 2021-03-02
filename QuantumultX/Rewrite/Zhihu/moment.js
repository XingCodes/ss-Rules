try{
	let body = $response.body;
	body=JSON.parse(body);
	body['data'].forEach((element, index)=>{
	     if(element.hasOwnProperty('ad')){      
	       body['data'].splice(index,1)  
	    }
	});
	body=JSON.stringify(body);
	$done({body});
}
catch(err){
	console.log(`知乎关注列表去广告出现异常：${err}`,"INFO");
}