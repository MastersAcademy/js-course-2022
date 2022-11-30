const readline = require('readline');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
rl.question('Input firstNumbe: ', (first) => {
    let firstNumber = first;
    rl.question('Input secondNumber: ', (second) => {
        let secondNumber = second;
        rl.question('Operation: ', (oper) => {
            let operation = oper;
            rl.close();
            console.log('Switch-Case:');
            switch (operation) {
                case '*':
                    console.log(Number(firstNumber) * Number(secondNumber));
                    break;
                case '+':
                    console.log(Number(firstNumber) + Number(secondNumber));
                    break;
                case '-':
                    console.log(Number(firstNumber) - Number(secondNumber));
                    break;
                case '/':
                    console.log(Number(firstNumber) / Number(secondNumber));
                    break;
                default:
                    console.log('No result');
                    break;
            }
            console.log('If-Else');
            if (operation === '*') {
                console.log(Number(firstNumber) * Number(secondNumber));
            } else if (operation === '/') {
                console.log(Number(firstNumber) / Number(secondNumber));
            } else if (operation === '+') {
                console.log(Number(firstNumber) + Number(secondNumber));
            } else if (operation === '-') {
                console.log(Number(firstNumber) - Number(secondNumber));
            } else {
                console.log('No result');
            }   
        });
    });
});