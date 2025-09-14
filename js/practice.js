// const numbers = [5, 12, 8, 130, 44];

// const greaterThanTen = numbers.filter(num => num > 10);
// const total = numbers.reduce((acc, num) => acc + num, 0);
// const quad = numbers.map(num => num ** 2);

// console.log(greaterThanTen);
// console.log(total);
// console.log(quad);

// const numbers = [5, 12, 8, 130, 44];

// const result = numbers
//     .filter(num => num > 10)
//     .map(num => num ** 2)
//     .reduce((acc, num) => acc + num, 0);

// console.log(result);

// const users = [
//     { name: 'Alice', age: 25, isActive: true },
//     { name: 'Bob', age: 30, isActive: false },
//     { name: 'Charlie', age: 35, isActive: true },
//     { name: 'Diana', age: 20, isActive: false },
// ];

// const result = users
//     .filter(user => user.isActive)
//     .map(user => user.age ** 2)
//     .reduce((acc, age) => acc + age, 0);

// console.log(result);

// const numbers = [2, 5, 10, 7, 3];

// const total = numbers.reduce((acc, num) => acc + (num % 2 !== 0 ? num : 0), 0);

// console.log(total);

// const fruits = ['apple', 'banana', 'kiwi', 'mango'];

// const result = fruits.filter(fruit => (fruit.length > 4));

// console.log(result);

// const flags = [true, false, true, true, false];

// const result = flags.filter(flag => flag).length;
// console.log(result);

// function persistence(num) {
//     let count = 0;

//     while (num >= 10) {
//         num = num.toString().split('').map(Number).reduce((a, b) => a * b);

//         count += 1;
//     }

//     return count;
// }

// const isEvenSum = (a, b) => ((a + b) % 2 === 0 ? Even : Odd);

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return `hi my name is ${this.name}`;
//     }

//     haveBirthday() {
//         this.age += 1;
//     }
// }

// const numbers = [1, 2, 3, 4, 6, 9, 12];

// function countEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0).length;
// }

// console.log(countEvenNumbers(numbers));

// const names = ['Alex', 'John', 'Anna', 'Mike', 'Alice'];

// function filterNames(arr) {
//     return arr.filter(name => name.startsWith('A'));
// }

// console.log(filterNames(names));

// function applyOperation(arr, fn) {
//     return arr.map(fn);
// }

// console.log(applyOperation([2, 4, 5], x => x + 4));

// const users = [
//     { name: 'Alex', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Anna', age: 19 },
// ];

// function getAdultsUser(arr) {
//     return arr.filter(element => element.age >= 18);
// }

// console.log(getAdultsUser(users));

// class Car {
//     constructor(brand, year) {
//         this.brand = brand;
//         this.year = year;
//     }

//     getAge() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.year;
//     }
// }

// const bmw = new Car('BMW', 2018);

// console.log(bmw.getAge());

// const numbers = [2, 5, 10, 7, 3];

// const sumOddNumbers = arr =>
//     arr.reduce((acc, n) => acc + (n % 2 !== 0 ? n : 0), 0);

// console.log(sumOddNumbers(numbers));

// const products = [
//     { name: 'Phone', price: 1000 },
//     { name: 'Laptop', price: 2500 },
//     { name: 'Tablet', price: 1500 },
// ];

// const getTotalPrice = arr => arr.reduce((acc, { price }) => acc + price, 0);

// console.log(getTotalPrice(products));

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }

//     getPerimeter() {
//         return 2 * (this.width + this.height);
//     }
// }

// const nums = [3, 17, 9, 25, 6];

// const findMaxNumber = arr => Math.max(...arr);

// console.log(findMaxNumber(nums))

// function findMaxNumber(arr) {
//     return arr.reduce((max, n) => n > max ? n : max, arr[0]);
// }

// console.log(findMaxNumber(nums))

// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome('level'));

// const users = [
//   { name: "Alex", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Anna", age: 28 }
// ];

// function getNames(users) {
//     return users.map(user => user.name);
// }

// console.log(getNames(users))

// class Student {
//     constructor(name, grades) {
//         this.name = name;
//         this.grades = grades;
//     }

//     getAverage() {
//         const sum = this.grades.reduce((acc, g) => acc + g, 0);
//         return sum / this.grades.length;
//     }
// }

// class Person {
//     constructor({ name, age } = {}) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return `Hi my name is ${this.name}`;
//     }
// }

// class Student extends Person {
//     constructor({ grades, ...restProps }) {
//         super(restProps);

//         this.grades = grades;
//     }

//     getAverage() {
//         const sum = this.grades.reduce((acc, g) => acc + g, 0);
//         return (sum / this.grades.length);
//     }

//     isExelent() {
//         return this.getAverage() > 90;
//     }
// }

// const student = new Student({ name: "Roman", age: 25, grades: [90, 80, 100] });

// console.log(student.greet());      // "Hi, my name is Roman"
// console.log(student.getAverage());
// console.log(student.isExelent())

class Animal {
    constructor({name, species} = {}) {
        this.name = name;
        this.species = species;
    }

    info() {
        return `This is a ${this.species} named ${this.name}`;
    }
}

class Pet extends Animal {
    constructor ({owner, ...restProps} = {}) {
        super(restProps);

        this.owner = owner;
    }

    greetOwner() {
        return `${this.name} happily greets ${this.owner}`;
    }
}

class Dog extends Pet {
    constructor({breed, ...restProps}) {
        super(restProps) 

        this.breed = breed;
    }

    bark() {
        return `${this.name} the ${this.breed} says: Woof!`;
    }
}

const myDog = new Dog({
    name: 'Rex',
    species: 'Dog',
    owner: 'Alex',
    breed: 'Bulldog',
});

console.log(myDog.info());
console.log(myDog.greetOwner());
console.log(myDog.bark());

