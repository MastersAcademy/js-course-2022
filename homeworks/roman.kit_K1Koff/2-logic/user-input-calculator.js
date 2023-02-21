const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const elementStorage = {
    firstNumber: null,
    secondNumber: null,
    operator: null,
};

function calculateResult() {
    switch (elementStorage.operator) {
        case '*': return elementStorage.firstNumber * elementStorage.secondNumber;
        case '/': return elementStorage.firstNumber / elementStorage.secondNumber;
        case '+': return elementStorage.firstNumber + elementStorage.secondNumber;
        case '-': return elementStorage.firstNumber - elementStorage.secondNumber;
        case '**': return elementStorage.firstNumber ** elementStorage.secondNumber;
        case '%': return elementStorage.firstNumber % elementStorage.secondNumber;
        default: return undefined;
    }
}

function validateOperator(operatorSign) {
    const isOperatorValid = ['+', '-', '*', '/', '%', '**'].includes(operatorSign.trim());
    return isOperatorValid;
}

function validateNumber(number) {
    const isNumberValid = Number.isFinite(+(number.trim()));
    return isNumberValid;
}

function askForInput(partOfTheEquation) {
    return new Promise((resolve) => {
        rl.question(`${partOfTheEquation} `, (answer) => {
            resolve(answer);
        });
    });
}

async function collectAndSaveData() {
    console.log('Введіть дані для обрахунку:');
    await askForInput('Перше число:').then((answer) => {
        if (!validateNumber(answer)) {
            console.error('Неправильні дані!');
            process.exit();
        }
        elementStorage.firstNumber = +answer;
    });
    await askForInput('Оператор:').then((answer) => {
        if (!validateOperator(answer)) {
            console.error('Неправильні дані!');
            process.exit();
        }
        elementStorage.operator = answer;
    });
    await askForInput('Друге число:').then((answer) => {
        if (!validateNumber(answer)) {
            console.error('Неправильні дані!');
            process.exit();
        }
        elementStorage.secondNumber = +answer;
    });
    rl.close();
}

async function runCalculator() {
    await collectAndSaveData();
    const output = calculateResult();
    console.log(`Відповідь: ${output}`);
}

runCalculator();
