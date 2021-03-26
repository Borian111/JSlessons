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
        
       menu.addEventListener('click', (event) =>{
        let target = event.target;
        
               if(target.nodeName===('A')) {
                    handlerMenu();
                }else if (target.classList.contains('close-btn')) {
                    handlerMenu();
                }     
        });         

        btnMenu.addEventListener('click', handlerMenu);        
    };

    toggleMenu();
   
    //popup
    const togglePopUp = () => { 
        const popup = document.querySelector('.popup'),
              popupBtn = document.querySelectorAll('.popup-btn'),
              popupClose = document.querySelector('.popup-close'),
              popupContent = document.querySelector('.popup-content');

        let count = -40; 
        function goGo() { 
            let goGoId = requestAnimationFrame(goGo);
            count=count+4;
            popupContent.style.left = count + '%';
            if(count === 40) {                         
                cancelAnimationFrame(goGoId);
                count = -40;
            }
        }

        popupBtn.forEach((elem) => { 
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if(document.documentElement.clientWidth > 768){
                    goGo();
                }else popupContent.style.left = 20+'%';
                
            });
        });

        popupClose.addEventListener('click', () => { 
            popup.style.display = 'none';
            if(document.documentElement.clientWidth > 768){
                popupContent.style.left = '-20%';
            }
        });

        popup.addEventListener('click', (event) =>{
             let target = event.target;
                 
             if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
             }
             
             target = target.closest('.popup-content');
                 if(!target){
                    popup.style.display = 'none';
                 }
        });
    };

    togglePopUp();

   //tabs
   const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
              tab = tabHeader.querySelectorAll('.service-header-tab'), 
              tabContent = document.querySelectorAll('.service-tab');
        
        const toggleTabContent = (index) =>{
            for (let i=0; i<tabContent.length; i++){
                if (index===i){
                    tab[i].classList.add('active'); 
                    tabContent[i].classList.remove('d-none');
                }else{
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');                    
                }
            }
        };
       
        tabHeader.addEventListener('click', (event)=> {
            let target = event.target;
                target = target.closest('.service-header-tab');               
          
            if(target.classList.contains('service-header-tab')){
                tab.forEach((item, i) =>{
                    if (item===target){                       
                        toggleTabContent(i);
                    }
                });
            }
          
        });
  };        
tabs();   

//слайдер

    const dotsAdd = () => { 
    let ul = document.querySelector('.portfolio-dots'),
            slide = document.querySelectorAll('.portfolio-item');

        for(let i = 0; i < slide.length; i++) { 
            let li = document.createElement('li');
            if(i === 0) { 
                li.classList.add('dot', 'dot-active');
            }else{
                li.classList.add('dot');
            }
            ul.append(li);
        }
    };

    dotsAdd();

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
              btn = document.querySelectorAll('.portfolio-btn'),
              dot = document.querySelectorAll('.dot'),
              slider = document.querySelector('.portfolio-content');
        
        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };       

        const autoplaySlide = () => {
              prevSlide(slide, currentSlide, 'portfolio-item-active');
              prevSlide(dot, currentSlide, 'dot-active');  
              currentSlide++;
              if (currentSlide >=slide.length){
                  currentSlide=0;
              }
              nextSlide(slide, currentSlide, 'portfolio-item-active');
              nextSlide(dot, currentSlide, 'dot-active');
        };   
        
        const startSlide = (time=3000) => {
              interval = setInterval(autoplaySlide, time); 
        };
        
        const stopSlide = () => {
              clearInterval(interval);
        };

        slider.addEventListener('click', (event) =>{
                event.preventDefault();
               
                let target = event.target;
               
                if (!target.matches('.portfolio-btn, .dot')) {
                   return;
                }

                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(dot, currentSlide, 'dot-active'); 

                if(target.matches('#arrow-right')){
                   currentSlide++;
                }else if(target.matches('#arrow-left')){
                   currentSlide--;
                }else if(target.matches('.dot')){
                   dot.forEach((elem, index)=>{
                       if(elem ===target){
                           currentSlide=index;
                       }
                   })
                }

                if(currentSlide >= slide.length){
                    currentSlide=0;
                }    
                if(currentSlide <0){
                    currentSlide=slide.length-1;
                }
                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(dot, currentSlide, 'dot-active');
                
        });

        slider.addEventListener('mouseover', (event) =>{
            if (event.target.matches('.portfolio-btn') || event.target.matches(".dot")){
                stopSlide();
            }
        })
        slider.addEventListener('mouseout', (event) =>{
            if (event.target.matches('.portfolio-btn') || event.target.matches(".dot")){
                startSlide();
            }
        })

        startSlide(1500);
    }
    
    slider();























});            
   

