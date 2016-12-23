function touchStart (hypeDocument, element, event) {
	// body...

	// var compass_panelElement = hypeDocument.getElement('compass_panel');
	var centerX = hypeDocument.getElementProperty(element,'width')/2;
	var centerY = hypeDocument.getElementProperty(element,'height')/2;


	var pointCenter = {
		x: centerX, 
		y: centerY
	};

	var elementTop = {
		x:hypeDocument.getElementProperty(element,'top'), 
		y:hypeDocument.getElementProperty(element,'left')
	}
	
	var point0 = {x: centerX, y:centerY + 10};

	
	oX = event.clientX;
	oY = event.clientY;
	
	//point0 = { x: oX, y: oY}
	ro = getAngle(point0, pointCenter, {
		x: oX - elementTop.x,
		y: oY - elementTop.y
	});
	console.log("角度：" + ro);
}