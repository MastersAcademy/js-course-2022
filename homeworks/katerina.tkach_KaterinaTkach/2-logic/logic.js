// const firstNumber = 20;
// const secondNumber = 22;
// const operationMultiply = '*';
// const operationPlus = '+';
// const operationMinus = '-';
// const operationDivide = '/';
//
// if (operationMultiply  === '*') {
//     console.log('множення', firstNumber * secondNumber);
// } else if (operationMultiply  === '+') {
//     console.log('додавання', firstNumber + secondNumber);
// }
//
// if (operationPlus === '+') {
//     console.log('додавання', firstNumber + secondNumber);
// } else if (operationPlus === '-') {
//     console.log('віднімання', firstNumber - secondNumber);
// }
// if (operationMinus === '-') {
//     console.log('віднімання', firstNumber - secondNumber);
// } else if (operationPlus === '-') {
//     console.log('ділення', firstNumber / secondNumber);
// }
// if (operationDivide === '/') {
//     console.log('ділення', firstNumber / secondNumber);
// } else if (operationDivide === '-') {
//     console.log('множення', firstNumber * secondNumber);
// }
// switch-case

const firstNumber = 20;
const secondNumber = 22;
const operation = '/';
// eslint-disable-next-line default-case
switch (operation) {
    case '*':
        console.log('множення', firstNumber * secondNumber);
        break;
    case '+':
        console.log('додавання', firstNumber + secondNumber);
        break;
    case '-':
        console.log('віднімання', firstNumber - secondNumber);
        break;
    case '/':
        console.log('ділення', firstNumber / secondNumber);
        break;
}
