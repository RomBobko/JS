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





const user = {
    tag: 'Mango',
    showTag () {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
    },
};

const invokeAction = function (action) {
    console.log(action);

    action();
};

invokeAction(user.showTag);