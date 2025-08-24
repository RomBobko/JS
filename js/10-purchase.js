    // скрипт обробки покупки в магазині
let balance = 10000;
const payment = 2000;

console.log(`загальна вартість замовлення ${payment}, перевіряємо доступність балансу`);


if (balance >= payment) {
// console.log('ok');

//  balance = balance - payment;
    balance -= payment;

    console.log(`на захунку залишилось ${balance}`);
} else {
    console.log('недостатній баланс');
}
console.log('операція завершена');
