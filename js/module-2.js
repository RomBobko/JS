// const friends = ['friend-1', 'friend-2', 'friend-3', 'friend-4'];

// console.table(friends);
// console.log(friends.length);

// friends [2] = 'friend-21';
// friends [3] = 123123;
// console.table(friends);




// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);




// const a = [1, 2, 3, 4]
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a [0] = 21;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);




// const friends = ['friend-1', 'friend-2', 'friend-3', 'friend-4'];
// console.table(friends);
// const lastIndex = friends.length -1;

// for (let i = 0; i <= lastIndex ; i += 1) {
//     friends [i] += ' 21';
// }
// console.table(friends);


// for (const friend of friends ) {
//     console.log(friend);
// }




// const cart = [54, 20, 21, 55, 17, 150, 370];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }
// console.log('total:', total);


// const cart = [54, 20, 21, 55, 17, 150, 370];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }
// console.log('total:', total);



// const numbers = [1, 3, 6, 8, 14, 76, 542, 31];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
    
//     if (number % 2 === 0) {
//         total += number;
//     }
// }
// console.log(total);





// const logins = ['я', 'ти', 'він', 'вона', 'вони'];
// const loginToFind = 'вони';
// let message = `користувач ${loginToFind} не знайдено`;

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `користувач ${loginToFind} - знайдено`;
//         break;
//     }
// }
// console.log(message);

// попередня задача в 1 рядок
// const message = logins.includes('вони') ? 'yes' : 'not' ;
// console.log(message);





// const numbers = [41, 24, 45, 75, 3, 765, 7];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     // console.log(number);
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log(smallestNumber);



// const numbers = [1, 52, 78, 34, 365, 253, 12, 987, 435, 21];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//     // console.log(number);
//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
// }
// console.log(biggestNumber);




// const names = ['mango', 'bongo', 'tango', 'tom'];
// const string = names.join(', ');

// console.log(string);



// const title = 'top 10 benefits of react framework';
// const normalizedTitle = title.toLocaleLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');
// const slug1 = title.toLocaleLowerCase().split(' ').join('-');
// console.log(slug1);





// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// arr.pop();
// console.log(arr);


// let arr = [5, 6, 7];
// arr.unshift(4);
// console.log(arr);

// arr.shift();
// console.log(arr);


// let arr = [10, 20, 30, 40, 50];
// let newArr = arr.splice(1, 3);
// console.log(newArr);
// console.log(arr)



// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(1, 3);
// console.log(newArr);
// console.log(arr);



// let arr = [4, 2, 7, 1, 5];
// let reverseArr = arr.reverse();
// console.log(reverseArr);

// reverseArr.sort();
// console.log(reverseArr);



// let arr = [5, 10, 15, 20];
// let number = arr.includes(15);
// console.log(number);

// let index = arr.indexOf(10);
// console.log(index);


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let newArr = arr1.concat(arr2);
// console.log(newArr);



// приклад масиву
// const numbers = [1, 5, 10, 2, 7];
// let total = 0;

// for (const number of numbers) {
//     total += number;
// }
// console.log(total);


// const numbers = [3, 8, 1, 14, 6];
// let biggestNumber = numbers[0]; 

// for (let i = 0; i < numbers.length; i += 1) {

//     if (numbers[i] > biggestNumber) {
//         biggestNumber = numbers[i];
//     }
// }
// console.log(biggestNumber);


// for (const number of numbers) {

//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
// }
// console.log(biggestNumber);



// const numbers = [2, 7, 4, 9, 10, 13];
// let total = 0;

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         total += 1;
//     }
// }
// console.log(total);



// const numbers = [1, 2, 3, 4];
// let result = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     result.push(numbers[i] * 2);
// }
// console.log(result);



// const numbers = [2, 5, 8, 3, 10];
// let total = 0;

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         total += number;
//     }
// }
// console.log(total);



// const numbers = [1, 2, 3];
// let result = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     result.push(numbers[i] * 3);
// }
// console.log(result);



// const numbers = [5, 1, 9, 3];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber);



// const numbers = [2, 6, 4, 7, 1];

// for (const number of numbers) {
//     if (number < 5) {
//         console.log('min - ', number);
//     }
// }


// const numbers = [2, 5, 4, 9, 6, 3];
// let sum = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (i % 2 === 0 && numbers[i] % 2 === 0) {
//         sum += numbers[i];
//     }
// }
// console.log(sum);



// const numbers = [5, 12, 7, 9, 15];
// let max = 0;
// let secondMax = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > max) {
//         secondMax = max;
//         max = numbers[i];
//     } else if (numbers[i] > secondMax && numbers[i] !== max) {
//         secondMax = numbers[i];
//     }
// }
// console.log(`${secondMax} друге найбільше число.`);


// const numbers = [1, 2, 3, 4, 5];
// let result = [];

// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         result.push(number * 2); 
//     }
// }
// console.log(result);



// const numbers = [1, 3, 5, -2, 4];
// let allPositive = true;

// for (const number of numbers) {
//     if (number <= 0) {
//         allPositive = false;
//         break;
//     }
// }
// console.log(allPositive);



// const numbers = [2, 5, 3, 8, 6];
// let sum = 0;

// for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] > numbers[i-1]) {
//         sum += numbers[i];
//     }
// }
// console.log(sum);




