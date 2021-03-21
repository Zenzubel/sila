$(function () {

		// initScrollMagic
	var controller = new ScrollMagic.Controller();
	// loop each progect element
	$('.companys__item').each(function(){
			// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this,
			duration: '100%',
			triggerHook: 0.9
		})
		.setClassToggle(this, 'anim') //add class to progect
		.addIndicators({
			name: 'anim scene',
			colorTrigger: 'black',
			colorStart: 'red',
			colorEnd: 'green'
		})
		.addTo(controller);

	});

})