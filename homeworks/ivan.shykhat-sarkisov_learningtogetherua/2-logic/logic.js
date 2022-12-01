const firstNumber = 20;
const secondNumber = 22;
const operation = '*';
// const operation = '/';
// const operation = '+';
// const operation = '-';
// const operation = '%';
// const operation = '**';

// Перший варіант - під окремі значення змінної operation
if (operation === '*') {
    const result = firstNumber * secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else if (operation === '/') {
    const result = firstNumber / secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else if (operation === '+') {
    const result = firstNumber + secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else if (operation === '-') {
    const result = firstNumber - secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else if (operation === '%') {
    const result = firstNumber % secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else if (operation === '**') {
    const result = firstNumber ** secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else {
    console.log(`Обрано відсутній оператор`);
}

// Другий варіант з використанням switch-case
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
        console.log(`Обрано відсутній оператор`);
}
