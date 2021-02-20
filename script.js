'use strict'
function rangeOne(){//Восстановить порядок книг.
const bigBooks = document.querySelectorAll('.book');
console.log(bigBooks);
bigBooks[1].after(bigBooks[0]);
bigBooks[5].after(bigBooks[2]);
bigBooks[5].before(bigBooks[3]);
}

function changeBgImg(){//Заменить картинку заднего фона на другую из папки image
const bgImg = document.querySelector('body');
    bgImg.style.background = "url('./image/you-dont-know-js.jpg')";
}

let chThree = function(){//Исправить заголовок в книге 3
const bookTagA = document.querySelectorAll('a');
bookTagA[2].innerHTML="Книга 3. this и Прототипы Объектов";
};

let removeAdv = function(){//Удалить рекламу со страницы
let delElem = document.querySelector(".adv");
delElem.remove()
};

let chTwoandFive = function(){//Восстановить порядок глав во второй и пятой книге 
const elemLi = document.querySelectorAll('li')
console.log(elemLi);
elemLi[15].after(elemLi[8]);
elemLi[14].after(elemLi[13]);
elemLi[9].after(elemLi[12]);
elemLi[12].after(elemLi[14]);
elemLi[39].before(elemLi[45]);
elemLi[42].before(elemLi[38]);
elemLi[44].before(elemLi[41]);
};

let chSix =function(){//в шестой книге добавить главу “Глава 8: За пределами ES6” 
const elemUL = document.querySelectorAll('ul')
const New8Head = document.createElement('li')
New8Head.textContent = 'Глава 8: За пределами ES6';
elemUL[5].append(New8Head);
const elemLi2 = document.querySelectorAll('li')
console.log(elemLi2);
elemLi2[57].after(elemLi2[56]);
};
rangeOne();
changeBgImg();
chThree();
removeAdv();
chTwoandFive();
chSix();