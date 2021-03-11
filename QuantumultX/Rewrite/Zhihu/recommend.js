// https://raw.githubusercontent.com/XingCodes/ss-Rules/master/QuantumultX/Rewrite/Zhihu/recommend.js
// 知乎推荐列表去广告
try{
	let body = $response.body;
	let obj = JSON.parse(body);
	let data = obj['data'].filter((element) =>{
		return !(element['card_type'] === 'slot_event_card' || element.hasOwnProperty('ad') || (element.hasOwnProperty('extra') && element['extra'].hasOwnProperty('type') && element['extra']['type'] === 'zvideo'));
	});
	obj['data'] = data;
	body = JSON.stringify(obj);
	$done({body});
}
catch(err){
	console.log(`知乎推荐列表去广告出现异常：${err}`);
}