📘 Основні методи та функції JavaScript



// 🔹 Масиви

.push() – додає елемент у кінець

.pop() – видаляє останній елемент

.shift() – видаляє перший елемент

.unshift() – додає елемент на початок

.slice(start, end) – копія частини масиву (не змінює оригінал)

.splice(start, deleteCount, ...items) – вирізає/додає елементи (змінює оригінал)

.concat(arr2) – обʼєднання масивів

.indexOf(value) – знаходить індекс елемента

.includes(value) – чи є елемент у масиві

.forEach(callback) – перебір елементів

.map(callback) – новий масив із результатами

.filter(callback) – фільтрація

.find(callback) – перший елемент, що підходить

.reduce(callback, init) – зведення до одного значення

.some(callback) – чи є хоч один елемент, що підходить

.every(callback) – чи всі елементи відповідають умові

.sort(callback) – сортування

.reverse() – розворот масиву

.join(sep) – масив → рядок

.flat(depth) – “розплющує” вкладені масиви



// 🔹 Рядки

.length – довжина рядка

.toUpperCase() / .toLowerCase() – зміна регістру

.includes(substr) – чи є підрядок

.indexOf(substr) – індекс підрядка

.startsWith(substr) / .endsWith(substr) – перевірка початку/кінця

.slice(start, end) – вирізати частину рядка

.substring(start, end) – теж вирізка (але трохи інша логіка)

.substr(start, length) – (застарілий, але зустрічається)

.split(delimiter) – рядок → масив

.trim() – обрізає пробіли на початку і в кінці

.replace(from, to) – заміняє перший збіг

.replaceAll(from, to) – заміняє всі збіги



// 🔹 Числа та математика

parseInt("42") – робить ціле число

parseFloat("3.14") – робить число з крапкою

Number("123") – перетворює на число

.toFixed(n) – округлення до n знаків після крапки

isNaN(value) – чи не є значення числом

Math

Math.random() – випадкове число від 0 до 1

Math.floor(x) – округлення вниз

Math.ceil(x) – округлення вгору

Math.round(x) – округлення до найближчого

Math.max(a, b, c…) – найбільше число

Math.min(a, b, c…) – найменше число

Math.pow(x, y) – піднести до степеня

Math.sqrt(x) – квадратний корінь

Math.abs(x) – модуль числа



// 🔹 Об’єкти

Object.keys(obj) – масив ключів

Object.values(obj) – масив значень

Object.entries(obj) – масив пар [key, value]

Object.assign(target, source) – копіює властивості

structuredClone(obj) – глибоке копіювання (сучасний спосіб)

Spread ...obj – копіювання/об’єднання

Деструктуризація { name } = obj – швидке отримання полів