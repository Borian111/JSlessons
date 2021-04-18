validator = () => {
    const nameandMessage = () => {
        const name = document.querySelectorAll('input[name=user_name]'); 
        const message = document.querySelector('#form2-message');
        name.forEach((elem) =>{
            elem.addEventListener('input', (elem)=>{
                elem.target.value = elem.target.value.replace(/[^а-яА-ЯёЁ\s+]/g, '')
            });       
            
            elem.addEventListener('blur', (elem) => {            
                elem.target.value = elem.target.value.replace(/\s+/g, ' ');
                elem.target.value = elem.target.value.replace(/^\s+|\s{2,}|\s+$/g,'');
               
                if(elem.target.value !==''){
                    elem.target.value = elem.target.value.toLowerCase();
                    elem.target.value = elem.target.value.split(/\s/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
                }               
            });
        });
           
        message.addEventListener('input', (elem) => {
            elem.target.value = elem.target.value.replace(/[^а-яА-ЯёЁ\-\s+\!.?,\^0-9]/g, '');
        });
        
        message.addEventListener('blur', (elem) => {
            elem.target.value = elem.target.value.replace(/\s+/g, ' ');
            elem.target.value = elem.target.value.replace(/--+/g, '-');
            elem.target.value = elem.target.value.replace(/^\s+|\s{2,}|\s+$/g,'');
            elem.target.value = elem.target.value.replace(/^\-|\-{2,}|\-$/g, '');
        });  
    };
    
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
            });    
        });
    };
    allEmail();

    const allPhone = () => {
      
        const phone = document.querySelectorAll('input[name=user_phone]');         
        
        phone.forEach((elem) =>{
             elem.addEventListener('input', (elem) => {
                elem.target.value = elem.target.value.replace(/[^0-9\+]/g, '')
             });          
        });
   };

    allPhone();

    const calculator = () => {
        const calc = document.querySelector('.calc'); 
        calc.addEventListener('input', (elem) => {
            elem.target.value = elem.target.value.replace(/\D/g, '')
        });        
    };
    calculator();
};

export default validator;