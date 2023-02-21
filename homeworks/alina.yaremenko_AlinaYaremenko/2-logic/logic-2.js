const firstNumber = 505;
const secondNumber = 404;

const multiply = '*';
const divide = '/';
const add = '+';
const subtract = '-';

const operation = '*';

let result = null;

switch (operation) {
    case multiply:
        result = firstNumber * secondNumber;
        break;

    case subtract:
        result = firstNumber - secondNumber;
        break;

    case divide:
        result = firstNumber / secondNumber;
        break;

    case add:
        result = firstNumber + secondNumber;
        break;

    default:
        result = 'Please enter correct operetion';
        break;
}

console.log(result);
