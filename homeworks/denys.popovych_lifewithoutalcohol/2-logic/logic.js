const readline = require('readline');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    },
);
let firstNumber = '';
let secondNumber = '';
let operation = '';
let resultByIfElse = '';
let resultBySwitchCase = '';
const availableOperation = ['+', '-', '*', '/', '**', '%'];

function calculateByIfElse() {
    if (operation === '+') {
        resultByIfElse = firstNumber + secondNumber;
    } else if (operation === '-') {
        resultByIfElse = firstNumber - secondNumber;
    } else if (operation === '*') {
        resultByIfElse = firstNumber * secondNumber;
    } else if (operation === '/') {
        resultByIfElse = firstNumber / secondNumber;
    } else if (operation === '**') {
        resultByIfElse = firstNumber ** secondNumber;
    } else if (operation === '%') {
        resultByIfElse = firstNumber % secondNumber;
    }
    console.log(`Calculated through the conditional operator 'if', 'else if' and value = ${resultByIfElse}`);
    return resultByIfElse;
}
function calculateBySwitchCase() {
    switch (operation) {
        case '+':
            resultBySwitchCase = firstNumber + secondNumber;
            break;
        case '-':
            resultBySwitchCase = firstNumber - secondNumber;
            break;
        case '*':
            resultBySwitchCase = firstNumber * secondNumber;
            break;
        case '/':
            resultBySwitchCase = firstNumber / secondNumber;
            break;
        case '**':
            resultBySwitchCase = firstNumber ** secondNumber;
            break;
        case '%':
            resultBySwitchCase = firstNumber % secondNumber;
            break;
        default:
            break;
    }
    console.log(`Calculated through the conditional operator 'switch', 'case' and value = ${resultBySwitchCase}`);
    return resultBySwitchCase;
}

const getOperation = function () {
    rl.question('Enter operation ', (sign) => {
        if (!availableOperation.includes(sign)) {
            console.log('Entered not available operation');
            getOperation();
        } else {
            operation = sign;
            calculateByIfElse();
            calculateBySwitchCase();
            rl.close();
        }
    });
};
const getSecondNumber = function () {
    rl.question('Enter secondNumber ', (num2) => {
        if (!+num2) {
            console.log('Entered not a number, try again');
            getSecondNumber();
        } else {
            secondNumber = +num2;
            getOperation();
        }
    });
};
const getFirstNumber = function () {
    rl.question('Enter firstNumber ', (num1) => {
        if (!+num1) {
            console.log('Entered not a number, try again');
            getFirstNumber();
        } else {
            firstNumber = +num1;

            getSecondNumber();
        }
    });
};

getFirstNumber();
