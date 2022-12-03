const firstNumber = 20;
const secondNumber = 22;
const operation = '*';

switch (operation) {
    case '*':
        console.log('Result of multiply =', firstNumber * secondNumber);
        break;
    case '/':
        console.log('Result of dividing =', firstNumber / secondNumber);
        break;
    case '-':
        console.log('Result of subtraction =', firstNumber - secondNumber);
        break;
    case '+':
        console.log('Result of addition =', firstNumber + secondNumber);
        break;
    case '%':
        console.log('Result of division remainder =', firstNumber % secondNumber);
        break;
    case '**':
        console.log('Result of exponentiation =', firstNumber ** secondNumber);
        break;
    default:
        console.log('Sorry, but this is not an expected, arithmetic operator.');
}
