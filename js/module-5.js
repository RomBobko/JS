// this - ПРИСВОЮЄТЬСЯ В МОМЕНТ ВИКЛИКУ ФУНКЦІЇ
// ЯКЩО ФУНКЦІЯ ВИЗИВАЄТЬСЯ ЯК МЕТОД ОБЄКТА - THIS ЗАВЖДИ ПОСИЛАЄТЬСЯ НА ЦЕЙ ОБЄКТ
// ЯКЩО ФУНКЦІЯ ВИЗИВАЄТЬСЯ НЕ ЯК МЕТОД ОБЄКТА - ТОДІ THIS БУДЕ UNDEFINED

// const user = {
//     tag: 'mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

// const foo = () => {
//     console.log('foo -> this', this)
// }

// foo();

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

// const user = {
//     tag: 'Mango',
//     showTag () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag()

// const outerShowTag = user.showTag;

// outerShowTag();

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);








// METHOD - call / apply
// метод call насильно викликає в контексі якогось обєкта в якому ми його викликали
// в методі call передаємо незалежні аргументи - showThis.call(objA, 5, 10, 20);
// а в методі apply обовязково передаємо їх як масив - showThis.call(objA, [5, 10, 20]);




// const showThis = function () {
//   console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 5, 10, 20);




// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };


// const hat = {
//   color: 'black',
// };

// changeColor.call(hat, 'orange');
// console.log(hat.color);

// const sweater = {
//   color: 'green',
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater.color);






// METHOD - bind - дозволяє зробити копію функції з привязаним контекстом

const changeColor = function (color) {
  console.log('changeColor -> this', this);
  this.color = color;
};



const hat = {
  color: 'black',
};



const sweater = {
  color: 'green',
};


const changeHAtColor = changeColor.bind(hat);
const changeSweqterColor = changeColor.bind(sweater);

changeHAtColor('yellow');
console.log(hat)
changeSweqterColor('blue');
console.log(sweater)




const counter = {
    value: 0,
    increment(value) {
        this.value += value;
    },
    decrement(value) {
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));

console.log(counter);
