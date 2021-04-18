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

export default togglePopUp;
