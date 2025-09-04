// const fnA = function (message, callback) {
//     callback(100)
// }

// const fnB = function (number) {
//     console.log('this is message from fnB', number);
// }

// fnA('sgafg', fnB);




const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
}

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





const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
    console.log('click on button');
}

buttonRef.addEventListener('click', handleBtnClick);

// buttonRef.addEventListener('click', function () {
//     console.log('click on button');
// });
