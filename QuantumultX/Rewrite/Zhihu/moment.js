// https://raw.githubusercontent.com/XingCodes/ss-Rules/master/QuantumultX/Rewrite/Zhihu/moment.js
// 知乎想法去广告
try{
	let body = $response.body;
	let obj = JSON.parse(body);
	let data = [];
	// 修正由于JS number类型精度问题，导致JSON.parse精度丢失，引起想法不存在的问题
	const targetIdFix = (element)=>{
		if (element['target_type'] == 'pin'){
			target_id = element['target']['url'].match(/https?:\/\/www\.zhihu\.com\/pin\/(\d*)/)[1];
			element['target']['id'] = target_id;
			// 转发的想法处理
			if (!!element['target']['origin_pin'] && element['target']['origin_pin'].hasOwnProperty('url')){
				origin_target_id = element['target']['origin_pin']['url'].match(/https?:\/\/www\.zhihu\.com\/pin\/(\d*)/)[1];
				element['target']['origin_pin']['id'] = origin_target_id;
			}
		}
		// 动态折叠处理
		else if (element['type'] == 'moments_group'){
			let momentsGroupList = [];
			for (let j=0;j<element['list'].length;j++){
				momentsGroupList.push(targetIdFix(element['list'][j]));
			}
			element['list'] = momentsGroupList;
		}
		return element;
	}
	for (let i=0;i<obj['data'].length;i++){
		let element = targetIdFix(obj['data'][i]);
		if (!element['ad']){
			data.push(element);
		}
	}
	obj['data'] = data;
	body = JSON.stringify(obj);
	$done({body});
}
catch(err){
	console.log(`知乎关注列表去广告出现异常：${err}`,"INFO");
}