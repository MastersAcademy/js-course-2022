const firstNumber = 20;
const secondNumber = 22;
const operation = '*';
function result(params) {
    return console.log(params)
} ;
switch (operation) {
    case '*':
        result(firstNumber * secondNumber);
        break;
    case '/':
        result(firstNumber / secondNumber);
        break;
    case '+':
        result(firstNumber + secondNumber);
        break;
    case '-':
        result(firstNumber - secondNumber);
        break;
    case '**':
        result(firstNumber ** secondNumber);
        break;
    case '%':
        result(firstNumber % secondNumber);
        break;
    default:
        result('Something went wrong');
}
