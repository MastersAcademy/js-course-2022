const firstNumber = 20;
const secondNumber = 22;
const operation = '+';

const notSupportedMessage = `Operation '${operation}' is not yet supported, sorry!`;

console.log(`Calculating ${firstNumber} ${operation} ${secondNumber} using if statement:`);

if (operation === '+') {
    console.log(firstNumber + secondNumber);
} else if (operation === '-') {
    console.log(firstNumber - secondNumber);
} else if (operation === '*') {
    console.log(firstNumber * secondNumber);
} else if (operation === '/') {
    console.log(firstNumber / secondNumber);
} else {
    console.log(notSupportedMessage);
}

console.log(`Calculating ${firstNumber} ${operation} ${secondNumber} using switch statement:`);

switch (operation) {
    case '+':
        console.log(firstNumber + secondNumber);
        break;
    case '-':
        console.log(firstNumber - secondNumber);
        break;
    case '*':
        console.log(firstNumber * secondNumber);
        break;
    case '/':
        console.log(firstNumber / secondNumber);
        break;
    default:
        console.log(notSupportedMessage);
}
