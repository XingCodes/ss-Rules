// https://raw.githubusercontent.com/XingCodes/ss-Rules/master/QuantumultX/Rewrite/Zhihu/search.js
// 知乎热搜去广告
let body = $response.body;
let obj = JSON.parse(body);
// obj['commercial_data'] = [];
if (obj.hasOwnProperty('commercial_data')) {
	console.log('热搜: '+$request.url,'INFO');
}
body = JSON.stringify(obj);
$done({body});