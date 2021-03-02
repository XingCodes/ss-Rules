let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    if(element['card_type'] === 'slot_event_card' || element.hasOwnProperty('ad') || (element.hasOwnProperty('extra') && element['extra'].hasOwnProperty('type') && element['extra']['type'] === 'zvideo')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})