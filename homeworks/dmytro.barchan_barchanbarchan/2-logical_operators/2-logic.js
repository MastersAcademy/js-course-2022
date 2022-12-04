const firstNumber = 20;
const secondNumber = 22;
const operator = '+';

if (operator === '+') {
    const resultAddition = firstNumber + secondNumber;
    console.log(`firstNumber + secondNumber = ${resultAddition}`);
} else if (operator === '-') {
    const resultSubtraction = firstNumber - secondNumber;
    console.log(`firstNumber - secondNumber = ${resultSubtraction}`);
} else if (operator === '*') {
    const resultMultiplication = firstNumber * secondNumber;
    console.log(`firstNumber * secondNumber = ${resultMultiplication}`);
} else if (operator === '/') {
    const resultDivision = firstNumber / secondNumber;
    console.log(`firstNumber / secondNumber = ${resultDivision}`);
} else { console.log(`The operation${operator} isn't supported`); }
