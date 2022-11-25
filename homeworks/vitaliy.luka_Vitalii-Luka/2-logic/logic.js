/*
Homework 2 - Logical Operators
*/

const firstNumber = 20;
const secondNumber = 22;
const operation = '*';

// The "if", "else if", "else" statement
if (operation === '+') {
    const additionResult = firstNumber + secondNumber;
    console.log(`(if-else) Addition result: ${additionResult}`);
} else if (operation === '-') {
    const subtractionResult = firstNumber - secondNumber;
    console.log(`(if-else) Subtraction result: ${subtractionResult}`);
} else if (operation === '*') {
    const multiplicationResult = firstNumber * secondNumber;
    console.log(`(if-else) Multiplication result: ${multiplicationResult}`);
} else if (operation === '/') {
    const divisionResult = firstNumber / secondNumber;
    console.log(`(if-else) Division result: ${divisionResult}`);
} else if (operation === '%') {
    const remainderResult = firstNumber % secondNumber;
    console.log(`(if-else) Remainder result: ${remainderResult}`);
} else if (operation === '**') {
    const exponentiationResult = firstNumber ** secondNumber;
    console.log(`(if-else) Exponentiation result: ${exponentiationResult}`);
} else {
    console.log('(if-else) Something went wrong.....');
}

// The "switch" statement
switch (operation) {
    case '*':
        console.log(`(switch) Multiplication result: ${firstNumber * secondNumber}`);
        break;
    case '+':
        console.log(`(switch) Addition result: ${firstNumber + secondNumber}`);
        break;
    case '-':
        console.log(`(switch) Subtraction result: ${firstNumber - secondNumber}`);
        break;
    case '/':
        console.log(`(switch) Division result: ${firstNumber / secondNumber}`);
        break;
    case '%':
        console.log(`(switch) Remainder result: ${firstNumber % secondNumber}`);
        break;
    case '**':
        console.log(`(switch) Exponentiation result: ${firstNumber ** secondNumber}`);
        break;
    default:
        console.log('(switch) Something went wrong.....');
}
