const operandA = 10;
const operandB = 10;
const operator = '+';
let result;

console.log(`Вхідне рівняння ${operandA} ${operator} ${operandB}`);

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
