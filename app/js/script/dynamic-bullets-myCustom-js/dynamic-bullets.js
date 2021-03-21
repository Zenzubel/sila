'use strict';
document.addEventListener('DOMContentLoaded', () => {

////////////////////start slider Swiper////////////////////
let mySwipeRealIndex;
	let mySwiper = new Swiper('.feedback__container', {
		containerModifierClass: 'feedback__container', 
		wrapperClass: 'feedback__wrapper',
		slideClass: 'feedback__item',
		parallax: true,
		loop: false,
		slidesPerView: 1,
		spaceBetween: 20,
		freeMode: false,
		centeredSlides: false,
		simulateTouch: true,
		scrollbar: {
			el: '.feedback__scrollbar',
			hide: false,
			draggable: true,
			snapOnRelease: true,
			dragSize: 100,
		},
		// autoplay: {
		// 	delay: 2000,
		// 	disableOnInteraction: false,
		// },
	});
////////////////////end slider Swiper////////////////////
//////////////start dynamic bullets/////////////////////
const pagBtn = document.querySelectorAll('.feedback__bullet');
const pagParent = document.querySelector('.feedback__bullets');
const pagBtnWidth = document.querySelector('.feedback__bullet').offsetWidth;
const centerX = document.documentElement.clientWidth / 2;

function hidePag() {
	pagBtn.forEach(item => {
		item.classList.remove('active');
	});
}

function showPag (i = 0){
	pagBtn[i].classList.add('active');
	pagParent.style.left = centerX - pagBtnWidth / 2 + (- pagBtnWidth * i) +'px';
	console.log();
}

//переключение пагинации при скроле слайда
mySwiper.on('slideChange', function () {
	pagBtn.forEach((item, i) => {
		if (mySwiper.realIndex == i) {
			hidePag();
			showPag(i);
		};
	});
});

pagParent.addEventListener('click', (event) => {
	const target = event.target;
	event.preventDefault();
	if (target && target.classList.contains('feedback__bullet')) {
		pagBtn.forEach((item, i) => {
			if (target == item) {
				hidePag();
				showPag(i);
				mySwiper.slideTo(i);//открывает нужный слайд по клику на булет
			}
		});
	}
});

hidePag();
showPag();

//////////////end dynamic bullets/////////////////////

});