// const numbers = [2, 5, 3, 8, 6];
// let sum = 0;
// let indexes = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
// }

// let average = sum / numbers.length;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > average) {
//         indexes.push(i);
//     }
// }
// console.log(indexes);




// const numbers = [2, 5, 3, 8, 6]; 

// let max = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (i % 2 === 0 && numbers[i] > max) {
//         max = numbers[i];
//     }
// }
// console.log(max);



// const numbers = [5, 3, 6, 2, 7]; 
// let count = 0;

// for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] < numbers[i - 1]) {
//         count += 1;
//     }
// }
// console.log(count);



// const numbers = [2, 5, 8, 3, 6]; 
// let sum = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
// }

// let average = sum / numbers.length;
// let indexes = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0 && numbers[i] > average) {
//         indexes.push(i);
//     }
// }
// console.log(indexes)



// const numbers = [2, 5, 3, 8, 6]; 
// let sum = 0;

// for (let i = 1; i < numbers.length -2; i += 1) {
//     if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
//         sum += numbers[i];
//     }
// }
// console.log(sum);



// const numbers = [2, 5, 13, 28, 6, 16, 2, 7, 22, 11]; 
// let biggestNumber = numbers[1];

// for (let i = 1; i < numbers.length; i += 2) {
//     if (numbers[i] > biggestNumber) {
//         biggestNumber = numbers[i];
//     }
// }
// console.log(biggestNumber);



// const numbers = [2, 5, 13, 28, 6, 16, 2, 7, 22, 11]; 
// let total = 0;


// for (let i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
// }
// let average = total / numbers.length;
// let sum = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > average) {
//         sum += 1;
//     }
// }
// console.log(sum);



// const numbers = [2, 5, 13, 28, 6, 16, 2, 7, 22, 11]; 
// let result = [];

// for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] < numbers[i - 1]) {
//         result.push(i);
//     }
// }
// console.log(result);



// const numbers = [2, 5, 13, 28, 6, 16, 2, 7, 22, 11]; 
// let squares = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 ===0) {
//         squares.push(numbers[i] ** 2);
//     }
// }
// console.log(squares);



// const numbers = [2, 5, 13, 28, 6, 16, 2, 7, 22, 11]; 
// let sum = 0;

// for (let i = 1; i < numbers.length -1; i += 1) {
//     if (numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1]) {
//         sum += numbers[i];
//     }
// }

// console.log(sum);



// const numbers = [2, 5, 13, 28, 6, 16, 2, 7, 22, 11]; 
// let newArr = numbers.map(num => num < 0 ? 0 : num);

// console.log(newArr);


// const numbers = [4, 9, 2, 7, 5, 8, 1, 6];

// let arr = [];

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         arr.push(number + 3);
//     }
// }
// console.log(arr);



// const numbers = [3, 8, 12, 5, 7, 14, 2];

// let biggestNumber = numbers[1];

// for (let i = 1; i < numbers.length; i += 2) {
//     if (numbers[i] > biggestNumber) {
//         biggestNumber = numbers[i];
//     }
// }

// console.log(biggestNumber);


// const numbers = [4, 9, 2, 7, 5, 8, 1, 6];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
// }
// let average = total / numbers.length;
// let sum = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > average) {
//         sum += 1;
//     }
// }
// console.log(sum);





// const numbers = [4, 9, 2, 7, 5, 8, 1, 6];
// let total = 0;

// for (const number of numbers) {
//     total += number;
// }
// console.log(total);

// let average = total / numbers.length;
// let newArr = [];

// for (const number of numbers) {
//     if (number > average) {
//         newArr.push(number);
//     }
// }
// console.log(newArr);


// let squareArr = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         squareArr.push(numbers[i] ** 2);
//     }
// }
// console.log(squareArr);




// const numbers = [3, 8, 12, 5, 7, 14, 2];
// let greaterThanSix = [];
// let evenPlusTen = [];

// for (const number of numbers) {
//     if (number > 6) {
//         greaterThanSix.push(number);
//     }
// }
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         evenPlusTen.push(number + 10);
//     }
// }
// console.log(greaterThanSix);
// console.log(evenPlusTen);




// const numbers = [1, 5, 2, 6, 3, 7, 2];
// let sum = 0;

// for (let i = 1; i < numbers.length -1; i += 1) {
//     if (numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1]) {
//         sum += numbers[i];
//     }
// }
// console.log(sum);




// const numbers = [4, 9, 2, 7, 5, 8, 1, 6];
// let indexes = [];

// for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] < numbers[i - 1]) {
//         indexes.push(i);
//     }
// }
// console.log(indexes);


// let squareArr = [];

// for (let i = 1; i < numbers.length; i += 1) {
//     if (i % 2 !== 0) {
//         squareArr.push(numbers[i] ** 2);
//     }
// }
// console.log(squareArr);




// const numbers = [4, 9, 2, 7, 5, 8, 1, 6];
// let maxNumber = numbers[0];
// let minNumber = numbers[0];
// let maxIndex = 0;
// let minIndex = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
//         maxIndex = i;
//     }
// }

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < minNumber) {
//         minNumber = numbers[i];
//         minIndex = i;
//     }
// }

// console.log(`max: ${maxNumber} at index ${maxIndex}`);
// console.log(`min: ${minNumber} at index ${minIndex}`);