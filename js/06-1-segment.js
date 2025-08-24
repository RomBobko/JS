// скрипт який провіряє входження числа у відрізок від x1 та x2

// до x1 
// після x2
// від x1 до x2
// до x1 після x2


const x1 = 10;
const x2 = 30;
const number =50;

console.log(`число ${number} попадає у відрізок до ${x1}`, number < x1);
console.log(`число ${number} попадає у відрізок після ${x2}`, number > x2);
console.log(`число ${number} попадає у відрізок від ${x1} до ${x2}`, number > x1 && number < x2);

const res = number < x1 || number > x2;
console.log(`число менше x1 та , більше x2`, res);
