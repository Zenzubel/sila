//////////////////////start scrollMagic//////////////////////
		// initScrollMagic
	var controller = new ScrollMagic.Controller();
	// start scene
	new ScrollMagic.Scene({
		triggerElement: "",
		duration: '0',
		triggerHook: 0.1,
		offset: 40,
		reverse: true})
	.setClassToggle(".trigger", "move") // add class toggle
	// .addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".footer",
		duration: '0',
		triggerHook: 0.5,
		offset: 0,
		reverse: false})
	.setClassToggle(".anim", "active") // add class toggle
	// .addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	//end scene
//////////////////////end scrollMagic//////////////////////