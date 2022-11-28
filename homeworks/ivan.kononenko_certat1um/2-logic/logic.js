const firstNumber = 20;
const secondNumber = 22;
const operation = '*';

let result = null;

// 1. if-else

// if(operation === '+') result = firstNumber + secondNumber;
// else if(operation === '-') result = firstNumber - secondNumber;
// else if(operation === '/') result = firstNumber / secondNumber;
// else if(operation === '*') result = firstNumber * secondNumber;


// 2. using сonditional (ternary) operator

// result = (operation === '+') ? firstNumber + secondNumber :
//          (operation === '-') ? firstNumber - secondNumber :
//          (operation === '/') ? firstNumber / secondNumber :
//          (operation === '*') ? firstNumber * secondNumber : null;


// 3*. switch-case

// switch(operation) {
//     case '+':
//         result = firstNumber + secondNumber;
//         break;
//     case '-':
//         result = firstNumber +-secondNumber;
//         break;
//     case '/':
//         result = firstNumber / secondNumber;
//         break;
//     case '*':
//         result = firstNumber * secondNumber;
//         break;
// }

console.log(result);