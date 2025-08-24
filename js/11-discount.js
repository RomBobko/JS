// скриипт підрахунку суми покупки зі скидкою в залежності
// від потраченої суми за весь час

// якщо від 100 до 1000 - бронза 2%
// якщо від 1000 до 5000 - срібло 5%
// якщо від 5000 - золото 10%
// якщо менше 100 - 0%

// в результаті вивести повідомлення
// "оформляємо замовлення на [сумму] зі [знижкою]"

let totalSpent = 2000;
let payment = 350;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
    discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    discount = 0.05;
} else if (totalSpent >= 5000) {
    discount = 0.1;
} else {
    console.log('знижка 0%');
}

// payment = payment - payment * discount;
payment -= payment * discount;

console.log(`оформляємо замовлення на сумму ${payment} зі знижкою ${discount * 100}%`);

totalSpent += payment ;

console.log(`загальна сума потрачена в магазині ${totalSpent}`);