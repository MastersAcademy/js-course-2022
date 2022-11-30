// please install readline-sync before program run
const readlineSync = require('readline-sync');

function calculation(firstNumber, secondNumber, operation) {
    let result;
    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '%':
            result = firstNumber % secondNumber;
            break;
        case '**':
            result = firstNumber ** secondNumber;
            break;
        default:
            console.log(`Current version of calculator is not support entered operation: ${operation}`);
    }
    return result;
}
console.log('Hello! This is the first version of simple calculator. Enjoy!\n');

const firstNumberReadLine = readlineSync.question('Please enter the first number: ');
const secondNumberReadLine = readlineSync.question('Please enter the second number: ');
const operationReadLine = readlineSync.question('Please enter operation that should be performed between you numbers: ');
const resOfArithAction = calculation(firstNumberReadLine, secondNumberReadLine, operationReadLine);

console.log(`\nThe result of calculation: ${firstNumberReadLine} ${operationReadLine} ${secondNumberReadLine} = ${resOfArithAction}`);
