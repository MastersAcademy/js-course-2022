const firstNumber = 20;
const secondNumber = 22;
const operation = '/';
let result;
if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '/') {
    result = firstNumber / secondNumber;
} else {
    result = 'Unknown operation';
}

console.log(result);

switch (operation) {
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '/':
        result = firstNumber / secondNumber;
        break;
    default:
        result = 'Unknown operation';
}

console.log(result);
