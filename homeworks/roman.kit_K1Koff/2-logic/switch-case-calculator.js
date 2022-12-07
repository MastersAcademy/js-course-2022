const operandA = 10;
const operandB = 10;
const operator = '+';

console.log(`Вхідне рівняння ${operandA} ${operator} ${operandB}`);

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

console.log(`Відповідь : ${switchCaseCalculator()}`);
