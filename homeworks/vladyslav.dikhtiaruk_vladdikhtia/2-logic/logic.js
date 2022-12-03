console.clear();
const firstNumber = 20;
const secondNumber = 22;
const operation = '*';
let result;

console.log('Hello my buddy, you are using my calculator right now!');

if (operation !== '+') {
    if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        result = firstNumber / secondNumber;
    } else if (operation === '%') {
        result = firstNumber % secondNumber;
    } else if (operation === '**') {
        result = firstNumber ** secondNumber;
    }
} else {
    result = firstNumber + secondNumber;
}
console.log('Result =', result);

console.log('I am using switch construction now');

switch (operation) {
    case '+':
        console.log('Result =', firstNumber + secondNumber);
        break;
    case '-':
        console.log('Result =', firstNumber - secondNumber);
        break;
    case '*':
        console.log('Result =', firstNumber * secondNumber);
        break;
    case '/':
        console.log('Result =', firstNumber / secondNumber);
        break;
    case '%':
        console.log('Result =', firstNumber % secondNumber);
        break;
    case '**':
        console.log('Result =', firstNumber ** secondNumber);
        break;
    default:
        console.log('You can use only +, -, *, / , %, **');
}
console.log('have a nice day:)');
