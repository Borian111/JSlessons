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
expenses: {},
addExpenses: [],
deposit: false,
percentDeposit: 0,
moneyDeposit: 0,
mission: parseFloat(20000000),
period: parseFloat(3),
budget: 0,
budgetDay: 0,
budgetMonth: 0,
expensesMonth: 0,
asking: function(){

    if(confirm('Есть ли у вас дополнительный источник заработка?')){
        let itemIncome = "";
        let cashIncome = 0;
        let start2 = function() {
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'таксую');
            }
            while (isNumber(itemIncome));
        }
            start2();
        
    let start3 = function() {
                do {
                    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000') ;
                }
                while (!isNumber(cashIncome));
            }
    start3();

           }


    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses=addExpenses.toLowerCase().split(",");
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i=0;i<2;i++){
        let sum =0;
        let result=0;
        let expenses ={};
               
        let start4 = function() {
            do {
                expenses[i] = prompt('Введите обязательную статью расходов?') ;
            }
            while (isNumber(expenses[i]));
        }
        start4();
        
        
        do{
         sum = +prompt('Во сколько это обойдется?');
            if(isNumber(sum)){
                result+= +sum;
            }
        }while(!isNumber(sum));
        appData.expenses[expenses[i]]=sum;
    }
}
}

appData.asking();

function bigLetter() {
    
    let result = "";
  
    for (let i = 0; i < appData.addExpenses.length; i++) {
      let item = appData.addExpenses[i];
      let letter1 = item.substring(0, 1).toUpperCase();
      let letters = item.substring(1, item.length);
      result += letter1 + letters + " ";
    }
  
    console.log(result)
  }
  bigLetter();

appData.getExpensesMonth = function() {
         let summ=0;  
    for (let key in appData.expenses){
        
        summ +=appData.expenses[key]
            }
           return summ;
           
}  

//расходы за месяц
console.log('Расходы за месяц', appData.getExpensesMonth()); 

appData.budget = money;
appData.getBudget = function(){
        return parseFloat(appData.budget-appData.getExpensesMonth());
    }

   
//За какой период будет достигнута цель (в месяцах)      
appData.getTargetMonth = function(){
        let targ=(appData.mission/appData.getBudget());
         if (targ > 0) {
          console.log('Цель будет достигнута за ', Math.round(targ), "месяцев ");
          }else if (targ<=0){
          сonsole.log('Цель не будет достигнута'); 
          }  
    }

appData.getTargetMonth();

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
        }

appData.getInfoDeposit = function() {
    if(appData.deposit){

        let start5 = function() {
            do {
                appData.percentDeposit = prompt('какой годовой процент?', 10);
            }
            while (!isNumber(appData.percentDeposit));
        }
        start5();

        let start6 = function() {
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена', 10000);
            }
            while (!isNumber(appData.moneyDeposit));
        }
        start6();



        
       }
}


appData.calcSaveMoney = function(){
    return appData.getBudget()*appData.period;
}


        appData.getStatusIncome();
        appData.getInfoDeposit();
console.log('Наша программа включает в себя данные:');

for (let key in appData){

console.log(key +'  '+ appData[key]);

}

//console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSaveMoney())
//appData.getInfoDeposit();
 

