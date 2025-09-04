// closures


// const fnA = function (parameter) {
//     const innerVariable = 'значення внутрішньої функції fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('це виклик innerFunction');
//     }

//     return innerFunction;
// }

// const fnB = fnA(555);

// fnB();

// console.log(fnB);






// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`повар ${name} сьогодні готує ${dish}.`);
//     };

//     return makeDish;
// };

// const mango = makeSheff('mango');
// const jango = makeSheff('jango');

// mango('котлети');
// jango('чай');
// jango('пиріжок');

// console.dir(mango);





// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.34532641));
// console.log(rounder2(5.734767));
// console.log(rounder3(3.756453545));




// const salaryManagerFactory = function (employeename, baseSalary = 0) {
//     let salary = baseSalary;

//     return {
//         raise(amount) {
//             salary += amount;
//         },
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `поточна зарплата ${employeename} - ${salary}`;
//         },
//     };
// };

// const salaryManager = salaryManagerFactory('mango', 5000);

// console.log(salaryManager.current());

// salaryManager.raise(1000);

// console.log(salaryManager.current());






const add = function (a, b, c) {
    return a + b + c;
}


// якщо параметр 1 то круглі дужки можна опускати
// якщо менає параметрів то обовязково пусті круглі дужки 
const addArrow = (a, b, c) => {
    return a + b + c;
}

// якщо тільки 1 параметр то можна опустити тіло функції
// const addArrow = (a, b, c) => a + b + c;

console.log(add(10, 15, 15));
console.log(addArrow(140, 152, 154));


const fnA = function () {
    return {
        a: 5,
    };
};

console.log(fnA());

const fnB = () => ({ a: 10 });

console.log(fnB());



const filter = (array, test) => {
    const filteredArray = [];

    for (const element of array) {
        // console.log(element);
        const passed = test(element);

        if (passed) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
}

// const smallerThan3 = (value) => value <= 3;
const greaterThan4 = (value) => value >= 4;
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const r1 = filter(firstArray, value => value <= 3);
const r2 = filter(secondArray, greaterThan4);

console.log(r1);
console.log(r2);