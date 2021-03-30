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
const tabParent = document.querySelectorAll('.cards__item');

tabParent.forEach((item, i) => {
	const tabBtn = item.querySelectorAll('.cards__color');
	const tabList = item.querySelectorAll('.cards__count span');

function hideTab() {
	tabBtn.forEach(item => {
		item.classList.remove('active');
	});
	tabList.forEach(item => {
		item.classList.remove('active');
	});
}

function showTabs (i = 0){
	tabList[i].classList.add('active');
	tabBtn[i].classList.add('active');
}

hideTab();
showTabs();

	item.addEventListener('click', (event) => {
		const target = event.target;
		event.preventDefault();
		if (target && target.classList.contains('cards__color')) {
			tabBtn.forEach((item, i) => {
				if (target == item) {
					hideTab();
					showTabs(i);
				}
			});
		}
	});
});
/////////end main screen tabs
////////////////////start slider Swiper////////////////////
	let sila__thumbs = new Swiper('.sila__thumbs', {
		containerModifierClass: 'sila__cont', 
		wrapperClass: 'sila__wrap',
		slideClass: 'sila__item',
		loop: false,
		slidesPerView: 4,
		spaceBetween: 0,
		freeMode: false,
		centeredSlides: false,
		simulateTouch: true,
	});
	let mySwiper = new Swiper('.sila__top', {
			containerModifierClass: 'sila__cont', 
			wrapperClass: 'sila__wrap',
			slideClass: 'sila__item',
			direction: 'vertical',
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
			thumbs: {
				swiper: sila__thumbs
			}
		});
	//start custom autoheight
	const getParentPagination = document.querySelector('.sila__pagination');
	const getCurentItem = document.querySelector('.sila__fraction-curent');
	const getTotalItem = document.querySelector('.sila__fraction-total');
	const getMainSlider = document.querySelector('.sila__top');
	const getCountItems = getMainSlider.querySelectorAll('.sila__item');

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
	//start custom autoheight
////////////////////end slider Swiper////////////////////
//start slider swiper for galary
	new Swiper('.galary__container-layout', {
		containerModifierClass: 'galary__container-layout', 
		wrapperClass: 'galary__wrapper-layout',
		slideClass: 'galary__item-layout',
		loop: true,
		slidesPerView: 3,
		spaceBetween: 7,
		freeMode: false,
		centeredSlides: false,
		simulateTouch: true,
		navigation: {
			nextEl: '.galary__layout-btn',
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			764: {
				spaceBetween: 22,
			},
		}
	});
	new Swiper('.galary__container-works', {
		containerModifierClass: 'galary__container-works', 
		wrapperClass: 'galary__wrapper-works',
		slideClass: 'galary__item-works',
		loop: true,
		slidesPerView: 3,
		spaceBetween: 7,
		freeMode: false,
		centeredSlides: false,
		simulateTouch: true,
		navigation: {
			prevEl: '.galary__works-btn',
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			764: {
				spaceBetween: 22,
			},
		}
	});
//end slider swiper for galary
//start map///
ymaps.ready(init);
var myMap;
  function init () {
    var myMap = new ymaps.Map("map", {
      center:[55.05183597636104,82.9961395282764],
      zoom: 17,
      // Выключаем все управление картой
      controls: ['zoomControl']
    }); 
    var myGeoObjects = [];
    // Указываем координаты метки
    myGeoObjects = new ymaps.Placemark([55.05183597636104,82.9961395282764],{
      balloonContentHeader: 'ООО "СИЛА"',
      balloonContentBody: `
        - производство тротуарной плитки <br>
        - МАФ <br>
        - бордюры <br>
        ул. Есенина, 1. Офис 28.
      `,
      balloonContentFooter: "+7-903-913-33-30",
    },{
      iconLayout: 'default#image',
      iconImageHref: 'images/icons/map-location.svg', 
      // Размеры иконки
      iconImageSize: [50, 50],
      // Смещение верхнего угла относительно основания иконки
      iconImageOffset: [-25, -40]
    });

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Отключим zoom
    myMap.behaviors.disable('scrollZoom');
  }
//end map///


});
