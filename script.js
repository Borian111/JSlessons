'use strict'


let start = document.getElementById('start'); // кнопка расчитать
let incomeAdd = document.getElementsByTagName('button')[0]; // Доп доход
let expensesAdd = document.getElementsByTagName('button')[1]; // доп расход
let depositCheck = document.querySelector('#deposit-check'); //Проверка на депозит
let additionalIncomeItem = document.querySelectorAll('.additional_income-item'); //Поля для ввода возможных доходов

let budgetMonthValue = document.querySelector('.budget_month-value');
let budgetDayValue = document.querySelector('.budget_day-value'); // Дневной бюджет
let expensesMonthValue = document.querySelector('.expenses_month-value'); //Расход за месяц
let additionalIncomeValue = document.querySelector('.additional_income-value'); // Возможные доходы
let additionalExpensesValue = document.querySelector('.additional_expenses-value'); // Возможные расходы
let incomePeriodValue = document.querySelector('.income_period-value'); // Накопления за период
let targetMonthValue = document.querySelector('.target_month-value'); // Срок достижения цели в месяцах

let salaryAmount = document.querySelector('.salary-amount'); // Месячный доход
let incomeTitle = document.querySelector('.income-title'); // Название (Дополнительный доход)
let incomeAmount = document.querySelector('.income-amount'); // Сумма (Дополнительный доход)
let expensesTitle = document.querySelector('.expenses-title'); // Название (Обязательные расходы)

let incomeItems = document.querySelectorAll('.income-items');
let expensesItems = document.querySelectorAll('.expenses-items'); // Сумма (Обязательные расходы) 

let additionalExpensesItem = document.querySelector('.additional_expenses-item'); // Возможные расходы
let targetAmount = document.querySelector('.target-amount'); // Цель
let periodSelect = document.querySelector('.period-select'); // Период расчета
let depositAmount = document.querySelector('.deposit-amount'); // Сумма зепозита
let depositPercent = document.querySelector('.deposit-percent'); // Процент депозита
let depositBank = document.querySelector('.deposit-bank'); // Банк с депозитом

let isNumber=function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}





let appData = {
budget: 0,
budgetDay: 0,
budgetMonth: 0,
expensesMonth: 0,
income: {},
addIncome: [],
expenses: {},
addExpenses: [],
deposit: false,
percentDeposit: 0,
moneyDeposit: 0,
mission: parseFloat(20000000),
period: parseFloat(3),
start: function() {
    

appData.budget = salaryAmount.value;
console.log(salaryAmount.value, 'проверка');

appData.getExpenses();
appData.getExpensesMonth();

appData.getBudget();

},
addExpensesBlock: function(){
  
   let cloneExpensesItem = expensesItems[0].cloneNode(true);
   expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd); 
   expensesItems = document.querySelectorAll('.expenses-items');
   if(expensesItems.length ===3){
    expensesAdd.style.display = 'none';
   }
},

getExpenses: function() {
   expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !=='' && cashExpenses !== ''){
            appData.expenses[itemExpenses] = cashExpenses;

      }
 
 
    });

},

asking: function() {

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
}
}   

start.addEventListener('click', appData.start);

expensesAdd.addEventListener('click', appData.addExpensesBlock);

function bigLetter() {
    
    let result = "";
  
    for (let i = 0; i < appData.addExpenses.length; i++) {
      let item = appData.addExpenses[i];
      let letter1 = item.substring(0, 1).toUpperCase();
      let letters = item.substring(1, item.length);
      result += letter1 + letters + " ";
    }
  
    console.log(result);
  }
  bigLetter();

appData.getExpensesMonth = function() {
         let summ=0;  
    for (let key in appData.expenses){
        
        summ +=appData.expenses[key];

            }
           return summ;
           
};  

//расходы за месяц
console.log('Расходы за месяц', appData.getExpensesMonth()); 


appData.getBudget = function(){
        return parseFloat(appData.budget-appData.getExpensesMonth());
    };

   
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
        };

        


appData.getInfoDeposit = function() {
    if(appData.deposit){

        let start5 = function() {
            do {
                appData.percentDeposit = prompt('какой годовой процент?', 10);
            }
            while (!isNumber(appData.percentDeposit));
        };
        start5();

        let start6 = function() {
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена', 10000);
            }
            while (!isNumber(appData.moneyDeposit));
        };
        start6();



        
       }
};


appData.calcSaveMoney = function(){
    return appData.getBudget()*appData.period;
};




       // appData.getStatusIncome();
      //  appData.getInfoDeposit();
//console.log('Наша программа включает в себя данные:');

/*for (let key in appData){

console.log(key +'  '+ appData[key]);

}*/

