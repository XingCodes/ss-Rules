// https://raw.githubusercontent.com/XingCodes/ss-Rules/master/QuantumultX/Rewrite/Zhihu/hot_list.js
// 知乎热榜去广告
let body = $response.body;
let obj = JSON.parse(magicJS.response.body);
let data = obj['data'].filter(e => {
	return e['type'] === 'hot_list_feed' || e['type'] === 'hot_list_feed_video';
});
obj['data'] = data;
body = JSON.stringify(obj);
$done({body});