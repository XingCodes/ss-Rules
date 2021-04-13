// https://raw.githubusercontent.com/XingCodes/ss-Rules/master/QuantumultX/Rewrite/Zhihu/recommend.js
// 知乎推荐列表去广告
try{
	let body = $response.body;
	let obj = JSON.parse(body);
	let data = obj['data'].filter((element) =>{
		// function IsYanXuan(element) {
		// 		let flag = false;
		// 		if (element["common_card"]["footline"].hasOwnProperty("elements")) {
		// 			for (let i = 0; i < element["common_card"]["footline"]["elements"].length; i++) {
		// 				let item = element["common_card"]["footline"]["elements"][i];
		// 				if (item.hasOwnProperty("icon") && item["icon"]["image_url"] == "https://pic2.zhimg.com/80/v2-c46fc8ec4c4e9ffc8f846ae0d8158a80_1440w.png") {
		// 					flag = true;
		// 					break;
		// 				}
		// 		 	}
		// 		}
		// 	return flag;
		// }
		return !(element['card_type'] === 'slot_event_card' || element.hasOwnProperty('ad') || (element.hasOwnProperty('extra') && element['extra'].hasOwnProperty('type') && element['extra']['type'] === 'zvideo'));
	});
	obj['data'] = data;
	body = JSON.stringify(obj);
	$done({body});
}
catch(err){
	console.log(`知乎推荐列表去广告出现异常：${err}`);
}