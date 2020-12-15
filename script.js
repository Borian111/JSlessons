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
let periodAmount = document.querySelector('.period-amount');

let depositAmount = document.querySelector('.deposit-amount'); // Сумма зепозита
let depositPercent = document.querySelector('.deposit-percent'); // Процент депозита
let depositBank = document.querySelector('.deposit-bank'); // Банк с депозитом

let isNumber=function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};




let appData = {
budget: 0,
budgetDay: 0,
budgetMonth: 0,
expensesMonth: 0,
income: {},
incomeMonth: 0,
addIncome: [],
expenses: {},
addExpenses: [],
deposit: false,
percentDeposit: 0,
moneyDeposit: 0,
period: 0,



start: function() {
    
 

if(salaryAmount.value ==='') {
    start.disabled = false;
   return; 
 };




appData.budget = +salaryAmount.value;


appData.getExpenses();
appData.getIncome();
appData.getExpensesMonth();


appData.getAddexpenses();

appData.getAddIncome();
appData.getBudget();


appData.showResult();
appData.periodSelect();
appData.calcPeriod();


},




showResult: function(){
     budgetMonthValue.value = appData.getBudget();
     budgetDayValue.value = Math.ceil(appData.getBudget()/30);
     expensesMonthValue.value = appData.expensesMonth; 
     additionalExpensesValue.value = appData.addExpenses.join(', ');
     additionalIncomeValue.value = appData.addIncome.join(', ');  
     targetMonthValue.value = Math.ceil(appData.getTargetMonth());
     incomePeriodValue.value = appData.calcPeriod();

    },




  periodSelect: function() {
    console.log(periodSelect.value);
   document.getElementsByClassName('period-amount').textContent=periodSelect.value;
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
            appData.expenses[itemExpenses] = +cashExpenses;

      }
 
 
    });

},

getExpensesMonth: function() {
    let summ=0;  
for (let key in appData.expenses){
   
   summ +=appData.expenses[key];

       }
      appData.expensesMonth = +summ; 
      return summ;
      
},  

getIncome: function(){
    incomeItems.forEach(function(item){
        let itemTitle = item.querySelector('.income-title').value;
        let cashItem = item.querySelector('.income-amount').value;
        if(itemTitle !=='' && cashItem !== ''){
              appData.income[itemTitle] = +cashItem;
  
        }
   
   
      });
       
},

addIncomesBlock: function(){
  
    let cloneincomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneincomeItems, incomeAdd); 
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length ===3){
     incomeAdd.style.display = 'none';
    }
 },

getAddexpenses: function() {
     let addExpenses = additionalExpensesItem.value.split(',');
     addExpenses.forEach(function(item){
            item=item.trim();        
           if(item !==''){
               appData.addExpenses.push(item);
           }  

     });
},

getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
        let itemValue=item.value.trim();
        if(itemValue !==''){
            appData.addIncome.push(itemValue); 
        }
    })
},

getTargetMonth: function () {
    return targetAmount.value / appData.getBudget();

},

calcPeriod: function(){
    return appData.getBudget()*periodSelect.value;
},

getBudget: function(){
    return parseFloat(appData.budget+appData.incomeMonth-appData.getExpensesMonth());
},

selectValue: function(){ 
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = appData.calcPeriod();
}
  

};


start.addEventListener('click', appData.start);

expensesAdd.addEventListener('click', appData.addExpensesBlock);

incomeAdd.addEventListener('click', appData.addIncomesBlock);

periodSelect.addEventListener('change', appData.selectValue); 



