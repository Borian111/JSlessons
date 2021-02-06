'use strict'
//блок объявления переменных
let income = 'фриланс',
    mission = parseInt(2000000),
    period = 12, 
    money = 1*(prompt('Ваш месячный доход?')),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit =confirm('Есть ли у вас депозит в банке?'),
    eXenses1 =prompt('Введите обязательную статью расходов?'),
    aMount1 =prompt('Во сколько это обойдется?'),
    eXpenses2 =prompt('Введите обязательную статью расходов?'),
    aMount2 =prompt('Во сколько это обойдется?'),
    accumulatedMonth = getAccumulatedMonth(money, aMount1, aMount2),
    budgetDay = accumulatedMonth/30;

//функциональный блок    
function getExpensesMonth(aMount1, aMount2){
    return aMount1*1+aMount2*1;
}	
function getAccumulatedMonth(money, aMount1, aMount2){
    return money-aMount1-aMount2;
}
function getTargetMonth(mission, accumulatedMonth){
    return Math.floor(mission/accumulatedMonth);
}
function showTypeOf(dta) {
    console.log(typeof dta);
};
function  getStatusIncome(budgetDay){
    if (budgetDay > 1200) {
        console.log('У вас высокий уровень дохода');
    } else if (600 <= budgetDay <= 1200){
        console.log('У вас средний уровень дохода');
    } else if (0 <= budgetDay < 600){
        console.log('У вас низкий уровень дохода');
    } else if (budgetDay < 0){
        console.log('Что-то пошло не так');
    }
}

//блок вывода
showTypeOf(deposit);
showTypeOf(money);
showTypeOf(income);
console.log(getExpensesMonth(aMount1, aMount2));
console.log(addExpenses.split(','));
console.log(getTargetMonth(mission, accumulatedMonth));
console.log(budgetDay);
getStatusIncome(budgetDay);