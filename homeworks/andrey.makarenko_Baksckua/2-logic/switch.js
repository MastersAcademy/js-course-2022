const firstNumber = 8;
const secondNumber = 6;
const operation = '+';

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
        console.log(0);
}
