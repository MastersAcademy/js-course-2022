const firstNumber = 20;
const secondNumber = 22;
const operator = '';

const resultAddition = firstNumber + secondNumber;
const resultSubtraction = firstNumber - secondNumber;
const resultMultiplication = firstNumber * secondNumber;
const resultDivision = firstNumber / secondNumber;

if (operator === '+') {
    console.log(`firstNumber + secondNumber = ${resultAddition}`);
} else if (operator === '-') {
    console.log(`firstNumber - secondNumber = ${resultSubtraction}`);
} else if (operator === '*') {
    console.log(`firstNumber * secondNumber = ${resultMultiplication}`);
} else if (operator === '/') {
    console.log(`firstNumber / secondNumber = ${resultDivision}`);
} else { console.log(`The operation${operator} isn't supported`); }
