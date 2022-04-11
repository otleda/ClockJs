// GET ELEMENT DOM
const hoursEL = document.querySelector('#hours');
const minutsEl = document.querySelector('#minuts');
const secondsEl = document.querySelector('#seconds');

setInterval(() => {
    
    const date = new Date();

    const hours = date.getHours() * 30;
    const minuts = date.getMinutes() * 6;
    const seconds = date.getSeconds() * 6;

    hoursEL.style.transform = `rotateZ(${hours+(minuts/12)}deg)`
    minutsEl.style.transform = `rotateZ(${minuts}deg)`
    secondsEl.style.transform = `rotateZ(${seconds}deg)`

}, 1000);
