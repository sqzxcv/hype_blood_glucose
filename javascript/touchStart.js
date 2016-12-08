function touchStart (hypeDocument, element, event) {
	// body...
	
	oX = event.clientX;
	oY = event.clientY;
	
	//point0 = { x: oX, y: oY}
	ro = getAngle(point0, pointCenter, {
		x: oX,
		y: oY
	});
	console.log("角度：" + ro);
}