const firstNumber = 20;
const secondNumber = 22;
const operation = '5';

const calculate = (a, b, operator) => {
    switch (operator) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;

        default:
            console.log('Wrong operator! Please change.');
            break;
    }
};
const ifElseCalculate = (a, b, operator) => {
    if (operator === '+') {
        console.log(a + b);
    } else if (operator === '-') {
        console.log(a - b);
    } else if (operator === '*') {
        console.log(a * b);
    } else if (operator === '/') {
        console.log(a / b);
    } else {
        console.log('Wrong operator! Please change.');
    }
};
calculate(firstNumber, secondNumber, operation);

ifElseCalculate(firstNumber, secondNumber, operation);
