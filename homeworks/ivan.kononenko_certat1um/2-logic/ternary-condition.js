const { firstNumber, secondNumber, operation } = require('./variables');

let result = null;

result = (operation === '+') ? firstNumber + secondNumber :
         (operation === '-') ? firstNumber - secondNumber :
         (operation === '/') ? firstNumber / secondNumber :
         (operation === '*') ? firstNumber * secondNumber : null;

console.log(result);
