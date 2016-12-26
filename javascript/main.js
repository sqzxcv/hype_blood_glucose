	function getAngle(point1, point2, point3) {
		var bb = (point2.y - point1.y) * (point2.y - point1.y) + (point2.x - point1.x) * (point2.x - point1.x);
		var aa = (point3.y - point1.y) * (point3.y - point1.y) + (point3.x - point1.x) * (point3.x - point1.x);
		var cc = (point3.y - point2.y) * (point3.y - point2.y) + (point3.x - point2.x) * (point3.x - point2.x);
		var cosa = (bb + cc - aa) / (2 * Math.sqrt(bb) * Math.sqrt(cc));
		
		return Math.acos(cosa);
	}
	
	function duration(point1, point2, point3) {
		var sp = (point1.x - point3.x) * (point2.y - point3.y) - (point1.y - point3.y) * (point2.x - point3.x);
		
		if(sp > 0) {
			return 1;
		} else if(sp < 0) {
			return -1;
		} else {
			return 0;
		}
	}
	
	
	var oX = 0;
	var oY = 0;
	var pi = Math.PI.toFixed(2);
	var rolate = 5.53;
	var rox = 0;

	var ro = 0;
	

	function preventDefaultAction (even) {
		// body...
		even.preventDefault();
	}

	function registerDocEventListener () {
		// body...

		document.addEventListener('touchstart', preventDefaultAction, false);
		
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
	}

	function cancelDocEventListener () {
		// body...

		document.removeEventListener('touchstart', preventDefaultAction);
		document.removeEventListener('touchmove', preventDefaultAction);
	}


	function showDatepicker(hypeDocument, element, event)  {
		// body...

		var element = hypeDocument.getElementById("testtt");
		element.innerHTML='<input id="time" type="text" />';
		jQuery(function () {
		    // 时间设置
		    jQuery('#time').datetimepicker({
		        timeFormat: "HH:mm:ss",
		        dateFormat: "yy-mm-dd"
		    });

		});
	}
