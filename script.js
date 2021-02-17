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
itemIncome: "",
cashIncome: 0,
deposit: false,
percentDeposit: 0,
moneyDeposit: 0,
mission: parseFloat(200000),
period: parseFloat(3),
budget: 0,
budgetDay: 0,
budgetMonth: 0,
expensesMonth: 0,
asking: function(){

    if(confirm('Есть ли у вас дополнительный источник заработка?')){
        let start2 = function() {
            let itemIncome="";
            do {
               itemIncome = prompt('Какой у вас дополнительный заработок?', 'таксую');
            }while (isNumber(itemIncome));
                 
           let cashIncome=0;
                do {
                   cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000') ;
                } while (!isNumber(cashIncome));
                appData.income[itemIncome] = cashIncome; 
                }
    start2();
     
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses=addExpenses.toLowerCase().split(' ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i=0;i<2;i++){
            let sum =0;
            let expenses ={};
               
            let start4 = function() {
                do {
                    expenses = prompt('Введите обязательную статью расходов?');
                }
                while (isNumber(expenses));
            ;
              
            do{
                sum = +prompt('Во сколько это обойдется?');
            }while(!isNumber(sum))
        appData.expenses[expenses]=+sum;
        }          
        start4();
        }
    }
}

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

appData.getExpensesMonth = function() {
 for (let key in appData.expenses){
         appData.expensesMonth += appData.expenses[key];
    }; 
}

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

appData.getInfoDeposit = function() {
    if(appData.deposit){
        let start6 = function() {
            do {
                appData.percentDeposit = prompt('какой годовой процент?', 10);
            }
            while (!isNumber(appData.percentDeposit));
        }
        start6();

        let start7 = function() {
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена', 10000);
            }
            while (!isNumber(appData.moneyDeposit));
        }
        start7();     
       }
}

appData.calcSaveMoney = function(){
    return appData.budgetMonth*appData.period;
}

//вызов функций, вывод в console.log
start();
appData.asking();
bigLetter();
appData.getExpensesMonth();
console.log('Расходы за месяц', appData.expensesMonth);
appData.getBudget(); 
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
console.log('Наша программа включает в себя данные:');
       for (let key in appData){
            console.log(key +'  '+ appData[key]);
       }

console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSaveMoney())