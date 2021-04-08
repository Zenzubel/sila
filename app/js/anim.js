'use strict';
document.addEventListener('DOMContentLoaded', () => {
//////////////////////start scrollMagic//////////////////////
		// initScrollMagic
	var controller = new ScrollMagic.Controller();
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".about",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: true})
	.setClassToggle(".about__bg-image", "active-anim") // add class toggle
	.addIndicators({
			name: 'anim scene',
			colorTrigger: '#fff',
			colorStart: 'red',
			colorEnd: 'green'
		})
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".about",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: true})
	.setClassToggle(".about__image--static", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".about",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: true})
	.setClassToggle(".about__image--absolut", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".suggestion",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: true})
	.setClassToggle(".suggestion__item--attantion", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".suggestion",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: true})
	.setClassToggle(".suggestion__btn", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".borders",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: true})
	.setClassToggle(".borders__title-box img", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".borders",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: true})
	.setClassToggle(".borders__title", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".borders",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: true})
	.setClassToggle(".borders__inner", "active-anim") // add class toggle
	.addTo(controller);
	//end scene

//////////////////////end scrollMagic//////////////////////
});
