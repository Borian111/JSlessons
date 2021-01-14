window.addEventListener('DOMContentLoaded', function(){
'use strict';



let ggNy = function gogoNewYear() {   
   
    let newYear = new Date('1 january 2022'), 
        nowDate = new Date(), 
        day = nowDate.getDay(), // сегодня
        nowDay = dayOfTheWeek(day), //день недели
        formatTime = nowDate.toLocaleTimeString('ru'),// время в 24 часовом формете
        timeAmPm = nowDate.toLocaleTimeString('en'),// время в 12часовом формете
        greeting = dayTime(formatTime), // время дня
        befNY = (Math.floor(((newYear.getTime() - nowDate.getTime()) / 1000) / 60 / 60 / 24));// вычисление дней до НГ
       
  ourPage(greeting, nowDay, timeAmPm, befNY);
};

//Разделим 24-часовой формат времени на утро, день, вечер, ночь, вычленив из массива часы как нулевой элемент
function dayTime(formatTime) {
    let hour = formatTime.split(':')[0];
    if(hour >= 4 && hour <= 11) {
             return `Доброе утро`;
    }else if(hour >= 12 && hour <= 16) {
             return  `Добрый день`;
    }else if(hour >= 17 && hour <= 23) {
             return `Добрый вечер`;
    }else if(hour >= 0 && hour <= 3) {
             return `Доброй ночи`;
    }
}

function dayOfTheWeek(day) {
    let arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return arr[day];
}

function ourPage(greeting, nowDay, timeAmPm, befNY) {
    let ha1 = document.createElement('H1');
    ha1.textContent =  `${greeting}!`;
    let hb1 = document.createElement('H1');
    hb1.textContent =  `Сегодня: ${nowDay}` ;
    let hc1 = document.createElement('H1');
    hc1.textContent =  `Текущее время: ${timeAmPm}` ;
    let hd1 = document.createElement('H1');
    hd1.textContent =  `До нового года осталось: ${befNY} дней` ;

 
     document.body.appendChild(ha1);
     document.body.appendChild(hb1);
     document.body.appendChild(hc1);
     document.body.appendChild(hd1);
     
}

ggNy();
});
