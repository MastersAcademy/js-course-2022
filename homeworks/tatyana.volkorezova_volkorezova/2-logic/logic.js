const firstNumber = 20;
const secondNumber = 22;
const operation = '*';
let result;

// solution using if-else construction
if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '/') {
    result = firstNumber / secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else if (operation === '**') {
    result = firstNumber ** secondNumber;
} else {
    console.log(`Current version of calculator is not support entered operation: ${operation}`);
}
console.log(`The result of calculation using if-else: ${firstNumber} ${operation} ${secondNumber} = ${result}`);

// solution using switch case
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
console.log(`The result of calculation using switch case: ${firstNumber} ${operation} ${secondNumber} = ${result}`);
