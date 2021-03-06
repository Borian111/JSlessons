'use strict'
let start = document.getElementById('start'); // кнопка расчитать
let cancel = document.getElementById('cancel');// кнопка сбросить
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

const AppData = function() {
    this.budget=0;
    this.budgetDay=0;
    this.budgetMonth=0;
    this.expensesMonth=0;
    this.income={};
    this.incomeMonth=0;
    this.addIncome=[];
    this.expenses={};
    this.addExpenses=[];
    this.deposit=false;
    this.percentDeposit=0;
    this.moneyDeposit=0;
    this.period=0;
};

AppData.prototype.start=function() {
    this.blockBtn();
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddexpenses();
    this.getIncomeMonth();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
    this.periodSelect();
    this.calcPeriod();
    this.selectValue();    
};
 AppData.prototype.showResult=function(){
     budgetMonthValue.value = this.budgetMonth;
     budgetDayValue.value = Math.ceil(this.budgetDay);
     expensesMonthValue.value = this.expensesMonth; 
     additionalExpensesValue.value = this.addExpenses.join(', ');
     additionalIncomeValue.value = this.addIncome.join(', ');  
     targetMonthValue.value = Math.ceil(this.getTargetMonth());
     incomePeriodValue.value = this.calcPeriod();
};  
   
AppData.prototype.periodSelect=function() {
        document.getElementsByClassName('period-amount').textContent=periodSelect.value;
}; 
   
AppData.prototype.addExpensesBlock=function(){     
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd); 
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length ===3){
       expensesAdd.style.display = 'none';
      }
};
   
AppData.prototype.getExpenses=function() {
      const _this = this;
      expensesItems.forEach(function(item){
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !=='' && cashExpenses !== ''){
            _this.expenses[itemExpenses] = +cashExpenses;   
         }   
      });
};
   
AppData.prototype.getExpensesMonth=function() {
    for (let key in this.expenses){   
        this.expensesMonth +=this.expenses[key];
    }         
};  
   
AppData.prototype.getIncome=function(){
       const _this=this; 
       incomeItems.forEach(function(item){
           let itemTitle = item.querySelector('.income-title').value;
           let cashItem = item.querySelector('.income-amount').value;
           if(itemTitle !=='' && cashItem !== ''){
            _this.income[itemTitle] = +cashItem;     
           }
       });          
};

AppData.prototype.getIncomeMonth=function() {
    for (let key in appData.income){
        this.incomeMonth += this.income[key];
    }
},   
   
AppData.prototype.addIncomesBlock=function(){     
       let cloneincomeItems = incomeItems[0].cloneNode(true);
       incomeItems[0].parentNode.insertBefore(cloneincomeItems, incomeAdd); 
       incomeItems = document.querySelectorAll('.income-items');
       if(incomeItems.length ===3){
        incomeAdd.style.display = 'none';
       }
};
   
AppData.prototype.getAddexpenses= function() {
        const _this=this;
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
               item=item.trim();        
              if(item !==''){
               _this.addExpenses.push(item);
              }     
        });
};
   
AppData.prototype.getAddIncome=function(){
    const _this=this;
       additionalIncomeItem.forEach(function(item){
           let itemValue=item.value.trim();
           if(itemValue !==''){
               _this.addIncome.push(itemValue); 
           }
       });
};
   
AppData.prototype.getTargetMonth=function () {
    return targetAmount.value / this.budgetMonth;   
};
   
AppData.prototype.calcPeriod=function(){
    return this.budgetMonth*periodSelect.value;
};
   
AppData.prototype.getBudget=function(){
    this.budget = +salaryAmount.value;
    this.budgetMonth=+this.budget-this.expensesMonth+this.incomeMonth;
    this.budgetDay=+this.budgetMonth/30;
};
   
AppData.prototype.selectValue=function(){ 
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = this.calcPeriod();
};
   
   
AppData.prototype.blockBtn=function(){      
       let inputsAll = document.querySelectorAll('input'); 
       start.style.display = 'none';
       cancel.style.display = 'inline-block';       
         inputsAll.forEach(function(item) {
         item.disabled = true;
         });
     periodSelect.disabled=false;  
};
   
   
AppData.prototype.reset=function(){
       start.style.display = 'inline-block';
       cancel.style.display = 'none';
     
       let inputsAll = document.querySelectorAll('input'); 
       inputsAll.forEach(function(item){
              item.value = "";
              item.disabled = false;
       });      
            for(let i = 1; i <incomeItems.length; i++) {
               incomeItems[i].remove(); 
            }
                   if(incomeAdd.style.display === 'none'){
                       incomeAdd.style.display = 'inline-block';
                   } 
       
           for(let i = 1; i < expensesItems.length; i++) {
               expensesItems[i].remove(); 
               }
              
                 if(expensesAdd.style.display === 'none'){
                   expensesAdd.style.display = 'inline-block';
                  } 
           periodAmount.textContent=1;
           periodSelect.value=1;           
           this.budget=0;
           this.budgetDay=0;
           this.budgetMonth=0;
           this.expensesMonth=0;
           this.income={};
           this.incomeMonth=0;
           this.addIncome=[];
           this.expenses={};
           this.addExpenses=[];
           this.deposit=false;
           this.percentDeposit=0;
           this.moneyDeposit=0;
           this.period=0;   
   };
   
AppData.prototype.eventListeners= function(){        
    const _this = this;   
    let startBind = appData.start.bind(_this);
    start.addEventListener('click', function() {
    if(salaryAmount.value ==='' || isNaN(salaryAmount.value)) {
        return;                
    }else{
        startBind();
    }
    });
    expensesAdd.addEventListener('click', _this.addExpensesBlock);
    incomeAdd.addEventListener('click', _this.addIncomesBlock);
    periodSelect.addEventListener('input', appData.selectValue.bind(_this)); 
    cancel.addEventListener('click', appData.reset.bind(_this));
    
};

const appData = new AppData();
appData.eventListeners();
