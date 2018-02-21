import './index.scss';

const popupAuth = document.querySelector('.popup');
const buttonEnter = document.querySelector('.button');
const loginField = popupAuth.querySelector('.login');
const passwordField = popupAuth.querySelector('.password');
const popupTimer = document.querySelector('.timer');
const popopMessage = document.querySelector('.message');
const result = document.querySelector('.result');
const buttonClose = popopMessage.querySelector('.button-close');

function authWindowOpen() {
    popupAuth.style.display = 'flex';
}

function authWindowClose() {
    popupAuth.style.display = 'none';
}
buttonEnter.addEventListener('click', authWindowOpen);

function timeCounter() {
    let hou = '00';
    let sec = '10';
    setInterval(function(){

        const timerID = document.querySelector('.timer').innerHTML = hou +" : " + sec ;
        sec--;
        if(sec === '00')
        {
            setTimeout(
                function () {
                    clearInterval(timerID)
                }, 10000
            )
        }
    },500);
}

function timerWindowOpen() {
    popupTimer.style.display = 'flex';
}

function timerWindowClose() {
    popupTimer.style.display = 'none';
}

function messWindowOpen() {
    popopMessage.style.display = 'flex';
}

function messWindowClose() {
    popopMessage.style.display = 'none';
}

function checkPassword() {
    if (passwordField !== ' ') {
        messWindowOpen();
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    result.innerText = " ";
    let email = loginField.value;
    if (validateEmail(email)) {
        result.innerText = email + " отлично! ";
        result.style.color = 'green';
        loginField.style.border = '1px solid green';
        result.style.marginBottom = '10px';
    } else {
        result.innerText = email + " Не валидно " + "." + " " +  "Введите верный email ";
        result.style.color = 'red';
        loginField.style.border = '1px solid red';
        result.style.marginBottom = '10px';
    }
    return false;
}

buttonClose.addEventListener('click', messWindowClose);

loginField.addEventListener('blur', validate);
passwordField.addEventListener('submit', checkPassword);