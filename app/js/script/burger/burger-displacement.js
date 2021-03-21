	const burgerIcon = document.querySelector('.menu-burger__icon');
	const burgerMenu = document.querySelector('.menu-burger__container');
	const body = document.querySelector('body');
	const wrapper = document.querySelector('.wrapper');
	const headerWrapper = document.querySelector('.header__wrapper');

	burgerIcon.addEventListener('click', (event) => {
		burgerIcon.classList.toggle('active');
		if (burgerIcon.classList.contains('active')) {
			body.classList.add('lock');
			burgerMenu.classList.add('active');
			wrapper.classList.add('displacement');
			headerWrapper.classList.add('displacement');
		} else {
			body.classList.remove('lock');
			burgerMenu.classList.remove('active');
			wrapper.classList.remove('displacement');
			headerWrapper.classList.remove('displacement');
		}
	});

	burgerMenu.addEventListener('click', (event) =>{
		const target = event.target;
		if (target && target.classList.contains('menu-drop__link')){
			burgerIcon.classList.remove('active');
			burgerMenu.classList.remove('active');
			wrapper.classList.remove('displacement');
			headerWrapper.classList.remove('displacement');
			body.classList.remove('lock');
		}
	});