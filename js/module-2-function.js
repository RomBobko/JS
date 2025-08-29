// const add = function () {
//     console.log('функціональний вираз');
// }
// add();


// const add = function (x, y) {
//     console.log(x);
//     console.log(y);
//     // const result = x + y;
//     // console.log('result:', result);

//     console.log('функціональний вираз');
//     return x + y;
// }

// const r1 = add(5, 12);
// console.log('result1:', r1);

// const r2 = add(21, 42);
// console.log('result2:', r2);



// const cart = [4, 6, 34 ,65, 1, 3, 96, 54, 65];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }

// console.log('total: ', total);

// const calculateTotalPrice = function (items) {
//     console.log(items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }

// const result1 = calculateTotalPrice([2, 3, 5, 6]);
// console.log(`Result 1: ${result1}`);

// console.log(calculateTotalPrice([67, 33, 75, 5]));
// console.log(calculateTotalPrice([342, 36, 545, 766]));





// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item)
//     }
// }

// logItems(['mango', 'banan', 'apple', 'orange']);
// logItems([1, 3, 5, 34]);
// logItems(['клавіатура', 'мишка', 'монітор']);




// const logins = ['alpha', 'bravo', 'charlie', 'delta'];

// const findLogins = function (allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if  (login === loginToFind) {
//             return `користувач ${loginToFind} - знайдений `;
//         }
//     }
//     return `користувач ${loginToFind} - не знайдений `;
// }

// console.log(findLogins(logins, 'alpha'));
// console.log(findLogins(logins, 'bravo'));
// console.log(findLogins(logins, 'hehehehe'));
// console.log(findLogins(logins, 'delta'));


// const logins = ['alpha', 'bravo', 'charlie', 'delta'];

// const findLogins = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//     ? `користувач ${loginToFind} - знайдений `
//     : `користувач ${loginToFind} - не знайдений `;
// }

// console.log(findLogins(logins, 'alpha'));
// console.log(findLogins(logins, 'bravo'));
// console.log(findLogins(logins, 'hehehehe'));
// console.log(findLogins(logins, 'delta'));




// const findSmallestNumber = function (numbers) {
//     let smallestNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }

//     return smallestNumber;
// }

// console.log(findSmallestNumber([3, 5, -5, 6, 7, 34, -6]));
// console.log(findSmallestNumber([3, 5, 25, 36, 57, 334, 16]));





// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase 
//         ? letter.toUpperCase() 
//         : letter.toLowerCase();
//     }
//     return invertedString;
// }

// console.log(changeCase('qEERdafHGdf'));
// console.log(changeCase('THHHrg324EEGCf'));
// console.log(changeCase('wjyjyTHXTH'));


// const filterNumbers = function (array, ...args) {
//     console.log('array', array);
//     console.log('args', args);
//     const uniqueElement = [];

//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqueElement.push(element);
//             console.log(`елемент - ${element} є всюди`);
//         }
//     }

//     return uniqueElement;
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 20, 12, 2, 3, 67, 7));
// console.log(filterNumbers([123, 245, 343, 4, 12], 20, 12, 4, 3, 67, 7));
// console.log(filterNumbers([100, 200, 300, 400, 500], 20, 12, 200, 330, 67, 7));
