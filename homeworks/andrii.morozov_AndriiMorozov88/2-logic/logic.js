const readline = require('readline');

const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
readLineInterface.question('Input firstNumber: ', (first) => {
    const firstNumber = Number(first);
    readLineInterface.question('Input operation: ', (mathOperation) => {
        const operation = mathOperation;
        readLineInterface.question('Input secondNumber: ', (second) => {
            const secondNumber = Number(second);
            readLineInterface.close();
            console.log('Switch-Case:');
            switch (operation) {
                case '*':
                    console.log(firstNumber * secondNumber);
                    break;
                case '+':
                    console.log(firstNumber + secondNumber);
                    break;
                case '-':
                    console.log(firstNumber - secondNumber);
                    break;
                case '/':
                    console.log(firstNumber / secondNumber);
                    break;
                default:
                    console.log('No result');
                    break;
            }
            console.log('If-Else');
            if (operation === '*') {
                console.log(firstNumber * secondNumber);
            } else if (operation === '/') {
                console.log(firstNumber / secondNumber);
            } else if (operation === '+') {
                console.log(firstNumber + secondNumber);
            } else if (operation === '-') {
                console.log(firstNumber - secondNumber);
            } else {
                console.log('No result');
            }
        });
    });
});
