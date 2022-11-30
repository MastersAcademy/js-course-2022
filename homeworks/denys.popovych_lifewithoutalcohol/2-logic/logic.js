const firstNumber = 20;
const secondNumber = 22;
const operation = '*';
let valueIfCalc = '';
let valueSwitchCalc = '';

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

console.log(`
     Calculated through the conditional operator 'if', 'else if' and value = ${valueIfCalc};
     Calculated through the conditional operator 'switch', 'case' and value = ${valueSwitchCalc};
`);
