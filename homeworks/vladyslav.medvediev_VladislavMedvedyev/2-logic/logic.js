const firstNumber = 20;
const secondNumber = 22;
const operation = '*';

function calc() {
    switch (operation) {
        case '*':
            console.log(firstNumber * secondNumber);
            break;
        case '/':
            console.log(firstNumber / secondNumber);
            break;
        case '+':
            console.log(firstNumber + secondNumber);
            break;
        case '-':
            console.log(firstNumber - secondNumber);
            break;
        case '%':
            console.log(firstNumber % secondNumber);
            break;
        default:
            console.log('const operation is not valid');
    }
}

calc();
