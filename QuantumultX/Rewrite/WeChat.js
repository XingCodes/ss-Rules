// https://raw.githubusercontent.com/XingCodes/ss-Rules/master/QuantumultX/Rewrite/WeChat.js
// 微信公众号文章去广告

var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)}); 