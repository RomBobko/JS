    // якщо є дужки () - це виклик методу
    // якщо немає тоді це звернення до властивості
    // властивість length
const message = 'в цьому ряку 23 символи';
// console.log(message.length);



    // конкатенація рядка 
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;
// console.log('dsfg ' + 'drbg');
// console.log(fullName);

const room = 716;
const type = 'VIP';



    // створюємо вітальне повідомлення
// const welcomeMsg = 'Гість ' + firstName + ' ' + lastName + ' поселяється в ' + type + ' номер ' + room;
// console.log(welcomeMsg);
const welcomeMsg = `Гість ${firstName} ${lastName} поселяється в ${type} номер ${room}`;
console.log(welcomeMsg);

    // шаблонні рядки - шаблонний літерал !!! -  ``
const quantity = 5;
// const orderMsg = 'Ви замовляєте 5 холодильників';
const orderMsg = `Ви замовляєте ${quantity} холодильників.`;
// console.log(`сюди можна записати значення ${5 +5} що вичесляється`);
// console.log(orderMsg);



    // нормалізація toLowerCase
// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

// let brand = 'SamSung';
// brand = brand.toLocaleLowerCase();
// console.log(brand);




    // пошук в рядку методом includes()
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';

const string1 = 'привіт я принц абдул, це не спам пропоную мільйон';
const string2 = 'самий великий РОЗПРОДАЖ цтого тижня не пропустіть';
const string3 = 'рекламна компанія #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
console.log(string2.toLocaleLowerCase().includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));