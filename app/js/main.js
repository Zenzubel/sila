'use strict';
document.addEventListener('DOMContentLoaded', () => {
	//startmenu burger//
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
	//end menu burger//

	//start main screen slider Swiper//
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
	//custom pagination in slider//
	const getParentPagination = document.querySelector('.sila__pagination'),
		getCurentItem = getParentPagination.querySelector('.sila__fraction-curent'),
		getTotalItem = getParentPagination.querySelector('.sila__fraction-total');

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
	//end main screen slider Swiper//

	//start section cards tabs//
	const tabPavingParent = document.querySelector('.borders__buttons--paving'),
			tabPavingBtn = tabPavingParent.querySelectorAll('.tab-trig');
	const tabPavingList = document.querySelectorAll('.cards__paving');

	const tabBordersParent = document.querySelector('.borders__buttons--borders'),
			tabBordersBtn = tabBordersParent.querySelectorAll('.tab-trig');
	const tabBordersList = document.querySelectorAll('.cards__borders');

	const tabMafsParent = document.querySelector('.borders__buttons--maf'), 
			tabMafsBtn = tabMafsParent.querySelectorAll('.tab-trig');
	const tabMafsList = document.querySelectorAll('.cards__maf-item');

	function allCardsTabs(parent, list, button) {
		function hideBordersTab() {
			button.forEach(button => {
				button.classList.remove('active');
			});
			list.forEach(list => {
				list.classList.remove('active');
			});
		}
		function showBordersTabs (i = 0){
			button[i].classList.add('active');
			list[i].classList.add('active');
		}
		hideBordersTab();
		showBordersTabs();

		parent.addEventListener('click', (event) => {
			const target = event.target;
			event.preventDefault();
			if (target && target.classList.contains('tab-trig') || target.classList.contains('cards__color')) {
				button.forEach((item, i) => {
					if (target == item) {
						hideBordersTab();
						showBordersTabs(i);
					}
				});
			}
		});
	}
	allCardsTabs(tabBordersParent, tabBordersList, tabBordersBtn);
	allCardsTabs(tabMafsParent, tabMafsList, tabMafsBtn);
	allCardsTabs(tabPavingParent, tabPavingList, tabPavingBtn);

	//start galary cards price for color switch//
	const tabColorParent = document.querySelectorAll('.cards__find-color'); // + use in popup slider//

	tabColorParent.forEach((item, i) => {
		const tabColorBtn = item.querySelectorAll('.cards__color');
		const tabColorList = item.querySelectorAll('.cards__num');

		allCardsTabs(item, tabColorList, tabColorBtn);
	});
	//end start galary cards price for color switch//
	//end section cards tabs//

	//start open card discription//
	const allCardParent = document.querySelectorAll('.cards__item');

	allCardParent.forEach((item, i) => {
		const closeDiscrBtn = document.querySelectorAll('.cards__close-discription');
		const openDiscrBtn = document.querySelectorAll('.cards__open-discription');
		const textDiscription = document.querySelectorAll('.cards__discription-text');

		item.addEventListener('click', (event) => {
			const target = event.target;
			event.preventDefault();
			if (target && target.classList.contains('cards__open-discription')) {
				openDiscrBtn.forEach((item, i) => {
					if (target == item) {
						closeDiscrBtn[i].classList.add('active');
						textDiscription[i].classList.add('active');
					}
				});
			}
			if (target && target.classList.contains('cards__close-discription')) {
				closeDiscrBtn.forEach((item, i) => {
					if (target == item) {
						closeDiscrBtn[i].classList.remove('active');
						textDiscription[i].classList.remove('active');
					}
				});
			}
		});
	});
	//end open card discription//

	//start slider swiper for galary//
	function galarySliders() {
		//находим все слайды в основном слайдере и копируем их в слайдер открывшегося light-box
		const worksSliderParent = document.querySelector('.galary__carousel--works'),
				worksSliderItem = worksSliderParent.querySelectorAll('.galary__item-works');

		const layoutSliderParent = document.querySelector('.galary__carousel--layout'),
				layoutSliderItem = layoutSliderParent.querySelectorAll('.galary__item-layout');

		const getItemParent = document.querySelector('.popup-slider__wrapper');

		//копируем все слайды из текущего слайдера и передаем их в всплывающий слайдер
		function galaryLightBox(parent, slide, slider){
			const target = event.target;
			if (target && target.classList.contains('galary__item-works') || target.classList.contains('galary__item-layout')) {
				parent.innerHTML = '';
				slide.forEach((item, i) => {
					parent.innerHTML += `<div class="popup-slider__item">${item.innerHTML}</div>`;
				});
				//получаем индекс кликнутого слайда
				galaryLightBoxSliderInit(slider.clickedIndex);
			}
		}
		//инициализация первого слайдера в блоке "Галерея" на главной стр.
		let galaryLayoutSwiper = new Swiper('.galary__container-layout', {
			containerModifierClass: 'galary__container-layout', 
			wrapperClass: 'galary__wrapper-layout',
			slideClass: 'galary__item-layout',
			loop: false,
			observeParents: true,
			observeSlideChildren: true,
			observer: true,
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
			},
			on: {
				//по клику на слайд открывается light-box
				click: function(){
					galaryLightBox(getItemParent, layoutSliderItem, galaryLayoutSwiper);
				}
			}
		});
		//инициализация второго слайдера в блоке "Галерея" на главной стр.
		let galaryWorksSwiper = new Swiper('.galary__container-works', {
			containerModifierClass: 'galary__container-works', 
			wrapperClass: 'galary__wrapper-works',
			slideClass: 'galary__item-works',
			loop: false,
			observeParents: true,
			observeSlideChildren: true,
			observer: true,
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
			},
			on: {
				//по клику на слайд открывается light-box
				click: function(){
					galaryLightBox(getItemParent, worksSliderItem, galaryWorksSwiper);
				},
			},
		});
		//инициализация слайдера в открывшемся light-box-е при клике на слайд
		function galaryLightBoxSliderInit(i) {
			let popupSwiper = new Swiper('.popup-slider__container', {
				containerModifierClass: 'popup-slider__container', 
				wrapperClass: 'popup-slider__wrapper',
				slideClass: 'popup-slider__item',
				loop: false,
				observeParents: true,
				observeSlideChildren: true,
				observer: true,
				slidesPerView: 1,
				spaceBetween: 7,
				freeMode: false,
				centeredSlides: false,
				simulateTouch: true,
				slideToClickedSlide: false,
				navigation: {
					prevEl: '.popup-slider__button-prev',
					nextEl: '.popup-slider__button-next',
				},
			});
			//открытие слайдера с изображения на которое был клик
			popupSwiper.slideTo(i);
		}
		//end popup slider//
	}
	galarySliders();
	//end slider swiper for galary//
	// init slider on push button in card 'more foto'//
	function cardsLightBox() {
		const sliderParent = document.querySelector('.popup-slider__wrapper');
		const getPopupTrigger = document.querySelectorAll('.cards__open');
		let num;

		let popupSwiper = new Swiper('.popup-slider__container', {
			containerModifierClass: 'popup-slider__container', 
			wrapperClass: 'popup-slider__wrapper',
			slideClass: 'popup-slider__item',
			loop: false,
			observeParents: true,
			observeSlideChildren: true,
			observer: true,
			slidesPerView: 1,
			spaceBetween: 7,
			freeMode: false,
			centeredSlides: false,
			simulateTouch: true,
			slideToClickedSlide: false,
			navigation: {
				prevEl: '.popup-slider__button-prev',
				nextEl: '.popup-slider__button-next',
			},
		});

		getPopupTrigger.forEach((item, i) => {
			item.addEventListener('click', ()=> {
				let src = item.getAttribute('data-src');
				num = 1;
				sliderParent.innerHTML = '';
				do {
					sliderParent.innerHTML += `
						<div class="popup-slider__item">
							<div class="popup-slider__picture">
								<img src="${src}${num}.jpg" onload = 'load()' onerror = 'err()' alt="изображение раскладки плитки">
							</div>
						</div>
					`;
					num++;
					getError();
				}
				while (num < 20);

				popupSwiper.slideTo(0); // открыть слайд с первого слайда

				function getError() {
					let popupSlide = Array.from(document.getElementsByClassName('popup-slider__picture'));
					popupSlide.forEach((slide, i) => {
						slide.firstElementChild.onerror = function (){
							slide.parentElement.style.cssText = `display: none`;
							popupSwiper.removeSlide(i);
						};
						// slide.firstElementChild.onload = function (){
							
						// };
					});
				}
			});
		});
	}
	cardsLightBox();

	//start map//
	ymaps.ready(init);
	let myMap;
	  function init () {
	    let myMap = new ymaps.Map("map", {
	      center:[55.05183597636104,82.9961395282764],
	      zoom: 17,
	      // Выключаем все управление картой
	      controls: ['zoomControl']
	    }); 
	    let myGeoObjects = [];
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

	    let clusterer = new ymaps.Clusterer({
	      clusterDisableClickZoom: false,
	      clusterOpenBalloonOnClick: false,
	    });

	    clusterer.add(myGeoObjects);
	    myMap.geoObjects.add(clusterer);
	    // Отключим zoom
	    myMap.behaviors.disable('scrollZoom');
	  }
	//end map//
});
