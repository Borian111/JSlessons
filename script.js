'use strict'

const starttt = document.getElementById('start');//Кнопку "Рассчитать" через id
const incomeAdd = document.getElementsByTagName('button')[0];//Кнопки “+” (плюс) через Tag
const expensesAdd = document.getElementsByTagName('button')[1];
const depositCheck = document.querySelector('#deposit-check');//Чекбокс по id
//Поля для ввода возможных доходов 
const addIncomeitem=document.querySelectorAll(".additional_income-item");
//Каждый элемент в правой части программы 
const resTotalbudgMonth = document.getElementsByClassName("result-total budget_month-value")[0];
const resTotalbudgDay = document.getElementsByClassName("result-total budget_day-value")[0];
const resTotalexpensesMonth = document.getElementsByClassName("result-total expenses_month-value")[0];
const resTotaladdIncome = document.getElementsByClassName("result-total additional_income-value")[0];
const resTotaladdExpenses = document.getElementsByClassName("result-total additional_expenses-value")[0];
const resTotalincperiod = document.getElementsByClassName("result-total income_period-value")[0];
const resTotaltargMonth = document.getElementsByClassName("result-total target_month-value")[0];
//поля ввода (input) с левой стороны
const inputSalary=document.querySelector('.salary-amount');
const inputIncomeTitle=document.querySelector('.income-title');
const inputincomeAmount=document.querySelector('.income-amount');
const inputExpensesTitle=document.querySelector('.expenses-title');
const inputExprnsesAmount=document.querySelectorAll('.expenses-amount');
const expensesItems = document.querySelectorAll('.expenses-items');
const inputExpensesAmount=document.querySelector('.expenses-amount');
const inputAddexpenses=document.querySelector('.additional_expenses-item');
const targetAmount=document.querySelector('.target-amount');
const periodSelect=document.querySelector('.period-select');
const periodAmount=document.querySelector('.period-amount');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const depositBank = document.querySelector('.deposit-bank');

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
