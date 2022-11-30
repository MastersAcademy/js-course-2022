/*const firstNumber = 20;
const secondNumber = 22;
const operation = '&';*/
let firstNumber;
const readline = require('readline');
const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
rl.question('Input firstNumbe: ', (data) => {
    let firstNumber = data;
    rl.question('Input secondNumber: ', (data) => {
        let secondNumber = data;
        rl.question('Operation: ', (data) => {
            let operation = data;
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