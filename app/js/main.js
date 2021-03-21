'use strict';
document.addEventListener('DOMContentLoaded', () => {
//==================start menu-burger===========================
	const burgerIcon = document.querySelector('.menu-burger__icon');
	const burgerMenuList = document.querySelector('.menu-burger__container');
	const burgerMenuLink = document.querySelectorAll('.menu-burger__link');
	const body = document.querySelector('body');

	burgerIcon.addEventListener('click', (event) => {
		burgerIcon.classList.toggle('active');
		if (burgerIcon.classList.contains('active')) {
			body.classList.add('lock');
			burgerMenuList.classList.add('active');
		} else {
			body.classList.remove('lock');
			burgerMenuList.classList.remove('active');
		}
	});

	burgerMenuList.addEventListener('click', (event) =>{
		const target = event.target;
		if (target && target.classList.contains('menu-burger__link')){
			burgerIcon.classList.remove('active');
			burgerMenuList.classList.remove('active');
			body.classList.remove('lock');
		}
	});
///////////end menu burger//////////
/////////start main screen tabs
// const tabBtn = document.querySelectorAll('.about__tab-title');
// const tabList = document.querySelectorAll('.about__tab-list');
// const tabParent = document.querySelector('.about__questions-wrapper');

// function hideTab() {
// 	tabBtn.forEach(item => {
// 		item.classList.remove('active');
// 	});
// 	tabList.forEach(item => {
// 		item.classList.remove('active');
// 	});
// }

// function showTabs (i = 1){
// 	tabList[i].classList.add('active');
// }

// hideTab();
// showTabs();

// tabParent.addEventListener('click', (event) => {
// 	const target = event.target;
// 	event.preventDefault();
// 	if (target && target.classList.contains('about__tab-title')) {
// 		tabBtn.forEach((item, i) => {
// 			if (target == item) {
// 				hideTab();
// 				showTabs(i);
// 			}
// 		});
// 	}
// });
/////////end main screen tabs
////////////////////start slider Swiper////////////////////
	let mySwiper = new Swiper('.sila__cont', {
		containerModifierClass: 'sila__cont', 
		wrapperClass: 'sila__wrap',
		slideClass: 'sila__item',
		parallax: false,
		loop: false,
		slidesPerView: 1,
		spaceBetween: 0,
		freeMode: false,
		centeredSlides: true,
		simulateTouch: true,
		autoHeight: false,
		navigation: {
			nextEl: '.sila__button-next',
			prevEl: '.sila__button-prev',
		},
	});

	const getParentPagination = document.querySelector('.sila__pagination');
	const getCurentItem = document.querySelector('.sila__fraction-curent');
	const getTotalItem = document.querySelector('.sila__fraction-total');
	const getCountItems = document.querySelectorAll('.sila__item');

	function startFruction(curent, total) {
		getParentPagination.innerHTML = '';

		getParentPagination.innerHTML = `
			<span class="sila__fraction-curent">${curent}</span>
			<span class="sila__fraction-total">${total}</span>
		`;
	}
	startFruction(1 , getCountItems.length);

	mySwiper.on('slideChange', function () {
		let curent = mySwiper.realIndex + 1;
		let total = getCountItems.length;
		startFruction(curent, total);
	});
////////////////////end slider Swiper////////////////////

});
