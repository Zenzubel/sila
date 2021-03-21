$(function () {

	// initScrollMagic
	var controller = new ScrollMagic.Controller();
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".welcome__features",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.welcome__features', 'fade-left') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".welcome__circle",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.welcome__circle', 'stroke-anim-1') //add class to progect
	.addTo(controller);
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__animated--mark-up', 'active-up')
	.addTo(controller); //add class to progect
// end scene
// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__animated--mark-net', 'active-net') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__animated--mark-arr', 'active-arr') //add class to progect
	.addTo(controller);
	// end scene

	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__animated--mark-net', 'active-net') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__animated--arr', 'active-arr') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__animated--arrow-x', 'active-arr-x') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__animated--arrow-y', 'active-arr-y') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__animated--stroke', 'active-stroke') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__animated--rectangle', 'active-rectangle') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__animated--cube', 'active-cube') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__animated--body-man', 'active-body-hand') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".marketing__about--mark",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__about--mark', 'fade-right') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".pricing__panel",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.pricing__panel', 'fade-left') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".marketing__about--save",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__about--save', 'fade-right') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-achieve",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-achieve__stroke', 'active-stroke') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-achieve",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-achieve__rectangle', 'active-rectangle') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-achieve",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-achieve__cube', 'active-cube') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-achieve",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-achieve__build-1', 'active-build-1') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-achieve",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-achieve__build-2', 'active-build-2') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-achieve",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-achieve__build-3', 'active-build-3') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-achieve",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-achieve__build-4', 'active-build-4') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-achieve",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-achieve__build-5', 'active-build-5') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".marketing__about--padding",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.marketing__about--padding', 'fade-left') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__stroke",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__stroke', 'active-stroke') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__rectangle",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__rectangle', 'active-rectangle') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__cube",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__cube', 'active-cube') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__benefit-1",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__benefit-1', 'active-benefit-1') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__benefit-2",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__benefit-2', 'active-benefit-2') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__benefit-3",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__benefit-3', 'active-benefit-3') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__benefit-4",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__benefit-4', 'active-benefit-4') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__star-1",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__star-1', 'active-star-1') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__star-2",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__star-2', 'active-star-2') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__star-3",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__star-3', 'active-star-3') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__star-4",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__star-4', 'active-star-4') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".animated-save__man",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.animated-save__man', 'active-man') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".call__info",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.call__info', 'fade-left') //add class to progect
	.addTo(controller);
	// end scene
	// start scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: ".team__panel",
		duration: '0',
		triggerHook: 0.6,
		offset: 0,
		reverse: false
	})
	.setClassToggle('.team__panel', 'fade-left') //add class to progect
	.addTo(controller);
	// end scene
});