// https://raw.githubusercontent.com/XingCodes/ss-Rules/master/QuantumultX/Rewrite/Zhihu/comments.js
try{
	let body = $response.body
	let obj = JSON.parse(body);
	obj['ad_info'] = {};
	body = JSON.stringify(obj);
	$done({body});
}
catch(err){
	console.log(`去除知乎评论广告出现异常：${err}`,"INFO");
}