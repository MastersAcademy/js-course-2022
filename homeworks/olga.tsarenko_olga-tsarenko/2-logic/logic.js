const firstNumber = 20;
const secondNumber = 22;
const operation = '*';
let result = null;
let calcResult = null;

function testOperation() {
    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        result = firstNumber / secondNumber;
    }
    return result;
}

console.log('result:', testOperation());

// switch case
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
        // no default
}

console.log('result (v2):', result);

// add readline

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please enter the first number : ', (firstNumberCalc) => {
    rl.question('Please enter the second number : ', (secondNumberCalc) => {
        rl.question('Please enter the operator : ', (calcOperator) => {
            switch (calcOperator) {
                case '+':
                    calcResult = (+firstNumberCalc) + (+secondNumberCalc);
                    break;
                case '-':
                    calcResult = (+firstNumberCalc) - (+secondNumberCalc);
                    break;
                case '*':
                    calcResult = (+firstNumberCalc) * (+secondNumberCalc);
                    break;
                case '/':
                    calcResult = (+firstNumberCalc) / (+secondNumberCalc);
                // no default
            }

            console.log('The result is:', calcResult);
            rl.close();
        });
    });
});
