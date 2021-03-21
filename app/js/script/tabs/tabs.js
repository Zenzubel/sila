'use strict';
document.addEventListener('DOMContentLoaded', () => {
/////////start tabs////////////
const tabBtn = document.querySelectorAll('.middle__btn');
const tabList = document.querySelectorAll('.middle__tab');
const tabParent = document.querySelector('.middle__btns');

function hideTab() {
	tabBtn.forEach(item => {
		item.classList.remove('active');
	});
	tabList.forEach(item => {
		item.classList.remove('active');
		item.classList.add('hidden');
	});
}

function showTabs (i = 0){
	tabBtn[i].classList.add('active');
	tabList[i].classList.add('active');
	tabList[i].classList.remove('hidden');
}

hideTab();
showTabs();


tabParent.addEventListener('click', (event) => {
	const target = event.target;
	event.preventDefault();
	if (target && target.classList.contains('middle__btn')) {
		tabBtn.forEach((item, i) => {
			if (target == item) {
				hideTab();
				showTabs(i);
			}
		});
	}
});
////////end tabs//////////////
});
