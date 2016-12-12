


function playVideo (hypeDocument) {
	// body...

	// $('#masker').hide();

	var isIphone = navigator.userAgent.toLowerCase().indexOf('iphone') >= 0;
	var ld=vd=0;
	if(isIphone) {
		var canvasVideo = new CanvasVideoPlayer({
				videoSelector: '.js-video',
				canvasSelector: '.js-canvas',
				hideVideo: true,
				audio: true,
			});
		canvasVideo.play();
	}else {

		vd = 1;
		$('canvas').hide();
		$('.video').remove();
		var htmlcode =  '<video src="'+ hypeDocument.resourcesFolderURL() + '/plantVideo.mp4" id="video" width="0" height="0" style="background:transparent;"></video>';
		console.log(htmlcode);
		$('.video-responsive').append(htmlcode);
		$('#video').get(0).load();

		$('#video').width(300).height(200).get(0).play();
	}

}