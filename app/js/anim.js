'use strict';
document.addEventListener('DOMContentLoaded', () => {
//////////////////////start scrollMagic//////////////////////
		// initScrollMagic
	var controller = new ScrollMagic.Controller();
		// start scene
	new ScrollMagic.Scene({
		triggerElement: ".header",
		duration: '0',
		triggerHook: 0.1,
		offset: 150,
		reverse: true})
	.setClassToggle(".header__inner", "active") // add class toggle
	.addIndicators({
			name: 'header scene',
			colorTrigger: '#fff',//triggerHook
			colorStart: 'red',//ofset
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
		reverse: false})
	.setClassToggle(".about__bg-image", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".about",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: false})
	.setClassToggle(".about__image--static", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".about",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: false})
	.setClassToggle(".about__image--absolut", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".suggestion",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: false})
	.setClassToggle(".suggestion__item--attantion", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".suggestion",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: false})
	.setClassToggle(".suggestion__btn", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".borders",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: false})
	.setClassToggle(".borders__title-box img", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".borders",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: false})
	.setClassToggle(".borders__title", "active-anim") // add class toggle
	.addTo(controller);
	//end scene
	// start scene
	new ScrollMagic.Scene({
		triggerElement: ".borders",
		duration: '0',
		triggerHook: 0.5,
		offset: 10,
		reverse: false})
	.setClassToggle(".borders__inner", "active-anim") // add class toggle
	.addTo(controller);
	//end scene

//////////////////////end scrollMagic//////////////////////
});
