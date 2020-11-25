'use strict'
let income = 'фриланс';
let mission = parseInt(20000000);
let period = 12 // число от 1 до 12 (месяцев)
//Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money = prompt('Ваш месячный доход?');

/*Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую”
сохранить в переменную addExpenses (пример: "Квартплата, проездной, кредит")*/
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

/*Спросить у пользователя “Есть ли у вас депозит в банке?”
и сохранить данные в переменной deposit (булево значение true/false)*/
let deposit =confirm('Есть ли у вас депозит в банке?');

/*Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 

“Введите обязательную статью расходов?” (например expenses1, expenses2)

“Во сколько это обойдется?” (например amount1, amount2)*/


let eXenses1 =prompt('Введите обязательную статью расходов?');
let aMount1 =prompt('Во сколько это обойдется?');

let eXpenses2 =prompt('Введите обязательную статью расходов?');
let aMount2 =prompt('Во сколько это обойдется?');

//Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц

function getExpensesMonth(aMount1, aMount2){
    return aMount1*1+aMount2*1;

}	


//Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth(money, aMount1, aMount2){
    return money*1-aMount1*1-aMount2*1;
}

//Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
const accumulatedMonth = getAccumulatedMonth(money, aMount1, aMount2);
console.log(accumulatedMonth*1);


   /* Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель,
     зная результат месячного накопления (accumulatedMonth) и возвращает результат*/
function getTargetMonth(mission, accumulatedMonth){
        return Math.floor(mission/accumulatedMonth);
    }

 // budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
 let budgetDay = accumulatedMonth/30;

 function showTypeOf(dta) {
    console.log(typeof dta);
};

 //вызовы функции showTypeOf
 showTypeOf(deposit);
 showTypeOf(money);
 showTypeOf(income);
 
 //Расходы за месяц вызов getExpensesMonth
 console.log(getExpensesMonth(aMount1, aMount2));

 //Вывод возможных расходов в виде массива (addExpenses)
 console.log(addExpenses.split(','));

 //Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
 console.log(getTargetMonth(mission, accumulatedMonth));

 //вызов функции getStatusIncome
function  getStatusIncome(budgetDay){
if (budgetDay => 1200) {
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