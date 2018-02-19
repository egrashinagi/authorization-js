const popup = document.querySelector('.popup');
const button = document.querySelector('.button');
const login = popup.querySelector('.login');
const password = popup.querySelector('.password');
const timer = document.querySelector('.timer');
const message = document.querySelector('.message');


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

login.addEventListener('onfocus', function () {
    if (login.value !=='' && password.value !=='') {
        messWindowOpen();
    } else {
        timeCounter();
        setTimeout(() => popup.style.display='flex', 10000);
    }
});

if (login.value !=='' && password.value !=='') {
    popup.style.display = 'none';
    alert('Успех');
} else {
    timeCounter();
    setTimeout(() => popup.style.display='flex', 10000);
}


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