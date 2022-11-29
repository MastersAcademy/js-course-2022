const firstNumber = 20;
const secondNumber = 22;
const operation = '*';

const calculate = (a, b, operation) => {
    switch (operation) {
        case '+':
            console.log(a + b);
            break;
        case "-":
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;

        default:
            console.log(`Wrong operator! Please change.`);
            break;
    }
};

calculate(firstNumber, secondNumber, operation);
