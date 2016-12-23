
var canvasVideo = false;
var isIphone = true;

function initPlantCanvas (hypeDocument) {
	// body...
	
	isIphone = navigator.userAgent.toLowerCase().indexOf('iphone') >= 0;
	var ld=vd=0;
	if(isIphone) {
		canvasVideo = new CanvasVideoPlayer({
				videoSelector: '.js-video',
				canvasSelector: '.js-canvas',
				hideVideo: true,
				audio: true,
				resetOnLastFrame:false,
			});
	}else {

		vd = 1;
		$('canvas').hide();
		$('.video').remove();
		var htmlcode =  '<video src="'+ hypeDocument.resourcesFolderURL() + '/plantVideo.mp4" id="video" width="0" height="0" style="background:transparent;"></video>';
		console.log(htmlcode);
		$('.video-responsive').append(htmlcode);
		$('#video').get(0).load();
	}
}

function playPlantVideo (hypeDocument) {
	// body...

	// $('#masker').hide();
	if (isIphone) {

		canvasVideo.play();
	}
	else {

		$('#video').width(375).height(300).get(0).play();
	}
}


function pausePlantVideo (hypeDocument) {
	// body...
	if (isIphone)  {
		canvasVideo.pause();
	}
	else {

		$('#video').width(375).height(300).get(0).pause();
	}
}