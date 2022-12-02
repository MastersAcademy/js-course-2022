const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let firstNumber;
let secondNumber;
let operation;

rl.question('Enter the first number ', (answer1) => {
    rl.question('Enter the second number ', (answer2) => {
        rl.question('Enter the operation ', (answer3) => {
            firstNumber = Number(answer1);
            secondNumber = Number(answer2);
            operation = answer3;
            rl.close();
        });
    });
});

function checkEnteredNumbers() {
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        console.log('Please enter correct value of numbers');
    } else {
        console.log(`You enter: first number is ${firstNumber}, second number is ${secondNumber}`);
    }
}

checkEnteredNumbers();

function calc() {
    switch (operation) {
        case '*':
            console.log(firstNumber * secondNumber);
            break;
        case '/':
            console.log(firstNumber / secondNumber);
            break;
        case '+':
            console.log(firstNumber + secondNumber);
            break;
        case '-':
            console.log(firstNumber - secondNumber);
            break;
        case '%':
            console.log(firstNumber % secondNumber);
            break;
        case '**':
            console.log(firstNumber ** secondNumber);
            break;
        default:
            console.log('Please enter correct value of operation (it can be "+", "-", "*", "/", "%", "**")');
    }
}
calc();
