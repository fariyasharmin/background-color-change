const button = document.getElementById('btn');
const color = document.getElementById('color');


function getRandomNumber(){
    return '#' + Math.floor(Math.random() * 16777216).toString(16);
}


//addEventLstener
button.addEventListener('click', function(){
    const randomNumber=getRandomNumber();
    color.innerText=randomNumber;
    document.body.style.backgroundColor=randomNumber;
})







































