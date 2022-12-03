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
}

console.log(result);
