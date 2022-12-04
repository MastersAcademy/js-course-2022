const firstNumber = 20;
const secondNumber = 22;
const operator = '+';

switch (operator) {
    case '+':
        const resultAddition = firstNumber + secondNumber;
        console.log(`firstNumber + secondNumber = ${resultAddition}`);
        break;
    case '-':
        const resultSubtraction = firstNumber - secondNumber;
        console.log(`firstNumber + secondNumber = ${resultSubtraction}`);
        break;
    case '*':
        const resultMultiplication = firstNumber * secondNumber;
        console.log(`firstNumber + secondNumber = ${resultMultiplication}`);
        break;
    case '/':
        const resultDivision = firstNumber / secondNumber;
        console.log(`firstNumber + secondNumber = ${resultDivision}`);
        break;
    default:

        console.log(`The operation ${operator} isn't supported`);
        break;
}
