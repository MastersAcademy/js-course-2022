const firstNumber = 20;
const secondNumber = 22;
const operation = '&';
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
        console.log('No result');
        break;
}

if (operation === '*') {
    console.log(firstNumber * secondNumber);
} else if (operation === '/') {
    console.log(firstNumber / secondNumber);
} else if (operation === '+') {
    console.log(firstNumber + secondNumber);
} else if (operation === '-') {
    console.log(firstNumber - secondNumber);
} else {
    console.log('No result');
}
