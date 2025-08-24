    // скрипт вибору вартості готелю по к-ті зірок
    // swith працює тільки зі строгою рівністю 

// const stars = 3;
// let price;

// if(stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('такої к-ті зірок немає');
// }

// switch(stars) {
//     case 1: 
//         price = 20;
//         console.log('unlimited rows');
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default: 
//         console.log('такої к-ті зірок немає');
// }

// console.log(price);


// const stars = 5;
// let price;

// if(stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 50;
// } else {
//     console.log('такої к-ті зірок немає');
// }
  
// console.log(price);

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;

//     case 3:
//     case 4:
//         price = 30;
//         break;

//     case 5:
//         price = 50;
//         break;

//     default:
//         console.log('такої к-ті зірок немає');
// }

// console.log(price);


    // скрипт для вирору опції через switch 
const option = 1;
let message = ' ';

switch (option) {
    case 1:
        message = 'самовивіз';
        // console.log(самовивіз);
        break;

    case 2:
        message = 'доставка';
        // console.log(доставка);
        break;

    case 3:
        message = 'почта';
        // console.log(почта);
        break;
}

console.log(message);