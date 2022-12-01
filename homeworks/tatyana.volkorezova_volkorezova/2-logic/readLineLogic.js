const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculation(firstNumber, secondNumber, operation) {
    let result;
    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '%':
            result = firstNumber % secondNumber;
            break;
        case '**':
            result = firstNumber ** secondNumber;
            break;
        default:
            console.log(`Current version of calculator is not support entered operation: ${operation}`);
    }
    return result;
}
console.log('Hello! This is the first version of simple calculator. Enjoy!\n');

readline.question('Please enter the first number: ', (firstInput) => {
    readline.question('Please enter the second number: ', (secondInput) => {
        readline.question('Please enter operation that should be performed between you numbers: ', (thirdInput) => {
            const firstNumReadLine = Number(firstInput);
            const secondNumReadLine = Number(secondInput);
            const operReadLine = thirdInput;

            // call calculation function
            const resultOfCalc = calculation(firstNumReadLine, secondNumReadLine, operReadLine);

            console.log(`\nThe result: ${firstNumReadLine} ${operReadLine} ${secondNumReadLine} = ${resultOfCalc}`);
            readline.close();
        });
    });
});
