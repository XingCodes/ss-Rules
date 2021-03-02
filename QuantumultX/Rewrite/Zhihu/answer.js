try{
	let body = $response.body;
	body=JSON.parse(body);
	delete body['ad_info'];
	// body['data'].forEach((element, index)=> {
	//     if(element['author']['name']=="盐选推荐"||element['author']['name']=="盐选科普"){ 
	//           body['data'].splice(index,1)  
	//      }
	//  })
	body=JSON.stringify(body);
	$done({body});
}
catch(err){
	console.log(`知乎回答列表去广告出现异常：${err}`,"INFO");
}