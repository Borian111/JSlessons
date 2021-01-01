'use strict';

//Два класса, First и Second, Second наследует от First .


// В First есть метод hello - он печатает в консоль "Привет я метод родителя!".
class First {


    hello(){
        console.log("Привет я метод родителя!");
    }
}


//const classFirst = new First();
//classFirst.hello();


/*Нужно написать в Second метод hello, чтоб он сначала вызывал метод hello из First, а потом сразу печатал в консоль "А я наследуемый метод!"*/
class Second extends First {


    hello(){
        super.hello();
        console.log("А я наследуемый метод!");
    }

}
let classSecond = new Second();
classSecond.hello();