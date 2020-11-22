

// объявление переменных

let money = 130000 //любое число “Доход за месяц”,

let income = 50000 //строка с дополнительными доходом (например: фриланс), 

let addExpenses = 'Interet,Taxi,Tax' // строка с перечислением дополнительных расходов через запятую (например: интернет, такси, коммуналка), 

let deposit = true // любое булево значение,

let mission = 20000000 //любое число (Какую сумму хотите накопить),

let period = 12 // число от 1 до 12 (месяцев)


// Вывести в консоль тип данных значений переменных money, income, deposit;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

//Вывести в консоль длину строки addExpenses

console.log(addExpenses.length);

//Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”

console.log(' период равен ',period," месяцев \n",'Цель заработать ', mission," рублей");



//Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(','));



//Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
let budgetDay = (money+income)/30;
//Вывести в консоль budgetDay
console.log(budgetDay);

