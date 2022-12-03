const firstNumber = 20;
const secondNumber = 22;
const operation = '*';

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
    case '%':
        console.log(firstNumber % secondNumber);
        break;
    case '**':
        console.log(firstNumber ** secondNumber);
        break;
    default:
        console.log('Oops you didn`t write operator');
}
