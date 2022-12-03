const { firstNumber, secondNumber, operation } = require('./variables');

let result = null;

if (operation === '+') result = firstNumber + secondNumber;
else if (operation === '-') result = firstNumber - secondNumber;
else if (operation === '/') result = firstNumber / secondNumber;
else if (operation === '*') result = firstNumber * secondNumber;

console.log(result);
