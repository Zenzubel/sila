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
	//end main screen slider Swiper//

	//start slider swiper for galary//
	function galarySliders() {
		//инициализация первого слайдера в блоке "Галерея" на главной стр.
		function galaryLayout() {
			let galaryLayoutSwiper = new Swiper('.galary__container-layout', {
				containerModifierClass: 'galary__container-layout', 
				wrapperClass: 'galary__wrapper-layout',
				slideClass: 'galary__item-layout',
				loop: false,
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
		}
		galaryLayout();
		//инициализация второго слайдера в блоке "Галерея" на главной стр.
		function galaryWorks() {
			let galaryWorksSwiper = new Swiper('.galary__container-works', {
				containerModifierClass: 'galary__container-works', 
				wrapperClass: 'galary__wrapper-works',
				slideClass: 'galary__item-works',
				loop: false,
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
					}
				}
			});
		}
		galaryWorks();
		//инициализация слайдера в открывшемся light-box-е при клике на слайд
		function galaryLightBoxSliderInit(i = 0) {
			let popupSwiper = new Swiper('.popup-slider__container', {
				containerModifierClass: 'popup-slider__container', 
				wrapperClass: 'popup-slider__wrapper',
				slideClass: 'popup-slider__item',
				loop: false,
				slidesPerView: 1,
				spaceBetween: 7,
				freeMode: false,
				centeredSlides: true,
				simulateTouch: true,
				slideToClickedSlide:true,
				navigation: {
					prevEl: '.popup-slider__button-prev',
					nextEl: '.popup-slider__button-next',
				},
			});
			//открытие слайдера с изображения на которое был клик
			popupSwiper[1].slideTo(i);
		}
		//находим все слайды в основном слайдере и копируем их в слайдер открывшегося light-box
		const worksSliderParent = document.querySelector('.galary__carousel--works'),
				worksSliderItem = worksSliderParent.querySelectorAll('.galary__item-works');

		const layoutSliderParent = document.querySelector('.galary__carousel--layout'),
				layoutSliderItem = layoutSliderParent.querySelectorAll('.galary__item-layout');

		const getItemParent = document.querySelector('.popup-slider__wrapper--galary');


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
	}
	galarySliders();

	//start map//
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
	//end map//

	// init slider on push button in card 'more foto'//
	const sliderParent = document.querySelector('.popup-slider--cards');
	const getPopupTrigger = document.querySelectorAll('.cards__open');

	getPopupTrigger.forEach((item, i) => {
		item.addEventListener('click', ()=> {

			let src = item.getAttribute('data-src');

			sliderParent.innerHTML = '';
			sliderParent.innerHTML += `
			<div class="popup-slider__container">
				<div class="popup-slider__wrapper">
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}1.jpg" type="image/webp">
							<img src="${src}1.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}2.jpg" type="image/webp">
							<img src="${src}2.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}3.jpg" type="image/webp">
							<img src="${src}3.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}4.jpg" type="image/webp">
							<img src="${src}4.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}5.jpg" type="image/webp">
							<img src="${src}5.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}6.jpg" type="image/webp">
							<img src="${src}6.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}7.jpg" type="image/webp">
							<img src="${src}7.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}8.jpg" type="image/webp">
							<img src="${src}8.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}9.jpg" type="image/webp">
							<img src="${src}9.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}10.jpg" type="image/webp">
							<img src="${src}10.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}11.jpg" type="image/webp">
							<img src="${src}11.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}12.jpg" type="image/webp">
							<img src="${src}12.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}13.jpg" type="image/webp">
							<img src="${src}13.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}14.jpg" type="image/webp">
							<img src="${src}14.jpg" alt="Изображение готового изделия или объекта">
						</picture>
					</div>
					<div class="popup-slider__item">
						<picture class="popup-slider__image">
							<source srcset="${src}15.jpg" type="image/webp">
							<img src="${src}15.jpg" alt="Изображение готового изделия или объекта">
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
	//end popup slider//
	//init slider on push button in card 'more foto'//
	// const sliderParent = document.querySelector('.popup-slider__wrapper');
	// const getPopupTrigger = document.querySelectorAll('.cards__open');

	// getPopupTrigger.forEach((item, i) => {
	// 	item.addEventListener('click', ()=> {

	// 		let src = item.getAttribute('data-src');

	// 		sliderParent.insertAdjacentHTML(
	// 			'afterbegin', 
	// 			`<div class="popup-slider__item">
	// 				<picture class="popup-slider__image">
	// 				<source srcset="${src}1.webp" type="image/webp">
	// 				<img src="${src}1.jpg" alt="Изображение готового изделия или объекта">
	// 				</picture>
	// 			</div>
	// 		`);
	// 		sliderParent.innerHTML = '';
	// 		sliderParent.innerHTML += `
	// 		<div class="popup-slider__container">
	// 			<div class="popup-slider__wrapper">
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}1.jpg" type="image/webp">
	// 						<img src="${src}1.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}2.jpg" type="image/webp">
	// 						<img src="${src}2.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}3.jpg" type="image/webp">
	// 						<img src="${src}3.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}4.jpg" type="image/webp">
	// 						<img src="${src}4.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}5.jpg" type="image/webp">
	// 						<img src="${src}5.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}6.jpg" type="image/webp">
	// 						<img src="${src}6.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}7.jpg" type="image/webp">
	// 						<img src="${src}7.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}8.jpg" type="image/webp">
	// 						<img src="${src}8.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}9.jpg" type="image/webp">
	// 						<img src="${src}9.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}10.jpg" type="image/webp">
	// 						<img src="${src}10.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}11.jpg" type="image/webp">
	// 						<img src="${src}11.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}12.jpg" type="image/webp">
	// 						<img src="${src}12.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}13.jpg" type="image/webp">
	// 						<img src="${src}13.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}14.jpg" type="image/webp">
	// 						<img src="${src}14.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 				<div class="popup-slider__item">
	// 					<picture class="popup-slider__image">
	// 						<source srcset="${src}15.jpg" type="image/webp">
	// 						<img src="${src}15.jpg" alt="Изображение готового изделия или объекта">
	// 					</picture>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		<button class="popup-slider__button-prev"></button>
	// 		<button class="popup-slider__button-next"></button>
	// 		`;
	// 		popupSlider();
	// 	});
	// });
	//end popup slider//

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

	// const standartParent = document.querySelector('.cards--standart'),
	// 		standartParentInn = standartParent.querySelector('.cards__row'), 
	// 		standartCards = standartParentInn.getElementsByClassName('cards__item'),
	// 		standartBtn = standartParent.querySelector('.cards__more-card');

	// const classicParent = document.querySelector('.cards--classic'),
	// 		classicParentInn = classicParent.querySelector('.cards__row'), 
	// 		classicCards = classicParentInn.getElementsByClassName('cards__item'),
	// 		classicBtn = classicParent.querySelector('.cards__more-card');

	// const premiumParent = document.querySelector('.cards--premium'),
	// 		premiumParentInn = premiumParent.querySelector('.cards__row'), 
	// 		premiumCards = premiumParentInn.getElementsByClassName('cards__item'),
	// 		premiumBtn = premiumParent.querySelector('.cards__more-card');

	// const bordersParent = document.querySelector('.cards__borders-container--borders'),
	// 	bordersParentInn = bordersParent.querySelector('.cards__row'), 
	// 		bordersCards = bordersParentInn.getElementsByClassName('cards__item'),
	// 		bordersBtn = bordersParent.querySelector('.cards__more-card');

	// const mafsParent = document.querySelector('.cards__borders-container--mafs'),
	// 	mafsParentInn = mafsParent.querySelector('.cards__row'), 
	// 		mafsCards = mafsParentInn.getElementsByClassName('cards__item'),
	// 		mafsBtn = mafsParent.querySelector('.cards__more-card');

	// const blocksParent = document.querySelector('.cards__borders-container--blocks'),
	// 	blocksParentInn = blocksParent.querySelector('.cards__row'), 
	// 		blocksCards = blocksParentInn.getElementsByClassName('cards__item'),
	// 		blocksBtn = blocksParent.querySelector('.cards__more-card');

	// const benchesParent = document.querySelector('.cards__maf-container--benches'),
	// 	benchesParentInn = benchesParent.querySelector('.cards__row'), 
	// 		benchesCards = benchesParentInn.getElementsByClassName('cards__item'),
	// 		benchesBtn = benchesParent.querySelector('.cards__more-card');

	// const urnsParent = document.querySelector('.cards__maf-container--urns'),
	// 	urnsParentInn = urnsParent.querySelector('.cards__row'), 
	// 		urnsCards = urnsParentInn.getElementsByClassName('cards__item'),
	// 		urnsBtn = urnsParent.querySelector('.cards__more-card');

	// const flowerpotsParent = document.querySelector('.cards__maf-container--flowerpots'),
	// 	flowerpotsParentInn = flowerpotsParent.querySelector('.cards__row'), 
	// 		flowerpotsCards = flowerpotsParentInn.getElementsByClassName('cards__item'),
	// 		flowerpotsBtn = flowerpotsParent.querySelector('.cards__more-card');

		

	// function rengeCards(cards, length, parent, button) {

	// 	let countCard = 3;

	// 	button.innerText = `Показать еще ${length - countCard} вариантов`;

	// 	function showCard(countCard) {
	// 		Array.from(cards).forEach((card, i)=> {
	// 			card = (i < countCard) ? card.classList.remove('hide') : card.classList.add('hide');
	// 		});
	// 	}
	// 	showCard(countCard);
	// 	parent.addEventListener('click', (event) => {
	// 		function showCards() {
	// 			const target = event.target;
	// 			event.preventDefault();
	// 			if (target && target.classList.contains('cards__more-card')) {
	// 				console.log();
	// 				Array.from(cards).forEach((item, i)=> {
	// 					if(item.classList.length * length == length * 2){
	// 						showCard(length);
	// 						button.classList.add('push');//just trigger for count class fo range
	// 						item.classList.add('push');//just trigger for count class fo range
	// 						button.innerText = '';
	// 						button.innerText = `Свернуть и вернуться в начало категории`;
	// 					} else {
	// 						showCard(countCard);
	// 						item.classList.remove('push');//just trigger for count class fo range
	// 						button.classList.remove('push');//just trigger for count class fo range
	// 						button.innerText = '';
	// 						button.innerText = `Показать еще ${length - countCard} вариантов`;
	// 						if(parent.classList.contains('cards__borders')) {
	// 							parent.parentElement.previousElementSibling.scrollIntoView({behavior: "smooth", block: "start"});
	// 						} else {
	// 							parent.scrollIntoView({behavior: "smooth", block: "start"});
	// 						}
	// 					}
	// 				});
	// 			}
	// 		}
	// 		showCards();
	// 	});
	// }
	// rengeCards(standartCards, standartCards.length, standartParent, standartBtn);
	// rengeCards(classicCards, classicCards.length, classicParent, classicBtn);
	// rengeCards(premiumCards, premiumCards.length, premiumParent, premiumBtn);
	// rengeCards(bordersCards, bordersCards.length, bordersParent, bordersBtn);
	// rengeCards(mafsCards, mafsCards.length, mafsParent, mafsBtn);
	// rengeCards(blocksCards, blocksCards.length, blocksParent, blocksBtn);
	// rengeCards(benchesCards, benchesCards.length, benchesParent, benchesBtn);
	// rengeCards(urnsCards, urnsCards.length, urnsParent, urnsBtn);
	// rengeCards(flowerpotsCards, flowerpotsCards.length, flowerpotsParent, flowerpotsBtn);

});
