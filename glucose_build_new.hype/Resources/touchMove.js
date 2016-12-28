
function touchEnd (hypeDocument, element, event) {
	// body...
	var audio = $("#compassPanlAudio").get(0);
	audio.pause();
	console.log("结束播放");
}

function initCompassValue (hypeDocument, glucose) {
	// body...
	angle = convertFromGlucoseToAngle(glucose, g_3);
	var time = 6*angle/360;
	hypeDocument.pauseTimelineNamed('analysisGlucosePanel');
	hypeDocument.goToTimeInTimelineNamed(time, 'RuleTimeline');
	var textElement = hypeDocument.getElementById('glucose_value');
	textElement.innerHTML = '<font  style="font-family:PingFangSC-Thin, sans-serif">' + Number(glucose).toFixed(1) + '</font>';
	hypeDocument.continueTimelineNamed('analysisGlucosePanel',hypeDocument.kDirectionForward, false);
	
	var red = caculateColorChannel(angle,'r');
	var green = caculateColorChannel(angle,'g');
	var blue = caculateColorChannel(angle,'b');
	$(".CompassValuePanel").css('box-shadow', '0px 3px 5px 1px rgba('+red+','+green+','+blue+',1)');
	//$(".CompassValuePanel").css('background', 'rgba('+red+','+green+','+blue+',1)');
	$(".compass_pointerBK").css('background','rgba('+red+','+green+','+blue+',1)');

}

function touchMove (hypeDocument, element, event) {
	// body...

	// var compass_panelElement = hypeDocument.getElement('compass_panel');
	var compassCenterX = hypeDocument.getElementProperty(element,'width')/2;
	var compassCenterY = hypeDocument.getElementProperty(element,'height')/2;


	var compassCenter = {
		x: compassCenterX, 
		y: compassCenterY
	};

	var compassOrigin = {
		x:hypeDocument.getElementProperty(element,'left'), 
		y:hypeDocument.getElementProperty(element,'top')
	}
	
	var point0 = {x: compassCenterX, y:compassCenterY + 10};

	
	oX = event.touches[0].clientX - compassOrigin.x;
	oY = event.touches[0].clientY - compassOrigin.y;
	
	var angle = 0.0;
	angle = getAngle(point0, compassCenter, {
		x: oX,
		y: oY 
	});
	
	if (oX > compassCenter.x) {

		angle = 2 * pi - angle;
	};
	//转换成角度
	angle = angle * 180/ 3.14;
	angle = Number(angle).toFixed(0);
	//console.log("角度：" + angle);
	var time = 6*angle/360;
	hypeDocument.goToTimeInTimelineNamed(time, 'RuleTimeline');

	var textElement = hypeDocument.getElementById('glucose_value');
	measure_glucose_value = convertFromAngleToGluose(angle, g_3);
	textElement.innerHTML = '<font  style="font-family:PingFangSC-Thin, sans-serif">' + measure_glucose_value + '</font>';

	var red = caculateColorChannel(angle,'r');
	var green = caculateColorChannel(angle,'g');
	var blue = caculateColorChannel(angle,'b');

	//console.log('rgba('+red+','+green+','+blue+',1)');
	$(".CompassValuePanel").css('box-shadow', '0px 3px 5px 1px rgba('+red+','+green+','+blue+',1)');
	//$(".CompassValuePanel").css('background', 'rgba('+red+','+green+','+blue+',1)');
	$(".compass_pointerBK").css('background','rgba('+red+','+green+','+blue+',1)');
	playAudio();
}

function playAudio () {
	// body...

	 var audio = $("#compassPanlAudio").get(0);
	 if (audio.paused == true || audio.ended == true) {

	 	console.log("begin play audio");
	 	audio.play();
	 }
}

function convertFromGlucoseToAngle (glucose, g_3) {
	// body...

	var angle = 0;
	var g_0= 0.0;
	var g_1 = 3.9;
	var g_2 = 4.4;
	var g_4 = 16.7;
	var g_5 = 36.0;

	if (glucose <= g_1) {
		angle = 45* glucose/g_1;
	}
	else if (glucose <= g_2 && glucose > g_1) {
		angle = 45 * (glucose - g_1) /(g_2 - g_1) + 45;
	}
	else if (glucose <= g_3 && glucose > g_2) {
		angle = (glucose - g_2) * 90 /(g_3 - g_2) + 90;
	}
	else if (glucose <= g_4 && glucose > g_3) {
		angle = (glucose - g_3) * 90/(g_4 - g_3) + 180;
	}
	else {
		angle = (glucose - g_4) * 90/(g_5 - g_4) + 270;
	}
	return angle;
}

