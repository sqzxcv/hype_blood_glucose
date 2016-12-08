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
	console.log("角度：" + angle);
	var time = 6*angle/360;
	hypeDocument.goToTimeInTimelineNamed(time, 'RuleTimeline');

	var textElement = hypeDocument.getElementById('glucose_value');

	textElement.innerHTML = convertGluose_moring(angle);

}

function convertGluose_moring (angle) {
	// body...
	var glucoseValue = 0.0;
	if (angle <= 45 && angle>= 0) {

		glucoseValue = 3.9 *angle/45;
	} else if (angle > 45 && angle <= 135) {

		glucoseValue = 0.5 * (angle - 45)/90 + 3.9;
	} else if (angle > 135 && angle <= 225) {
		glucoseValue = 2.6 * (angle - 135) /90 + 4.4;
	} else if (angle > 225 && angle <=315) {
		glucoseValue = 9.7 * (angle - 225)/90 + 7;
	} else {
		//angle >315 && angle <=360;
		glucoseValue = 19.3 * (angle - 315) /45 + 16.7
		
	};
	return Number(glucoseValue).toFixed(1);
}


function touchMove1 (hypeDocument, element, event) {
	// body...
	var mx = event.touches[0].clientX;
	var my = event.touches[0].clientY;
	console("event.touches[0]");
	
	var initial_value = 4.4;
	
	var rate;
	
	

	
	ro = getAngle(point0, pointCenter, {
		x: mx,
		y: my
	});
	
	
	ro = ro * duration(pointCenter, point0, {
		x: mx,
		y: my
	});
	
	
	console.log('ro: '+ro);
	

	
	if(rox >3.85 && rox <5.53) {
		rate = Number(ro/1.68 * 0.5);
	}
	
	if(rox > 3.14 && rox < 3.85) {
		rate = Number(ro/0.71 * 3.8)
	}
	
	if(rox >5.53 && rox < 6.30) {
		rate = Number(ro/0.75 * 0.6)
	}
	
	
	
	if(rox > 0 && rox < 0.74) {
		rate = Number(ro/0.74 * 1.3)
	}
	
	if(rox == 0) {
		initial_value = 5.0;
	}
	
	if(rox == 6.28) {
		initial_value = 5.0;
	}
	
	console.log('rate:'+rate);
	
	
	initial_value = (initial_value + rate).toFixed(1);
	

	
	if(rox == 3.85) {
		initial_value = 3.8;
	}
	
	if(rox == 5.53) {
		initial_value = 4.4;
	}
	
	if(rox == 3.14) {
		initial_value = 0.0
	}
	
	
		
	
	$('#glucose_value').text(initial_value)
	
	
	
	
		

	
	
	
	ro = rolate + ro;
	
	
	
	
	
	if(ro < 0) {
		ro = ro + 2 * pi;
	}
	
	if(ro > (2 * pi)) {
		ro = (ro % (2 * pi));
	}
	
	rox = Number(ro).toFixed(2);
	
	
	
	console.log('rox:' + rox);
	 
	
	$(element).css('transform', 'translateX(92px) translateY(0px) rotate(' + rox + 'rad)');
}