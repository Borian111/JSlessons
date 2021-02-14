'use strict'

let money;

let isNumber=function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
};

let appData = {
income: {},
addIncome: [],
expenses: {},
addExpenses: [],
deposit: false,
mission: parseFloat(200000),
period: 3,
budget: 0,
budgetDay: 0,
budgetMonth: 0,
expensesMonth: 0,
asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses=addExpenses.toLowerCase().split(' ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i=0;i<2;i++){
        let sum =0;
        let expenses ={};
        expenses = prompt('Введите обязательную статью расходов?');
            do{
                sum = +prompt('Во сколько это обойдется?');
            }while(!isNumber(sum));
        appData.expenses[expenses]=+sum;
    
    }
}
};
//Функциональный блок
appData.getExpensesMonth = function() {
        for (let key in appData.expenses){
                appData.expensesMonth += appData.expenses[key];
            }
}; 

appData.getBudget = function(){
        appData.budget = money;
        appData.budgetMonth=+appData.budget-appData.expensesMonth;
        appData.budgetDay=+appData.budgetMonth/30;
};
    
appData.getTargetMonth = function(){
        let targ=(appData.mission/appData.budgetMonth);
         if (targ > 0) {
          console.log('Цель будет достигнута за ', Math.round(targ), "месяцев ");
          }else if (targ<=0){
          сonsole.log('Цель не будет достигнута'); 
          }  
};

appData.getStatusIncome = function(){
        if (appData.budgetDay >1200) {
            console.log('У вас высокий уровень дохода');
        } else if (600 <= appData.budgetDay < 1200){
            console.log('У вас средний уровень дохода');
        } else if (0 <= appData.budgetDay < 600){
            console.log('У вас низкий уровень дохода');
        } else if (appData.budgetDay < 0){
            console.log('Что-то пошло не так');
        }
};
//вызов функций, вывод в console.log
start();
appData.asking();
appData.getExpensesMonth();
console.log('Расходы за месяц', appData.expensesMonth);
appData.getBudget(); 
appData.getTargetMonth();
appData.getStatusIncome();
console.log('Наша программа включает в себя данные:');
       for (let key in appData){
            console.log(key +'  '+ appData[key]);
       }