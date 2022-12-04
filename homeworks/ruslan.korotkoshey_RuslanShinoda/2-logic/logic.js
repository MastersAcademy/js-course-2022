const firstNumber = 20;
const secondNumber = 22;
const operator = '*';
let resultIfStatement;

if (operator === '+') {
    resultIfStatement = firstNumber + secondNumber;
} else if (operator === '-') {
    resultIfStatement = firstNumber - secondNumber;
} else if (operator === '*') {
    resultIfStatement = firstNumber * secondNumber;
} else if (operator === '/') {
    resultIfStatement = firstNumber / secondNumber;
} else if (operator === '%') {
    resultIfStatement = firstNumber % secondNumber;
} else if (operator === '**') {
    resultIfStatement = firstNumber ** secondNumber;
} else {
    console.log('Error');
}

console.log(resultIfStatement);

let resultSwitchStatement;

switch (operator) {
    case '+':
        resultSwitchStatement = firstNumber + secondNumber;
        break;
    case '-':
        resultSwitchStatement = firstNumber - secondNumber;
        break;
    case '*':
        resultSwitchStatement = firstNumber * secondNumber;
        break;
    case '/':
        resultSwitchStatement = firstNumber / secondNumber;
        break;
    case '%':
        resultSwitchStatement = firstNumber % secondNumber;
        break;
    case '**':
        resultSwitchStatement = firstNumber ** secondNumber;
        break;
    default:
        console.log('Error');
        break;
}

console.log(resultSwitchStatement);
