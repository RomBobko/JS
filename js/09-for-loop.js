    // цикл for
// for (ініціалізація; умова; пост - вираз;) {

// }

// for (let i = 0; i < 50; i += 1) {
//     console.log(i);
// }
// console.log('qweqwe');

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 6;
// let totalSalary = 0;

// for (let i = 1; i < 7; i += 1) {
//     console.log(`зп працівника ${i} - `)
// }



// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 9;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary, );
//     console.log(`зп працівника ${i} - ${salary}`);
//     totalSalary += salary;
// }
// console.log('totalSalary', totalSalary);



    // є відрізок від min до max - порахувати сумму парних цифр між ними
const min = 6;
const max = 13;
let total = 0;

for(let i = min; i <= max; i += 1) {
    // console.log(i);
    if (i % 2 === 0) {
        console.log('парне: ', i);

        total += i;
    }
}
console.log('total: ', total);

// залишок від ділення 
// console.log(10 % 3);

for(let i = min; i <= max; i += 1) {
    if (i % 2 !== 0) {
        console.log('не парне', i);
        continue;
    }

    console.log('парне: ', i);
    total += i;
}

console.log('total: ', total);
