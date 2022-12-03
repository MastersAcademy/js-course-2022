const firstNumber = 20;
const secondNumber = 22;
const operation = '0';
// логіка яка буде перевіряти оператор і на основі нього рахувати результат
if (operation === '*') {
    console.log(`result multiplication operator: ${firstNumber * secondNumber}`);
} else if (operation === '+') {
    console.log(`result addition operator: ${firstNumber + secondNumber}`);
} else if (operation === '-') {
    console.log(`result subtraction operator: ${firstNumber - secondNumber}`);
} else if (operation === '/') {
    console.log(`result division operator: ${firstNumber / secondNumber}`);
} else {
    console.log('Wrong operator!!');
}
// Переробіть if-else конструкцію на switch-case
switch (operation) {
    case '*':
        console.log(`switch result multiplication operation: ${firstNumber * secondNumber}`);
        break;
    case '+':
        console.log(`switch result addition operator: ${firstNumber + secondNumber}`);
        break;
    case '-':
        console.log(`switch result subtraction operator: ${firstNumber - secondNumber}`);
        break;
    case '/':
        console.log(`switch result division operator: ${firstNumber / secondNumber}`);
        break;
    default: console.log('Wrong operator!');
        console.log('select the operator: +, - , * , / .');
}
