'use strict';
document.addEventListener('DOMContentLoaded', () => {

const getForm = document.querySelector('#form');

const getLabelName = document.querySelector('#label-name');
const getLabelTel = document.querySelector('#label-tel');
const getLabelEmail = document.querySelector('#label-email');

const getInputName = document.querySelector('#input-name');
const getInputTel = document.querySelector('#input-tel');
const getInputEmail = document.querySelector('#input-email');

const getButton = document.querySelector('#button');

getForm.addEventListener('submit', (event) => {
	event.preventDefault();
	checkInputs();

});

function checkInputs () {

	const getInputNameValue = getInputName.value.trim();
	const getInputTelValue = getInputTel.value.trim();
	const getInputEmailValue = getInputEmail.value.trim();

	const checkTel = /^\d[\d\(\)\ -]{4,14}\d$/.test(getInputTelValue);
	const checkEmail = /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/.test(getInputTelValue);


	if (getInputNameValue === '' || getInputNameValue === null) {
		addError(getLabelName, 'Заполните это поле');
	} else {
		addComplete(getLabelName, '');
	}

	if (getInputTelValue === '' || getInputTelValue === null) {
		addError(getLabelTel, 'Заполните это поле');
	}
	else if (!checkTel) {
		addError(getLabelTel, 'Некорректный номер телефона');
	} else {
		addComplete(getLabelTel, '');
	}

	if (getInputEmailValue === '' || getInputEmailValue === null) {
		addError(getLabelEmail, 'Заполните это поле');
	}
	else if (checkEmail) {
		addError(getLabelEmail, 'Некорректный Email');
	} else {
		addComplete(getLabelEmail, '');
	}
}

function addError (input, message) {
	input.classList.add('error');
	input.classList.remove('complete');


	const labelElement = input.parentElement;
	const messageError = labelElement.querySelector('#error-text');
	messageError.innerText = message;

}

function addComplete (input, message) {
	input.classList.add('complete');
	input.classList.remove('error');

	const labelElement = input.parentElement;
	const messageError = labelElement.querySelector('#error-text');
	messageError.innerText = message;
}

});
