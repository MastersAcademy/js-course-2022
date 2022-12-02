// Другий варіант з використанням switch-case

const firstNumber = 20;
const secondNumber = 22;
const operation = '*';
// const operation = '/';
// const operation = '+';
// const operation = '-';
// const operation = '%';
// const operation = '**';

let resultOfOperation = 0;

switch (operation) {
    case '*':
        resultOfOperation = firstNumber * secondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    case '/':
        resultOfOperation = firstNumber / secondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    case '+':
        resultOfOperation = firstNumber + secondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    case '-':
        resultOfOperation = firstNumber - secondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    case '%':
        resultOfOperation = firstNumber % secondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    case '**':
        resultOfOperation = firstNumber ** secondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    default:
        console.log('Обрано відсутній оператор');
}
