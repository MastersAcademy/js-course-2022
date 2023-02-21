const firstNumber = 20;
const secondNumber = 22;
const operation = '*';

switch (operation) {
    case '*':
        console.log(`Multiplication: ${firstNumber * secondNumber}`);
        break;
    case '/':
        console.log(`Subtraction: ${firstNumber / secondNumber}`);
        break;
    case '+':
        console.log(`Addition: ${firstNumber / secondNumber}`);
        break;
    case '-':
        console.log(`Division: ${firstNumber - secondNumber}`);
        break;
    case '%':
        console.log(`Remainder of division: ${firstNumber % secondNumber}`);
        break;
    case '**':
        console.log(`Exponentiation: ${firstNumber ** secondNumber}`);
        break;
    default:
        console.log('Wrong opertor!');
}

if (operation === '*') {
    console.log(`Multiplication: ${firstNumber * secondNumber}`);
} else if (operation === '/') {
    console.log(`Subtraction: ${firstNumber / secondNumber}`);
} else if (operation === '+') {
    console.log(`Addition: ${firstNumber / secondNumber}`);
} else if (operation === '-') {
    console.log(`Division: ${firstNumber - secondNumber}`);
} else if (operation === '%') {
    console.log(`Remainder of division: ${firstNumber % secondNumber}`);
} else if (operation === '**') {
    console.log(`Exponentiation: ${firstNumber ** secondNumber}`);
} else {
    console.log('Wrong operator!');
}
