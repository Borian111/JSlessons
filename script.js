'use strict'

let money;

//Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money

let isNumber=function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));

}

start();

let appData = {
income: {},
addIncome: [],
expenses: {
   // exp:[],
   // ans:[],
},
addExpenses: [],
deposit: false,
mission: 20000000,
period: 3,
budget: money,
budgetDay: 0,
budgetMonth: 0,
expensesMonth: 0,
asking: function() {
    let addExpenses= prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); 
        addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
        let sum=0;
        let exp=[];
        let vns=[];
        for (let i=0; i<2; i++) {
            
              
            exp[i] = prompt('Введите обязательную статью расходов? ');
            
            vns[i] = sum = sum + parseFloat(prompt('Во сколько это обойдется?'));
            
            
            
              
        }
        appData.expenses.exp =exp; 
        appData.expenses.vns=vns;
      console.log(appData.expenses);        
       
  },
}

appData.getExpensesMonth = function() {
         let sum=0;  
    for (let key in appData.expenses){
        sum +=appData.expenses[key]
            }
}          

appData.getBudget = function(){
        return parseFloat(appData.budget- appData.expensesMonth);
    }


   appData.getAccumulatedMonth = function(){
        return parseFloat(appData.budget-appData.getExpensesMonth());
    }    
appData.getTargetMonth = function(){
        let targ=(appData.mission/appData.getAccumulatedMonth());
         if (targ > 0) {
          console.log('Цель будет достигнута за ', Math.round(targ), "месяцев ");
          }else if (targ<=0){
          сonsole.log('Цель не будет достигнута'); 
          }  
    }

let budgetDay = appData.getBudget()/30;

appData.getStatusIncome = function(){
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




appData.asking()


//console.log ('Расходы за месяц: ' + appData.getExpensesMonth());



 

appData.getStatusIncome(budgetDay);

console.log(appData.getExpensesMonth()) //расходы за месяц
appData.getTargetMonth();

//appData.getAccumulatedMonth(budgetDay);
for (let key in appData) {
console.log(key);

}