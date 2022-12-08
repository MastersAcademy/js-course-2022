const operandA = 10;
const operandB = 10;
const operator = '+';

console.log(`Вхідне рівняння ${operandA} ${operator} ${operandB}`);

const calculatorFun = {
    '+': operandA + operandB,
    '-': operandA - operandB,
    '*': operandA * operandB,
    '/': operandA / operandB,
    '**': operandA ** operandB,
    '%': operandA % operandB,
};

console.log(`Відповідь : ${calculatorFun[operator]}`);
