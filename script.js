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
    
 

    if(salaryAmount.value ==='') {
        
        this.start.disabled = false;
       return; 
     }
    
    
    
    
     this.budget = +salaryAmount.value;
    
     this.blockBtn();
     
     this.getExpenses();
     this.getIncome();
     this.getExpensesMonth();
    
    
     this.getAddexpenses();
    
     this.getAddIncome();
     this.getBudget();
    
    
     this.showResult();
     this.periodSelect();
     this.calcPeriod();
     
    
    };




    AppData.prototype.showResult=function(){
        budgetMonthValue.value = this.getBudget();
        budgetDayValue.value = Math.ceil(this.getBudget()/30);
        expensesMonthValue.value = this.expensesMonth; 
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');  
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
   
       };
   
   
   
   
       AppData.prototype.periodSelect=function() {
       //console.log(periodSelect.value);
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
       let summ=0;  
   for (let key in this.expenses){
      
      summ +=this.expenses[key];
   
          }
          this.expensesMonth = +summ; 
         return summ;
         
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
       return targetAmount.value / this.getBudget();
   
   };
   
   AppData.prototype.calcPeriod=function(){
       return this.getBudget()*periodSelect.value;
   };
   
   AppData.prototype.getBudget=function(){
       return parseFloat(this.budget+this.incomeMonth-this.getExpensesMonth());
   };
   
   AppData.prototype.selectValue=function(){ 
       periodAmount.textContent = periodSelect.value;
       incomePeriodValue.value = this.calcPeriod();
   };
   
   //После нажатия РАССЧИТАТЬ меняется на СБРОСИТЬ, поля для ввода блокируются
   AppData.prototype.blockBtn=function(){
   
       
       let inputsAll = document.querySelectorAll('input'); 
       start.style.display = 'none';
       cancel.style.display = 'inline-block';
       
         inputsAll.forEach(function(item) {
         // console.log(item);
         item.disabled = true;
       });
   };
   
   // после нажатия СБРОСИТЬ, всё возвращается в исходное полоджение
   AppData.prototype.reset=function(){
       start.style.display = 'inline-block';
       cancel.style.display = 'none';
     
       let inputsAll = document.querySelectorAll('input'); 
      inputsAll.forEach(function(item){
              item.value = "";
              item.disabled = false;
       });
      
   
   
       
       //удаляем лишние строки расходов и доходов
       
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
           //возвращем ползун обратно
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
   
    //Кнопка "Старт"
    const bindStart = appData.start.bind(_this);
    start.addEventListener('click', bindStart);
    //Кнопка "+", добавляет обязательные расходы
    expensesAdd.addEventListener('click', _this.addExpensesBlock);
    //Кнопка "+", добавляет дополнительные доходы
    incomeAdd.addEventListener('click', _this.addIncomesBlock);
    //ползунок
    let bindselectValue = appData.selectValue.bind(_this);
    periodSelect.addEventListener('change', bindselectValue); 

    //кнопка "Сбросить"
    let bindCancel = appData.reset.bind(_this);
    cancel.addEventListener('click', bindCancel);

    
};

const appData = new AppData();
appData.eventListeners();
//console.log(appData);