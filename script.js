'use strict'
//Блок переменных
let money,
    income = 'фриланс',
    mission = parseInt(2000000),
    period = 12,
    accumulatedMonth,
    expensesAmount,
    budgetDay,
    expenses = [],
    deposit,
    addExpenses;
//функц блок
let isNumber=function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
let start = function() {
    do {
        money = 1*(prompt('Ваш месячный доход?'));
    }
    while (!isNumber(money));
}
start();

deposit =confirm('Есть ли у вас депозит в банке?');

function showTypeOf(dta) {
    console.log(typeof dta);
}

addExpenses= prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

let getExpensesMonth = function(){
    let sum=0;

    for (let i=0; i<2; i++) {
             expenses[i] = prompt('Введите обязательную статью расходов? '); 
             sum = sum + parseFloat(prompt('Во сколько это обойдется?'));
    }

console.log(expenses);
return sum;
}

expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function(){
    return parseFloat(money-expensesAmount);
}

accumulatedMonth = getAccumulatedMonth();
  
let getTargetMonth = function(){
        let targ=(mission/accumulatedMonth);
         if (targ > 0) {
          console.log('Цель будет достигнута за ', Math.round(targ), "месяцев ");
          }else if (targ<=0){
          сonsole.log('Цель не будет достигнута'); 
          }  
    };
 
budgetDay = accumulatedMonth/30; 
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

//блок вывода
showTypeOf(deposit);
showTypeOf(money);
showTypeOf(income);
console.log(addExpenses.toLowerCase().split(','));
console.log ('Расходы за месяц: ' + expensesAmount);
getTargetMonth();
getStatusIncome(budgetDay);

 
 


 

