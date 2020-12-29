'use strict';


let ourText = prompt('Необходимо ввести какой-ниюбудь текст ');
let DomElement = function(selector, height, width, bg, fontSize) {
       this.selector = selector;
       this.height = height;
       this.width = width;
       this.bg = bg;
       this.fontSize = fontSize;
};

DomElement.prototype.newDom = function() {
    if(this.selector[0] === '.')   {
        
      
        let ouRdiv = document.createElement('div');
        const ourClass = this.selector.slice(1);
        console.log(ourClass);
              ouRdiv.classList.add(ourClass);
              ouRdiv.style.height = this.height;
              ouRdiv.style.width = this.width;
              ouRdiv.style.background = this.bg;
              ouRdiv.style.fontSize = this.fontSize;
              ouRdiv.textContent = ourText;
        document.body.appendChild(ouRdiv);
       


    }else if(this.selector.trim()[0] === '#'){
      
        let ouRp = document.createElement('p');
        let ouRId = this.selector.slice(1);
             ouRp.setAttribute('id', ouRId);
             ouRp.style.height = this.height;
             ouRp.style.width = this.width;
             ouRp.style.background = this.bg;
             ouRp.style.fontSize = this.fontSize;
             ouRp.textContent = ourText;
        document.body.appendChild(ouRp);
            
}
};

let ourBlock = new DomElement(ourText, 300, 300, 'blue', '300px');
ourBlock.newDom();

