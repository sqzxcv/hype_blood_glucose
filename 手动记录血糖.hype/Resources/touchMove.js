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
