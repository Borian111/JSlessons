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

    const changeFoto = () => {
        const pics = document.querySelector('.command');
        const facePics = pics.querySelectorAll('.command__photo');
                        
        facePics.forEach((item) => { 
                item.addEventListener('mouseenter', (elem) => {
                    elem.target.dataset.src = elem.target.src
                    elem.target.src = elem.target.dataset.img
                });

                item.addEventListener('mouseout', (elem) => {
                    elem.target.src = elem.target.dataset.src

                });   
         
        })
    }    
    
    changeFoto();

    const calculator = () => {
        const calc = document.querySelector('.calc'); 
        calc.addEventListener('input', (elem) => {
            elem.target.value = elem.target.value.replace(/\D/g, '')
        })        
    }
    calculator();

   

    //калькулятор

    const calc = (price=100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');
        
        const countSum=()=>{
            let total=0,
                countValue=1,
                dayValue=1;
            let typeValue = calcType.options[calcType.selectedIndex].value, 
                squareValue = +calcSquare.value; 

                if(calcCount.value>1){
                    countValue += (calcCount.value-1) / 10;            
                }

                if(calcDay.value&&calcDay.value<5){
                    dayValue *=2;
                }else if(calcDay.value && calcDay.value <10) {
                    dayValue *=1.5;
                }                

                if(typeValue&&squareValue){
                    total = price*typeValue*squareValue*countValue*dayValue;    
                }
                totalValue.textContent = total;
        }          

        calcBlock.addEventListener('change', (event) =>{
            const target = event.target;
            if (target.matches('select')||target.matches('input')) {
                countSum();
            }
        })    
    }

    calc(100);
})    

//send-ajax-form

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMesage = 'Спасибо! мы скоро с Вами свяжемся!';
    
    const formsAll = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
   
    
   formsAll.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault(); 
            status(event.target)
        })
    });

    const status = (formsAll) => {
        statusMessage.textContent = loadMessage; 
        formsAll.appendChild(statusMessage); 
        const formData = new FormData(formsAll); 
        let body = {}; 

        formData.forEach((val, key)=>{
            body[key] = val;
        });

        postData(body, 
        ()=>{
            statusMessage.textContent = successMesage;
            const inputs = formsAll.querySelectorAll('input'); 
                inputs.forEach((item) => {
                    item.value = '' 
                })
        }, 
        (error) =>{ 
            statusMessage.textContent = errorMessage;
            console.error(error)   
        });
    }

    const postData = (body, outputData, errorData) =>{
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=>{
           
            if(request.readyState!==4){
                return;
            }
            if (request.status===200){
                outputData();               
            } else {
                errorData(request.status);                
            }
        })
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json')
        request.send(JSON.stringify(body));
    }
}

sendForm()

validator = () =>{
    const nameandMessage = () => {
        const name = document.querySelectorAll('input[name=user_name]'); 
        const message = document.querySelector('#form2-message');
        name.forEach((elem) =>{
            elem.addEventListener('input', (elem)=>{
                elem.target.value = elem.target.value.replace(/[^а-яА-ЯёЁ\s+]/g, '')
            })       
            
            elem.addEventListener('blur', (elem) => {            
                elem.target.value = elem.target.value.replace(/\s+/g, ' ');
                elem.target.value = elem.target.value.replace(/^\s+|\s{2,}|\s+$/g,'');
               
                if(elem.target.value !==''){
                    elem.target.value = elem.target.value.toLowerCase();
                    elem.target.value = elem.target.value.split(/\s/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
                }               
            })
        })
           
        message.addEventListener('input', (elem) => {
            elem.target.value = elem.target.value.replace(/[^а-яА-ЯёЁ\-\s+\!.?,\^0-9]/g, '');
        }) 
        
        message.addEventListener('blur', (elem) => {
            elem.target.value = elem.target.value.replace(/\s+/g, ' ');
            elem.target.value = elem.target.value.replace(/--+/g, '-');
            elem.target.value = elem.target.value.replace(/^\s+|\s{2,}|\s+$/g,'');
            elem.target.value = elem.target.value.replace(/^\-|\-{2,}|\-$/g, '');
        })  
    }
    
    nameandMessage();

    const allEmail = () => {
        const email = document.querySelectorAll('input[name=user_email]'); 
        
       email.forEach((elem) =>{
            elem.addEventListener('input', (elem)=>{
                 elem.target.value = elem.target.value.replace(/[^a-zA-Z\-\@~`_*!.]/g, '')
            })      
    
            elem.addEventListener('blur', (elem) => {
                elem.target.value = elem.target.value.replace(/\s+/g, '');
                elem.target.value = elem.target.value.replace(/^\s+|\s{2,}|\s+$/g,'');
                elem.target.value = elem.target.value.replace(/--+/g, '-');
                elem.target.value = elem.target.value.replace(/^\-|\-{2,}|\-$/g, '');
            })    
        })
    }
    allEmail();

    const allPhone = () => {
      
        const phone = document.querySelectorAll('input[name=user_phone]');         
        
        phone.forEach((elem) =>{
             elem.addEventListener('input', (elem) => {
                elem.target.value = elem.target.value.replace(/[^0-9\+]/g, '')
             })          
        })
   }

    allPhone();
}
validator();