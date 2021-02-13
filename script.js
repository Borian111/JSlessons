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
mission: parseFloat(20000000),
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
        let result=0;
        let expenses ={};
        expenses[i] = prompt('Введите обязательную статью расходов?');
        do{
         sum = +prompt('Во сколько это обойдется?');
            if(isNumber(sum)){
                result+= +sum;
            }
        }while(!isNumber(sum));
        appData.expenses[expenses[i]]=sum;
    }
}
};

appData.getExpensesMonth = function() {
         let summ=0;  
         for (let key in appData.expenses){
                summ +=appData.expenses[key]
            }
        return summ;
}; 

appData.getBudget = function(){
        return parseFloat(appData.budget-appData.getExpensesMonth());
};
    
appData.getTargetMonth = function(){
        let targ=(appData.mission/appData.getBudget());
         if (targ > 0) {
          console.log('Цель будет достигнута за ', Math.round(targ), "месяцев ");
          }else if (targ<=0){
          сonsole.log('Цель не будет достигнута'); 
          }  
};

appData.getStatusIncome = function(){
    let budgetDay = appData.getBudget()/30;
        if (budgetDay >1200) {
            console.log('У вас высокий уровень дохода');
        } else if (600 <= budgetDay < 1200){
            console.log('У вас средний уровень дохода');
        } else if (0 <= budgetDay < 600){
            console.log('У вас низкий уровень дохода');
        } else if (budgetDay < 0){
            console.log('Что-то пошло не так');
        }
};

start();
appData.asking();
appData.budget = money;

console.log('Расходы за месяц', appData.getExpensesMonth()); 
appData.getTargetMonth();
appData.getStatusIncome();
console.log('Наша программа включает в себя данные:');
       for (let key in appData){
            console.log(key +'  '+ appData[key]);
       }