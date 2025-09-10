// 🔹 Модуль 1. Змінні, типи, розгалуження, цикли
Змінні
let a = 10;      // можна змінювати значення
const b = 20;    // константа, змінювати не можна
var c = 30;      // застарілий спосіб, краще не використовувати

Типи даних

number, string, boolean, null, undefined, object, symbol, bigint
(основні категорії значень у JS)

Розгалуження
if (x > 10) {
  console.log("Більше 10");
} else if (x === 10) {
  console.log("Дорівнює 10");
} else {
  console.log("Менше 10");
}


👉 Виконує різний код залежно від умови.

Тернарний оператор
const msg = (age >= 18) ? "Дорослий" : "Дитина";


👉 Коротка форма if...else.

Цикли
for (let i = 0; i < 5; i++) {
  console.log(i);
}


👉 Виконує код кілька разів.

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


👉 Цикл із перевіркою умови перед кожною ітерацією.







// 🔹 Модуль 2. Масиви та функції
Масив
const arr = [1, 2, 3];
console.log(arr.length); // 3


👉 Масив зберігає список значень.

Методи масивів
arr.push(4);   // додає в кінець
arr.pop();     // видаляє з кінця
arr.shift();   // видаляє з початку
arr.unshift(0); // додає на початок


👉 Основні методи для роботи з елементами масиву.

Функції
function add(a, b) {
  return a + b;
}


👉 Оголошення функції.

const multiply = (a, b) => a * b;


👉 Стрілкова функція (коротший синтаксис).







// 🔹 Модуль 3. Об’єкти, rest та spread
Об’єкти
const user = {
  name: "Roman",
  age: 25,
};
console.log(user.name);


👉 Об’єкти зберігають дані у форматі "ключ-значення".

Деструктуризація
const { name, age } = user;
console.log(name, age);


👉 Дозволяє швидко отримати властивості з об’єкта.

Spread
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 }; // { a:1, b:2 }


👉 Розгортає вміст об’єктів або масивів.

Rest
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1,2,3,4)); // 10


👉 Збирає аргументи в масив.







// 🔹 Модуль 4. Перебираючі методи масиву
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(n));            
// Перебирає всі елементи

const doubled = numbers.map(n => n * 2);        
// Створює новий масив із результатами

const evens = numbers.filter(n => n % 2 === 0); 
// Фільтрує за умовою

const found = numbers.find(n => n > 3);         
// Повертає перший елемент, що підходить

const sum = numbers.reduce((acc, n) => acc + n, 0); 
// Акумулює всі значення в одне

const hasEven = numbers.some(n => n % 2 === 0); 
// Перевіряє, чи є хоч один елемент

const allPositive = numbers.every(n => n > 0);  
// Перевіряє, чи всі елементи підходять







// 🔹 Модуль 5. this, прототипи, класи
this
const obj = {
  name: "Roman",
  showName() {
    console.log(this.name);
  }
};
obj.showName(); // Roman


👉 this вказує на об’єкт, у контексті якого викликана функція.

Конструктори
function User(name) {
  this.name = name;
}
const u1 = new User("Roman");


👉 Функція-конструктор створює об’єкти через new.

Прототипи
User.prototype.sayHi = function() {
  console.log(`Привіт, я ${this.name}`);
};
u1.sayHi();


👉 Методи можна додати через prototype, і вони будуть доступні всім екземплярам.



Класи
class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    this.xp += amount;
  }
}


👉 Клас — сучасний синтаксис для роботи з об’єктами та наслідуванням.

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp);
    this.weapon = weapon;
  }
}


👉 extends — наслідування класів, super викликає конструктор батька.