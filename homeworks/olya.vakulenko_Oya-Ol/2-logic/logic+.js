const firstNumber = 20;
const secondNumber = 22;
const operation = '%';

let result;

switch (operation) {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        result = firstNumber / secondNumber;
        break;
    case '%':
        result = firstNumber % secondNumber;
        break;
    default:
        console.log('Please, try again!');
        break;
}

console.log(result);
