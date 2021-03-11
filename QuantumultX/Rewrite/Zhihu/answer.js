// https://raw.githubusercontent.com/XingCodes/ss-Rules/master/QuantumultX/Rewrite/Zhihu/answer.js
try{
	let body = $response.body;
	let obj = JSON.parse(body);
	delete obj['ad_info'];
	delete obj['roundtable_info'];
	body = JSON.stringify(obj);
	$done({body});
}
catch(err){
	console.log(`知乎回答列表去广告出现异常：${err}`,"INFO");
}