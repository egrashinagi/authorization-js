import './index.scss';

const popup = document.querySelector('.popup');
const button = document.querySelector('.button');
const login = popup.querySelector('.login');
const password = popup.querySelector('.password');
const timer = document.querySelector('.timer');
const message = document.querySelector('.message');
const result = document.querySelector('.result');
const buttonClose = message.querySelector('.button-close');

function authWindowOpen() {
    popup.style.display = 'flex';
}

function authWindowClose() {
    popup.style.display = 'none';
}
button.addEventListener('click', authWindowOpen);

function timerWindowOpen() {
    timer.style.display = 'flex';
}

function timerWindowClose() {
    timer.style.display = 'none';
}

function messWindowOpen() {
    message.style.display = 'flex';
}

function messWindowClose() {
    message.style.display = 'none';
}

function checkPassword() {
    if (password !== '') {
        authWindowClose();
    }
}

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    result.innerText = " ";
    let email = login.value;
    if (validateEmail(email)) {
        result.innerText = email + " отлично! ";
        result.style.color = 'green';
        login.style.border = '1px solid green';
    } else {
        result.innerText = email + " Не валидно " + "." + " " +  "Введите верный email ";
        result.style.color = 'red';
        login.style.border = '1px solid red';
        result.style.marginBottom = '10px';
    }
    return false;
}

buttonClose.addEventListener('click', messWindowClose);

login.addEventListener('blur', validate);
password.addEventListener('submit', checkPassword);