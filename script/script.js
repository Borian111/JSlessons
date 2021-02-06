'use strict'
//блок объявления переменных
let income = 'фриланс',
    mission = parseInt(2000000),
    period = 12, 
    money = parseInt(prompt('Ваш месячный доход?')),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit =confirm('Есть ли у вас депозит в банке?'),
    eXenses1 =prompt('Введите обязательную статью расходов?'),
    aMount1 =prompt('Во сколько это обойдется?'),
    eXpenses2 =prompt('Введите обязательную статью расходов?'),
    aMount2 =prompt('Во сколько это обойдется?'),
    budgetMonth = money - aMount1 - aMount2,
    xMission = mission /(money - budgetMonth),
    budgetDay = (budgetMonth)/30;

//блок функционала
if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (600 <= budgetDay <= 1200){
    console.log('У вас средний уровень дохода');
} else if (0 <= budgetDay < 600){
    console.log('У вас низкий уровень дохода');
} else if (budgetDay < 0){
    console.log('Что-то пошло не так');
}

//блок вывода в консоль
console.log(typeof deposit);
console.log(typeof money);
console.log(typeof income);
console.log('Бюджет на месяц', budgetMonth);
console.log('Цель будет достигнута за ',Math.ceil(xMission),' месяцев');
console.log('бюджет на день', Math.floor(budgetDay));