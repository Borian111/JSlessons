'use strict'
let isNumber=function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let money;
let income = 'фриланс';
let mission = parseInt(20000000);
let period = 12 // число от 1 до 12 (месяцев)
//Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money

let start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));

}
start();
/*Спросить у пользователя “Есть ли у вас депозит в банке?”
и сохранить данные в переменной deposit (булево значение true/false)*/
let deposit =confirm('Есть ли у вас депозит в банке?');

function showTypeOf(dta) {
    console.log(typeof dta);
};

 //вызовы функции showTypeOf
 showTypeOf(deposit);
 showTypeOf(money);
 showTypeOf(income);


/*Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую”
сохранить в переменную addExpenses (пример: "Квартплата, проездной, кредит")*/

let expenses = [];
let addExpenses= prompt('Перечислите возможные расходы за рассчитываемый период через запятую');





/*Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 

“Введите обязательную статью расходов?” 

“Во сколько это обойдется?” */

//Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
let getExpensesMonth = function(){
    let sum=0;

    for (let i=0; i<3; i++) {
        
            expenses[i] = prompt('Введите обязательную статью расходов? '); 
             
        sum = sum + parseFloat(prompt('Во сколько это обойдется?'));
    }
    
   
	
console.log(expenses);
return sum;
}


let expensesAmount = getExpensesMonth();
//Вывод возможных расходов в виде массива (addExpenses)
console.log(addExpenses.toLowerCase().split(','));

console.log ('Расходы за месяц: ' + expensesAmount);


//Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
let getAccumulatedMonth = function(){
    return parseFloat(money-expensesAmount);
}

//Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth();



   /* Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель,
     зная результат месячного накопления (accumulatedMonth) и возвращает результат*/
let getTargetMonth = function(){
        let targ=(mission/accumulatedMonth);
         if (targ > 0) {
          console.log('Цель будет достигнута за ', Math.round(targ), "месяцев ");
          }else if (targ<=0){
          сonsole.log('Цель не будет достигнута'); 
          }  
    }

 // budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
 let budgetDay = accumulatedMonth/30;

 getTargetMonth();
 
 

 
 


 //вызов функции getStatusIncome
function  getStatusIncome(){
if (budgetDay >1200) {
    console.log('У вас высокий уровень дохода');
} else if (600 <= budgetDay < 1200){
    console.log('У вас средний уровень дохода');
} else if (0 <= budgetDay < 600){
    console.log('У вас низкий уровень дохода');
} else if (budgetDay < 0){
    console.log('Что-то пошло не так');
}
}
getStatusIncome(budgetDay);