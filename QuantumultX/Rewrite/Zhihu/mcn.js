// https://raw.githubusercontent.com/XingCodes/ss-Rules/master/QuantumultX/Rewrite/Zhihu/mcn.js
// 去除知乎mcn信息
let body = $response.body 
body=JSON.parse(body)
// delete body['mcn_user_info']
if (body.hasOwnProperty('mcn_user_info')) {
	console.log($request.url)
} else {
	console.log('mcn no')
}
body=JSON.stringify(body)
$done({body})