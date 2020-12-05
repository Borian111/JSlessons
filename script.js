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


   
   
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); // спрашиваем расходы
appData.addExpenses = addExpenses.split(','); // разделяем их запятой
appData.addExpenses = appData.addExpenses.map((item) => { // перебираем массив через map
    return item.trim().slice(0, 1).toLocaleUpperCase() + item.trim().slice(1).toLowerCase(); // где на каждой итерации у итерируемого элемента отрезаем первый символ и приводим его к верхнему регистру, а потом конкатенируем с остальным куском элемента, приведённого к нижниему регистру
});
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
 
//Кнопку "Рассчитать" через id
const counttt = document.getElementById('start');


//Кнопки “+” (плюс) через Tag, каждую в своей переменной.
const buT1 = document.getElementsByTagName('button');



//Чекбокс по id через querySelector
const chekBoxx = document.querySelector('#deposit-check');


//Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll

const addInk=document.querySelectorAll(".additional_income-item");

//Каждый элемент в правой части программы через класс(не через querySelector), которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">
const val1 = document.getElementsByClassName("result-total budget_month-value");
const val2 = document.getElementsByClassName("result-total budget_day-value");
const val3 = document.getElementsByClassName("result-total expenses_month-value");
const val4 = document.getElementsByClassName("result-total additional_income-value");
const val5 = document.getElementsByClassName("result-total additional_expenses-value");
const val6 = document.getElementsByClassName("result-total income_period-value");
const val7 = document.getElementsByClassName("result-total target_month-value");

//Оставшиеся поля через querySelector каждый в отдельную переменную:
//поля ввода (input) с левой стороны и не забудьте про range.
const inpUt1=document.querySelector('.salary-amount');
const inpUt2=document.querySelector('.income-title');
const inpUt3=document.querySelector('.income-amount');
const inpUt4=document.querySelector('.expenses-title');
const inpUt5=document.querySelector('.expenses-amount');
const inpUt6=document.querySelector('.additional_expenses-item');
const inpUt7=document.querySelector('.additional_expenses-item');
const inpUt8=document.querySelector('.period-select');
