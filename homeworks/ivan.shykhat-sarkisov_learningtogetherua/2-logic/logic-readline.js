// Третій варіант з запитом на введення

const readlineSync = require('readline-sync');

let usersFirstNumber = readlineSync.questionInt('Input first operand ');
let usersSecondNumber = readlineSync.questionInt('Input first operand ');
let usersOperation = readlineSync.question('Input operation ');

let resultOfOperation = 0;

switch (usersOperation) {
    case '*':
        resultOfOperation = usersFirstNumber * usersSecondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    case '/':
        resultOfOperation = usersFirstNumber / usersSecondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    case '+':
        resultOfOperation = usersFirstNumber + usersSecondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    case '-':
        resultOfOperation = usersFirstNumber - usersSecondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    case '%':
        resultOfOperation = usersFirstNumber % usersSecondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    case '**':
        resultOfOperation = usersFirstNumber ** usersSecondNumber;
        console.log(`Результат обраної операції: ${resultOfOperation}`);
        break;
    default:
        console.log('Обрано відсутній оператор');
}
