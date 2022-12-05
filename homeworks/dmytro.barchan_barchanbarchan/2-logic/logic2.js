const firstNumber = 20;
const secondNumber = 22;
const operator = '-';

switch (operator) {
    case '+':
        console.log(`firstNumber + secondNumber = ${firstNumber + secondNumber}`);
        break;
    case '-':
        console.log(`firstNumber + secondNumber = ${firstNumber - secondNumber}`);
        break;
    case '*':
        console.log(`firstNumber + secondNumber = ${firstNumber * secondNumber}`);
        break;
    case '/':
        console.log(`firstNumber + secondNumber = ${firstNumber / secondNumber}`);
        break;
    default:
        console.log(`The operation ${operator} isn't supported`);
}
