const firstNumber = 20;
const secondNumber = 22;
const operator = '-';

if (operator === '+') {
    console.log(`firstNumber + secondNumber = ${firstNumber + secondNumber}`);
} else if (operator === '-') {
    console.log(`firstNumber - secondNumber = ${firstNumber - secondNumber}`);
} else if (operator === '*') {
    console.log(`firstNumber * secondNumber = ${firstNumber * secondNumber}`);
} else if (operator === '/') {
    console.log(`firstNumber / secondNumber = ${firstNumber / secondNumber}`);
} else { console.log(`The operation${operator} isn't supported`); }
