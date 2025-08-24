const btnAdd = document.querySelector('button[data-add]');
const btnRst = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');
// console.dir(btnAdd);
// console.log(btnAdd.textContent);
// btnAdd.textContent = 'sgdhbe';
// ('click' () => {})
// console.log(outputEl);

let total = 0;

btnAdd.addEventListener('click', function () {
    console.log('click hehehe');

    const value = Number(valueInput.value);

    total += value;
    outputEl.textContent = total;
    valueInput.value = '';
});

btnRst.addEventListener('click', () => {
    total = 0;
    outputEl.textContent = total;
});