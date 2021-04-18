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

        postData(body, formsAll)
        .then((response) => {
            if(response.status !== 200){
                throw new Error('status network not 200');
            }
            outputData(formsAll);
        }) 
        .catch(error => console.error(error));
    }

    const outputData = (formsAll) => {
        statusMessage.textContent = successMesage; 
          const inputs = formsAll.querySelectorAll('input'); 
         inputs.forEach((item) => {
             item.value = '' 
         })
    }

    const postData = (body) => { 

        return fetch('./server.php', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        })
    
    }

}
 export default sendForm;