function convertFromAngleToGluose (angle, g_3) {
	// body...
	var glucoseValue = 0.0;
	//控制目标
	var g_0= 0.0;
	var g_1 = 3.9;
	var g_2 = 4.4;
	var g_4 = 16.7;
	var g_5 = 36.0;
	if (angle <= 45 && angle>= 0) {

		glucoseValue = g_1 *angle/45;
	} else if (angle > 45 && angle <= 90) {

		glucoseValue = (g_2 - g_1) * (angle - 45)/45 + g_1;
	} else if (angle > 90 && angle <= 180) {
		glucoseValue = (g_3 - g_2) * (angle - 90) /90 + g_2;
	} else if (angle > 180 && angle <=270) {
		glucoseValue = (g_4 - g_3) * (angle - 180)/90 + g_3;
	} else {
		//angle >315 && angle <=360;
		glucoseValue = (g_5 - g_4) * (angle - 270) /90 + g_4;
		
	};
	return Number(glucoseValue).toFixed(1);
}


function caculateColorChannel (angle, colorChannel) {
	// body...

	//计算阴影的颜色

	var channel = 0;
	var startColorChannel = 0;
	var endColorChannel = 0;
	if (angle <=22.5  && angle>= 0) {

		    switch(colorChannel){ 
			    case 'r':    
			    	startColorChannel = 244;
			    	endColorChannel = 255;
			      break; 
			    case 'g': 
			    	startColorChannel = 40;
			    	endColorChannel = 130;
			      break; 
			      case 'b':
			      	startColorChannel = 27;
			      	endColorChannel = 6;
		    } 
		channel = startColorChannel + angle * (endColorChannel- startColorChannel)/22.5;

	} else if (angle > 22.5 && angle <= 67.5) {

		    switch(colorChannel){ 
			    case 'r':    
			    	startColorChannel = 255;
			    	endColorChannel = 166;
			      break; 
			    case 'g': 
			    	startColorChannel = 130;
			    	endColorChannel = 251;
			      break; 
			      case 'b':
			      	startColorChannel = 6;
			      	endColorChannel = 6;
		    } 
		channel =startColorChannel + (angle - 22.5) * (endColorChannel- startColorChannel)/(67.5-22.5);

	} else if (angle > 67.5 && angle <= 135) {

		    switch(colorChannel){ 
			    case 'r':    
			    	startColorChannel = 166;
			    	endColorChannel = 11;
			      break; 
			    case 'g': 
			    	startColorChannel = 251;
			    	endColorChannel = 255;
			      break; 
			      case 'b':
			      	startColorChannel = 6;
			      	endColorChannel = 0;
		    } 
		channel =startColorChannel + (angle -67.5)  *(endColorChannel- startColorChannel)/(135 - 67.5);

	} else if (angle > 135 && angle <=202.5) {


		    switch(colorChannel){ 
			    case 'r':    
			    	startColorChannel = 11;
			    	endColorChannel = 166;
			      break; 
			    case 'g': 
			    	startColorChannel = 255;
			    	endColorChannel = 251;
			      break; 
			      case 'b':
			      	startColorChannel = 0;
			      	endColorChannel = 6;
		    } 

		channel =startColorChannel + (angle - 135)  * (endColorChannel- startColorChannel)/(202.5-135);

	} else if (angle > 202.5 && angle <= 247.5){

		    switch(colorChannel){ 
			    case 'r':    
			    	startColorChannel = 166;
			    	endColorChannel = 255;
			      break; 
			    case 'g': 
			    	startColorChannel = 251;
			    	endColorChannel = 130;
			      break; 
			      case 'b':
			      	startColorChannel = 6;
			      	endColorChannel = 6;
		    } 

		channel =startColorChannel + (angle - 202.5)  *(endColorChannel- startColorChannel)/ (247.5-202.5);
		
	} else if (angle > 247.5 && angle <= 270) {


		    switch(colorChannel){ 
			    case 'r':    
			    	startColorChannel = 255;
			    	endColorChannel = 244;
			      break; 
			    case 'g': 
			    	startColorChannel = 130;
			    	endColorChannel = 40;
			      break; 
			      case 'b':
			      	startColorChannel = 6;
			      	endColorChannel = 27;
		    } 

		channel =startColorChannel + (angle - 247.5)  *(endColorChannel- startColorChannel)/(270-247.5);
	} else if (angle >270 && angle <= 315) {


		    switch(colorChannel){ 
			    case 'r':    
			    	startColorChannel = 244;
			    	endColorChannel = 177;
			      break; 
			    case 'g': 
			    	startColorChannel = 40;
			    	endColorChannel = 15;
			      break; 
			      case 'b':
			      	startColorChannel = 27;
			      	endColorChannel = 15;
		    } 

		channel =startColorChannel + (angle - 270)  *(endColorChannel- startColorChannel)/(315 - 270);
	} else {


		    switch(colorChannel){ 
			    case 'r':    
			    	startColorChannel = 177;
			    	endColorChannel = 240;
			      break; 
			    case 'g': 
			    	startColorChannel = 15;
			    	endColorChannel = 40;
			      break; 
			      case 'b':
			      	startColorChannel = 15;
			      	endColorChannel = 27;
		    } 

		channel =startColorChannel + (angle - 315)  * (endColorChannel- startColorChannel)/(360-315);
	};
	return Number(channel).toFixed(0);
}