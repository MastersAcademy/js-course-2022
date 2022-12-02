// Перший варіант - під окремі значення змінної operation

const firstNumber = 20;
const secondNumber = 22;
const operation = '*';
// const operation = '/';
// const operation = '+';
// const operation = '-';
// const operation = '%';
// const operation = '**';

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
    console.log('Обрано відсутній оператор');
}

// Другий варіант з використанням switch-case

// const firstNumber = 20;
// const secondNumber = 22;
// const operation = '*';
// const operation = '/';
// const operation = '+';
// const operation = '-';
// const operation = '%';
// const operation = '**';

// let resultOfOperation = 0;

// switch (operation) {
//     case '*':
//         resultOfOperation = firstNumber * secondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     case '/':
//         resultOfOperation = firstNumber / secondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     case '+':
//         resultOfOperation = firstNumber + secondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     case '-':
//         resultOfOperation = firstNumber - secondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     case '%':
//         resultOfOperation = firstNumber % secondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     case '**':
//         resultOfOperation = firstNumber ** secondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     default:
//         console.log('Обрано відсутній оператор');
// }

// Третій варіант з запитом на введення

// const readlineSync = require('readline-sync');

// let usersFirstNumber = readlineSync.questionInt('Input first operand ');
// let usersSecondNumber = readlineSync.questionInt('Input first operand ');
// let usersOperation = readlineSync.question('Input operation ');

// let resultOfOperation = 0;

// switch (usersOperation) {
//     case '*':
//         resultOfOperation = usersFirstNumber * usersSecondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     case '/':
//         resultOfOperation = usersFirstNumber / usersSecondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     case '+':
//         resultOfOperation = usersFirstNumber + usersSecondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     case '-':
//         resultOfOperation = usersFirstNumber - usersSecondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     case '%':
//         resultOfOperation = usersFirstNumber % usersSecondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     case '**':
//         resultOfOperation = usersFirstNumber ** usersSecondNumber;
//         console.log(`Результат обраної операції: ${resultOfOperation}`);
//         break;
//     default:
//         console.log('Обрано відсутній оператор');
// }
