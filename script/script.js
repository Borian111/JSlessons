'use strict'
let income = 'фриланс';
let mission = parseInt(2000000);
let period = 12 // число от 1 до 12 (месяцев)
//Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money = parseInt(prompt('Ваш месячный доход?'));

/*Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую”
сохранить в переменную addExpenses (пример: "Квартплата, проездной, кредит")*/
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

/*Спросить у пользователя “Есть ли у вас депозит в банке?”
и сохранить данные в переменной deposit (булево значение true/false)*/
let deposit =confirm('Есть ли у вас депозит в банке?');

/*Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 

“Введите обязательную статью расходов?” (например expenses1, expenses2)

“Во сколько это обойдется?” (например amount1, amount2)*/
console.log(typeof deposit);
console.log(typeof money);
console.log(typeof income);

let eXenses1 =prompt('Введите обязательную статью расходов?');
let aMount1 =prompt('Во сколько это обойдется?');

let eXpenses2 =prompt('Введите обязательную статью расходов?');
let aMount2 =prompt('Во сколько это обойдется?');


/*Вычислить бюджет на месяц, учитывая обязательные расходы,
 сохранить в новую переменную budgetMonth и вывести результат в консоль*/

 let budgetMonth = money - aMount1 - aMount2;
 console.log('Бюджет на месяц', budgetMonth);
 /*Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission,
  вывести в консоль, округляя в большую сторону*/
 let xMission = mission /(money - budgetMonth);
  console.log('Цель будет достигнута за ',Math.ceil(xMission),' месяцев');







//Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
let budgetDay = (budgetMonth)/30;
//Вывести в консоль budgetDay
console.log('бюджет на день', Math.floor(budgetDay));

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (600 <= budgetDay <= 1200){
    console.log('У вас средний уровень дохода');
} else if (0 <= budgetDay < 600){
    console.log('У вас низкий уровень дохода');
} else if (budgetDay < 0){
    console.log('Что-то пошло не так');
}
