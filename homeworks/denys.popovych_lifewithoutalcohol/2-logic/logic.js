const firstNumber = '';
const secondNumber = '';
const operation = '*';
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

calculateByIfElse();
calculateBySwitchCase();
