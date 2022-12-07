// Калькулятор if else

const firstNumber = 11;
const secondNumber = 2;
const operation = '+';
if (operation === '+') {
    console.log(firstNumber + secondNumber);
} else if (operation === '-') {
    console.log(firstNumber - secondNumber);
} else if (operation === '*') {
    console.log(firstNumber * secondNumber);
} else if (operation === '/') {
    console.log(firstNumber / secondNumber);
} else if (operation === '%') {
    console.log(firstNumber % secondNumber);
} else if (operation === '**') {
    console.log(firstNumber ** secondNumber);
} else {
    console.log(0);
}

// Калькулятор switch case *

const firstNumber1 = 15;
const secondNumber2 = 4;
const operator = '+';
switch (operator) {
    case '+':
        console.log(firstNumber1 + secondNumber2);
        break;
    case '-':
        console.log(firstNumber1 - secondNumber2);
        break;
    case '*':
        console.log(firstNumber1 * secondNumber2);
        break;
    case '/':
        console.log(firstNumber1 / secondNumber2);
        break;
    case '%':
        console.log(firstNumber1 % secondNumber2);
        break;
    case '**':
        console.log(firstNumber1 ** secondNumber2);
        break;
    default:
        console.log(0);
        break;
}
