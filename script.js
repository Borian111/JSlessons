'use strict'


const start = document.getElementById('start'); // кнопка расчитать
const cancel = document.getElementById('cancel');// кнопка сбросить
const incomeAdd = document.getElementsByTagName('button')[0]; // Доп доход
const expensesAdd = document.getElementsByTagName('button')[1]; // доп расход
const depositCheck = document.querySelector('#deposit-check'); //Проверка на депозит
const additionalIncomeItem = document.querySelectorAll('.additional_income-item'); //Поля для ввода возможных доходов

const budgetMonthValue = document.querySelector('.budget_month-value');
const budgetDayValue = document.querySelector('.budget_day-value'); // Дневной бюджет
const expensesMonthValue = document.querySelector('.expenses_month-value'); //Расход за месяц
const additionalIncomeValue = document.querySelector('.additional_income-value'); // Возможные доходы
const additionalExpensesValue = document.querySelector('.additional_expenses-value'); // Возможные расходы
const incomePeriodValue = document.querySelector('.income_period-value'); // Накопления за период
const targetMonthValue = document.querySelector('.target_month-value'); // Срок достижения цели в месяцах

const salaryAmount = document.querySelector('.salary-amount'); // Месячный доход
const incomeTitle = document.querySelector('.income-title'); // Название (Дополнительный доход)
const incomeAmount = document.querySelector('.income-amount'); // Сумма (Дополнительный доход)
const expensesTitle = document.querySelector('.expenses-title'); // Название (Обязательные расходы)

let incomeItems = document.querySelectorAll('.income-items');
let expensesItems = document.querySelectorAll('.expenses-items'); // Сумма (Обязательные расходы) 

const additionalExpensesItem = document.querySelector('.additional_expenses-item'); // Возможные расходы
const targetAmount = document.querySelector('.target-amount'); // Цель


const periodSelect = document.querySelector('.period-select'); // Период расчета
const periodAmount = document.querySelector('.period-amount');

const depositAmount = document.querySelector('.deposit-amount'); // Сумма зепозита
const depositPercent = document.querySelector('.deposit-percent'); // Процент депозита
const depositBank = document.querySelector('.deposit-bank'); // Банк с депозитом

let isNumber=function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

class AppData {
constructor(){
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
}



start() {
    
 
   
  
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
     this.getinfoDeposit();
     
    
     if(isNaN(this.percentDeposit) || this.percentDeposit < 1 || this.percentDeposit > 100 ) {
        alert('Введите корректное значение в поле проценты');
        this.start.disabled = false;
        start.style.display = 'inline-block'; //запрещаем скрывать кнопку "рассчитать"
        cancel.style.display = 'none';
        depositPercent.disabled = false;//оставляем возможностьм менять поле проценты
        return;
    }
   
     
     this.getBudget();
    
    
     this.showResult();
     this.periodSelect();
     this.calcPeriod();
     
    
    }


  

    showResult(){
        budgetMonthValue.value = this.getBudget();
        budgetDayValue.value = Math.ceil(this.getBudget()/30);
        expensesMonthValue.value = this.expensesMonth; 
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');  
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
   
       }
   
   
   
   
    periodSelect() {
       //console.log(periodSelect.value);
      document.getElementsByClassName('period-amount').textContent=periodSelect.value;
     }
   
   
   
   
    addExpensesBlock(){
     
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd); 
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length ===3){
       expensesAdd.style.display = 'none';
      }
   }
   
    getExpenses() {
        
      expensesItems.forEach((item) => {
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !=='' && cashExpenses !== ''){
            this.expenses[itemExpenses] = +cashExpenses;
   
         }
    
    
       });
   
   }
   
   getExpensesMonth() {
       let summ=0;  
   for (let key in this.expenses){
      
      summ +=this.expenses[key];
   
          }
          this.expensesMonth = +summ; 
         return summ;
         
   }  
   
   getIncome(){
           
       incomeItems.forEach((item) => {
           let itemTitle = item.querySelector('.income-title').value;
           let cashItem = item.querySelector('.income-amount').value;
           if(itemTitle !=='' && cashItem !== ''){
            this.income[itemTitle] = +cashItem;
     
           }
      
      
         });
          
   };
   
   addIncomesBlock(){
     
       let cloneincomeItems = incomeItems[0].cloneNode(true);
       incomeItems[0].parentNode.insertBefore(cloneincomeItems, incomeAdd); 
       incomeItems = document.querySelectorAll('.income-items');
       if(incomeItems.length ===3){
        incomeAdd.style.display = 'none';
       }
    }
   
    getAddexpenses() {
        
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => {
               item=item.trim();        
              if(item !==''){
               this.addExpenses.push(item);
              }  
   
        });
   }
   
   getAddIncome(){
    
       additionalIncomeItem.forEach((item) => {
           let itemValue=item.value.trim();
           if(itemValue !==''){
               this.addIncome.push(itemValue); 
           }
       });
   }
   
   getTargetMonth() {
       return targetAmount.value / this.getBudget();
   
   }
   
   calcPeriod(){
       return this.getBudget()*periodSelect.value;
   }
   
   getBudget(){
    const monthDeposit = this.moneyDeposit*(this.percentDeposit/100)/12;  
    return parseFloat(this.budget+this.incomeMonth-this.getExpensesMonth()+monthDeposit);
    
   
    }
   
   selectValue(){ 
       periodAmount.textContent = periodSelect.value;
       incomePeriodValue.value = this.calcPeriod();
   }
   
   //После нажатия РАССЧИТАТЬ меняется на СБРОСИТЬ, поля для ввода блокируются
   blockBtn(){
   
       
       let inputsAll = document.querySelectorAll('input'); 
       start.style.display = 'none';
       cancel.style.display = 'inline-block';
       
         inputsAll.forEach(function(item) {
         // console.log(item);
         item.disabled = true;
       });
   }
   
   // после нажатия СБРОСИТЬ, всё возвращается в исходное полоджение
   reset(){
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
           
            depositCheck.checked = false; //убираем галочку с депозита
            depositBank.style.display = 'none';
           depositAmount.style.display = 'none';


           
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
       
   }

  changePercent(){
      const valueSelect = this.value;
      console.log(valueSelect);
      if (valueSelect==='other') {
          depositPercent.style.display = 'inline-block';  //появляется поле процентов
           }else{
          depositPercent.value = valueSelect;
      }
  }

  


   depositHandler(){
       if (depositCheck.checked){
           depositBank.style.display = 'inline-block';
           depositAmount.style.display = 'inline-block';
           this.deposit = true
           depositBank.addEventListener('change', this.changePercent);
         
       }else{
           depositBank.style.display = 'none';
           depositAmount.style.display = 'none';
           depositBank.value='';
           depositAmount.value='';
           this.deposit=false;
           depositBank.removeEventListener('change', this.changepercent)
       }
   }
   
   getinfoDeposit(){
       if(this.deposit){
           this.percentDeposit = depositPercent.value;
           this.moneyDeposit = depositAmount.value;
       }
            
   }



   eventListeners(){
        
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

    depositCheck.addEventListener('change', this.depositHandler.bind(this));


    
}
}

const appData = new AppData();
appData.eventListeners();
