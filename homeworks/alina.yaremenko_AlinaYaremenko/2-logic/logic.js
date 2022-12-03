const firstNumber = 505;
const secondNumber = 404;

const multiply = '*';
const divide = '/';
const add = '+';
const subtract = '-';

const operation = '*';

if (operation === subtract) {
    const result = firstNumber - secondNumber;
    console.log(result);
} else if (operation === multiply) {
    console.log(firstNumber * secondNumber);
} else if (operation === divide) {
    console.log(firstNumber / secondNumber);
} else if (operation === add) {
    console.log(firstNumber + secondNumber);
}

switch (operation) {
    case multiply:
        console.log(firstNumber * secondNumber);
        break;

    case subtract:
        console.log(firstNumber - secondNumber);
        break;

    case divide:
        console.log(firstNumber / secondNumber);
        break;

    case add:
        console.log(firstNumber + secondNumber);
        break;

    default:
        console.log('Please enter correct operetion');
        break;
}
