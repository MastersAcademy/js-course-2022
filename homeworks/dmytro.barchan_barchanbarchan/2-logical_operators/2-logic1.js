const firstNumber = 20;
const secondNumber = 22;
const operator = '+';

const resultAddition = firstNumber + secondNumber;
const resultSubtraction = firstNumber - secondNumber;
const resultMultiplication = firstNumber * secondNumber;
const resultDivision = firstNumber / secondNumber;

switch (operator) {
    case '+':
        console.log(`firstNumber + secondNumber = ${resultAddition}`);
        break;
    case '-':
        console.log(`firstNumber + secondNumber = ${resultSubtraction}`);
        break;
    case '*':
        console.log(`firstNumber + secondNumber = ${resultMultiplication}`);
        break;
    case '/':
        console.log(`firstNumber + secondNumber = ${resultDivision}`);
        break;
    default:
        console.log(`The operation ${operator} isn't supported`);
        break;
}
