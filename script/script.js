'use strict';

let ourText = prompt('Необходимо ввести какой-ниюбудь текст ', 'Олды здесь?');

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
        let ourClass = this.selector.slice(1);
              div.classList.add(ourClass);
              div.style.height = this.height;
              div.style.width = this.width;
              div.style.background = this.bg;
              div.style.fontSize = this.fontSize;
              div.textContent = ourText;
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

let ourIddom = new DomElement('#best', 300, 300, 'blue', '300px');
let ourClassdom = new DomElement('.block', 300, 300, 'pink', '300px');
ourIddom.newDom();
ourClassdom.newDom();
