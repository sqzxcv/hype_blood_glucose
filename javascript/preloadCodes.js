


function playVideo () {
	// body...

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
		$('.video-responsive').append('<video src="http://mat1.gtimg.com/house_guangzhou/fc/706lgs/bm/final52.mp4" id="video" width="0" height="0" style="background:transparent;"></video>');
		$('#video').get(0).load();
		// $('#video').get(0).play();
		$('#video').get(0).addEventListener('canplaythrough',function(){
		});
		$('#video').on('ended',function(){
			showBtn();
			$('#video').remove();
		});
		$('#video').width(640).height(1040).get(0).play();
	}
}