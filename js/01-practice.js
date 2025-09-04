// 1.
// const firstName = 'Roman';
// const age = 29;
// const town = 'Lviv';
// const message = `Привіт мене звати ${firstName} мені ${age} років і я з міста ${town}.`;
// console.log(message);



// 2.
// let a = '5';
// let b = 2;
// const total = Number(a) + b;
// console.log(total);



// 3.
// const number = Number(prompt("Введи число:"));
// if (number > 0) {
//     console.log('Додатнє');
// } else if (number < 0) {
//     console.log('Відємне');
// } else {
//     console.log('0');
// }



// 4.
// const age = 0;
// let message;

// if (age < 18) {
//     message = 'доступ заборонено';
// } else if (age >= 18 && age <= 60) {
//     message = 'доступ дозволено';
// } else {
//     message = 'пенсійна знижка';
// }
// console.log(message);



// 5.
// const min = 1;
// const max = 10;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);
// }



// 6.
// const number = 7;

// for (let i = 1; i <=10; i += 1 ) {
//     let result = number * i;
//     console.log(`${number} * ${i} = ${result}`);
// }



// 7.
// const N = 10;
// let sum = 0 ;
// for (let i = 1; i <= N; i += 1) {
//     sum += i;
// }
// console.log(`сумма від 1 до ${N} = ${sum}`);



// 8.
// const a = 10;
// const b = 5;
// let operation = '+';
// let result;

// if (operation === '+') {
//     result = a + b;
// } else if (operation === '-') {
//     result = a - b;
// } else if (operation === '*') {
//     result = a * b;
// } else if (operation === '/') {
//     result = a / b;
// }
// console.log(result);



// 9.
// const secret = 7;
// let guess = Number(prompt('введіть цифру'));

// if (secret > guess) {
//     console.log('надто маленьке', guess);
// } else if (secret < guess) {
//     console.log('надто велике', guess);
// } else {
//     console.log('вгадав', guess);
// }



// 10.
// let age = Number(prompt('введіть свій вік'));

// if (age < 18) {
//     console.log('доступ заборонено');
// } else if (age >= 18 && age <= 60) {
//     console.log('ласкаво просимо');
// }else {
//     console.log('будьте обережні');
// }



// 11.
// let number = Number(prompt('введіть число'));

// if (number % 2 !== 0) {
//     console.log('непарне');
// } else {
//     console.log('парне');
// }



// 12.
// let number = Number(prompt('введіть число'));

// if (number > 0) {
//     console.log('додатнє');
// } else if (number < 0) {
//     console.log('відємне');
// } else {
//     console.log('нуль');
// }



// 13.
// for (let i = 1; i <= 5; i += 1) {
//     console.log(i);
// }



// 14.
// const number = 3;

// for (let i = 1; i <= 10; i +=1) {
//     let result = number * i;
//     console.log(`${number} * ${i} = ${result}`)
// }



// 15.
// const N = 10;
// let sum = 0;

// for (let i = 1; i <= N; i += 1) {
//     if (i % 2 === 0)
//     sum += i;
// }
// console.log(sum);



// 16.
// for (let i = 1; i <= 10; i += 1) {
//     if (i % 2 === 0) {
//         console.log(i, 'парне');
//     } else {
//         console.log(i, 'непарне');
//     }
// }



// 17.
// const number = 4;

// for (let i = 1; i <= 10; i += 1) {
//     let result = number * i;
//     if (result > 15) {
//         console.log(result);
//     }
// }



// 18.
// const N = 10;
// let sumEven = 0;
// let sumOdd = 0;

// for (let i = 1; i <= 10; i += 1) {
//     if (i % 2 === 0) {
//         sumEven += i;
//     } else {
//         sumOdd += i;
//     }
// }
// console.log(`парні ${sumEven}, непарні ${sumOdd}`);



// 19.
// const N = 20;
// let sum3 = 0;
// let sum5 = 0;

// for (let i = 1; i <= N; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         sum3 += i;
//         sum5 += i;
//     } else if (i % 3 === 0) {
//         sum3 += i;
//     }else if (i % 5 === 0) {
//         sum5 += i;
//     }
// }
// console.log(`кратині 3 ${sum3}`);
// console.log(`кратині 5 ${sum5}`);



// 20.
// const N = 15;
// let sum2 = 0;
// let sum3 = 0;

// for (let i = 1; i <= N; i += 1) {
//     if (i % 2 === 0 && i % 3 === 0) {
//         sum2 += i;
//         sum3 += i;
//         console.log(`число ${sum2} кратне 2 та число ${sum3} кратне 3`);
//     } else if (i % 2 === 0) {
//         sum2 += i;
//         console.log(`число ${sum2} кратне 2`);
//     } else if (i % 3 === 0) {
//         sum3 += i;
//         console.log(`число ${sum3} кратне 3`);
//     }
// }



// 21.
// const N = 10;
// let sum = 0;

// for (let i = 1; i <= N; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);



// 22.
// const N = 20;
// let sum = 0;

// for (let i = 1; i <= N; i += 1) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//         sum += i;
//     }
// }
// console.log(sum);



// 23.
// const N = 50;
// let sum3 = 0;
// let sum5 = 0;
// let sumBoth = 0;

// for (let i = 1; i <= N; i += 1 ){
//     if (i % 3 === 0 && i % 5 === 0) {
//         sumBoth += i;
//     } else if (i % 3 === 0) {
//         sum3 += i;
//     } else if (i % 5 === 0) {
//         sum5 += i;
//     }
// }
// console.log(`сума чисел кратних 3: ${sum3}`);
// console.log(`сума чисел кратних 5: ${sum5}`);
// console.log(`сума чисел кратних 3 і 5: ${sumBoth}`);



// 24.
// const N = 20;

// for (let i = 1; i <= N; i += 1) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// 25.
// const N = 100;
// let sum = 0;

// for (let i = 1; i <= N; i += 1) {
//     sum += i;
// }
// console.log(sum);



// 26.
// const number = 8;
// let result = 0;
// for (let i = 1; i <= 10; i += 1) {
//     result = number * i;
//     console.log(`result `, result);
// }


// 27.
// const secret = 6;
// let key = Number(prompt('вгадай число'));

// if (key < secret) {
//     console.log('менше');
// } else if (key > secret){
//     console.log('більше');
// } else {
//     console.log('вгадано');
// }




// function descendingOrder(n){
//     return Number (
//         n
//         .toString()
//         .split('')
//         .sort((a, b) => b - a)
//         .join('')
//     );
// }