

function submitGlucose () {
	// body...
	var acktype = $(".glucoseType").attr("glucoseType");
	var suggestion = submit_glucose(measure_glucose_value, measureTime, acktype);
}

function submit_glucose (value, time, type) {
	// body...

	payload = {record: {value: value, reported_time: time, acktype: type}}
		$.post('/wx/myself/api', {api: 'records', method: 'post', payload: payload}, function(msg){
			window.console.log(msg)
			// var json = {
			// "success":0,
			// "message":"ok",
			// "data":{
			// 		"id":23138,
			// 		"value":5.7,
			// 		"level":2,
			// 		"title":"血糖偏低",
			// 		"suggestion":"尚未达到低血糖的范畴，但也要引起注意。您可以根据情况，在必要时适当进食一些食物。",
			// 		"comment":"",
			// 		"timestamp":1482722934,
			// 		"point":2,
			// 		"type":1,
			// 		"confirmed":1,
			// 		"source":1,
			// 		"recommend_writings":[],
			// 		"introduction":"单次口服降糖药物或胰岛素用量过大、饮食摄入热量不足、运动强度过大、长期酗酒等均会引起血糖偏低。您的血糖偏低，饮食或者用药是否存在问题？填写您今天的饮食和用药让我们更好的帮您分析问题。"
			// 	}
			// }
			
			if(msg['success'] == 0){
				
			}
		});
}