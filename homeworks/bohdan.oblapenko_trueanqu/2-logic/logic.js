const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter first number: ', (firstNumInput) => {
    rl.question('Enter operation: ', (operation) => {
        rl.question('Enter second number: ', (secondNumInput) => {
            const firstNumber = Number(firstNumInput);
            const secondNumber = Number(secondNumInput);
            const notSupportedMessage = `Operation '${operation}' is not yet supported, sorry!`;

            console.log(`Calculating ${firstNumber} ${operation} ${secondNumber} using if statement:`);

            if (operation === '+') {
                console.log(firstNumber + secondNumber);
            } else if (operation === '-') {
                console.log(firstNumber - secondNumber);
            } else if (operation === '*') {
                console.log(firstNumber * secondNumber);
            } else if (operation === '/') {
                console.log(firstNumber / secondNumber);
            } else {
                console.log(notSupportedMessage);
            }

            console.log(`Calculating ${firstNumber} ${operation} ${secondNumber} using switch statement:`);

            switch (operation) {
                case '+':
                    console.log(firstNumber + secondNumber);
                    break;
                case '-':
                    console.log(firstNumber - secondNumber);
                    break;
                case '*':
                    console.log(firstNumber * secondNumber);
                    break;
                case '/':
                    console.log(firstNumber / secondNumber);
                    break;
                default:
                    console.log(notSupportedMessage);
            }

            rl.close();
        });
    });
});
