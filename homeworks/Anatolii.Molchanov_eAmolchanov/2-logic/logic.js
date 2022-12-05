const firstNumber = 20;
const secondNumber = 22;
const operation = '*';
let result;

if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    result = firstNumber / secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '**') {
    result = firstNumber ** secondNumber;
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
    result = 'Wrong operation';
}

console.log(result);

switch (operation) {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        result = firstNumber / secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '**':
        result = firstNumber ** secondNumber;
        break;
    case '%':
        result = firstNumber % secondNumber;
        break;
    default:
        result = 'Wrong operation';
}

console.log(result);
