let firstNumber = '';
let secondNumber = '';
let operation = '*';
let valueIfCalc = '';
let valueSwitchCalc = '';

function calculateByIfElse() {
    if (operation === '+') {
        valueIfCalc = firstNumber + secondNumber;
    } else if (operation === '-') {
        valueIfCalc = firstNumber - secondNumber;
    } else if (operation === '*') {
        valueIfCalc = firstNumber * secondNumber;
    } else if (operation === '/') {
        valueIfCalc = firstNumber / secondNumber;
    } else if (operation === '**') {
        valueIfCalc = firstNumber ** secondNumber;
    } else if (operation === '%') {
        valueIfCalc = firstNumber % secondNumber;
    }
    console.log(`Calculated through the conditional operator 'if', 'else if' and value = ${valueIfCalc}`);
    return valueIfCalc;
}
function calculateBySwitchCase() {
    switch (operation) {
        case '+':
            valueSwitchCalc = firstNumber + secondNumber;
            break;
        case '-':
            valueSwitchCalc = firstNumber - secondNumber;
            break;
        case '*':
            valueSwitchCalc = firstNumber * secondNumber;
            break;
        case '/':
            valueSwitchCalc = firstNumber / secondNumber;
            break;
        case '**':
            valueSwitchCalc = firstNumber ** secondNumber;
            break;
        case '%':
            valueSwitchCalc = firstNumber % secondNumber;
            break;
        default:
            break;
    }
    console.log(`Calculated through the conditional operator 'switch', 'case' and value = ${valueSwitchCalc}`);
    return valueSwitchCalc;
}

function onErr(err) {
    console.log(err);
    return 1;
}
const prompt = require('prompt');

prompt.start();

prompt.get(['firstNumber', 'secondNumber', 'operation'], (err, result) => {
    if (err) {
        return onErr(err);
    }
    firstNumber = result.firstNumber;
    secondNumber = result.secondNumber;
    operation = result.operation;
    calculateByIfElse();
    calculateBySwitchCase();
    return {
        valueIfCalc,
        valueSwitchCalc,
    };
});
