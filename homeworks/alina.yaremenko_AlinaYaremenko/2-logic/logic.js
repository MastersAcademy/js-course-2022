const firstNumber = 505;
const secondNumber = 404;

const multiply = '*';
const divide = '/';
const add = '+';
const subtract = '-';

const operation = '*';

let result = null;

if (operation === subtract) {
    result = firstNumber - secondNumber;
} else if (operation === multiply) {
    result = firstNumber * secondNumber;
} else if (operation === divide) {
    result = firstNumber / secondNumber;
} else if (operation === add) {
    result = firstNumber + secondNumber;
}

console.log(result);
