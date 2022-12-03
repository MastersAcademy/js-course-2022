const firstNumber = Math.round(Math.random() * 10);
const secondNumber = Math.round(Math.random() * 20);
const firstOperator = '*';
const secondOperator = '+';

if (firstOperator === '*') {
    console.log(`multiplication result: ${firstNumber * secondNumber}`);
} else if (firstOperator === '/') {
    console.log(`division result: ${firstNumber / secondNumber}`);
} else if (firstOperator === '+') {
    console.log(`addition result: ${firstNumber + secondNumber}`);
} else if (firstOperator === '-') {
    console.log(`subtraction result: ${firstNumber - secondNumber}`);
} else {
    console.log('Error');
}

switch (secondOperator) {
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
