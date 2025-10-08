var h1Element = document.querySelector('h1');

h1Element.style.color = 'blue';

var isYellow = false;
var bodyElement = document.querySelector('body');


setInterval(function () {
    if(isYellow) {
        bodyElement.style.backgroundColor = 'white';

    }else{
        bodyElement.style.backgroundColor = 'yellow';

       }

       isYellow = !isYellow;


    },1000);