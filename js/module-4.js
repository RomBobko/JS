// callback



// const fnA = function (message, callback) {
//     callback(100)
// }

// const fnB = function (number) {
//     console.log('this is message from fnB', number);
// }

// fnA('sgafg', fnB);




// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }

// const add = function (x, y) {
//     return x + y;
// }

// const sub = function (x, y) {
//     return x - y;
// }

// doMath(2, 5, add);
// doMath(21, 15, sub);



// doMath(3, 5, function (x, y) {
//     return x + y;
// });

// doMath(73, 45, function (x, y) {
//     return x - y;
// });





// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('click on button');
// }

// buttonRef.addEventListener('click', handleBtnClick);

// buttonRef.addEventListener('click', function () {
//     console.log('click on button');
// });




// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const element of array) {
//         // console.log(element);
//         const passed = test(element);

//         if (passed) {
//             filteredArray.push(element);
//         }
//     }

//     return filteredArray;
// }

// const greaterThan3 = function (value) {
//     return value >= 4;
// }

// const smallerThan3 = function (value) {
//     return value <= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5], smallerThan3);
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], greaterThan3);

// console.log(r1);
// console.log(r2);





// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const element of array) {
//         console.log(element);
//         const passed = test(element);

//         if (passed) {
//             filteredArray.push(element);
//         }
//     }

//     return filteredArray;
// };

// const fruits = [
//     {name: 'apple', quantity: 200, isFresh: true},
//     {name: 'grapes', quantity: 150, isFresh: false},
//     {name: 'bananas', quantity: 100, isFresh: true},
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// }

// const r3 = filter(fruits, getFruitsWithQuantity);

// console.log(r3);