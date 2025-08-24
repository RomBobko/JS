// змінна window
// методи confirm() prompt()

// const shouldRenew = confirm('хочете продовжити підписку ?');
// console.log(shouldRenew);

// отримати мін. базове введення 
const quantity = prompt('введіть кількість товару');
console.log(quantity);
console.log(typeof quantity);
// prompt мені повертає як рядок

let quantity = prompt('введіть кількість товару');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);
// тут конструктор - він повертає як к-ть
// 14 рядок - вираз писвоєння