const operandA = 10;
const operandB = 10;
const operator = '+';

console.log(`Вхідне рівняння ${operandA} ${operator} ${operandB}`);

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
console.log(`Відповідь : ${result}`);
