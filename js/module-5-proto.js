// - PROTOTYPE

// const objA = {
//   x: 2,
// };

// const objB = Object.create(objA);
// objB.y = 5;

// const objC = Object.create(objB);
// objC.z = 10;

// objC.x = 1000;
// console.log('objC', objC);

// console.log(objA.hasOwnProperty('y'));









// - CONSTRUCTOR

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.mesage = function () {
//     console.log('changePrice function');
// };
// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };


// const myCar = new Car({
//   brand: 'audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);
// myCar.mesage();
// myCar.changePrice(1570);
// console.log(myCar);


// const myCar2 = new Car({
//   brand: 'audi',
//   model: 'A6',
//   price: 70000,
// });
// console.log(myCar2);
// myCar2.changePrice(1300);
// console.log(myCar2);


// const myCar3 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 150000,
// });
// console.log(myCar3);
// myCar2.changePrice(53400);
// console.log(myCar2);

