const firstNumber = Math.round(Math.random() * 10);
const secondNumber = Math.round(Math.random() * 20);
const firstOperation = '*';
const secondOperation = '+';

if (firstOperation === '*') {
    console.log(`multiplication result: ${firstNumber * secondNumber}`);
} else if (firstOperation === '/') {
    console.log(`division result: ${firstNumber / secondNumber}`);
} else if (firstOperation === '+') {
    console.log(`addition result: ${firstNumber + secondNumber}`);
} else if (firstOperation === '-') {
    console.log(`subtraction result: ${firstNumber - secondNumber}`);
} else {
    console.log('Error');
}

switch (secondOperation) {
    case '*':
        console.log(`multiplication result: ${firstNumber * secondNumber}`);
        break;
    case '/':
        console.log(`division result: ${firstNumber / secondNumber}`);
        break;
    case '-':
        console.log(`subtraction result: ${firstNumber - secondNumber}`);
        break;
    case '+':
        console.log(`addition result: ${firstNumber + secondNumber}`);
        break;
    default:
        console.log('Error');
}
