////////////////////start slider Swiper////////////////////
new Swiper ('.decision__container', {
	containerModifierClass: 'decision__container', 
	wrapperClass: 'decision__wrapper',
	slideClass: 'decision__item',
	loop: false,
	watchOverflow: false,
	observer: false,
	spaceBetween: 12,
	autoHeight: false,
	slidesPerView: 1,
	centerSlides: false,
	simulateTouch: true,
	navigation: {
		nextEl: '.decision__button-next',
		prevEl: '.decision__button-prev',
	},
	breakpoints: {
		660: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 3,
		},
	}
});
////////////////////end slider Swiper////////////////////