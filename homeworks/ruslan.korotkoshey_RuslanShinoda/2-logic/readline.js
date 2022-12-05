const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let resultIfStatement;

rl.question('first number: ', (firstNumber) => {
    rl.question('second number: ', (secondNumber) => {
        rl.question('operator: ', (operator) => {
            if (operator === '+') {
                resultIfStatement = +firstNumber + +secondNumber;
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
            }

            console.log(resultIfStatement);
            rl.close();
        });
    });
});
