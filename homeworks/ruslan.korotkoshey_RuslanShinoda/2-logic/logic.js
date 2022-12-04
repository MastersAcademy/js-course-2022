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
if (resultIfStatement) {
    console.log(resultIfStatement);
}

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
if (resultSwitchStatement) {
    console.log(resultSwitchStatement);
}

let resultReadlineOperations;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Hello, please enter the first number ', (firstNumberCalc) => {
    rl.question('Now enter the second number ', (secondNumberCalc) => {
        rl.question('And finally enter the operator: +, -, *, /, % or ** ', (calcOperator) => {
            switch (calcOperator) {
                case '+':
                    resultReadlineOperations = +firstNumberCalc + +secondNumberCalc;
                    break;
                case '-':
                    resultReadlineOperations = firstNumberCalc - secondNumberCalc;
                    break;
                case '*':
                    resultReadlineOperations = firstNumberCalc * secondNumberCalc;
                    break;
                case '/':
                    resultReadlineOperations = firstNumberCalc / secondNumberCalc;
                    break;
                case '%':
                    resultReadlineOperations = firstNumberCalc % secondNumberCalc;
                    break;
                case '**':
                    resultReadlineOperations = firstNumberCalc ** secondNumberCalc;
                    break;
                default:
                    break;
            }
            if (Number.isInteger(+firstNumberCalc)) {
                if (Number.isInteger(+secondNumberCalc)) {
                    if (calcOperator === '+'
                    || calcOperator === '-'
                    || calcOperator === '/'
                    || calcOperator === '*'
                    || calcOperator === '%'
                    || calcOperator === '**') {
                        console.log(`The result is: ${resultReadlineOperations}`);
                    } else console.log('You did not enter an operator');
                } else {
                    console.log('You did not enter the second number');
                }
            } else {
                console.log('You did not enter the first number');
            }
            rl.close();
        });
    });
});
