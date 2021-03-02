try{
	let body = $response.body;
	$log('zhihu开始',"INFO");
	body=JSON.parse(body);
	// body['data'].forEach((element, index)=> {
	//     if(element['card_type'] === 'slot_event_card' || element.hasOwnProperty('ad') || (element.hasOwnProperty('extra') && element['extra'].hasOwnProperty('type') && element['extra']['type'] === 'zvideo')){      
	//        body['data'].splice(index,1)  
	//     }
	// });
	body['data'].filter((element)=> {
	    let flag = !(element['card_type'] === 'slot_event_card' 
            || element.hasOwnProperty('ad') 
            || (element.hasOwnProperty('extra') && element['extra'].hasOwnProperty('type') && element['extra']['type'] === 'zvideo'));
	    return flag;
	});
	body=JSON.stringify(body);
	$done({body});
}
catch(err){
	$log(`知乎推荐列表去广告出现异常：${err}`,"INFO");
}