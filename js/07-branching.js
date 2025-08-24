// оператори розгалуження 

//  якщо вираз дорівнює true тіло if запрацює - boolean
// if (сюди записується вираз який приводиться до true або false) {
//     // tilo
// }
// використовується - якщо так виконуй тіло якщо ні не виконуй тіло
// if (5 > 3) {
//     console.log('qwfqwe');
// }

// конструкція else 
// якщо так то зроби це в іншому випадку зроби це 

// if (5 > 3) {
//     console.log('good');
// } else {
//     console.log('not good');
// }
const salary = 2000;

if (salary < 500) {
    console.log('level 1');
} else if (salary > 500 && salary < 1500) {
    console.log('level 2');
} else if (salary > 1500 && salary < 3000) {
    console.log('level 3');
} else {
    console.log('level 4');
}



const balance = 100;
let message;

if (balance >= 0) {
    message = 'позитивний баланс';
} else {
    message = 'негативний баланс';
}
console.log(message);

// тернарний оператор нижче написано тески який вище
const message2 = balance >= 0 ? 'pos balance' : 'neg balance';
console.log(message2);



// { в середині таких дужок знаходиться блочна область видимості}
// все що ззовні видно всередині - а те що всередині не бачить того що ззовні 