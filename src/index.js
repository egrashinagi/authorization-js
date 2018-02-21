import './index.scss';

const popupAuth = document.querySelector('.popup');
const button = document.querySelector('.button');
const login = popupAuth.querySelector('.login');
const password = popupAuth.querySelector('.password');
const timer = document.querySelector('.timer');
const message = document.querySelector('.message');
const result = document.querySelector('.result');
const buttonClose = message.querySelector('.button-close');

function authWindowOpen() {
    popupAuth.style.display = 'flex';
}

function authWindowClose() {
    popupAuth.style.display = 'none';
}
button.addEventListener('click', authWindowOpen);

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
    if (password !== ' ') {
        messWindowOpen();
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    result.innerText = " ";
    let email = login.value;
    if (validateEmail(email)) {
        result.innerText = email + " отлично! ";
        result.style.color = 'green';
        login.style.border = '1px solid green';
        result.style.marginBottom = '10px';
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