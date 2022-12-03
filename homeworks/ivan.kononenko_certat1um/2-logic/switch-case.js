const { firstNumber, secondNumber, operation } = require('./variables');

let result = null;

switch (operation) {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '/':
        result = firstNumber / secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    default:
        result = null;
}

console.log(result);
