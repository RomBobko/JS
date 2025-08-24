    // консруктор Number - має 2 метода parseInt / paardFloat
    // parseInt - видає цілі числа (не цілі заокруглює)
    // parseFloat - видає повністю чисто навіть після коми/крапки

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth:' , elementWidth);

let elementHeight = '200.74';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight:' , elementHeight);


    // новий метод для зарплати toFixed

// const salary = 1300.43563;
// console.log(salary.toFixed());
// приклад нижче видасть число із 2 цифрами після коми - відсікає а не закругяє
let salary = 1300.43563;
salary = Number(salary.toFixed(2));
// salary = Number(salary);
console.log(salary);
// console.log(Number(salary.toFixed(2)));



    // перетворення та значення NaN - not a number 
let quantity = 30;
let value = 'якийсь текст';

console.log(Number(quantity));
console.log(Number(value));




    // обєкт math 
// console.log(Math);

    // виведення в ступінь - наприклад 2 в 5 степені
// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);
// console.log(Math.pow(2, 5));
// console.log(base ** power);
// Math.sqrt() - квадратний корінь




    // задача !!! - придумати код, який просить користувача ввести число та ступень
    // взводить число в цю ступень і виводить результат на консоль
    
// кроки

// // 1. попросити ввести число і зберегти в змінну
// let base = prompt('давай число');
// base = Number(base);
// console.log(base);
// // 2. попросити ввести степень і зберегти в змінну
// let power = prompt('давай ступінь');
// power = Number(power);
// console.log(power);
// // 3. взвести в степень і вивести на консоль

// const result = base ** power;
// console.log(result);





    // Math.random - генерує випадкове число від 0 до 1
    // console.log (Math.random());

// а якщо я хочу інший діапазон наприклад від 30 до 50 є формула
// Math.random() * (max - min) + min;

const max = 50;
const min = 30;
const result = Math.round(Math.random() * (max - min) + min);
// console.log(Math.random() * (max - min) + min);
console.log(result);