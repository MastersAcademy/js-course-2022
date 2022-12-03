const firstNumber = 20;
const secondNumber = 22;
const operation = '';

const resultAddition = firstNumber + secondNumber;
const resultSubtraction = firstNumber - secondNumber;
const resultMultiplication = firstNumber * secondNumber;
const resultDivision = firstNumber / secondNumber;

if (operation === '+') {
    console.log(`firstNumber + secondNumber = ${resultAddition}`);
} else if (operation === '-') {
    console.log(`firstNumber - secondNumber = ${resultSubtraction}`);
} else if (operation === '*') {
    console.log(`firstNumber * secondNumber = ${resultMultiplication}`);
} else if (operation === '/') {
    console.log(`firstNumber / secondNumber = ${resultDivision}`);
} else { console.log(`The operation${operation} isn't supported`); }
