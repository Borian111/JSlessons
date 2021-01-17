window.addEventListener('DOMContentLoaded', function(){
'use strict';

//Timer

function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');





        
    function getTimeRemaining(){    

     let dateStop = new Date(deadline).getTime(),
         dateNow = new Date().getTime(),
         
                 
         timeRemaining = (dateStop-dateNow)/1000,
         seconds = Math.floor(timeRemaining %60),
         minutes = Math.floor((timeRemaining / 60)%60),
         hours = Math.floor(timeRemaining/60/60);
         
      return zeroCheq({timeRemaining, hours, minutes, seconds});       
        
    }
    //перебираем методы объекта, чтобы определить добавить 0 к одноцифровым
    function zeroCheq(obj) {
        for(let key in obj){ 
            if(String(obj[key]).split('').length === 1){ 
                obj[key] = "0"+ obj[key];
            }
        }
        return obj;
    }


    
    function updateClock(){
        let timer = getTimeRemaining();

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if(timer.timeRemaining>0){
                 setInterval(updateClock, 1000); 
            }else{ 
                timerHours.textContent ='00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent ='00';

            }

        
    }       

 updateClock();
}   
countTimer('16 january 2021');

//Menu

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu'),
              closeBtn = document.querySelector('.close-btn'),
              menuItems = menu.querySelectorAll('ul>li');
        const handlerMenu =() => {
           menu.classList.toggle('active-menu');
        };


        btnMenu.addEventListener('click', handlerMenu);

        closeBtn.addEventListener('click', handlerMenu)
       
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    }

    toggleMenu();
   
    //popup
    const togglePopUp = () => { 
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content');

        let count = -50; 
        function goGo() { 
            let goGoId = requestAnimationFrame(goGo);
            count=count+1;
            popupContent.style.left = count + '%';
            if(count === 50) {
                         
                cancelAnimationFrame(goGoId);
                count = -50;
            }
        }

        popupBtn.forEach((elem) => { 
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if(document.documentElement.clientWidth > 768){
                    goGo();
                }
            });
        });

        popupClose.addEventListener('click', () => { 
            popup.style.display = 'none';
                  });
    };

        togglePopUp();






});
