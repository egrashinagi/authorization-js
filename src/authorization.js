const popup = document.querySelector('.popup');
const button = document.querySelector('.button');
const login = popup.querySelector('.login');
const password = popup.querySelector('.password');
const timer = document.querySelector('.timer');
const message = document.querySelector('.message');
const result = document.querySelector('.result');
const buttonClose = message.querySelector('.button-close');
const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

function validateEmail(email) {
    return reg.test(String(email).toLowerCase());
}


function validateLogin() {
    if (login !== reg) {
        result.innerText = 'введите верный эмейл';
        result.style.color = 'red';
        login.style.border = '1px solid red';

    } else {
        messWindowOpen();
    }
}

function checkPassword() {
    if (password !=='') {
        authWindowClose();
    }
}

buttonClose.addEventListener('click', messWindowClose);

login.addEventListener('blur', validateLogin);
password.addEventListener('submit', checkPassword);