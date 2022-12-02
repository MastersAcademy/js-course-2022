const firstNumber = 20;
const secondNumber = 22;
const operation = '*';

if (operation === '*') {
    console.log(firstNumber * secondNumber);
} else if (operation === '+') {
    console.log(firstNumber + secondNumber);
} else if (operation === '-') {
    console.log(firstNumber - secondNumber);
} else if (operation === '/') {
    console.log(firstNumber / secondNumber);
} else {
    console.log('Arithmetic not specified');
}

switch (operation) {
    case '*':
        console.log(firstNumber * secondNumber);
        break;
    case '+':
        console.log(firstNumber + secondNumber);
        break;
    case '-':
        console.log(firstNumber - secondNumber);
        break;
    case '/':
        console.log(firstNumber / secondNumber);
        break;
    default:
        console.log('Arithmetic not specified');
}
