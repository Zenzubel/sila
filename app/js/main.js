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
/////////start galary cards price switch
const tabParent = document.querySelectorAll('.cards__search'); /// + use in popup slider

tabParent.forEach((item, i) => {
	const tabBtn = item.querySelectorAll('.cards__color');
	const tabList = item.querySelectorAll('.cards__num');

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
/////////end start galary cards price switch
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
///start popup slider

///start slider for popup
function popupSlider() {
	let popupSlider = new Swiper('.popup-slider__container', {
		containerModifierClass: 'popup-slider__container', 
		wrapperClass: 'popup-slider__wrapper',
		slideClass: 'popup-slider__item',
		loop: false,
		slidesPerView: 1,
		spaceBetween: 7,
		freeMode: false,
		centeredSlides: true,
		simulateTouch: true,
		navigation: {
			prevEl: '.popup-slider__button-prev',
			nextEl: '.popup-slider__button-next',
		},
	});
}
///end slider for popup
// init slider on push button in card 'more foto'
const sliderParent = document.querySelector('.popup-slider');
const getPopupTrigger = document.querySelectorAll('.popup-link');

getPopupTrigger.forEach((item, i) => {
	item.addEventListener('click', ()=> {

		let src = item.getAttribute('data-src');
		console.log(src);

		sliderParent.innerHTML = '';
		sliderParent.innerHTML += `
		<div class="popup-slider__container">
			<div class="popup-slider__wrapper">
				<div class="popup-slider__item">
					<picture class="popup-slider__image">
						<source srcset="${src}-1.jpg" type="image/webp">
						<img src="${src}-1.jpg" alt="Плитка">
					</picture>
				</div>
				<div class="popup-slider__item">
					<picture class="popup-slider__image">
						<source srcset="${src}-2.jpg" type="image/webp">
						<img src="${src}-2.jpg" alt="Плитка">
					</picture>
				</div>
				<div class="popup-slider__item">
					<picture class="popup-slider__image">
						<source srcset="${src}-3.jpg" type="image/webp">
						<img src="${src}-3.jpg" alt="Плитка">
					</picture>
				</div>
			</div>
		</div>
		<button class="popup-slider__button-prev"></button>
		<button class="popup-slider__button-next"></button>
		`;
		popupSlider();
	});
});

console.log();
///end popup slider
//start section borders tabs
const tabBordersBtn = document.querySelectorAll('.borders__btn--trig');
const tabBordersList = document.querySelectorAll('.cards__row--borders');
const tabBordersParent = document.querySelector('.borders__buttons');

function hideBordersTab() {
	tabBordersBtn.forEach(item => {
		item.classList.remove('active');
	});
	tabBordersList.forEach(item => {
		item.classList.remove('active');
	});
}

function showBordersTabs (i = 0){
	tabBordersBtn[i].classList.add('active');
	tabBordersList[i].classList.add('active');
}

hideBordersTab();
showBordersTabs();


tabBordersParent.addEventListener('click', (event) => {
	const target = event.target;
	event.preventDefault();
	if (target && target.classList.contains('borders__btn--trig')) {
		tabBordersBtn.forEach((item, i) => {
			if (target == item) {
				hideBordersTab();
				showBordersTabs(i);
			}
		});
	}
});
//end section borders tabs
//start section borders mafs tabs
const tabMafsBtn = document.querySelectorAll('.borders__btn--maf');
const tabMafsList = document.querySelectorAll('.cards__maf-item');
const tabMafsParent = document.querySelector('.borders__buttons--maf');

function hideMafsTab() {
	tabMafsBtn.forEach(item => {
		item.classList.remove('active');
	});
	tabMafsList.forEach(item => {
		item.classList.remove('active');
	});
}

function showMafsTabs (i = 0){
	tabMafsBtn[i].classList.add('active');
	tabMafsList[i].classList.add('active');
}

hideMafsTab();
showMafsTabs();


tabMafsParent.addEventListener('click', (event) => {
	const target = event.target;
	event.preventDefault();
	if (target && target.classList.contains('borders__btn')) {
		tabMafsBtn.forEach((item, i) => {
			if (target == item) {
				hideMafsTab();
				showMafsTabs(i);
			}
		});
	}
});
//end section borders mafs tabs

});
