/// вхідні дані для перших трьох калькуляторів :

const operandA = 10;
const operandB = 10;
const operator = '+';

console.log(`Вхідне рівняння ${operandA} ${operator} ${operandB}`);

/// Калькулятор на if / else if :

let result;

if (operator === '+') {
  result = operandA + operandB;
} else if (operator === '-') {
  result = operandA - operandB;
} else if (operator === '*') {
  result = operandA * operandB;
} else if (operator === '/') {
  result = operandA / operandB;
} else if (operator === '**') {
  result = operandA ** operandB;
} else if (operator === '%') {
  result = operandA % operandB;
}
console.log(`Відповідь калькулятора на if / else if : ${result}`);

/// Калькулятор на switch / case :

function switchCaseCalculator() {
  switch (operator) {
    case '*': return operandA * operandB;
    case '/': return operandA / operandB;
    case '+': return operandA + operandB;
    case '-': return operandA - operandB;
    case '**': return operandA ** operandB;
    case '%': return operandA % operandB;
    default: return undefined;
  }
}

console.log(`Відповідь калькулятора на switch / case : ${switchCaseCalculator()}`);

/// Просто фанове рішення :

const calculatorFun = {
  '+': operandA + operandB,
  '-': operandA - operandB,
  '*': operandA * operandB,
  '/': operandA / operandB,
  '**': operandA ** operandB,
  '%': operandA % operandB,
};
console.log(`Відповідь фанового рішення : ${calculatorFun[operator]}`);

/// Завдання з вводом даних користувачем через консоль

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const elementStorage = {
  firstNumber: null,
  secondNumber: null,
  operator: '+',
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
  await askForInput('Перше число : ').then((answer) => {
    if (!validateNumber(answer)) {
      console.error('Неправильні дані!');
      process.exit();
    }
    elementStorage.firstNumber = +answer;
  });
  await askForInput('Оператор : ').then((answer) => {
    if (!validateOperator(answer)) {
      console.error('Неправильні дані!');
      process.exit();
    }
    elementStorage.operator = answer;
  });
  await askForInput('Друге число : ').then((answer) => {
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
  console.log(`Відповідь : ${output}`);
}

runCalculator();
