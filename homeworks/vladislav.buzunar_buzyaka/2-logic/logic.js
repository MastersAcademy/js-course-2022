const firstNumber = 20;
const secondNumber = 22;
const operationMult = '*';
const resultMult = 20 * 22;
const operationDivis = '/';
const resultDivis = 20 / 22;
const operationAddit = '+';
const resultAddit = 20 + 22;
const operationSubtract = '-';
const resultSubtract = 20 - 22;

// If else statement
console.log('If/else statement!!!');

if (operationMult === '*') {
    console.log(`${firstNumber} ${operationMult} ${secondNumber} = ${resultMult}`);
} else if (operationDivis === '/') {
    console.log(`${firstNumber} ${operationDivis} ${secondNumber} = ${resultDivis}`);
} else if (operationAddit === '+') {
    console.log(`${firstNumber} ${operationAddit} ${secondNumber} = ${resultAddit}`);
} else if (operationSubtract === '-') {
    console.log(`${firstNumber} ${operationSubtract} ${secondNumber} = ${resultSubtract}`);
} else {
    console.log('Error...');
}
